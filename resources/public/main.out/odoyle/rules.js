// Compiled by ClojureScript 1.10.764 {}
goog.provide('odoyle.rules');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('expound.alpha');
goog.require('clojure.string');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),cljs.core.qualified_keyword_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","what-id","odoyle.rules/what-id",2144859883),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","what-attr","odoyle.rules/what-attr",-910390258),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","what-value","odoyle.rules/what-value",686747135),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","then","odoyle.rules/then",-1718183049),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"func","func",-238706040)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean_QMARK_,cljs.core.symbol_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","what-opts","odoyle.rules/what-opts",-560170096),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","then","odoyle.rules/then",-1718183049)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","then","odoyle.rules/then",-1718183049)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__22461){
return cljs.core.map_QMARK_.call(null,G__22461);
})], null),(function (G__22461){
return cljs.core.map_QMARK_.call(null,G__22461);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"then","then",460598070)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","then","odoyle.rules/then",-1718183049)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","what-tuple","odoyle.rules/what-tuple",1770082957),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("odoyle.rules","what-id","odoyle.rules/what-id",2144859883),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("odoyle.rules","what-attr","odoyle.rules/what-attr",-910390258),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("odoyle.rules","what-value","odoyle.rules/what-value",686747135),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("odoyle.rules","what-opts","odoyle.rules/what-opts",-560170096))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"opts","opts",155075701)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","what-id","odoyle.rules/what-id",2144859883),new cljs.core.Keyword("odoyle.rules","what-attr","odoyle.rules/what-attr",-910390258),new cljs.core.Keyword("odoyle.rules","what-value","odoyle.rules/what-value",686747135),cljs.spec.alpha.maybe_impl.call(null,new cljs.core.Keyword("odoyle.rules","what-opts","odoyle.rules/what-opts",-560170096),new cljs.core.Keyword("odoyle.rules","what-opts","odoyle.rules/what-opts",-560170096))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","what-id","odoyle.rules/what-id",2144859883),new cljs.core.Keyword("odoyle.rules","what-attr","odoyle.rules/what-attr",-910390258),new cljs.core.Keyword("odoyle.rules","what-value","odoyle.rules/what-value",686747135),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("odoyle.rules","what-opts","odoyle.rules/what-opts",-560170096))], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","what-block","odoyle.rules/what-block",-1703562649),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"what","what",987290269),"null"], null), null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Keyword("odoyle.rules","what-tuple","odoyle.rules/what-tuple",1770082957)))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"what","what",987290269),null], null), null),cljs.spec.alpha.rep_PLUS_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Keyword("odoyle.rules","what-tuple","odoyle.rules/what-tuple",1770082957)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("odoyle.rules","what-tuple","odoyle.rules/what-tuple",1770082957),new cljs.core.Keyword("odoyle.rules","what-tuple","odoyle.rules/what-tuple",1770082957),null,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"what","what",987290269),"null"], null), null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Keyword("odoyle.rules","what-tuple","odoyle.rules/what-tuple",1770082957)))], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","when-block","odoyle.rules/when-block",147334061),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"when","when",-576417306),"null"], null), null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22462#","p1__22462#",-1843338462,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"p1__22462#","p1__22462#",-1843338462,null)))))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"when","when",-576417306),null], null), null),cljs.spec.alpha.rep_PLUS_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__22462_SHARP_){
return (!((p1__22462_SHARP_ instanceof cljs.core.Keyword)));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"when","when",-576417306),"null"], null), null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22462#","p1__22462#",-1843338462,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"p1__22462#","p1__22462#",-1843338462,null)))))], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","then-block","odoyle.rules/then-block",-823628687),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),"null"], null), null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22463#","p1__22463#",-2041054164,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"p1__22463#","p1__22463#",-2041054164,null)))))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),null], null), null),cljs.spec.alpha.rep_PLUS_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__22463_SHARP_){
return (!((p1__22463_SHARP_ instanceof cljs.core.Keyword)));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),"null"], null), null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22463#","p1__22463#",-2041054164,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"p1__22463#","p1__22463#",-2041054164,null)))))], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","then-finally-block","odoyle.rules/then-finally-block",320513021),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then-finally","then-finally",-107142955),"null"], null), null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22464#","p1__22464#",-589777768,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"p1__22464#","p1__22464#",-589777768,null)))))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then-finally","then-finally",-107142955),null], null), null),cljs.spec.alpha.rep_PLUS_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__22464_SHARP_){
return (!((p1__22464_SHARP_ instanceof cljs.core.Keyword)));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then-finally","then-finally",-107142955),"null"], null), null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22464#","p1__22464#",-589777768,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"p1__22464#","p1__22464#",-589777768,null)))))], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","rule","odoyle.rules/rule",-1507519924),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"what-block","what-block",353706536),new cljs.core.Keyword("odoyle.rules","what-block","odoyle.rules/what-block",-1703562649),new cljs.core.Keyword(null,"when-block","when-block",2141606766),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("odoyle.rules","when-block","odoyle.rules/when-block",147334061)),new cljs.core.Keyword(null,"then-block","then-block",1414126772),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("odoyle.rules","then-block","odoyle.rules/then-block",-823628687)),new cljs.core.Keyword(null,"then-finally-block","then-finally-block",-1728703554),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("odoyle.rules","then-finally-block","odoyle.rules/then-finally-block",320513021))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"what-block","what-block",353706536),new cljs.core.Keyword(null,"when-block","when-block",2141606766),new cljs.core.Keyword(null,"then-block","then-block",1414126772),new cljs.core.Keyword(null,"then-finally-block","then-finally-block",-1728703554)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","what-block","odoyle.rules/what-block",-1703562649),cljs.spec.alpha.maybe_impl.call(null,new cljs.core.Keyword("odoyle.rules","when-block","odoyle.rules/when-block",147334061),new cljs.core.Keyword("odoyle.rules","when-block","odoyle.rules/when-block",147334061)),cljs.spec.alpha.maybe_impl.call(null,new cljs.core.Keyword("odoyle.rules","then-block","odoyle.rules/then-block",-823628687),new cljs.core.Keyword("odoyle.rules","then-block","odoyle.rules/then-block",-823628687)),cljs.spec.alpha.maybe_impl.call(null,new cljs.core.Keyword("odoyle.rules","then-finally-block","odoyle.rules/then-finally-block",320513021),new cljs.core.Keyword("odoyle.rules","then-finally-block","odoyle.rules/then-finally-block",320513021))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","what-block","odoyle.rules/what-block",-1703562649),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("odoyle.rules","when-block","odoyle.rules/when-block",147334061)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("odoyle.rules","then-block","odoyle.rules/then-block",-823628687)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("odoyle.rules","then-finally-block","odoyle.rules/then-finally-block",320513021))], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","rules","odoyle.rules/rules",-1361747037),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),new cljs.core.Keyword("odoyle.rules","rule","odoyle.rules/rule",-1507519924)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),new cljs.core.Keyword("odoyle.rules","rule","odoyle.rules/rule",-1507519924)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),new cljs.core.Keyword("odoyle.rules","rule","odoyle.rules/rule",-1507519924)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_,new cljs.core.Keyword("odoyle.rules","rule","odoyle.rules/rule",-1507519924)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__22465){
return cljs.core.map_QMARK_.call(null,G__22465);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__16537__auto__,v__16538__auto__){
return cljs.core.nth.call(null,v__16538__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),new cljs.core.Keyword("odoyle.rules","rule","odoyle.rules/rule",-1507519924))], null),null));
odoyle.rules.parse = (function odoyle$rules$parse(spec,content){
var res = cljs.spec.alpha.conform.call(null,spec,content);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),res)){
throw cljs.core.ex_info.call(null,expound.alpha.expound_str.call(null,spec,content),cljs.core.PersistentArrayMap.EMPTY);
} else {
return res;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.Fact = (function (id,attr,value,__meta,__extmap,__hash){
this.id = id;
this.attr = attr;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.Fact.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.Fact.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22467,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22471 = k22467;
var G__22471__$1 = (((G__22471 instanceof cljs.core.Keyword))?G__22471.fqn:null);
switch (G__22471__$1) {
case "id":
return self__.id;

break;
case "attr":
return self__.attr;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22467,else__4383__auto__);

}
}));

(odoyle.rules.Fact.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22472){
var vec__22473 = p__22472;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22473,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22473,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.Fact.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.Fact{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(odoyle.rules.Fact.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22466){
var self__ = this;
var G__22466__$1 = this;
return (new cljs.core.RecordIter((0),G__22466__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(odoyle.rules.Fact.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.Fact.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.Fact(self__.id,self__.attr,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Fact.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(odoyle.rules.Fact.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1909491215 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Fact.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22468,other22469){
var self__ = this;
var this22468__$1 = this;
return (((!((other22469 == null)))) && ((this22468__$1.constructor === other22469.constructor)) && (cljs.core._EQ_.call(null,this22468__$1.id,other22469.id)) && (cljs.core._EQ_.call(null,this22468__$1.attr,other22469.attr)) && (cljs.core._EQ_.call(null,this22468__$1.value,other22469.value)) && (cljs.core._EQ_.call(null,this22468__$1.__extmap,other22469.__extmap)));
}));

(odoyle.rules.Fact.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.Fact(self__.id,self__.attr,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.Fact.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22466){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22476 = cljs.core.keyword_identical_QMARK_;
var expr__22477 = k__4388__auto__;
if(cljs.core.truth_(pred__22476.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__22477))){
return (new odoyle.rules.Fact(G__22466,self__.attr,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22476.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__22477))){
return (new odoyle.rules.Fact(self__.id,G__22466,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22476.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__22477))){
return (new odoyle.rules.Fact(self__.id,self__.attr,G__22466,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Fact(self__.id,self__.attr,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22466),null));
}
}
}
}));

(odoyle.rules.Fact.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(odoyle.rules.Fact.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22466){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Fact(self__.id,self__.attr,self__.value,G__22466,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Fact.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.Fact.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(odoyle.rules.Fact.cljs$lang$type = true);

(odoyle.rules.Fact.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/Fact",null,(1),null));
}));

(odoyle.rules.Fact.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"odoyle.rules/Fact");
}));

/**
 * Positional factory function for odoyle.rules/Fact.
 */
odoyle.rules.__GT_Fact = (function odoyle$rules$__GT_Fact(id,attr,value){
return (new odoyle.rules.Fact(id,attr,value,null,null,null));
});

/**
 * Factory function for odoyle.rules/Fact, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_Fact = (function odoyle$rules$map__GT_Fact(G__22470){
var extmap__4419__auto__ = (function (){var G__22479 = cljs.core.dissoc.call(null,G__22470,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__22470)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22479);
} else {
return G__22479;
}
})();
return (new odoyle.rules.Fact(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__22470),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__22470),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__22470),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.Token = (function (fact,kind,old_fact,__meta,__extmap,__hash){
this.fact = fact;
this.kind = kind;
this.old_fact = old_fact;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.Token.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.Token.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22482,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22486 = k22482;
var G__22486__$1 = (((G__22486 instanceof cljs.core.Keyword))?G__22486.fqn:null);
switch (G__22486__$1) {
case "fact":
return self__.fact;

break;
case "kind":
return self__.kind;

break;
case "old-fact":
return self__.old_fact;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22482,else__4383__auto__);

}
}));

(odoyle.rules.Token.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22487){
var vec__22488 = p__22487;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22488,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22488,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.Token.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.Token{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fact","fact",-799816531),self__.fact],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kind","kind",-717265803),self__.kind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"old-fact","old-fact",-2104919404),self__.old_fact],null))], null),self__.__extmap));
}));

(odoyle.rules.Token.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22481){
var self__ = this;
var G__22481__$1 = this;
return (new cljs.core.RecordIter((0),G__22481__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fact","fact",-799816531),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"old-fact","old-fact",-2104919404)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(odoyle.rules.Token.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.Token.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.Token(self__.fact,self__.kind,self__.old_fact,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Token.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(odoyle.rules.Token.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1211839350 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Token.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22483,other22484){
var self__ = this;
var this22483__$1 = this;
return (((!((other22484 == null)))) && ((this22483__$1.constructor === other22484.constructor)) && (cljs.core._EQ_.call(null,this22483__$1.fact,other22484.fact)) && (cljs.core._EQ_.call(null,this22483__$1.kind,other22484.kind)) && (cljs.core._EQ_.call(null,this22483__$1.old_fact,other22484.old_fact)) && (cljs.core._EQ_.call(null,this22483__$1.__extmap,other22484.__extmap)));
}));

(odoyle.rules.Token.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fact","fact",-799816531),null,new cljs.core.Keyword(null,"old-fact","old-fact",-2104919404),null,new cljs.core.Keyword(null,"kind","kind",-717265803),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.Token(self__.fact,self__.kind,self__.old_fact,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.Token.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22481){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22491 = cljs.core.keyword_identical_QMARK_;
var expr__22492 = k__4388__auto__;
if(cljs.core.truth_(pred__22491.call(null,new cljs.core.Keyword(null,"fact","fact",-799816531),expr__22492))){
return (new odoyle.rules.Token(G__22481,self__.kind,self__.old_fact,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22491.call(null,new cljs.core.Keyword(null,"kind","kind",-717265803),expr__22492))){
return (new odoyle.rules.Token(self__.fact,G__22481,self__.old_fact,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22491.call(null,new cljs.core.Keyword(null,"old-fact","old-fact",-2104919404),expr__22492))){
return (new odoyle.rules.Token(self__.fact,self__.kind,G__22481,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Token(self__.fact,self__.kind,self__.old_fact,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22481),null));
}
}
}
}));

(odoyle.rules.Token.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fact","fact",-799816531),self__.fact,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"kind","kind",-717265803),self__.kind,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"old-fact","old-fact",-2104919404),self__.old_fact,null))], null),self__.__extmap));
}));

(odoyle.rules.Token.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22481){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Token(self__.fact,self__.kind,self__.old_fact,G__22481,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Token.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.Token.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fact","fact",840714996,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"old-fact","old-fact",-464387877,null)], null);
}));

(odoyle.rules.Token.cljs$lang$type = true);

(odoyle.rules.Token.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/Token",null,(1),null));
}));

(odoyle.rules.Token.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"odoyle.rules/Token");
}));

/**
 * Positional factory function for odoyle.rules/Token.
 */
odoyle.rules.__GT_Token = (function odoyle$rules$__GT_Token(fact,kind,old_fact){
return (new odoyle.rules.Token(fact,kind,old_fact,null,null,null));
});

