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
