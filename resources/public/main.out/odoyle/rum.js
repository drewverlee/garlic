// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('odoyle.rum');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('odoyle.rules');
goog.require('rum.core');
goog.require('cljs.spec.alpha');
odoyle.rum._STAR_local_pointer_STAR_ = null;
odoyle.rum._STAR_react_component_STAR_ = null;
odoyle.rum._STAR_can_return_atom_QMARK__STAR_ = null;
odoyle.rum._STAR_prop_STAR_ = null;
/**
 * If bound to a volatile containing a hash map,
 *          matches triggered by `fire-rules` will be stored in it
 *          rather than in the atom created by `ruleset`.
 *          This is important when modifying the session in a server-side
 *          route because it ensures the modifications will be local
 *          and will not affect other connections happening simultaneously.
 *          Do not use it from clojurescript.
 */
odoyle.rum._STAR_matches_STAR_ = null;
/**
 * Returns an atom that can hold local state for a component.
 *   Only works in a :then block.
 */
odoyle.rum.atom = (function odoyle$rum$atom(initial_value){
if(cljs.core.truth_(odoyle.rum._STAR_local_pointer_STAR_)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You cannot call `atom` here",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.truth_(cljs.core.deref(odoyle.rum._STAR_can_return_atom_QMARK__STAR_))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You can only call `atom` once in each :then block",cljs.core.PersistentArrayMap.EMPTY);
}

cljs.core.vreset_BANG_(odoyle.rum._STAR_can_return_atom_QMARK__STAR_,false);

var temp__5733__auto__ = cljs.core.deref(odoyle.rum._STAR_local_pointer_STAR_);
if(cljs.core.truth_(temp__5733__auto__)){
var _STAR_local = temp__5733__auto__;
return _STAR_local;
} else {
var _STAR_local = cljs.core.reset_BANG_(odoyle.rum._STAR_local_pointer_STAR_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial_value));
var temp__5735__auto___19307 = odoyle.rum._STAR_react_component_STAR_;
if(cljs.core.truth_(temp__5735__auto___19307)){
var cmp_19308 = temp__5735__auto___19307;
cljs.core.add_watch(_STAR_local,cljs.core.cst$kw$odoyle$rum_SLASH_local,(function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return cmp_19308.forceUpdate();
} else {
return null;
}
}));
} else {
}

return _STAR_local;
}
});
/**
 * Returns the prop sent to the component. Only works in a :then block.
 */
odoyle.rum.prop = (function odoyle$rum$prop(){
if(cljs.core.truth_(odoyle.rum._STAR_local_pointer_STAR_)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You cannot call `prop` here",cljs.core.PersistentArrayMap.EMPTY);
}

return odoyle.rum._STAR_prop_STAR_;
});
/**
 * A rum mixin that makes the associated component react to changes from
 *   the session and the local atom.
 */
odoyle.rum.reactive = (function odoyle$rum$reactive(rule_key,_STAR_match){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init,(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$odoyle$rum_SLASH_local_DASH_pointer,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.cst$kw$odoyle$rum_SLASH_global_DASH_key,(function (){var global_key = cljs.core.random_uuid();
var cmp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(_STAR_match,global_key,(function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return cmp.forceUpdate();
} else {
return null;
}
}));

return global_key;
})());
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_local_pointer_STAR__orig_val__19309 = odoyle.rum._STAR_local_pointer_STAR_;
var _STAR_react_component_STAR__orig_val__19310 = odoyle.rum._STAR_react_component_STAR_;
var _STAR_can_return_atom_QMARK__STAR__orig_val__19311 = odoyle.rum._STAR_can_return_atom_QMARK__STAR_;
var _STAR_prop_STAR__orig_val__19312 = odoyle.rum._STAR_prop_STAR_;
var _STAR_match_STAR__orig_val__19313 = odoyle.rules._STAR_match_STAR_;
var _STAR_local_pointer_STAR__temp_val__19314 = cljs.core.cst$kw$odoyle$rum_SLASH_local_DASH_pointer.cljs$core$IFn$_invoke$arity$1(state);
var _STAR_react_component_STAR__temp_val__19315 = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var _STAR_can_return_atom_QMARK__STAR__temp_val__19316 = cljs.core.volatile_BANG_(true);
var _STAR_prop_STAR__temp_val__19317 = cljs.core.first(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state));
var _STAR_match_STAR__temp_val__19318 = cljs.core.deref(_STAR_match);
(odoyle.rum._STAR_local_pointer_STAR_ = _STAR_local_pointer_STAR__temp_val__19314);