/**
 * Factory function for odoyle.rules/Token, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_Token = (function odoyle$rules$map__GT_Token(G__22485){
var extmap__4419__auto__ = (function (){var G__22494 = cljs.core.dissoc.call(null,G__22485,new cljs.core.Keyword(null,"fact","fact",-799816531),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"old-fact","old-fact",-2104919404));
if(cljs.core.record_QMARK_.call(null,G__22485)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22494);
} else {
return G__22494;
}
})();
return (new odoyle.rules.Token(new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(G__22485),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(G__22485),new cljs.core.Keyword(null,"old-fact","old-fact",-2104919404).cljs$core$IFn$_invoke$arity$1(G__22485),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.Binding = (function (field,sym,key,__meta,__extmap,__hash){
this.field = field;
this.sym = sym;
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.Binding.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.Binding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22497,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22501 = k22497;
var G__22501__$1 = (((G__22501 instanceof cljs.core.Keyword))?G__22501.fqn:null);
switch (G__22501__$1) {
case "field":
return self__.field;

break;
case "sym":
return self__.sym;

break;
case "key":
return self__.key;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22497,else__4383__auto__);

}
}));

(odoyle.rules.Binding.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22502){
var vec__22503 = p__22502;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22503,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22503,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.Binding.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.Binding{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"field","field",-1302436500),self__.field],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
}));

(odoyle.rules.Binding.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22496){
var self__ = this;
var G__22496__$1 = this;
return (new cljs.core.RecordIter((0),G__22496__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"key","key",-1516042587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(odoyle.rules.Binding.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.Binding.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.Binding(self__.field,self__.sym,self__.key,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Binding.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(odoyle.rules.Binding.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-364025076 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Binding.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22498,other22499){
var self__ = this;
var this22498__$1 = this;
return (((!((other22499 == null)))) && ((this22498__$1.constructor === other22499.constructor)) && (cljs.core._EQ_.call(null,this22498__$1.field,other22499.field)) && (cljs.core._EQ_.call(null,this22498__$1.sym,other22499.sym)) && (cljs.core._EQ_.call(null,this22498__$1.key,other22499.key)) && (cljs.core._EQ_.call(null,this22498__$1.__extmap,other22499.__extmap)));
}));

(odoyle.rules.Binding.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"field","field",-1302436500),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.Binding(self__.field,self__.sym,self__.key,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.Binding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22496){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22506 = cljs.core.keyword_identical_QMARK_;
var expr__22507 = k__4388__auto__;
if(cljs.core.truth_(pred__22506.call(null,new cljs.core.Keyword(null,"field","field",-1302436500),expr__22507))){
return (new odoyle.rules.Binding(G__22496,self__.sym,self__.key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22506.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__22507))){
return (new odoyle.rules.Binding(self__.field,G__22496,self__.key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22506.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__22507))){
return (new odoyle.rules.Binding(self__.field,self__.sym,G__22496,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Binding(self__.field,self__.sym,self__.key,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22496),null));
}
}
}
}));

(odoyle.rules.Binding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"field","field",-1302436500),self__.field,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null))], null),self__.__extmap));
}));

(odoyle.rules.Binding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22496){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Binding(self__.field,self__.sym,self__.key,G__22496,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Binding.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.Binding.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"field","field",338095027,null),new cljs.core.Symbol(null,"sym","sym",195671222,null),new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(odoyle.rules.Binding.cljs$lang$type = true);

(odoyle.rules.Binding.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/Binding",null,(1),null));
}));

(odoyle.rules.Binding.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"odoyle.rules/Binding");
}));

/**
 * Positional factory function for odoyle.rules/Binding.
 */
odoyle.rules.__GT_Binding = (function odoyle$rules$__GT_Binding(field,sym,key){
return (new odoyle.rules.Binding(field,sym,key,null,null,null));
});

/**
 * Factory function for odoyle.rules/Binding, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_Binding = (function odoyle$rules$map__GT_Binding(G__22500){
var extmap__4419__auto__ = (function (){var G__22509 = cljs.core.dissoc.call(null,G__22500,new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.record_QMARK_.call(null,G__22500)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22509);
} else {
return G__22509;
}
})();
return (new odoyle.rules.Binding(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(G__22500),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__22500),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__22500),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.Match = (function (vars,enabled,__meta,__extmap,__hash){
this.vars = vars;
this.enabled = enabled;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22512,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22516 = k22512;
var G__22516__$1 = (((G__22516 instanceof cljs.core.Keyword))?G__22516.fqn:null);
switch (G__22516__$1) {
case "vars":
return self__.vars;

break;
case "enabled":
return self__.enabled;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22512,else__4383__auto__);

}
}));

(odoyle.rules.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22517){
var vec__22518 = p__22517;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22518,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22518,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.Match{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"enabled","enabled",1195909756),self__.enabled],null))], null),self__.__extmap));
}));

(odoyle.rules.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22511){
var self__ = this;
var G__22511__$1 = this;
return (new cljs.core.RecordIter((0),G__22511__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"enabled","enabled",1195909756)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(odoyle.rules.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.Match(self__.vars,self__.enabled,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(odoyle.rules.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1974248823 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22513,other22514){
var self__ = this;
var this22513__$1 = this;
return (((!((other22514 == null)))) && ((this22513__$1.constructor === other22514.constructor)) && (cljs.core._EQ_.call(null,this22513__$1.vars,other22514.vars)) && (cljs.core._EQ_.call(null,this22513__$1.enabled,other22514.enabled)) && (cljs.core._EQ_.call(null,this22513__$1.__extmap,other22514.__extmap)));
}));

(odoyle.rules.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.Match(self__.vars,self__.enabled,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22511){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22521 = cljs.core.keyword_identical_QMARK_;
var expr__22522 = k__4388__auto__;
if(cljs.core.truth_(pred__22521.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__22522))){
return (new odoyle.rules.Match(G__22511,self__.enabled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22521.call(null,new cljs.core.Keyword(null,"enabled","enabled",1195909756),expr__22522))){
return (new odoyle.rules.Match(self__.vars,G__22511,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Match(self__.vars,self__.enabled,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22511),null));
}
}
}));

(odoyle.rules.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"enabled","enabled",1195909756),self__.enabled,null))], null),self__.__extmap));
}));

(odoyle.rules.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22511){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Match(self__.vars,self__.enabled,G__22511,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"enabled","enabled",-1458526013,null)], null);
}));

(odoyle.rules.Match.cljs$lang$type = true);

(odoyle.rules.Match.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/Match",null,(1),null));
}));

(odoyle.rules.Match.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"odoyle.rules/Match");
}));

/**
 * Positional factory function for odoyle.rules/Match.
 */
odoyle.rules.__GT_Match = (function odoyle$rules$__GT_Match(vars,enabled){
return (new odoyle.rules.Match(vars,enabled,null,null,null));
});

/**
 * Factory function for odoyle.rules/Match, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_Match = (function odoyle$rules$map__GT_Match(G__22515){
var extmap__4419__auto__ = (function (){var G__22524 = cljs.core.dissoc.call(null,G__22515,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"enabled","enabled",1195909756));
if(cljs.core.record_QMARK_.call(null,G__22515)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22524);
} else {
return G__22524;
}
})();
return (new odoyle.rules.Match(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__22515),new cljs.core.Keyword(null,"enabled","enabled",1195909756).cljs$core$IFn$_invoke$arity$1(G__22515),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.AlphaNode = (function (path,test_field,test_value,children,successors,facts,__meta,__extmap,__hash){
this.path = path;
this.test_field = test_field;
this.test_value = test_value;
this.children = children;
this.successors = successors;
this.facts = facts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.AlphaNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22527,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22531 = k22527;
var G__22531__$1 = (((G__22531 instanceof cljs.core.Keyword))?G__22531.fqn:null);
switch (G__22531__$1) {
case "path":
return self__.path;

break;
case "test-field":
return self__.test_field;

break;
case "test-value":
return self__.test_value;

break;
case "children":
return self__.children;

break;
case "successors":
return self__.successors;

break;
case "facts":
return self__.facts;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22527,else__4383__auto__);

}
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22532){
var vec__22533 = p__22532;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22533,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22533,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.AlphaNode{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-field","test-field",1658646589),self__.test_field],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-value","test-value",-824942526),self__.test_value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"successors","successors",-1239296414),self__.successors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"facts","facts",-1734543718),self__.facts],null))], null),self__.__extmap));
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22526){
var self__ = this;
var G__22526__$1 = this;
return (new cljs.core.RecordIter((0),G__22526__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"successors","successors",-1239296414),new cljs.core.Keyword(null,"facts","facts",-1734543718)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,self__.children,self__.successors,self__.facts,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-812066344 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22528,other22529){
var self__ = this;
var this22528__$1 = this;
return (((!((other22529 == null)))) && ((this22528__$1.constructor === other22529.constructor)) && (cljs.core._EQ_.call(null,this22528__$1.path,other22529.path)) && (cljs.core._EQ_.call(null,this22528__$1.test_field,other22529.test_field)) && (cljs.core._EQ_.call(null,this22528__$1.test_value,other22529.test_value)) && (cljs.core._EQ_.call(null,this22528__$1.children,other22529.children)) && (cljs.core._EQ_.call(null,this22528__$1.successors,other22529.successors)) && (cljs.core._EQ_.call(null,this22528__$1.facts,other22529.facts)) && (cljs.core._EQ_.call(null,this22528__$1.__extmap,other22529.__extmap)));
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-value","test-value",-824942526),null,new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"successors","successors",-1239296414),null,new cljs.core.Keyword(null,"facts","facts",-1734543718),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,self__.children,self__.successors,self__.facts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22526){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22536 = cljs.core.keyword_identical_QMARK_;
var expr__22537 = k__4388__auto__;
if(cljs.core.truth_(pred__22536.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__22537))){
return (new odoyle.rules.AlphaNode(G__22526,self__.test_field,self__.test_value,self__.children,self__.successors,self__.facts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22536.call(null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),expr__22537))){
return (new odoyle.rules.AlphaNode(self__.path,G__22526,self__.test_value,self__.children,self__.successors,self__.facts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22536.call(null,new cljs.core.Keyword(null,"test-value","test-value",-824942526),expr__22537))){
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,G__22526,self__.children,self__.successors,self__.facts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22536.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__22537))){
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,G__22526,self__.successors,self__.facts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22536.call(null,new cljs.core.Keyword(null,"successors","successors",-1239296414),expr__22537))){
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,self__.children,G__22526,self__.facts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22536.call(null,new cljs.core.Keyword(null,"facts","facts",-1734543718),expr__22537))){
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,self__.children,self__.successors,G__22526,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,self__.children,self__.successors,self__.facts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22526),null));
}
}
}
}
}
}
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"test-field","test-field",1658646589),self__.test_field,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"test-value","test-value",-824942526),self__.test_value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"successors","successors",-1239296414),self__.successors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"facts","facts",-1734543718),self__.facts,null))], null),self__.__extmap));
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22526){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,self__.children,self__.successors,self__.facts,G__22526,self__.__extmap,self__.__hash));
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.AlphaNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"test-field","test-field",-995789180,null),new cljs.core.Symbol(null,"test-value","test-value",815589001,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"successors","successors",401235113,null),new cljs.core.Symbol(null,"facts","facts",-94012191,null)], null);
}));

(odoyle.rules.AlphaNode.cljs$lang$type = true);

(odoyle.rules.AlphaNode.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/AlphaNode",null,(1),null));
}));

(odoyle.rules.AlphaNode.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"odoyle.rules/AlphaNode");
}));

/**
 * Positional factory function for odoyle.rules/AlphaNode.
 */
odoyle.rules.__GT_AlphaNode = (function odoyle$rules$__GT_AlphaNode(path,test_field,test_value,children,successors,facts){
return (new odoyle.rules.AlphaNode(path,test_field,test_value,children,successors,facts,null,null,null));
});

/**
 * Factory function for odoyle.rules/AlphaNode, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_AlphaNode = (function odoyle$rules$map__GT_AlphaNode(G__22530){
var extmap__4419__auto__ = (function (){var G__22539 = cljs.core.dissoc.call(null,G__22530,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"successors","successors",-1239296414),new cljs.core.Keyword(null,"facts","facts",-1734543718));
if(cljs.core.record_QMARK_.call(null,G__22530)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22539);
} else {
return G__22539;
}
})();
return (new odoyle.rules.AlphaNode(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__22530),new cljs.core.Keyword(null,"test-field","test-field",1658646589).cljs$core$IFn$_invoke$arity$1(G__22530),new cljs.core.Keyword(null,"test-value","test-value",-824942526).cljs$core$IFn$_invoke$arity$1(G__22530),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__22530),new cljs.core.Keyword(null,"successors","successors",-1239296414).cljs$core$IFn$_invoke$arity$1(G__22530),new cljs.core.Keyword(null,"facts","facts",-1734543718).cljs$core$IFn$_invoke$arity$1(G__22530),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.MemoryNode = (function (id,parent_id,child_id,leaf_node_id,condition,matches,when_fn,then_fn,then_finally_fn,trigger,__meta,__extmap,__hash){
this.id = id;
this.parent_id = parent_id;
this.child_id = child_id;
this.leaf_node_id = leaf_node_id;
this.condition = condition;
this.matches = matches;
this.when_fn = when_fn;
this.then_fn = then_fn;
this.then_finally_fn = then_finally_fn;
this.trigger = trigger;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.MemoryNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22542,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22546 = k22542;
var G__22546__$1 = (((G__22546 instanceof cljs.core.Keyword))?G__22546.fqn:null);
switch (G__22546__$1) {
case "id":
return self__.id;

break;
case "parent-id":
return self__.parent_id;

break;
case "child-id":
return self__.child_id;

break;
case "leaf-node-id":
return self__.leaf_node_id;

break;
case "condition":
return self__.condition;

break;
case "matches":
return self__.matches;

break;
case "when-fn":
return self__.when_fn;

break;
case "then-fn":
return self__.then_fn;

break;
case "then-finally-fn":
return self__.then_finally_fn;

break;
case "trigger":
return self__.trigger;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22542,else__4383__auto__);

}
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22547){
var vec__22548 = p__22547;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22548,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22548,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.MemoryNode{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),self__.parent_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"child-id","child-id",1325542429),self__.child_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"leaf-node-id","leaf-node-id",1646532738),self__.leaf_node_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"condition","condition",1668437652),self__.condition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matches","matches",635497998),self__.matches],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),self__.when_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"then-fn","then-fn",368241976),self__.then_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222),self__.then_finally_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trigger","trigger",103466139),self__.trigger],null))], null),self__.__extmap));
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22541){
var self__ = this;
var G__22541__$1 = this;
return (new cljs.core.RecordIter((0),G__22541__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"child-id","child-id",1325542429),new cljs.core.Keyword(null,"leaf-node-id","leaf-node-id",1646532738),new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.Keyword(null,"matches","matches",635497998),new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),new cljs.core.Keyword(null,"then-fn","then-fn",368241976),new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222),new cljs.core.Keyword(null,"trigger","trigger",103466139)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-704209569 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22543,other22544){
var self__ = this;
var this22543__$1 = this;
return (((!((other22544 == null)))) && ((this22543__$1.constructor === other22544.constructor)) && (cljs.core._EQ_.call(null,this22543__$1.id,other22544.id)) && (cljs.core._EQ_.call(null,this22543__$1.parent_id,other22544.parent_id)) && (cljs.core._EQ_.call(null,this22543__$1.child_id,other22544.child_id)) && (cljs.core._EQ_.call(null,this22543__$1.leaf_node_id,other22544.leaf_node_id)) && (cljs.core._EQ_.call(null,this22543__$1.condition,other22544.condition)) && (cljs.core._EQ_.call(null,this22543__$1.matches,other22544.matches)) && (cljs.core._EQ_.call(null,this22543__$1.when_fn,other22544.when_fn)) && (cljs.core._EQ_.call(null,this22543__$1.then_fn,other22544.then_fn)) && (cljs.core._EQ_.call(null,this22543__$1.then_finally_fn,other22544.then_finally_fn)) && (cljs.core._EQ_.call(null,this22543__$1.trigger,other22544.trigger)) && (cljs.core._EQ_.call(null,this22543__$1.__extmap,other22544.__extmap)));
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"leaf-node-id","leaf-node-id",1646532738),null,new cljs.core.Keyword(null,"matches","matches",635497998),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"condition","condition",1668437652),null,new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),null,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),null,new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222),null,new cljs.core.Keyword(null,"then-fn","then-fn",368241976),null,new cljs.core.Keyword(null,"trigger","trigger",103466139),null,new cljs.core.Keyword(null,"child-id","child-id",1325542429),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22541){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22551 = cljs.core.keyword_identical_QMARK_;
var expr__22552 = k__4388__auto__;
if(cljs.core.truth_(pred__22551.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__22552))){
return (new odoyle.rules.MemoryNode(G__22541,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22551.call(null,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),expr__22552))){
return (new odoyle.rules.MemoryNode(self__.id,G__22541,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22551.call(null,new cljs.core.Keyword(null,"child-id","child-id",1325542429),expr__22552))){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,G__22541,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22551.call(null,new cljs.core.Keyword(null,"leaf-node-id","leaf-node-id",1646532738),expr__22552))){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,G__22541,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22551.call(null,new cljs.core.Keyword(null,"condition","condition",1668437652),expr__22552))){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,G__22541,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22551.call(null,new cljs.core.Keyword(null,"matches","matches",635497998),expr__22552))){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,G__22541,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22551.call(null,new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),expr__22552))){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,G__22541,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22551.call(null,new cljs.core.Keyword(null,"then-fn","then-fn",368241976),expr__22552))){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,G__22541,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22551.call(null,new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222),expr__22552))){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,G__22541,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22551.call(null,new cljs.core.Keyword(null,"trigger","trigger",103466139),expr__22552))){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,G__22541,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22541),null));
}
}
}
}
}
}
}
}
}
}
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),self__.parent_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"child-id","child-id",1325542429),self__.child_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"leaf-node-id","leaf-node-id",1646532738),self__.leaf_node_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"condition","condition",1668437652),self__.condition,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"matches","matches",635497998),self__.matches,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),self__.when_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"then-fn","then-fn",368241976),self__.then_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222),self__.then_finally_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trigger","trigger",103466139),self__.trigger,null))], null),self__.__extmap));
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22541){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,G__22541,self__.__extmap,self__.__hash));
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.MemoryNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"parent-id","parent-id",239802396,null),new cljs.core.Symbol(null,"child-id","child-id",-1328893340,null),new cljs.core.Symbol(null,"leaf-node-id","leaf-node-id",-1007903031,null),new cljs.core.Symbol(null,"condition","condition",-985998117,null),new cljs.core.Symbol(null,"matches","matches",-2018937771,null),new cljs.core.Symbol(null,"when-fn","when-fn",1582914556,null),new cljs.core.Symbol(null,"then-fn","then-fn",2008773503,null),new cljs.core.Symbol(null,"then-finally-fn","then-finally-fn",-1060840547,null),new cljs.core.Symbol(null,"trigger","trigger",1743997666,null)], null);
}));

(odoyle.rules.MemoryNode.cljs$lang$type = true);

(odoyle.rules.MemoryNode.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/MemoryNode",null,(1),null));
}));

(odoyle.rules.MemoryNode.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"odoyle.rules/MemoryNode");
}));

/**
 * Positional factory function for odoyle.rules/MemoryNode.
 */
