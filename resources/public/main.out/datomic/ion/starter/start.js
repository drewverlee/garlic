// Compiled by ClojureScript 1.10.764 {}
goog.provide('datomic.ion.starter.start');
goog.require('cljs.core');
goog.require('cljs.tools.reader');
goog.require('datomic.ion.starter.core');
goog.require('rum.core');
goog.require('goog.net.XhrIo');
datomic.ion.starter.start.read_string = (function datomic$ion$starter$start$read_string(s){
var _STAR_suppress_read_STAR__orig_val__23311 = cljs.tools.reader._STAR_suppress_read_STAR_;
var _STAR_suppress_read_STAR__temp_val__23312 = true;
(cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR__temp_val__23312);

try{return cljs.tools.reader.read_string.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"preserve","preserve",1276846509),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
}finally {(cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR__orig_val__23311);
}});
cljs.core.swap_BANG_.call(null,datomic.ion.starter.core._STAR_session,datomic.ion.starter.core.insert_all_todos,new cljs.core.Keyword(null,"all-todos","all-todos",1372764475).cljs$core$IFn$_invoke$arity$1(datomic.ion.starter.start.read_string.call(null,atob(document.querySelector("#initial-state").textContent))));
cljs.core.add_watch.call(null,datomic.ion.starter.core._STAR_session,new cljs.core.Keyword(null,"save-all-todos","save-all-todos",2026605348),(function (_,___$1,___$2,session){
var all_todos = datomic.ion.starter.core.get_all_todos.call(null,session);
return goog.net.XhrIo.send("/all-todos",(function (e){
var target = e.target;
var text = target.getResponseText();
if(cljs.core.truth_(target.isSuccess())){
return null;
} else {
return alert(text);
}
}),"POST",cljs.core.pr_str.call(null,all_todos));
}));
rum.core.hydrate.call(null,datomic.ion.starter.core.app_root.call(null,datomic.ion.starter.core._STAR_session),document.querySelector("#app"));

//# sourceMappingURL=start.js.map
