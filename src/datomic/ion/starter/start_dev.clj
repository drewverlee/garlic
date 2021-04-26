(ns datomic.ion.starter.start-dev
  (:require [clojure.spec.test.alpha :as st]
            [datomic.ion.starter.start :as start]
            [ring.middleware.file :refer [wrap-file]]
            [clojure.java.io :as io]))

(defn -main []
  (st/instrument)
  (.mkdirs (io/file "target" "public"))
  (-> start/handler
      (wrap-file "target/public")
      start/run-server))