odoyle.rules.__GT_MemoryNode = (function odoyle$rules$__GT_MemoryNode(id,parent_id,child_id,leaf_node_id,condition,matches,when_fn,then_fn,then_finally_fn,trigger){
return (new odoyle.rules.MemoryNode(id,parent_id,child_id,leaf_node_id,condition,matches,when_fn,then_fn,then_finally_fn,trigger,null,null,null));
});

/**
 * Factory function for odoyle.rules/MemoryNode, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_MemoryNode = (function odoyle$rules$map__GT_MemoryNode(G__22545){
var extmap__4419__auto__ = (function (){var G__22554 = cljs.core.dissoc.call(null,G__22545,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"child-id","child-id",1325542429),new cljs.core.Keyword(null,"leaf-node-id","leaf-node-id",1646532738),new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.Keyword(null,"matches","matches",635497998),new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),new cljs.core.Keyword(null,"then-fn","then-fn",368241976),new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222),new cljs.core.Keyword(null,"trigger","trigger",103466139));
if(cljs.core.record_QMARK_.call(null,G__22545)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22554);
} else {
return G__22554;
}
})();
return (new odoyle.rules.MemoryNode(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__22545),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(G__22545),new cljs.core.Keyword(null,"child-id","child-id",1325542429).cljs$core$IFn$_invoke$arity$1(G__22545),new cljs.core.Keyword(null,"leaf-node-id","leaf-node-id",1646532738).cljs$core$IFn$_invoke$arity$1(G__22545),new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(G__22545),new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(G__22545),new cljs.core.Keyword(null,"when-fn","when-fn",-57616971).cljs$core$IFn$_invoke$arity$1(G__22545),new cljs.core.Keyword(null,"then-fn","then-fn",368241976).cljs$core$IFn$_invoke$arity$1(G__22545),new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222).cljs$core$IFn$_invoke$arity$1(G__22545),new cljs.core.Keyword(null,"trigger","trigger",103466139).cljs$core$IFn$_invoke$arity$1(G__22545),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.JoinNode = (function (id,parent_id,child_id,alpha_node_path,condition,id_key,old_id_attrs,disable_fast_updates,__meta,__extmap,__hash){
this.id = id;
this.parent_id = parent_id;
this.child_id = child_id;
this.alpha_node_path = alpha_node_path;
this.condition = condition;
this.id_key = id_key;
this.old_id_attrs = old_id_attrs;
this.disable_fast_updates = disable_fast_updates;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.JoinNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.JoinNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22557,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22561 = k22557;
var G__22561__$1 = (((G__22561 instanceof cljs.core.Keyword))?G__22561.fqn:null);
switch (G__22561__$1) {
case "id":
return self__.id;

break;
case "parent-id":
return self__.parent_id;

break;
case "child-id":
return self__.child_id;

break;
case "alpha-node-path":
return self__.alpha_node_path;

break;
case "condition":
return self__.condition;

break;
case "id-key":
return self__.id_key;

break;
case "old-id-attrs":
return self__.old_id_attrs;

break;
case "disable-fast-updates":
return self__.disable_fast_updates;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22557,else__4383__auto__);

}
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22562){
var vec__22563 = p__22562;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22563,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22563,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.JoinNode{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),self__.parent_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"child-id","child-id",1325542429),self__.child_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alpha-node-path","alpha-node-path",693154678),self__.alpha_node_path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"condition","condition",1668437652),self__.condition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id-key","id-key",-1881730044),self__.id_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"old-id-attrs","old-id-attrs",203904454),self__.old_id_attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"disable-fast-updates","disable-fast-updates",-1739419985),self__.disable_fast_updates],null))], null),self__.__extmap));
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22556){
var self__ = this;
var G__22556__$1 = this;
return (new cljs.core.RecordIter((0),G__22556__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"child-id","child-id",1325542429),new cljs.core.Keyword(null,"alpha-node-path","alpha-node-path",693154678),new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"old-id-attrs","old-id-attrs",203904454),new cljs.core.Keyword(null,"disable-fast-updates","disable-fast-updates",-1739419985)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.JoinNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.JoinNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1611988792 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22558,other22559){
var self__ = this;
var this22558__$1 = this;
return (((!((other22559 == null)))) && ((this22558__$1.constructor === other22559.constructor)) && (cljs.core._EQ_.call(null,this22558__$1.id,other22559.id)) && (cljs.core._EQ_.call(null,this22558__$1.parent_id,other22559.parent_id)) && (cljs.core._EQ_.call(null,this22558__$1.child_id,other22559.child_id)) && (cljs.core._EQ_.call(null,this22558__$1.alpha_node_path,other22559.alpha_node_path)) && (cljs.core._EQ_.call(null,this22558__$1.condition,other22559.condition)) && (cljs.core._EQ_.call(null,this22558__$1.id_key,other22559.id_key)) && (cljs.core._EQ_.call(null,this22558__$1.old_id_attrs,other22559.old_id_attrs)) && (cljs.core._EQ_.call(null,this22558__$1.disable_fast_updates,other22559.disable_fast_updates)) && (cljs.core._EQ_.call(null,this22558__$1.__extmap,other22559.__extmap)));
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id-key","id-key",-1881730044),null,new cljs.core.Keyword(null,"old-id-attrs","old-id-attrs",203904454),null,new cljs.core.Keyword(null,"disable-fast-updates","disable-fast-updates",-1739419985),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"condition","condition",1668437652),null,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),null,new cljs.core.Keyword(null,"alpha-node-path","alpha-node-path",693154678),null,new cljs.core.Keyword(null,"child-id","child-id",1325542429),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22556){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22566 = cljs.core.keyword_identical_QMARK_;
var expr__22567 = k__4388__auto__;
if(cljs.core.truth_(pred__22566.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__22567))){
return (new odoyle.rules.JoinNode(G__22556,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22566.call(null,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),expr__22567))){
return (new odoyle.rules.JoinNode(self__.id,G__22556,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22566.call(null,new cljs.core.Keyword(null,"child-id","child-id",1325542429),expr__22567))){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,G__22556,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22566.call(null,new cljs.core.Keyword(null,"alpha-node-path","alpha-node-path",693154678),expr__22567))){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,G__22556,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22566.call(null,new cljs.core.Keyword(null,"condition","condition",1668437652),expr__22567))){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,G__22556,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22566.call(null,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),expr__22567))){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,G__22556,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22566.call(null,new cljs.core.Keyword(null,"old-id-attrs","old-id-attrs",203904454),expr__22567))){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,G__22556,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22566.call(null,new cljs.core.Keyword(null,"disable-fast-updates","disable-fast-updates",-1739419985),expr__22567))){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,G__22556,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22556),null));
}
}
}
}
}
}
}
}
}));

(odoyle.rules.JoinNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),self__.parent_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"child-id","child-id",1325542429),self__.child_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"alpha-node-path","alpha-node-path",693154678),self__.alpha_node_path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"condition","condition",1668437652),self__.condition,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id-key","id-key",-1881730044),self__.id_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"old-id-attrs","old-id-attrs",203904454),self__.old_id_attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"disable-fast-updates","disable-fast-updates",-1739419985),self__.disable_fast_updates,null))], null),self__.__extmap));
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22556){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,G__22556,self__.__extmap,self__.__hash));
}));

(odoyle.rules.JoinNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.JoinNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"parent-id","parent-id",239802396,null),new cljs.core.Symbol(null,"child-id","child-id",-1328893340,null),new cljs.core.Symbol(null,"alpha-node-path","alpha-node-path",-1961281091,null),new cljs.core.Symbol(null,"condition","condition",-985998117,null),new cljs.core.Symbol(null,"id-key","id-key",-241198517,null),new cljs.core.Symbol(null,"old-id-attrs","old-id-attrs",1844435981,null),new cljs.core.Symbol(null,"disable-fast-updates","disable-fast-updates",-98888458,null)], null);
}));

(odoyle.rules.JoinNode.cljs$lang$type = true);

(odoyle.rules.JoinNode.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/JoinNode",null,(1),null));
}));

(odoyle.rules.JoinNode.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"odoyle.rules/JoinNode");
}));

/**
 * Positional factory function for odoyle.rules/JoinNode.
 */
odoyle.rules.__GT_JoinNode = (function odoyle$rules$__GT_JoinNode(id,parent_id,child_id,alpha_node_path,condition,id_key,old_id_attrs,disable_fast_updates){
return (new odoyle.rules.JoinNode(id,parent_id,child_id,alpha_node_path,condition,id_key,old_id_attrs,disable_fast_updates,null,null,null));
});

/**
 * Factory function for odoyle.rules/JoinNode, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_JoinNode = (function odoyle$rules$map__GT_JoinNode(G__22560){
var extmap__4419__auto__ = (function (){var G__22569 = cljs.core.dissoc.call(null,G__22560,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"child-id","child-id",1325542429),new cljs.core.Keyword(null,"alpha-node-path","alpha-node-path",693154678),new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"old-id-attrs","old-id-attrs",203904454),new cljs.core.Keyword(null,"disable-fast-updates","disable-fast-updates",-1739419985));
if(cljs.core.record_QMARK_.call(null,G__22560)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22569);
} else {
return G__22569;
}
})();
return (new odoyle.rules.JoinNode(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__22560),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(G__22560),new cljs.core.Keyword(null,"child-id","child-id",1325542429).cljs$core$IFn$_invoke$arity$1(G__22560),new cljs.core.Keyword(null,"alpha-node-path","alpha-node-path",693154678).cljs$core$IFn$_invoke$arity$1(G__22560),new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(G__22560),new cljs.core.Keyword(null,"id-key","id-key",-1881730044).cljs$core$IFn$_invoke$arity$1(G__22560),new cljs.core.Keyword(null,"old-id-attrs","old-id-attrs",203904454).cljs$core$IFn$_invoke$arity$1(G__22560),new cljs.core.Keyword(null,"disable-fast-updates","disable-fast-updates",-1739419985).cljs$core$IFn$_invoke$arity$1(G__22560),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.Condition = (function (nodes,bindings,opts,__meta,__extmap,__hash){
this.nodes = nodes;
this.bindings = bindings;
this.opts = opts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.Condition.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.Condition.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22572,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22576 = k22572;
var G__22576__$1 = (((G__22576 instanceof cljs.core.Keyword))?G__22576.fqn:null);
switch (G__22576__$1) {
case "nodes":
return self__.nodes;

break;
case "bindings":
return self__.bindings;

break;
case "opts":
return self__.opts;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22572,else__4383__auto__);

}
}));

(odoyle.rules.Condition.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22577){
var vec__22578 = p__22577;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22578,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22578,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.Condition.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.Condition{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts],null))], null),self__.__extmap));
}));

(odoyle.rules.Condition.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22571){
var self__ = this;
var G__22571__$1 = this;
return (new cljs.core.RecordIter((0),G__22571__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"opts","opts",155075701)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(odoyle.rules.Condition.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.Condition.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.Condition(self__.nodes,self__.bindings,self__.opts,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Condition.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(odoyle.rules.Condition.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-49907947 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Condition.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22573,other22574){
var self__ = this;
var this22573__$1 = this;
return (((!((other22574 == null)))) && ((this22573__$1.constructor === other22574.constructor)) && (cljs.core._EQ_.call(null,this22573__$1.nodes,other22574.nodes)) && (cljs.core._EQ_.call(null,this22573__$1.bindings,other22574.bindings)) && (cljs.core._EQ_.call(null,this22573__$1.opts,other22574.opts)) && (cljs.core._EQ_.call(null,this22573__$1.__extmap,other22574.__extmap)));
}));

(odoyle.rules.Condition.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),null,new cljs.core.Keyword(null,"opts","opts",155075701),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.Condition(self__.nodes,self__.bindings,self__.opts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.Condition.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22571){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22581 = cljs.core.keyword_identical_QMARK_;
var expr__22582 = k__4388__auto__;
if(cljs.core.truth_(pred__22581.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),expr__22582))){
return (new odoyle.rules.Condition(G__22571,self__.bindings,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22581.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__22582))){
return (new odoyle.rules.Condition(self__.nodes,G__22571,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22581.call(null,new cljs.core.Keyword(null,"opts","opts",155075701),expr__22582))){
return (new odoyle.rules.Condition(self__.nodes,self__.bindings,G__22571,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Condition(self__.nodes,self__.bindings,self__.opts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22571),null));
}
}
}
}));

(odoyle.rules.Condition.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,null))], null),self__.__extmap));
}));

(odoyle.rules.Condition.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22571){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Condition(self__.nodes,self__.bindings,self__.opts,G__22571,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Condition.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.Condition.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null);
}));

(odoyle.rules.Condition.cljs$lang$type = true);

(odoyle.rules.Condition.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/Condition",null,(1),null));
}));

(odoyle.rules.Condition.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"odoyle.rules/Condition");
}));

/**
 * Positional factory function for odoyle.rules/Condition.
 */
odoyle.rules.__GT_Condition = (function odoyle$rules$__GT_Condition(nodes,bindings,opts){
return (new odoyle.rules.Condition(nodes,bindings,opts,null,null,null));
});

