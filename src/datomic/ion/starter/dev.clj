(ns datomic.ion.starter.dev
  (:require [expound.alpha :as expound]
            [clojure.spec.alpha :as s]
            ))
(comment
  (set! s/*explain-out* (expound/custom-printer {:show-valid-values? false :print-specs? false :theme :figwheel-theme}))

  )

