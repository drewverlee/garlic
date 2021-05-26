// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('datomic.ion.starter.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('odoyle.rules');
goog.require('odoyle.rum');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_text,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_done,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_todo,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$datomic$ion$starter$core_SLASH_text,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_done], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$datomic$ion$starter$core_SLASH_text,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_done], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__19328){
return cljs.core.map_QMARK_(G__19328);
}),(function (G__19328){
return cljs.core.contains_QMARK_(G__19328,cljs.core.cst$kw$text);
}),(function (G__19328){
return cljs.core.contains_QMARK_(G__19328,cljs.core.cst$kw$done);
})], null),(function (G__19328){
return ((cljs.core.map_QMARK_(G__19328)) && (cljs.core.contains_QMARK_(G__19328,cljs.core.cst$kw$text)) && (cljs.core.contains_QMARK_(G__19328,cljs.core.cst$kw$done)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$datomic$ion$starter$core_SLASH_text,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_done], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.cst$kw$done], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$text)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$done))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_all_DASH_todos,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_todo),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_todo,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_todo,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__19329){
return cljs.core.coll_QMARK_(G__19329);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_todo)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_next_DASH_id,cljs.core.cst$sym$cljs$core_SLASH_integer_QMARK_,cljs.core.integer_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_showing,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$completed,"null",cljs.core.cst$kw$all,"null",cljs.core.cst$kw$active,"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$completed,null,cljs.core.cst$kw$all,null,cljs.core.cst$kw$active,null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_upsert_DASH_todo,cljs.core.cst$sym$cljs$core_SLASH_integer_QMARK_,cljs.core.integer_QMARK_);
datomic.ion.starter.core.refresh_all_todos = (function datomic$ion$starter$core$refresh_all_todos(session){
return odoyle.rules.insert.cljs$core$IFn$_invoke$arity$4(session,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_global,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_all_DASH_todos,cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,odoyle.rules.query_all.cljs$core$IFn$_invoke$arity$2(session,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_get_DASH_todo_DASH_item))));
});
datomic.ion.starter.core.insert_all_todos = (function datomic$ion$starter$core$insert_all_todos(session,todos){
return odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (session__$1,p__19330){
var map__19331 = p__19330;
var map__19331__$1 = (((((!((map__19331 == null))))?(((((map__19331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19331):map__19331);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19331__$1,cljs.core.cst$kw$id);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19331__$1,cljs.core.cst$kw$text);
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19331__$1,cljs.core.cst$kw$done);
return odoyle.rules.insert.cljs$core$IFn$_invoke$arity$3(session__$1,id,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$datomic$ion$starter$core_SLASH_text,text,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_done,done], null));
}),session,todos));
});
datomic.ion.starter.core.get_all_todos = (function datomic$ion$starter$core$get_all_todos(session){
return cljs.core.cst$kw$all_DASH_todos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(odoyle.rules.query_all.cljs$core$IFn$_invoke$arity$2(session,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_get_DASH_all_DASH_todos)));
});
datomic.ion.starter.core.insert_BANG_ = (function datomic$ion$starter$core$insert_BANG_(_STAR_session,id,attr__GT_value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_session,(function (session){
return odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$1(odoyle.rules.insert.cljs$core$IFn$_invoke$arity$3(session,id,attr__GT_value));
}));
});
datomic.ion.starter.core.retract_BANG_ = (function datomic$ion$starter$core$retract_BANG_(_STAR_session,id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_session,(function (session){
return odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$1(odoyle.rules.retract(odoyle.rules.retract(session,id,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_text),id,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_done));
}));
});
datomic.ion.starter.core.rules = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.__GT_Rule(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_get_DASH_todo_DASH_item,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$id,cljs.core.cst$kw$sym,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$id),cljs.core.cst$kw$key,cljs.core.cst$kw$id], null)),odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$value,cljs.core.cst$kw$sym,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$text),cljs.core.cst$kw$key,cljs.core.cst$kw$text], null))], null),cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$attr,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_text,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null))], null),cljs.core.cst$kw$opts,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$id,cljs.core.cst$kw$sym,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$id),cljs.core.cst$kw$key,cljs.core.cst$kw$id], null)),odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$value,cljs.core.cst$kw$sym,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$done),cljs.core.cst$kw$key,cljs.core.cst$kw$done], null))], null),cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$attr,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_done,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null))], null),cljs.core.cst$kw$opts,null], null)], null)),null,(function datomic$ion$starter$core$datomic_ion_starter_core_get_todo_item(p__19333){
var map__19334 = p__19333;
var map__19334__$1 = (((((!((map__19334 == null))))?(((((map__19334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19334):map__19334);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19334__$1,cljs.core.cst$kw$text);
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19334__$1,cljs.core.cst$kw$done);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19334__$1,cljs.core.cst$kw$id);
return odoyle.rules.reset_BANG_(odoyle.rules.insert.cljs$core$IFn$_invoke$arity$4(odoyle.rules._STAR_session_STAR_,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_event,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_upsert_DASH_todo,id));
}),(function datomic$ion$starter$core$datomic_ion_starter_core_get_todo_item(){
return odoyle.rules.reset_BANG_(datomic.ion.starter.core.refresh_all_todos(odoyle.rules._STAR_session_STAR_));
})),odoyle.rules.__GT_Rule(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_update_DASH_next_DASH_id,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$value,cljs.core.cst$kw$sym,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$id),cljs.core.cst$kw$key,cljs.core.cst$kw$id], null))], null),cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$id,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_event,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$attr,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_upsert_DASH_todo,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null))], null),cljs.core.cst$kw$opts,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$value,cljs.core.cst$kw$sym,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$next_DASH_id),cljs.core.cst$kw$key,cljs.core.cst$kw$next_DASH_id], null))], null),cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$id,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_global,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$attr,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_next_DASH_id,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null))], null),cljs.core.cst$kw$opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$then,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bool,false], null)], null)], null)], null)),(function datomic$ion$starter$core$datomic_ion_starter_core_update_next_id(p__19336){
var map__19337 = p__19336;
var map__19337__$1 = (((((!((map__19337 == null))))?(((((map__19337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19337):map__19337);
var next_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19337__$1,cljs.core.cst$kw$next_DASH_id);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19337__$1,cljs.core.cst$kw$id);
return (id >= next_id);
}),(function datomic$ion$starter$core$datomic_ion_starter_core_update_next_id(p__19339){
var map__19340 = p__19339;
var map__19340__$1 = (((((!((map__19340 == null))))?(((((map__19340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19340):map__19340);
var next_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19340__$1,cljs.core.cst$kw$next_DASH_id);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19340__$1,cljs.core.cst$kw$id);
return odoyle.rules.reset_BANG_(odoyle.rules.insert.cljs$core$IFn$_invoke$arity$4(odoyle.rules._STAR_session_STAR_,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_global,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_next_DASH_id,(id + (1))));
}),null),odoyle.rules.__GT_Rule(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_get_DASH_all_DASH_todos,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$value,cljs.core.cst$kw$sym,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$all_DASH_todos),cljs.core.cst$kw$key,cljs.core.cst$kw$all_DASH_todos], null))], null),cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$id,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_global,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$attr,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_all_DASH_todos,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null))], null),cljs.core.cst$kw$opts,null], null)], null)),null,null,null)], null);
datomic.ion.starter.core.components = (function (){






return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var _STAR_match__19290__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
datomic.ion.starter.core.app_root = rum.core.build_defc((function (prop__19291__auto__){
if(((false) && (cljs.core.not(odoyle.rules._STAR_match_STAR_)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["datomic.ion.starter.core/app-root"," cannot render because the :what block doesn't have a complete match yet"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var map__19342 = odoyle.rules._STAR_match_STAR_;
var map__19342__$1 = (((((!((map__19342 == null))))?(((((map__19342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19342):map__19342);
var _STAR_session = odoyle.rum.prop();
return React.createElement("div",null,React.createElement("section",({"id": "todoapp"}),React.createElement("header",({"id": "header"}),React.createElement("h1",null,"todos"),sablono.interpreter.interpret((function (){var G__19348 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$initial_DASH_text,"",cljs.core.cst$kw$_STAR_session,_STAR_session], null);
return (datomic.ion.starter.core.todo_input.cljs$core$IFn$_invoke$arity$1 ? datomic.ion.starter.core.todo_input.cljs$core$IFn$_invoke$arity$1(G__19348) : datomic.ion.starter.core.todo_input.call(null,G__19348));
})())),sablono.interpreter.interpret((datomic.ion.starter.core.todo_list.cljs$core$IFn$_invoke$arity$1 ? datomic.ion.starter.core.todo_list.cljs$core$IFn$_invoke$arity$1(_STAR_session) : datomic.ion.starter.core.todo_list.call(null,_STAR_session))),sablono.interpreter.interpret((datomic.ion.starter.core.footer.cljs$core$IFn$_invoke$arity$1 ? datomic.ion.starter.core.footer.cljs$core$IFn$_invoke$arity$1(_STAR_session) : datomic.ion.starter.core.footer.call(null,_STAR_session))),sablono.interpreter.interpret((datomic.ion.starter.core.pomodoro.cljs$core$IFn$_invoke$arity$1 ? datomic.ion.starter.core.pomodoro.cljs$core$IFn$_invoke$arity$1(_STAR_session) : datomic.ion.starter.core.pomodoro.call(null,_STAR_session)))),React.createElement("footer",({"id": "info"}),React.createElement("p",null,"Double-click to edit a todo")));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rum.reactive(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_app_DASH_root,_STAR_match__19290__auto__)], null),"app-root");

return odoyle.rules.__GT_Rule(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_app_DASH_root,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,cljs.core.PersistentVector.EMPTY),null,(function (arg__19292__auto__){
if(cljs.core.truth_(odoyle.rum._STAR_matches_STAR_)){
return cljs.core._vreset_BANG_(odoyle.rum._STAR_matches_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(odoyle.rum._STAR_matches_STAR_),cljs.core.cst$kw$datomic$ion$starter$core_SLASH_app_DASH_root,arg__19292__auto__));
} else {
return cljs.core.reset_BANG_(_STAR_match__19290__auto__,arg__19292__auto__);
}
}),null);
})(),(function (){var _STAR_match__19290__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
datomic.ion.starter.core.footer = rum.core.build_defc((function (prop__19291__auto__){
if(((true) && (cljs.core.not(odoyle.rules._STAR_match_STAR_)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["datomic.ion.starter.core/footer"," cannot render because the :what block doesn't have a complete match yet"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var map__19349 = odoyle.rules._STAR_match_STAR_;
var map__19349__$1 = (((((!((map__19349 == null))))?(((((map__19349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19349):map__19349);
var all_todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19349__$1,cljs.core.cst$kw$all_DASH_todos);
var showing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19349__$1,cljs.core.cst$kw$showing);
var _STAR_session = odoyle.rum.prop();
var active_todos = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$done,all_todos);
var completed_todos = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$done,all_todos);
var active = cljs.core.count(active_todos);
var completed = cljs.core.count(completed_todos);
var filter_attrs = (function (filter_kw){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_kw,showing))?"selected":null),cljs.core.cst$kw$on_DASH_click,(function (){
return datomic.ion.starter.core.insert_BANG_(_STAR_session,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_global,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datomic$ion$starter$core_SLASH_showing,filter_kw], null));
})], null);
});
return React.createElement("footer",({"id": "footer"}),React.createElement("span",({"id": "todo-count"}),(function (){var attrs19351 = active;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"strong",((cljs.core.map_QMARK_(attrs19351))?sablono.interpreter.attributes(attrs19351):null),((cljs.core.map_QMARK_(attrs19351))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19351)], null)));
})()," ",sablono.interpreter.interpret((function (){var G__19352 = active;
switch (G__19352) {
case (1):
return "item";

break;
default:
return "items";

}
})())," left"),React.createElement("ul",({"id": "filters"}),React.createElement("li",null,(function (){var attrs19353 = filter_attrs(cljs.core.cst$kw$all);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs19353))?sablono.interpreter.attributes(attrs19353):null),((cljs.core.map_QMARK_(attrs19353))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19353),"All"], null)));
})()),React.createElement("li",null,(function (){var attrs19354 = filter_attrs(cljs.core.cst$kw$active);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs19354))?sablono.interpreter.attributes(attrs19354):null),((cljs.core.map_QMARK_(attrs19354))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19354),"Active"], null)));
})()),React.createElement("li",null,(function (){var attrs19355 = filter_attrs(cljs.core.cst$kw$completed);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs19355))?sablono.interpreter.attributes(attrs19355):null),((cljs.core.map_QMARK_(attrs19355))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19355),"Completed"], null)));
})())),sablono.interpreter.interpret((((completed > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button_SHARP_clear_DASH_completed,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.run_BANG_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(datomic.ion.starter.core.retract_BANG_,_STAR_session),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,completed_todos));
})], null),"Clear completed"], null):null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rum.reactive(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_footer,_STAR_match__19290__auto__)], null),"footer");