/**
 * Factory function for odoyle.rules/Condition, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_Condition = (function odoyle$rules$map__GT_Condition(G__22575){
var extmap__4419__auto__ = (function (){var G__22584 = cljs.core.dissoc.call(null,G__22575,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"opts","opts",155075701));
if(cljs.core.record_QMARK_.call(null,G__22575)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22584);
} else {
return G__22584;
}
})();
return (new odoyle.rules.Condition(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(G__22575),new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__22575),new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(G__22575),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.Rule = (function (name,conditions,when_fn,then_fn,then_finally_fn,__meta,__extmap,__hash){
this.name = name;
this.conditions = conditions;
this.when_fn = when_fn;
this.then_fn = then_fn;
this.then_finally_fn = then_finally_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22587,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22591 = k22587;
var G__22591__$1 = (((G__22591 instanceof cljs.core.Keyword))?G__22591.fqn:null);
switch (G__22591__$1) {
case "name":
return self__.name;

break;
case "conditions":
return self__.conditions;

break;
case "when-fn":
return self__.when_fn;

break;
case "then-fn":
return self__.then_fn;

break;
case "then-finally-fn":
return self__.then_finally_fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22587,else__4383__auto__);

}
}));

(odoyle.rules.Rule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22592){
var vec__22593 = p__22592;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22593,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22593,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.Rule{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conditions","conditions",-1647236270),self__.conditions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),self__.when_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"then-fn","then-fn",368241976),self__.then_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222),self__.then_finally_fn],null))], null),self__.__extmap));
}));

(odoyle.rules.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22586){
var self__ = this;
var G__22586__$1 = this;
return (new cljs.core.RecordIter((0),G__22586__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),new cljs.core.Keyword(null,"then-fn","then-fn",368241976),new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(odoyle.rules.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.Rule(self__.name,self__.conditions,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(odoyle.rules.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1587276029 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22588,other22589){
var self__ = this;
var this22588__$1 = this;
return (((!((other22589 == null)))) && ((this22588__$1.constructor === other22589.constructor)) && (cljs.core._EQ_.call(null,this22588__$1.name,other22589.name)) && (cljs.core._EQ_.call(null,this22588__$1.conditions,other22589.conditions)) && (cljs.core._EQ_.call(null,this22588__$1.when_fn,other22589.when_fn)) && (cljs.core._EQ_.call(null,this22588__$1.then_fn,other22589.then_fn)) && (cljs.core._EQ_.call(null,this22588__$1.then_finally_fn,other22589.then_finally_fn)) && (cljs.core._EQ_.call(null,this22588__$1.__extmap,other22589.__extmap)));
}));

(odoyle.rules.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"conditions","conditions",-1647236270),null,new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),null,new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222),null,new cljs.core.Keyword(null,"then-fn","then-fn",368241976),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.Rule(self__.name,self__.conditions,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22586){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22596 = cljs.core.keyword_identical_QMARK_;
var expr__22597 = k__4388__auto__;
if(cljs.core.truth_(pred__22596.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__22597))){
return (new odoyle.rules.Rule(G__22586,self__.conditions,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22596.call(null,new cljs.core.Keyword(null,"conditions","conditions",-1647236270),expr__22597))){
return (new odoyle.rules.Rule(self__.name,G__22586,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22596.call(null,new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),expr__22597))){
return (new odoyle.rules.Rule(self__.name,self__.conditions,G__22586,self__.then_fn,self__.then_finally_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22596.call(null,new cljs.core.Keyword(null,"then-fn","then-fn",368241976),expr__22597))){
return (new odoyle.rules.Rule(self__.name,self__.conditions,self__.when_fn,G__22586,self__.then_finally_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22596.call(null,new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222),expr__22597))){
return (new odoyle.rules.Rule(self__.name,self__.conditions,self__.when_fn,self__.then_fn,G__22586,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Rule(self__.name,self__.conditions,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22586),null));
}
}
}
}
}
}));

(odoyle.rules.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"conditions","conditions",-1647236270),self__.conditions,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),self__.when_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"then-fn","then-fn",368241976),self__.then_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222),self__.then_finally_fn,null))], null),self__.__extmap));
}));

(odoyle.rules.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22586){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Rule(self__.name,self__.conditions,self__.when_fn,self__.then_fn,self__.then_finally_fn,G__22586,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"conditions","conditions",-6704743,null),new cljs.core.Symbol(null,"when-fn","when-fn",1582914556,null),new cljs.core.Symbol(null,"then-fn","then-fn",2008773503,null),new cljs.core.Symbol(null,"then-finally-fn","then-finally-fn",-1060840547,null)], null);
}));

(odoyle.rules.Rule.cljs$lang$type = true);

(odoyle.rules.Rule.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/Rule",null,(1),null));
}));

(odoyle.rules.Rule.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"odoyle.rules/Rule");
}));

/**
 * Positional factory function for odoyle.rules/Rule.
 */
odoyle.rules.__GT_Rule = (function odoyle$rules$__GT_Rule(name,conditions,when_fn,then_fn,then_finally_fn){
return (new odoyle.rules.Rule(name,conditions,when_fn,then_fn,then_finally_fn,null,null,null));
});

/**
 * Factory function for odoyle.rules/Rule, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_Rule = (function odoyle$rules$map__GT_Rule(G__22590){
var extmap__4419__auto__ = (function (){var G__22599 = cljs.core.dissoc.call(null,G__22590,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.Keyword(null,"when-fn","when-fn",-57616971),new cljs.core.Keyword(null,"then-fn","then-fn",368241976),new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222));
if(cljs.core.record_QMARK_.call(null,G__22590)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22599);
} else {
return G__22599;
}
})();
return (new odoyle.rules.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__22590),new cljs.core.Keyword(null,"conditions","conditions",-1647236270).cljs$core$IFn$_invoke$arity$1(G__22590),new cljs.core.Keyword(null,"when-fn","when-fn",-57616971).cljs$core$IFn$_invoke$arity$1(G__22590),new cljs.core.Keyword(null,"then-fn","then-fn",368241976).cljs$core$IFn$_invoke$arity$1(G__22590),new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222).cljs$core$IFn$_invoke$arity$1(G__22590),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.Session = (function (alpha_node,beta_nodes,last_id,rule_name__GT_node_id,node_id__GT_rule_name,id_attr_nodes,then_queue,then_finally_queue,__meta,__extmap,__hash){
this.alpha_node = alpha_node;
this.beta_nodes = beta_nodes;
this.last_id = last_id;
this.rule_name__GT_node_id = rule_name__GT_node_id;
this.node_id__GT_rule_name = node_id__GT_rule_name;
this.id_attr_nodes = id_attr_nodes;
this.then_queue = then_queue;
this.then_finally_queue = then_finally_queue;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.Session.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.Session.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22602,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22606 = k22602;
var G__22606__$1 = (((G__22606 instanceof cljs.core.Keyword))?G__22606.fqn:null);
switch (G__22606__$1) {
case "alpha-node":
return self__.alpha_node;

break;
case "beta-nodes":
return self__.beta_nodes;

break;
case "last-id":
return self__.last_id;

break;
case "rule-name->node-id":
return self__.rule_name__GT_node_id;

break;
case "node-id->rule-name":
return self__.node_id__GT_rule_name;

break;
case "id-attr-nodes":
return self__.id_attr_nodes;

break;
case "then-queue":
return self__.then_queue;

break;
case "then-finally-queue":
return self__.then_finally_queue;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22602,else__4383__auto__);

}
}));

(odoyle.rules.Session.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22607){
var vec__22608 = p__22607;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22608,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22608,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.Session.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.Session{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alpha-node","alpha-node",1411603897),self__.alpha_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),self__.beta_nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-id","last-id",-1231616450),self__.last_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-name->node-id","rule-name->node-id",-494456865),self__.rule_name__GT_node_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node-id->rule-name","node-id->rule-name",1615893599),self__.node_id__GT_rule_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id-attr-nodes","id-attr-nodes",-1814751183),self__.id_attr_nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"then-queue","then-queue",899186975),self__.then_queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"then-finally-queue","then-finally-queue",2088468149),self__.then_finally_queue],null))], null),self__.__extmap));
}));

(odoyle.rules.Session.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22601){
var self__ = this;
var G__22601__$1 = this;
return (new cljs.core.RecordIter((0),G__22601__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alpha-node","alpha-node",1411603897),new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),new cljs.core.Keyword(null,"last-id","last-id",-1231616450),new cljs.core.Keyword(null,"rule-name->node-id","rule-name->node-id",-494456865),new cljs.core.Keyword(null,"node-id->rule-name","node-id->rule-name",1615893599),new cljs.core.Keyword(null,"id-attr-nodes","id-attr-nodes",-1814751183),new cljs.core.Keyword(null,"then-queue","then-queue",899186975),new cljs.core.Keyword(null,"then-finally-queue","then-finally-queue",2088468149)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(odoyle.rules.Session.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.Session.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Session.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
}));

(odoyle.rules.Session.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1132320134 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Session.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22603,other22604){
var self__ = this;
var this22603__$1 = this;
return (((!((other22604 == null)))) && ((this22603__$1.constructor === other22604.constructor)) && (cljs.core._EQ_.call(null,this22603__$1.alpha_node,other22604.alpha_node)) && (cljs.core._EQ_.call(null,this22603__$1.beta_nodes,other22604.beta_nodes)) && (cljs.core._EQ_.call(null,this22603__$1.last_id,other22604.last_id)) && (cljs.core._EQ_.call(null,this22603__$1.rule_name__GT_node_id,other22604.rule_name__GT_node_id)) && (cljs.core._EQ_.call(null,this22603__$1.node_id__GT_rule_name,other22604.node_id__GT_rule_name)) && (cljs.core._EQ_.call(null,this22603__$1.id_attr_nodes,other22604.id_attr_nodes)) && (cljs.core._EQ_.call(null,this22603__$1.then_queue,other22604.then_queue)) && (cljs.core._EQ_.call(null,this22603__$1.then_finally_queue,other22604.then_finally_queue)) && (cljs.core._EQ_.call(null,this22603__$1.__extmap,other22604.__extmap)));
}));

(odoyle.rules.Session.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),null,new cljs.core.Keyword(null,"id-attr-nodes","id-attr-nodes",-1814751183),null,new cljs.core.Keyword(null,"then-finally-queue","then-finally-queue",2088468149),null,new cljs.core.Keyword(null,"alpha-node","alpha-node",1411603897),null,new cljs.core.Keyword(null,"last-id","last-id",-1231616450),null,new cljs.core.Keyword(null,"node-id->rule-name","node-id->rule-name",1615893599),null,new cljs.core.Keyword(null,"then-queue","then-queue",899186975),null,new cljs.core.Keyword(null,"rule-name->node-id","rule-name->node-id",-494456865),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.Session.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22601){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22611 = cljs.core.keyword_identical_QMARK_;
var expr__22612 = k__4388__auto__;
if(cljs.core.truth_(pred__22611.call(null,new cljs.core.Keyword(null,"alpha-node","alpha-node",1411603897),expr__22612))){
return (new odoyle.rules.Session(G__22601,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22611.call(null,new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),expr__22612))){
return (new odoyle.rules.Session(self__.alpha_node,G__22601,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22611.call(null,new cljs.core.Keyword(null,"last-id","last-id",-1231616450),expr__22612))){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,G__22601,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22611.call(null,new cljs.core.Keyword(null,"rule-name->node-id","rule-name->node-id",-494456865),expr__22612))){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,G__22601,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22611.call(null,new cljs.core.Keyword(null,"node-id->rule-name","node-id->rule-name",1615893599),expr__22612))){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,G__22601,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22611.call(null,new cljs.core.Keyword(null,"id-attr-nodes","id-attr-nodes",-1814751183),expr__22612))){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,G__22601,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22611.call(null,new cljs.core.Keyword(null,"then-queue","then-queue",899186975),expr__22612))){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,G__22601,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22611.call(null,new cljs.core.Keyword(null,"then-finally-queue","then-finally-queue",2088468149),expr__22612))){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,G__22601,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22601),null));
}
}
}
}
}
}
}
}
}));

(odoyle.rules.Session.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"alpha-node","alpha-node",1411603897),self__.alpha_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),self__.beta_nodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"last-id","last-id",-1231616450),self__.last_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rule-name->node-id","rule-name->node-id",-494456865),self__.rule_name__GT_node_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node-id->rule-name","node-id->rule-name",1615893599),self__.node_id__GT_rule_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id-attr-nodes","id-attr-nodes",-1814751183),self__.id_attr_nodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"then-queue","then-queue",899186975),self__.then_queue,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"then-finally-queue","then-finally-queue",2088468149),self__.then_finally_queue,null))], null),self__.__extmap));
}));

(odoyle.rules.Session.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22601){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,G__22601,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Session.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.Session.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alpha-node","alpha-node",-1242831872,null),new cljs.core.Symbol(null,"beta-nodes","beta-nodes",966378862,null),new cljs.core.Symbol(null,"last-id","last-id",408915077,null),new cljs.core.Symbol(null,"rule-name->node-id","rule-name->node-id",1146074662,null),new cljs.core.Symbol(null,"node-id->rule-name","node-id->rule-name",-1038542170,null),new cljs.core.Symbol(null,"id-attr-nodes","id-attr-nodes",-174219656,null),new cljs.core.Symbol(null,"then-queue","then-queue",-1755248794,null),new cljs.core.Symbol(null,"then-finally-queue","then-finally-queue",-565967620,null)], null);
}));

(odoyle.rules.Session.cljs$lang$type = true);

(odoyle.rules.Session.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/Session",null,(1),null));
}));

(odoyle.rules.Session.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"odoyle.rules/Session");
}));

/**
 * Positional factory function for odoyle.rules/Session.
 */
odoyle.rules.__GT_Session = (function odoyle$rules$__GT_Session(alpha_node,beta_nodes,last_id,rule_name__GT_node_id,node_id__GT_rule_name,id_attr_nodes,then_queue,then_finally_queue){
return (new odoyle.rules.Session(alpha_node,beta_nodes,last_id,rule_name__GT_node_id,node_id__GT_rule_name,id_attr_nodes,then_queue,then_finally_queue,null,null,null));
});

