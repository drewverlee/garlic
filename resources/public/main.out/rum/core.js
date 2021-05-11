// Compiled by ClojureScript 1.10.764 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
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
var seq__20423 = cljs.core.seq.call(null,props);
var chunk__20425 = null;
var count__20426 = (0);
var i__20427 = (0);
while(true){
if((i__20427 < count__20426)){
var vec__20435 = cljs.core._nth.call(null,chunk__20425,i__20427);
var k = cljs.core.nth.call(null,vec__20435,(0),null);
var v = cljs.core.nth.call(null,vec__20435,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__20441 = seq__20423;
var G__20442 = chunk__20425;
var G__20443 = count__20426;
var G__20444 = (i__20427 + (1));
seq__20423 = G__20441;
chunk__20425 = G__20442;
count__20426 = G__20443;
i__20427 = G__20444;
continue;
} else {
var G__20445 = seq__20423;
var G__20446 = chunk__20425;
var G__20447 = count__20426;
var G__20448 = (i__20427 + (1));
seq__20423 = G__20445;
chunk__20425 = G__20446;
count__20426 = G__20447;
i__20427 = G__20448;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__20423);
if(temp__5735__auto__){
var seq__20423__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20423__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20423__$1);
var G__20449 = cljs.core.chunk_rest.call(null,seq__20423__$1);
var G__20450 = c__4556__auto__;
var G__20451 = cljs.core.count.call(null,c__4556__auto__);
var G__20452 = (0);
seq__20423 = G__20449;
chunk__20425 = G__20450;
count__20426 = G__20451;
i__20427 = G__20452;
continue;
} else {
var vec__20438 = cljs.core.first.call(null,seq__20423__$1);
var k = cljs.core.nth.call(null,vec__20438,(0),null);
var v = cljs.core.nth.call(null,vec__20438,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__20453 = cljs.core.next.call(null,seq__20423__$1);
var G__20454 = null;
var G__20455 = (0);
var G__20456 = (0);
seq__20423 = G__20453;
chunk__20425 = G__20454;
count__20426 = G__20455;
i__20427 = G__20456;
continue;
} else {
var G__20457 = cljs.core.next.call(null,seq__20423__$1);
var G__20458 = null;
var G__20459 = (0);
var G__20460 = (0);
seq__20423 = G__20457;
chunk__20425 = G__20458;
count__20426 = G__20459;
i__20427 = G__20460;
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
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,(function (p1__20462_SHARP_,p2__20461_SHARP_){
return p2__20461_SHARP_.call(null,p1__20462_SHARP_);
}),render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
}));
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
}));
}

goog.object.set(prototype,"componentWillReceiveProps",(function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,(function (p1__20464_SHARP_,p2__20463_SHARP_){
return p2__20463_SHARP_.call(null,old_state,p1__20464_SHARP_);
}),state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
}));

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__4126__auto__ = cljs.core.some.call(null,(function (p1__20465_SHARP_){
return p1__20465_SHARP_.call(null,old_state,new_state);
}),should_update);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return false;
}
}));
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",(function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
}));
}

goog.object.set(prototype,"render",(function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__20467 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__20467,(0),null);
var next_state = cljs.core.nth.call(null,vec__20467,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
}));

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",(function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
}));
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",(function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
}));
}

