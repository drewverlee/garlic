// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__12278 = arguments.length;
switch (G__12278) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__12279 = opts;
var map__12279__$1 = (((((!((map__12279 == null))))?(((((map__12279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12279):map__12279);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12279__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12279__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__12281 = cljs.core.count(refs);
switch (G__12281) {
case (1):
var vec__12282 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12282,(0),null);
return (function (){
var G__12285 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12285) : f.call(null,G__12285));
});

break;
case (2):
var vec__12286 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12286,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12286,(1),null);
return (function (){
var G__12289 = cljs.core.deref(a);
var G__12290 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12289,G__12290) : f.call(null,G__12289,G__12290));
});

break;
case (3):
var vec__12291 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12291,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12291,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12291,(2),null);
return (function (){
var G__12294 = cljs.core.deref(a);
var G__12295 = cljs.core.deref(b);
var G__12296 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12294,G__12295,G__12296) : f.call(null,G__12294,G__12295,G__12296));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__12297 = ref;
cljs.core.reset_BANG_(G__12297,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__12297;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__12298_12304 = cljs.core.seq(refs);
var chunk__12299_12305 = null;
var count__12300_12306 = (0);
var i__12301_12307 = (0);
while(true){
if((i__12301_12307 < count__12300_12306)){
var ref_12308__$1 = chunk__12299_12305.cljs$core$IIndexed$_nth$arity$2(null,i__12301_12307);
cljs.core.add_watch(ref_12308__$1,key,watch);


var G__12309 = seq__12298_12304;
var G__12310 = chunk__12299_12305;
var G__12311 = count__12300_12306;
var G__12312 = (i__12301_12307 + (1));
seq__12298_12304 = G__12309;
chunk__12299_12305 = G__12310;
count__12300_12306 = G__12311;
i__12301_12307 = G__12312;
continue;
} else {
var temp__5735__auto___12313 = cljs.core.seq(seq__12298_12304);
if(temp__5735__auto___12313){
var seq__12298_12314__$1 = temp__5735__auto___12313;
if(cljs.core.chunked_seq_QMARK_(seq__12298_12314__$1)){
var c__4556__auto___12315 = cljs.core.chunk_first(seq__12298_12314__$1);
var G__12316 = cljs.core.chunk_rest(seq__12298_12314__$1);
var G__12317 = c__4556__auto___12315;
var G__12318 = cljs.core.count(c__4556__auto___12315);
var G__12319 = (0);
seq__12298_12304 = G__12316;
chunk__12299_12305 = G__12317;
count__12300_12306 = G__12318;
i__12301_12307 = G__12319;
continue;
} else {
var ref_12320__$1 = cljs.core.first(seq__12298_12314__$1);
cljs.core.add_watch(ref_12320__$1,key,watch);


var G__12321 = cljs.core.next(seq__12298_12314__$1);
var G__12322 = null;
var G__12323 = (0);
var G__12324 = (0);
seq__12298_12304 = G__12321;
chunk__12299_12305 = G__12322;
count__12300_12306 = G__12323;
i__12301_12307 = G__12324;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);