/**
 * Factory function for odoyle.rules/Session, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_Session = (function odoyle$rules$map__GT_Session(G__22605){
var extmap__4419__auto__ = (function (){var G__22614 = cljs.core.dissoc.call(null,G__22605,new cljs.core.Keyword(null,"alpha-node","alpha-node",1411603897),new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),new cljs.core.Keyword(null,"last-id","last-id",-1231616450),new cljs.core.Keyword(null,"rule-name->node-id","rule-name->node-id",-494456865),new cljs.core.Keyword(null,"node-id->rule-name","node-id->rule-name",1615893599),new cljs.core.Keyword(null,"id-attr-nodes","id-attr-nodes",-1814751183),new cljs.core.Keyword(null,"then-queue","then-queue",899186975),new cljs.core.Keyword(null,"then-finally-queue","then-finally-queue",2088468149));
if(cljs.core.record_QMARK_.call(null,G__22605)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22614);
} else {
return G__22614;
}
})();
return (new odoyle.rules.Session(new cljs.core.Keyword(null,"alpha-node","alpha-node",1411603897).cljs$core$IFn$_invoke$arity$1(G__22605),new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665).cljs$core$IFn$_invoke$arity$1(G__22605),new cljs.core.Keyword(null,"last-id","last-id",-1231616450).cljs$core$IFn$_invoke$arity$1(G__22605),new cljs.core.Keyword(null,"rule-name->node-id","rule-name->node-id",-494456865).cljs$core$IFn$_invoke$arity$1(G__22605),new cljs.core.Keyword(null,"node-id->rule-name","node-id->rule-name",1615893599).cljs$core$IFn$_invoke$arity$1(G__22605),new cljs.core.Keyword(null,"id-attr-nodes","id-attr-nodes",-1814751183).cljs$core$IFn$_invoke$arity$1(G__22605),new cljs.core.Keyword(null,"then-queue","then-queue",899186975).cljs$core$IFn$_invoke$arity$1(G__22605),new cljs.core.Keyword(null,"then-finally-queue","then-finally-queue",2088468149).cljs$core$IFn$_invoke$arity$1(G__22605),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

odoyle.rules.add_to_condition = (function odoyle$rules$add_to_condition(condition,field,p__22616){
var vec__22617 = p__22616;
var kind = cljs.core.nth.call(null,vec__22617,(0),null);
var value = cljs.core.nth.call(null,vec__22617,(1),null);
var G__22620 = kind;
var G__22620__$1 = (((G__22620 instanceof cljs.core.Keyword))?G__22620.fqn:null);
switch (G__22620__$1) {
case "binding":
return cljs.core.update.call(null,condition,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.conj,odoyle.rules.__GT_Binding.call(null,field,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,value,null,(1),null)),(2),null)),cljs.core.keyword.call(null,value)));

break;
case "value":
return cljs.core.update.call(null,condition,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.conj,odoyle.rules.map__GT_AlphaNode.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),field,new cljs.core.Keyword(null,"test-value","test-value",-824942526),value,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22620__$1)].join('')));

}
});
odoyle.rules.__GT_condition = (function odoyle$rules$__GT_condition(p__22622){
var map__22623 = p__22622;
var map__22623__$1 = (((((!((map__22623 == null))))?(((((map__22623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22623):map__22623);
var id = cljs.core.get.call(null,map__22623__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var attr = cljs.core.get.call(null,map__22623__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var value = cljs.core.get.call(null,map__22623__$1,new cljs.core.Keyword(null,"value","value",305978217));
var opts = cljs.core.get.call(null,map__22623__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
return odoyle.rules.add_to_condition.call(null,odoyle.rules.add_to_condition.call(null,odoyle.rules.add_to_condition.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"opts","opts",155075701),opts], null),new cljs.core.Keyword(null,"id","id",-1388402092),id),new cljs.core.Keyword(null,"attr","attr",-604132353),attr),new cljs.core.Keyword(null,"value","value",305978217),value);
});
odoyle.rules.__GT_rule = (function odoyle$rules$__GT_rule(p__22625){
var vec__22626 = p__22625;
var rule_name = cljs.core.nth.call(null,vec__22626,(0),null);
var rule = cljs.core.nth.call(null,vec__22626,(1),null);
var map__22629 = rule;
var map__22629__$1 = (((((!((map__22629 == null))))?(((((map__22629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22629):map__22629);
var what_block = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"what-block","what-block",353706536));
var when_block = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"when-block","when-block",2141606766));
var then_block = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"then-block","then-block",1414126772));
var then_finally_block = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"then-finally-block","then-finally-block",-1728703554));
var conditions = cljs.core.mapv.call(null,odoyle.rules.__GT_condition,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(what_block));
var when_body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(when_block);
var when_body__$1 = (((cljs.core.count.call(null,when_body) > (1)))?cljs.core.cons.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),when_body):cljs.core.first.call(null,when_body));
var then_body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(then_block);
var then_finally_body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(then_finally_block);
var syms = cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.simple_symbol_QMARK_,cljs.core.map.call(null,cljs.core.last,cljs.core.map.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),conditions))))));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"rule-name","rule-name",78307165),rule_name,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.call(null,clojure.string.replace.call(null,[cljs.core.namespace.call(null,rule_name),"-",cljs.core.name.call(null,rule_name)].join(''),".","-")),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),conditions,new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),syms], null),new cljs.core.Keyword(null,"when-body","when-body",-501359213),when_body__$1,new cljs.core.Keyword(null,"then-body","then-body",-1650890244),then_body,new cljs.core.Keyword(null,"then-finally-body","then-finally-body",-202915116),then_finally_body], null);
});
odoyle.rules.add_alpha_node = (function odoyle$rules$add_alpha_node(node,new_nodes,_STAR_alpha_node_path){
var vec__22631 = new_nodes;
var seq__22632 = cljs.core.seq.call(null,vec__22631);
var first__22633 = cljs.core.first.call(null,seq__22632);
var seq__22632__$1 = cljs.core.next.call(null,seq__22632);
var new_node = first__22633;
var other_nodes = seq__22632__$1;
if(cljs.core.truth_(new_node)){
var temp__5733__auto__ = cljs.core.some.call(null,(function (p__22634){
var vec__22635 = p__22634;
var i = cljs.core.nth.call(null,vec__22635,(0),null);
var child = cljs.core.nth.call(null,vec__22635,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.select_keys.call(null,child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"test-value","test-value",-824942526)], null)),cljs.core.select_keys.call(null,new_node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"test-value","test-value",-824942526)], null)))){
return i;
} else {
return null;
}
}),cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node)));
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
cljs.core._vreset_BANG_.call(null,_STAR_alpha_node_path,cljs.core.conj.call(null,cljs.core._deref.call(null,_STAR_alpha_node_path),new cljs.core.Keyword(null,"children","children",-940561982),i));

return cljs.core.update.call(null,node,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.update,i,odoyle.rules.add_alpha_node,other_nodes,_STAR_alpha_node_path);
} else {
var path = cljs.core._vreset_BANG_.call(null,_STAR_alpha_node_path,cljs.core.conj.call(null,cljs.core._deref.call(null,_STAR_alpha_node_path),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.count.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node))));
var new_node__$1 = cljs.core.assoc.call(null,new_node,new cljs.core.Keyword(null,"path","path",-188191168),path);
return cljs.core.update.call(null,node,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj,odoyle.rules.add_alpha_node.call(null,new_node__$1,other_nodes,_STAR_alpha_node_path));
}
} else {
return node;
}
});
odoyle.rules.is_ancestor = (function odoyle$rules$is_ancestor(session,node_id1,node_id2){
var node_id = node_id2;
while(true){
var temp__5733__auto__ = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),node_id], null)));
if(cljs.core.truth_(temp__5733__auto__)){
var parent_id = temp__5733__auto__;
if(cljs.core._EQ_.call(null,node_id1,parent_id)){
return (1);
} else {
var G__22638 = parent_id;
node_id = G__22638;
continue;
}
} else {
return (-1);
}
break;
}
});
odoyle.rules.add_condition = (function odoyle$rules$add_condition(session,condition){
var _STAR_alpha_node_path = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alpha-node","alpha-node",1411603897)], null));
var session__$1 = cljs.core.update.call(null,session,new cljs.core.Keyword(null,"alpha-node","alpha-node",1411603897),odoyle.rules.add_alpha_node,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(condition),_STAR_alpha_node_path);
var alpha_node_path = cljs.core.deref.call(null,_STAR_alpha_node_path);
var _STAR_last_id = cljs.core.volatile_BANG_.call(null,new cljs.core.Keyword(null,"last-id","last-id",-1231616450).cljs$core$IFn$_invoke$arity$1(session__$1));
var join_node_id = cljs.core._vreset_BANG_.call(null,_STAR_last_id,(cljs.core._deref.call(null,_STAR_last_id) + (1)));
var mem_node_id = cljs.core._vreset_BANG_.call(null,_STAR_last_id,(cljs.core._deref.call(null,_STAR_last_id) + (1)));
var parent_mem_node_id = cljs.core.last.call(null,new cljs.core.Keyword(null,"mem-node-ids","mem-node-ids",-187587170).cljs$core$IFn$_invoke$arity$1(session__$1));
var mem_node = odoyle.rules.map__GT_MemoryNode.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),mem_node_id,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),join_node_id,new cljs.core.Keyword(null,"child-id","child-id",1325542429),null,new cljs.core.Keyword(null,"leaf-node-id","leaf-node-id",1646532738),null,new cljs.core.Keyword(null,"condition","condition",1668437652),condition,new cljs.core.Keyword(null,"matches","matches",635497998),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"trigger","trigger",103466139),false], null));
var join_node = odoyle.rules.map__GT_JoinNode.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),join_node_id,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_mem_node_id,new cljs.core.Keyword(null,"child-id","child-id",1325542429),mem_node_id,new cljs.core.Keyword(null,"alpha-node-path","alpha-node-path",693154678),alpha_node_path,new cljs.core.Keyword(null,"condition","condition",1668437652),condition,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),null,new cljs.core.Keyword(null,"old-id-attrs","old-id-attrs",203904454),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"disable-fast-updates","disable-fast-updates",-1739419985),false], null));
var session__$2 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,session__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),join_node_id], null),join_node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),mem_node_id], null),mem_node);
var successor_ids = cljs.core.conj.call(null,new cljs.core.Keyword(null,"successors","successors",-1239296414).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,session__$2,alpha_node_path)),join_node_id);
var successor_ids__$1 = cljs.core.sort.call(null,cljs.core.partial.call(null,odoyle.rules.is_ancestor,session__$2),successor_ids);
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,(function (){var G__22639 = cljs.core.update_in.call(null,session__$2,alpha_node_path,cljs.core.assoc,new cljs.core.Keyword(null,"successors","successors",-1239296414),successor_ids__$1);
if(cljs.core.truth_(parent_mem_node_id)){
return cljs.core.assoc_in.call(null,G__22639,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),parent_mem_node_id,new cljs.core.Keyword(null,"child-id","child-id",1325542429)], null),join_node_id);
} else {
return G__22639;
}
})(),new cljs.core.Keyword(null,"last-id","last-id",-1231616450),cljs.core.deref.call(null,_STAR_last_id)),new cljs.core.Keyword(null,"mem-node-ids","mem-node-ids",-187587170),(function (node_ids){
if(cljs.core.truth_(node_ids)){
return cljs.core.conj.call(null,node_ids,mem_node_id);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mem_node_id], null);
}
})),new cljs.core.Keyword(null,"join-node-ids","join-node-ids",657551750),(function (node_ids){
if(cljs.core.truth_(node_ids)){
return cljs.core.conj.call(null,node_ids,join_node_id);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [join_node_id], null);
}
})),new cljs.core.Keyword(null,"bindings","bindings",1271397192),(function (bindings){
return cljs.core.reduce.call(null,(function (bindings__$1,k){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(bindings__$1),k)){
return cljs.core.update.call(null,bindings__$1,new cljs.core.Keyword(null,"joins","joins",1033962699),cljs.core.conj,k);
} else {
return cljs.core.update.call(null,bindings__$1,new cljs.core.Keyword(null,"all","all",892129742),cljs.core.conj,k);
}
}),(function (){var or__4126__auto__ = bindings;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"all","all",892129742),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"joins","joins",1033962699),cljs.core.PersistentHashSet.EMPTY], null);
}
})(),cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(condition)));
}));
});
odoyle.rules.get_vars_from_fact = (function odoyle$rules$get_vars_from_fact(vars,condition,fact){
return cljs.core.reduce.call(null,(function (m,cond_var){
var var_key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cond_var);
var G__22640 = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cond_var);
var G__22640__$1 = (((G__22640 instanceof cljs.core.Keyword))?G__22640.fqn:null);
switch (G__22640__$1) {
case "id":
if(((cljs.core.contains_QMARK_.call(null,m,var_key)) && (cljs.core.not_EQ_.call(null,cljs.core.get.call(null,m,var_key),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(fact))))){
return cljs.core.reduced.call(null,null);
} else {
return cljs.core.assoc.call(null,m,var_key,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(fact));
}

break;
case "attr":
throw cljs.core.ex_info.call(null,"Attributes cannot contain vars",cljs.core.PersistentArrayMap.EMPTY);

break;
case "value":
if(((cljs.core.contains_QMARK_.call(null,m,var_key)) && (cljs.core.not_EQ_.call(null,cljs.core.get.call(null,m,var_key),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(fact))))){
return cljs.core.reduced.call(null,null);
} else {
return cljs.core.assoc.call(null,m,var_key,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(fact));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22640__$1)].join('')));

}
}),vars,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(condition));
});
odoyle.rules.get_id_attr = cljs.core.juxt.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"attr","attr",-604132353));
odoyle.rules.left_activate_join_node = (function odoyle$rules$left_activate_join_node(var_args){
var G__22643 = arguments.length;
switch (G__22643) {
case 5:
return odoyle.rules.left_activate_join_node.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return odoyle.rules.left_activate_join_node.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(odoyle.rules.left_activate_join_node.cljs$core$IFn$_invoke$arity$5 = (function (session,node_id,id_PLUS_attrs,vars,token){
var join_node = cljs.core.get_in.call(null,session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),node_id], null));
var alpha_node = cljs.core.get_in.call(null,session,new cljs.core.Keyword(null,"alpha-node-path","alpha-node-path",693154678).cljs$core$IFn$_invoke$arity$1(join_node));
var temp__5733__auto__ = (function (){var G__22644 = join_node;
var G__22644__$1 = (((G__22644 == null))?null:new cljs.core.Keyword(null,"id-key","id-key",-1881730044).cljs$core$IFn$_invoke$arity$1(G__22644));
if((G__22644__$1 == null)){
return null;
} else {
return cljs.core.get.call(null,vars,G__22644__$1);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var id = temp__5733__auto__;
return cljs.core.reduce.call(null,(function (session__$1,alpha_fact){
return odoyle.rules.left_activate_join_node.call(null,session__$1,join_node,id_PLUS_attrs,vars,token,alpha_fact);
}),session,cljs.core.vals.call(null,cljs.core.get_in.call(null,alpha_node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"facts","facts",-1734543718),id], null))));
} else {
return cljs.core.reduce.call(null,(function (session__$1,attr__GT_fact){
return cljs.core.reduce.call(null,(function (session__$2,alpha_fact){
return odoyle.rules.left_activate_join_node.call(null,session__$2,join_node,id_PLUS_attrs,vars,token,alpha_fact);
}),session__$1,cljs.core.vals.call(null,attr__GT_fact));
}),session,cljs.core.vals.call(null,new cljs.core.Keyword(null,"facts","facts",-1734543718).cljs$core$IFn$_invoke$arity$1(alpha_node)));
}
}));

(odoyle.rules.left_activate_join_node.cljs$core$IFn$_invoke$arity$6 = (function (session,join_node,id_PLUS_attrs,vars,token,alpha_fact){
var temp__5733__auto__ = odoyle.rules.get_vars_from_fact.call(null,vars,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(join_node),alpha_fact);
if(cljs.core.truth_(temp__5733__auto__)){
var new_vars = temp__5733__auto__;
var id_PLUS_attr = odoyle.rules.get_id_attr.call(null,alpha_fact);
var id_PLUS_attrs__$1 = cljs.core.conj.call(null,id_PLUS_attrs,id_PLUS_attr);
var new_token = odoyle.rules.__GT_Token.call(null,alpha_fact,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(token),null);
var new_QMARK_ = (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"old-id-attrs","old-id-attrs",203904454).cljs$core$IFn$_invoke$arity$1(join_node),id_PLUS_attr)));
return odoyle.rules.left_activate_memory_node.call(null,session,new cljs.core.Keyword(null,"child-id","child-id",1325542429).cljs$core$IFn$_invoke$arity$1(join_node),id_PLUS_attrs__$1,new_vars,new_token,new_QMARK_);
} else {
return session;
}
}));

(odoyle.rules.left_activate_join_node.cljs$lang$maxFixedArity = 6);

odoyle.rules._STAR_triggered_node_ids_STAR_ = null;
odoyle.rules.left_activate_memory_node = (function odoyle$rules$left_activate_memory_node(session,node_id,id_PLUS_attrs,vars,p__22646,new_QMARK_){
var map__22647 = p__22646;
var map__22647__$1 = (((((!((map__22647 == null))))?(((((map__22647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22647):map__22647);
var token = map__22647__$1;
var kind = cljs.core.get.call(null,map__22647__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var node_path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),node_id], null);
var node = cljs.core.get_in.call(null,session,node_path);
var session__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = new_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),null,new cljs.core.Keyword(null,"update","update",1045576396),null], null), null).call(null,kind);
if(cljs.core.truth_(and__4115__auto____$1)){
var temp__5733__auto__ = new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(node)));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__22649 = temp__5733__auto__;
var then_type = cljs.core.nth.call(null,vec__22649,(0),null);
var then = cljs.core.nth.call(null,vec__22649,(1),null);
var G__22652 = then_type;
var G__22652__$1 = (((G__22652 instanceof cljs.core.Keyword))?G__22652.fqn:null);
switch (G__22652__$1) {
case "bool":
return then;

break;
case "func":
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"old-fact","old-fact",-2104919404).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(temp__5733__auto____$1)){
var old_fact = temp__5733__auto____$1;
return then.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(token)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(old_fact));
} else {
return true;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22652__$1)].join('')));

}
} else {
return true;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())?(function (){
if(cljs.core.truth_(odoyle.rules._STAR_triggered_node_ids_STAR_)){
cljs.core._vreset_BANG_.call(null,odoyle.rules._STAR_triggered_node_ids_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,odoyle.rules._STAR_triggered_node_ids_STAR_),new cljs.core.Keyword(null,"leaf-node-id","leaf-node-id",1646532738).cljs$core$IFn$_invoke$arity$1(node)));
} else {
}

return cljs.core.assoc_in.call(null,session,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),new cljs.core.Keyword(null,"leaf-node-id","leaf-node-id",1646532738).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"trigger","trigger",103466139)], null),true);
})()
:session);
var node__$1 = cljs.core.get_in.call(null,session__$1,node_path);
var leaf_node_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node__$1),new cljs.core.Keyword(null,"leaf-node-id","leaf-node-id",1646532738).cljs$core$IFn$_invoke$arity$1(node__$1));
var enabled_QMARK_ = cljs.core.boolean$.call(null,(function (){var or__4126__auto__ = (!(leaf_node_QMARK_));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (new cljs.core.Keyword(null,"when-fn","when-fn",-57616971).cljs$core$IFn$_invoke$arity$1(node__$1) == null);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"when-fn","when-fn",-57616971).cljs$core$IFn$_invoke$arity$1(node__$1).call(null,vars);
}
}
})());
var id_PLUS_attr = cljs.core.peek.call(null,id_PLUS_attrs);
var session__$2 = (function (){var G__22653 = kind;
var G__22653__$1 = (((G__22653 instanceof cljs.core.Keyword))?G__22653.fqn:null);
switch (G__22653__$1) {
case "insert":
case "update":
var $ = session__$1;
var $__$1 = cljs.core.update_in.call(null,$,node_path,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matches","matches",635497998),id_PLUS_attrs], null),odoyle.rules.__GT_Match.call(null,vars,enabled_QMARK_));
var $__$2 = (cljs.core.truth_(((leaf_node_QMARK_)?new cljs.core.Keyword(null,"trigger","trigger",103466139).cljs$core$IFn$_invoke$arity$1(node__$1):false))?(function (){var G__22654 = $__$1;
var G__22654__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"then-fn","then-fn",368241976).cljs$core$IFn$_invoke$arity$1(node__$1))?cljs.core.update.call(null,G__22654,new cljs.core.Keyword(null,"then-queue","then-queue",899186975),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id,id_PLUS_attrs], null)):G__22654);
if(cljs.core.truth_(new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222).cljs$core$IFn$_invoke$arity$1(node__$1))){
return cljs.core.update.call(null,G__22654__$1,new cljs.core.Keyword(null,"then-finally-queue","then-finally-queue",2088468149),cljs.core.conj,node_id);
} else {
return G__22654__$1;
}
})():$__$1);
return cljs.core.update_in.call(null,$__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(node__$1),new cljs.core.Keyword(null,"old-id-attrs","old-id-attrs",203904454)], null),cljs.core.conj,id_PLUS_attr);

break;
case "retract":
var $ = session__$1;
var $__$1 = cljs.core.update_in.call(null,$,node_path,cljs.core.update,new cljs.core.Keyword(null,"matches","matches",635497998),cljs.core.dissoc,id_PLUS_attrs);
var $__$2 = (cljs.core.truth_(((leaf_node_QMARK_)?new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222).cljs$core$IFn$_invoke$arity$1(node__$1):false))?cljs.core.update.call(null,$__$1,new cljs.core.Keyword(null,"then-finally-queue","then-finally-queue",2088468149),cljs.core.conj,node_id):$__$1);
return cljs.core.update_in.call(null,$__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(node__$1),new cljs.core.Keyword(null,"old-id-attrs","old-id-attrs",203904454)], null),cljs.core.disj,id_PLUS_attr);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22653__$1)].join('')));

}
})();
var temp__5733__auto__ = new cljs.core.Keyword(null,"child-id","child-id",1325542429).cljs$core$IFn$_invoke$arity$1(node__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var join_node_id = temp__5733__auto__;
return odoyle.rules.left_activate_join_node.call(null,session__$2,join_node_id,id_PLUS_attrs,vars,token);
} else {
return session__$2;
}
});
odoyle.rules.right_activate_join_node = (function odoyle$rules$right_activate_join_node(session,node_id,id_PLUS_attr,p__22657){
var map__22658 = p__22657;
var map__22658__$1 = (((((!((map__22658 == null))))?(((((map__22658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22658):map__22658);
var token = map__22658__$1;
var fact = cljs.core.get.call(null,map__22658__$1,new cljs.core.Keyword(null,"fact","fact",-799816531));
var map__22660 = cljs.core.get_in.call(null,session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),node_id], null));
var map__22660__$1 = (((((!((map__22660 == null))))?(((((map__22660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22660):map__22660);
var node = map__22660__$1;
var condition = cljs.core.get.call(null,map__22660__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var child_id = cljs.core.get.call(null,map__22660__$1,new cljs.core.Keyword(null,"child-id","child-id",1325542429));
var id_key = cljs.core.get.call(null,map__22660__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044));
var temp__5733__auto__ = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5733__auto__)){
var parent_id = temp__5733__auto__;
return cljs.core.reduce_kv.call(null,(function (session__$1,id_PLUS_attrs,p__22662){
var map__22663 = p__22662;
var map__22663__$1 = (((((!((map__22663 == null))))?(((((map__22663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22663):map__22663);
var existing_vars = cljs.core.get.call(null,map__22663__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.truth_((function (){var G__22665 = id_key;
var G__22665__$1 = (((G__22665 == null))?null:cljs.core.get.call(null,existing_vars,G__22665));
if((G__22665__$1 == null)){
return null;
} else {
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(fact),G__22665__$1);
}
})())){
return session__$1;
} else {
var temp__5733__auto____$1 = odoyle.rules.get_vars_from_fact.call(null,existing_vars,condition,fact);
if(cljs.core.truth_(temp__5733__auto____$1)){
var vars = temp__5733__auto____$1;
return odoyle.rules.left_activate_memory_node.call(null,session__$1,child_id,cljs.core.conj.call(null,id_PLUS_attrs,id_PLUS_attr),vars,token,true);
} else {
return session__$1;
}
}
}),session,cljs.core.get_in.call(null,session,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),parent_id,new cljs.core.Keyword(null,"matches","matches",635497998)], null)));
} else {
var temp__5733__auto____$1 = odoyle.rules.get_vars_from_fact.call(null,cljs.core.PersistentArrayMap.EMPTY,condition,fact);
if(cljs.core.truth_(temp__5733__auto____$1)){
var vars = temp__5733__auto____$1;
return odoyle.rules.left_activate_memory_node.call(null,session,child_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_PLUS_attr], null),vars,token,true);
} else {
return session;
}
}
});
odoyle.rules.right_activate_alpha_node = (function odoyle$rules$right_activate_alpha_node(session,node_path,p__22666){
var map__22667 = p__22666;
var map__22667__$1 = (((((!((map__22667 == null))))?(((((map__22667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22667):map__22667);
var token = map__22667__$1;
var fact = cljs.core.get.call(null,map__22667__$1,new cljs.core.Keyword(null,"fact","fact",-799816531));
var kind = cljs.core.get.call(null,map__22667__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var old_fact = cljs.core.get.call(null,map__22667__$1,new cljs.core.Keyword(null,"old-fact","old-fact",-2104919404));
var vec__22669 = odoyle.rules.get_id_attr.call(null,fact);
var id = cljs.core.nth.call(null,vec__22669,(0),null);
var attr = cljs.core.nth.call(null,vec__22669,(1),null);
var id_PLUS_attr = vec__22669;
var $ = session;
var $__$1 = (function (){var G__22672 = kind;
var G__22672__$1 = (((G__22672 instanceof cljs.core.Keyword))?G__22672.fqn:null);
switch (G__22672__$1) {
case "insert":
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,$,node_path,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"facts","facts",-1734543718),id,attr], null),fact),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id-attr-nodes","id-attr-nodes",-1814751183),id_PLUS_attr], null),(function (node_paths){
var node_paths__$1 = (function (){var or__4126__auto__ = node_paths;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if((!(cljs.core.contains_QMARK_.call(null,node_paths__$1,node_path)))){
} else {
throw (new Error("Assert failed: (not (contains? node-paths node-path))"));
}

return cljs.core.conj.call(null,node_paths__$1,node_path);
}));

break;
case "retract":
return cljs.core.update.call(null,cljs.core.update_in.call(null,$,node_path,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"facts","facts",-1734543718),id], null),cljs.core.dissoc,attr),new cljs.core.Keyword(null,"id-attr-nodes","id-attr-nodes",-1814751183),(function (nodes){
var node_paths = cljs.core.get.call(null,nodes,id_PLUS_attr);
var _ = ((cljs.core.contains_QMARK_.call(null,node_paths,node_path))?null:(function(){throw (new Error("Assert failed: (contains? node-paths node-path)"))})());
var node_paths__$1 = cljs.core.disj.call(null,node_paths,node_path);
if(cljs.core.seq.call(null,node_paths__$1)){
return cljs.core.assoc.call(null,nodes,id_PLUS_attr,node_paths__$1);
} else {
return cljs.core.dissoc.call(null,nodes,id_PLUS_attr);
}
}));

break;
case "update":
return cljs.core.update_in.call(null,$,node_path,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"facts","facts",-1734543718),id,attr], null),(function (existing_old_fact){
if(cljs.core._EQ_.call(null,old_fact,existing_old_fact)){
} else {
throw (new Error("Assert failed: (= old-fact existing-old-fact)"));
}

return fact;
}));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22672__$1)].join('')));

}
})();
return cljs.core.reduce.call(null,(function (session__$1,child_id){
if(cljs.core.truth_(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),kind))?cljs.core.get_in.call(null,session__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),child_id,new cljs.core.Keyword(null,"disable-fast-updates","disable-fast-updates",-1739419985)], null)):false))){
return odoyle.rules.right_activate_join_node.call(null,odoyle.rules.right_activate_join_node.call(null,session__$1,child_id,id_PLUS_attr,odoyle.rules.__GT_Token.call(null,old_fact,new cljs.core.Keyword(null,"retract","retract",-1549826125),null)),child_id,id_PLUS_attr,odoyle.rules.__GT_Token.call(null,fact,new cljs.core.Keyword(null,"insert","insert",1286475395),old_fact));
} else {
return odoyle.rules.right_activate_join_node.call(null,session__$1,child_id,id_PLUS_attr,token);
}
}),$__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,session,node_path)));
});
odoyle.rules.get_alpha_nodes_for_fact = (function odoyle$rules$get_alpha_nodes_for_fact(session,alpha_node,id,attr,value,root_QMARK_){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.reduce.call(null,(function (nodes,child){
return cljs.core.into.call(null,nodes,odoyle.rules.get_alpha_nodes_for_fact.call(null,session,child,id,attr,value,false));
}),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(alpha_node));
} else {
var test_value = (function (){var G__22674 = new cljs.core.Keyword(null,"test-field","test-field",1658646589).cljs$core$IFn$_invoke$arity$1(alpha_node);
var G__22674__$1 = (((G__22674 instanceof cljs.core.Keyword))?G__22674.fqn:null);
switch (G__22674__$1) {
case "id":
return id;

break;
case "attr":
return attr;

break;
case "value":
return value;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22674__$1)].join('')));

}
})();
if(cljs.core._EQ_.call(null,test_value,new cljs.core.Keyword(null,"test-value","test-value",-824942526).cljs$core$IFn$_invoke$arity$1(alpha_node))){
return cljs.core.reduce.call(null,(function (nodes,child){
return cljs.core.into.call(null,nodes,odoyle.rules.get_alpha_nodes_for_fact.call(null,session,child,id,attr,value,false));
}),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(alpha_node)]),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(alpha_node));
} else {
return null;
}
}
});
odoyle.rules.upsert_fact = (function odoyle$rules$upsert_fact(session,id,attr,value,node_paths){
var id_PLUS_attr = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr], null);
var fact = odoyle.rules.__GT_Fact.call(null,id,attr,value);
var temp__5733__auto__ = cljs.core.get_in.call(null,session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id-attr-nodes","id-attr-nodes",-1814751183),id_PLUS_attr], null));
if(cljs.core.truth_(temp__5733__auto__)){
var existing_node_paths = temp__5733__auto__;
var $ = session;
var $__$1 = cljs.core.reduce.call(null,(function (session__$1,node_path){
if((!(cljs.core.contains_QMARK_.call(null,node_paths,node_path)))){
var node = cljs.core.get_in.call(null,session__$1,node_path);
var old_fact = cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"facts","facts",-1734543718),id,attr], null));
if(cljs.core.truth_(old_fact)){
} else {
throw (new Error("Assert failed: old-fact"));
}

return odoyle.rules.right_activate_alpha_node.call(null,session__$1,node_path,odoyle.rules.__GT_Token.call(null,old_fact,new cljs.core.Keyword(null,"retract","retract",-1549826125),null));
} else {
return session__$1;
}
}),$,existing_node_paths);
return cljs.core.reduce.call(null,(function (session__$1,node_path){
if(cljs.core.contains_QMARK_.call(null,existing_node_paths,node_path)){
var node = cljs.core.get_in.call(null,session__$1,node_path);
var old_fact = cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"facts","facts",-1734543718),id,attr], null));
if(cljs.core.truth_(old_fact)){
} else {
throw (new Error("Assert failed: old-fact"));
}

return odoyle.rules.right_activate_alpha_node.call(null,session__$1,node_path,odoyle.rules.__GT_Token.call(null,fact,new cljs.core.Keyword(null,"update","update",1045576396),old_fact));
} else {
return odoyle.rules.right_activate_alpha_node.call(null,session__$1,node_path,odoyle.rules.__GT_Token.call(null,fact,new cljs.core.Keyword(null,"insert","insert",1286475395),null));
}
}),$__$1,node_paths);
} else {
return cljs.core.reduce.call(null,(function (session__$1,node_path){
return odoyle.rules.right_activate_alpha_node.call(null,session__$1,node_path,odoyle.rules.__GT_Token.call(null,fact,new cljs.core.Keyword(null,"insert","insert",1286475395),null));
}),session,node_paths);
}
});
odoyle.rules.throw_recursion_limit = (function odoyle$rules$throw_recursion_limit(session,limit,executed_nodes){
var trigger_map = cljs.core.reduce.call(null,(function (m,node_id__GT_triggered_node_ids){
return cljs.core.reduce_kv.call(null,(function (m2,node_id,triggered_node_ids){
return cljs.core.assoc.call(null,m2,new cljs.core.Keyword(null,"node-id->rule-name","node-id->rule-name",1615893599).cljs$core$IFn$_invoke$arity$1(session).call(null,node_id),cljs.core.reduce.call(null,(function (m3,triggered_node_id){
var rule_name = new cljs.core.Keyword(null,"node-id->rule-name","node-id->rule-name",1615893599).cljs$core$IFn$_invoke$arity$1(session).call(null,triggered_node_id);
return cljs.core.assoc.call(null,m3,rule_name,cljs.core.get.call(null,m,rule_name));
}),cljs.core.PersistentArrayMap.EMPTY,triggered_node_ids));
}),cljs.core.PersistentArrayMap.EMPTY,node_id__GT_triggered_node_ids);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,executed_nodes));
var find_cycles = (function odoyle$rules$throw_recursion_limit_$_find_cycles(cycles,p__22677,cyc){
var vec__22678 = p__22677;
var k = cljs.core.nth.call(null,vec__22678,(0),null);
var v = cljs.core.nth.call(null,vec__22678,(1),null);
if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cyc),k)){
return cljs.core.conj.call(null,cycles,cljs.core.vec.call(null,cljs.core.drop_while.call(null,(function (p1__22676_SHARP_){
return cljs.core.not_EQ_.call(null,p1__22676_SHARP_,k);
}),cljs.core.conj.call(null,cyc,k))));
} else {
return cljs.core.reduce.call(null,(function (cycles__$1,pair){
return odoyle$rules$throw_recursion_limit_$_find_cycles.call(null,cycles__$1,pair,cljs.core.conj.call(null,cyc,k));
}),cycles,v);
}
});
var cycles = cljs.core.reduce.call(null,(function (cycles,pair){
return find_cycles.call(null,cycles,pair,cljs.core.PersistentVector.EMPTY);
}),cljs.core.PersistentHashSet.EMPTY,trigger_map);
throw cljs.core.ex_info.call(null,["Recursion limit hit.","\n","This may be an infinite loop.","\n","The current recursion limit is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit)," (set by the :recursion-limit option of fire-rules).","\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (s,cyc){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"Cycle detected! ",((cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,cyc)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cyc))," is triggering itself."].join(''):clojure.string.join.call(null," -> ",cyc)),"\n"].join('');
}),"\n",cycles)),"\n","Try using {:then false} to prevent triggering rules in an infinite loop."].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
odoyle.rules._STAR_mutable_session_STAR_ = null;
odoyle.rules._STAR_recur_countdown_STAR_ = null;
odoyle.rules._STAR_executed_nodes_STAR_ = null;
/**
 * Provides the current value of the session from inside a :then or :then-finally block.
 */
