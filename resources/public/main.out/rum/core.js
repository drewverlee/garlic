// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
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
var seq__15487 = cljs.core.seq(props);
var chunk__15489 = null;
var count__15490 = (0);
var i__15491 = (0);
while(true){
if((i__15491 < count__15490)){
var vec__15499 = chunk__15489.cljs$core$IIndexed$_nth$arity$2(null,i__15491);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15499,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15499,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__15505 = seq__15487;
var G__15506 = chunk__15489;
var G__15507 = count__15490;
var G__15508 = (i__15491 + (1));
seq__15487 = G__15505;
chunk__15489 = G__15506;
count__15490 = G__15507;
i__15491 = G__15508;
continue;
} else {
var G__15509 = seq__15487;
var G__15510 = chunk__15489;
var G__15511 = count__15490;
var G__15512 = (i__15491 + (1));
seq__15487 = G__15509;
chunk__15489 = G__15510;
count__15490 = G__15511;
i__15491 = G__15512;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15487);
if(temp__5735__auto__){
var seq__15487__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15487__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__15487__$1);
var G__15513 = cljs.core.chunk_rest(seq__15487__$1);
var G__15514 = c__4556__auto__;
var G__15515 = cljs.core.count(c__4556__auto__);
var G__15516 = (0);
seq__15487 = G__15513;
chunk__15489 = G__15514;
count__15490 = G__15515;
i__15491 = G__15516;
continue;
} else {
var vec__15502 = cljs.core.first(seq__15487__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15502,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15502,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__15517 = cljs.core.next(seq__15487__$1);
var G__15518 = null;
var G__15519 = (0);
var G__15520 = (0);
seq__15487 = G__15517;
chunk__15489 = G__15518;
count__15490 = G__15519;
i__15491 = G__15520;
continue;
} else {
var G__15521 = cljs.core.next(seq__15487__$1);
var G__15522 = null;
var G__15523 = (0);
var G__15524 = (0);
seq__15487 = G__15521;
chunk__15489 = G__15522;
count__15490 = G__15523;
i__15491 = G__15524;
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
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15526_SHARP_,p2__15525_SHARP_){
return (p2__15525_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__15525_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__15526_SHARP_) : p2__15525_SHARP_.call(null,p1__15526_SHARP_));
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
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15528_SHARP_,p2__15527_SHARP_){
return (p2__15527_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__15527_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__15528_SHARP_) : p2__15527_SHARP_.call(null,old_state,p1__15528_SHARP_));
}),state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
}));

