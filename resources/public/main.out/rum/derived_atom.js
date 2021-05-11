// Compiled by ClojureScript 1.10.764 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__18401 = arguments.length;
switch (G__18401) {
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
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__18402 = opts;
var map__18402__$1 = (((((!((map__18402 == null))))?(((((map__18402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18402):map__18402);
var ref = cljs.core.get.call(null,map__18402__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__18402__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__18404 = cljs.core.count.call(null,refs);
switch (G__18404) {
case (1):
var vec__18405 = refs;
var a = cljs.core.nth.call(null,vec__18405,(0),null);
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});

break;
case (2):
var vec__18408 = refs;
var a = cljs.core.nth.call(null,vec__18408,(0),null);
var b = cljs.core.nth.call(null,vec__18408,(1),null);
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});

break;
case (3):
var vec__18411 = refs;
var a = cljs.core.nth.call(null,vec__18411,(0),null);
var b = cljs.core.nth.call(null,vec__18411,(1),null);
var c = cljs.core.nth.call(null,vec__18411,(2),null);
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});

break;
default:
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__18414 = ref;
cljs.core.reset_BANG_.call(null,G__18414,recalc.call(null));

return G__18414;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
}));
var seq__18415_18421 = cljs.core.seq.call(null,refs);
var chunk__18416_18422 = null;
var count__18417_18423 = (0);
var i__18418_18424 = (0);
while(true){
if((i__18418_18424 < count__18417_18423)){
var ref_18425__$1 = cljs.core._nth.call(null,chunk__18416_18422,i__18418_18424);
cljs.core.add_watch.call(null,ref_18425__$1,key,watch);


var G__18426 = seq__18415_18421;
var G__18427 = chunk__18416_18422;
var G__18428 = count__18417_18423;
var G__18429 = (i__18418_18424 + (1));
seq__18415_18421 = G__18426;
chunk__18416_18422 = G__18427;
count__18417_18423 = G__18428;
i__18418_18424 = G__18429;
continue;
} else {
var temp__5735__auto___18430 = cljs.core.seq.call(null,seq__18415_18421);
if(temp__5735__auto___18430){
var seq__18415_18431__$1 = temp__5735__auto___18430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18415_18431__$1)){
var c__4556__auto___18432 = cljs.core.chunk_first.call(null,seq__18415_18431__$1);
var G__18433 = cljs.core.chunk_rest.call(null,seq__18415_18431__$1);
var G__18434 = c__4556__auto___18432;
var G__18435 = cljs.core.count.call(null,c__4556__auto___18432);
var G__18436 = (0);
seq__18415_18421 = G__18433;
chunk__18416_18422 = G__18434;
count__18417_18423 = G__18435;
i__18418_18424 = G__18436;
continue;
} else {
var ref_18437__$1 = cljs.core.first.call(null,seq__18415_18431__$1);
cljs.core.add_watch.call(null,ref_18437__$1,key,watch);


var G__18438 = cljs.core.next.call(null,seq__18415_18431__$1);
var G__18439 = null;
var G__18440 = (0);
var G__18441 = (0);
seq__18415_18421 = G__18438;
chunk__18416_18422 = G__18439;
count__18417_18423 = G__18440;
i__18418_18424 = G__18441;
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


//# sourceMappingURL=derived_atom.js.map