odoyle.rules._STAR_session_STAR_ = null;
/**
 * Provides a map of all the matched values from inside a :then block.
 */
odoyle.rules._STAR_match_STAR_ = null;
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","recursion-limit","odoyle.rules/recursion-limit",-1934013592),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_,null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("odoyle.rules","fire-rules","odoyle.rules/fire-rules",870110920,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","recursion-limit","odoyle.rules/recursion-limit",-1934013592)], null))))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","recursion-limit","odoyle.rules/recursion-limit",-1934013592)], null)))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"opts","opts",155075701)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),cljs.spec.alpha.maybe_impl.call(null,cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","recursion-limit","odoyle.rules/recursion-limit",-1934013592)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__22681){
return cljs.core.map_QMARK_.call(null,G__22681);
})], null),(function (G__22681){
return cljs.core.map_QMARK_.call(null,G__22681);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","recursion-limit","odoyle.rules/recursion-limit",-1934013592)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","recursion-limit","odoyle.rules/recursion-limit",-1934013592)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","recursion-limit","odoyle.rules/recursion-limit",-1934013592)], null)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","recursion-limit","odoyle.rules/recursion-limit",-1934013592)], null)))),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Fires :then and :then-finally blocks for any rules whose matches have been updated.
 *   The opts map may contain:
 *   
 *   :recursion-limit  -  Throws an error if rules recursively trigger this many times.
 *                     The default is 16. Pass nil to disable the limit entirely.
 */