return odoyle.rules.__GT_Rule(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_footer,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$value,cljs.core.cst$kw$sym,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$all_DASH_todos),cljs.core.cst$kw$key,cljs.core.cst$kw$all_DASH_todos], null))], null),cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$id,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_global,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$attr,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_all_DASH_todos,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null))], null),cljs.core.cst$kw$opts,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$value,cljs.core.cst$kw$sym,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$showing),cljs.core.cst$kw$key,cljs.core.cst$kw$showing], null))], null),cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$id,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_global,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$attr,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_showing,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null))], null),cljs.core.cst$kw$opts,null], null)], null)),null,(function (arg__19292__auto__){
if(cljs.core.truth_(odoyle.rum._STAR_matches_STAR_)){
return cljs.core._vreset_BANG_(odoyle.rum._STAR_matches_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(odoyle.rum._STAR_matches_STAR_),cljs.core.cst$kw$datomic$ion$starter$core_SLASH_footer,arg__19292__auto__));
} else {
return cljs.core.reset_BANG_(_STAR_match__19290__auto__,arg__19292__auto__);
}
}),null);
})(),(function (){var _STAR_match__19290__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
datomic.ion.starter.core.todo_input = rum.core.build_defc((function (prop__19291__auto__){
if(((true) && (cljs.core.not(odoyle.rules._STAR_match_STAR_)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["datomic.ion.starter.core/todo-input"," cannot render because the :what block doesn't have a complete match yet"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var map__19356 = odoyle.rules._STAR_match_STAR_;
var map__19356__$1 = (((((!((map__19356 == null))))?(((((map__19356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19356):map__19356);
var next_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19356__$1,cljs.core.cst$kw$next_DASH_id);
var map__19358 = odoyle.rum.prop();
var map__19358__$1 = (((((!((map__19358 == null))))?(((((map__19358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19358):map__19358);
var _STAR_session = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19358__$1,cljs.core.cst$kw$_STAR_session);
var initial_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19358__$1,cljs.core.cst$kw$initial_DASH_text);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19358__$1,cljs.core.cst$kw$id);
var on_finish = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19358__$1,cljs.core.cst$kw$on_DASH_finish);
var _STAR_text = odoyle.rum.atom(initial_text);
var text = cljs.core.deref(_STAR_text);
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
return cljs.core.reset_BANG_(_STAR_text,"");
});
}
})();
return sablono.interpreter.create_element("input",({"type": "text", "placeholder": (cljs.core.truth_(id)?"Enter your edit":"What needs to be done?"), "autoFocus": true, "value": text, "onBlur": on_finish__$1, "onChange": (function (e){
return cljs.core.reset_BANG_(_STAR_text,e.target.value);
}), "onKeyDown": (function (e){
var G__19360 = e.keyCode;
switch (G__19360) {
case (13):
var todo = (cljs.core.truth_(id)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datomic$ion$starter$core_SLASH_text,text], null):new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$datomic$ion$starter$core_SLASH_text,text,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_done,false], null));
datomic.ion.starter.core.insert_BANG_(_STAR_session,next_id__$1,todo);

return (on_finish__$1.cljs$core$IFn$_invoke$arity$0 ? on_finish__$1.cljs$core$IFn$_invoke$arity$0() : on_finish__$1.call(null));

break;
case (27):
return (on_finish__$1.cljs$core$IFn$_invoke$arity$0 ? on_finish__$1.cljs$core$IFn$_invoke$arity$0() : on_finish__$1.call(null));

break;
default:
return null;

}
}), "className": "edit"}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rum.reactive(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_todo_DASH_input,_STAR_match__19290__auto__)], null),"todo-input");

return odoyle.rules.__GT_Rule(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_todo_DASH_input,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$value,cljs.core.cst$kw$sym,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$next_DASH_id),cljs.core.cst$kw$key,cljs.core.cst$kw$next_DASH_id], null))], null),cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$id,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_global,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$attr,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_next_DASH_id,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null))], null),cljs.core.cst$kw$opts,null], null)], null)),null,(function (arg__19292__auto__){
if(cljs.core.truth_(odoyle.rum._STAR_matches_STAR_)){
return cljs.core._vreset_BANG_(odoyle.rum._STAR_matches_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(odoyle.rum._STAR_matches_STAR_),cljs.core.cst$kw$datomic$ion$starter$core_SLASH_todo_DASH_input,arg__19292__auto__));
} else {
return cljs.core.reset_BANG_(_STAR_match__19290__auto__,arg__19292__auto__);
}
}),null);
})(),(function (){var _STAR_match__19290__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
datomic.ion.starter.core.todo_list = rum.core.build_defc((function (prop__19291__auto__){
if(((true) && (cljs.core.not(odoyle.rules._STAR_match_STAR_)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["datomic.ion.starter.core/todo-list"," cannot render because the :what block doesn't have a complete match yet"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var map__19361 = odoyle.rules._STAR_match_STAR_;
var map__19361__$1 = (((((!((map__19361 == null))))?(((((map__19361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19361):map__19361);
var all_todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19361__$1,cljs.core.cst$kw$all_DASH_todos);
var showing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19361__$1,cljs.core.cst$kw$showing);
var _STAR_session = odoyle.rum.prop();
return React.createElement("section",({"id": "main"}),React.createElement("ul",({"id": "todo-list"}),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function datomic$ion$starter$core$iter__19363(s__19364){
return (new cljs.core.LazySeq(null,(function (){
var s__19364__$1 = s__19364;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__19364__$1);
if(temp__5735__auto__){
var s__19364__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19364__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__19364__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__19366 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__19365 = (0);
while(true){
if((i__19365 < size__4528__auto__)){
var todo = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__19365);
if(cljs.core.truth_((function (){var G__19367 = showing;
var G__19367__$1 = (((G__19367 instanceof cljs.core.Keyword))?G__19367.fqn:null);
switch (G__19367__$1) {
case "all":
return true;

break;
case "active":
return cljs.core.not(cljs.core.cst$kw$done.cljs$core$IFn$_invoke$arity$1(todo));

break;
case "completed":
return cljs.core.cst$kw$done.cljs$core$IFn$_invoke$arity$1(todo);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19367__$1)].join('')));

}
})())){
cljs.core.chunk_append(b__19366,sablono.interpreter.interpret(rum.core.with_key((function (){var G__19368 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$_STAR_session,_STAR_session,cljs.core.cst$kw$todo,todo], null);
return (datomic.ion.starter.core.todo_item.cljs$core$IFn$_invoke$arity$1 ? datomic.ion.starter.core.todo_item.cljs$core$IFn$_invoke$arity$1(G__19368) : datomic.ion.starter.core.todo_item.call(null,G__19368));
})(),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(todo))));

var G__19384 = (i__19365 + (1));
i__19365 = G__19384;
continue;
} else {
var G__19385 = (i__19365 + (1));
i__19365 = G__19385;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19366),datomic$ion$starter$core$iter__19363(cljs.core.chunk_rest(s__19364__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19366),null);
}
} else {
var todo = cljs.core.first(s__19364__$2);
if(cljs.core.truth_((function (){var G__19369 = showing;
var G__19369__$1 = (((G__19369 instanceof cljs.core.Keyword))?G__19369.fqn:null);
switch (G__19369__$1) {
case "all":
return true;

break;
case "active":
return cljs.core.not(cljs.core.cst$kw$done.cljs$core$IFn$_invoke$arity$1(todo));

break;
case "completed":
return cljs.core.cst$kw$done.cljs$core$IFn$_invoke$arity$1(todo);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19369__$1)].join('')));

}
})())){
return cljs.core.cons(sablono.interpreter.interpret(rum.core.with_key((function (){var G__19370 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$_STAR_session,_STAR_session,cljs.core.cst$kw$todo,todo], null);
return (datomic.ion.starter.core.todo_item.cljs$core$IFn$_invoke$arity$1 ? datomic.ion.starter.core.todo_item.cljs$core$IFn$_invoke$arity$1(G__19370) : datomic.ion.starter.core.todo_item.call(null,G__19370));
})(),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(todo))),datomic$ion$starter$core$iter__19363(cljs.core.rest(s__19364__$2)));
} else {
var G__19387 = cljs.core.rest(s__19364__$2);
s__19364__$1 = G__19387;
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
return iter__4529__auto__(all_todos);
})())));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rum.reactive(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_todo_DASH_list,_STAR_match__19290__auto__)], null),"todo-list");

return odoyle.rules.__GT_Rule(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_todo_DASH_list,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$value,cljs.core.cst$kw$sym,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$all_DASH_todos),cljs.core.cst$kw$key,cljs.core.cst$kw$all_DASH_todos], null))], null),cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$id,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_global,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$attr,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_all_DASH_todos,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null))], null),cljs.core.cst$kw$opts,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$value,cljs.core.cst$kw$sym,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$showing),cljs.core.cst$kw$key,cljs.core.cst$kw$showing], null))], null),cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$id,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_global,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$attr,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_showing,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null))], null),cljs.core.cst$kw$opts,null], null)], null)),null,(function (arg__19292__auto__){
if(cljs.core.truth_(odoyle.rum._STAR_matches_STAR_)){
return cljs.core._vreset_BANG_(odoyle.rum._STAR_matches_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(odoyle.rum._STAR_matches_STAR_),cljs.core.cst$kw$datomic$ion$starter$core_SLASH_todo_DASH_list,arg__19292__auto__));
} else {
return cljs.core.reset_BANG_(_STAR_match__19290__auto__,arg__19292__auto__);
}
}),null);
})(),(function (){var _STAR_match__19290__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
datomic.ion.starter.core.pomodoro = rum.core.build_defc((function (prop__19291__auto__){
if(((true) && (cljs.core.not(odoyle.rules._STAR_match_STAR_)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["datomic.ion.starter.core/pomodoro"," cannot render because the :what block doesn't have a complete match yet"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var map__19372 = odoyle.rules._STAR_match_STAR_;
var map__19372__$1 = (((((!((map__19372 == null))))?(((((map__19372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19372):map__19372);
var all_todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19372__$1,cljs.core.cst$kw$all_DASH_todos);
var attrs19371 = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cljs.core.first(all_todos));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs19371))?sablono.interpreter.attributes(attrs19371):null),((cljs.core.map_QMARK_(attrs19371))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19371)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rum.reactive(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_pomodoro,_STAR_match__19290__auto__)], null),"pomodoro");

return odoyle.rules.__GT_Rule(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_pomodoro,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_Binding(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$value,cljs.core.cst$kw$sym,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$all_DASH_todos),cljs.core.cst$kw$key,cljs.core.cst$kw$all_DASH_todos], null))], null),cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$id,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_global,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null)),odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$attr,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_all_DASH_todos,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null))], null),cljs.core.cst$kw$opts,null], null)], null)),null,(function (arg__19292__auto__){
if(cljs.core.truth_(odoyle.rum._STAR_matches_STAR_)){
return cljs.core._vreset_BANG_(odoyle.rum._STAR_matches_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(odoyle.rum._STAR_matches_STAR_),cljs.core.cst$kw$datomic$ion$starter$core_SLASH_pomodoro,arg__19292__auto__));
} else {
return cljs.core.reset_BANG_(_STAR_match__19290__auto__,arg__19292__auto__);
}
}),null);
})(),(function (){var _STAR_match__19290__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
datomic.ion.starter.core.todo_item = rum.core.build_defc((function (prop__19291__auto__){
if(((false) && (cljs.core.not(odoyle.rules._STAR_match_STAR_)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["datomic.ion.starter.core/todo-item"," cannot render because the :what block doesn't have a complete match yet"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var map__19374 = odoyle.rules._STAR_match_STAR_;
var map__19374__$1 = (((((!((map__19374 == null))))?(((((map__19374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19374):map__19374);
var _STAR_editing = odoyle.rum.atom(false);
var map__19376 = odoyle.rum.prop();
var map__19376__$1 = (((((!((map__19376 == null))))?(((((map__19376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19376):map__19376);
var _STAR_session = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19376__$1,cljs.core.cst$kw$_STAR_session);
var todo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19376__$1,cljs.core.cst$kw$todo);
var map__19377 = todo;
var map__19377__$1 = (((((!((map__19377 == null))))?(((((map__19377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19377):map__19377);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19377__$1,cljs.core.cst$kw$id);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19377__$1,cljs.core.cst$kw$text);
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19377__$1,cljs.core.cst$kw$done);
return React.createElement("li",({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[(cljs.core.truth_(done)?"completed ":null),(cljs.core.truth_(cljs.core.deref(_STAR_editing))?"editing":null)].join('')], null))}),React.createElement("div",({"className": "view"}),sablono.interpreter.create_element("input",({"type": "checkbox", "checked": done, "onChange": (function (){
return datomic.ion.starter.core.insert_BANG_(_STAR_session,id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datomic$ion$starter$core_SLASH_done,cljs.core.not(done)], null));
}), "className": "toggle"})),React.createElement("label",({"onDoubleClick": (function (){
return cljs.core.reset_BANG_(_STAR_editing,true);
})}),sablono.interpreter.interpret(text)),React.createElement("button",({"onClick": (function (){
return datomic.ion.starter.core.retract_BANG_(_STAR_session,id);
}), "className": "destroy"}))),sablono.interpreter.interpret((cljs.core.truth_(cljs.core.deref(_STAR_editing))?(function (){var G__19380 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$_STAR_session,_STAR_session,cljs.core.cst$kw$initial_DASH_text,text,cljs.core.cst$kw$id,id,cljs.core.cst$kw$on_DASH_finish,(function (){
return cljs.core.reset_BANG_(_STAR_editing,false);
})], null);
return (datomic.ion.starter.core.todo_input.cljs$core$IFn$_invoke$arity$1 ? datomic.ion.starter.core.todo_input.cljs$core$IFn$_invoke$arity$1(G__19380) : datomic.ion.starter.core.todo_input.call(null,G__19380));
})():null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odoyle.rum.reactive(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_todo_DASH_item,_STAR_match__19290__auto__)], null),"todo-item");

return odoyle.rules.__GT_Rule(cljs.core.cst$kw$datomic$ion$starter$core_SLASH_todo_DASH_item,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.map__GT_Condition,cljs.core.PersistentVector.EMPTY),null,(function (arg__19292__auto__){
if(cljs.core.truth_(odoyle.rum._STAR_matches_STAR_)){
return cljs.core._vreset_BANG_(odoyle.rum._STAR_matches_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(odoyle.rum._STAR_matches_STAR_),cljs.core.cst$kw$datomic$ion$starter$core_SLASH_todo_DASH_item,arg__19292__auto__));
} else {
return cljs.core.reset_BANG_(_STAR_match__19290__auto__,arg__19292__auto__);
}
}),null);
})()], null);
})()
;
datomic.ion.starter.core.initial_session = odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$1(odoyle.rules.insert.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(odoyle.rules.add_rule,odoyle.rules.__GT_session(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datomic.ion.starter.core.rules,datomic.ion.starter.core.components)),cljs.core.cst$kw$datomic$ion$starter$core_SLASH_global,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$datomic$ion$starter$core_SLASH_all_DASH_todos,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_showing,cljs.core.cst$kw$all,cljs.core.cst$kw$datomic$ion$starter$core_SLASH_next_DASH_id,(0)], null)));
if((typeof datomic !== 'undefined') && (typeof datomic.ion !== 'undefined') && (typeof datomic.ion.starter !== 'undefined') && (typeof datomic.ion.starter.core !== 'undefined') && (typeof datomic.ion.starter.core._STAR_session !== 'undefined')){
} else {
datomic.ion.starter.core._STAR_session = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(datomic.ion.starter.core.initial_session);
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datomic.ion.starter.core._STAR_session,(function (session){
return odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(odoyle.rules.insert,datomic.ion.starter.core.initial_session,odoyle.rules.query_all.cljs$core$IFn$_invoke$arity$1(session)));
}));
