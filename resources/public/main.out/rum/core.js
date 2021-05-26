// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__14711 = cljs.core.seq(props);
var chunk__14713 = null;
var count__14714 = (0);
var i__14715 = (0);
while(true){
if((i__14715 < count__14714)){
var vec__14723 = chunk__14713.cljs$core$IIndexed$_nth$arity$2(null,i__14715);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14723,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14723,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__14729 = seq__14711;
var G__14730 = chunk__14713;
var G__14731 = count__14714;
var G__14732 = (i__14715 + (1));
seq__14711 = G__14729;
chunk__14713 = G__14730;
count__14714 = G__14731;
i__14715 = G__14732;
continue;
} else {
var G__14733 = seq__14711;
var G__14734 = chunk__14713;
var G__14735 = count__14714;
var G__14736 = (i__14715 + (1));
seq__14711 = G__14733;
chunk__14713 = G__14734;
count__14714 = G__14735;
i__14715 = G__14736;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14711);
if(temp__5735__auto__){
var seq__14711__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14711__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__14711__$1);
var G__14737 = cljs.core.chunk_rest(seq__14711__$1);
var G__14738 = c__4556__auto__;
var G__14739 = cljs.core.count(c__4556__auto__);
var G__14740 = (0);
seq__14711 = G__14737;
chunk__14713 = G__14738;
count__14714 = G__14739;
i__14715 = G__14740;
continue;
} else {
var vec__14726 = cljs.core.first(seq__14711__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14726,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14726,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__14741 = cljs.core.next(seq__14711__$1);
var G__14742 = null;
var G__14743 = (0);
var G__14744 = (0);
seq__14711 = G__14741;
chunk__14713 = G__14742;
count__14714 = G__14743;
i__14715 = G__14744;
continue;
} else {
var G__14745 = cljs.core.next(seq__14711__$1);
var G__14746 = null;
var G__14747 = (0);
var G__14748 = (0);
seq__14711 = G__14745;
chunk__14713 = G__14746;
count__14714 = G__14747;
i__14715 = G__14748;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect(cljs.core.cst$kw$init,mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_mount,cljs.core.cst$kw$before_DASH_render], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(cljs.core.cst$kw$wrap_DASH_render,mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14750_SHARP_,p2__14749_SHARP_){
return (p2__14749_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__14749_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__14750_SHARP_) : p2__14749_SHARP_.call(null,p1__14750_SHARP_));
}),render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_mount,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_remount = rum.util.collect(cljs.core.cst$kw$did_DASH_remount,mixins);
var should_update = rum.util.collect(cljs.core.cst$kw$should_DASH_update,mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_update,cljs.core.cst$kw$before_DASH_render], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_update,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_catch = rum.util.collect(cljs.core.cst$kw$did_DASH_catch,mixins);
var will_unmount = rum.util.collect(cljs.core.cst$kw$will_DASH_unmount,mixins);
var child_context = rum.util.collect(cljs.core.cst$kw$child_DASH_context,mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$class_DASH_properties,mixins));
var static_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$static_DASH_properties,mixins));
var ctor = (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(goog.object.get(props,":rum/initial-state"),cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$),init,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))}));

return React.Component.call(this$,props);
});
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_(will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
}));
}

if(cljs.core.empty_QMARK_(did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
}));
}

goog.object.set(prototype,"componentWillReceiveProps",(function (next_props){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_state,goog.object.get(next_props,":rum/initial-state")], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14752_SHARP_,p2__14751_SHARP_){
return (p2__14751_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__14751_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__14752_SHARP_) : p2__14751_SHARP_.call(null,old_state,p1__14752_SHARP_));
}),state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
}));

if(cljs.core.empty_QMARK_(should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(goog.object.get(next_state,":rum/state"));
var or__4126__auto__ = cljs.core.some((function (p1__14753_SHARP_){
return (p1__14753_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__14753_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__14753_SHARP_.call(null,old_state,new_state));
}),should_update);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return false;
}
}));
}