odoyle.rules.fire_rules = (function odoyle$rules$fire_rules(var_args){
var G__22684 = arguments.length;
switch (G__22684) {
case 1:
return odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$1 = (function (session){
return odoyle.rules.fire_rules.call(null,session,cljs.core.PersistentArrayMap.EMPTY);
}));

(odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$2 = (function (session,opts){
var then_queue = new cljs.core.Keyword(null,"then-queue","then-queue",899186975).cljs$core$IFn$_invoke$arity$1(session);
var then_finally_queue = new cljs.core.Keyword(null,"then-finally-queue","then-finally-queue",2088468149).cljs$core$IFn$_invoke$arity$1(session);
if(((((cljs.core.seq.call(null,then_queue)) || (cljs.core.seq.call(null,then_finally_queue)))) && ((odoyle.rules._STAR_session_STAR_ == null)))){
var _STAR_node_id__GT_triggered_node_ids = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var execute_fn = (function (f,node_id){
var _STAR_triggered_node_ids_STAR__orig_val__22685 = odoyle.rules._STAR_triggered_node_ids_STAR_;
var _STAR_triggered_node_ids_STAR__temp_val__22686 = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
(odoyle.rules._STAR_triggered_node_ids_STAR_ = _STAR_triggered_node_ids_STAR__temp_val__22686);

try{f.call(null);

return cljs.core._vreset_BANG_.call(null,_STAR_node_id__GT_triggered_node_ids,cljs.core.update.call(null,cljs.core._deref.call(null,_STAR_node_id__GT_triggered_node_ids),node_id,(function (p1__22682_SHARP_){
return cljs.core.into.call(null,(function (){var or__4126__auto__ = p1__22682_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),cljs.core.deref.call(null,odoyle.rules._STAR_triggered_node_ids_STAR_));
})));
}finally {(odoyle.rules._STAR_triggered_node_ids_STAR_ = _STAR_triggered_node_ids_STAR__orig_val__22685);
}});
var session__$1 = cljs.core.assoc.call(null,session,new cljs.core.Keyword(null,"then-queue","then-queue",899186975),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"then-finally-queue","then-finally-queue",2088468149),cljs.core.PersistentHashSet.EMPTY);
var session__$2 = cljs.core.reduce.call(null,(function (session__$2,node_id){
return cljs.core.update_in.call(null,session__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),node_id], null),cljs.core.assoc,new cljs.core.Keyword(null,"trigger","trigger",103466139),false);
}),session__$1,cljs.core.into.call(null,then_finally_queue,cljs.core.map.call(null,cljs.core.first,then_queue)));
var beta_nodes = new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665).cljs$core$IFn$_invoke$arity$1(session__$2);
var session__$3 = cljs.core.reduce.call(null,(function (session__$3,p__22687){
var vec__22688 = p__22687;
var node_id = cljs.core.nth.call(null,vec__22688,(0),null);
var id_PLUS_attrs = cljs.core.nth.call(null,vec__22688,(1),null);
var map__22691 = cljs.core.get.call(null,beta_nodes,node_id);
var map__22691__$1 = (((((!((map__22691 == null))))?(((((map__22691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22691):map__22691);
var matches = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"matches","matches",635497998));
var then_fn = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"then-fn","then-fn",368241976));
var or__4126__auto__ = (function (){var temp__5735__auto__ = cljs.core.get.call(null,matches,id_PLUS_attrs);
if(cljs.core.truth_(temp__5735__auto__)){
var map__22701 = temp__5735__auto__;
var map__22701__$1 = (((((!((map__22701 == null))))?(((((map__22701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22701):map__22701);
var vars = cljs.core.get.call(null,map__22701__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var enabled = cljs.core.get.call(null,map__22701__$1,new cljs.core.Keyword(null,"enabled","enabled",1195909756));
if(cljs.core.truth_(enabled)){
var _STAR_session_STAR__orig_val__22703 = odoyle.rules._STAR_session_STAR_;
var _STAR_mutable_session_STAR__orig_val__22704 = odoyle.rules._STAR_mutable_session_STAR_;
var _STAR_match_STAR__orig_val__22705 = odoyle.rules._STAR_match_STAR_;
var _STAR_session_STAR__temp_val__22706 = session__$3;
var _STAR_mutable_session_STAR__temp_val__22707 = cljs.core.volatile_BANG_.call(null,session__$3);
var _STAR_match_STAR__temp_val__22708 = vars;
(odoyle.rules._STAR_session_STAR_ = _STAR_session_STAR__temp_val__22706);

(odoyle.rules._STAR_mutable_session_STAR_ = _STAR_mutable_session_STAR__temp_val__22707);

(odoyle.rules._STAR_match_STAR_ = _STAR_match_STAR__temp_val__22708);

try{execute_fn.call(null,(function (){
return then_fn.call(null,vars);
}),node_id);

return cljs.core.deref.call(null,odoyle.rules._STAR_mutable_session_STAR_);
}finally {(odoyle.rules._STAR_match_STAR_ = _STAR_match_STAR__orig_val__22705);

(odoyle.rules._STAR_mutable_session_STAR_ = _STAR_mutable_session_STAR__orig_val__22704);

(odoyle.rules._STAR_session_STAR_ = _STAR_session_STAR__orig_val__22703);
}} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return session__$3;
}
}),session__$2,then_queue);
var session__$4 = cljs.core.reduce.call(null,(function (session__$4,node_id){
var map__22709 = cljs.core.get.call(null,beta_nodes,node_id);
var map__22709__$1 = (((((!((map__22709 == null))))?(((((map__22709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22709):map__22709);
var then_finally_fn = cljs.core.get.call(null,map__22709__$1,new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222));
var _STAR_session_STAR__orig_val__22711 = odoyle.rules._STAR_session_STAR_;
var _STAR_mutable_session_STAR__orig_val__22712 = odoyle.rules._STAR_mutable_session_STAR_;
var _STAR_session_STAR__temp_val__22713 = session__$4;
var _STAR_mutable_session_STAR__temp_val__22714 = cljs.core.volatile_BANG_.call(null,session__$4);
(odoyle.rules._STAR_session_STAR_ = _STAR_session_STAR__temp_val__22713);

(odoyle.rules._STAR_mutable_session_STAR_ = _STAR_mutable_session_STAR__temp_val__22714);

try{execute_fn.call(null,then_finally_fn,node_id);

return cljs.core.deref.call(null,odoyle.rules._STAR_mutable_session_STAR_);
}finally {(odoyle.rules._STAR_mutable_session_STAR_ = _STAR_mutable_session_STAR__orig_val__22712);

(odoyle.rules._STAR_session_STAR_ = _STAR_session_STAR__orig_val__22711);
}}),session__$3,then_finally_queue);
var temp__5733__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),(16));
if(cljs.core.truth_(temp__5733__auto__)){
var limit = temp__5733__auto__;
if(cljs.core._EQ_.call(null,(0),odoyle.rules._STAR_recur_countdown_STAR_)){
return odoyle.rules.throw_recursion_limit.call(null,session__$4,limit,odoyle.rules._STAR_executed_nodes_STAR_);
} else {
var _STAR_recur_countdown_STAR__orig_val__22715 = odoyle.rules._STAR_recur_countdown_STAR_;
var _STAR_executed_nodes_STAR__orig_val__22716 = odoyle.rules._STAR_executed_nodes_STAR_;
var _STAR_recur_countdown_STAR__temp_val__22717 = (((odoyle.rules._STAR_recur_countdown_STAR_ == null))?limit:(odoyle.rules._STAR_recur_countdown_STAR_ - (1)));
var _STAR_executed_nodes_STAR__temp_val__22718 = cljs.core.conj.call(null,(function (){var or__4126__auto__ = odoyle.rules._STAR_executed_nodes_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.deref.call(null,_STAR_node_id__GT_triggered_node_ids));
(odoyle.rules._STAR_recur_countdown_STAR_ = _STAR_recur_countdown_STAR__temp_val__22717);

(odoyle.rules._STAR_executed_nodes_STAR_ = _STAR_executed_nodes_STAR__temp_val__22718);

try{return odoyle.rules.fire_rules.call(null,session__$4,opts);
}finally {(odoyle.rules._STAR_executed_nodes_STAR_ = _STAR_executed_nodes_STAR__orig_val__22716);

(odoyle.rules._STAR_recur_countdown_STAR_ = _STAR_recur_countdown_STAR__orig_val__22715);
}}
} else {
return odoyle.rules.fire_rules.call(null,session__$4,opts);
}
} else {
return session;
}
}));

(odoyle.rules.fire_rules.cljs$lang$maxFixedArity = 2);

/**
 * Adds a rule to the given session.
 */
odoyle.rules.add_rule = (function odoyle$rules$add_rule(session,rule){
if(cljs.core.truth_(cljs.core.get_in.call(null,session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rule-name->node-id","rule-name->node-id",-494456865),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rule)], null)))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rule))," already exists in session"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var conditions = new cljs.core.Keyword(null,"conditions","conditions",-1647236270).cljs$core$IFn$_invoke$arity$1(rule);
var session__$1 = cljs.core.reduce.call(null,odoyle.rules.add_condition,session,conditions);
var leaf_node_id = cljs.core.last.call(null,new cljs.core.Keyword(null,"mem-node-ids","mem-node-ids",-187587170).cljs$core$IFn$_invoke$arity$1(session__$1));
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(session__$1);
var session__$2 = cljs.core.reduce.call(null,(function (session__$2,mem_node_id){
return cljs.core.update_in.call(null,session__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),mem_node_id], null),(function (mem_node){
return cljs.core.assoc.call(null,mem_node,new cljs.core.Keyword(null,"leaf-node-id","leaf-node-id",1646532738),leaf_node_id);
}));
}),session__$1,new cljs.core.Keyword(null,"mem-node-ids","mem-node-ids",-187587170).cljs$core$IFn$_invoke$arity$1(session__$1));
var session__$3 = cljs.core.reduce.call(null,(function (session__$3,join_node_id){
return cljs.core.update_in.call(null,session__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),join_node_id], null),(function (join_node){
return cljs.core.assoc.call(null,join_node,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),cljs.core.some.call(null,(function (p__22720){
var map__22721 = p__22720;
var map__22721__$1 = (((((!((map__22721 == null))))?(((((map__22721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22721):map__22721);
var field = cljs.core.get.call(null,map__22721__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var key = cljs.core.get.call(null,map__22721__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),field)) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(bindings),key)))){
return key;
} else {
return null;
}
}),new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(join_node))),new cljs.core.Keyword(null,"disable-fast-updates","disable-fast-updates",-1739419985),cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(bindings),cljs.core.some.call(null,(function (p__22723){
var map__22724 = p__22723;
var map__22724__$1 = (((((!((map__22724 == null))))?(((((map__22724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22724):map__22724);
var field = cljs.core.get.call(null,map__22724__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var key = cljs.core.get.call(null,map__22724__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217),field)){
return key;
} else {
return null;
}
}),new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(join_node)))));
}));
}),session__$2,new cljs.core.Keyword(null,"join-node-ids","join-node-ids",657551750).cljs$core$IFn$_invoke$arity$1(session__$2));
return cljs.core.dissoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,session__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),leaf_node_id,new cljs.core.Keyword(null,"when-fn","when-fn",-57616971)], null),new cljs.core.Keyword(null,"when-fn","when-fn",-57616971).cljs$core$IFn$_invoke$arity$1(rule)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),leaf_node_id,new cljs.core.Keyword(null,"then-fn","then-fn",368241976)], null),new cljs.core.Keyword(null,"then-fn","then-fn",368241976).cljs$core$IFn$_invoke$arity$1(rule)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),leaf_node_id,new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222)], null),new cljs.core.Keyword(null,"then-finally-fn","then-finally-fn",1593595222).cljs$core$IFn$_invoke$arity$1(rule)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rule-name->node-id","rule-name->node-id",-494456865),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rule)], null),leaf_node_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-id->rule-name","node-id->rule-name",1615893599),leaf_node_id], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rule)),new cljs.core.Keyword(null,"mem-node-ids","mem-node-ids",-187587170),new cljs.core.Keyword(null,"join-node-ids","join-node-ids",657551750),new cljs.core.Keyword(null,"bindings","bindings",1271397192));
});
/**
 * Returns a new session.
 */
