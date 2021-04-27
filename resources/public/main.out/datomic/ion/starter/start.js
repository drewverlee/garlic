// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('datomic.ion.starter.start');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tools.reader');
goog.require('datomic.ion.starter.core');
goog.require('rum.core');
goog.require('goog.net.XhrIo');
datomic.ion.starter.start.read_string = (function datomic$ion$starter$start$read_string(s){
var _STAR_suppress_read_STAR__orig_val__20485 = cljs.tools.reader._STAR_suppress_read_STAR_;
var _STAR_suppress_read_STAR__temp_val__20486 = true;
(cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR__temp_val__20486);

try{return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$preserve,cljs.core.cst$kw$eof,null], null),s);
}finally {(cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR__orig_val__20485);
}});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(datomic.ion.starter.core._STAR_session,datomic.ion.starter.core.insert_all_todos,cljs.core.cst$kw$all_DASH_todos.cljs$core$IFn$_invoke$arity$1(datomic.ion.starter.start.read_string(atob(document.querySelector("#initial-state").textContent))));
cljs.core.add_watch(datomic.ion.starter.core._STAR_session,cljs.core.cst$kw$save_DASH_all_DASH_todos,(function (_,___$1,___$2,session){
var all_todos = datomic.ion.starter.core.get_all_todos(session);
return goog.net.XhrIo.send("/all-todos",(function (e){
var target = e.target;
var text = target.getResponseText();
if(cljs.core.truth_(target.isSuccess())){
return null;
} else {
return alert(text);
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_todos], 0)));
}));
rum.core.hydrate((datomic.ion.starter.core.app_root.cljs$core$IFn$_invoke$arity$1 ? datomic.ion.starter.core.app_root.cljs$core$IFn$_invoke$arity$1(datomic.ion.starter.core._STAR_session) : datomic.ion.starter.core.app_root.call(null,datomic.ion.starter.core._STAR_session)),document.querySelector("#app"));