goog.object.set(prototype,"componentWillUnmount",(function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
}));

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",(function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__20466_SHARP_){
return p1__20466_SHARP_.call(null,state);
})),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
}));
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = (((!((key_fn == null))))?(function() { 
var G__20470__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__20470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20471__i = 0, G__20471__a = new Array(arguments.length -  0);
while (G__20471__i < G__20471__a.length) {G__20471__a[G__20471__i] = arguments[G__20471__i + 0]; ++G__20471__i;}
  args = new cljs.core.IndexedSeq(G__20471__a,0,null);
} 
return G__20470__delegate.call(this,args);};
G__20470.cljs$lang$maxFixedArity = 0;
G__20470.cljs$lang$applyTo = (function (arglist__20472){
var args = cljs.core.seq(arglist__20472);
return G__20470__delegate(args);
});
G__20470.cljs$core$IFn$_invoke$arity$variadic = G__20470__delegate;
return G__20470;
})()
:(function() { 
var G__20473__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__20473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20474__i = 0, G__20474__a = new Array(arguments.length -  0);
while (G__20474__i < G__20474__a.length) {G__20474__a[G__20474__i] = arguments[G__20474__i + 0]; ++G__20474__i;}
  args = new cljs.core.IndexedSeq(G__20474__a,0,null);
} 
return G__20473__delegate.call(this,args);};
G__20473.cljs$lang$maxFixedArity = 0;
G__20473.cljs$lang$applyTo = (function (arglist__20475){
var args = cljs.core.seq(arglist__20475);
return G__20473__delegate(args);
});
G__20473.cljs$core$IFn$_invoke$arity$variadic = G__20473__delegate;
return G__20473;
})()
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = (function() { 
var G__20476__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__20476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20477__i = 0, G__20477__a = new Array(arguments.length -  0);
while (G__20477__i < G__20477__a.length) {G__20477__a[G__20477__i] = arguments[G__20477__i + 0]; ++G__20477__i;}
  args = new cljs.core.IndexedSeq(G__20477__a,0,null);
} 
return G__20476__delegate.call(this,args);};
G__20476.cljs$lang$maxFixedArity = 0;
G__20476.cljs$lang$applyTo = (function (arglist__20478){
var args = cljs.core.seq(arglist__20478);
return G__20476__delegate(args);
});
G__20476.cljs$core$IFn$_invoke$arity$variadic = G__20476__delegate;
return G__20476;
})()
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
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
return (function (p1__20479_SHARP_){
return setTimeout(p1__20479_SHARP_,(16));
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
return f.call(null,a);
});
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__20480 = cljs.core.seq.call(null,queue);
var chunk__20482 = null;
var count__20483 = (0);
var i__20484 = (0);
while(true){
if((i__20484 < count__20483)){
var comp = cljs.core._nth.call(null,chunk__20482,i__20484);
if((((!((comp == null)))) && (cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))))){
comp.forceUpdate();


var G__20486 = seq__20480;
var G__20487 = chunk__20482;
var G__20488 = count__20483;
var G__20489 = (i__20484 + (1));
seq__20480 = G__20486;
chunk__20482 = G__20487;
count__20483 = G__20488;
i__20484 = G__20489;
continue;
} else {
var G__20490 = seq__20480;
var G__20491 = chunk__20482;
var G__20492 = count__20483;
var G__20493 = (i__20484 + (1));
seq__20480 = G__20490;
chunk__20482 = G__20491;
count__20483 = G__20492;
i__20484 = G__20493;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__20480);
if(temp__5735__auto__){
var seq__20480__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20480__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20480__$1);
var G__20494 = cljs.core.chunk_rest.call(null,seq__20480__$1);
var G__20495 = c__4556__auto__;
var G__20496 = cljs.core.count.call(null,c__4556__auto__);
var G__20497 = (0);
seq__20480 = G__20494;
chunk__20482 = G__20495;
count__20483 = G__20496;
i__20484 = G__20497;
continue;
} else {
var comp = cljs.core.first.call(null,seq__20480__$1);
if((((!((comp == null)))) && (cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))))){
comp.forceUpdate();


var G__20498 = cljs.core.next.call(null,seq__20480__$1);
var G__20499 = null;
var G__20500 = (0);
var G__20501 = (0);
seq__20480 = G__20498;
chunk__20482 = G__20499;
count__20483 = G__20500;
i__20484 = G__20501;
continue;
} else {
var G__20502 = cljs.core.next.call(null,seq__20480__$1);
var G__20503 = null;
var G__20504 = (0);
var G__20505 = (0);
seq__20480 = G__20502;
chunk__20482 = G__20503;
count__20483 = G__20504;
i__20484 = G__20505;
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
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
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
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
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
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
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
var G__20507 = arguments.length;
switch (G__20507) {
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
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
}));

(rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,(function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
}));