odoyle.rules.__GT_session = (function odoyle$rules$__GT_session(){
return odoyle.rules.map__GT_Session.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"alpha-node","alpha-node",1411603897),odoyle.rules.map__GT_AlphaNode.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),null,new cljs.core.Keyword(null,"test-value","test-value",-824942526),null,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"last-id","last-id",-1231616450),(-1),new cljs.core.Keyword(null,"rule-name->node-id","rule-name->node-id",-494456865),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"node-id->rule-name","node-id->rule-name",1615893599),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"id-attr-nodes","id-attr-nodes",-1814751183),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"then-queue","then-queue",899186975),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"then-finally-queue","then-finally-queue",2088468149),cljs.core.PersistentHashSet.EMPTY], null));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("odoyle.rules","Session","odoyle.rules/Session",403735652,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__22726_SHARP_){
return (p1__22726_SHARP_ instanceof odoyle.rules.Session);
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","insert-args","odoyle.rules/insert-args",-282826046),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"single-combo","single-combo",634952452),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376))),new cljs.core.Keyword(null,"batch","batch",-662921200),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword(null,"attr->value","attr->value",-564177582),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376))),new cljs.core.Keyword(null,"single","single",1551466437),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376))),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"single-combo","single-combo",634952452),new cljs.core.Keyword(null,"batch","batch",-662921200),new cljs.core.Keyword(null,"single","single",1551466437)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword(null,"attr->value","attr->value",-564177582),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"fact","fact",-799816531)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376))], null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"attr->value","attr->value",-564177582)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__22727){
return cljs.core.map_QMARK_.call(null,G__22727);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__16537__auto__,v__16538__auto__){
return cljs.core.nth.call(null,v__16538__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376))], null),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376))], null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376)], null))], null),null));
odoyle.rules.check_insert_spec = (function odoyle$rules$check_insert_spec(var_args){
var G__22729 = arguments.length;
switch (G__22729) {
case 1:
return odoyle.rules.check_insert_spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return odoyle.rules.check_insert_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(odoyle.rules.check_insert_spec.cljs$core$IFn$_invoke$arity$1 = (function (p__22730){
var vec__22731 = p__22730;
var attr = cljs.core.nth.call(null,vec__22731,(0),null);
var value = cljs.core.nth.call(null,vec__22731,(1),null);
return odoyle.rules.check_insert_spec.call(null,attr,value);
}));

(odoyle.rules.check_insert_spec.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
var temp__5733__auto__ = cljs.spec.alpha.get_spec.call(null,attr);
if(cljs.core.truth_(temp__5733__auto__)){
var spec = temp__5733__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),cljs.spec.alpha.conform.call(null,spec,value))){
throw cljs.core.ex_info.call(null,["Error when checking attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.alpha.expound_str.call(null,spec,value))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
throw cljs.core.ex_info.call(null,["Couldn't find spec with name ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),"\n","If you don't want o'doyle to require specs for attributes, call","\n","(clojure.spec.test.alpha/unstrument 'odoyle.rules/insert)","\n"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

(odoyle.rules.check_insert_spec.cljs$lang$maxFixedArity = 2);

odoyle.rules.insert_conformer = cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"parsed-args","parsed-args",-952619408,null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","case","cljs.core/case",-1674122212,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Keyword(null,"single-combo","single-combo",634952452),cljs.core.list(new cljs.core.Symbol("odoyle.rules","check-insert-spec","odoyle.rules/check-insert-spec",-1576788889,null),cljs.core.list(new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),cljs.core.list(new cljs.core.Keyword(null,"fact","fact",-799816531),new cljs.core.Symbol(null,"args","args",-1338879193,null)),(1)),cljs.core.list(new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),cljs.core.list(new cljs.core.Keyword(null,"fact","fact",-799816531),new cljs.core.Symbol(null,"args","args",-1338879193,null)),(2))),new cljs.core.Keyword(null,"batch","batch",-662921200),cljs.core.list(new cljs.core.Symbol("cljs.core","run!","cljs.core/run!",-591566066,null),new cljs.core.Symbol("odoyle.rules","check-insert-spec","odoyle.rules/check-insert-spec",-1576788889,null),cljs.core.list(new cljs.core.Keyword(null,"attr->value","attr->value",-564177582),new cljs.core.Symbol(null,"args","args",-1338879193,null))),new cljs.core.Keyword(null,"single","single",1551466437),cljs.core.list(new cljs.core.Symbol("odoyle.rules","check-insert-spec","odoyle.rules/check-insert-spec",-1576788889,null),cljs.core.list(new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Symbol(null,"args","args",-1338879193,null)),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"args","args",-1338879193,null)))),new cljs.core.Symbol(null,"parsed-args","parsed-args",-952619408,null))),(function (p__22735){
var vec__22736 = p__22735;
var kind = cljs.core.nth.call(null,vec__22736,(0),null);
var args = cljs.core.nth.call(null,vec__22736,(1),null);
var parsed_args = vec__22736;
var G__22739_22740 = kind;
var G__22739_22741__$1 = (((G__22739_22740 instanceof cljs.core.Keyword))?G__22739_22740.fqn:null);
switch (G__22739_22741__$1) {
case "single-combo":
odoyle.rules.check_insert_spec.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(args),(1)),cljs.core.nth.call(null,new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(args),(2)));

break;
case "batch":
cljs.core.run_BANG_.call(null,odoyle.rules.check_insert_spec,new cljs.core.Keyword(null,"attr->value","attr->value",-564177582).cljs$core$IFn$_invoke$arity$1(args));

break;
case "single":
odoyle.rules.check_insert_spec.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(args));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22739_22741__$1)].join('')));

}

return parsed_args;
}),null,true);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("odoyle.rules","insert","odoyle.rules/insert",808133771,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Keyword("odoyle.rules","insert-args","odoyle.rules/insert-args",-282826046),new cljs.core.Symbol("odoyle.rules","insert-conformer","odoyle.rules/insert-conformer",-1948268457,null))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Keyword("odoyle.rules","insert-args","odoyle.rules/insert-args",-282826046),new cljs.core.Symbol("odoyle.rules","insert-conformer","odoyle.rules/insert-conformer",-1948268457,null)),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","insert-args","odoyle.rules/insert-args",-282826046),new cljs.core.Symbol("odoyle.rules","insert-conformer","odoyle.rules/insert-conformer",-1948268457,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","insert-args","odoyle.rules/insert-args",-282826046),odoyle.rules.insert_conformer], null),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Keyword("odoyle.rules","insert-args","odoyle.rules/insert-args",-282826046),new cljs.core.Symbol("odoyle.rules","insert-conformer","odoyle.rules/insert-conformer",-1948268457,null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Inserts a fact into the session. Can optionally insert multiple facts with the same id.
 *   
 *   Note: if the given fact doesn't match at least one rule, it will be discarded.
 */
odoyle.rules.insert = (function odoyle$rules$insert(var_args){
var G__22744 = arguments.length;
switch (G__22744) {
case 2:
return odoyle.rules.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return odoyle.rules.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return odoyle.rules.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(odoyle.rules.insert.cljs$core$IFn$_invoke$arity$2 = (function (session,p__22745){
var vec__22746 = p__22745;
var id = cljs.core.nth.call(null,vec__22746,(0),null);
var attr = cljs.core.nth.call(null,vec__22746,(1),null);
var value = cljs.core.nth.call(null,vec__22746,(2),null);
return odoyle.rules.insert.call(null,session,id,attr,value);
}));

(odoyle.rules.insert.cljs$core$IFn$_invoke$arity$3 = (function (session,id,attr__GT_value){
return cljs.core.reduce_kv.call(null,(function (session__$1,attr,value){
return odoyle.rules.insert.call(null,session__$1,id,attr,value);
}),session,attr__GT_value);
}));

(odoyle.rules.insert.cljs$core$IFn$_invoke$arity$4 = (function (session,id,attr,value){
return odoyle.rules.upsert_fact.call(null,session,id,attr,value,odoyle.rules.get_alpha_nodes_for_fact.call(null,session,new cljs.core.Keyword(null,"alpha-node","alpha-node",1411603897).cljs$core$IFn$_invoke$arity$1(session),id,attr,value,true));
}));

(odoyle.rules.insert.cljs$lang$maxFixedArity = 4);

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rules","insert!-args","odoyle.rules/insert!-args",918840258),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"batch","batch",-662921200),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword(null,"attr->value","attr->value",-564177582),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376))),new cljs.core.Keyword(null,"single","single",1551466437),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376))),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"batch","batch",-662921200),new cljs.core.Keyword(null,"single","single",1551466437)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword(null,"attr->value","attr->value",-564177582),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"attr->value","attr->value",-564177582)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__22750){
return cljs.core.map_QMARK_.call(null,G__22750);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__16537__auto__,v__16538__auto__){
return cljs.core.nth.call(null,v__16538__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376))], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376))], null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946),new cljs.core.Keyword("odoyle.rules","value","odoyle.rules/value",-1734407376)], null))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("odoyle.rules","insert!","odoyle.rules/insert!",-907194027,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword("odoyle.rules","insert!-args","odoyle.rules/insert!-args",918840258)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("odoyle.rules","insert!-args","odoyle.rules/insert!-args",918840258),new cljs.core.Keyword("odoyle.rules","insert!-args","odoyle.rules/insert!-args",918840258),null,null),new cljs.core.Keyword("odoyle.rules","insert!-args","odoyle.rules/insert!-args",918840258),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Equivalent to:
 *   
 *   (o/reset! (o/insert o/*session* id attr value))
 *   
 *   Using the long form is recommended.
 */
odoyle.rules.insert_BANG_ = (function odoyle$rules$insert_BANG_(var_args){
var G__22752 = arguments.length;
switch (G__22752) {
case 2:
return odoyle.rules.insert_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return odoyle.rules.insert_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(odoyle.rules.insert_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,attr__GT_value){
return cljs.core.run_BANG_.call(null,(function (p__22753){
var vec__22754 = p__22753;
var attr = cljs.core.nth.call(null,vec__22754,(0),null);
var value = cljs.core.nth.call(null,vec__22754,(1),null);
return odoyle.rules.insert_BANG_.call(null,id,attr,value);
}),attr__GT_value);
}));

(odoyle.rules.insert_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (id,attr,value){
if(cljs.core.truth_(odoyle.rules._STAR_mutable_session_STAR_)){
return cljs.core._vreset_BANG_.call(null,odoyle.rules._STAR_mutable_session_STAR_,odoyle.rules.insert.call(null,cljs.core._deref.call(null,odoyle.rules._STAR_mutable_session_STAR_),id,attr,value));
} else {
throw cljs.core.ex_info.call(null,"This function must be called in a :then or :then-finally block",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(odoyle.rules.insert_BANG_.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("odoyle.rules","retract","odoyle.rules/retract",-2100653509,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"attr","attr",-604132353)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Retracts the fact with the given id + attr combo.
 */
odoyle.rules.retract = (function odoyle$rules$retract(session,id,attr){
var id_PLUS_attr = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr], null);
var node_paths = cljs.core.get_in.call(null,session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id-attr-nodes","id-attr-nodes",-1814751183),id_PLUS_attr], null));
if(cljs.core.truth_(node_paths)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_PLUS_attr)," not in session"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

return cljs.core.reduce.call(null,(function (session__$1,node_path){
var node = cljs.core.get_in.call(null,session__$1,node_path);
var fact = cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"facts","facts",-1734543718),id,attr], null));
return odoyle.rules.right_activate_alpha_node.call(null,session__$1,node_path,odoyle.rules.__GT_Token.call(null,fact,new cljs.core.Keyword(null,"retract","retract",-1549826125),null));
}),session,node_paths);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("odoyle.rules","retract!","odoyle.rules/retract!",-789805773,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"attr","attr",-604132353)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("odoyle.rules","attr","odoyle.rules/attr",1369512946)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Equivalent to:
 *   
 *   (o/reset! (o/retract o/*session* id attr))
 *   
 *   Using the long form is recommended.
 */
odoyle.rules.retract_BANG_ = (function odoyle$rules$retract_BANG_(id,attr){
if(cljs.core.truth_(odoyle.rules._STAR_mutable_session_STAR_)){
return cljs.core._vreset_BANG_.call(null,odoyle.rules._STAR_mutable_session_STAR_,odoyle.rules.retract.call(null,cljs.core._deref.call(null,odoyle.rules._STAR_mutable_session_STAR_),id,attr));
} else {
throw cljs.core.ex_info.call(null,"This function must be called in a :then or :then-finally block",cljs.core.PersistentArrayMap.EMPTY);
}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("odoyle.rules","query-all","odoyle.rules/query-all",917544666,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword(null,"rule-name","rule-name",78307165),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword(null,"rule-name","rule-name",78307165),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"rule-name","rule-name",78307165)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),cljs.spec.alpha.maybe_impl.call(null,cljs.core.qualified_keyword_QMARK_,new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("odoyle.rules","session","odoyle.rules/session",-1187271042),new cljs.core.Keyword(null,"rule-name","rule-name",78307165),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null))),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * When called with just a session, returns a vector of all inserted facts.
 *   Otherwise, returns a vector of maps containing all the matches for the given rule.
 */
odoyle.rules.query_all = (function odoyle$rules$query_all(var_args){
var G__22759 = arguments.length;
switch (G__22759) {
case 1:
return odoyle.rules.query_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return odoyle.rules.query_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(odoyle.rules.query_all.cljs$core$IFn$_invoke$arity$1 = (function (session){
return cljs.core.mapv.call(null,(function (p__22760){
var vec__22761 = p__22760;
var vec__22764 = cljs.core.nth.call(null,vec__22761,(0),null);
var id = cljs.core.nth.call(null,vec__22764,(0),null);
var attr = cljs.core.nth.call(null,vec__22764,(1),null);
var nodes = cljs.core.nth.call(null,vec__22761,(1),null);
return cljs.core.juxt.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217)).call(null,cljs.core.get_in.call(null,cljs.core.get_in.call(null,session,cljs.core.first.call(null,nodes)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"facts","facts",-1734543718),id,attr], null)));
}),new cljs.core.Keyword(null,"id-attr-nodes","id-attr-nodes",-1814751183).cljs$core$IFn$_invoke$arity$1(session));
}));

(odoyle.rules.query_all.cljs$core$IFn$_invoke$arity$2 = (function (session,rule_name){
var rule_id = (function (){var or__4126__auto__ = cljs.core.get_in.call(null,session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rule-name->node-id","rule-name->node-id",-494456865),rule_name], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rule_name)," not in session"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var rule = cljs.core.get_in.call(null,session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beta-nodes","beta-nodes",-674152665),rule_id], null));
return cljs.core.reduce_kv.call(null,(function (v,_,p__22767){
var map__22768 = p__22767;
var map__22768__$1 = (((((!((map__22768 == null))))?(((((map__22768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22768):map__22768);
var vars = cljs.core.get.call(null,map__22768__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var enabled = cljs.core.get.call(null,map__22768__$1,new cljs.core.Keyword(null,"enabled","enabled",1195909756));
if(cljs.core.truth_(enabled)){
return cljs.core.conj.call(null,v,vars);
} else {
return v;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(rule));
}));

(odoyle.rules.query_all.cljs$lang$maxFixedArity = 2);

/**
 * Mutates the session from a :then or :then-finally block.
 */
odoyle.rules.reset_BANG_ = (function odoyle$rules$reset_BANG_(new_session){
if(cljs.core.truth_(odoyle.rules._STAR_mutable_session_STAR_)){
if(cljs.core._EQ_.call(null,odoyle.rules._STAR_session_STAR_,cljs.core.deref.call(null,odoyle.rules._STAR_mutable_session_STAR_))){
return cljs.core.vreset_BANG_.call(null,odoyle.rules._STAR_mutable_session_STAR_,new_session);
} else {
throw cljs.core.ex_info.call(null,"You may only call `reset!` once in a :then or :then-finally block",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
throw cljs.core.ex_info.call(null,"You may only call `reset!` in a :then or :then-finally block",cljs.core.PersistentArrayMap.EMPTY);
}
});

//# sourceMappingURL=rules.js.map
