;; Copyright (c) Cognitect, Inc.
;; All rights reserved.

(ns datomic.ion.starter.http
  (:require
   [datomic.ion.starter :as starter]
   [datomic.ion.starter.edn :as edn]
   [rum.core :as rum]
   [hiccup.core :as h]
   [datomic.ion.starter.start :as start]
   [datomic.ion.lambda.api-gateway :as apigw]))


(defn edn-response
  [body]
  {:status  200
   :headers {"Content-Type" "application/edn"}
   :body    body})

(defn get-items-by-type
  "Web handler that returns info about items matching type."
  [{:keys [headers body]}]
  (let [type (some-> body edn/read)]
    (if (keyword? type)
      (-> (starter/get-db)
          (starter/get-items-by-type type [:inv/sku :inv/size :inv/color])
          edn/write-str
          edn-response)
      {:status 400
       :headers {}
       :body "Expected a request body keyword naming a type"})))

(def get-items-by-type-lambda-proxy
  (apigw/ionize get-items-by-type))

(def todos
  (apigw/ionize start/handler))

(def todo-lambda-handler
  (apigw/ionize start/todo-lambda-handler))


(comment
  (start/todo-lambda-handler
    {:request-method :get
     :uri            "/"
     });; => {:status 200,
;;     :headers {"Content-Type" "text/html"},
;;     :body
;;     "<!doctype html>\n<html>\n    <head>\n        <meta charset=\"UTF-8\">\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\n    </head>\n    <body>\n        <span id=\"app\"><div data-reactroot=\"\"><section id=\"todoapp\"><header id=\"header\"><h1>todos</h1><input type=\"text\" placeholder=\"What needs to be done?\" autoFocus=\"\" value=\"\" class=\"edit\"/></header><section id=\"main\"><ul id=\"todo-list\"></ul></section><footer id=\"footer\"><span id=\"todo-count\"><strong>0</strong> <!-- -->items<!-- --> left</span><ul id=\"filters\"><li><a class=\"selected\">All</a></li><li><a>Active</a></li><li><a>Completed</a></li></ul></footer></section><footer id=\"info\"><p>Double-click to edit a todo</p></footer></div></span>\n        <div style=\"display:none;\" id=\"initial-state\">e30=</div>\n        <script type=\"text/javascript\" src=\"main.js\"></script>\n    </body>\n</html>\n"}


  )

(defn static-html-page
  [_]
  {:status  200
   :headers {"Content-type" "text/html"}
   :body    (h/html
              [:html
               [:body
                [:h1 "hello"]]]
              )})

(def get-static-html-page
  (apigw/ionize static-html-page))