if(cljs.core.empty_QMARK_(will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",(function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
}));
}

goog.object.set(prototype,"render",(function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__14755 = (function (){var G__14758 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__14758) : wrapped_render.call(null,G__14758));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14755,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14755,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
}));

if(cljs.core.empty_QMARK_(did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",(function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
}));
}

if(cljs.core.empty_QMARK_(did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",(function (error,info){
var this$ = this;
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(rum.core.state(this$)),did_catch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_component_DASH_stack,goog.object.get(info,"componentStack")], null)], 0)));

return this$.forceUpdate();
}));
}

goog.object.set(prototype,"componentWillUnmount",(function (){
var this$ = this;
if(cljs.core.empty_QMARK_(will_unmount)){
} else {
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
}));

if(cljs.core.empty_QMARK_(child_context)){
} else {
goog.object.set(prototype,"getChildContext",(function (){
var this$ = this;
var state = cljs.core.deref(rum.core.state(this$));
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__14754_SHARP_){
return (p1__14754_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14754_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__14754_SHARP_.call(null,state));
})),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
}));
}

rum.core.extend_BANG_(prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_(ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(cljs.core.cst$kw$key_DASH_fn,mixins));
var ctor = (((!((key_fn == null))))?(function() { 
var G__14759__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__14759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14760__i = 0, G__14760__a = new Array(arguments.length -  0);
while (G__14760__i < G__14760__a.length) {G__14760__a[G__14760__i] = arguments[G__14760__i + 0]; ++G__14760__i;}
  args = new cljs.core.IndexedSeq(G__14760__a,0,null);
} 
return G__14759__delegate.call(this,args);};
G__14759.cljs$lang$maxFixedArity = 0;
G__14759.cljs$lang$applyTo = (function (arglist__14761){
var args = cljs.core.seq(arglist__14761);
return G__14759__delegate(args);
});
G__14759.cljs$core$IFn$_invoke$arity$variadic = G__14759__delegate;
return G__14759;
})()
:(function() { 
var G__14762__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null)});
return React.createElement(class$,props);
};
var G__14762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14763__i = 0, G__14763__a = new Array(arguments.length -  0);
while (G__14763__i < G__14763__a.length) {G__14763__a[G__14763__i] = arguments[G__14763__i + 0]; ++G__14763__i;}
  args = new cljs.core.IndexedSeq(G__14763__a,0,null);
} 
return G__14762__delegate.call(this,args);};
G__14762.cljs$lang$maxFixedArity = 0;
G__14762.cljs$lang$applyTo = (function (arglist__14764){
var args = cljs.core.seq(arglist__14764);
return G__14762__delegate(args);
});
G__14762.cljs$core$IFn$_invoke$arity$variadic = G__14762__delegate;
return G__14762;
})()
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = (function() { 
var G__14765__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__14765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14766__i = 0, G__14766__a = new Array(arguments.length -  0);
while (G__14766__i < G__14766__a.length) {G__14766__a[G__14766__i] = arguments[G__14766__i + 0]; ++G__14766__i;}
  args = new cljs.core.IndexedSeq(G__14766__a,0,null);
} 
return G__14765__delegate.call(this,args);};
G__14765.cljs$lang$maxFixedArity = 0;
G__14765.cljs$lang$applyTo = (function (arglist__14767){
var args = cljs.core.seq(arglist__14767);
return G__14765__delegate(args);
});
G__14765.cljs$core$IFn$_invoke$arity$variadic = G__14765__delegate;
return G__14765;
})()
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__4126__auto__ = (((typeof window !== 'undefined'))?(function (){var or__4126__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (function (p1__14768_SHARP_){
return setTimeout(p1__14768_SHARP_,(16));
});
}
})();
rum.core.batch = (function (){var or__4126__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__14769 = cljs.core.seq(queue);
var chunk__14771 = null;
var count__14772 = (0);
var i__14773 = (0);
while(true){
if((i__14773 < count__14772)){
var comp = chunk__14771.cljs$core$IIndexed$_nth$arity$2(null,i__14773);
if((((!((comp == null)))) && (cljs.core.not(goog.object.get(comp,":rum/unmounted?"))))){
comp.forceUpdate();


var G__14775 = seq__14769;
var G__14776 = chunk__14771;
var G__14777 = count__14772;
var G__14778 = (i__14773 + (1));
seq__14769 = G__14775;
chunk__14771 = G__14776;
count__14772 = G__14777;
i__14773 = G__14778;
continue;
} else {
var G__14779 = seq__14769;
var G__14780 = chunk__14771;
var G__14781 = count__14772;
var G__14782 = (i__14773 + (1));
seq__14769 = G__14779;
chunk__14771 = G__14780;
count__14772 = G__14781;
i__14773 = G__14782;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14769);
if(temp__5735__auto__){
var seq__14769__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14769__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__14769__$1);
var G__14783 = cljs.core.chunk_rest(seq__14769__$1);
var G__14784 = c__4556__auto__;
var G__14785 = cljs.core.count(c__4556__auto__);
var G__14786 = (0);
seq__14769 = G__14783;
chunk__14771 = G__14784;
count__14772 = G__14785;
i__14773 = G__14786;
continue;
} else {
var comp = cljs.core.first(seq__14769__$1);
if((((!((comp == null)))) && (cljs.core.not(goog.object.get(comp,":rum/unmounted?"))))){
comp.forceUpdate();


var G__14787 = cljs.core.next(seq__14769__$1);
var G__14788 = null;
var G__14789 = (0);
var G__14790 = (0);
seq__14769 = G__14787;
chunk__14771 = G__14788;
count__14772 = G__14789;
i__14773 = G__14790;
continue;
} else {
var G__14791 = cljs.core.next(seq__14769__$1);
var G__14792 = null;
var G__14793 = (0);
var G__14794 = (0);
seq__14769 = G__14791;
chunk__14771 = G__14792;
count__14772 = G__14793;
i__14773 = G__14794;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref(rum.core.render_queue);
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
/**
 * Schedules react component to be rendered on next animation frame.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_(cljs.core.deref(rum.core.render_queue))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return rum.core.render_queue.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rum.core.render_queue.cljs$core$IDeref$_deref$arity$1(null),component));
});
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref(state,cljs.core.name(key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__14796 = arguments.length;
switch (G__14796) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,cljs.core.cst$kw$rum_SLASH_local);
}));

(rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$will_DASH_mount,(function (state){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
var component = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,(function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
}));

(rum.core.local.cljs$lang$maxFixedArity = 2);

/**
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init,(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$rum$reactive_SLASH_key,cljs.core.random_uuid());
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_reactions_STAR__orig_val__14798 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__14799 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__14799);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__14800 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14800,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14800,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__14803_14815 = cljs.core.seq(old_reactions);
var chunk__14804_14816 = null;
var count__14805_14817 = (0);
var i__14806_14818 = (0);
while(true){
if((i__14806_14818 < count__14805_14817)){
var ref_14819 = chunk__14804_14816.cljs$core$IIndexed$_nth$arity$2(null,i__14806_14818);
if(cljs.core.contains_QMARK_(new_reactions,ref_14819)){
} else {
cljs.core.remove_watch(ref_14819,key);
}


var G__14820 = seq__14803_14815;
var G__14821 = chunk__14804_14816;
var G__14822 = count__14805_14817;
var G__14823 = (i__14806_14818 + (1));
seq__14803_14815 = G__14820;
chunk__14804_14816 = G__14821;
count__14805_14817 = G__14822;
i__14806_14818 = G__14823;
continue;
} else {
var temp__5735__auto___14824 = cljs.core.seq(seq__14803_14815);
if(temp__5735__auto___14824){
var seq__14803_14825__$1 = temp__5735__auto___14824;
if(cljs.core.chunked_seq_QMARK_(seq__14803_14825__$1)){
var c__4556__auto___14826 = cljs.core.chunk_first(seq__14803_14825__$1);
var G__14827 = cljs.core.chunk_rest(seq__14803_14825__$1);
var G__14828 = c__4556__auto___14826;
var G__14829 = cljs.core.count(c__4556__auto___14826);
var G__14830 = (0);
seq__14803_14815 = G__14827;
chunk__14804_14816 = G__14828;
count__14805_14817 = G__14829;
i__14806_14818 = G__14830;
continue;
} else {
var ref_14831 = cljs.core.first(seq__14803_14825__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_14831)){
} else {
cljs.core.remove_watch(ref_14831,key);
}


var G__14832 = cljs.core.next(seq__14803_14825__$1);
var G__14833 = null;
var G__14834 = (0);
var G__14835 = (0);
seq__14803_14815 = G__14832;
chunk__14804_14816 = G__14833;
count__14805_14817 = G__14834;
i__14806_14818 = G__14835;
continue;
}
} else {
}
}
break;
}

var seq__14807_14836 = cljs.core.seq(new_reactions);
var chunk__14808_14837 = null;
var count__14809_14838 = (0);
var i__14810_14839 = (0);
while(true){
if((i__14810_14839 < count__14809_14838)){
var ref_14840 = chunk__14808_14837.cljs$core$IIndexed$_nth$arity$2(null,i__14810_14839);
if(cljs.core.contains_QMARK_(old_reactions,ref_14840)){
} else {
cljs.core.add_watch(ref_14840,key,((function (seq__14807_14836,chunk__14808_14837,count__14809_14838,i__14810_14839,ref_14840,comp,old_reactions,vec__14800,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__14798,_STAR_reactions_STAR__temp_val__14799){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__14807_14836,chunk__14808_14837,count__14809_14838,i__14810_14839,ref_14840,comp,old_reactions,vec__14800,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__14798,_STAR_reactions_STAR__temp_val__14799))
);
}


var G__14841 = seq__14807_14836;
var G__14842 = chunk__14808_14837;
var G__14843 = count__14809_14838;
var G__14844 = (i__14810_14839 + (1));
seq__14807_14836 = G__14841;
chunk__14808_14837 = G__14842;
count__14809_14838 = G__14843;
i__14810_14839 = G__14844;
continue;
} else {
var temp__5735__auto___14845 = cljs.core.seq(seq__14807_14836);
if(temp__5735__auto___14845){
var seq__14807_14846__$1 = temp__5735__auto___14845;
if(cljs.core.chunked_seq_QMARK_(seq__14807_14846__$1)){
var c__4556__auto___14847 = cljs.core.chunk_first(seq__14807_14846__$1);
var G__14848 = cljs.core.chunk_rest(seq__14807_14846__$1);
var G__14849 = c__4556__auto___14847;
var G__14850 = cljs.core.count(c__4556__auto___14847);
var G__14851 = (0);
seq__14807_14836 = G__14848;
chunk__14808_14837 = G__14849;
count__14809_14838 = G__14850;
i__14810_14839 = G__14851;
continue;
} else {
var ref_14852 = cljs.core.first(seq__14807_14846__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_14852)){
} else {
cljs.core.add_watch(ref_14852,key,((function (seq__14807_14836,chunk__14808_14837,count__14809_14838,i__14810_14839,ref_14852,seq__14807_14846__$1,temp__5735__auto___14845,comp,old_reactions,vec__14800,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__14798,_STAR_reactions_STAR__temp_val__14799){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__14807_14836,chunk__14808_14837,count__14809_14838,i__14810_14839,ref_14852,seq__14807_14846__$1,temp__5735__auto___14845,comp,old_reactions,vec__14800,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__14798,_STAR_reactions_STAR__temp_val__14799))
);
}


var G__14853 = cljs.core.next(seq__14807_14846__$1);
var G__14854 = null;
var G__14855 = (0);
var G__14856 = (0);
seq__14807_14836 = G__14853;
chunk__14808_14837 = G__14854;
count__14809_14838 = G__14855;
i__14810_14839 = G__14856;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum$reactive_SLASH_refs,new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__14798);
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_14857 = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__14811_14858 = cljs.core.seq(cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__14812_14859 = null;
var count__14813_14860 = (0);
var i__14814_14861 = (0);
while(true){
if((i__14814_14861 < count__14813_14860)){
var ref_14862 = chunk__14812_14859.cljs$core$IIndexed$_nth$arity$2(null,i__14814_14861);
cljs.core.remove_watch(ref_14862,key_14857);


var G__14863 = seq__14811_14858;
var G__14864 = chunk__14812_14859;
var G__14865 = count__14813_14860;
var G__14866 = (i__14814_14861 + (1));
seq__14811_14858 = G__14863;
chunk__14812_14859 = G__14864;
count__14813_14860 = G__14865;
i__14814_14861 = G__14866;
continue;
} else {
var temp__5735__auto___14867 = cljs.core.seq(seq__14811_14858);
if(temp__5735__auto___14867){
var seq__14811_14868__$1 = temp__5735__auto___14867;
if(cljs.core.chunked_seq_QMARK_(seq__14811_14868__$1)){
var c__4556__auto___14869 = cljs.core.chunk_first(seq__14811_14868__$1);
var G__14870 = cljs.core.chunk_rest(seq__14811_14868__$1);
var G__14871 = c__4556__auto___14869;
var G__14872 = cljs.core.count(c__4556__auto___14869);
var G__14873 = (0);
seq__14811_14858 = G__14870;
chunk__14812_14859 = G__14871;
count__14813_14860 = G__14872;
i__14814_14861 = G__14873;
continue;
} else {
var ref_14874 = cljs.core.first(seq__14811_14868__$1);
cljs.core.remove_watch(ref_14874,key_14857);


var G__14875 = cljs.core.next(seq__14811_14868__$1);
var G__14876 = null;
var G__14877 = (0);
var G__14878 = (0);
seq__14811_14858 = G__14875;
chunk__14812_14859 = G__14876;
count__14813_14860 = G__14877;
i__14814_14861 = G__14878;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$rum$reactive_SLASH_refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rum$reactive_SLASH_key], 0));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref(ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x)  ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14885 = arguments.length;
var i__4737__auto___14886 = (0);
while(true){
if((i__4737__auto___14886 < len__4736__auto___14885)){
args__4742__auto__.push((arguments[i__4737__auto___14886]));

var G__14887 = (i__4737__auto___14886 + (1));
i__4737__auto___14886 = G__14887;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__14882){
var map__14883 = p__14882;
var map__14883__$1 = (((((!((map__14883 == null))))?(((((map__14883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14883):map__14883);
var options = map__14883__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq14879){
var G__14880 = cljs.core.first(seq14879);
var seq14879__$1 = cljs.core.next(seq14879);
var G__14881 = cljs.core.first(seq14879__$1);
var seq14879__$2 = cljs.core.next(seq14879__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14880,G__14881,seq14879__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14891 = arguments.length;
var i__4737__auto___14892 = (0);
while(true){
if((i__4737__auto___14892 < len__4736__auto___14891)){
args__4742__auto__.push((arguments[i__4737__auto___14892]));

var G__14893 = (i__4737__auto___14892 + (1));
i__4737__auto___14892 = G__14893;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
}));

(rum.core.cursor.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor.cljs$lang$applyTo = (function (seq14888){
var G__14889 = cljs.core.first(seq14888);
var seq14888__$1 = cljs.core.next(seq14888);
var G__14890 = cljs.core.first(seq14888__$1);
var seq14888__$2 = cljs.core.next(seq14888__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14889,G__14890,seq14888__$2);
}));

