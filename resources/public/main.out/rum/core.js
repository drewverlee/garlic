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
var seq__19347 = cljs.core.seq.call(null,props);
var chunk__19349 = null;
var count__19350 = (0);
var i__19351 = (0);
while(true){
if((i__19351 < count__19350)){
var vec__19359 = cljs.core._nth.call(null,chunk__19349,i__19351);
var k = cljs.core.nth.call(null,vec__19359,(0),null);
var v = cljs.core.nth.call(null,vec__19359,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__19365 = seq__19347;
var G__19366 = chunk__19349;
var G__19367 = count__19350;
var G__19368 = (i__19351 + (1));
seq__19347 = G__19365;
chunk__19349 = G__19366;
count__19350 = G__19367;
i__19351 = G__19368;
continue;
} else {
var G__19369 = seq__19347;
var G__19370 = chunk__19349;
var G__19371 = count__19350;
var G__19372 = (i__19351 + (1));
seq__19347 = G__19369;
chunk__19349 = G__19370;
count__19350 = G__19371;
i__19351 = G__19372;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__19347);
if(temp__5735__auto__){
var seq__19347__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19347__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19347__$1);
var G__19373 = cljs.core.chunk_rest.call(null,seq__19347__$1);
var G__19374 = c__4556__auto__;
var G__19375 = cljs.core.count.call(null,c__4556__auto__);
var G__19376 = (0);
seq__19347 = G__19373;
chunk__19349 = G__19374;
count__19350 = G__19375;
i__19351 = G__19376;
continue;
} else {
var vec__19362 = cljs.core.first.call(null,seq__19347__$1);
var k = cljs.core.nth.call(null,vec__19362,(0),null);
var v = cljs.core.nth.call(null,vec__19362,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__19377 = cljs.core.next.call(null,seq__19347__$1);
var G__19378 = null;
var G__19379 = (0);
var G__19380 = (0);
seq__19347 = G__19377;
chunk__19349 = G__19378;
count__19350 = G__19379;
i__19351 = G__19380;
continue;
} else {
var G__19381 = cljs.core.next.call(null,seq__19347__$1);
var G__19382 = null;
var G__19383 = (0);
var G__19384 = (0);
seq__19347 = G__19381;
chunk__19349 = G__19382;
count__19350 = G__19383;
i__19351 = G__19384;
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
var wrapped_render = cljs.core.reduce.call(null,(function (p1__19386_SHARP_,p2__19385_SHARP_){
return p2__19385_SHARP_.call(null,p1__19386_SHARP_);
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
var next_state = cljs.core.reduce.call(null,(function (p1__19388_SHARP_,p2__19387_SHARP_){
return p2__19387_SHARP_.call(null,old_state,p1__19388_SHARP_);
}),state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
}));

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__4126__auto__ = cljs.core.some.call(null,(function (p1__19389_SHARP_){
return p1__19389_SHARP_.call(null,old_state,new_state);
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
var vec__19391 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__19391,(0),null);
var next_state = cljs.core.nth.call(null,vec__19391,(1),null);
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
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__19390_SHARP_){
return p1__19390_SHARP_.call(null,state);
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
var G__19394__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__19394 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19395__i = 0, G__19395__a = new Array(arguments.length -  0);
while (G__19395__i < G__19395__a.length) {G__19395__a[G__19395__i] = arguments[G__19395__i + 0]; ++G__19395__i;}
  args = new cljs.core.IndexedSeq(G__19395__a,0,null);
} 
return G__19394__delegate.call(this,args);};
G__19394.cljs$lang$maxFixedArity = 0;
G__19394.cljs$lang$applyTo = (function (arglist__19396){
var args = cljs.core.seq(arglist__19396);
return G__19394__delegate(args);
});
G__19394.cljs$core$IFn$_invoke$arity$variadic = G__19394__delegate;
return G__19394;
})()
:(function() { 
var G__19397__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__19397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19398__i = 0, G__19398__a = new Array(arguments.length -  0);
while (G__19398__i < G__19398__a.length) {G__19398__a[G__19398__i] = arguments[G__19398__i + 0]; ++G__19398__i;}
  args = new cljs.core.IndexedSeq(G__19398__a,0,null);
} 
return G__19397__delegate.call(this,args);};
G__19397.cljs$lang$maxFixedArity = 0;
G__19397.cljs$lang$applyTo = (function (arglist__19399){
var args = cljs.core.seq(arglist__19399);
return G__19397__delegate(args);
});
G__19397.cljs$core$IFn$_invoke$arity$variadic = G__19397__delegate;
return G__19397;
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
var G__19400__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__19400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19401__i = 0, G__19401__a = new Array(arguments.length -  0);
while (G__19401__i < G__19401__a.length) {G__19401__a[G__19401__i] = arguments[G__19401__i + 0]; ++G__19401__i;}
  args = new cljs.core.IndexedSeq(G__19401__a,0,null);
} 
return G__19400__delegate.call(this,args);};
G__19400.cljs$lang$maxFixedArity = 0;
G__19400.cljs$lang$applyTo = (function (arglist__19402){
var args = cljs.core.seq(arglist__19402);
return G__19400__delegate(args);
});
G__19400.cljs$core$IFn$_invoke$arity$variadic = G__19400__delegate;
return G__19400;
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
return (function (p1__19403_SHARP_){
return setTimeout(p1__19403_SHARP_,(16));
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
var seq__19404 = cljs.core.seq.call(null,queue);
var chunk__19406 = null;
var count__19407 = (0);
var i__19408 = (0);
while(true){
if((i__19408 < count__19407)){
var comp = cljs.core._nth.call(null,chunk__19406,i__19408);
if((((!((comp == null)))) && (cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))))){
comp.forceUpdate();


var G__19410 = seq__19404;
var G__19411 = chunk__19406;
var G__19412 = count__19407;
var G__19413 = (i__19408 + (1));
seq__19404 = G__19410;
chunk__19406 = G__19411;
count__19407 = G__19412;
i__19408 = G__19413;
continue;
} else {
var G__19414 = seq__19404;
var G__19415 = chunk__19406;
var G__19416 = count__19407;
var G__19417 = (i__19408 + (1));
seq__19404 = G__19414;
chunk__19406 = G__19415;
count__19407 = G__19416;
i__19408 = G__19417;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__19404);
if(temp__5735__auto__){
var seq__19404__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19404__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19404__$1);
var G__19418 = cljs.core.chunk_rest.call(null,seq__19404__$1);
var G__19419 = c__4556__auto__;
var G__19420 = cljs.core.count.call(null,c__4556__auto__);
var G__19421 = (0);
seq__19404 = G__19418;
chunk__19406 = G__19419;
count__19407 = G__19420;
i__19408 = G__19421;
continue;
} else {
var comp = cljs.core.first.call(null,seq__19404__$1);
if((((!((comp == null)))) && (cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))))){
comp.forceUpdate();


var G__19422 = cljs.core.next.call(null,seq__19404__$1);
var G__19423 = null;
var G__19424 = (0);
var G__19425 = (0);
seq__19404 = G__19422;
chunk__19406 = G__19423;
count__19407 = G__19424;
i__19408 = G__19425;
continue;
} else {
var G__19426 = cljs.core.next.call(null,seq__19404__$1);
var G__19427 = null;
var G__19428 = (0);
var G__19429 = (0);
seq__19404 = G__19426;
chunk__19406 = G__19427;
count__19407 = G__19428;
i__19408 = G__19429;
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
var G__19431 = arguments.length;
switch (G__19431) {
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
var _STAR_reactions_STAR__orig_val__19433 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__19434 = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__19434);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__19435 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__19435,(0),null);
var next_state = cljs.core.nth.call(null,vec__19435,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__19438_19450 = cljs.core.seq.call(null,old_reactions);
var chunk__19439_19451 = null;
var count__19440_19452 = (0);
var i__19441_19453 = (0);
while(true){
if((i__19441_19453 < count__19440_19452)){
var ref_19454 = cljs.core._nth.call(null,chunk__19439_19451,i__19441_19453);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_19454)){
} else {
cljs.core.remove_watch.call(null,ref_19454,key);
}


var G__19455 = seq__19438_19450;
var G__19456 = chunk__19439_19451;
var G__19457 = count__19440_19452;
var G__19458 = (i__19441_19453 + (1));
seq__19438_19450 = G__19455;
chunk__19439_19451 = G__19456;
count__19440_19452 = G__19457;
i__19441_19453 = G__19458;
continue;
} else {
var temp__5735__auto___19459 = cljs.core.seq.call(null,seq__19438_19450);
if(temp__5735__auto___19459){
var seq__19438_19460__$1 = temp__5735__auto___19459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19438_19460__$1)){
var c__4556__auto___19461 = cljs.core.chunk_first.call(null,seq__19438_19460__$1);
var G__19462 = cljs.core.chunk_rest.call(null,seq__19438_19460__$1);
var G__19463 = c__4556__auto___19461;
var G__19464 = cljs.core.count.call(null,c__4556__auto___19461);
var G__19465 = (0);
seq__19438_19450 = G__19462;
chunk__19439_19451 = G__19463;
count__19440_19452 = G__19464;
i__19441_19453 = G__19465;
continue;
} else {
var ref_19466 = cljs.core.first.call(null,seq__19438_19460__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_19466)){
} else {
cljs.core.remove_watch.call(null,ref_19466,key);
}


