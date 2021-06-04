// Compiled by ClojureScript 1.10.764 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__16924 = arguments.length;
switch (G__16924) {
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
var map__16925 = opts;
var map__16925__$1 = (((((!((map__16925 == null))))?(((((map__16925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16925):map__16925);
var ref = cljs.core.get.call(null,map__16925__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__16925__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__16927 = cljs.core.count.call(null,refs);
switch (G__16927) {
case (1):
var vec__16928 = refs;
var a = cljs.core.nth.call(null,vec__16928,(0),null);
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});

break;
case (2):
var vec__16931 = refs;
var a = cljs.core.nth.call(null,vec__16931,(0),null);
var b = cljs.core.nth.call(null,vec__16931,(1),null);
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});

break;
case (3):
var vec__16934 = refs;
var a = cljs.core.nth.call(null,vec__16934,(0),null);
var b = cljs.core.nth.call(null,vec__16934,(1),null);
var c = cljs.core.nth.call(null,vec__16934,(2),null);
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
var sink = (cljs.core.truth_(ref)?(function (){var G__16937 = ref;
cljs.core.reset_BANG_.call(null,G__16937,recalc.call(null));

return G__16937;
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
var seq__16938_16944 = cljs.core.seq.call(null,refs);
var chunk__16939_16945 = null;
var count__16940_16946 = (0);
var i__16941_16947 = (0);
while(true){
if((i__16941_16947 < count__16940_16946)){
var ref_16948__$1 = cljs.core._nth.call(null,chunk__16939_16945,i__16941_16947);
cljs.core.add_watch.call(null,ref_16948__$1,key,watch);


var G__16949 = seq__16938_16944;
var G__16950 = chunk__16939_16945;
var G__16951 = count__16940_16946;
var G__16952 = (i__16941_16947 + (1));
seq__16938_16944 = G__16949;
chunk__16939_16945 = G__16950;
count__16940_16946 = G__16951;
i__16941_16947 = G__16952;
continue;
} else {
var temp__5735__auto___16953 = cljs.core.seq.call(null,seq__16938_16944);
if(temp__5735__auto___16953){
var seq__16938_16954__$1 = temp__5735__auto___16953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16938_16954__$1)){
var c__4556__auto___16955 = cljs.core.chunk_first.call(null,seq__16938_16954__$1);
var G__16956 = cljs.core.chunk_rest.call(null,seq__16938_16954__$1);
var G__16957 = c__4556__auto___16955;
var G__16958 = cljs.core.count.call(null,c__4556__auto___16955);
var G__16959 = (0);
seq__16938_16944 = G__16956;
chunk__16939_16945 = G__16957;
count__16940_16946 = G__16958;
i__16941_16947 = G__16959;
continue;
} else {
var ref_16960__$1 = cljs.core.first.call(null,seq__16938_16954__$1);
cljs.core.add_watch.call(null,ref_16960__$1,key,watch);


var G__16961 = cljs.core.next.call(null,seq__16938_16954__$1);
var G__16962 = null;
var G__16963 = (0);
var G__16964 = (0);
seq__16938_16944 = G__16961;
chunk__16939_16945 = G__16962;
count__16940_16946 = G__16963;
i__16941_16947 = G__16964;
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
