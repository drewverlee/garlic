// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('expound.ansi');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
/**
 * Map of symbols to numeric SGR (select graphic rendition) codes.
 */
expound.ansi.sgr_code = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$bold,cljs.core.cst$kw$blink,cljs.core.cst$kw$white,cljs.core.cst$kw$yellow,cljs.core.cst$kw$bg_DASH_red,cljs.core.cst$kw$bg_DASH_cyan,cljs.core.cst$kw$green,cljs.core.cst$kw$bg_DASH_green,cljs.core.cst$kw$fg_DASH_reset,cljs.core.cst$kw$cyan,cljs.core.cst$kw$bg_DASH_black,cljs.core.cst$kw$fg_DASH_256,cljs.core.cst$kw$underline,cljs.core.cst$kw$bg_DASH_magenta,cljs.core.cst$kw$strike,cljs.core.cst$kw$bg_DASH_yellow,cljs.core.cst$kw$hidden,cljs.core.cst$kw$red,cljs.core.cst$kw$blue,cljs.core.cst$kw$bg_DASH_white,cljs.core.cst$kw$bg_DASH_256,cljs.core.cst$kw$magenta,cljs.core.cst$kw$bg_DASH_blue,cljs.core.cst$kw$bg_DASH_reset,cljs.core.cst$kw$none,cljs.core.cst$kw$reverse,cljs.core.cst$kw$black],[(1),(5),(37),(33),(41),(46),(32),(42),(39),(36),(40),(38),(3),(45),(9),(43),(8),(31),(34),(47),(48),(35),(44),(49),(0),(7),(30)]);
expound.ansi._STAR_enable_color_STAR_ = false;
/**
 * Returns an ANSI escope string which will apply the given collection of SGR
 *   codes.
 */
expound.ansi.esc = (function expound$ansi$esc(codes){
var codes__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(expound.ansi.sgr_code,codes,codes);
var codes__$2 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",codes__$1);
return ["\u001B","[",codes__$2,"m"].join('');
});
/**
 * Returns an ANSI escope string which will enact the given SGR codes.
 */
expound.ansi.escape = (function expound$ansi$escape(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14897 = arguments.length;
var i__4737__auto___14898 = (0);
while(true){
if((i__4737__auto___14898 < len__4736__auto___14897)){
args__4742__auto__.push((arguments[i__4737__auto___14898]));

var G__14899 = (i__4737__auto___14898 + (1));
i__4737__auto___14898 = G__14899;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return expound.ansi.escape.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(expound.ansi.escape.cljs$core$IFn$_invoke$arity$variadic = (function (codes){
return expound.ansi.esc(codes);
}));

(expound.ansi.escape.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(expound.ansi.escape.cljs$lang$applyTo = (function (seq14896){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14896));
}));

/**
 * Wraps the given string with SGR escapes to apply the given codes, then reset
 *   the graphics.
 */
expound.ansi.sgr = (function expound$ansi$sgr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14902 = arguments.length;
var i__4737__auto___14903 = (0);
while(true){
if((i__4737__auto___14903 < len__4736__auto___14902)){
args__4742__auto__.push((arguments[i__4737__auto___14903]));

var G__14904 = (i__4737__auto___14903 + (1));
i__4737__auto___14903 = G__14904;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return expound.ansi.sgr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(expound.ansi.sgr.cljs$core$IFn$_invoke$arity$variadic = (function (string,codes){
return [expound.ansi.esc(codes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),expound.ansi.escape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$none], 0))].join('');
}));

(expound.ansi.sgr.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(expound.ansi.sgr.cljs$lang$applyTo = (function (seq14900){
var G__14901 = cljs.core.first(seq14900);
var seq14900__$1 = cljs.core.next(seq14900);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14901,seq14900__$1);
}));

expound.ansi._STAR_print_styles_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$good_DASH_key,cljs.core.cst$kw$warning_DASH_key,cljs.core.cst$kw$correct_DASH_key,cljs.core.cst$kw$highlight,cljs.core.cst$kw$focus_DASH_path,cljs.core.cst$kw$bad_DASH_value,cljs.core.cst$kw$footer,cljs.core.cst$kw$header,cljs.core.cst$kw$good_DASH_pred,cljs.core.cst$kw$good,cljs.core.cst$kw$focus_DASH_key,cljs.core.cst$kw$pointer,cljs.core.cst$kw$bad,cljs.core.cst$kw$error_DASH_key,cljs.core.cst$kw$none,cljs.core.cst$kw$message],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$green], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bold], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$green], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bold], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$magenta], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$red], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cyan], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cyan], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$green], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$green], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bold], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$magenta], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$red], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$red], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$magenta], null)]);
expound.ansi.resolve_styles = (function expound$ansi$resolve_styles(styles){
var temp__5733__auto__ = cljs.core.not_empty(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__14905_SHARP_){
var or__4126__auto__ = (function (){var temp__5735__auto__ = (expound.ansi._STAR_print_styles_STAR_.cljs$core$IFn$_invoke$arity$1 ? expound.ansi._STAR_print_styles_STAR_.cljs$core$IFn$_invoke$arity$1(p1__14905_SHARP_) : expound.ansi._STAR_print_styles_STAR_.call(null,p1__14905_SHARP_));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return res;
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14905_SHARP_], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([styles], 0)));
if(cljs.core.truth_(temp__5733__auto__)){
var res = temp__5733__auto__;
return res;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bold], null);
}
});
expound.ansi.color = (function expound$ansi$color(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14908 = arguments.length;
var i__4737__auto___14909 = (0);
while(true){
if((i__4737__auto___14909 < len__4736__auto___14908)){
args__4742__auto__.push((arguments[i__4737__auto___14909]));

var G__14910 = (i__4737__auto___14909 + (1));
i__4737__auto___14909 = G__14910;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic = (function (s,styles){
if(cljs.core.truth_(expound.ansi._STAR_enable_color_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(expound.ansi.sgr,s,expound.ansi.resolve_styles(styles));
} else {
return s;
}
}));

(expound.ansi.color.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(expound.ansi.color.cljs$lang$applyTo = (function (seq14906){
var G__14907 = cljs.core.first(seq14906);
var seq14906__$1 = cljs.core.next(seq14906);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14907,seq14906__$1);
}));

