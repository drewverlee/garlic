(ns datomic.ion.starter.start
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.session :refer [wrap-session]]
            [ring.middleware.content-type :refer [wrap-content-type]]
            [ring.middleware.gzip :refer [wrap-gzip]]
            [ring.util.request :refer [body-string]]
            [ring.util.response :refer [not-found]]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.edn :as edn]
            [clojure.data.codec.base64 :as base64]
            [rum.core :as rum]
            [odoyle.rum :as orum]
            [datomic.ion.starter.core :as c]
            [datomic.client.api :as datomic]
            [datomic.ion.starter :as ds])
  (:gen-class))

(def port 3000)

(defn page [initial-state]
  (binding [;; this binding causes the new matches triggered by `insert-all-todos`
            ;; to be stored locally, so they don't affect other users
            ;; that happen to be requesting this route at the same time
            orum/*matches* (volatile! {})]
    ;; if there are any todos in the user's ring session,
    ;; insert them into the o'doyle session.
    ;; we are only doing this for side-effects.
    ;; temp remove maybe just do todo app?
    (c/insert-all-todos c/initial-session (:all-todos initial-state))
    ;; render the html
    (-> "template.html" io/resource slurp
        (str/replace "{{content}}" (rum/render-html (c/app-root nil)))
        ;; save the todos in a hidden div that the client can read when it loads
        ;; we are using base64 to prevent breakage (i.e. if a todo contains angle brackets)
        (str/replace "{{initial-state}}" (-> (pr-str initial-state)
                                             (.getBytes "UTF-8")
                                             base64/encode
                                             (String. "UTF-8"))))))


(comment
  (def cfg (-> "datomic/ion/starter/config.edn" io/resource slurp edn/read-string))

  (def client (datomic/client cfg))

  (datomic/create-database client {:db-name "todos"} )

  (def conn (datomic/connect client {:db-name "todos"}))


  (datomic/transact conn {:tx-data [{:db/ident       ::c/text
                                     :db/valueType   :db.type/string
                                     :db/cardinality :db.cardinality/one}

                                    {:db/ident       ::c/done
                                     :db/valueType   :db.type/boolean
                                     :db/cardinality :db.cardinality/one}

                                    {:db/ident       ::c/todo
                                     :db/valueType   :db.type/ref
                                     :db/cardinality :db.cardinality/many}

                                    {:db/ident       ::c/todos
                                     :db/valueType   :db.type/ref
                                     :db/cardinality :db.cardinality/many}

                                    {:db/ident       ::c/next-id
                                     :db/valueType   :db.type/long
                                     :db/cardinality :db.cardinality/one}

                                    ]})

  {::c/todos [{::c/text "fix everything!" ::c/done false}]}

  (datomic/transact conn {:tx-data [
                                    {:db/ident       ::c/all-todos
                                     :db/valueType   :db.type/ref
                                     :db/cardinality :db.cardinality/many}
                                    ]})

  (datomic/transact conn {:tx-data
                          [{:db/id 1 ::c/text "do everything" ::c/done false}
                           {::c/all-todos [{:db/id 1}]}
                           ]})

  (def db (datomic/db conn))

  (datomic/pull db '[{::c/all-todos [*]}] 101155069755471)

  ;; => #:datomic.ion.starter.core{:all-todos
;;                               [{:db/id 1,
;;                                 :db/ident :db/add,
;;                                 :db/doc
;;                                 "Primitive assertion. All transactions eventually reduce to a collection of primitive assertions and retractions of facts, e.g. [:db/add fred :age 42].",
;;                                 :datomic.ion.starter.core/text "do everything",
;;                                 :datomic.ion.starter.core/done false}]}



  ;; => {:db/id 101155069755471,
;;     :datomic.ion.starter.core/all-todos [#:db{:id 1, :ident :db/add}]}



  (datomic/q '[:find ?e
               :where [?e ::c/all-todos ?at]
               ]
             db);; => [[101155069755471]]




  (c/insert-all-todos c/initial-session [])



  )



(defmulti handler (juxt :request-method :uri))

(defmethod handler [:get "/"]
  [request]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    (page (:session request))})

(defmethod handler [:post "/all-todos"]
  [request]
  {:status  200
   :session (assoc (:session request) :all-todos
                   (edn/read-string (body-string request)))})

(defmethod handler :default
  [_]
  (not-found "Page not found"))


(def todo-lambda-handler
  (-> handler
      (wrap-resource "public")
      wrap-session
      wrap-content-type
      wrap-gzip))




(defn run-server [handler-fn]
  (run-jetty (-> handler-fn
                 (wrap-resource "public")
                 wrap-session
                 wrap-content-type
                 wrap-gzip)
             {:port port :join? false})
  (println (str "Started server on http://localhost:" port)))

(defn -main [_]
  (run-server handler))

