// Compiled by ClojureScript 1.10.764 {}
goog.provide('datomic.ion.starter.core');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('odoyle.rules');
goog.require('odoyle.rum');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("datomic.ion.starter.core","text","datomic.ion.starter.core/text",-2097538918),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("datomic.ion.starter.core","done","datomic.ion.starter.core/done",-1129713689),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("datomic.ion.starter.core","todo","datomic.ion.starter.core/todo",-604719369),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datomic.ion.starter.core","text","datomic.ion.starter.core/text",-2097538918),new cljs.core.Keyword("datomic.ion.starter.core","done","datomic.ion.starter.core/done",-1129713689)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datomic.ion.starter.core","text","datomic.ion.starter.core/text",-2097538918),new cljs.core.Keyword("datomic.ion.starter.core","done","datomic.ion.starter.core/done",-1129713689)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__22845){
return cljs.core.map_QMARK_.call(null,G__22845);
}),(function (G__22845){
return cljs.core.contains_QMARK_.call(null,G__22845,new cljs.core.Keyword(null,"text","text",-1790561697));
}),(function (G__22845){
return cljs.core.contains_QMARK_.call(null,G__22845,new cljs.core.Keyword(null,"done","done",-889844188));
})], null),(function (G__22845){
return ((cljs.core.map_QMARK_.call(null,G__22845)) && (cljs.core.contains_QMARK_.call(null,G__22845,new cljs.core.Keyword(null,"text","text",-1790561697))) && (cljs.core.contains_QMARK_.call(null,G__22845,new cljs.core.Keyword(null,"done","done",-889844188))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datomic.ion.starter.core","text","datomic.ion.starter.core/text",-2097538918),new cljs.core.Keyword("datomic.ion.starter.core","done","datomic.ion.starter.core/done",-1129713689)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"done","done",-889844188)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"text","text",-1790561697))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"done","done",-889844188)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("datomic.ion.starter.core","all-todos","datomic.ion.starter.core/all-todos",999052800),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("datomic.ion.starter.core","todo","datomic.ion.starter.core/todo",-604719369)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("datomic.ion.starter.core","todo","datomic.ion.starter.core/todo",-604719369),new cljs.core.Keyword("datomic.ion.starter.core","todo","datomic.ion.starter.core/todo",-604719369),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__22846){
return cljs.core.coll_QMARK_.call(null,G__22846);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("datomic.ion.starter.core","todo","datomic.ion.starter.core/todo",-604719369))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("datomic.ion.starter.core","next-id","datomic.ion.starter.core/next-id",-438417175),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),cljs.core.integer_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("datomic.ion.starter.core","showing","datomic.ion.starter.core/showing",589644353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"completed","completed",-486056503),"null",new cljs.core.Keyword(null,"all","all",892129742),"null",new cljs.core.Keyword(null,"active","active",1895962068),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"completed","completed",-486056503),null,new cljs.core.Keyword(null,"all","all",892129742),null,new cljs.core.Keyword(null,"active","active",1895962068),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("datomic.ion.starter.core","upsert-todo","datomic.ion.starter.core/upsert-todo",1082558582),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),cljs.core.integer_QMARK_);
datomic.ion.starter.core.refresh_all_todos = (function datomic$ion$starter$core$refresh_all_todos(session){
return odoyle.rules.insert.call(null,session,new cljs.core.Keyword("datomic.ion.starter.core","global","datomic.ion.starter.core/global",-266878964),new cljs.core.Keyword("datomic.ion.starter.core","all-todos","datomic.ion.starter.core/all-todos",999052800),cljs.core.vec.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),odoyle.rules.query_all.call(null,session,new cljs.core.Keyword("datomic.ion.starter.core","get-todo-item","datomic.ion.starter.core/get-todo-item",-1577963802)))));
});
datomic.ion.starter.core.insert_all_todos = (function datomic$ion$starter$core$insert_all_todos(session,todos){
return odoyle.rules.fire_rules.call(null,cljs.core.reduce.call(null,(function (session__$1,p__22847){
var map__22848 = p__22847;
var map__22848__$1 = (((((!((map__22848 == null))))?(((((map__22848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22848):map__22848);
var id = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var done = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"done","done",-889844188));
return odoyle.rules.insert.call(null,session__$1,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("datomic.ion.starter.core","text","datomic.ion.starter.core/text",-2097538918),text,new cljs.core.Keyword("datomic.ion.starter.core","done","datomic.ion.starter.core/done",-1129713689),done], null));
}),session,todos));
});
datomic.ion.starter.core.get_all_todos = (function datomic$ion$starter$core$get_all_todos(session){
return new cljs.core.Keyword(null,"all-todos","all-todos",1372764475).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,odoyle.rules.query_all.call(null,session,new cljs.core.Keyword("datomic.ion.starter.core","get-all-todos","datomic.ion.starter.core/get-all-todos",-1579042057))));
});
datomic.ion.starter.core.insert_BANG_ = (function datomic$ion$starter$core$insert_BANG_(_STAR_session,id,attr__GT_value){
return cljs.core.swap_BANG_.call(null,_STAR_session,(function (session){
return odoyle.rules.fire_rules.call(null,odoyle.rules.insert.call(null,session,id,attr__GT_value));
}));
});
datomic.ion.starter.core.retract_BANG_ = (function datomic$ion$starter$core$retract_BANG_(_STAR_session,id){
return cljs.core.swap_BANG_.call(null,_STAR_session,(function (session){
return odoyle.rules.fire_rules.call(null,odoyle.rules.retract.call(null,odoyle.rules.retract.call(null,session,id,new cljs.core.Keyword("datomic.ion.starter.core","text","datomic.ion.starter.core/text",-2097538918)),id,new cljs.core.Keyword("datomic.ion.starter.core","done","datomic.ion.starter.core/done",-1129713689)));
}));
});
datomic.ion.starter.core.rules = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.__GT_Rule.call(null,new cljs.core.Keyword("datomic.ion.starter.core","get-todo-item","datomic.ion.starter.core/get-todo-item",-1577963802),cljs.core.mapv.call(null,odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"text","text",-150030170,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"text","text",-1790561697)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","text","datomic.ion.starter.core/text",-2097538918),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"done","done",750687339,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"done","done",-889844188)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","done","datomic.ion.starter.core/done",-1129713689),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null)], null)),null,(function datomic$ion$starter$core$datomic_ion_starter_core_get_todo_item(p__22850){
var map__22851 = p__22850;
var map__22851__$1 = (((((!((map__22851 == null))))?(((((map__22851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22851):map__22851);
var text = cljs.core.get.call(null,map__22851__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var done = cljs.core.get.call(null,map__22851__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var id = cljs.core.get.call(null,map__22851__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return odoyle.rules.reset_BANG_.call(null,odoyle.rules.insert.call(null,odoyle.rules._STAR_session_STAR_,new cljs.core.Keyword("datomic.ion.starter.core","event","datomic.ion.starter.core/event",-356274187),new cljs.core.Keyword("datomic.ion.starter.core","upsert-todo","datomic.ion.starter.core/upsert-todo",1082558582),id));
}),(function datomic$ion$starter$core$datomic_ion_starter_core_get_todo_item(){
return odoyle.rules.reset_BANG_.call(null,datomic.ion.starter.core.refresh_all_todos.call(null,odoyle.rules._STAR_session_STAR_));
})),odoyle.rules.__GT_Rule.call(null,new cljs.core.Keyword("datomic.ion.starter.core","update-next-id","datomic.ion.starter.core/update-next-id",-249692941),cljs.core.mapv.call(null,odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","event","datomic.ion.starter.core/event",-356274187),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","upsert-todo","datomic.ion.starter.core/upsert-todo",1082558582),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"next-id","next-id",-224240762)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","global","datomic.ion.starter.core/global",-266878964),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","next-id","datomic.ion.starter.core/next-id",-438417175),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),false], null)], null)], null)], null)),(function datomic$ion$starter$core$datomic_ion_starter_core_update_next_id(p__22853){
var map__22854 = p__22853;
var map__22854__$1 = (((((!((map__22854 == null))))?(((((map__22854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22854):map__22854);
var next_id = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"next-id","next-id",-224240762));
var id = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return (id >= next_id);
}),(function datomic$ion$starter$core$datomic_ion_starter_core_update_next_id(p__22856){
var map__22857 = p__22856;
var map__22857__$1 = (((((!((map__22857 == null))))?(((((map__22857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22857):map__22857);
var next_id = cljs.core.get.call(null,map__22857__$1,new cljs.core.Keyword(null,"next-id","next-id",-224240762));
var id = cljs.core.get.call(null,map__22857__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return odoyle.rules.reset_BANG_.call(null,odoyle.rules.insert.call(null,odoyle.rules._STAR_session_STAR_,new cljs.core.Keyword("datomic.ion.starter.core","global","datomic.ion.starter.core/global",-266878964),new cljs.core.Keyword("datomic.ion.starter.core","next-id","datomic.ion.starter.core/next-id",-438417175),(id + (1))));
}),null),odoyle.rules.__GT_Rule.call(null,new cljs.core.Keyword("datomic.ion.starter.core","get-all-todos","datomic.ion.starter.core/get-all-todos",-1579042057),cljs.core.mapv.call(null,odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"all-todos","all-todos",-1281671294,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"all-todos","all-todos",1372764475)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","global","datomic.ion.starter.core/global",-266878964),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","all-todos","datomic.ion.starter.core/all-todos",999052800),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null)], null)),null,null,null)], null);
datomic.ion.starter.core.components = (function (){






return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var _STAR_match__22807__auto__ = cljs.core.atom.call(null,null);
datomic.ion.starter.core.app_root = rum.core.build_defc.call(null,(function (prop__22808__auto__){
if(((false) && (cljs.core.not.call(null,odoyle.rules._STAR_match_STAR_)))){
throw cljs.core.ex_info.call(null,["datomic.ion.starter.core/app-root"," cannot render because the :what block doesn't have a complete match yet"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var map__22859 = odoyle.rules._STAR_match_STAR_;
var map__22859__$1 = (((((!((map__22859 == null))))?(((((map__22859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22859):map__22859);
var _STAR_session = odoyle.rum.prop.call(null);
return React.createElement("div",null,React.createElement("section",({"id": "todoapp"}),React.createElement("header",({"id": "header"}),React.createElement("h1",null,"todos"),sablono.interpreter.interpret.call(null,datomic.ion.starter.core.todo_input.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-text","initial-text",1211686190),"",new cljs.core.Keyword(null,"*session","*session",-1858481143),_STAR_session], null)))),sablono.interpreter.interpret.call(null,datomic.ion.starter.core.todo_list.call(null,_STAR_session)),sablono.interpreter.interpret.call(null,datomic.ion.starter.core.footer.call(null,_STAR_session)),sablono.interpreter.interpret.call(null,datomic.ion.starter.core.pomodoro.call(null,_STAR_session))),React.createElement("footer",({"id": "info"}),React.createElement("p",null,"Double-click to edit a todo")));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rum.reactive.call(null,new cljs.core.Keyword("datomic.ion.starter.core","app-root","datomic.ion.starter.core/app-root",-1668556413),_STAR_match__22807__auto__)], null),"app-root");

return odoyle.rules.__GT_Rule.call(null,new cljs.core.Keyword("datomic.ion.starter.core","app-root","datomic.ion.starter.core/app-root",-1668556413),cljs.core.mapv.call(null,odoyle.rules.map__GT_Condition,cljs.core.PersistentVector.EMPTY),null,(function (arg__22809__auto__){
if(cljs.core.truth_(odoyle.rum._STAR_matches_STAR_)){
return cljs.core._vreset_BANG_.call(null,odoyle.rum._STAR_matches_STAR_,cljs.core.assoc.call(null,cljs.core._deref.call(null,odoyle.rum._STAR_matches_STAR_),new cljs.core.Keyword("datomic.ion.starter.core","app-root","datomic.ion.starter.core/app-root",-1668556413),arg__22809__auto__));
} else {
return cljs.core.reset_BANG_.call(null,_STAR_match__22807__auto__,arg__22809__auto__);
}
}),null);
})(),(function (){var _STAR_match__22807__auto__ = cljs.core.atom.call(null,null);
datomic.ion.starter.core.footer = rum.core.build_defc.call(null,(function (prop__22808__auto__){
if(((true) && (cljs.core.not.call(null,odoyle.rules._STAR_match_STAR_)))){
throw cljs.core.ex_info.call(null,["datomic.ion.starter.core/footer"," cannot render because the :what block doesn't have a complete match yet"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var map__22865 = odoyle.rules._STAR_match_STAR_;
var map__22865__$1 = (((((!((map__22865 == null))))?(((((map__22865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22865):map__22865);
var all_todos = cljs.core.get.call(null,map__22865__$1,new cljs.core.Keyword(null,"all-todos","all-todos",1372764475));
var showing = cljs.core.get.call(null,map__22865__$1,new cljs.core.Keyword(null,"showing","showing",798009604));
var _STAR_session = odoyle.rum.prop.call(null);
var active_todos = cljs.core.remove.call(null,new cljs.core.Keyword(null,"done","done",-889844188),all_todos);
var completed_todos = cljs.core.filter.call(null,new cljs.core.Keyword(null,"done","done",-889844188),all_todos);
var active = cljs.core.count.call(null,active_todos);
var completed = cljs.core.count.call(null,completed_todos);
var filter_attrs = (function (filter_kw){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,filter_kw,showing))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return datomic.ion.starter.core.insert_BANG_.call(null,_STAR_session,new cljs.core.Keyword("datomic.ion.starter.core","global","datomic.ion.starter.core/global",-266878964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("datomic.ion.starter.core","showing","datomic.ion.starter.core/showing",589644353),filter_kw], null));
})], null);
});
return React.createElement("footer",({"id": "footer"}),React.createElement("span",({"id": "todo-count"}),(function (){var attrs22867 = active;
return cljs.core.apply.call(null,React.createElement,"strong",((cljs.core.map_QMARK_.call(null,attrs22867))?sablono.interpreter.attributes.call(null,attrs22867):null),((cljs.core.map_QMARK_.call(null,attrs22867))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22867)], null)));
})()," ",sablono.interpreter.interpret.call(null,(function (){var G__22868 = active;
switch (G__22868) {
case (1):
return "item";

break;
default:
return "items";

}
})())," left"),React.createElement("ul",({"id": "filters"}),React.createElement("li",null,(function (){var attrs22869 = filter_attrs.call(null,new cljs.core.Keyword(null,"all","all",892129742));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22869))?sablono.interpreter.attributes.call(null,attrs22869):null),((cljs.core.map_QMARK_.call(null,attrs22869))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22869),"All"], null)));
})()),React.createElement("li",null,(function (){var attrs22870 = filter_attrs.call(null,new cljs.core.Keyword(null,"active","active",1895962068));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22870))?sablono.interpreter.attributes.call(null,attrs22870):null),((cljs.core.map_QMARK_.call(null,attrs22870))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22870),"Active"], null)));
})()),React.createElement("li",null,(function (){var attrs22871 = filter_attrs.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22871))?sablono.interpreter.attributes.call(null,attrs22871):null),((cljs.core.map_QMARK_.call(null,attrs22871))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22871),"Completed"], null)));
})())),sablono.interpreter.interpret.call(null,(((completed > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#clear-completed","button#clear-completed",-1698725142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.run_BANG_.call(null,cljs.core.partial.call(null,datomic.ion.starter.core.retract_BANG_,_STAR_session),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),completed_todos));
})], null),"Clear completed"], null):null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rum.reactive.call(null,new cljs.core.Keyword("datomic.ion.starter.core","footer","datomic.ion.starter.core/footer",1897151375),_STAR_match__22807__auto__)], null),"footer");

