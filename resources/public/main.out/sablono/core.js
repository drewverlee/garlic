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
var G__18771__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__18768 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__18769 = cljs.core.seq.call(null,vec__18768);
var first__18770 = cljs.core.first.call(null,seq__18769);
var seq__18769__$1 = cljs.core.next.call(null,seq__18769);
var tag = first__18770;
var body = seq__18769__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__18771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18772__i = 0, G__18772__a = new Array(arguments.length -  0);
while (G__18772__i < G__18772__a.length) {G__18772__a[G__18772__i] = arguments[G__18772__i + 0]; ++G__18772__i;}
  args = new cljs.core.IndexedSeq(G__18772__a,0,null);
} 
return G__18771__delegate.call(this,args);};
G__18771.cljs$lang$maxFixedArity = 0;
G__18771.cljs$lang$applyTo = (function (arglist__18773){
var args = cljs.core.seq(arglist__18773);
return G__18771__delegate(args);
});
G__18771.cljs$core$IFn$_invoke$arity$variadic = G__18771__delegate;
return G__18771;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__18774(s__18775){
return (new cljs.core.LazySeq(null,(function (){
var s__18775__$1 = s__18775;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__18775__$1);
if(temp__5735__auto__){
var s__18775__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18775__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__18775__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__18777 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__18776 = (0);
while(true){
if((i__18776 < size__4528__auto__)){
var args = cljs.core._nth.call(null,c__4527__auto__,i__18776);
cljs.core.chunk_append.call(null,b__18777,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__18778 = (i__18776 + (1));
i__18776 = G__18778;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18777),sablono$core$update_arglists_$_iter__18774.call(null,cljs.core.chunk_rest.call(null,s__18775__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18777),null);
}
} else {
var args = cljs.core.first.call(null,s__18775__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__18774.call(null,cljs.core.rest.call(null,s__18775__$2)));
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
var len__4736__auto___18784 = arguments.length;
var i__4737__auto___18785 = (0);
while(true){
if((i__4737__auto___18785 < len__4736__auto___18784)){
args__4742__auto__.push((arguments[i__4737__auto___18785]));

var G__18786 = (i__4737__auto___18785 + (1));
i__4737__auto___18785 = G__18786;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__18780(s__18781){
return (new cljs.core.LazySeq(null,(function (){
var s__18781__$1 = s__18781;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__18781__$1);
if(temp__5735__auto__){
var s__18781__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18781__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__18781__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__18783 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__18782 = (0);
while(true){
if((i__18782 < size__4528__auto__)){
var style = cljs.core._nth.call(null,c__4527__auto__,i__18782);
cljs.core.chunk_append.call(null,b__18783,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__18787 = (i__18782 + (1));
i__18782 = G__18787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18783),sablono$core$iter__18780.call(null,cljs.core.chunk_rest.call(null,s__18781__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18783),null);
}
} else {
var style = cljs.core.first.call(null,s__18781__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__18780.call(null,cljs.core.rest.call(null,s__18781__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq18779){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18779));
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
sablono.core.link_to18788 = (function sablono$core$link_to18788(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18791 = arguments.length;
var i__4737__auto___18792 = (0);
while(true){
if((i__4737__auto___18792 < len__4736__auto___18791)){
args__4742__auto__.push((arguments[i__4737__auto___18792]));

var G__18793 = (i__4737__auto___18792 + (1));
i__4737__auto___18792 = G__18793;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to18788.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to18788.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to18788.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to18788.cljs$lang$applyTo = (function (seq18789){
var G__18790 = cljs.core.first.call(null,seq18789);
var seq18789__$1 = cljs.core.next.call(null,seq18789);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18790,seq18789__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to18788);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to18794 = (function sablono$core$mail_to18794(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18801 = arguments.length;
var i__4737__auto___18802 = (0);
while(true){
if((i__4737__auto___18802 < len__4736__auto___18801)){
args__4742__auto__.push((arguments[i__4737__auto___18802]));

var G__18803 = (i__4737__auto___18802 + (1));
i__4737__auto___18802 = G__18803;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to18794.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to18794.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__18797){
var vec__18798 = p__18797;
var content = cljs.core.nth.call(null,vec__18798,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to18794.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to18794.cljs$lang$applyTo = (function (seq18795){
var G__18796 = cljs.core.first.call(null,seq18795);
var seq18795__$1 = cljs.core.next.call(null,seq18795);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18796,seq18795__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to18794);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list18804 = (function sablono$core$unordered_list18804(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list18804_$_iter__18805(s__18806){
return (new cljs.core.LazySeq(null,(function (){
var s__18806__$1 = s__18806;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__18806__$1);
if(temp__5735__auto__){
var s__18806__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18806__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__18806__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__18808 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__18807 = (0);
while(true){
if((i__18807 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__18807);
cljs.core.chunk_append.call(null,b__18808,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__18809 = (i__18807 + (1));
i__18807 = G__18809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18808),sablono$core$unordered_list18804_$_iter__18805.call(null,cljs.core.chunk_rest.call(null,s__18806__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18808),null);
}
} else {
var x = cljs.core.first.call(null,s__18806__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list18804_$_iter__18805.call(null,cljs.core.rest.call(null,s__18806__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list18804);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list18810 = (function sablono$core$ordered_list18810(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list18810_$_iter__18811(s__18812){
return (new cljs.core.LazySeq(null,(function (){
var s__18812__$1 = s__18812;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__18812__$1);
if(temp__5735__auto__){
var s__18812__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18812__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__18812__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__18814 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__18813 = (0);
while(true){
if((i__18813 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__18813);
cljs.core.chunk_append.call(null,b__18814,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__18815 = (i__18813 + (1));
i__18813 = G__18815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18814),sablono$core$ordered_list18810_$_iter__18811.call(null,cljs.core.chunk_rest.call(null,s__18812__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18814),null);
}
} else {
var x = cljs.core.first.call(null,s__18812__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list18810_$_iter__18811.call(null,cljs.core.rest.call(null,s__18812__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list18810);
/**
 * Create an image element.
 */
sablono.core.image18816 = (function sablono$core$image18816(var_args){
var G__18818 = arguments.length;
switch (G__18818) {
case 1:
return sablono.core.image18816.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image18816.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image18816.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image18816.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image18816.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image18816);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__18820_SHARP_,p2__18821_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18820_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18821_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__18822_SHARP_,p2__18823_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18822_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18823_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__18825 = arguments.length;
switch (G__18825) {
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
sablono.core.color_field18827 = (function sablono$core$color_field18827(var_args){
var G__18829 = arguments.length;
switch (G__18829) {
case 1:
return sablono.core.color_field18827.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field18827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field18827.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__18758__auto__);
}));

(sablono.core.color_field18827.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.color_field18827.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field18827);

/**
 * Creates a date input field.
 */
sablono.core.date_field18830 = (function sablono$core$date_field18830(var_args){
var G__18832 = arguments.length;
switch (G__18832) {
case 1:
return sablono.core.date_field18830.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field18830.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field18830.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__18758__auto__);
}));

(sablono.core.date_field18830.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.date_field18830.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field18830);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field18833 = (function sablono$core$datetime_field18833(var_args){
var G__18835 = arguments.length;
switch (G__18835) {
case 1:
return sablono.core.datetime_field18833.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field18833.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field18833.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__18758__auto__);
}));

(sablono.core.datetime_field18833.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.datetime_field18833.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field18833);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field18836 = (function sablono$core$datetime_local_field18836(var_args){
var G__18838 = arguments.length;
switch (G__18838) {
case 1:
return sablono.core.datetime_local_field18836.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field18836.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field18836.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__18758__auto__);
}));

(sablono.core.datetime_local_field18836.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.datetime_local_field18836.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field18836);

/**
 * Creates a email input field.
 */
sablono.core.email_field18839 = (function sablono$core$email_field18839(var_args){
var G__18841 = arguments.length;
switch (G__18841) {
case 1:
return sablono.core.email_field18839.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field18839.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field18839.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__18758__auto__);
}));

(sablono.core.email_field18839.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.email_field18839.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field18839);

/**
 * Creates a file input field.
 */
sablono.core.file_field18842 = (function sablono$core$file_field18842(var_args){
var G__18844 = arguments.length;
switch (G__18844) {
case 1:
return sablono.core.file_field18842.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field18842.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field18842.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__18758__auto__);
}));

(sablono.core.file_field18842.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.file_field18842.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field18842);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field18845 = (function sablono$core$hidden_field18845(var_args){
var G__18847 = arguments.length;
switch (G__18847) {
case 1:
return sablono.core.hidden_field18845.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field18845.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field18845.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__18758__auto__);
}));

(sablono.core.hidden_field18845.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.hidden_field18845.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field18845);

/**
 * Creates a month input field.
 */
sablono.core.month_field18848 = (function sablono$core$month_field18848(var_args){
var G__18850 = arguments.length;
switch (G__18850) {
case 1:
return sablono.core.month_field18848.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field18848.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field18848.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__18758__auto__);
}));

(sablono.core.month_field18848.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.month_field18848.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field18848);

/**
 * Creates a number input field.
 */
sablono.core.number_field18851 = (function sablono$core$number_field18851(var_args){
var G__18853 = arguments.length;
switch (G__18853) {
case 1:
return sablono.core.number_field18851.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field18851.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field18851.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__18758__auto__);
}));

(sablono.core.number_field18851.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.number_field18851.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field18851);

/**
 * Creates a password input field.
 */
sablono.core.password_field18854 = (function sablono$core$password_field18854(var_args){
var G__18856 = arguments.length;
switch (G__18856) {
case 1:
return sablono.core.password_field18854.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field18854.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field18854.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__18758__auto__);
}));

(sablono.core.password_field18854.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.password_field18854.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field18854);

/**
 * Creates a range input field.
 */
sablono.core.range_field18857 = (function sablono$core$range_field18857(var_args){
var G__18859 = arguments.length;
switch (G__18859) {
case 1:
return sablono.core.range_field18857.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field18857.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field18857.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__18758__auto__);
}));

(sablono.core.range_field18857.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.range_field18857.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field18857);

/**
 * Creates a search input field.
 */
sablono.core.search_field18860 = (function sablono$core$search_field18860(var_args){
var G__18862 = arguments.length;
switch (G__18862) {
case 1:
return sablono.core.search_field18860.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field18860.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field18860.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__18758__auto__);
}));

(sablono.core.search_field18860.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.search_field18860.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field18860);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field18863 = (function sablono$core$tel_field18863(var_args){
var G__18865 = arguments.length;
switch (G__18865) {
case 1:
return sablono.core.tel_field18863.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field18863.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field18863.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__18758__auto__);
}));

(sablono.core.tel_field18863.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.tel_field18863.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field18863);

/**
 * Creates a text input field.
 */
sablono.core.text_field18866 = (function sablono$core$text_field18866(var_args){
var G__18868 = arguments.length;
switch (G__18868) {
case 1:
return sablono.core.text_field18866.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field18866.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field18866.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__18758__auto__);
}));

(sablono.core.text_field18866.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.text_field18866.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field18866);

/**
 * Creates a time input field.
 */
sablono.core.time_field18869 = (function sablono$core$time_field18869(var_args){
var G__18871 = arguments.length;
switch (G__18871) {
case 1:
return sablono.core.time_field18869.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field18869.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field18869.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__18758__auto__);
}));

(sablono.core.time_field18869.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.time_field18869.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field18869);

/**
 * Creates a url input field.
 */
sablono.core.url_field18872 = (function sablono$core$url_field18872(var_args){
var G__18874 = arguments.length;
switch (G__18874) {
case 1:
return sablono.core.url_field18872.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field18872.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field18872.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__18758__auto__);
}));

(sablono.core.url_field18872.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.url_field18872.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field18872);

/**
 * Creates a week input field.
 */
sablono.core.week_field18875 = (function sablono$core$week_field18875(var_args){
var G__18877 = arguments.length;
switch (G__18877) {
case 1:
return sablono.core.week_field18875.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field18875.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field18875.cljs$core$IFn$_invoke$arity$1 = (function (name__18758__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__18758__auto__);
}));

(sablono.core.week_field18875.cljs$core$IFn$_invoke$arity$2 = (function (name__18758__auto__,value__18759__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__18758__auto__,value__18759__auto__);
}));

(sablono.core.week_field18875.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field18875);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box18895 = (function sablono$core$check_box18895(var_args){
var G__18897 = arguments.length;
switch (G__18897) {
case 1:
return sablono.core.check_box18895.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box18895.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box18895.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box18895.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box18895.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box18895.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box18895.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box18895);
/**
 * Creates a radio button.
 */
sablono.core.radio_button18899 = (function sablono$core$radio_button18899(var_args){
var G__18901 = arguments.length;
switch (G__18901) {
case 1:
return sablono.core.radio_button18899.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button18899.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button18899.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button18899.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button18899.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button18899.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button18899.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button18899);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options18903 = (function sablono$core$select_options18903(coll){
var iter__4529__auto__ = (function sablono$core$select_options18903_$_iter__18904(s__18905){
return (new cljs.core.LazySeq(null,(function (){
var s__18905__$1 = s__18905;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__18905__$1);
if(temp__5735__auto__){
var s__18905__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18905__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__18905__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__18907 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__18906 = (0);
while(true){
if((i__18906 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__18906);
cljs.core.chunk_append.call(null,b__18907,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18908 = x;
var text = cljs.core.nth.call(null,vec__18908,(0),null);
var val = cljs.core.nth.call(null,vec__18908,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__18908,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options18903.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__18914 = (i__18906 + (1));
i__18906 = G__18914;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18907),sablono$core$select_options18903_$_iter__18904.call(null,cljs.core.chunk_rest.call(null,s__18905__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18907),null);
}
} else {
var x = cljs.core.first.call(null,s__18905__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18911 = x;
var text = cljs.core.nth.call(null,vec__18911,(0),null);
var val = cljs.core.nth.call(null,vec__18911,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__18911,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options18903.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options18903_$_iter__18904.call(null,cljs.core.rest.call(null,s__18905__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options18903);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down18915 = (function sablono$core$drop_down18915(var_args){
var G__18917 = arguments.length;
switch (G__18917) {
case 2:
return sablono.core.drop_down18915.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down18915.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down18915.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down18915.call(null,name,options,null);
}));

(sablono.core.drop_down18915.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down18915.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down18915);
/**
 * Creates a text area element.
 */
sablono.core.text_area18919 = (function sablono$core$text_area18919(var_args){
var G__18921 = arguments.length;
switch (G__18921) {
case 1:
return sablono.core.text_area18919.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area18919.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area18919.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area18919.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area18919.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area18919);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label18923 = (function sablono$core$label18923(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label18923);
/**
 * Creates a submit button.
 */
sablono.core.submit_button18924 = (function sablono$core$submit_button18924(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button18924);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button18925 = (function sablono$core$reset_button18925(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button18925);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to18926 = (function sablono$core$form_to18926(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18933 = arguments.length;
var i__4737__auto___18934 = (0);
while(true){
if((i__4737__auto___18934 < len__4736__auto___18933)){
args__4742__auto__.push((arguments[i__4737__auto___18934]));

var G__18935 = (i__4737__auto___18934 + (1));
i__4737__auto___18934 = G__18935;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to18926.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to18926.cljs$core$IFn$_invoke$arity$variadic = (function (p__18929,body){
var vec__18930 = p__18929;
var method = cljs.core.nth.call(null,vec__18930,(0),null);
var action = cljs.core.nth.call(null,vec__18930,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to18926.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to18926.cljs$lang$applyTo = (function (seq18927){
var G__18928 = cljs.core.first.call(null,seq18927);
var seq18927__$1 = cljs.core.next.call(null,seq18927);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18928,seq18927__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to18926);

//# sourceMappingURL=core.js.map