(odoyle.rum._STAR_react_component_STAR_ = _STAR_react_component_STAR__temp_val__19315);

(odoyle.rum._STAR_can_return_atom_QMARK__STAR_ = _STAR_can_return_atom_QMARK__STAR__temp_val__19316);

(odoyle.rum._STAR_prop_STAR_ = _STAR_prop_STAR__temp_val__19317);

(odoyle.rules._STAR_match_STAR_ = _STAR_match_STAR__temp_val__19318);

try{return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
}finally {(odoyle.rules._STAR_match_STAR_ = _STAR_match_STAR__orig_val__19313);

(odoyle.rum._STAR_prop_STAR_ = _STAR_prop_STAR__orig_val__19312);

(odoyle.rum._STAR_can_return_atom_QMARK__STAR_ = _STAR_can_return_atom_QMARK__STAR__orig_val__19311);

(odoyle.rum._STAR_react_component_STAR_ = _STAR_react_component_STAR__orig_val__19310);

(odoyle.rum._STAR_local_pointer_STAR_ = _STAR_local_pointer_STAR__orig_val__19309);
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
cljs.core.remove_watch(_STAR_match,cljs.core.cst$kw$odoyle$rum_SLASH_global_DASH_key.cljs$core$IFn$_invoke$arity$1(state));

var temp__5735__auto___19319 = cljs.core.deref(cljs.core.cst$kw$odoyle$rum_SLASH_local_DASH_pointer.cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__5735__auto___19319)){
var _STAR_local_19320 = temp__5735__auto___19319;
cljs.core.remove_watch(_STAR_local_19320,cljs.core.cst$kw$odoyle$rum_SLASH_local);
} else {
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$odoyle$rum_SLASH_local_DASH_pointer);
})], null);
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_id,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$value,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__19321_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$p1__19321_SHARP_))))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__19321_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$p1__19321_SHARP_))))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$_PERCENT_)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_id,(function (p1__19321_SHARP_){
return (!((p1__19321_SHARP_ instanceof cljs.core.Symbol)));
})], null),null)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_value,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$binding,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$binding], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_tuple,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_attr,cljs.core.cst$kw$value,cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_value,cljs.core.cst$kw$opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_opts)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$attr,cljs.core.cst$kw$value,cljs.core.cst$kw$opts], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_attr,cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_value,cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_opts,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_opts)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_attr,cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_value,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_opts)], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$header,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$what,"null"], null), null),cljs.core.cst$kw$body,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_spec,cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_tuple))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,cljs.core.cst$kw$body], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$what,null], null), null),cljs.spec.alpha.rep_PLUS_impl(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_spec,cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_tuple),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_tuple,cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_tuple,null,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$what,"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_spec,cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_tuple))], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rum_SLASH_rule,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$what_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_block),cljs.core.cst$kw$then_DASH_block,cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_block),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$what_DASH_block,cljs.core.cst$kw$then_DASH_block], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_block,cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_block),cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_block], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rum_SLASH_what_DASH_block),cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_block], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rum_SLASH_rules,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_simple_DASH_symbol_QMARK_,cljs.core.cst$kw$odoyle$rum_SLASH_rule),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$simple_DASH_symbol_QMARK_,cljs.core.cst$kw$odoyle$rum_SLASH_rule),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_simple_DASH_symbol_QMARK_,cljs.core.cst$kw$odoyle$rum_SLASH_rule], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.simple_symbol_QMARK_,cljs.core.cst$kw$odoyle$rum_SLASH_rule], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__19322){
return cljs.core.map_QMARK_(G__19322);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__16780__auto__,v__16781__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__16781__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_simple_DASH_symbol_QMARK_,cljs.core.cst$kw$odoyle$rum_SLASH_rule)], null),null));