if(cljs.core.empty_QMARK_(should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(goog.object.get(next_state,":rum/state"));
var or__4126__auto__ = cljs.core.some((function (p1__15529_SHARP_){
return (p1__15529_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__15529_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__15529_SHARP_.call(null,old_state,new_state));
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
var vec__15531 = (function (){var G__15534 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__15534) : wrapped_render.call(null,G__15534));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15531,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15531,(1),null);
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
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__15530_SHARP_){
return (p1__15530_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15530_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__15530_SHARP_.call(null,state));
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
var G__15535__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__15535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15536__i = 0, G__15536__a = new Array(arguments.length -  0);
while (G__15536__i < G__15536__a.length) {G__15536__a[G__15536__i] = arguments[G__15536__i + 0]; ++G__15536__i;}
  args = new cljs.core.IndexedSeq(G__15536__a,0,null);
} 
return G__15535__delegate.call(this,args);};
G__15535.cljs$lang$maxFixedArity = 0;
G__15535.cljs$lang$applyTo = (function (arglist__15537){
var args = cljs.core.seq(arglist__15537);
return G__15535__delegate(args);
});
G__15535.cljs$core$IFn$_invoke$arity$variadic = G__15535__delegate;
return G__15535;
})()
:(function() { 
var G__15538__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null)});
return React.createElement(class$,props);
};
var G__15538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15539__i = 0, G__15539__a = new Array(arguments.length -  0);
while (G__15539__i < G__15539__a.length) {G__15539__a[G__15539__i] = arguments[G__15539__i + 0]; ++G__15539__i;}
  args = new cljs.core.IndexedSeq(G__15539__a,0,null);
} 
return G__15538__delegate.call(this,args);};
G__15538.cljs$lang$maxFixedArity = 0;
G__15538.cljs$lang$applyTo = (function (arglist__15540){
var args = cljs.core.seq(arglist__15540);
return G__15538__delegate(args);
});
G__15538.cljs$core$IFn$_invoke$arity$variadic = G__15538__delegate;
return G__15538;
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
var G__15541__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__15541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15542__i = 0, G__15542__a = new Array(arguments.length -  0);
while (G__15542__i < G__15542__a.length) {G__15542__a[G__15542__i] = arguments[G__15542__i + 0]; ++G__15542__i;}
  args = new cljs.core.IndexedSeq(G__15542__a,0,null);
} 
return G__15541__delegate.call(this,args);};
G__15541.cljs$lang$maxFixedArity = 0;
G__15541.cljs$lang$applyTo = (function (arglist__15543){
var args = cljs.core.seq(arglist__15543);
return G__15541__delegate(args);
});
G__15541.cljs$core$IFn$_invoke$arity$variadic = G__15541__delegate;
return G__15541;
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
return (function (p1__15544_SHARP_){
return setTimeout(p1__15544_SHARP_,(16));
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
var seq__15545 = cljs.core.seq(queue);
var chunk__15547 = null;
var count__15548 = (0);
var i__15549 = (0);
while(true){
if((i__15549 < count__15548)){
var comp = chunk__15547.cljs$core$IIndexed$_nth$arity$2(null,i__15549);
if((((!((comp == null)))) && (cljs.core.not(goog.object.get(comp,":rum/unmounted?"))))){
comp.forceUpdate();


var G__15551 = seq__15545;
var G__15552 = chunk__15547;
var G__15553 = count__15548;
var G__15554 = (i__15549 + (1));
seq__15545 = G__15551;
chunk__15547 = G__15552;
count__15548 = G__15553;
i__15549 = G__15554;
continue;
} else {
var G__15555 = seq__15545;
var G__15556 = chunk__15547;
var G__15557 = count__15548;
var G__15558 = (i__15549 + (1));
seq__15545 = G__15555;
chunk__15547 = G__15556;
count__15548 = G__15557;
i__15549 = G__15558;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15545);
if(temp__5735__auto__){
var seq__15545__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15545__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__15545__$1);
var G__15559 = cljs.core.chunk_rest(seq__15545__$1);
var G__15560 = c__4556__auto__;
var G__15561 = cljs.core.count(c__4556__auto__);
var G__15562 = (0);
seq__15545 = G__15559;
chunk__15547 = G__15560;
count__15548 = G__15561;
i__15549 = G__15562;
continue;
} else {
var comp = cljs.core.first(seq__15545__$1);
if((((!((comp == null)))) && (cljs.core.not(goog.object.get(comp,":rum/unmounted?"))))){
comp.forceUpdate();


var G__15563 = cljs.core.next(seq__15545__$1);
var G__15564 = null;
var G__15565 = (0);
var G__15566 = (0);
seq__15545 = G__15563;
chunk__15547 = G__15564;
count__15548 = G__15565;
i__15549 = G__15566;
continue;
} else {
var G__15567 = cljs.core.next(seq__15545__$1);
var G__15568 = null;
var G__15569 = (0);
var G__15570 = (0);
seq__15545 = G__15567;
chunk__15547 = G__15568;
count__15548 = G__15569;
i__15549 = G__15570;
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
var G__15572 = arguments.length;
switch (G__15572) {
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
var _STAR_reactions_STAR__orig_val__15574 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__15575 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__15575);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__15576 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15576,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15576,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__15579_15591 = cljs.core.seq(old_reactions);
var chunk__15580_15592 = null;
var count__15581_15593 = (0);
var i__15582_15594 = (0);
while(true){
if((i__15582_15594 < count__15581_15593)){
var ref_15595 = chunk__15580_15592.cljs$core$IIndexed$_nth$arity$2(null,i__15582_15594);
if(cljs.core.contains_QMARK_(new_reactions,ref_15595)){
} else {
cljs.core.remove_watch(ref_15595,key);
}


var G__15596 = seq__15579_15591;
var G__15597 = chunk__15580_15592;
var G__15598 = count__15581_15593;
var G__15599 = (i__15582_15594 + (1));
seq__15579_15591 = G__15596;
chunk__15580_15592 = G__15597;
count__15581_15593 = G__15598;
i__15582_15594 = G__15599;
continue;
} else {
var temp__5735__auto___15600 = cljs.core.seq(seq__15579_15591);
if(temp__5735__auto___15600){
var seq__15579_15601__$1 = temp__5735__auto___15600;
if(cljs.core.chunked_seq_QMARK_(seq__15579_15601__$1)){
var c__4556__auto___15602 = cljs.core.chunk_first(seq__15579_15601__$1);
var G__15603 = cljs.core.chunk_rest(seq__15579_15601__$1);
var G__15604 = c__4556__auto___15602;
var G__15605 = cljs.core.count(c__4556__auto___15602);
var G__15606 = (0);
seq__15579_15591 = G__15603;
chunk__15580_15592 = G__15604;
count__15581_15593 = G__15605;
i__15582_15594 = G__15606;
continue;
} else {
var ref_15607 = cljs.core.first(seq__15579_15601__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_15607)){
} else {
cljs.core.remove_watch(ref_15607,key);
}


var G__15608 = cljs.core.next(seq__15579_15601__$1);
var G__15609 = null;
var G__15610 = (0);
var G__15611 = (0);
seq__15579_15591 = G__15608;
chunk__15580_15592 = G__15609;
count__15581_15593 = G__15610;
i__15582_15594 = G__15611;
continue;
}
} else {
}
}
break;
}

var seq__15583_15612 = cljs.core.seq(new_reactions);
var chunk__15584_15613 = null;
var count__15585_15614 = (0);
var i__15586_15615 = (0);
while(true){
if((i__15586_15615 < count__15585_15614)){
var ref_15616 = chunk__15584_15613.cljs$core$IIndexed$_nth$arity$2(null,i__15586_15615);
if(cljs.core.contains_QMARK_(old_reactions,ref_15616)){
} else {
cljs.core.add_watch(ref_15616,key,((function (seq__15583_15612,chunk__15584_15613,count__15585_15614,i__15586_15615,ref_15616,comp,old_reactions,vec__15576,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__15574,_STAR_reactions_STAR__temp_val__15575){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__15583_15612,chunk__15584_15613,count__15585_15614,i__15586_15615,ref_15616,comp,old_reactions,vec__15576,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__15574,_STAR_reactions_STAR__temp_val__15575))
);
}


var G__15617 = seq__15583_15612;
var G__15618 = chunk__15584_15613;
var G__15619 = count__15585_15614;
var G__15620 = (i__15586_15615 + (1));
seq__15583_15612 = G__15617;
chunk__15584_15613 = G__15618;
count__15585_15614 = G__15619;
i__15586_15615 = G__15620;
continue;
} else {
var temp__5735__auto___15621 = cljs.core.seq(seq__15583_15612);
if(temp__5735__auto___15621){
var seq__15583_15622__$1 = temp__5735__auto___15621;
if(cljs.core.chunked_seq_QMARK_(seq__15583_15622__$1)){
var c__4556__auto___15623 = cljs.core.chunk_first(seq__15583_15622__$1);
var G__15624 = cljs.core.chunk_rest(seq__15583_15622__$1);
var G__15625 = c__4556__auto___15623;
var G__15626 = cljs.core.count(c__4556__auto___15623);
var G__15627 = (0);
seq__15583_15612 = G__15624;
chunk__15584_15613 = G__15625;
count__15585_15614 = G__15626;
i__15586_15615 = G__15627;
continue;
} else {
var ref_15628 = cljs.core.first(seq__15583_15622__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_15628)){
} else {
cljs.core.add_watch(ref_15628,key,((function (seq__15583_15612,chunk__15584_15613,count__15585_15614,i__15586_15615,ref_15628,seq__15583_15622__$1,temp__5735__auto___15621,comp,old_reactions,vec__15576,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__15574,_STAR_reactions_STAR__temp_val__15575){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__15583_15612,chunk__15584_15613,count__15585_15614,i__15586_15615,ref_15628,seq__15583_15622__$1,temp__5735__auto___15621,comp,old_reactions,vec__15576,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__15574,_STAR_reactions_STAR__temp_val__15575))
);
}


var G__15629 = cljs.core.next(seq__15583_15622__$1);
var G__15630 = null;
var G__15631 = (0);
var G__15632 = (0);
seq__15583_15612 = G__15629;
chunk__15584_15613 = G__15630;
count__15585_15614 = G__15631;
i__15586_15615 = G__15632;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum$reactive_SLASH_refs,new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__15574);
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_15633 = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__15587_15634 = cljs.core.seq(cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__15588_15635 = null;
var count__15589_15636 = (0);
var i__15590_15637 = (0);
while(true){
if((i__15590_15637 < count__15589_15636)){
var ref_15638 = chunk__15588_15635.cljs$core$IIndexed$_nth$arity$2(null,i__15590_15637);
cljs.core.remove_watch(ref_15638,key_15633);


var G__15639 = seq__15587_15634;
var G__15640 = chunk__15588_15635;
var G__15641 = count__15589_15636;
var G__15642 = (i__15590_15637 + (1));
seq__15587_15634 = G__15639;
chunk__15588_15635 = G__15640;
count__15589_15636 = G__15641;
i__15590_15637 = G__15642;
continue;
} else {
var temp__5735__auto___15643 = cljs.core.seq(seq__15587_15634);
if(temp__5735__auto___15643){
var seq__15587_15644__$1 = temp__5735__auto___15643;
if(cljs.core.chunked_seq_QMARK_(seq__15587_15644__$1)){
var c__4556__auto___15645 = cljs.core.chunk_first(seq__15587_15644__$1);
var G__15646 = cljs.core.chunk_rest(seq__15587_15644__$1);
var G__15647 = c__4556__auto___15645;
var G__15648 = cljs.core.count(c__4556__auto___15645);
var G__15649 = (0);
seq__15587_15634 = G__15646;
chunk__15588_15635 = G__15647;
count__15589_15636 = G__15648;
i__15590_15637 = G__15649;
continue;
} else {
var ref_15650 = cljs.core.first(seq__15587_15644__$1);
cljs.core.remove_watch(ref_15650,key_15633);


var G__15651 = cljs.core.next(seq__15587_15644__$1);
var G__15652 = null;
var G__15653 = (0);
var G__15654 = (0);
seq__15587_15634 = G__15651;
chunk__15588_15635 = G__15652;
count__15589_15636 = G__15653;
i__15590_15637 = G__15654;
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
var len__4736__auto___15661 = arguments.length;
var i__4737__auto___15662 = (0);
while(true){
if((i__4737__auto___15662 < len__4736__auto___15661)){
args__4742__auto__.push((arguments[i__4737__auto___15662]));

var G__15663 = (i__4737__auto___15662 + (1));
i__4737__auto___15662 = G__15663;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__15658){
var map__15659 = p__15658;
var map__15659__$1 = (((((!((map__15659 == null))))?(((((map__15659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15659):map__15659);
var options = map__15659__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq15655){
var G__15656 = cljs.core.first(seq15655);
var seq15655__$1 = cljs.core.next(seq15655);
var G__15657 = cljs.core.first(seq15655__$1);
var seq15655__$2 = cljs.core.next(seq15655__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15656,G__15657,seq15655__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15667 = arguments.length;
var i__4737__auto___15668 = (0);
while(true){
if((i__4737__auto___15668 < len__4736__auto___15667)){
args__4742__auto__.push((arguments[i__4737__auto___15668]));

var G__15669 = (i__4737__auto___15668 + (1));
i__4737__auto___15668 = G__15669;
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
(rum.core.cursor.cljs$lang$applyTo = (function (seq15664){
var G__15665 = cljs.core.first(seq15664);
var seq15664__$1 = cljs.core.next(seq15664);
var G__15666 = cljs.core.first(seq15664__$1);
var seq15664__$2 = cljs.core.next(seq15664__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15665,G__15666,seq15664__$2);
}));