return odoyle.rules.__GT_Rule.call(null,new cljs.core.Keyword("datomic.ion.starter.core","footer","datomic.ion.starter.core/footer",1897151375),cljs.core.mapv.call(null,odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"all-todos","all-todos",-1281671294,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"all-todos","all-todos",1372764475)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","global","datomic.ion.starter.core/global",-266878964),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","all-todos","datomic.ion.starter.core/all-todos",999052800),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"showing","showing",-1856426165,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"showing","showing",798009604)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","global","datomic.ion.starter.core/global",-266878964),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","showing","datomic.ion.starter.core/showing",589644353),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null)], null)),null,(function (arg__22809__auto__){
if(cljs.core.truth_(odoyle.rum._STAR_matches_STAR_)){
return cljs.core._vreset_BANG_.call(null,odoyle.rum._STAR_matches_STAR_,cljs.core.assoc.call(null,cljs.core._deref.call(null,odoyle.rum._STAR_matches_STAR_),new cljs.core.Keyword("datomic.ion.starter.core","footer","datomic.ion.starter.core/footer",1897151375),arg__22809__auto__));
} else {
return cljs.core.reset_BANG_.call(null,_STAR_match__22807__auto__,arg__22809__auto__);
}
}),null);
})(),(function (){var _STAR_match__22807__auto__ = cljs.core.atom.call(null,null);
datomic.ion.starter.core.todo_input = rum.core.build_defc.call(null,(function (prop__22808__auto__){
if(((true) && (cljs.core.not.call(null,odoyle.rules._STAR_match_STAR_)))){
throw cljs.core.ex_info.call(null,["datomic.ion.starter.core/todo-input"," cannot render because the :what block doesn't have a complete match yet"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var map__22872 = odoyle.rules._STAR_match_STAR_;
var map__22872__$1 = (((((!((map__22872 == null))))?(((((map__22872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22872):map__22872);
var next_id = cljs.core.get.call(null,map__22872__$1,new cljs.core.Keyword(null,"next-id","next-id",-224240762));
var map__22874 = odoyle.rum.prop.call(null);
var map__22874__$1 = (((((!((map__22874 == null))))?(((((map__22874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22874):map__22874);
var _STAR_session = cljs.core.get.call(null,map__22874__$1,new cljs.core.Keyword(null,"*session","*session",-1858481143));
var initial_text = cljs.core.get.call(null,map__22874__$1,new cljs.core.Keyword(null,"initial-text","initial-text",1211686190));
var id = cljs.core.get.call(null,map__22874__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_finish = cljs.core.get.call(null,map__22874__$1,new cljs.core.Keyword(null,"on-finish","on-finish",743031869));
var _STAR_text = odoyle.rum.atom.call(null,initial_text);
var text = cljs.core.deref.call(null,_STAR_text);
var next_id__$1 = (function (){var or__4126__auto__ = id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return next_id;
}
})();
var on_finish__$1 = (function (){var or__4126__auto__ = on_finish;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (function (){
return cljs.core.reset_BANG_.call(null,_STAR_text,"");
});
}
})();
return sablono.interpreter.create_element.call(null,"input",({"type": "text", "placeholder": (cljs.core.truth_(id)?"Enter your edit":"What needs to be done?"), "autoFocus": true, "value": text, "onBlur": on_finish__$1, "onChange": (function (e){
return cljs.core.reset_BANG_.call(null,_STAR_text,e.target.value);
}), "onKeyDown": (function (e){
var G__22876 = e.keyCode;
switch (G__22876) {
case (13):
var todo = (cljs.core.truth_(id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("datomic.ion.starter.core","text","datomic.ion.starter.core/text",-2097538918),text], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("datomic.ion.starter.core","text","datomic.ion.starter.core/text",-2097538918),text,new cljs.core.Keyword("datomic.ion.starter.core","done","datomic.ion.starter.core/done",-1129713689),false], null));
datomic.ion.starter.core.insert_BANG_.call(null,_STAR_session,next_id__$1,todo);

return on_finish__$1.call(null);

break;
case (27):
return on_finish__$1.call(null);

break;
default:
return null;

}
}), "className": "edit"}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rum.reactive.call(null,new cljs.core.Keyword("datomic.ion.starter.core","todo-input","datomic.ion.starter.core/todo-input",1501205495),_STAR_match__22807__auto__)], null),"todo-input");

return odoyle.rules.__GT_Rule.call(null,new cljs.core.Keyword("datomic.ion.starter.core","todo-input","datomic.ion.starter.core/todo-input",1501205495),cljs.core.mapv.call(null,odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"next-id","next-id",-224240762)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","global","datomic.ion.starter.core/global",-266878964),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","next-id","datomic.ion.starter.core/next-id",-438417175),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null)], null)),null,(function (arg__22809__auto__){
if(cljs.core.truth_(odoyle.rum._STAR_matches_STAR_)){
return cljs.core._vreset_BANG_.call(null,odoyle.rum._STAR_matches_STAR_,cljs.core.assoc.call(null,cljs.core._deref.call(null,odoyle.rum._STAR_matches_STAR_),new cljs.core.Keyword("datomic.ion.starter.core","todo-input","datomic.ion.starter.core/todo-input",1501205495),arg__22809__auto__));
} else {
return cljs.core.reset_BANG_.call(null,_STAR_match__22807__auto__,arg__22809__auto__);
}
}),null);
})(),(function (){var _STAR_match__22807__auto__ = cljs.core.atom.call(null,null);
datomic.ion.starter.core.todo_list = rum.core.build_defc.call(null,(function (prop__22808__auto__){
if(((true) && (cljs.core.not.call(null,odoyle.rules._STAR_match_STAR_)))){
throw cljs.core.ex_info.call(null,["datomic.ion.starter.core/todo-list"," cannot render because the :what block doesn't have a complete match yet"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var map__22877 = odoyle.rules._STAR_match_STAR_;
var map__22877__$1 = (((((!((map__22877 == null))))?(((((map__22877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22877):map__22877);
var all_todos = cljs.core.get.call(null,map__22877__$1,new cljs.core.Keyword(null,"all-todos","all-todos",1372764475));
var showing = cljs.core.get.call(null,map__22877__$1,new cljs.core.Keyword(null,"showing","showing",798009604));
var _STAR_session = odoyle.rum.prop.call(null);
return React.createElement("section",({"id": "main"}),React.createElement("ul",({"id": "todo-list"}),cljs.core.into_array.call(null,(function (){var iter__4529__auto__ = (function datomic$ion$starter$core$iter__22879(s__22880){
return (new cljs.core.LazySeq(null,(function (){
var s__22880__$1 = s__22880;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__22880__$1);
if(temp__5735__auto__){
var s__22880__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22880__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__22880__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__22882 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__22881 = (0);
while(true){
if((i__22881 < size__4528__auto__)){
var todo = cljs.core._nth.call(null,c__4527__auto__,i__22881);
if(cljs.core.truth_((function (){var G__22883 = showing;
var G__22883__$1 = (((G__22883 instanceof cljs.core.Keyword))?G__22883.fqn:null);
switch (G__22883__$1) {
case "all":
return true;

break;
case "active":
return cljs.core.not.call(null,new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(todo));

break;
case "completed":
return new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(todo);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22883__$1)].join('')));

}
})())){
cljs.core.chunk_append.call(null,b__22882,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,datomic.ion.starter.core.todo_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"*session","*session",-1858481143),_STAR_session,new cljs.core.Keyword(null,"todo","todo",-1046442570),todo], null)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo))));

var G__22897 = (i__22881 + (1));
i__22881 = G__22897;
continue;
} else {
var G__22898 = (i__22881 + (1));
i__22881 = G__22898;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22882),datomic$ion$starter$core$iter__22879.call(null,cljs.core.chunk_rest.call(null,s__22880__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22882),null);
}
} else {
var todo = cljs.core.first.call(null,s__22880__$2);
if(cljs.core.truth_((function (){var G__22884 = showing;
var G__22884__$1 = (((G__22884 instanceof cljs.core.Keyword))?G__22884.fqn:null);
switch (G__22884__$1) {
case "all":
return true;

break;
case "active":
return cljs.core.not.call(null,new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(todo));

break;
case "completed":
return new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(todo);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22884__$1)].join('')));

}
})())){
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,datomic.ion.starter.core.todo_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"*session","*session",-1858481143),_STAR_session,new cljs.core.Keyword(null,"todo","todo",-1046442570),todo], null)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo))),datomic$ion$starter$core$iter__22879.call(null,cljs.core.rest.call(null,s__22880__$2)));
} else {
var G__22900 = cljs.core.rest.call(null,s__22880__$2);
s__22880__$1 = G__22900;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,all_todos);
})())));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rum.reactive.call(null,new cljs.core.Keyword("datomic.ion.starter.core","todo-list","datomic.ion.starter.core/todo-list",1041954031),_STAR_match__22807__auto__)], null),"todo-list");

return odoyle.rules.__GT_Rule.call(null,new cljs.core.Keyword("datomic.ion.starter.core","todo-list","datomic.ion.starter.core/todo-list",1041954031),cljs.core.mapv.call(null,odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"all-todos","all-todos",-1281671294,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"all-todos","all-todos",1372764475)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","global","datomic.ion.starter.core/global",-266878964),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","all-todos","datomic.ion.starter.core/all-todos",999052800),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"showing","showing",-1856426165,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"showing","showing",798009604)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","global","datomic.ion.starter.core/global",-266878964),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","showing","datomic.ion.starter.core/showing",589644353),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null)], null)),null,(function (arg__22809__auto__){
if(cljs.core.truth_(odoyle.rum._STAR_matches_STAR_)){
return cljs.core._vreset_BANG_.call(null,odoyle.rum._STAR_matches_STAR_,cljs.core.assoc.call(null,cljs.core._deref.call(null,odoyle.rum._STAR_matches_STAR_),new cljs.core.Keyword("datomic.ion.starter.core","todo-list","datomic.ion.starter.core/todo-list",1041954031),arg__22809__auto__));
} else {
return cljs.core.reset_BANG_.call(null,_STAR_match__22807__auto__,arg__22809__auto__);
}
}),null);
})(),(function (){var _STAR_match__22807__auto__ = cljs.core.atom.call(null,null);
datomic.ion.starter.core.pomodoro = rum.core.build_defc.call(null,(function (prop__22808__auto__){
if(((true) && (cljs.core.not.call(null,odoyle.rules._STAR_match_STAR_)))){
throw cljs.core.ex_info.call(null,["datomic.ion.starter.core/pomodoro"," cannot render because the :what block doesn't have a complete match yet"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var map__22886 = odoyle.rules._STAR_match_STAR_;
var map__22886__$1 = (((((!((map__22886 == null))))?(((((map__22886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22886):map__22886);
var all_todos = cljs.core.get.call(null,map__22886__$1,new cljs.core.Keyword(null,"all-todos","all-todos",1372764475));
var attrs22885 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,all_todos));
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs22885))?sablono.interpreter.attributes.call(null,attrs22885):null),((cljs.core.map_QMARK_.call(null,attrs22885))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22885)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rum.reactive.call(null,new cljs.core.Keyword("datomic.ion.starter.core","pomodoro","datomic.ion.starter.core/pomodoro",48601356),_STAR_match__22807__auto__)], null),"pomodoro");

return odoyle.rules.__GT_Rule.call(null,new cljs.core.Keyword("datomic.ion.starter.core","pomodoro","datomic.ion.starter.core/pomodoro",48601356),cljs.core.mapv.call(null,odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"all-todos","all-todos",-1281671294,null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"all-todos","all-todos",1372764475)], null))], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","global","datomic.ion.starter.core/global",-266878964),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"test-field","test-field",1658646589),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"test-value","test-value",-824942526),new cljs.core.Keyword("datomic.ion.starter.core","all-todos","datomic.ion.starter.core/all-todos",999052800),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"facts","facts",-1734543718),cljs.core.PersistentArrayMap.EMPTY], null))], null),new cljs.core.Keyword(null,"opts","opts",155075701),null], null)], null)),null,(function (arg__22809__auto__){
if(cljs.core.truth_(odoyle.rum._STAR_matches_STAR_)){
return cljs.core._vreset_BANG_.call(null,odoyle.rum._STAR_matches_STAR_,cljs.core.assoc.call(null,cljs.core._deref.call(null,odoyle.rum._STAR_matches_STAR_),new cljs.core.Keyword("datomic.ion.starter.core","pomodoro","datomic.ion.starter.core/pomodoro",48601356),arg__22809__auto__));
} else {
return cljs.core.reset_BANG_.call(null,_STAR_match__22807__auto__,arg__22809__auto__);
}
}),null);
})(),(function (){var _STAR_match__22807__auto__ = cljs.core.atom.call(null,null);
datomic.ion.starter.core.todo_item = rum.core.build_defc.call(null,(function (prop__22808__auto__){
if(((false) && (cljs.core.not.call(null,odoyle.rules._STAR_match_STAR_)))){
throw cljs.core.ex_info.call(null,["datomic.ion.starter.core/todo-item"," cannot render because the :what block doesn't have a complete match yet"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var map__22888 = odoyle.rules._STAR_match_STAR_;
var map__22888__$1 = (((((!((map__22888 == null))))?(((((map__22888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22888):map__22888);
var _STAR_editing = odoyle.rum.atom.call(null,false);
var map__22890 = odoyle.rum.prop.call(null);
var map__22890__$1 = (((((!((map__22890 == null))))?(((((map__22890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22890):map__22890);
var _STAR_session = cljs.core.get.call(null,map__22890__$1,new cljs.core.Keyword(null,"*session","*session",-1858481143));
var todo = cljs.core.get.call(null,map__22890__$1,new cljs.core.Keyword(null,"todo","todo",-1046442570));
var map__22891 = todo;
var map__22891__$1 = (((((!((map__22891 == null))))?(((((map__22891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22891):map__22891);
var id = cljs.core.get.call(null,map__22891__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__22891__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var done = cljs.core.get.call(null,map__22891__$1,new cljs.core.Keyword(null,"done","done",-889844188));
return React.createElement("li",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[(cljs.core.truth_(done)?"completed ":null),(cljs.core.truth_(cljs.core.deref.call(null,_STAR_editing))?"editing":null)].join('')], null))}),React.createElement("div",({"className": "view"}),sablono.interpreter.create_element.call(null,"input",({"type": "checkbox", "checked": done, "onChange": (function (){
return datomic.ion.starter.core.insert_BANG_.call(null,_STAR_session,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("datomic.ion.starter.core","done","datomic.ion.starter.core/done",-1129713689),cljs.core.not.call(null,done)], null));
}), "className": "toggle"})),React.createElement("label",({"onDoubleClick": (function (){
return cljs.core.reset_BANG_.call(null,_STAR_editing,true);
})}),sablono.interpreter.interpret.call(null,text)),React.createElement("button",({"onClick": (function (){
return datomic.ion.starter.core.retract_BANG_.call(null,_STAR_session,id);
}), "className": "destroy"}))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(cljs.core.deref.call(null,_STAR_editing))?datomic.ion.starter.core.todo_input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"*session","*session",-1858481143),_STAR_session,new cljs.core.Keyword(null,"initial-text","initial-text",1211686190),text,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"on-finish","on-finish",743031869),(function (){
return cljs.core.reset_BANG_.call(null,_STAR_editing,false);
})], null)):null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rum.reactive.call(null,new cljs.core.Keyword("datomic.ion.starter.core","todo-item","datomic.ion.starter.core/todo-item",-764940225),_STAR_match__22807__auto__)], null),"todo-item");

return odoyle.rules.__GT_Rule.call(null,new cljs.core.Keyword("datomic.ion.starter.core","todo-item","datomic.ion.starter.core/todo-item",-764940225),cljs.core.mapv.call(null,odoyle.rules.map__GT_Condition,cljs.core.PersistentVector.EMPTY),null,(function (arg__22809__auto__){
if(cljs.core.truth_(odoyle.rum._STAR_matches_STAR_)){
return cljs.core._vreset_BANG_.call(null,odoyle.rum._STAR_matches_STAR_,cljs.core.assoc.call(null,cljs.core._deref.call(null,odoyle.rum._STAR_matches_STAR_),new cljs.core.Keyword("datomic.ion.starter.core","todo-item","datomic.ion.starter.core/todo-item",-764940225),arg__22809__auto__));
} else {
return cljs.core.reset_BANG_.call(null,_STAR_match__22807__auto__,arg__22809__auto__);
}
}),null);
})()], null);
})()
;
datomic.ion.starter.core.initial_session = odoyle.rules.fire_rules.call(null,odoyle.rules.insert.call(null,cljs.core.reduce.call(null,odoyle.rules.add_rule,odoyle.rules.__GT_session.call(null),cljs.core.concat.call(null,datomic.ion.starter.core.rules,datomic.ion.starter.core.components)),new cljs.core.Keyword("datomic.ion.starter.core","global","datomic.ion.starter.core/global",-266878964),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("datomic.ion.starter.core","all-todos","datomic.ion.starter.core/all-todos",999052800),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("datomic.ion.starter.core","showing","datomic.ion.starter.core/showing",589644353),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword("datomic.ion.starter.core","next-id","datomic.ion.starter.core/next-id",-438417175),(0)], null)));
if((typeof datomic !== 'undefined') && (typeof datomic.ion !== 'undefined') && (typeof datomic.ion.starter !== 'undefined') && (typeof datomic.ion.starter.core !== 'undefined') && (typeof datomic.ion.starter.core._STAR_session !== 'undefined')){
} else {
datomic.ion.starter.core._STAR_session = cljs.core.atom.call(null,datomic.ion.starter.core.initial_session);
}
cljs.core.swap_BANG_.call(null,datomic.ion.starter.core._STAR_session,(function (session){
return odoyle.rules.fire_rules.call(null,cljs.core.reduce.call(null,odoyle.rules.insert,datomic.ion.starter.core.initial_session,odoyle.rules.query_all.call(null,session)));
}));

//# sourceMappingURL=core.js.map
