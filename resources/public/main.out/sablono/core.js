// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var G__14916__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__14913 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__14914 = cljs.core.seq(vec__14913);
var first__14915 = cljs.core.first(seq__14914);
var seq__14914__$1 = cljs.core.next(seq__14914);
var tag = first__14915;
var body = seq__14914__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__14916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14917__i = 0, G__14917__a = new Array(arguments.length -  0);
while (G__14917__i < G__14917__a.length) {G__14917__a[G__14917__i] = arguments[G__14917__i + 0]; ++G__14917__i;}
  args = new cljs.core.IndexedSeq(G__14917__a,0,null);
} 
return G__14916__delegate.call(this,args);};
G__14916.cljs$lang$maxFixedArity = 0;
G__14916.cljs$lang$applyTo = (function (arglist__14918){
var args = cljs.core.seq(arglist__14918);
return G__14916__delegate(args);
});
G__14916.cljs$core$IFn$_invoke$arity$variadic = G__14916__delegate;
return G__14916;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__14919(s__14920){
return (new cljs.core.LazySeq(null,(function (){
var s__14920__$1 = s__14920;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14920__$1);
if(temp__5735__auto__){
var s__14920__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14920__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14920__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14922 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14921 = (0);
while(true){
if((i__14921 < size__4528__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14921);
cljs.core.chunk_append(b__14922,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__14923 = (i__14921 + (1));
i__14921 = G__14923;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14922),sablono$core$update_arglists_$_iter__14919(cljs.core.chunk_rest(s__14920__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14922),null);
}
} else {
var args = cljs.core.first(s__14920__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__14919(cljs.core.rest(s__14920__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14929 = arguments.length;
var i__4737__auto___14930 = (0);
while(true){
if((i__4737__auto___14930 < len__4736__auto___14929)){
args__4742__auto__.push((arguments[i__4737__auto___14930]));

var G__14931 = (i__4737__auto___14930 + (1));
i__4737__auto___14930 = G__14931;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__14925(s__14926){
return (new cljs.core.LazySeq(null,(function (){
var s__14926__$1 = s__14926;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14926__$1);
if(temp__5735__auto__){
var s__14926__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14926__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14926__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14928 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14927 = (0);
while(true){
if((i__14927 < size__4528__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14927);
cljs.core.chunk_append(b__14928,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__14932 = (i__14927 + (1));
i__14927 = G__14932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14928),sablono$core$iter__14925(cljs.core.chunk_rest(s__14926__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14928),null);
}
} else {
var style = cljs.core.first(s__14926__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__14925(cljs.core.rest(s__14926__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq14924){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14924));
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
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to14933 = (function sablono$core$link_to14933(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14936 = arguments.length;
var i__4737__auto___14937 = (0);
while(true){
if((i__4737__auto___14937 < len__4736__auto___14936)){
args__4742__auto__.push((arguments[i__4737__auto___14937]));

var G__14938 = (i__4737__auto___14937 + (1));
i__4737__auto___14937 = G__14938;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to14933.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to14933.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to14933.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to14933.cljs$lang$applyTo = (function (seq14934){
var G__14935 = cljs.core.first(seq14934);
var seq14934__$1 = cljs.core.next(seq14934);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14935,seq14934__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to14933);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14939 = (function sablono$core$mail_to14939(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14946 = arguments.length;
var i__4737__auto___14947 = (0);
while(true){
if((i__4737__auto___14947 < len__4736__auto___14946)){
args__4742__auto__.push((arguments[i__4737__auto___14947]));

var G__14948 = (i__4737__auto___14947 + (1));
i__4737__auto___14947 = G__14948;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to14939.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to14939.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14942){
var vec__14943 = p__14942;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14943,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to14939.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to14939.cljs$lang$applyTo = (function (seq14940){
var G__14941 = cljs.core.first(seq14940);
var seq14940__$1 = cljs.core.next(seq14940);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14941,seq14940__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to14939);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14949 = (function sablono$core$unordered_list14949(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4529__auto__ = (function sablono$core$unordered_list14949_$_iter__14950(s__14951){
return (new cljs.core.LazySeq(null,(function (){
var s__14951__$1 = s__14951;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14951__$1);
if(temp__5735__auto__){
var s__14951__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14951__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14951__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14953 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14952 = (0);
while(true){
if((i__14952 < size__4528__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14952);
cljs.core.chunk_append(b__14953,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14954 = (i__14952 + (1));
i__14952 = G__14954;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14953),sablono$core$unordered_list14949_$_iter__14950(cljs.core.chunk_rest(s__14951__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14953),null);
}
} else {
var x = cljs.core.first(s__14951__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list14949_$_iter__14950(cljs.core.rest(s__14951__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list14949);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list14955 = (function sablono$core$ordered_list14955(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__4529__auto__ = (function sablono$core$ordered_list14955_$_iter__14956(s__14957){
return (new cljs.core.LazySeq(null,(function (){
var s__14957__$1 = s__14957;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14957__$1);
if(temp__5735__auto__){
var s__14957__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14957__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14957__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14959 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14958 = (0);
while(true){
if((i__14958 < size__4528__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14958);
cljs.core.chunk_append(b__14959,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14960 = (i__14958 + (1));
i__14958 = G__14960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14959),sablono$core$ordered_list14955_$_iter__14956(cljs.core.chunk_rest(s__14957__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14959),null);
}
} else {
var x = cljs.core.first(s__14957__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list14955_$_iter__14956(cljs.core.rest(s__14957__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list14955);
/**
 * Create an image element.
 */
sablono.core.image14961 = (function sablono$core$image14961(var_args){
var G__14963 = arguments.length;
switch (G__14963) {
case 1:
return sablono.core.image14961.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image14961.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image14961.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image14961.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
}));

(sablono.core.image14961.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image14961);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14965_SHARP_,p2__14966_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14965_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14966_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14967_SHARP_,p2__14968_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14967_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14968_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__14970 = arguments.length;
switch (G__14970) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__4126__auto__ = value;
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
sablono.core.color_field14972 = (function sablono$core$color_field14972(var_args){
var G__14974 = arguments.length;
switch (G__14974) {
case 1:
return sablono.core.color_field14972.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field14972.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field14972.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color),name__14903__auto__);
}));

(sablono.core.color_field14972.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.color_field14972.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field14972);

/**
 * Creates a date input field.
 */
sablono.core.date_field14975 = (function sablono$core$date_field14975(var_args){
var G__14977 = arguments.length;
switch (G__14977) {
case 1:
return sablono.core.date_field14975.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field14975.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field14975.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date),name__14903__auto__);
}));

(sablono.core.date_field14975.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.date_field14975.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field14975);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field14978 = (function sablono$core$datetime_field14978(var_args){
var G__14980 = arguments.length;
switch (G__14980) {
case 1:
return sablono.core.datetime_field14978.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field14978.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field14978.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime),name__14903__auto__);
}));

(sablono.core.datetime_field14978.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.datetime_field14978.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field14978);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field14981 = (function sablono$core$datetime_local_field14981(var_args){
var G__14983 = arguments.length;
switch (G__14983) {
case 1:
return sablono.core.datetime_local_field14981.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field14981.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field14981.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local),name__14903__auto__);
}));

(sablono.core.datetime_local_field14981.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.datetime_local_field14981.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field14981);

/**
 * Creates a email input field.
 */
sablono.core.email_field14984 = (function sablono$core$email_field14984(var_args){
var G__14986 = arguments.length;
switch (G__14986) {
case 1:
return sablono.core.email_field14984.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field14984.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field14984.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email),name__14903__auto__);
}));

(sablono.core.email_field14984.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.email_field14984.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field14984);

/**
 * Creates a file input field.
 */
sablono.core.file_field14987 = (function sablono$core$file_field14987(var_args){
var G__14989 = arguments.length;
switch (G__14989) {
case 1:
return sablono.core.file_field14987.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field14987.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field14987.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file),name__14903__auto__);
}));

(sablono.core.file_field14987.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.file_field14987.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field14987);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field14990 = (function sablono$core$hidden_field14990(var_args){
var G__14992 = arguments.length;
switch (G__14992) {
case 1:
return sablono.core.hidden_field14990.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field14990.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field14990.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden),name__14903__auto__);
}));

(sablono.core.hidden_field14990.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.hidden_field14990.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field14990);

/**
 * Creates a month input field.
 */
sablono.core.month_field14993 = (function sablono$core$month_field14993(var_args){
var G__14995 = arguments.length;
switch (G__14995) {
case 1:
return sablono.core.month_field14993.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field14993.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field14993.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month),name__14903__auto__);
}));

(sablono.core.month_field14993.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.month_field14993.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field14993);

/**
 * Creates a number input field.
 */
sablono.core.number_field14996 = (function sablono$core$number_field14996(var_args){
var G__14998 = arguments.length;
switch (G__14998) {
case 1:
return sablono.core.number_field14996.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field14996.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field14996.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number),name__14903__auto__);
}));

(sablono.core.number_field14996.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.number_field14996.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field14996);

/**
 * Creates a password input field.
 */
sablono.core.password_field14999 = (function sablono$core$password_field14999(var_args){
var G__15001 = arguments.length;
switch (G__15001) {
case 1:
return sablono.core.password_field14999.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field14999.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field14999.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password),name__14903__auto__);
}));

(sablono.core.password_field14999.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.password_field14999.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field14999);

/**
 * Creates a range input field.
 */
sablono.core.range_field15002 = (function sablono$core$range_field15002(var_args){
var G__15004 = arguments.length;
switch (G__15004) {
case 1:
return sablono.core.range_field15002.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field15002.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field15002.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range),name__14903__auto__);
}));

(sablono.core.range_field15002.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.range_field15002.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field15002);

/**
 * Creates a search input field.
 */
sablono.core.search_field15005 = (function sablono$core$search_field15005(var_args){
var G__15007 = arguments.length;
switch (G__15007) {
case 1:
return sablono.core.search_field15005.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field15005.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field15005.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search),name__14903__auto__);
}));

(sablono.core.search_field15005.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.search_field15005.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field15005);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field15008 = (function sablono$core$tel_field15008(var_args){
var G__15010 = arguments.length;
switch (G__15010) {
case 1:
return sablono.core.tel_field15008.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field15008.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field15008.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel),name__14903__auto__);
}));

(sablono.core.tel_field15008.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.tel_field15008.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field15008);

/**
 * Creates a text input field.
 */
sablono.core.text_field15011 = (function sablono$core$text_field15011(var_args){
var G__15013 = arguments.length;
switch (G__15013) {
case 1:
return sablono.core.text_field15011.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field15011.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field15011.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text),name__14903__auto__);
}));

(sablono.core.text_field15011.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.text_field15011.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field15011);

/**
 * Creates a time input field.
 */
sablono.core.time_field15014 = (function sablono$core$time_field15014(var_args){
var G__15016 = arguments.length;
switch (G__15016) {
case 1:
return sablono.core.time_field15014.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field15014.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field15014.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time),name__14903__auto__);
}));

(sablono.core.time_field15014.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.time_field15014.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field15014);

/**
 * Creates a url input field.
 */
sablono.core.url_field15017 = (function sablono$core$url_field15017(var_args){
var G__15019 = arguments.length;
switch (G__15019) {
case 1:
return sablono.core.url_field15017.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field15017.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field15017.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url),name__14903__auto__);
}));

(sablono.core.url_field15017.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.url_field15017.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field15017);

/**
 * Creates a week input field.
 */
sablono.core.week_field15020 = (function sablono$core$week_field15020(var_args){
var G__15022 = arguments.length;
switch (G__15022) {
case 1:
return sablono.core.week_field15020.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field15020.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field15020.cljs$core$IFn$_invoke$arity$1 = (function (name__14903__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week),name__14903__auto__);
}));

(sablono.core.week_field15020.cljs$core$IFn$_invoke$arity$2 = (function (name__14903__auto__,value__14904__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week),name__14903__auto__,value__14904__auto__);
}));

(sablono.core.week_field15020.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field15020);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box15040 = (function sablono$core$check_box15040(var_args){
var G__15042 = arguments.length;
switch (G__15042) {
case 1:
return sablono.core.check_box15040.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box15040.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box15040.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box15040.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box15040.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.check_box15040.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.check_box15040.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box15040);
/**
 * Creates a radio button.
 */
sablono.core.radio_button15044 = (function sablono$core$radio_button15044(var_args){
var G__15046 = arguments.length;
switch (G__15046) {
case 1:
return sablono.core.radio_button15044.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button15044.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button15044.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button15044.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button15044.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.radio_button15044.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.radio_button15044.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button15044);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options15048 = (function sablono$core$select_options15048(coll){
var iter__4529__auto__ = (function sablono$core$select_options15048_$_iter__15049(s__15050){
return (new cljs.core.LazySeq(null,(function (){
var s__15050__$1 = s__15050;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15050__$1);
if(temp__5735__auto__){
var s__15050__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15050__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15050__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15052 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15051 = (0);
while(true){
if((i__15051 < size__4528__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__15051);
cljs.core.chunk_append(b__15052,((cljs.core.sequential_QMARK_(x))?(function (){var vec__15053 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15053,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15053,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15053,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options15048.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options15048.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options15048.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__15059 = (i__15051 + (1));
i__15051 = G__15059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15052),sablono$core$select_options15048_$_iter__15049(cljs.core.chunk_rest(s__15050__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15052),null);
}
} else {
var x = cljs.core.first(s__15050__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__15056 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15056,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15056,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15056,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options15048.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options15048.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options15048.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options15048_$_iter__15049(cljs.core.rest(s__15050__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options15048);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down15060 = (function sablono$core$drop_down15060(var_args){
var G__15062 = arguments.length;
switch (G__15062) {
case 2:
return sablono.core.drop_down15060.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down15060.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down15060.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down15060.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down15060.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down15060.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down15060);
/**
 * Creates a text area element.
 */
sablono.core.text_area15064 = (function sablono$core$text_area15064(var_args){
var G__15066 = arguments.length;
switch (G__15066) {
case 1:
return sablono.core.text_area15064.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area15064.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area15064.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area15064.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area15064.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area15064);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label15068 = (function sablono$core$label15068(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label15068);
/**
 * Creates a submit button.
 */
sablono.core.submit_button15069 = (function sablono$core$submit_button15069(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button15069);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button15070 = (function sablono$core$reset_button15070(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button15070);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to15071 = (function sablono$core$form_to15071(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15081 = arguments.length;
var i__4737__auto___15082 = (0);
while(true){
if((i__4737__auto___15082 < len__4736__auto___15081)){
args__4742__auto__.push((arguments[i__4737__auto___15082]));

var G__15083 = (i__4737__auto___15082 + (1));
i__4737__auto___15082 = G__15083;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to15071.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to15071.cljs$core$IFn$_invoke$arity$variadic = (function (p__15074,body){
var vec__15075 = p__15074;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15075,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15075,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__15078 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__15079 = "_method";
var G__15080 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__15078,G__15079,G__15080) : sablono.core.hidden_field.call(null,G__15078,G__15079,G__15080));
})()], null)),body));
}));

(sablono.core.form_to15071.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to15071.cljs$lang$applyTo = (function (seq15072){
var G__15073 = cljs.core.first(seq15072);
var seq15072__$1 = cljs.core.next(seq15072);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15073,seq15072__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to15071);
