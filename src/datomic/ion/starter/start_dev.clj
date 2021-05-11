(ns datomic.ion.starter.start-dev
  (:require [clojure.spec.test.alpha :as st]
            [expound.alpha :as expound]
            [clojure.spec.alpha :as s]
            [datomic.ion.starter.start :as start]
            [ring.middleware.file :refer [wrap-file]]
            [clojure.java.io :as io]))

(defn -main []
  (st/instrument)
  (set! s/*explain-out* (expound/custom-printer {:show-valid-values? false :print-specs? false :theme :figwheel-theme}))
  (.mkdirs (io/file "target" "public"))
  (-> start/handler
      (wrap-file "target/public")
      start/run-server))
