// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
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
var G__14140__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__14137 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__14138 = cljs.core.seq(vec__14137);
var first__14139 = cljs.core.first(seq__14138);
var seq__14138__$1 = cljs.core.next(seq__14138);
var tag = first__14139;
var body = seq__14138__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__14140 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14141__i = 0, G__14141__a = new Array(arguments.length -  0);
while (G__14141__i < G__14141__a.length) {G__14141__a[G__14141__i] = arguments[G__14141__i + 0]; ++G__14141__i;}
  args = new cljs.core.IndexedSeq(G__14141__a,0,null);
} 
return G__14140__delegate.call(this,args);};
G__14140.cljs$lang$maxFixedArity = 0;
G__14140.cljs$lang$applyTo = (function (arglist__14142){
var args = cljs.core.seq(arglist__14142);
return G__14140__delegate(args);
});
G__14140.cljs$core$IFn$_invoke$arity$variadic = G__14140__delegate;
return G__14140;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__14143(s__14144){
return (new cljs.core.LazySeq(null,(function (){
var s__14144__$1 = s__14144;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14144__$1);
if(temp__5735__auto__){
var s__14144__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14144__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14144__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14146 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14145 = (0);
while(true){
if((i__14145 < size__4528__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14145);
cljs.core.chunk_append(b__14146,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__14147 = (i__14145 + (1));
i__14145 = G__14147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14146),sablono$core$update_arglists_$_iter__14143(cljs.core.chunk_rest(s__14144__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14146),null);
}
} else {
var args = cljs.core.first(s__14144__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__14143(cljs.core.rest(s__14144__$2)));
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
var len__4736__auto___14153 = arguments.length;
var i__4737__auto___14154 = (0);
while(true){
if((i__4737__auto___14154 < len__4736__auto___14153)){
args__4742__auto__.push((arguments[i__4737__auto___14154]));

var G__14155 = (i__4737__auto___14154 + (1));
i__4737__auto___14154 = G__14155;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__14149(s__14150){
return (new cljs.core.LazySeq(null,(function (){
var s__14150__$1 = s__14150;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14150__$1);
if(temp__5735__auto__){
var s__14150__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14150__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14150__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14152 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14151 = (0);
while(true){
if((i__14151 < size__4528__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14151);
cljs.core.chunk_append(b__14152,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__14156 = (i__14151 + (1));
i__14151 = G__14156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14152),sablono$core$iter__14149(cljs.core.chunk_rest(s__14150__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14152),null);
}
} else {
var style = cljs.core.first(s__14150__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__14149(cljs.core.rest(s__14150__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq14148){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14148));
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
sablono.core.link_to14157 = (function sablono$core$link_to14157(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14160 = arguments.length;
var i__4737__auto___14161 = (0);
while(true){
if((i__4737__auto___14161 < len__4736__auto___14160)){
args__4742__auto__.push((arguments[i__4737__auto___14161]));

var G__14162 = (i__4737__auto___14161 + (1));
i__4737__auto___14161 = G__14162;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to14157.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to14157.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to14157.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to14157.cljs$lang$applyTo = (function (seq14158){
var G__14159 = cljs.core.first(seq14158);
var seq14158__$1 = cljs.core.next(seq14158);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14159,seq14158__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to14157);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14163 = (function sablono$core$mail_to14163(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14170 = arguments.length;
var i__4737__auto___14171 = (0);
while(true){
if((i__4737__auto___14171 < len__4736__auto___14170)){
args__4742__auto__.push((arguments[i__4737__auto___14171]));

var G__14172 = (i__4737__auto___14171 + (1));
i__4737__auto___14171 = G__14172;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to14163.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to14163.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14166){
var vec__14167 = p__14166;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14167,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to14163.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to14163.cljs$lang$applyTo = (function (seq14164){
var G__14165 = cljs.core.first(seq14164);
var seq14164__$1 = cljs.core.next(seq14164);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14165,seq14164__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to14163);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14173 = (function sablono$core$unordered_list14173(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4529__auto__ = (function sablono$core$unordered_list14173_$_iter__14174(s__14175){
return (new cljs.core.LazySeq(null,(function (){
var s__14175__$1 = s__14175;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14175__$1);
if(temp__5735__auto__){
var s__14175__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14175__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14175__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14177 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14176 = (0);
while(true){
if((i__14176 < size__4528__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14176);
cljs.core.chunk_append(b__14177,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14178 = (i__14176 + (1));
i__14176 = G__14178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14177),sablono$core$unordered_list14173_$_iter__14174(cljs.core.chunk_rest(s__14175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14177),null);
}
} else {
var x = cljs.core.first(s__14175__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list14173_$_iter__14174(cljs.core.rest(s__14175__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list14173);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list14179 = (function sablono$core$ordered_list14179(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__4529__auto__ = (function sablono$core$ordered_list14179_$_iter__14180(s__14181){
return (new cljs.core.LazySeq(null,(function (){
var s__14181__$1 = s__14181;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14181__$1);
if(temp__5735__auto__){
var s__14181__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14181__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14181__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14183 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14182 = (0);
while(true){
if((i__14182 < size__4528__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14182);
cljs.core.chunk_append(b__14183,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14184 = (i__14182 + (1));
i__14182 = G__14184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14183),sablono$core$ordered_list14179_$_iter__14180(cljs.core.chunk_rest(s__14181__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14183),null);
}
} else {
var x = cljs.core.first(s__14181__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list14179_$_iter__14180(cljs.core.rest(s__14181__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list14179);
/**
 * Create an image element.
 */
sablono.core.image14185 = (function sablono$core$image14185(var_args){
var G__14187 = arguments.length;
switch (G__14187) {
case 1:
return sablono.core.image14185.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image14185.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image14185.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image14185.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
}));

(sablono.core.image14185.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image14185);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14189_SHARP_,p2__14190_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14189_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14190_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14191_SHARP_,p2__14192_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14191_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14192_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__14194 = arguments.length;
switch (G__14194) {
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
sablono.core.color_field14196 = (function sablono$core$color_field14196(var_args){
var G__14198 = arguments.length;
switch (G__14198) {
case 1:
return sablono.core.color_field14196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field14196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field14196.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color),name__14127__auto__);
}));

(sablono.core.color_field14196.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.color_field14196.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field14196);

/**
 * Creates a date input field.
 */
sablono.core.date_field14199 = (function sablono$core$date_field14199(var_args){
var G__14201 = arguments.length;
switch (G__14201) {
case 1:
return sablono.core.date_field14199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field14199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field14199.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date),name__14127__auto__);
}));

(sablono.core.date_field14199.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.date_field14199.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field14199);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field14202 = (function sablono$core$datetime_field14202(var_args){
var G__14204 = arguments.length;
switch (G__14204) {
case 1:
return sablono.core.datetime_field14202.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field14202.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field14202.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime),name__14127__auto__);
}));

(sablono.core.datetime_field14202.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.datetime_field14202.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field14202);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field14205 = (function sablono$core$datetime_local_field14205(var_args){
var G__14207 = arguments.length;
switch (G__14207) {
case 1:
return sablono.core.datetime_local_field14205.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field14205.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field14205.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local),name__14127__auto__);
}));

(sablono.core.datetime_local_field14205.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.datetime_local_field14205.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field14205);

/**
 * Creates a email input field.
 */
sablono.core.email_field14208 = (function sablono$core$email_field14208(var_args){
var G__14210 = arguments.length;
switch (G__14210) {
case 1:
return sablono.core.email_field14208.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field14208.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field14208.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email),name__14127__auto__);
}));

(sablono.core.email_field14208.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.email_field14208.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field14208);

/**
 * Creates a file input field.
 */
sablono.core.file_field14211 = (function sablono$core$file_field14211(var_args){
var G__14213 = arguments.length;
switch (G__14213) {
case 1:
return sablono.core.file_field14211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field14211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field14211.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file),name__14127__auto__);
}));

(sablono.core.file_field14211.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.file_field14211.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field14211);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field14214 = (function sablono$core$hidden_field14214(var_args){
var G__14216 = arguments.length;
switch (G__14216) {
case 1:
return sablono.core.hidden_field14214.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field14214.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field14214.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden),name__14127__auto__);
}));

(sablono.core.hidden_field14214.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.hidden_field14214.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field14214);

/**
 * Creates a month input field.
 */
sablono.core.month_field14217 = (function sablono$core$month_field14217(var_args){
var G__14219 = arguments.length;
switch (G__14219) {
case 1:
return sablono.core.month_field14217.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field14217.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field14217.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month),name__14127__auto__);
}));

(sablono.core.month_field14217.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.month_field14217.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field14217);

/**
 * Creates a number input field.
 */
sablono.core.number_field14220 = (function sablono$core$number_field14220(var_args){
var G__14222 = arguments.length;
switch (G__14222) {
case 1:
return sablono.core.number_field14220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field14220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field14220.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number),name__14127__auto__);
}));

(sablono.core.number_field14220.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.number_field14220.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field14220);

/**
 * Creates a password input field.
 */
sablono.core.password_field14223 = (function sablono$core$password_field14223(var_args){
var G__14225 = arguments.length;
switch (G__14225) {
case 1:
return sablono.core.password_field14223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field14223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field14223.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password),name__14127__auto__);
}));

(sablono.core.password_field14223.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.password_field14223.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field14223);

/**
 * Creates a range input field.
 */
sablono.core.range_field14226 = (function sablono$core$range_field14226(var_args){
var G__14228 = arguments.length;
switch (G__14228) {
case 1:
return sablono.core.range_field14226.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field14226.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field14226.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range),name__14127__auto__);
}));

(sablono.core.range_field14226.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.range_field14226.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field14226);

/**
 * Creates a search input field.
 */
sablono.core.search_field14229 = (function sablono$core$search_field14229(var_args){
var G__14231 = arguments.length;
switch (G__14231) {
case 1:
return sablono.core.search_field14229.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field14229.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field14229.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search),name__14127__auto__);
}));

(sablono.core.search_field14229.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.search_field14229.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field14229);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field14232 = (function sablono$core$tel_field14232(var_args){
var G__14234 = arguments.length;
switch (G__14234) {
case 1:
return sablono.core.tel_field14232.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field14232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field14232.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel),name__14127__auto__);
}));

(sablono.core.tel_field14232.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.tel_field14232.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field14232);

/**
 * Creates a text input field.
 */
sablono.core.text_field14235 = (function sablono$core$text_field14235(var_args){
var G__14237 = arguments.length;
switch (G__14237) {
case 1:
return sablono.core.text_field14235.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field14235.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field14235.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text),name__14127__auto__);
}));

(sablono.core.text_field14235.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.text_field14235.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field14235);

/**
 * Creates a time input field.
 */
sablono.core.time_field14238 = (function sablono$core$time_field14238(var_args){
var G__14240 = arguments.length;
switch (G__14240) {
case 1:
return sablono.core.time_field14238.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field14238.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field14238.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time),name__14127__auto__);
}));

(sablono.core.time_field14238.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.time_field14238.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field14238);

/**
 * Creates a url input field.
 */
sablono.core.url_field14241 = (function sablono$core$url_field14241(var_args){
var G__14243 = arguments.length;
switch (G__14243) {
case 1:
return sablono.core.url_field14241.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field14241.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field14241.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url),name__14127__auto__);
}));

(sablono.core.url_field14241.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.url_field14241.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field14241);

/**
 * Creates a week input field.
 */
sablono.core.week_field14244 = (function sablono$core$week_field14244(var_args){
var G__14246 = arguments.length;
switch (G__14246) {
case 1:
return sablono.core.week_field14244.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field14244.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field14244.cljs$core$IFn$_invoke$arity$1 = (function (name__14127__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week),name__14127__auto__);
}));

(sablono.core.week_field14244.cljs$core$IFn$_invoke$arity$2 = (function (name__14127__auto__,value__14128__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week),name__14127__auto__,value__14128__auto__);
}));

(sablono.core.week_field14244.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field14244);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box14264 = (function sablono$core$check_box14264(var_args){
var G__14266 = arguments.length;
switch (G__14266) {
case 1:
return sablono.core.check_box14264.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box14264.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box14264.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box14264.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box14264.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.check_box14264.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.check_box14264.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box14264);
/**
 * Creates a radio button.
 */
sablono.core.radio_button14268 = (function sablono$core$radio_button14268(var_args){
var G__14270 = arguments.length;
switch (G__14270) {
case 1:
return sablono.core.radio_button14268.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button14268.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button14268.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button14268.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button14268.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.radio_button14268.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.radio_button14268.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button14268);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options14272 = (function sablono$core$select_options14272(coll){
var iter__4529__auto__ = (function sablono$core$select_options14272_$_iter__14273(s__14274){
return (new cljs.core.LazySeq(null,(function (){
var s__14274__$1 = s__14274;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14274__$1);
if(temp__5735__auto__){
var s__14274__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14274__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14274__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14276 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14275 = (0);
while(true){
if((i__14275 < size__4528__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14275);
cljs.core.chunk_append(b__14276,((cljs.core.sequential_QMARK_(x))?(function (){var vec__14277 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14277,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14277,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14277,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options14272.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options14272.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options14272.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__14283 = (i__14275 + (1));
i__14275 = G__14283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14276),sablono$core$select_options14272_$_iter__14273(cljs.core.chunk_rest(s__14274__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14276),null);
}
} else {
var x = cljs.core.first(s__14274__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__14280 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14280,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14280,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14280,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options14272.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options14272.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options14272.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options14272_$_iter__14273(cljs.core.rest(s__14274__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options14272);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down14284 = (function sablono$core$drop_down14284(var_args){
var G__14286 = arguments.length;
switch (G__14286) {
case 2:
return sablono.core.drop_down14284.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down14284.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down14284.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down14284.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down14284.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down14284.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down14284);
/**
 * Creates a text area element.
 */
sablono.core.text_area14288 = (function sablono$core$text_area14288(var_args){
var G__14290 = arguments.length;
switch (G__14290) {
case 1:
return sablono.core.text_area14288.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area14288.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area14288.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area14288.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area14288.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area14288);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label14292 = (function sablono$core$label14292(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label14292);
/**
 * Creates a submit button.
 */
sablono.core.submit_button14293 = (function sablono$core$submit_button14293(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button14293);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button14294 = (function sablono$core$reset_button14294(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button14294);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to14295 = (function sablono$core$form_to14295(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14305 = arguments.length;
var i__4737__auto___14306 = (0);
while(true){
if((i__4737__auto___14306 < len__4736__auto___14305)){
args__4742__auto__.push((arguments[i__4737__auto___14306]));

var G__14307 = (i__4737__auto___14306 + (1));
i__4737__auto___14306 = G__14307;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to14295.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to14295.cljs$core$IFn$_invoke$arity$variadic = (function (p__14298,body){
var vec__14299 = p__14298;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14299,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14299,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__14302 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__14303 = "_method";
var G__14304 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__14302,G__14303,G__14304) : sablono.core.hidden_field.call(null,G__14302,G__14303,G__14304));
})()], null)),body));
}));

(sablono.core.form_to14295.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to14295.cljs$lang$applyTo = (function (seq14296){
var G__14297 = cljs.core.first(seq14296);
var seq14296__$1 = cljs.core.next(seq14296);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14297,seq14296__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to14295);