return cljs.core.assoc.call(null,state,key,local_state);
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
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR__orig_val__20509 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__20510 = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__20510);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__20511 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__20511,(0),null);
var next_state = cljs.core.nth.call(null,vec__20511,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__20514_20526 = cljs.core.seq.call(null,old_reactions);
var chunk__20515_20527 = null;
var count__20516_20528 = (0);
var i__20517_20529 = (0);
while(true){
if((i__20517_20529 < count__20516_20528)){
var ref_20530 = cljs.core._nth.call(null,chunk__20515_20527,i__20517_20529);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_20530)){
} else {
cljs.core.remove_watch.call(null,ref_20530,key);
}


var G__20531 = seq__20514_20526;
var G__20532 = chunk__20515_20527;
var G__20533 = count__20516_20528;
var G__20534 = (i__20517_20529 + (1));
seq__20514_20526 = G__20531;
chunk__20515_20527 = G__20532;
count__20516_20528 = G__20533;
i__20517_20529 = G__20534;
continue;
} else {
var temp__5735__auto___20535 = cljs.core.seq.call(null,seq__20514_20526);
if(temp__5735__auto___20535){
var seq__20514_20536__$1 = temp__5735__auto___20535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20514_20536__$1)){
var c__4556__auto___20537 = cljs.core.chunk_first.call(null,seq__20514_20536__$1);
var G__20538 = cljs.core.chunk_rest.call(null,seq__20514_20536__$1);
var G__20539 = c__4556__auto___20537;
var G__20540 = cljs.core.count.call(null,c__4556__auto___20537);
var G__20541 = (0);
seq__20514_20526 = G__20538;
chunk__20515_20527 = G__20539;
count__20516_20528 = G__20540;
i__20517_20529 = G__20541;
continue;
} else {
var ref_20542 = cljs.core.first.call(null,seq__20514_20536__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_20542)){
} else {
cljs.core.remove_watch.call(null,ref_20542,key);
}


var G__20543 = cljs.core.next.call(null,seq__20514_20536__$1);
var G__20544 = null;
var G__20545 = (0);
var G__20546 = (0);
seq__20514_20526 = G__20543;
chunk__20515_20527 = G__20544;
count__20516_20528 = G__20545;
i__20517_20529 = G__20546;
continue;
}
} else {
}
}
break;
}

