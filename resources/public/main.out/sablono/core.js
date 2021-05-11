// Compiled by ClojureScript 1.10.764 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__20248__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__20245 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__20246 = cljs.core.seq.call(null,vec__20245);
var first__20247 = cljs.core.first.call(null,seq__20246);
var seq__20246__$1 = cljs.core.next.call(null,seq__20246);
var tag = first__20247;
var body = seq__20246__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__20248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20249__i = 0, G__20249__a = new Array(arguments.length -  0);
while (G__20249__i < G__20249__a.length) {G__20249__a[G__20249__i] = arguments[G__20249__i + 0]; ++G__20249__i;}
  args = new cljs.core.IndexedSeq(G__20249__a,0,null);
} 
return G__20248__delegate.call(this,args);};
G__20248.cljs$lang$maxFixedArity = 0;
G__20248.cljs$lang$applyTo = (function (arglist__20250){
var args = cljs.core.seq(arglist__20250);
return G__20248__delegate(args);
});
G__20248.cljs$core$IFn$_invoke$arity$variadic = G__20248__delegate;
return G__20248;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__20251(s__20252){
return (new cljs.core.LazySeq(null,(function (){
var s__20252__$1 = s__20252;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__20252__$1);
if(temp__5735__auto__){
var s__20252__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20252__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__20252__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__20254 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__20253 = (0);
while(true){
if((i__20253 < size__4528__auto__)){
var args = cljs.core._nth.call(null,c__4527__auto__,i__20253);
cljs.core.chunk_append.call(null,b__20254,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__20255 = (i__20253 + (1));
i__20253 = G__20255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20254),sablono$core$update_arglists_$_iter__20251.call(null,cljs.core.chunk_rest.call(null,s__20252__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20254),null);
}
} else {
var args = cljs.core.first.call(null,s__20252__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__20251.call(null,cljs.core.rest.call(null,s__20252__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20261 = arguments.length;
var i__4737__auto___20262 = (0);
while(true){
if((i__4737__auto___20262 < len__4736__auto___20261)){
args__4742__auto__.push((arguments[i__4737__auto___20262]));

var G__20263 = (i__4737__auto___20262 + (1));
i__4737__auto___20262 = G__20263;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__20257(s__20258){
return (new cljs.core.LazySeq(null,(function (){
var s__20258__$1 = s__20258;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__20258__$1);
if(temp__5735__auto__){
var s__20258__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20258__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__20258__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__20260 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__20259 = (0);
while(true){
if((i__20259 < size__4528__auto__)){
var style = cljs.core._nth.call(null,c__4527__auto__,i__20259);
cljs.core.chunk_append.call(null,b__20260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__20264 = (i__20259 + (1));
i__20259 = G__20264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20260),sablono$core$iter__20257.call(null,cljs.core.chunk_rest.call(null,s__20258__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20260),null);
}
} else {
var style = cljs.core.first.call(null,s__20258__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__20257.call(null,cljs.core.rest.call(null,s__20258__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq20256){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20256));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to20265 = (function sablono$core$link_to20265(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20268 = arguments.length;
var i__4737__auto___20269 = (0);
while(true){
if((i__4737__auto___20269 < len__4736__auto___20268)){
args__4742__auto__.push((arguments[i__4737__auto___20269]));

var G__20270 = (i__4737__auto___20269 + (1));
i__4737__auto___20269 = G__20270;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to20265.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to20265.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to20265.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to20265.cljs$lang$applyTo = (function (seq20266){
var G__20267 = cljs.core.first.call(null,seq20266);
var seq20266__$1 = cljs.core.next.call(null,seq20266);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20267,seq20266__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to20265);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to20271 = (function sablono$core$mail_to20271(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20278 = arguments.length;
var i__4737__auto___20279 = (0);
while(true){
if((i__4737__auto___20279 < len__4736__auto___20278)){
args__4742__auto__.push((arguments[i__4737__auto___20279]));

var G__20280 = (i__4737__auto___20279 + (1));
i__4737__auto___20279 = G__20280;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to20271.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to20271.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__20274){
var vec__20275 = p__20274;
var content = cljs.core.nth.call(null,vec__20275,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to20271.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to20271.cljs$lang$applyTo = (function (seq20272){
var G__20273 = cljs.core.first.call(null,seq20272);
var seq20272__$1 = cljs.core.next.call(null,seq20272);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20273,seq20272__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to20271);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list20281 = (function sablono$core$unordered_list20281(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list20281_$_iter__20282(s__20283){
return (new cljs.core.LazySeq(null,(function (){
var s__20283__$1 = s__20283;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__20283__$1);
if(temp__5735__auto__){
var s__20283__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20283__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__20283__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__20285 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__20284 = (0);
while(true){
if((i__20284 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__20284);
cljs.core.chunk_append.call(null,b__20285,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20286 = (i__20284 + (1));
i__20284 = G__20286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20285),sablono$core$unordered_list20281_$_iter__20282.call(null,cljs.core.chunk_rest.call(null,s__20283__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20285),null);
}
} else {
var x = cljs.core.first.call(null,s__20283__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list20281_$_iter__20282.call(null,cljs.core.rest.call(null,s__20283__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list20281);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list20287 = (function sablono$core$ordered_list20287(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list20287_$_iter__20288(s__20289){
return (new cljs.core.LazySeq(null,(function (){
var s__20289__$1 = s__20289;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__20289__$1);
if(temp__5735__auto__){
var s__20289__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20289__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__20289__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__20291 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__20290 = (0);
while(true){
if((i__20290 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__20290);
cljs.core.chunk_append.call(null,b__20291,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__20292 = (i__20290 + (1));
i__20290 = G__20292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20291),sablono$core$ordered_list20287_$_iter__20288.call(null,cljs.core.chunk_rest.call(null,s__20289__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20291),null);
}
} else {
var x = cljs.core.first.call(null,s__20289__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list20287_$_iter__20288.call(null,cljs.core.rest.call(null,s__20289__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list20287);
/**
 * Create an image element.
 */
sablono.core.image20293 = (function sablono$core$image20293(var_args){
var G__20295 = arguments.length;
switch (G__20295) {
case 1:
return sablono.core.image20293.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image20293.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image20293.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image20293.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image20293.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image20293);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__20297_SHARP_,p2__20298_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20297_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__20298_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__20299_SHARP_,p2__20300_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20299_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__20300_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__20302 = arguments.length;
switch (G__20302) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field20304 = (function sablono$core$color_field20304(var_args){
var G__20306 = arguments.length;
switch (G__20306) {
case 1:
return sablono.core.color_field20304.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field20304.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field20304.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__20235__auto__);
}));

(sablono.core.color_field20304.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.color_field20304.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field20304);

/**
 * Creates a date input field.
 */
sablono.core.date_field20307 = (function sablono$core$date_field20307(var_args){
var G__20309 = arguments.length;
switch (G__20309) {
case 1:
return sablono.core.date_field20307.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field20307.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field20307.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__20235__auto__);
}));

(sablono.core.date_field20307.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.date_field20307.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field20307);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field20310 = (function sablono$core$datetime_field20310(var_args){
var G__20312 = arguments.length;
switch (G__20312) {
case 1:
return sablono.core.datetime_field20310.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field20310.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field20310.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__20235__auto__);
}));

(sablono.core.datetime_field20310.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.datetime_field20310.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field20310);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field20313 = (function sablono$core$datetime_local_field20313(var_args){
var G__20315 = arguments.length;
switch (G__20315) {
case 1:
return sablono.core.datetime_local_field20313.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field20313.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field20313.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__20235__auto__);
}));

(sablono.core.datetime_local_field20313.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.datetime_local_field20313.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field20313);

/**
 * Creates a email input field.
 */
sablono.core.email_field20316 = (function sablono$core$email_field20316(var_args){
var G__20318 = arguments.length;
switch (G__20318) {
case 1:
return sablono.core.email_field20316.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field20316.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field20316.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__20235__auto__);
}));

(sablono.core.email_field20316.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.email_field20316.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field20316);

/**
 * Creates a file input field.
 */
sablono.core.file_field20319 = (function sablono$core$file_field20319(var_args){
var G__20321 = arguments.length;
switch (G__20321) {
case 1:
return sablono.core.file_field20319.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field20319.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field20319.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__20235__auto__);
}));

(sablono.core.file_field20319.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.file_field20319.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field20319);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field20322 = (function sablono$core$hidden_field20322(var_args){
var G__20324 = arguments.length;
switch (G__20324) {
case 1:
return sablono.core.hidden_field20322.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field20322.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field20322.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__20235__auto__);
}));

(sablono.core.hidden_field20322.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.hidden_field20322.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field20322);

/**
 * Creates a month input field.
 */
sablono.core.month_field20325 = (function sablono$core$month_field20325(var_args){
var G__20327 = arguments.length;
switch (G__20327) {
case 1:
return sablono.core.month_field20325.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field20325.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field20325.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__20235__auto__);
}));

(sablono.core.month_field20325.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.month_field20325.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field20325);

/**
 * Creates a number input field.
 */
sablono.core.number_field20328 = (function sablono$core$number_field20328(var_args){
var G__20330 = arguments.length;
switch (G__20330) {
case 1:
return sablono.core.number_field20328.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field20328.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field20328.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__20235__auto__);
}));

(sablono.core.number_field20328.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.number_field20328.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field20328);

/**
 * Creates a password input field.
 */
sablono.core.password_field20331 = (function sablono$core$password_field20331(var_args){
var G__20333 = arguments.length;
switch (G__20333) {
case 1:
return sablono.core.password_field20331.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field20331.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field20331.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__20235__auto__);
}));

(sablono.core.password_field20331.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.password_field20331.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field20331);

/**
 * Creates a range input field.
 */
sablono.core.range_field20334 = (function sablono$core$range_field20334(var_args){
var G__20336 = arguments.length;
switch (G__20336) {
case 1:
return sablono.core.range_field20334.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field20334.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field20334.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__20235__auto__);
}));

(sablono.core.range_field20334.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.range_field20334.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field20334);

/**
 * Creates a search input field.
 */
sablono.core.search_field20337 = (function sablono$core$search_field20337(var_args){
var G__20339 = arguments.length;
switch (G__20339) {
case 1:
return sablono.core.search_field20337.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field20337.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field20337.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__20235__auto__);
}));

(sablono.core.search_field20337.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.search_field20337.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field20337);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field20340 = (function sablono$core$tel_field20340(var_args){
var G__20342 = arguments.length;
switch (G__20342) {
case 1:
return sablono.core.tel_field20340.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field20340.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field20340.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__20235__auto__);
}));

(sablono.core.tel_field20340.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.tel_field20340.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field20340);

/**
 * Creates a text input field.
 */
sablono.core.text_field20343 = (function sablono$core$text_field20343(var_args){
var G__20345 = arguments.length;
switch (G__20345) {
case 1:
return sablono.core.text_field20343.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field20343.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field20343.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__20235__auto__);
}));

(sablono.core.text_field20343.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.text_field20343.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field20343);

/**
 * Creates a time input field.
 */
sablono.core.time_field20346 = (function sablono$core$time_field20346(var_args){
var G__20348 = arguments.length;
switch (G__20348) {
case 1:
return sablono.core.time_field20346.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field20346.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field20346.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__20235__auto__);
}));

(sablono.core.time_field20346.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.time_field20346.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field20346);

/**
 * Creates a url input field.
 */
sablono.core.url_field20349 = (function sablono$core$url_field20349(var_args){
var G__20351 = arguments.length;
switch (G__20351) {
case 1:
return sablono.core.url_field20349.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field20349.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field20349.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__20235__auto__);
}));

(sablono.core.url_field20349.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.url_field20349.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field20349);

/**
 * Creates a week input field.
 */
sablono.core.week_field20352 = (function sablono$core$week_field20352(var_args){
var G__20354 = arguments.length;
switch (G__20354) {
case 1:
return sablono.core.week_field20352.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field20352.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field20352.cljs$core$IFn$_invoke$arity$1 = (function (name__20235__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__20235__auto__);
}));

(sablono.core.week_field20352.cljs$core$IFn$_invoke$arity$2 = (function (name__20235__auto__,value__20236__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__20235__auto__,value__20236__auto__);
}));

(sablono.core.week_field20352.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field20352);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box20372 = (function sablono$core$check_box20372(var_args){
var G__20374 = arguments.length;
switch (G__20374) {
case 1:
return sablono.core.check_box20372.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box20372.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box20372.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box20372.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box20372.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box20372.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box20372.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box20372);
/**
 * Creates a radio button.
 */
sablono.core.radio_button20376 = (function sablono$core$radio_button20376(var_args){
var G__20378 = arguments.length;
switch (G__20378) {
case 1:
return sablono.core.radio_button20376.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button20376.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button20376.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button20376.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button20376.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button20376.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button20376.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button20376);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options20380 = (function sablono$core$select_options20380(coll){
var iter__4529__auto__ = (function sablono$core$select_options20380_$_iter__20381(s__20382){
return (new cljs.core.LazySeq(null,(function (){
var s__20382__$1 = s__20382;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__20382__$1);
if(temp__5735__auto__){
var s__20382__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20382__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__20382__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__20384 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__20383 = (0);
while(true){
if((i__20383 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__20383);
cljs.core.chunk_append.call(null,b__20384,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20385 = x;
var text = cljs.core.nth.call(null,vec__20385,(0),null);
var val = cljs.core.nth.call(null,vec__20385,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20385,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options20380.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__20391 = (i__20383 + (1));
i__20383 = G__20391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20384),sablono$core$select_options20380_$_iter__20381.call(null,cljs.core.chunk_rest.call(null,s__20382__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20384),null);
}
} else {
var x = cljs.core.first.call(null,s__20382__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20388 = x;
var text = cljs.core.nth.call(null,vec__20388,(0),null);
var val = cljs.core.nth.call(null,vec__20388,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20388,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options20380.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options20380_$_iter__20381.call(null,cljs.core.rest.call(null,s__20382__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options20380);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down20392 = (function sablono$core$drop_down20392(var_args){
var G__20394 = arguments.length;
switch (G__20394) {
case 2:
return sablono.core.drop_down20392.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down20392.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down20392.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down20392.call(null,name,options,null);
}));

(sablono.core.drop_down20392.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down20392.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down20392);
/**
 * Creates a text area element.
 */
sablono.core.text_area20396 = (function sablono$core$text_area20396(var_args){
var G__20398 = arguments.length;
switch (G__20398) {
case 1:
return sablono.core.text_area20396.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area20396.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area20396.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area20396.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area20396.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area20396);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label20400 = (function sablono$core$label20400(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label20400);
/**
 * Creates a submit button.
 */
sablono.core.submit_button20401 = (function sablono$core$submit_button20401(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button20401);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button20402 = (function sablono$core$reset_button20402(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button20402);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to20403 = (function sablono$core$form_to20403(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20410 = arguments.length;
var i__4737__auto___20411 = (0);
while(true){
if((i__4737__auto___20411 < len__4736__auto___20410)){
args__4742__auto__.push((arguments[i__4737__auto___20411]));

var G__20412 = (i__4737__auto___20411 + (1));
i__4737__auto___20411 = G__20412;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to20403.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to20403.cljs$core$IFn$_invoke$arity$variadic = (function (p__20406,body){
var vec__20407 = p__20406;
var method = cljs.core.nth.call(null,vec__20407,(0),null);
var action = cljs.core.nth.call(null,vec__20407,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to20403.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to20403.cljs$lang$applyTo = (function (seq20404){
var G__20405 = cljs.core.first.call(null,seq20404);
var seq20404__$1 = cljs.core.next.call(null,seq20404);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20405,seq20404__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to20403);

//# sourceMappingURL=core.js.map
