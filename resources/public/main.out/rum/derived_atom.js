// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__13054 = arguments.length;
switch (G__13054) {
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
var map__13055 = opts;
var map__13055__$1 = (((((!((map__13055 == null))))?(((((map__13055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13055):map__13055);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13055__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13055__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__13057 = cljs.core.count(refs);
switch (G__13057) {
case (1):
var vec__13058 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13058,(0),null);
return (function (){
var G__13061 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13061) : f.call(null,G__13061));
});

break;
case (2):
var vec__13062 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13062,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13062,(1),null);
return (function (){
var G__13065 = cljs.core.deref(a);
var G__13066 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13065,G__13066) : f.call(null,G__13065,G__13066));
});

break;
case (3):
var vec__13067 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13067,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13067,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13067,(2),null);
return (function (){
var G__13070 = cljs.core.deref(a);
var G__13071 = cljs.core.deref(b);
var G__13072 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13070,G__13071,G__13072) : f.call(null,G__13070,G__13071,G__13072));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__13073 = ref;
cljs.core.reset_BANG_(G__13073,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__13073;
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
var seq__13074_13080 = cljs.core.seq(refs);
var chunk__13075_13081 = null;
var count__13076_13082 = (0);
var i__13077_13083 = (0);
while(true){
if((i__13077_13083 < count__13076_13082)){
var ref_13084__$1 = chunk__13075_13081.cljs$core$IIndexed$_nth$arity$2(null,i__13077_13083);
cljs.core.add_watch(ref_13084__$1,key,watch);


var G__13085 = seq__13074_13080;
var G__13086 = chunk__13075_13081;
var G__13087 = count__13076_13082;
var G__13088 = (i__13077_13083 + (1));
seq__13074_13080 = G__13085;
chunk__13075_13081 = G__13086;
count__13076_13082 = G__13087;
i__13077_13083 = G__13088;
continue;
} else {
var temp__5735__auto___13089 = cljs.core.seq(seq__13074_13080);
if(temp__5735__auto___13089){
var seq__13074_13090__$1 = temp__5735__auto___13089;
if(cljs.core.chunked_seq_QMARK_(seq__13074_13090__$1)){
var c__4556__auto___13091 = cljs.core.chunk_first(seq__13074_13090__$1);
var G__13092 = cljs.core.chunk_rest(seq__13074_13090__$1);
var G__13093 = c__4556__auto___13091;
var G__13094 = cljs.core.count(c__4556__auto___13091);
var G__13095 = (0);
seq__13074_13080 = G__13092;
chunk__13075_13081 = G__13093;
count__13076_13082 = G__13094;
i__13077_13083 = G__13095;
continue;
} else {
var ref_13096__$1 = cljs.core.first(seq__13074_13090__$1);
cljs.core.add_watch(ref_13096__$1,key,watch);


var G__13097 = cljs.core.next(seq__13074_13090__$1);
var G__13098 = null;
var G__13099 = (0);
var G__13100 = (0);
seq__13074_13080 = G__13097;
chunk__13075_13081 = G__13098;
count__13076_13082 = G__13099;
i__13077_13083 = G__13100;
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