var seq__20518_20547 = cljs.core.seq.call(null,new_reactions);
var chunk__20519_20548 = null;
var count__20520_20549 = (0);
var i__20521_20550 = (0);
while(true){
if((i__20521_20550 < count__20520_20549)){
var ref_20551 = cljs.core._nth.call(null,chunk__20519_20548,i__20521_20550);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_20551)){
} else {
cljs.core.add_watch.call(null,ref_20551,key,((function (seq__20518_20547,chunk__20519_20548,count__20520_20549,i__20521_20550,ref_20551,comp,old_reactions,vec__20511,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__20509,_STAR_reactions_STAR__temp_val__20510){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__20518_20547,chunk__20519_20548,count__20520_20549,i__20521_20550,ref_20551,comp,old_reactions,vec__20511,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__20509,_STAR_reactions_STAR__temp_val__20510))
);
}


var G__20552 = seq__20518_20547;
var G__20553 = chunk__20519_20548;
var G__20554 = count__20520_20549;
var G__20555 = (i__20521_20550 + (1));
seq__20518_20547 = G__20552;
chunk__20519_20548 = G__20553;
count__20520_20549 = G__20554;
i__20521_20550 = G__20555;
continue;
} else {
var temp__5735__auto___20556 = cljs.core.seq.call(null,seq__20518_20547);
if(temp__5735__auto___20556){
var seq__20518_20557__$1 = temp__5735__auto___20556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20518_20557__$1)){
var c__4556__auto___20558 = cljs.core.chunk_first.call(null,seq__20518_20557__$1);
var G__20559 = cljs.core.chunk_rest.call(null,seq__20518_20557__$1);
var G__20560 = c__4556__auto___20558;
var G__20561 = cljs.core.count.call(null,c__4556__auto___20558);
var G__20562 = (0);
seq__20518_20547 = G__20559;
chunk__20519_20548 = G__20560;
count__20520_20549 = G__20561;
i__20521_20550 = G__20562;
continue;
} else {
var ref_20563 = cljs.core.first.call(null,seq__20518_20557__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_20563)){
} else {
cljs.core.add_watch.call(null,ref_20563,key,((function (seq__20518_20547,chunk__20519_20548,count__20520_20549,i__20521_20550,ref_20563,seq__20518_20557__$1,temp__5735__auto___20556,comp,old_reactions,vec__20511,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__20509,_STAR_reactions_STAR__temp_val__20510){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__20518_20547,chunk__20519_20548,count__20520_20549,i__20521_20550,ref_20563,seq__20518_20557__$1,temp__5735__auto___20556,comp,old_reactions,vec__20511,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__20509,_STAR_reactions_STAR__temp_val__20510))
);
}


var G__20564 = cljs.core.next.call(null,seq__20518_20557__$1);
var G__20565 = null;
var G__20566 = (0);
var G__20567 = (0);
seq__20518_20547 = G__20564;
chunk__20519_20548 = G__20565;
count__20520_20549 = G__20566;
i__20521_20550 = G__20567;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__20509);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_20568 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__20522_20569 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__20523_20570 = null;
var count__20524_20571 = (0);
var i__20525_20572 = (0);
while(true){
if((i__20525_20572 < count__20524_20571)){
var ref_20573 = cljs.core._nth.call(null,chunk__20523_20570,i__20525_20572);
cljs.core.remove_watch.call(null,ref_20573,key_20568);


var G__20574 = seq__20522_20569;
var G__20575 = chunk__20523_20570;
var G__20576 = count__20524_20571;
var G__20577 = (i__20525_20572 + (1));
seq__20522_20569 = G__20574;
chunk__20523_20570 = G__20575;
count__20524_20571 = G__20576;
i__20525_20572 = G__20577;
continue;
} else {
var temp__5735__auto___20578 = cljs.core.seq.call(null,seq__20522_20569);
if(temp__5735__auto___20578){
var seq__20522_20579__$1 = temp__5735__auto___20578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20522_20579__$1)){
var c__4556__auto___20580 = cljs.core.chunk_first.call(null,seq__20522_20579__$1);
var G__20581 = cljs.core.chunk_rest.call(null,seq__20522_20579__$1);
var G__20582 = c__4556__auto___20580;
var G__20583 = cljs.core.count.call(null,c__4556__auto___20580);
var G__20584 = (0);
seq__20522_20569 = G__20581;
chunk__20523_20570 = G__20582;
count__20524_20571 = G__20583;
i__20525_20572 = G__20584;
continue;
} else {
var ref_20585 = cljs.core.first.call(null,seq__20522_20579__$1);
cljs.core.remove_watch.call(null,ref_20585,key_20568);


var G__20586 = cljs.core.next.call(null,seq__20522_20579__$1);
var G__20587 = null;
var G__20588 = (0);
var G__20589 = (0);
seq__20522_20569 = G__20586;
chunk__20523_20570 = G__20587;
count__20524_20571 = G__20588;
i__20525_20572 = G__20589;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
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
var len__4736__auto___20596 = arguments.length;
var i__4737__auto___20597 = (0);
while(true){
if((i__4737__auto___20597 < len__4736__auto___20596)){
args__4742__auto__.push((arguments[i__4737__auto___20597]));

var G__20598 = (i__4737__auto___20597 + (1));
i__4737__auto___20597 = G__20598;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__20593){
var map__20594 = p__20593;
var map__20594__$1 = (((((!((map__20594 == null))))?(((((map__20594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20594):map__20594);
var options = map__20594__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq20590){
var G__20591 = cljs.core.first.call(null,seq20590);
var seq20590__$1 = cljs.core.next.call(null,seq20590);
var G__20592 = cljs.core.first.call(null,seq20590__$1);
var seq20590__$2 = cljs.core.next.call(null,seq20590__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20591,G__20592,seq20590__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20602 = arguments.length;
var i__4737__auto___20603 = (0);
while(true){
if((i__4737__auto___20603 < len__4736__auto___20602)){
args__4742__auto__.push((arguments[i__4737__auto___20603]));

var G__20604 = (i__4737__auto___20603 + (1));
i__4737__auto___20603 = G__20604;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
}));

(rum.core.cursor.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor.cljs$lang$applyTo = (function (seq20599){
var G__20600 = cljs.core.first.call(null,seq20599);
var seq20599__$1 = cljs.core.next.call(null,seq20599);
var G__20601 = cljs.core.first.call(null,seq20599__$1);
var seq20599__$2 = cljs.core.next.call(null,seq20599__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20600,G__20601,seq20599__$2);
}));


//# sourceMappingURL=core.js.map