var G__19467 = cljs.core.next.call(null,seq__19438_19460__$1);
var G__19468 = null;
var G__19469 = (0);
var G__19470 = (0);
seq__19438_19450 = G__19467;
chunk__19439_19451 = G__19468;
count__19440_19452 = G__19469;
i__19441_19453 = G__19470;
continue;
}
} else {
}
}
break;
}

var seq__19442_19471 = cljs.core.seq.call(null,new_reactions);
var chunk__19443_19472 = null;
var count__19444_19473 = (0);
var i__19445_19474 = (0);
while(true){
if((i__19445_19474 < count__19444_19473)){
var ref_19475 = cljs.core._nth.call(null,chunk__19443_19472,i__19445_19474);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_19475)){
} else {
cljs.core.add_watch.call(null,ref_19475,key,((function (seq__19442_19471,chunk__19443_19472,count__19444_19473,i__19445_19474,ref_19475,comp,old_reactions,vec__19435,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__19433,_STAR_reactions_STAR__temp_val__19434){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__19442_19471,chunk__19443_19472,count__19444_19473,i__19445_19474,ref_19475,comp,old_reactions,vec__19435,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__19433,_STAR_reactions_STAR__temp_val__19434))
);
}


var G__19476 = seq__19442_19471;
var G__19477 = chunk__19443_19472;
var G__19478 = count__19444_19473;
var G__19479 = (i__19445_19474 + (1));
seq__19442_19471 = G__19476;
chunk__19443_19472 = G__19477;
count__19444_19473 = G__19478;
i__19445_19474 = G__19479;
continue;
} else {
var temp__5735__auto___19480 = cljs.core.seq.call(null,seq__19442_19471);
if(temp__5735__auto___19480){
var seq__19442_19481__$1 = temp__5735__auto___19480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19442_19481__$1)){
var c__4556__auto___19482 = cljs.core.chunk_first.call(null,seq__19442_19481__$1);
var G__19483 = cljs.core.chunk_rest.call(null,seq__19442_19481__$1);
var G__19484 = c__4556__auto___19482;
var G__19485 = cljs.core.count.call(null,c__4556__auto___19482);
var G__19486 = (0);
seq__19442_19471 = G__19483;
chunk__19443_19472 = G__19484;
count__19444_19473 = G__19485;
i__19445_19474 = G__19486;
continue;
} else {
var ref_19487 = cljs.core.first.call(null,seq__19442_19481__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_19487)){
} else {
cljs.core.add_watch.call(null,ref_19487,key,((function (seq__19442_19471,chunk__19443_19472,count__19444_19473,i__19445_19474,ref_19487,seq__19442_19481__$1,temp__5735__auto___19480,comp,old_reactions,vec__19435,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__19433,_STAR_reactions_STAR__temp_val__19434){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__19442_19471,chunk__19443_19472,count__19444_19473,i__19445_19474,ref_19487,seq__19442_19481__$1,temp__5735__auto___19480,comp,old_reactions,vec__19435,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__19433,_STAR_reactions_STAR__temp_val__19434))
);
}


var G__19488 = cljs.core.next.call(null,seq__19442_19481__$1);
var G__19489 = null;
var G__19490 = (0);
var G__19491 = (0);
seq__19442_19471 = G__19488;
chunk__19443_19472 = G__19489;
count__19444_19473 = G__19490;
i__19445_19474 = G__19491;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__19433);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_19492 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__19446_19493 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__19447_19494 = null;
var count__19448_19495 = (0);
var i__19449_19496 = (0);
while(true){
if((i__19449_19496 < count__19448_19495)){
var ref_19497 = cljs.core._nth.call(null,chunk__19447_19494,i__19449_19496);
cljs.core.remove_watch.call(null,ref_19497,key_19492);


var G__19498 = seq__19446_19493;
var G__19499 = chunk__19447_19494;
var G__19500 = count__19448_19495;
var G__19501 = (i__19449_19496 + (1));
seq__19446_19493 = G__19498;
chunk__19447_19494 = G__19499;
count__19448_19495 = G__19500;
i__19449_19496 = G__19501;
continue;
} else {
var temp__5735__auto___19502 = cljs.core.seq.call(null,seq__19446_19493);
if(temp__5735__auto___19502){
var seq__19446_19503__$1 = temp__5735__auto___19502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19446_19503__$1)){
var c__4556__auto___19504 = cljs.core.chunk_first.call(null,seq__19446_19503__$1);
var G__19505 = cljs.core.chunk_rest.call(null,seq__19446_19503__$1);
var G__19506 = c__4556__auto___19504;
var G__19507 = cljs.core.count.call(null,c__4556__auto___19504);
var G__19508 = (0);
seq__19446_19493 = G__19505;
chunk__19447_19494 = G__19506;
count__19448_19495 = G__19507;
i__19449_19496 = G__19508;
continue;
} else {
var ref_19509 = cljs.core.first.call(null,seq__19446_19503__$1);
cljs.core.remove_watch.call(null,ref_19509,key_19492);


var G__19510 = cljs.core.next.call(null,seq__19446_19503__$1);
var G__19511 = null;
var G__19512 = (0);
var G__19513 = (0);
seq__19446_19493 = G__19510;
chunk__19447_19494 = G__19511;
count__19448_19495 = G__19512;
i__19449_19496 = G__19513;
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
var len__4736__auto___19520 = arguments.length;
var i__4737__auto___19521 = (0);
while(true){
if((i__4737__auto___19521 < len__4736__auto___19520)){
args__4742__auto__.push((arguments[i__4737__auto___19521]));

var G__19522 = (i__4737__auto___19521 + (1));
i__4737__auto___19521 = G__19522;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__19517){
var map__19518 = p__19517;
var map__19518__$1 = (((((!((map__19518 == null))))?(((((map__19518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19518):map__19518);
var options = map__19518__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq19514){
var G__19515 = cljs.core.first.call(null,seq19514);
var seq19514__$1 = cljs.core.next.call(null,seq19514);
var G__19516 = cljs.core.first.call(null,seq19514__$1);
var seq19514__$2 = cljs.core.next.call(null,seq19514__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19515,G__19516,seq19514__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19526 = arguments.length;
var i__4737__auto___19527 = (0);
while(true){
if((i__4737__auto___19527 < len__4736__auto___19526)){
args__4742__auto__.push((arguments[i__4737__auto___19527]));

var G__19528 = (i__4737__auto___19527 + (1));
i__4737__auto___19527 = G__19528;
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
(rum.core.cursor.cljs$lang$applyTo = (function (seq19523){
var G__19524 = cljs.core.first.call(null,seq19523);
var seq19523__$1 = cljs.core.next.call(null,seq19523);
var G__19525 = cljs.core.first.call(null,seq19523__$1);
var seq19523__$2 = cljs.core.next.call(null,seq19523__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19524,G__19525,seq19523__$2);
}));


//# sourceMappingURL=core.js.map
