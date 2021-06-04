// Compiled by ClojureScript 1.10.764 {}
goog.provide('odoyle.rum');
goog.require('cljs.core');
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
throw cljs.core.ex_info.call(null,"You cannot call `atom` here",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.truth_(cljs.core.deref.call(null,odoyle.rum._STAR_can_return_atom_QMARK__STAR_))){
} else {
throw cljs.core.ex_info.call(null,"You can only call `atom` once in each :then block",cljs.core.PersistentArrayMap.EMPTY);
}

cljs.core.vreset_BANG_.call(null,odoyle.rum._STAR_can_return_atom_QMARK__STAR_,false);

var temp__5733__auto__ = cljs.core.deref.call(null,odoyle.rum._STAR_local_pointer_STAR_);
if(cljs.core.truth_(temp__5733__auto__)){
var _STAR_local = temp__5733__auto__;
return _STAR_local;
} else {
var _STAR_local = cljs.core.reset_BANG_.call(null,odoyle.rum._STAR_local_pointer_STAR_,cljs.core.atom.call(null,initial_value));
var temp__5735__auto___22824 = odoyle.rum._STAR_react_component_STAR_;
if(cljs.core.truth_(temp__5735__auto___22824)){
var cmp_22825 = temp__5735__auto___22824;
cljs.core.add_watch.call(null,_STAR_local,new cljs.core.Keyword("odoyle.rum","local","odoyle.rum/local",-2031085296),(function (_,___$1,p,n){
if(cljs.core.not_EQ_.call(null,p,n)){
return cmp_22825.forceUpdate();
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
throw cljs.core.ex_info.call(null,"You cannot call `prop` here",cljs.core.PersistentArrayMap.EMPTY);
}

return odoyle.rum._STAR_prop_STAR_;
});
/**
 * A rum mixin that makes the associated component react to changes from
 *   the session and the local atom.
 */
odoyle.rum.reactive = (function odoyle$rum$reactive(rule_key,_STAR_match){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword("odoyle.rum","local-pointer","odoyle.rum/local-pointer",-551093055),cljs.core.atom.call(null,null)),new cljs.core.Keyword("odoyle.rum","global-key","odoyle.rum/global-key",-1243905027),(function (){var global_key = cljs.core.random_uuid.call(null);
var cmp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,_STAR_match,global_key,(function (_,___$1,p,n){
if(cljs.core.not_EQ_.call(null,p,n)){
return cmp.forceUpdate();
} else {
return null;
}
}));

return global_key;
})());
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_local_pointer_STAR__orig_val__22826 = odoyle.rum._STAR_local_pointer_STAR_;
var _STAR_react_component_STAR__orig_val__22827 = odoyle.rum._STAR_react_component_STAR_;
var _STAR_can_return_atom_QMARK__STAR__orig_val__22828 = odoyle.rum._STAR_can_return_atom_QMARK__STAR_;
var _STAR_prop_STAR__orig_val__22829 = odoyle.rum._STAR_prop_STAR_;
var _STAR_match_STAR__orig_val__22830 = odoyle.rules._STAR_match_STAR_;
var _STAR_local_pointer_STAR__temp_val__22831 = new cljs.core.Keyword("odoyle.rum","local-pointer","odoyle.rum/local-pointer",-551093055).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_react_component_STAR__temp_val__22832 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_can_return_atom_QMARK__STAR__temp_val__22833 = cljs.core.volatile_BANG_.call(null,true);
var _STAR_prop_STAR__temp_val__22834 = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var _STAR_match_STAR__temp_val__22835 = cljs.core.deref.call(null,_STAR_match);
(odoyle.rum._STAR_local_pointer_STAR_ = _STAR_local_pointer_STAR__temp_val__22831);

(odoyle.rum._STAR_react_component_STAR_ = _STAR_react_component_STAR__temp_val__22832);

(odoyle.rum._STAR_can_return_atom_QMARK__STAR_ = _STAR_can_return_atom_QMARK__STAR__temp_val__22833);

(odoyle.rum._STAR_prop_STAR_ = _STAR_prop_STAR__temp_val__22834);

(odoyle.rules._STAR_match_STAR_ = _STAR_match_STAR__temp_val__22835);

try{return render_fn.call(null,state);
}finally {(odoyle.rules._STAR_match_STAR_ = _STAR_match_STAR__orig_val__22830);

(odoyle.rum._STAR_prop_STAR_ = _STAR_prop_STAR__orig_val__22829);

(odoyle.rum._STAR_can_return_atom_QMARK__STAR_ = _STAR_can_return_atom_QMARK__STAR__orig_val__22828);

(odoyle.rum._STAR_react_component_STAR_ = _STAR_react_component_STAR__orig_val__22827);

(odoyle.rum._STAR_local_pointer_STAR_ = _STAR_local_pointer_STAR__orig_val__22826);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.remove_watch.call(null,_STAR_match,new cljs.core.Keyword("odoyle.rum","global-key","odoyle.rum/global-key",-1243905027).cljs$core$IFn$_invoke$arity$1(state));

var temp__5735__auto___22836 = cljs.core.deref.call(null,new cljs.core.Keyword("odoyle.rum","local-pointer","odoyle.rum/local-pointer",-551093055).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__5735__auto___22836)){
var _STAR_local_22837 = temp__5735__auto___22836;
cljs.core.remove_watch.call(null,_STAR_local_22837,new cljs.core.Keyword("odoyle.rum","local","odoyle.rum/local",-2031085296));
} else {
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("odoyle.rum","local-pointer","odoyle.rum/local-pointer",-551093055));
})], null);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rum","what-id","odoyle.rum/what-id",1834191592),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22838#","p1__22838#",-1236195238,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Symbol(null,"p1__22838#","p1__22838#",-1236195238,null)))))),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22838#","p1__22838#",-1236195238,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Symbol(null,"p1__22838#","p1__22838#",-1236195238,null)))))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rules","id","odoyle.rules/id",874134163),(function (p1__22838_SHARP_){
return (!((p1__22838_SHARP_ instanceof cljs.core.Symbol)));
})], null),null)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rum","what-value","odoyle.rum/what-value",38488588),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rum","what-tuple","odoyle.rum/what-tuple",1860515488),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("odoyle.rum","what-id","odoyle.rum/what-id",1834191592),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("odoyle.rules","what-attr","odoyle.rules/what-attr",-910390258),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("odoyle.rum","what-value","odoyle.rum/what-value",38488588),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("odoyle.rules","what-opts","odoyle.rules/what-opts",-560170096))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"opts","opts",155075701)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rum","what-id","odoyle.rum/what-id",1834191592),new cljs.core.Keyword("odoyle.rules","what-attr","odoyle.rules/what-attr",-910390258),new cljs.core.Keyword("odoyle.rum","what-value","odoyle.rum/what-value",38488588),cljs.spec.alpha.maybe_impl.call(null,new cljs.core.Keyword("odoyle.rules","what-opts","odoyle.rules/what-opts",-560170096),new cljs.core.Keyword("odoyle.rules","what-opts","odoyle.rules/what-opts",-560170096))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("odoyle.rum","what-id","odoyle.rum/what-id",1834191592),new cljs.core.Keyword("odoyle.rules","what-attr","odoyle.rules/what-attr",-910390258),new cljs.core.Keyword("odoyle.rum","what-value","odoyle.rum/what-value",38488588),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("odoyle.rules","what-opts","odoyle.rules/what-opts",-560170096))], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rum","what-block","odoyle.rum/what-block",-1257122284),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"what","what",987290269),"null"], null), null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Keyword("odoyle.rum","what-tuple","odoyle.rum/what-tuple",1860515488)))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"what","what",987290269),null], null), null),cljs.spec.alpha.rep_PLUS_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Keyword("odoyle.rum","what-tuple","odoyle.rum/what-tuple",1860515488)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("odoyle.rum","what-tuple","odoyle.rum/what-tuple",1860515488),new cljs.core.Keyword("odoyle.rum","what-tuple","odoyle.rum/what-tuple",1860515488),null,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"what","what",987290269),"null"], null), null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Keyword("odoyle.rum","what-tuple","odoyle.rum/what-tuple",1860515488)))], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rum","rule","odoyle.rum/rule",-881234403),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"what-block","what-block",353706536),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("odoyle.rum","what-block","odoyle.rum/what-block",-1257122284)),new cljs.core.Keyword(null,"then-block","then-block",1414126772),new cljs.core.Keyword("odoyle.rules","then-block","odoyle.rules/then-block",-823628687)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"what-block","what-block",353706536),new cljs.core.Keyword(null,"then-block","then-block",1414126772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl.call(null,new cljs.core.Keyword("odoyle.rum","what-block","odoyle.rum/what-block",-1257122284),new cljs.core.Keyword("odoyle.rum","what-block","odoyle.rum/what-block",-1257122284)),new cljs.core.Keyword("odoyle.rules","then-block","odoyle.rules/then-block",-823628687)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("odoyle.rum","what-block","odoyle.rum/what-block",-1257122284)),new cljs.core.Keyword("odoyle.rules","then-block","odoyle.rules/then-block",-823628687)], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("odoyle.rum","rules","odoyle.rum/rules",-1485781166),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword("odoyle.rum","rule","odoyle.rum/rule",-881234403)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),new cljs.core.Keyword("odoyle.rum","rule","odoyle.rum/rule",-881234403)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword("odoyle.rum","rule","odoyle.rum/rule",-881234403)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.simple_symbol_QMARK_,new cljs.core.Keyword("odoyle.rum","rule","odoyle.rum/rule",-881234403)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__22839){
return cljs.core.map_QMARK_.call(null,G__22839);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__16537__auto__,v__16538__auto__){
return cljs.core.nth.call(null,v__16538__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword("odoyle.rum","rule","odoyle.rum/rule",-881234403))], null),null));

//# sourceMappingURL=rum.js.map
