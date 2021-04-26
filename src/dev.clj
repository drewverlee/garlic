(ns dev
  (:require
   [figwheel.main :as figwheel]
   ;;TODO replace with our start 
   [datomic.ion.starter.start-dev :refer [-main]]))

(comment
  (-main)

  (future
    (figwheel/-main "--build" "dev"))

  
  )

