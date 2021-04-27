// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('odoyle.rules');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('expound.alpha');
goog.require('clojure.string');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.qualified_keyword_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_value,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_id,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$binding,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$value,cljs.core.cst$kw$odoyle$rules_SLASH_id),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$binding,cljs.core.cst$kw$value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_id], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_attr,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$value,cljs.core.cst$kw$odoyle$rules_SLASH_attr),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_attr], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_attr], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_value,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$binding,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$value,cljs.core.cst$kw$odoyle$rules_SLASH_value),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$binding,cljs.core.cst$kw$value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_value], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_then,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$bool,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$kw$func,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bool,cljs.core.cst$kw$func], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean_QMARK_,cljs.core.symbol_QMARK_], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_then], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_then], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__19590){
return cljs.core.map_QMARK_(G__19590);
})], null),(function (G__19590){
return cljs.core.map_QMARK_(G__19590);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$then], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_then], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_tuple,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_attr,cljs.core.cst$kw$value,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_value,cljs.core.cst$kw$opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_opts)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$attr,cljs.core.cst$kw$value,cljs.core.cst$kw$opts], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_value,cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_opts,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_opts)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_value,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_opts)], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$header,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$what,"null"], null), null),cljs.core.cst$kw$body,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_spec,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_tuple))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,cljs.core.cst$kw$body], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$what,null], null), null),cljs.spec.alpha.rep_PLUS_impl(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_spec,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_tuple),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_tuple,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_tuple,null,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$what,"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_spec,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_tuple))], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_when_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$header,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$when,"null"], null), null),cljs.core.cst$kw$body,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__19591_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$p1__19591_SHARP_))))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,cljs.core.cst$kw$body], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$when,null], null), null),cljs.spec.alpha.rep_PLUS_impl(cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$_PERCENT_))),(function (p1__19591_SHARP_){
return (!((p1__19591_SHARP_ instanceof cljs.core.Keyword)));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$when,"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__19591_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$p1__19591_SHARP_))))], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$header,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$then,"null"], null), null),cljs.core.cst$kw$body,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__19592_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$p1__19592_SHARP_))))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,cljs.core.cst$kw$body], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$then,null], null), null),cljs.spec.alpha.rep_PLUS_impl(cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$_PERCENT_))),(function (p1__19592_SHARP_){
return (!((p1__19592_SHARP_ instanceof cljs.core.Keyword)));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$then,"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__19592_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$p1__19592_SHARP_))))], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_finally_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$header,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$then_DASH_finally,"null"], null), null),cljs.core.cst$kw$body,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__19593_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$p1__19593_SHARP_))))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,cljs.core.cst$kw$body], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$then_DASH_finally,null], null), null),cljs.spec.alpha.rep_PLUS_impl(cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$_PERCENT_))),(function (p1__19593_SHARP_){
return (!((p1__19593_SHARP_ instanceof cljs.core.Keyword)));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$then_DASH_finally,"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__19593_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$p1__19593_SHARP_))))], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_rule,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$what_DASH_block,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_block,cljs.core.cst$kw$when_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_when_DASH_block),cljs.core.cst$kw$then_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_block),cljs.core.cst$kw$then_DASH_finally_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_finally_DASH_block)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$what_DASH_block,cljs.core.cst$kw$when_DASH_block,cljs.core.cst$kw$then_DASH_block,cljs.core.cst$kw$then_DASH_finally_DASH_block], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_block,cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$odoyle$rules_SLASH_when_DASH_block,cljs.core.cst$kw$odoyle$rules_SLASH_when_DASH_block),cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_block,cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_block),cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_finally_DASH_block,cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_finally_DASH_block)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_when_DASH_block),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_block),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_finally_DASH_block)], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_rules,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_rule),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_rule),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_rule], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_rule], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__19594){
return cljs.core.map_QMARK_(G__19594);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17556__auto__,v__17557__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17557__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_rule)], null),null));
odoyle.rules.parse = (function odoyle$rules$parse(spec,content){
var res = cljs.spec.alpha.conform(spec,content);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid,res)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$2(spec,content),cljs.core.PersistentArrayMap.EMPTY);
} else {
return res;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.Fact = (function (id,attr,value,__meta,__extmap,__hash){
this.id = id;
this.attr = attr;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.Fact.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.Fact.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19596,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19600 = k19596;
var G__19600__$1 = (((G__19600 instanceof cljs.core.Keyword))?G__19600.fqn:null);
switch (G__19600__$1) {
case "id":
return self__.id;

break;
case "attr":
return self__.attr;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19596,else__4383__auto__);

}
}));

(odoyle.rules.Fact.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19601){
var vec__19602 = p__19601;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19602,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19602,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.Fact.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.Fact{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id,self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
}));

(odoyle.rules.Fact.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19595){
var self__ = this;
var G__19595__$1 = this;
return (new cljs.core.RecordIter((0),G__19595__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$attr,cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(odoyle.rules.Fact.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.Fact.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.Fact(self__.id,self__.attr,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Fact.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(odoyle.rules.Fact.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__19605 = (function (coll__4377__auto__){
return (-1909491215 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19605(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Fact.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19597,other19598){
var self__ = this;
var this19597__$1 = this;
return (((!((other19598 == null)))) && ((this19597__$1.constructor === other19598.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19597__$1.id,other19598.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19597__$1.attr,other19598.attr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19597__$1.value,other19598.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19597__$1.__extmap,other19598.__extmap)));
}));

(odoyle.rules.Fact.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$attr,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.Fact(self__.id,self__.attr,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.Fact.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19595){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19606 = cljs.core.keyword_identical_QMARK_;
var expr__19607 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19609 = cljs.core.cst$kw$id;
var G__19610 = expr__19607;
return (pred__19606.cljs$core$IFn$_invoke$arity$2 ? pred__19606.cljs$core$IFn$_invoke$arity$2(G__19609,G__19610) : pred__19606.call(null,G__19609,G__19610));
})())){
return (new odoyle.rules.Fact(G__19595,self__.attr,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19611 = cljs.core.cst$kw$attr;
var G__19612 = expr__19607;
return (pred__19606.cljs$core$IFn$_invoke$arity$2 ? pred__19606.cljs$core$IFn$_invoke$arity$2(G__19611,G__19612) : pred__19606.call(null,G__19611,G__19612));
})())){
return (new odoyle.rules.Fact(self__.id,G__19595,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19613 = cljs.core.cst$kw$value;
var G__19614 = expr__19607;
return (pred__19606.cljs$core$IFn$_invoke$arity$2 ? pred__19606.cljs$core$IFn$_invoke$arity$2(G__19613,G__19614) : pred__19606.call(null,G__19613,G__19614));
})())){
return (new odoyle.rules.Fact(self__.id,self__.attr,G__19595,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Fact(self__.id,self__.attr,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19595),null));
}
}
}
}));

(odoyle.rules.Fact.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$id,self__.id,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$attr,self__.attr,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$value,self__.value,null))], null),self__.__extmap));
}));

(odoyle.rules.Fact.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19595){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Fact(self__.id,self__.attr,self__.value,G__19595,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Fact.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.Fact.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$id,cljs.core.cst$sym$attr,cljs.core.cst$sym$value], null);
}));

(odoyle.rules.Fact.cljs$lang$type = true);

(odoyle.rules.Fact.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/Fact",null,(1),null));
}));

(odoyle.rules.Fact.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"odoyle.rules/Fact");
}));

/**
 * Positional factory function for odoyle.rules/Fact.
 */
odoyle.rules.__GT_Fact = (function odoyle$rules$__GT_Fact(id,attr,value){
return (new odoyle.rules.Fact(id,attr,value,null,null,null));
});

/**
 * Factory function for odoyle.rules/Fact, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_Fact = (function odoyle$rules$map__GT_Fact(G__19599){
var extmap__4419__auto__ = (function (){var G__19615 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19599,cljs.core.cst$kw$id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$attr,cljs.core.cst$kw$value], 0));
if(cljs.core.record_QMARK_(G__19599)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19615);
} else {
return G__19615;
}
})();
return (new odoyle.rules.Fact(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(G__19599),cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__19599),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__19599),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.Token = (function (fact,kind,old_fact,__meta,__extmap,__hash){
this.fact = fact;
this.kind = kind;
this.old_fact = old_fact;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.Token.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.Token.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19618,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19622 = k19618;
var G__19622__$1 = (((G__19622 instanceof cljs.core.Keyword))?G__19622.fqn:null);
switch (G__19622__$1) {
case "fact":
return self__.fact;

break;
case "kind":
return self__.kind;

break;
case "old-fact":
return self__.old_fact;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19618,else__4383__auto__);

}
}));

(odoyle.rules.Token.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19623){
var vec__19624 = p__19623;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19624,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19624,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.Token.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.Token{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fact,self__.fact],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$kind,self__.kind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$old_DASH_fact,self__.old_fact],null))], null),self__.__extmap));
}));

(odoyle.rules.Token.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19617){
var self__ = this;
var G__19617__$1 = this;
return (new cljs.core.RecordIter((0),G__19617__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fact,cljs.core.cst$kw$kind,cljs.core.cst$kw$old_DASH_fact], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(odoyle.rules.Token.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.Token.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.Token(self__.fact,self__.kind,self__.old_fact,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Token.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(odoyle.rules.Token.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__19627 = (function (coll__4377__auto__){
return (1211839350 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19627(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Token.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19619,other19620){
var self__ = this;
var this19619__$1 = this;
return (((!((other19620 == null)))) && ((this19619__$1.constructor === other19620.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19619__$1.fact,other19620.fact)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19619__$1.kind,other19620.kind)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19619__$1.old_fact,other19620.old_fact)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19619__$1.__extmap,other19620.__extmap)));
}));

(odoyle.rules.Token.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fact,null,cljs.core.cst$kw$old_DASH_fact,null,cljs.core.cst$kw$kind,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.Token(self__.fact,self__.kind,self__.old_fact,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.Token.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19617){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19628 = cljs.core.keyword_identical_QMARK_;
var expr__19629 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19631 = cljs.core.cst$kw$fact;
var G__19632 = expr__19629;
return (pred__19628.cljs$core$IFn$_invoke$arity$2 ? pred__19628.cljs$core$IFn$_invoke$arity$2(G__19631,G__19632) : pred__19628.call(null,G__19631,G__19632));
})())){
return (new odoyle.rules.Token(G__19617,self__.kind,self__.old_fact,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19633 = cljs.core.cst$kw$kind;
var G__19634 = expr__19629;
return (pred__19628.cljs$core$IFn$_invoke$arity$2 ? pred__19628.cljs$core$IFn$_invoke$arity$2(G__19633,G__19634) : pred__19628.call(null,G__19633,G__19634));
})())){
return (new odoyle.rules.Token(self__.fact,G__19617,self__.old_fact,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19635 = cljs.core.cst$kw$old_DASH_fact;
var G__19636 = expr__19629;
return (pred__19628.cljs$core$IFn$_invoke$arity$2 ? pred__19628.cljs$core$IFn$_invoke$arity$2(G__19635,G__19636) : pred__19628.call(null,G__19635,G__19636));
})())){
return (new odoyle.rules.Token(self__.fact,self__.kind,G__19617,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Token(self__.fact,self__.kind,self__.old_fact,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19617),null));
}
}
}
}));

(odoyle.rules.Token.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fact,self__.fact,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$kind,self__.kind,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$old_DASH_fact,self__.old_fact,null))], null),self__.__extmap));
}));

(odoyle.rules.Token.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19617){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Token(self__.fact,self__.kind,self__.old_fact,G__19617,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Token.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.Token.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fact,cljs.core.cst$sym$kind,cljs.core.cst$sym$old_DASH_fact], null);
}));

(odoyle.rules.Token.cljs$lang$type = true);

(odoyle.rules.Token.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/Token",null,(1),null));
}));

(odoyle.rules.Token.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"odoyle.rules/Token");
}));

/**
 * Positional factory function for odoyle.rules/Token.
 */
odoyle.rules.__GT_Token = (function odoyle$rules$__GT_Token(fact,kind,old_fact){
return (new odoyle.rules.Token(fact,kind,old_fact,null,null,null));
});

/**
 * Factory function for odoyle.rules/Token, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_Token = (function odoyle$rules$map__GT_Token(G__19621){
var extmap__4419__auto__ = (function (){var G__19637 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19621,cljs.core.cst$kw$fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$kind,cljs.core.cst$kw$old_DASH_fact], 0));
if(cljs.core.record_QMARK_(G__19621)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19637);
} else {
return G__19637;
}
})();
return (new odoyle.rules.Token(cljs.core.cst$kw$fact.cljs$core$IFn$_invoke$arity$1(G__19621),cljs.core.cst$kw$kind.cljs$core$IFn$_invoke$arity$1(G__19621),cljs.core.cst$kw$old_DASH_fact.cljs$core$IFn$_invoke$arity$1(G__19621),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.Binding = (function (field,sym,key,__meta,__extmap,__hash){
this.field = field;
this.sym = sym;
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.Binding.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.Binding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19640,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19644 = k19640;
var G__19644__$1 = (((G__19644 instanceof cljs.core.Keyword))?G__19644.fqn:null);
switch (G__19644__$1) {
case "field":
return self__.field;

break;
case "sym":
return self__.sym;

break;
case "key":
return self__.key;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19640,else__4383__auto__);

}
}));

(odoyle.rules.Binding.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19645){
var vec__19646 = p__19645;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19646,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19646,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.Binding.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.Binding{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$field,self__.field],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sym,self__.sym],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key,self__.key],null))], null),self__.__extmap));
}));

(odoyle.rules.Binding.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19639){
var self__ = this;
var G__19639__$1 = this;
return (new cljs.core.RecordIter((0),G__19639__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$field,cljs.core.cst$kw$sym,cljs.core.cst$kw$key], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(odoyle.rules.Binding.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.Binding.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.Binding(self__.field,self__.sym,self__.key,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Binding.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(odoyle.rules.Binding.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__19649 = (function (coll__4377__auto__){
return (-364025076 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19649(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Binding.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19641,other19642){
var self__ = this;
var this19641__$1 = this;
return (((!((other19642 == null)))) && ((this19641__$1.constructor === other19642.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19641__$1.field,other19642.field)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19641__$1.sym,other19642.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19641__$1.key,other19642.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19641__$1.__extmap,other19642.__extmap)));
}));

(odoyle.rules.Binding.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,null,cljs.core.cst$kw$field,null,cljs.core.cst$kw$sym,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.Binding(self__.field,self__.sym,self__.key,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.Binding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19639){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19650 = cljs.core.keyword_identical_QMARK_;
var expr__19651 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19653 = cljs.core.cst$kw$field;
var G__19654 = expr__19651;
return (pred__19650.cljs$core$IFn$_invoke$arity$2 ? pred__19650.cljs$core$IFn$_invoke$arity$2(G__19653,G__19654) : pred__19650.call(null,G__19653,G__19654));
})())){
return (new odoyle.rules.Binding(G__19639,self__.sym,self__.key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19655 = cljs.core.cst$kw$sym;
var G__19656 = expr__19651;
return (pred__19650.cljs$core$IFn$_invoke$arity$2 ? pred__19650.cljs$core$IFn$_invoke$arity$2(G__19655,G__19656) : pred__19650.call(null,G__19655,G__19656));
})())){
return (new odoyle.rules.Binding(self__.field,G__19639,self__.key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19657 = cljs.core.cst$kw$key;
var G__19658 = expr__19651;
return (pred__19650.cljs$core$IFn$_invoke$arity$2 ? pred__19650.cljs$core$IFn$_invoke$arity$2(G__19657,G__19658) : pred__19650.call(null,G__19657,G__19658));
})())){
return (new odoyle.rules.Binding(self__.field,self__.sym,G__19639,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Binding(self__.field,self__.sym,self__.key,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19639),null));
}
}
}
}));

(odoyle.rules.Binding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$field,self__.field,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$sym,self__.sym,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$key,self__.key,null))], null),self__.__extmap));
}));

(odoyle.rules.Binding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19639){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Binding(self__.field,self__.sym,self__.key,G__19639,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Binding.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.Binding.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$field,cljs.core.cst$sym$sym,cljs.core.cst$sym$key], null);
}));

(odoyle.rules.Binding.cljs$lang$type = true);

(odoyle.rules.Binding.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/Binding",null,(1),null));
}));

(odoyle.rules.Binding.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"odoyle.rules/Binding");
}));

/**
 * Positional factory function for odoyle.rules/Binding.
 */
odoyle.rules.__GT_Binding = (function odoyle$rules$__GT_Binding(field,sym,key){
return (new odoyle.rules.Binding(field,sym,key,null,null,null));
});

/**
 * Factory function for odoyle.rules/Binding, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_Binding = (function odoyle$rules$map__GT_Binding(G__19643){
var extmap__4419__auto__ = (function (){var G__19659 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19643,cljs.core.cst$kw$field,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sym,cljs.core.cst$kw$key], 0));
if(cljs.core.record_QMARK_(G__19643)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19659);
} else {
return G__19659;
}
})();
return (new odoyle.rules.Binding(cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(G__19643),cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(G__19643),cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(G__19643),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.Match = (function (vars,enabled,__meta,__extmap,__hash){
this.vars = vars;
this.enabled = enabled;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19662,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19666 = k19662;
var G__19666__$1 = (((G__19666 instanceof cljs.core.Keyword))?G__19666.fqn:null);
switch (G__19666__$1) {
case "vars":
return self__.vars;

break;
case "enabled":
return self__.enabled;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19662,else__4383__auto__);

}
}));

(odoyle.rules.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19667){
var vec__19668 = p__19667;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19668,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19668,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.Match{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$enabled,self__.enabled],null))], null),self__.__extmap));
}));

(odoyle.rules.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19661){
var self__ = this;
var G__19661__$1 = this;
return (new cljs.core.RecordIter((0),G__19661__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vars,cljs.core.cst$kw$enabled], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(odoyle.rules.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.Match(self__.vars,self__.enabled,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(odoyle.rules.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__19671 = (function (coll__4377__auto__){
return (1974248823 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19671(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19663,other19664){
var self__ = this;
var this19663__$1 = this;
return (((!((other19664 == null)))) && ((this19663__$1.constructor === other19664.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19663__$1.vars,other19664.vars)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19663__$1.enabled,other19664.enabled)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19663__$1.__extmap,other19664.__extmap)));
}));

(odoyle.rules.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$enabled,null,cljs.core.cst$kw$vars,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.Match(self__.vars,self__.enabled,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19661){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19672 = cljs.core.keyword_identical_QMARK_;
var expr__19673 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19675 = cljs.core.cst$kw$vars;
var G__19676 = expr__19673;
return (pred__19672.cljs$core$IFn$_invoke$arity$2 ? pred__19672.cljs$core$IFn$_invoke$arity$2(G__19675,G__19676) : pred__19672.call(null,G__19675,G__19676));
})())){
return (new odoyle.rules.Match(G__19661,self__.enabled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19677 = cljs.core.cst$kw$enabled;
var G__19678 = expr__19673;
return (pred__19672.cljs$core$IFn$_invoke$arity$2 ? pred__19672.cljs$core$IFn$_invoke$arity$2(G__19677,G__19678) : pred__19672.call(null,G__19677,G__19678));
})())){
return (new odoyle.rules.Match(self__.vars,G__19661,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Match(self__.vars,self__.enabled,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19661),null));
}
}
}));

(odoyle.rules.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$vars,self__.vars,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$enabled,self__.enabled,null))], null),self__.__extmap));
}));

(odoyle.rules.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19661){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Match(self__.vars,self__.enabled,G__19661,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vars,cljs.core.cst$sym$enabled], null);
}));

(odoyle.rules.Match.cljs$lang$type = true);

(odoyle.rules.Match.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/Match",null,(1),null));
}));

(odoyle.rules.Match.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"odoyle.rules/Match");
}));

/**
 * Positional factory function for odoyle.rules/Match.
 */
odoyle.rules.__GT_Match = (function odoyle$rules$__GT_Match(vars,enabled){
return (new odoyle.rules.Match(vars,enabled,null,null,null));
});

/**
 * Factory function for odoyle.rules/Match, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_Match = (function odoyle$rules$map__GT_Match(G__19665){
var extmap__4419__auto__ = (function (){var G__19679 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19665,cljs.core.cst$kw$vars,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$enabled], 0));
if(cljs.core.record_QMARK_(G__19665)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19679);
} else {
return G__19679;
}
})();
return (new odoyle.rules.Match(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(G__19665),cljs.core.cst$kw$enabled.cljs$core$IFn$_invoke$arity$1(G__19665),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.AlphaNode = (function (path,test_field,test_value,children,successors,facts,__meta,__extmap,__hash){
this.path = path;
this.test_field = test_field;
this.test_value = test_value;
this.children = children;
this.successors = successors;
this.facts = facts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.AlphaNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19682,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19686 = k19682;
var G__19686__$1 = (((G__19686 instanceof cljs.core.Keyword))?G__19686.fqn:null);
switch (G__19686__$1) {
case "path":
return self__.path;

break;
case "test-field":
return self__.test_field;

break;
case "test-value":
return self__.test_value;

break;
case "children":
return self__.children;

break;
case "successors":
return self__.successors;

break;
case "facts":
return self__.facts;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19682,else__4383__auto__);

}
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19687){
var vec__19688 = p__19687;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19688,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19688,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.AlphaNode{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$test_DASH_field,self__.test_field],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$test_DASH_value,self__.test_value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$children,self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$successors,self__.successors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$facts,self__.facts],null))], null),self__.__extmap));
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19681){
var self__ = this;
var G__19681__$1 = this;
return (new cljs.core.RecordIter((0),G__19681__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$children,cljs.core.cst$kw$successors,cljs.core.cst$kw$facts], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,self__.children,self__.successors,self__.facts,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__19691 = (function (coll__4377__auto__){
return (-812066344 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19691(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19683,other19684){
var self__ = this;
var this19683__$1 = this;
return (((!((other19684 == null)))) && ((this19683__$1.constructor === other19684.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19683__$1.path,other19684.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19683__$1.test_field,other19684.test_field)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19683__$1.test_value,other19684.test_value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19683__$1.children,other19684.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19683__$1.successors,other19684.successors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19683__$1.facts,other19684.facts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19683__$1.__extmap,other19684.__extmap)));
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_value,null,cljs.core.cst$kw$children,null,cljs.core.cst$kw$successors,null,cljs.core.cst$kw$facts,null,cljs.core.cst$kw$test_DASH_field,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,self__.children,self__.successors,self__.facts,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19681){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19692 = cljs.core.keyword_identical_QMARK_;
var expr__19693 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19695 = cljs.core.cst$kw$path;
var G__19696 = expr__19693;
return (pred__19692.cljs$core$IFn$_invoke$arity$2 ? pred__19692.cljs$core$IFn$_invoke$arity$2(G__19695,G__19696) : pred__19692.call(null,G__19695,G__19696));
})())){
return (new odoyle.rules.AlphaNode(G__19681,self__.test_field,self__.test_value,self__.children,self__.successors,self__.facts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19697 = cljs.core.cst$kw$test_DASH_field;
var G__19698 = expr__19693;
return (pred__19692.cljs$core$IFn$_invoke$arity$2 ? pred__19692.cljs$core$IFn$_invoke$arity$2(G__19697,G__19698) : pred__19692.call(null,G__19697,G__19698));
})())){
return (new odoyle.rules.AlphaNode(self__.path,G__19681,self__.test_value,self__.children,self__.successors,self__.facts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19699 = cljs.core.cst$kw$test_DASH_value;
var G__19700 = expr__19693;
return (pred__19692.cljs$core$IFn$_invoke$arity$2 ? pred__19692.cljs$core$IFn$_invoke$arity$2(G__19699,G__19700) : pred__19692.call(null,G__19699,G__19700));
})())){
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,G__19681,self__.children,self__.successors,self__.facts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19701 = cljs.core.cst$kw$children;
var G__19702 = expr__19693;
return (pred__19692.cljs$core$IFn$_invoke$arity$2 ? pred__19692.cljs$core$IFn$_invoke$arity$2(G__19701,G__19702) : pred__19692.call(null,G__19701,G__19702));
})())){
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,G__19681,self__.successors,self__.facts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19703 = cljs.core.cst$kw$successors;
var G__19704 = expr__19693;
return (pred__19692.cljs$core$IFn$_invoke$arity$2 ? pred__19692.cljs$core$IFn$_invoke$arity$2(G__19703,G__19704) : pred__19692.call(null,G__19703,G__19704));
})())){
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,self__.children,G__19681,self__.facts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19705 = cljs.core.cst$kw$facts;
var G__19706 = expr__19693;
return (pred__19692.cljs$core$IFn$_invoke$arity$2 ? pred__19692.cljs$core$IFn$_invoke$arity$2(G__19705,G__19706) : pred__19692.call(null,G__19705,G__19706));
})())){
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,self__.children,self__.successors,G__19681,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,self__.children,self__.successors,self__.facts,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19681),null));
}
}
}
}
}
}
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$path,self__.path,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$test_DASH_field,self__.test_field,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$test_DASH_value,self__.test_value,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$children,self__.children,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$successors,self__.successors,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$facts,self__.facts,null))], null),self__.__extmap));
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19681){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,self__.children,self__.successors,self__.facts,G__19681,self__.__extmap,self__.__hash));
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.AlphaNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$test_DASH_field,cljs.core.cst$sym$test_DASH_value,cljs.core.cst$sym$children,cljs.core.cst$sym$successors,cljs.core.cst$sym$facts], null);
}));

(odoyle.rules.AlphaNode.cljs$lang$type = true);

(odoyle.rules.AlphaNode.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/AlphaNode",null,(1),null));
}));

(odoyle.rules.AlphaNode.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"odoyle.rules/AlphaNode");
}));

/**
 * Positional factory function for odoyle.rules/AlphaNode.
 */
odoyle.rules.__GT_AlphaNode = (function odoyle$rules$__GT_AlphaNode(path,test_field,test_value,children,successors,facts){
return (new odoyle.rules.AlphaNode(path,test_field,test_value,children,successors,facts,null,null,null));
});

/**
 * Factory function for odoyle.rules/AlphaNode, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_AlphaNode = (function odoyle$rules$map__GT_AlphaNode(G__19685){
var extmap__4419__auto__ = (function (){var G__19707 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19685,cljs.core.cst$kw$path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$children,cljs.core.cst$kw$successors,cljs.core.cst$kw$facts], 0));
if(cljs.core.record_QMARK_(G__19685)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19707);
} else {
return G__19707;
}
})();
return (new odoyle.rules.AlphaNode(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__19685),cljs.core.cst$kw$test_DASH_field.cljs$core$IFn$_invoke$arity$1(G__19685),cljs.core.cst$kw$test_DASH_value.cljs$core$IFn$_invoke$arity$1(G__19685),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(G__19685),cljs.core.cst$kw$successors.cljs$core$IFn$_invoke$arity$1(G__19685),cljs.core.cst$kw$facts.cljs$core$IFn$_invoke$arity$1(G__19685),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.MemoryNode = (function (id,parent_id,child_id,leaf_node_id,condition,matches,when_fn,then_fn,then_finally_fn,trigger,__meta,__extmap,__hash){
this.id = id;
this.parent_id = parent_id;
this.child_id = child_id;
this.leaf_node_id = leaf_node_id;
this.condition = condition;
this.matches = matches;
this.when_fn = when_fn;
this.then_fn = then_fn;
this.then_finally_fn = then_finally_fn;
this.trigger = trigger;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.MemoryNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19710,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19714 = k19710;
var G__19714__$1 = (((G__19714 instanceof cljs.core.Keyword))?G__19714.fqn:null);
switch (G__19714__$1) {
case "id":
return self__.id;

break;
case "parent-id":
return self__.parent_id;

break;
case "child-id":
return self__.child_id;

break;
case "leaf-node-id":
return self__.leaf_node_id;

break;
case "condition":
return self__.condition;

break;
case "matches":
return self__.matches;

break;
case "when-fn":
return self__.when_fn;

break;
case "then-fn":
return self__.then_fn;

break;
case "then-finally-fn":
return self__.then_finally_fn;

break;
case "trigger":
return self__.trigger;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19710,else__4383__auto__);

}
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19715){
var vec__19716 = p__19715;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19716,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19716,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.MemoryNode{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id,self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent_DASH_id,self__.parent_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$child_DASH_id,self__.child_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$leaf_DASH_node_DASH_id,self__.leaf_node_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$condition,self__.condition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$matches,self__.matches],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$when_DASH_fn,self__.when_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$then_DASH_fn,self__.then_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$then_DASH_finally_DASH_fn,self__.then_finally_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trigger,self__.trigger],null))], null),self__.__extmap));
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19709){
var self__ = this;
var G__19709__$1 = this;
return (new cljs.core.RecordIter((0),G__19709__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$parent_DASH_id,cljs.core.cst$kw$child_DASH_id,cljs.core.cst$kw$leaf_DASH_node_DASH_id,cljs.core.cst$kw$condition,cljs.core.cst$kw$matches,cljs.core.cst$kw$when_DASH_fn,cljs.core.cst$kw$then_DASH_fn,cljs.core.cst$kw$then_DASH_finally_DASH_fn,cljs.core.cst$kw$trigger], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__19719 = (function (coll__4377__auto__){
return (-704209569 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19719(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19711,other19712){
var self__ = this;
var this19711__$1 = this;
return (((!((other19712 == null)))) && ((this19711__$1.constructor === other19712.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19711__$1.id,other19712.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19711__$1.parent_id,other19712.parent_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19711__$1.child_id,other19712.child_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19711__$1.leaf_node_id,other19712.leaf_node_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19711__$1.condition,other19712.condition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19711__$1.matches,other19712.matches)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19711__$1.when_fn,other19712.when_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19711__$1.then_fn,other19712.then_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19711__$1.then_finally_fn,other19712.then_finally_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19711__$1.trigger,other19712.trigger)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19711__$1.__extmap,other19712.__extmap)));
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$leaf_DASH_node_DASH_id,null,cljs.core.cst$kw$matches,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$condition,null,cljs.core.cst$kw$when_DASH_fn,null,cljs.core.cst$kw$parent_DASH_id,null,cljs.core.cst$kw$then_DASH_finally_DASH_fn,null,cljs.core.cst$kw$then_DASH_fn,null,cljs.core.cst$kw$trigger,null,cljs.core.cst$kw$child_DASH_id,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19709){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19720 = cljs.core.keyword_identical_QMARK_;
var expr__19721 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19723 = cljs.core.cst$kw$id;
var G__19724 = expr__19721;
return (pred__19720.cljs$core$IFn$_invoke$arity$2 ? pred__19720.cljs$core$IFn$_invoke$arity$2(G__19723,G__19724) : pred__19720.call(null,G__19723,G__19724));
})())){
return (new odoyle.rules.MemoryNode(G__19709,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19725 = cljs.core.cst$kw$parent_DASH_id;
var G__19726 = expr__19721;
return (pred__19720.cljs$core$IFn$_invoke$arity$2 ? pred__19720.cljs$core$IFn$_invoke$arity$2(G__19725,G__19726) : pred__19720.call(null,G__19725,G__19726));
})())){
return (new odoyle.rules.MemoryNode(self__.id,G__19709,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19727 = cljs.core.cst$kw$child_DASH_id;
var G__19728 = expr__19721;
return (pred__19720.cljs$core$IFn$_invoke$arity$2 ? pred__19720.cljs$core$IFn$_invoke$arity$2(G__19727,G__19728) : pred__19720.call(null,G__19727,G__19728));
})())){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,G__19709,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19729 = cljs.core.cst$kw$leaf_DASH_node_DASH_id;
var G__19730 = expr__19721;
return (pred__19720.cljs$core$IFn$_invoke$arity$2 ? pred__19720.cljs$core$IFn$_invoke$arity$2(G__19729,G__19730) : pred__19720.call(null,G__19729,G__19730));
})())){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,G__19709,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19731 = cljs.core.cst$kw$condition;
var G__19732 = expr__19721;
return (pred__19720.cljs$core$IFn$_invoke$arity$2 ? pred__19720.cljs$core$IFn$_invoke$arity$2(G__19731,G__19732) : pred__19720.call(null,G__19731,G__19732));
})())){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,G__19709,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19733 = cljs.core.cst$kw$matches;
var G__19734 = expr__19721;
return (pred__19720.cljs$core$IFn$_invoke$arity$2 ? pred__19720.cljs$core$IFn$_invoke$arity$2(G__19733,G__19734) : pred__19720.call(null,G__19733,G__19734));
})())){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,G__19709,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19735 = cljs.core.cst$kw$when_DASH_fn;
var G__19736 = expr__19721;
return (pred__19720.cljs$core$IFn$_invoke$arity$2 ? pred__19720.cljs$core$IFn$_invoke$arity$2(G__19735,G__19736) : pred__19720.call(null,G__19735,G__19736));
})())){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,G__19709,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19737 = cljs.core.cst$kw$then_DASH_fn;
var G__19738 = expr__19721;
return (pred__19720.cljs$core$IFn$_invoke$arity$2 ? pred__19720.cljs$core$IFn$_invoke$arity$2(G__19737,G__19738) : pred__19720.call(null,G__19737,G__19738));
})())){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,G__19709,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19739 = cljs.core.cst$kw$then_DASH_finally_DASH_fn;
var G__19740 = expr__19721;
return (pred__19720.cljs$core$IFn$_invoke$arity$2 ? pred__19720.cljs$core$IFn$_invoke$arity$2(G__19739,G__19740) : pred__19720.call(null,G__19739,G__19740));
})())){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,G__19709,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19741 = cljs.core.cst$kw$trigger;
var G__19742 = expr__19721;
return (pred__19720.cljs$core$IFn$_invoke$arity$2 ? pred__19720.cljs$core$IFn$_invoke$arity$2(G__19741,G__19742) : pred__19720.call(null,G__19741,G__19742));
})())){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,G__19709,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19709),null));
}
}
}
}
}
}
}
}
}
}
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$id,self__.id,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$parent_DASH_id,self__.parent_id,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$child_DASH_id,self__.child_id,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$leaf_DASH_node_DASH_id,self__.leaf_node_id,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$condition,self__.condition,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$matches,self__.matches,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$when_DASH_fn,self__.when_fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$then_DASH_fn,self__.then_fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$then_DASH_finally_DASH_fn,self__.then_finally_fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$trigger,self__.trigger,null))], null),self__.__extmap));
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19709){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,G__19709,self__.__extmap,self__.__hash));
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.MemoryNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$id,cljs.core.cst$sym$parent_DASH_id,cljs.core.cst$sym$child_DASH_id,cljs.core.cst$sym$leaf_DASH_node_DASH_id,cljs.core.cst$sym$condition,cljs.core.cst$sym$matches,cljs.core.cst$sym$when_DASH_fn,cljs.core.cst$sym$then_DASH_fn,cljs.core.cst$sym$then_DASH_finally_DASH_fn,cljs.core.cst$sym$trigger], null);
}));

(odoyle.rules.MemoryNode.cljs$lang$type = true);

(odoyle.rules.MemoryNode.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/MemoryNode",null,(1),null));
}));

(odoyle.rules.MemoryNode.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"odoyle.rules/MemoryNode");
}));

/**
 * Positional factory function for odoyle.rules/MemoryNode.
 */
odoyle.rules.__GT_MemoryNode = (function odoyle$rules$__GT_MemoryNode(id,parent_id,child_id,leaf_node_id,condition,matches,when_fn,then_fn,then_finally_fn,trigger){
return (new odoyle.rules.MemoryNode(id,parent_id,child_id,leaf_node_id,condition,matches,when_fn,then_fn,then_finally_fn,trigger,null,null,null));
});

/**
 * Factory function for odoyle.rules/MemoryNode, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_MemoryNode = (function odoyle$rules$map__GT_MemoryNode(G__19713){
var extmap__4419__auto__ = (function (){var G__19743 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19713,cljs.core.cst$kw$id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parent_DASH_id,cljs.core.cst$kw$child_DASH_id,cljs.core.cst$kw$leaf_DASH_node_DASH_id,cljs.core.cst$kw$condition,cljs.core.cst$kw$matches,cljs.core.cst$kw$when_DASH_fn,cljs.core.cst$kw$then_DASH_fn,cljs.core.cst$kw$then_DASH_finally_DASH_fn,cljs.core.cst$kw$trigger], 0));
if(cljs.core.record_QMARK_(G__19713)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19743);
} else {
return G__19743;
}
})();
return (new odoyle.rules.MemoryNode(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(G__19713),cljs.core.cst$kw$parent_DASH_id.cljs$core$IFn$_invoke$arity$1(G__19713),cljs.core.cst$kw$child_DASH_id.cljs$core$IFn$_invoke$arity$1(G__19713),cljs.core.cst$kw$leaf_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(G__19713),cljs.core.cst$kw$condition.cljs$core$IFn$_invoke$arity$1(G__19713),cljs.core.cst$kw$matches.cljs$core$IFn$_invoke$arity$1(G__19713),cljs.core.cst$kw$when_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__19713),cljs.core.cst$kw$then_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__19713),cljs.core.cst$kw$then_DASH_finally_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__19713),cljs.core.cst$kw$trigger.cljs$core$IFn$_invoke$arity$1(G__19713),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.JoinNode = (function (id,parent_id,child_id,alpha_node_path,condition,id_key,old_id_attrs,disable_fast_updates,__meta,__extmap,__hash){
this.id = id;
this.parent_id = parent_id;
this.child_id = child_id;
this.alpha_node_path = alpha_node_path;
this.condition = condition;
this.id_key = id_key;
this.old_id_attrs = old_id_attrs;
this.disable_fast_updates = disable_fast_updates;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.JoinNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.JoinNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19746,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19750 = k19746;
var G__19750__$1 = (((G__19750 instanceof cljs.core.Keyword))?G__19750.fqn:null);
switch (G__19750__$1) {
case "id":
return self__.id;

break;
case "parent-id":
return self__.parent_id;

break;
case "child-id":
return self__.child_id;

break;
case "alpha-node-path":
return self__.alpha_node_path;

break;
case "condition":
return self__.condition;

break;
case "id-key":
return self__.id_key;

break;
case "old-id-attrs":
return self__.old_id_attrs;

break;
case "disable-fast-updates":
return self__.disable_fast_updates;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19746,else__4383__auto__);

}
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19751){
var vec__19752 = p__19751;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19752,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19752,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.JoinNode{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id,self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent_DASH_id,self__.parent_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$child_DASH_id,self__.child_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$alpha_DASH_node_DASH_path,self__.alpha_node_path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$condition,self__.condition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id_DASH_key,self__.id_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$old_DASH_id_DASH_attrs,self__.old_id_attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$disable_DASH_fast_DASH_updates,self__.disable_fast_updates],null))], null),self__.__extmap));
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19745){
var self__ = this;
var G__19745__$1 = this;
return (new cljs.core.RecordIter((0),G__19745__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$parent_DASH_id,cljs.core.cst$kw$child_DASH_id,cljs.core.cst$kw$alpha_DASH_node_DASH_path,cljs.core.cst$kw$condition,cljs.core.cst$kw$id_DASH_key,cljs.core.cst$kw$old_DASH_id_DASH_attrs,cljs.core.cst$kw$disable_DASH_fast_DASH_updates], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.JoinNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.JoinNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__19755 = (function (coll__4377__auto__){
return (-1611988792 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19755(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19747,other19748){
var self__ = this;
var this19747__$1 = this;
return (((!((other19748 == null)))) && ((this19747__$1.constructor === other19748.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19747__$1.id,other19748.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19747__$1.parent_id,other19748.parent_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19747__$1.child_id,other19748.child_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19747__$1.alpha_node_path,other19748.alpha_node_path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19747__$1.condition,other19748.condition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19747__$1.id_key,other19748.id_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19747__$1.old_id_attrs,other19748.old_id_attrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19747__$1.disable_fast_updates,other19748.disable_fast_updates)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19747__$1.__extmap,other19748.__extmap)));
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$id_DASH_key,null,cljs.core.cst$kw$old_DASH_id_DASH_attrs,null,cljs.core.cst$kw$disable_DASH_fast_DASH_updates,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$condition,null,cljs.core.cst$kw$parent_DASH_id,null,cljs.core.cst$kw$alpha_DASH_node_DASH_path,null,cljs.core.cst$kw$child_DASH_id,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19745){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19756 = cljs.core.keyword_identical_QMARK_;
var expr__19757 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19759 = cljs.core.cst$kw$id;
var G__19760 = expr__19757;
return (pred__19756.cljs$core$IFn$_invoke$arity$2 ? pred__19756.cljs$core$IFn$_invoke$arity$2(G__19759,G__19760) : pred__19756.call(null,G__19759,G__19760));
})())){
return (new odoyle.rules.JoinNode(G__19745,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19761 = cljs.core.cst$kw$parent_DASH_id;
var G__19762 = expr__19757;
return (pred__19756.cljs$core$IFn$_invoke$arity$2 ? pred__19756.cljs$core$IFn$_invoke$arity$2(G__19761,G__19762) : pred__19756.call(null,G__19761,G__19762));
})())){
return (new odoyle.rules.JoinNode(self__.id,G__19745,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19763 = cljs.core.cst$kw$child_DASH_id;
var G__19764 = expr__19757;
return (pred__19756.cljs$core$IFn$_invoke$arity$2 ? pred__19756.cljs$core$IFn$_invoke$arity$2(G__19763,G__19764) : pred__19756.call(null,G__19763,G__19764));
})())){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,G__19745,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19765 = cljs.core.cst$kw$alpha_DASH_node_DASH_path;
var G__19766 = expr__19757;
return (pred__19756.cljs$core$IFn$_invoke$arity$2 ? pred__19756.cljs$core$IFn$_invoke$arity$2(G__19765,G__19766) : pred__19756.call(null,G__19765,G__19766));
})())){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,G__19745,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19767 = cljs.core.cst$kw$condition;
var G__19768 = expr__19757;
return (pred__19756.cljs$core$IFn$_invoke$arity$2 ? pred__19756.cljs$core$IFn$_invoke$arity$2(G__19767,G__19768) : pred__19756.call(null,G__19767,G__19768));
})())){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,G__19745,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19769 = cljs.core.cst$kw$id_DASH_key;
var G__19770 = expr__19757;
return (pred__19756.cljs$core$IFn$_invoke$arity$2 ? pred__19756.cljs$core$IFn$_invoke$arity$2(G__19769,G__19770) : pred__19756.call(null,G__19769,G__19770));
})())){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,G__19745,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19771 = cljs.core.cst$kw$old_DASH_id_DASH_attrs;
var G__19772 = expr__19757;
return (pred__19756.cljs$core$IFn$_invoke$arity$2 ? pred__19756.cljs$core$IFn$_invoke$arity$2(G__19771,G__19772) : pred__19756.call(null,G__19771,G__19772));
})())){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,G__19745,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19773 = cljs.core.cst$kw$disable_DASH_fast_DASH_updates;
var G__19774 = expr__19757;
return (pred__19756.cljs$core$IFn$_invoke$arity$2 ? pred__19756.cljs$core$IFn$_invoke$arity$2(G__19773,G__19774) : pred__19756.call(null,G__19773,G__19774));
})())){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,G__19745,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19745),null));
}
}
}
}
}
}
}
}
}));

(odoyle.rules.JoinNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$id,self__.id,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$parent_DASH_id,self__.parent_id,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$child_DASH_id,self__.child_id,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$alpha_DASH_node_DASH_path,self__.alpha_node_path,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$condition,self__.condition,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$id_DASH_key,self__.id_key,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$old_DASH_id_DASH_attrs,self__.old_id_attrs,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$disable_DASH_fast_DASH_updates,self__.disable_fast_updates,null))], null),self__.__extmap));
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19745){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,G__19745,self__.__extmap,self__.__hash));
}));

(odoyle.rules.JoinNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.JoinNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$id,cljs.core.cst$sym$parent_DASH_id,cljs.core.cst$sym$child_DASH_id,cljs.core.cst$sym$alpha_DASH_node_DASH_path,cljs.core.cst$sym$condition,cljs.core.cst$sym$id_DASH_key,cljs.core.cst$sym$old_DASH_id_DASH_attrs,cljs.core.cst$sym$disable_DASH_fast_DASH_updates], null);
}));

(odoyle.rules.JoinNode.cljs$lang$type = true);

(odoyle.rules.JoinNode.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/JoinNode",null,(1),null));
}));

(odoyle.rules.JoinNode.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"odoyle.rules/JoinNode");
}));

/**
 * Positional factory function for odoyle.rules/JoinNode.
 */
odoyle.rules.__GT_JoinNode = (function odoyle$rules$__GT_JoinNode(id,parent_id,child_id,alpha_node_path,condition,id_key,old_id_attrs,disable_fast_updates){
return (new odoyle.rules.JoinNode(id,parent_id,child_id,alpha_node_path,condition,id_key,old_id_attrs,disable_fast_updates,null,null,null));
});

/**
 * Factory function for odoyle.rules/JoinNode, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_JoinNode = (function odoyle$rules$map__GT_JoinNode(G__19749){
var extmap__4419__auto__ = (function (){var G__19775 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19749,cljs.core.cst$kw$id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parent_DASH_id,cljs.core.cst$kw$child_DASH_id,cljs.core.cst$kw$alpha_DASH_node_DASH_path,cljs.core.cst$kw$condition,cljs.core.cst$kw$id_DASH_key,cljs.core.cst$kw$old_DASH_id_DASH_attrs,cljs.core.cst$kw$disable_DASH_fast_DASH_updates], 0));
if(cljs.core.record_QMARK_(G__19749)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19775);
} else {
return G__19775;
}
})();
return (new odoyle.rules.JoinNode(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(G__19749),cljs.core.cst$kw$parent_DASH_id.cljs$core$IFn$_invoke$arity$1(G__19749),cljs.core.cst$kw$child_DASH_id.cljs$core$IFn$_invoke$arity$1(G__19749),cljs.core.cst$kw$alpha_DASH_node_DASH_path.cljs$core$IFn$_invoke$arity$1(G__19749),cljs.core.cst$kw$condition.cljs$core$IFn$_invoke$arity$1(G__19749),cljs.core.cst$kw$id_DASH_key.cljs$core$IFn$_invoke$arity$1(G__19749),cljs.core.cst$kw$old_DASH_id_DASH_attrs.cljs$core$IFn$_invoke$arity$1(G__19749),cljs.core.cst$kw$disable_DASH_fast_DASH_updates.cljs$core$IFn$_invoke$arity$1(G__19749),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.Condition = (function (nodes,bindings,opts,__meta,__extmap,__hash){
this.nodes = nodes;
this.bindings = bindings;
this.opts = opts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.Condition.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.Condition.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19778,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19782 = k19778;
var G__19782__$1 = (((G__19782 instanceof cljs.core.Keyword))?G__19782.fqn:null);
switch (G__19782__$1) {
case "nodes":
return self__.nodes;

break;
case "bindings":
return self__.bindings;

break;
case "opts":
return self__.opts;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19778,else__4383__auto__);

}
}));

(odoyle.rules.Condition.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19783){
var vec__19784 = p__19783;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19784,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19784,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.Condition.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.Condition{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$nodes,self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$bindings,self__.bindings],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$opts,self__.opts],null))], null),self__.__extmap));
}));

(odoyle.rules.Condition.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19777){
var self__ = this;
var G__19777__$1 = this;
return (new cljs.core.RecordIter((0),G__19777__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodes,cljs.core.cst$kw$bindings,cljs.core.cst$kw$opts], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(odoyle.rules.Condition.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.Condition.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.Condition(self__.nodes,self__.bindings,self__.opts,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Condition.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(odoyle.rules.Condition.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__19787 = (function (coll__4377__auto__){
return (-49907947 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19787(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Condition.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19779,other19780){
var self__ = this;
var this19779__$1 = this;
return (((!((other19780 == null)))) && ((this19779__$1.constructor === other19780.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19779__$1.nodes,other19780.nodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19779__$1.bindings,other19780.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19779__$1.opts,other19780.opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19779__$1.__extmap,other19780.__extmap)));
}));

(odoyle.rules.Condition.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bindings,null,cljs.core.cst$kw$nodes,null,cljs.core.cst$kw$opts,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.Condition(self__.nodes,self__.bindings,self__.opts,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.Condition.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19777){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19788 = cljs.core.keyword_identical_QMARK_;
var expr__19789 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19791 = cljs.core.cst$kw$nodes;
var G__19792 = expr__19789;
return (pred__19788.cljs$core$IFn$_invoke$arity$2 ? pred__19788.cljs$core$IFn$_invoke$arity$2(G__19791,G__19792) : pred__19788.call(null,G__19791,G__19792));
})())){
return (new odoyle.rules.Condition(G__19777,self__.bindings,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19793 = cljs.core.cst$kw$bindings;
var G__19794 = expr__19789;
return (pred__19788.cljs$core$IFn$_invoke$arity$2 ? pred__19788.cljs$core$IFn$_invoke$arity$2(G__19793,G__19794) : pred__19788.call(null,G__19793,G__19794));
})())){
return (new odoyle.rules.Condition(self__.nodes,G__19777,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19795 = cljs.core.cst$kw$opts;
var G__19796 = expr__19789;
return (pred__19788.cljs$core$IFn$_invoke$arity$2 ? pred__19788.cljs$core$IFn$_invoke$arity$2(G__19795,G__19796) : pred__19788.call(null,G__19795,G__19796));
})())){
return (new odoyle.rules.Condition(self__.nodes,self__.bindings,G__19777,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Condition(self__.nodes,self__.bindings,self__.opts,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19777),null));
}
}
}
}));

(odoyle.rules.Condition.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$nodes,self__.nodes,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$bindings,self__.bindings,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$opts,self__.opts,null))], null),self__.__extmap));
}));

(odoyle.rules.Condition.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19777){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Condition(self__.nodes,self__.bindings,self__.opts,G__19777,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Condition.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.Condition.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nodes,cljs.core.cst$sym$bindings,cljs.core.cst$sym$opts], null);
}));

(odoyle.rules.Condition.cljs$lang$type = true);

(odoyle.rules.Condition.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/Condition",null,(1),null));
}));

(odoyle.rules.Condition.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"odoyle.rules/Condition");
}));

/**
 * Positional factory function for odoyle.rules/Condition.
 */
odoyle.rules.__GT_Condition = (function odoyle$rules$__GT_Condition(nodes,bindings,opts){
return (new odoyle.rules.Condition(nodes,bindings,opts,null,null,null));
});

/**
 * Factory function for odoyle.rules/Condition, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_Condition = (function odoyle$rules$map__GT_Condition(G__19781){
var extmap__4419__auto__ = (function (){var G__19797 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19781,cljs.core.cst$kw$nodes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bindings,cljs.core.cst$kw$opts], 0));
if(cljs.core.record_QMARK_(G__19781)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19797);
} else {
return G__19797;
}
})();
return (new odoyle.rules.Condition(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(G__19781),cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(G__19781),cljs.core.cst$kw$opts.cljs$core$IFn$_invoke$arity$1(G__19781),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.Rule = (function (name,conditions,when_fn,then_fn,then_finally_fn,__meta,__extmap,__hash){
this.name = name;
this.conditions = conditions;
this.when_fn = when_fn;
this.then_fn = then_fn;
this.then_finally_fn = then_finally_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19800,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19804 = k19800;
var G__19804__$1 = (((G__19804 instanceof cljs.core.Keyword))?G__19804.fqn:null);
switch (G__19804__$1) {
case "name":
return self__.name;

break;
case "conditions":
return self__.conditions;

break;
case "when-fn":
return self__.when_fn;

break;
case "then-fn":
return self__.then_fn;

break;
case "then-finally-fn":
return self__.then_finally_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19800,else__4383__auto__);

}
}));

(odoyle.rules.Rule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19805){
var vec__19806 = p__19805;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19806,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19806,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.Rule{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$conditions,self__.conditions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$when_DASH_fn,self__.when_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$then_DASH_fn,self__.then_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$then_DASH_finally_DASH_fn,self__.then_finally_fn],null))], null),self__.__extmap));
}));

(odoyle.rules.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19799){
var self__ = this;
var G__19799__$1 = this;
return (new cljs.core.RecordIter((0),G__19799__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$conditions,cljs.core.cst$kw$when_DASH_fn,cljs.core.cst$kw$then_DASH_fn,cljs.core.cst$kw$then_DASH_finally_DASH_fn], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(odoyle.rules.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.Rule(self__.name,self__.conditions,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(odoyle.rules.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__19809 = (function (coll__4377__auto__){
return (-1587276029 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19809(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19801,other19802){
var self__ = this;
var this19801__$1 = this;
return (((!((other19802 == null)))) && ((this19801__$1.constructor === other19802.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19801__$1.name,other19802.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19801__$1.conditions,other19802.conditions)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19801__$1.when_fn,other19802.when_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19801__$1.then_fn,other19802.then_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19801__$1.then_finally_fn,other19802.then_finally_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19801__$1.__extmap,other19802.__extmap)));
}));

(odoyle.rules.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$conditions,null,cljs.core.cst$kw$when_DASH_fn,null,cljs.core.cst$kw$then_DASH_finally_DASH_fn,null,cljs.core.cst$kw$then_DASH_fn,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.Rule(self__.name,self__.conditions,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19799){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19810 = cljs.core.keyword_identical_QMARK_;
var expr__19811 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19813 = cljs.core.cst$kw$name;
var G__19814 = expr__19811;
return (pred__19810.cljs$core$IFn$_invoke$arity$2 ? pred__19810.cljs$core$IFn$_invoke$arity$2(G__19813,G__19814) : pred__19810.call(null,G__19813,G__19814));
})())){
return (new odoyle.rules.Rule(G__19799,self__.conditions,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19815 = cljs.core.cst$kw$conditions;
var G__19816 = expr__19811;
return (pred__19810.cljs$core$IFn$_invoke$arity$2 ? pred__19810.cljs$core$IFn$_invoke$arity$2(G__19815,G__19816) : pred__19810.call(null,G__19815,G__19816));
})())){
return (new odoyle.rules.Rule(self__.name,G__19799,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19817 = cljs.core.cst$kw$when_DASH_fn;
var G__19818 = expr__19811;
return (pred__19810.cljs$core$IFn$_invoke$arity$2 ? pred__19810.cljs$core$IFn$_invoke$arity$2(G__19817,G__19818) : pred__19810.call(null,G__19817,G__19818));
})())){
return (new odoyle.rules.Rule(self__.name,self__.conditions,G__19799,self__.then_fn,self__.then_finally_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19819 = cljs.core.cst$kw$then_DASH_fn;
var G__19820 = expr__19811;
return (pred__19810.cljs$core$IFn$_invoke$arity$2 ? pred__19810.cljs$core$IFn$_invoke$arity$2(G__19819,G__19820) : pred__19810.call(null,G__19819,G__19820));
})())){
return (new odoyle.rules.Rule(self__.name,self__.conditions,self__.when_fn,G__19799,self__.then_finally_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19821 = cljs.core.cst$kw$then_DASH_finally_DASH_fn;
var G__19822 = expr__19811;
return (pred__19810.cljs$core$IFn$_invoke$arity$2 ? pred__19810.cljs$core$IFn$_invoke$arity$2(G__19821,G__19822) : pred__19810.call(null,G__19821,G__19822));
})())){
return (new odoyle.rules.Rule(self__.name,self__.conditions,self__.when_fn,self__.then_fn,G__19799,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Rule(self__.name,self__.conditions,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19799),null));
}
}
}
}
}
}));

(odoyle.rules.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$name,self__.name,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$conditions,self__.conditions,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$when_DASH_fn,self__.when_fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$then_DASH_fn,self__.then_fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$then_DASH_finally_DASH_fn,self__.then_finally_fn,null))], null),self__.__extmap));
}));

(odoyle.rules.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19799){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Rule(self__.name,self__.conditions,self__.when_fn,self__.then_fn,self__.then_finally_fn,G__19799,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$conditions,cljs.core.cst$sym$when_DASH_fn,cljs.core.cst$sym$then_DASH_fn,cljs.core.cst$sym$then_DASH_finally_DASH_fn], null);
}));

(odoyle.rules.Rule.cljs$lang$type = true);

(odoyle.rules.Rule.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/Rule",null,(1),null));
}));

(odoyle.rules.Rule.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"odoyle.rules/Rule");
}));

/**
 * Positional factory function for odoyle.rules/Rule.
 */
odoyle.rules.__GT_Rule = (function odoyle$rules$__GT_Rule(name,conditions,when_fn,then_fn,then_finally_fn){
return (new odoyle.rules.Rule(name,conditions,when_fn,then_fn,then_finally_fn,null,null,null));
});

/**
 * Factory function for odoyle.rules/Rule, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_Rule = (function odoyle$rules$map__GT_Rule(G__19803){
var extmap__4419__auto__ = (function (){var G__19823 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19803,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$conditions,cljs.core.cst$kw$when_DASH_fn,cljs.core.cst$kw$then_DASH_fn,cljs.core.cst$kw$then_DASH_finally_DASH_fn], 0));
if(cljs.core.record_QMARK_(G__19803)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19823);
} else {
return G__19823;
}
})();
return (new odoyle.rules.Rule(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__19803),cljs.core.cst$kw$conditions.cljs$core$IFn$_invoke$arity$1(G__19803),cljs.core.cst$kw$when_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__19803),cljs.core.cst$kw$then_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__19803),cljs.core.cst$kw$then_DASH_finally_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__19803),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
odoyle.rules.Session = (function (alpha_node,beta_nodes,last_id,rule_name__GT_node_id,node_id__GT_rule_name,id_attr_nodes,then_queue,then_finally_queue,__meta,__extmap,__hash){
this.alpha_node = alpha_node;
this.beta_nodes = beta_nodes;
this.last_id = last_id;
this.rule_name__GT_node_id = rule_name__GT_node_id;
this.node_id__GT_rule_name = node_id__GT_rule_name;
this.id_attr_nodes = id_attr_nodes;
this.then_queue = then_queue;
this.then_finally_queue = then_finally_queue;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(odoyle.rules.Session.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(odoyle.rules.Session.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19826,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19830 = k19826;
var G__19830__$1 = (((G__19830 instanceof cljs.core.Keyword))?G__19830.fqn:null);
switch (G__19830__$1) {
case "alpha-node":
return self__.alpha_node;

break;
case "beta-nodes":
return self__.beta_nodes;

break;
case "last-id":
return self__.last_id;

break;
case "rule-name->node-id":
return self__.rule_name__GT_node_id;

break;
case "node-id->rule-name":
return self__.node_id__GT_rule_name;

break;
case "id-attr-nodes":
return self__.id_attr_nodes;

break;
case "then-queue":
return self__.then_queue;

break;
case "then-finally-queue":
return self__.then_finally_queue;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19826,else__4383__auto__);

}
}));

(odoyle.rules.Session.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19831){
var vec__19832 = p__19831;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19832,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19832,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(odoyle.rules.Session.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#odoyle.rules.Session{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$alpha_DASH_node,self__.alpha_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$beta_DASH_nodes,self__.beta_nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$last_DASH_id,self__.last_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rule_DASH_name_DASH__GT_node_DASH_id,self__.rule_name__GT_node_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name,self__.node_id__GT_rule_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id_DASH_attr_DASH_nodes,self__.id_attr_nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$then_DASH_queue,self__.then_queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$then_DASH_finally_DASH_queue,self__.then_finally_queue],null))], null),self__.__extmap));
}));

(odoyle.rules.Session.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19825){
var self__ = this;
var G__19825__$1 = this;
return (new cljs.core.RecordIter((0),G__19825__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$alpha_DASH_node,cljs.core.cst$kw$beta_DASH_nodes,cljs.core.cst$kw$last_DASH_id,cljs.core.cst$kw$rule_DASH_name_DASH__GT_node_DASH_id,cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name,cljs.core.cst$kw$id_DASH_attr_DASH_nodes,cljs.core.cst$kw$then_DASH_queue,cljs.core.cst$kw$then_DASH_finally_DASH_queue], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(odoyle.rules.Session.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(odoyle.rules.Session.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Session.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(odoyle.rules.Session.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__19835 = (function (coll__4377__auto__){
return (-1132320134 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19835(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Session.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19827,other19828){
var self__ = this;
var this19827__$1 = this;
return (((!((other19828 == null)))) && ((this19827__$1.constructor === other19828.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19827__$1.alpha_node,other19828.alpha_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19827__$1.beta_nodes,other19828.beta_nodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19827__$1.last_id,other19828.last_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19827__$1.rule_name__GT_node_id,other19828.rule_name__GT_node_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19827__$1.node_id__GT_rule_name,other19828.node_id__GT_rule_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19827__$1.id_attr_nodes,other19828.id_attr_nodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19827__$1.then_queue,other19828.then_queue)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19827__$1.then_finally_queue,other19828.then_finally_queue)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19827__$1.__extmap,other19828.__extmap)));
}));

(odoyle.rules.Session.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$beta_DASH_nodes,null,cljs.core.cst$kw$id_DASH_attr_DASH_nodes,null,cljs.core.cst$kw$then_DASH_finally_DASH_queue,null,cljs.core.cst$kw$alpha_DASH_node,null,cljs.core.cst$kw$last_DASH_id,null,cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name,null,cljs.core.cst$kw$then_DASH_queue,null,cljs.core.cst$kw$rule_DASH_name_DASH__GT_node_DASH_id,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(odoyle.rules.Session.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19825){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19836 = cljs.core.keyword_identical_QMARK_;
var expr__19837 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19839 = cljs.core.cst$kw$alpha_DASH_node;
var G__19840 = expr__19837;
return (pred__19836.cljs$core$IFn$_invoke$arity$2 ? pred__19836.cljs$core$IFn$_invoke$arity$2(G__19839,G__19840) : pred__19836.call(null,G__19839,G__19840));
})())){
return (new odoyle.rules.Session(G__19825,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19841 = cljs.core.cst$kw$beta_DASH_nodes;
var G__19842 = expr__19837;
return (pred__19836.cljs$core$IFn$_invoke$arity$2 ? pred__19836.cljs$core$IFn$_invoke$arity$2(G__19841,G__19842) : pred__19836.call(null,G__19841,G__19842));
})())){
return (new odoyle.rules.Session(self__.alpha_node,G__19825,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19843 = cljs.core.cst$kw$last_DASH_id;
var G__19844 = expr__19837;
return (pred__19836.cljs$core$IFn$_invoke$arity$2 ? pred__19836.cljs$core$IFn$_invoke$arity$2(G__19843,G__19844) : pred__19836.call(null,G__19843,G__19844));
})())){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,G__19825,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19845 = cljs.core.cst$kw$rule_DASH_name_DASH__GT_node_DASH_id;
var G__19846 = expr__19837;
return (pred__19836.cljs$core$IFn$_invoke$arity$2 ? pred__19836.cljs$core$IFn$_invoke$arity$2(G__19845,G__19846) : pred__19836.call(null,G__19845,G__19846));
})())){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,G__19825,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19847 = cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name;
var G__19848 = expr__19837;
return (pred__19836.cljs$core$IFn$_invoke$arity$2 ? pred__19836.cljs$core$IFn$_invoke$arity$2(G__19847,G__19848) : pred__19836.call(null,G__19847,G__19848));
})())){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,G__19825,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19849 = cljs.core.cst$kw$id_DASH_attr_DASH_nodes;
var G__19850 = expr__19837;
return (pred__19836.cljs$core$IFn$_invoke$arity$2 ? pred__19836.cljs$core$IFn$_invoke$arity$2(G__19849,G__19850) : pred__19836.call(null,G__19849,G__19850));
})())){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,G__19825,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19851 = cljs.core.cst$kw$then_DASH_queue;
var G__19852 = expr__19837;
return (pred__19836.cljs$core$IFn$_invoke$arity$2 ? pred__19836.cljs$core$IFn$_invoke$arity$2(G__19851,G__19852) : pred__19836.call(null,G__19851,G__19852));
})())){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,G__19825,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19853 = cljs.core.cst$kw$then_DASH_finally_DASH_queue;
var G__19854 = expr__19837;
return (pred__19836.cljs$core$IFn$_invoke$arity$2 ? pred__19836.cljs$core$IFn$_invoke$arity$2(G__19853,G__19854) : pred__19836.call(null,G__19853,G__19854));
})())){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,G__19825,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19825),null));
}
}
}
}
}
}
}
}
}));

(odoyle.rules.Session.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$alpha_DASH_node,self__.alpha_node,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$beta_DASH_nodes,self__.beta_nodes,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$last_DASH_id,self__.last_id,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$rule_DASH_name_DASH__GT_node_DASH_id,self__.rule_name__GT_node_id,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name,self__.node_id__GT_rule_name,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$id_DASH_attr_DASH_nodes,self__.id_attr_nodes,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$then_DASH_queue,self__.then_queue,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$then_DASH_finally_DASH_queue,self__.then_finally_queue,null))], null),self__.__extmap));
}));

(odoyle.rules.Session.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19825){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,G__19825,self__.__extmap,self__.__hash));
}));

(odoyle.rules.Session.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(odoyle.rules.Session.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$alpha_DASH_node,cljs.core.cst$sym$beta_DASH_nodes,cljs.core.cst$sym$last_DASH_id,cljs.core.cst$sym$rule_DASH_name_DASH__GT_node_DASH_id,cljs.core.cst$sym$node_DASH_id_DASH__GT_rule_DASH_name,cljs.core.cst$sym$id_DASH_attr_DASH_nodes,cljs.core.cst$sym$then_DASH_queue,cljs.core.cst$sym$then_DASH_finally_DASH_queue], null);
}));

(odoyle.rules.Session.cljs$lang$type = true);

(odoyle.rules.Session.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"odoyle.rules/Session",null,(1),null));
}));

(odoyle.rules.Session.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"odoyle.rules/Session");
}));

/**
 * Positional factory function for odoyle.rules/Session.
 */
odoyle.rules.__GT_Session = (function odoyle$rules$__GT_Session(alpha_node,beta_nodes,last_id,rule_name__GT_node_id,node_id__GT_rule_name,id_attr_nodes,then_queue,then_finally_queue){
return (new odoyle.rules.Session(alpha_node,beta_nodes,last_id,rule_name__GT_node_id,node_id__GT_rule_name,id_attr_nodes,then_queue,then_finally_queue,null,null,null));
});

/**
 * Factory function for odoyle.rules/Session, taking a map of keywords to field values.
 */
odoyle.rules.map__GT_Session = (function odoyle$rules$map__GT_Session(G__19829){
var extmap__4419__auto__ = (function (){var G__19855 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19829,cljs.core.cst$kw$alpha_DASH_node,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$beta_DASH_nodes,cljs.core.cst$kw$last_DASH_id,cljs.core.cst$kw$rule_DASH_name_DASH__GT_node_DASH_id,cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name,cljs.core.cst$kw$id_DASH_attr_DASH_nodes,cljs.core.cst$kw$then_DASH_queue,cljs.core.cst$kw$then_DASH_finally_DASH_queue], 0));
if(cljs.core.record_QMARK_(G__19829)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19855);
} else {
return G__19855;
}
})();
return (new odoyle.rules.Session(cljs.core.cst$kw$alpha_DASH_node.cljs$core$IFn$_invoke$arity$1(G__19829),cljs.core.cst$kw$beta_DASH_nodes.cljs$core$IFn$_invoke$arity$1(G__19829),cljs.core.cst$kw$last_DASH_id.cljs$core$IFn$_invoke$arity$1(G__19829),cljs.core.cst$kw$rule_DASH_name_DASH__GT_node_DASH_id.cljs$core$IFn$_invoke$arity$1(G__19829),cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name.cljs$core$IFn$_invoke$arity$1(G__19829),cljs.core.cst$kw$id_DASH_attr_DASH_nodes.cljs$core$IFn$_invoke$arity$1(G__19829),cljs.core.cst$kw$then_DASH_queue.cljs$core$IFn$_invoke$arity$1(G__19829),cljs.core.cst$kw$then_DASH_finally_DASH_queue.cljs$core$IFn$_invoke$arity$1(G__19829),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

odoyle.rules.add_to_condition = (function odoyle$rules$add_to_condition(condition,field,p__19857){
var vec__19858 = p__19857;
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19858,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19858,(1),null);
var G__19861 = kind;
var G__19861__$1 = (((G__19861 instanceof cljs.core.Keyword))?G__19861.fqn:null);
switch (G__19861__$1) {
case "binding":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(condition,cljs.core.cst$kw$bindings,cljs.core.conj,odoyle.rules.__GT_Binding(field,(new cljs.core.List(null,cljs.core.cst$sym$quote,(new cljs.core.List(null,value,null,(1),null)),(2),null)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "value":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(condition,cljs.core.cst$kw$nodes,cljs.core.conj,odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,field,cljs.core.cst$kw$test_DASH_value,value,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19861__$1)].join('')));

}
});
odoyle.rules.__GT_condition = (function odoyle$rules$__GT_condition(p__19863){
var map__19864 = p__19863;
var map__19864__$1 = (((((!((map__19864 == null))))?(((((map__19864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19864):map__19864);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19864__$1,cljs.core.cst$kw$id);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19864__$1,cljs.core.cst$kw$attr);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19864__$1,cljs.core.cst$kw$value);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19864__$1,cljs.core.cst$kw$opts);
return odoyle.rules.add_to_condition(odoyle.rules.add_to_condition(odoyle.rules.add_to_condition(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bindings,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$nodes,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$opts,opts], null),cljs.core.cst$kw$id,id),cljs.core.cst$kw$attr,attr),cljs.core.cst$kw$value,value);
});
odoyle.rules.__GT_rule = (function odoyle$rules$__GT_rule(p__19866){
var vec__19867 = p__19866;
var rule_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19867,(0),null);
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19867,(1),null);
var map__19870 = rule;
var map__19870__$1 = (((((!((map__19870 == null))))?(((((map__19870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19870):map__19870);
var what_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19870__$1,cljs.core.cst$kw$what_DASH_block);
var when_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19870__$1,cljs.core.cst$kw$when_DASH_block);
var then_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19870__$1,cljs.core.cst$kw$then_DASH_block);
var then_finally_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19870__$1,cljs.core.cst$kw$then_DASH_finally_DASH_block);
var conditions = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.__GT_condition,cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(what_block));
var when_body = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(when_block);
var when_body__$1 = (((cljs.core.count(when_body) > (1)))?cljs.core.cons(cljs.core.cst$sym$and,when_body):cljs.core.first(when_body));
var then_body = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(then_block);
var then_finally_body = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(then_finally_block);
var syms = cljs.core.vec(cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.simple_symbol_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sym,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$bindings,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conditions], 0)))))));
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$rule_DASH_name,rule_name,cljs.core.cst$kw$fn_DASH_name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.namespace(rule_name),"-",cljs.core.name(rule_name)].join(''),".","-")),cljs.core.cst$kw$conditions,conditions,cljs.core.cst$kw$arg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,syms], null),cljs.core.cst$kw$when_DASH_body,when_body__$1,cljs.core.cst$kw$then_DASH_body,then_body,cljs.core.cst$kw$then_DASH_finally_DASH_body,then_finally_body], null);
});
odoyle.rules.add_alpha_node = (function odoyle$rules$add_alpha_node(node,new_nodes,_STAR_alpha_node_path){
var vec__19872 = new_nodes;
var seq__19873 = cljs.core.seq(vec__19872);
var first__19874 = cljs.core.first(seq__19873);
var seq__19873__$1 = cljs.core.next(seq__19873);
var new_node = first__19874;
var other_nodes = seq__19873__$1;
if(cljs.core.truth_(new_node)){
var temp__5733__auto__ = cljs.core.some((function (p__19875){
var vec__19876 = p__19875;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19876,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19876,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$test_DASH_value], null)),cljs.core.select_keys(new_node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$test_DASH_value], null)))){
return i;
} else {
return null;
}
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(node)));
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
cljs.core._vreset_BANG_(_STAR_alpha_node_path,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(_STAR_alpha_node_path),cljs.core.cst$kw$children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0)));

return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(node,cljs.core.cst$kw$children,cljs.core.update,i,odoyle.rules.add_alpha_node,other_nodes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_STAR_alpha_node_path], 0));
} else {
var path = cljs.core._vreset_BANG_(_STAR_alpha_node_path,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(_STAR_alpha_node_path),cljs.core.cst$kw$children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(node))], 0)));
var new_node__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_node,cljs.core.cst$kw$path,path);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,cljs.core.cst$kw$children,cljs.core.conj,(odoyle.rules.add_alpha_node.cljs$core$IFn$_invoke$arity$3 ? odoyle.rules.add_alpha_node.cljs$core$IFn$_invoke$arity$3(new_node__$1,other_nodes,_STAR_alpha_node_path) : odoyle.rules.add_alpha_node.call(null,new_node__$1,other_nodes,_STAR_alpha_node_path)));
}
} else {
return node;
}
});
odoyle.rules.is_ancestor = (function odoyle$rules$is_ancestor(session,node_id1,node_id2){
var node_id = node_id2;
while(true){
var temp__5733__auto__ = cljs.core.cst$kw$parent_DASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,node_id], null)));
if(cljs.core.truth_(temp__5733__auto__)){
var parent_id = temp__5733__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_id1,parent_id)){
return (1);
} else {
var G__19879 = parent_id;
node_id = G__19879;
continue;
}
} else {
return (-1);
}
break;
}
});
odoyle.rules.add_condition = (function odoyle$rules$add_condition(session,condition){
var _STAR_alpha_node_path = cljs.core.volatile_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$alpha_DASH_node], null));
var session__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(session,cljs.core.cst$kw$alpha_DASH_node,odoyle.rules.add_alpha_node,cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(condition),_STAR_alpha_node_path);
var alpha_node_path = cljs.core.deref(_STAR_alpha_node_path);
var _STAR_last_id = cljs.core.volatile_BANG_(cljs.core.cst$kw$last_DASH_id.cljs$core$IFn$_invoke$arity$1(session__$1));
var join_node_id = _STAR_last_id.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(_STAR_last_id.cljs$core$IDeref$_deref$arity$1(null) + (1)));
var mem_node_id = _STAR_last_id.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(_STAR_last_id.cljs$core$IDeref$_deref$arity$1(null) + (1)));
var parent_mem_node_id = cljs.core.last(cljs.core.cst$kw$mem_DASH_node_DASH_ids.cljs$core$IFn$_invoke$arity$1(session__$1));
var mem_node = odoyle.rules.map__GT_MemoryNode(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$id,mem_node_id,cljs.core.cst$kw$parent_DASH_id,join_node_id,cljs.core.cst$kw$child_DASH_id,null,cljs.core.cst$kw$leaf_DASH_node_DASH_id,null,cljs.core.cst$kw$condition,condition,cljs.core.cst$kw$matches,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$trigger,false], null));
var join_node = odoyle.rules.map__GT_JoinNode(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$id,join_node_id,cljs.core.cst$kw$parent_DASH_id,parent_mem_node_id,cljs.core.cst$kw$child_DASH_id,mem_node_id,cljs.core.cst$kw$alpha_DASH_node_DASH_path,alpha_node_path,cljs.core.cst$kw$condition,condition,cljs.core.cst$kw$id_DASH_key,null,cljs.core.cst$kw$old_DASH_id_DASH_attrs,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$disable_DASH_fast_DASH_updates,false], null));
var session__$2 = cljs.core.assoc_in(cljs.core.assoc_in(session__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,join_node_id], null),join_node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,mem_node_id], null),mem_node);
var successor_ids = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$successors.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session__$2,alpha_node_path)),join_node_id);
var successor_ids__$1 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(odoyle.rules.is_ancestor,session__$2),successor_ids);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19880 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(session__$2,alpha_node_path,cljs.core.assoc,cljs.core.cst$kw$successors,successor_ids__$1);
if(cljs.core.truth_(parent_mem_node_id)){
return cljs.core.assoc_in(G__19880,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,parent_mem_node_id,cljs.core.cst$kw$child_DASH_id], null),join_node_id);
} else {
return G__19880;
}
})(),cljs.core.cst$kw$last_DASH_id,cljs.core.deref(_STAR_last_id)),cljs.core.cst$kw$mem_DASH_node_DASH_ids,(function (node_ids){
if(cljs.core.truth_(node_ids)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_ids,mem_node_id);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mem_node_id], null);
}
})),cljs.core.cst$kw$join_DASH_node_DASH_ids,(function (node_ids){
if(cljs.core.truth_(node_ids)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_ids,join_node_id);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [join_node_id], null);
}
})),cljs.core.cst$kw$bindings,(function (bindings){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (bindings__$1,k){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$all.cljs$core$IFn$_invoke$arity$1(bindings__$1),k)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(bindings__$1,cljs.core.cst$kw$joins,cljs.core.conj,k);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(bindings__$1,cljs.core.cst$kw$all,cljs.core.conj,k);
}
}),(function (){var or__4126__auto__ = bindings;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$all,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$joins,cljs.core.PersistentHashSet.EMPTY], null);
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$key,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(condition)));
}));
});
odoyle.rules.get_vars_from_fact = (function odoyle$rules$get_vars_from_fact(vars,condition,fact){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,cond_var){
var var_key = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(cond_var);
var G__19881 = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(cond_var);
var G__19881__$1 = (((G__19881 instanceof cljs.core.Keyword))?G__19881.fqn:null);
switch (G__19881__$1) {
case "id":
if(((cljs.core.contains_QMARK_(m,var_key)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,var_key),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(fact))))){
return cljs.core.reduced(null);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,var_key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(fact));
}

break;
case "attr":
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Attributes cannot contain vars",cljs.core.PersistentArrayMap.EMPTY);

break;
case "value":
if(((cljs.core.contains_QMARK_(m,var_key)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,var_key),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(fact))))){
return cljs.core.reduced(null);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,var_key,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(fact));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19881__$1)].join('')));

}
}),vars,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(condition));
});
odoyle.rules.get_id_attr = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.cst$kw$attr);
odoyle.rules.left_activate_join_node = (function odoyle$rules$left_activate_join_node(var_args){
var G__19884 = arguments.length;
switch (G__19884) {
case 5:
return odoyle.rules.left_activate_join_node.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return odoyle.rules.left_activate_join_node.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(odoyle.rules.left_activate_join_node.cljs$core$IFn$_invoke$arity$5 = (function (session,node_id,id_PLUS_attrs,vars,token){
var join_node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,node_id], null));
var alpha_node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session,cljs.core.cst$kw$alpha_DASH_node_DASH_path.cljs$core$IFn$_invoke$arity$1(join_node));
var temp__5733__auto__ = (function (){var G__19885 = join_node;
var G__19885__$1 = (((G__19885 == null))?null:cljs.core.cst$kw$id_DASH_key.cljs$core$IFn$_invoke$arity$1(G__19885));
if((G__19885__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,G__19885__$1);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var id = temp__5733__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (session__$1,alpha_fact){
return odoyle.rules.left_activate_join_node.cljs$core$IFn$_invoke$arity$6(session__$1,join_node,id_PLUS_attrs,vars,token,alpha_fact);
}),session,cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(alpha_node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$facts,id], null))));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (session__$1,attr__GT_fact){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (session__$2,alpha_fact){
return odoyle.rules.left_activate_join_node.cljs$core$IFn$_invoke$arity$6(session__$2,join_node,id_PLUS_attrs,vars,token,alpha_fact);
}),session__$1,cljs.core.vals(attr__GT_fact));
}),session,cljs.core.vals(cljs.core.cst$kw$facts.cljs$core$IFn$_invoke$arity$1(alpha_node)));
}
}));

(odoyle.rules.left_activate_join_node.cljs$core$IFn$_invoke$arity$6 = (function (session,join_node,id_PLUS_attrs,vars,token,alpha_fact){
var temp__5733__auto__ = odoyle.rules.get_vars_from_fact(vars,cljs.core.cst$kw$condition.cljs$core$IFn$_invoke$arity$1(join_node),alpha_fact);
if(cljs.core.truth_(temp__5733__auto__)){
var new_vars = temp__5733__auto__;
var id_PLUS_attr = (odoyle.rules.get_id_attr.cljs$core$IFn$_invoke$arity$1 ? odoyle.rules.get_id_attr.cljs$core$IFn$_invoke$arity$1(alpha_fact) : odoyle.rules.get_id_attr.call(null,alpha_fact));
var id_PLUS_attrs__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(id_PLUS_attrs,id_PLUS_attr);
var new_token = odoyle.rules.__GT_Token(alpha_fact,cljs.core.cst$kw$kind.cljs$core$IFn$_invoke$arity$1(token),null);
var new_QMARK_ = (!(cljs.core.contains_QMARK_(cljs.core.cst$kw$old_DASH_id_DASH_attrs.cljs$core$IFn$_invoke$arity$1(join_node),id_PLUS_attr)));
var G__19886 = session;
var G__19887 = cljs.core.cst$kw$child_DASH_id.cljs$core$IFn$_invoke$arity$1(join_node);
var G__19888 = id_PLUS_attrs__$1;
var G__19889 = new_vars;
var G__19890 = new_token;
var G__19891 = new_QMARK_;
return (odoyle.rules.left_activate_memory_node.cljs$core$IFn$_invoke$arity$6 ? odoyle.rules.left_activate_memory_node.cljs$core$IFn$_invoke$arity$6(G__19886,G__19887,G__19888,G__19889,G__19890,G__19891) : odoyle.rules.left_activate_memory_node.call(null,G__19886,G__19887,G__19888,G__19889,G__19890,G__19891));
} else {
return session;
}
}));

(odoyle.rules.left_activate_join_node.cljs$lang$maxFixedArity = 6);

odoyle.rules._STAR_triggered_node_ids_STAR_ = null;
odoyle.rules.left_activate_memory_node = (function odoyle$rules$left_activate_memory_node(session,node_id,id_PLUS_attrs,vars,p__19893,new_QMARK_){
var map__19894 = p__19893;
var map__19894__$1 = (((((!((map__19894 == null))))?(((((map__19894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19894):map__19894);
var token = map__19894__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19894__$1,cljs.core.cst$kw$kind);
var node_path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,node_id], null);
var node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session,node_path);
var session__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = new_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = (function (){var fexpr__19898 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$insert,null,cljs.core.cst$kw$update,null], null), null);
return (fexpr__19898.cljs$core$IFn$_invoke$arity$1 ? fexpr__19898.cljs$core$IFn$_invoke$arity$1(kind) : fexpr__19898.call(null,kind));
})();
if(cljs.core.truth_(and__4115__auto____$1)){
var temp__5733__auto__ = cljs.core.cst$kw$then.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$opts.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$condition.cljs$core$IFn$_invoke$arity$1(node)));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__19899 = temp__5733__auto__;
var then_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19899,(0),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19899,(1),null);
var G__19902 = then_type;
var G__19902__$1 = (((G__19902 instanceof cljs.core.Keyword))?G__19902.fqn:null);
switch (G__19902__$1) {
case "bool":
return then;

break;
case "func":
var temp__5733__auto____$1 = cljs.core.cst$kw$old_DASH_fact.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(temp__5733__auto____$1)){
var old_fact = temp__5733__auto____$1;
var G__19903 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fact.cljs$core$IFn$_invoke$arity$1(token));
var G__19904 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(old_fact);
return (then.cljs$core$IFn$_invoke$arity$2 ? then.cljs$core$IFn$_invoke$arity$2(G__19903,G__19904) : then.call(null,G__19903,G__19904));
} else {
return true;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19902__$1)].join('')));

}
} else {
return true;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())?(function (){
if(cljs.core.truth_(odoyle.rules._STAR_triggered_node_ids_STAR_)){
cljs.core._vreset_BANG_(odoyle.rules._STAR_triggered_node_ids_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(odoyle.rules._STAR_triggered_node_ids_STAR_),cljs.core.cst$kw$leaf_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(node)));
} else {
}

return cljs.core.assoc_in(session,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,cljs.core.cst$kw$leaf_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$trigger], null),true);
})()
:session);
var node__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session__$1,node_path);
var leaf_node_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node__$1),cljs.core.cst$kw$leaf_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(node__$1));
var enabled_QMARK_ = cljs.core.boolean$((function (){var or__4126__auto__ = (!(leaf_node_QMARK_));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (cljs.core.cst$kw$when_DASH_fn.cljs$core$IFn$_invoke$arity$1(node__$1) == null);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
var fexpr__19907 = cljs.core.cst$kw$when_DASH_fn.cljs$core$IFn$_invoke$arity$1(node__$1);
return (fexpr__19907.cljs$core$IFn$_invoke$arity$1 ? fexpr__19907.cljs$core$IFn$_invoke$arity$1(vars) : fexpr__19907.call(null,vars));
}
}
})());
var id_PLUS_attr = cljs.core.peek(id_PLUS_attrs);
var session__$2 = (function (){var G__19908 = kind;
var G__19908__$1 = (((G__19908 instanceof cljs.core.Keyword))?G__19908.fqn:null);
switch (G__19908__$1) {
case "insert":
case "update":
var $ = session__$1;
var $__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5($,node_path,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$matches,id_PLUS_attrs], null),odoyle.rules.__GT_Match(vars,enabled_QMARK_));
var $__$2 = (cljs.core.truth_(((leaf_node_QMARK_)?cljs.core.cst$kw$trigger.cljs$core$IFn$_invoke$arity$1(node__$1):false))?(function (){var G__19909 = $__$1;
var G__19909__$1 = (cljs.core.truth_(cljs.core.cst$kw$then_DASH_fn.cljs$core$IFn$_invoke$arity$1(node__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__19909,cljs.core.cst$kw$then_DASH_queue,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id,id_PLUS_attrs], null)):G__19909);
if(cljs.core.truth_(cljs.core.cst$kw$then_DASH_finally_DASH_fn.cljs$core$IFn$_invoke$arity$1(node__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__19909__$1,cljs.core.cst$kw$then_DASH_finally_DASH_queue,cljs.core.conj,node_id);
} else {
return G__19909__$1;
}
})():$__$1);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,cljs.core.cst$kw$parent_DASH_id.cljs$core$IFn$_invoke$arity$1(node__$1),cljs.core.cst$kw$old_DASH_id_DASH_attrs], null),cljs.core.conj,id_PLUS_attr);

break;
case "retract":
var $ = session__$1;
var $__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$6($,node_path,cljs.core.update,cljs.core.cst$kw$matches,cljs.core.dissoc,id_PLUS_attrs);
var $__$2 = (cljs.core.truth_(((leaf_node_QMARK_)?cljs.core.cst$kw$then_DASH_finally_DASH_fn.cljs$core$IFn$_invoke$arity$1(node__$1):false))?cljs.core.update.cljs$core$IFn$_invoke$arity$4($__$1,cljs.core.cst$kw$then_DASH_finally_DASH_queue,cljs.core.conj,node_id):$__$1);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,cljs.core.cst$kw$parent_DASH_id.cljs$core$IFn$_invoke$arity$1(node__$1),cljs.core.cst$kw$old_DASH_id_DASH_attrs], null),cljs.core.disj,id_PLUS_attr);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19908__$1)].join('')));

}
})();
var temp__5733__auto__ = cljs.core.cst$kw$child_DASH_id.cljs$core$IFn$_invoke$arity$1(node__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var join_node_id = temp__5733__auto__;
return odoyle.rules.left_activate_join_node.cljs$core$IFn$_invoke$arity$5(session__$2,join_node_id,id_PLUS_attrs,vars,token);
} else {
return session__$2;
}
});
odoyle.rules.right_activate_join_node = (function odoyle$rules$right_activate_join_node(session,node_id,id_PLUS_attr,p__19912){
var map__19913 = p__19912;
var map__19913__$1 = (((((!((map__19913 == null))))?(((((map__19913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19913):map__19913);
var token = map__19913__$1;
var fact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19913__$1,cljs.core.cst$kw$fact);
var map__19915 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,node_id], null));
var map__19915__$1 = (((((!((map__19915 == null))))?(((((map__19915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19915):map__19915);
var node = map__19915__$1;
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19915__$1,cljs.core.cst$kw$condition);
var child_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19915__$1,cljs.core.cst$kw$child_DASH_id);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19915__$1,cljs.core.cst$kw$id_DASH_key);
var temp__5733__auto__ = cljs.core.cst$kw$parent_DASH_id.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5733__auto__)){
var parent_id = temp__5733__auto__;
return cljs.core.reduce_kv((function (session__$1,id_PLUS_attrs,p__19917){
var map__19918 = p__19917;
var map__19918__$1 = (((((!((map__19918 == null))))?(((((map__19918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19918):map__19918);
var existing_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19918__$1,cljs.core.cst$kw$vars);
if(cljs.core.truth_((function (){var G__19920 = id_key;
var G__19920__$1 = (((G__19920 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(existing_vars,G__19920));
if((G__19920__$1 == null)){
return null;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(fact),G__19920__$1);
}
})())){
return session__$1;
} else {
var temp__5733__auto____$1 = odoyle.rules.get_vars_from_fact(existing_vars,condition,fact);
if(cljs.core.truth_(temp__5733__auto____$1)){
var vars = temp__5733__auto____$1;
return odoyle.rules.left_activate_memory_node(session__$1,child_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(id_PLUS_attrs,id_PLUS_attr),vars,token,true);
} else {
return session__$1;
}
}
}),session,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,parent_id,cljs.core.cst$kw$matches], null)));
} else {
var temp__5733__auto____$1 = odoyle.rules.get_vars_from_fact(cljs.core.PersistentArrayMap.EMPTY,condition,fact);
if(cljs.core.truth_(temp__5733__auto____$1)){
var vars = temp__5733__auto____$1;
return odoyle.rules.left_activate_memory_node(session,child_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_PLUS_attr], null),vars,token,true);
} else {
return session;
}
}
});
odoyle.rules.right_activate_alpha_node = (function odoyle$rules$right_activate_alpha_node(session,node_path,p__19921){
var map__19922 = p__19921;
var map__19922__$1 = (((((!((map__19922 == null))))?(((((map__19922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19922):map__19922);
var token = map__19922__$1;
var fact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19922__$1,cljs.core.cst$kw$fact);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19922__$1,cljs.core.cst$kw$kind);
var old_fact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19922__$1,cljs.core.cst$kw$old_DASH_fact);
var vec__19924 = (odoyle.rules.get_id_attr.cljs$core$IFn$_invoke$arity$1 ? odoyle.rules.get_id_attr.cljs$core$IFn$_invoke$arity$1(fact) : odoyle.rules.get_id_attr.call(null,fact));
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19924,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19924,(1),null);
var id_PLUS_attr = vec__19924;
var $ = session;
var $__$1 = (function (){var G__19927 = kind;
var G__19927__$1 = (((G__19927 instanceof cljs.core.Keyword))?G__19927.fqn:null);
switch (G__19927__$1) {
case "insert":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5($,node_path,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$facts,id,attr], null),fact),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id_DASH_attr_DASH_nodes,id_PLUS_attr], null),(function (node_paths){
var node_paths__$1 = (function (){var or__4126__auto__ = node_paths;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if((!(cljs.core.contains_QMARK_(node_paths__$1,node_path)))){
} else {
throw (new Error("Assert failed: (not (contains? node-paths node-path))"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_paths__$1,node_path);
}));

break;
case "retract":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$6($,node_path,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$facts,id], null),cljs.core.dissoc,attr),cljs.core.cst$kw$id_DASH_attr_DASH_nodes,(function (nodes){
var node_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes,id_PLUS_attr);
var _ = ((cljs.core.contains_QMARK_(node_paths,node_path))?null:(function(){throw (new Error("Assert failed: (contains? node-paths node-path)"))})());
var node_paths__$1 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(node_paths,node_path);
if(cljs.core.seq(node_paths__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nodes,id_PLUS_attr,node_paths__$1);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(nodes,id_PLUS_attr);
}
}));

break;
case "update":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5($,node_path,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$facts,id,attr], null),(function (existing_old_fact){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_fact,existing_old_fact)){
} else {
throw (new Error("Assert failed: (= old-fact existing-old-fact)"));
}

return fact;
}));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19927__$1)].join('')));

}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (session__$1,child_id){
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update,kind))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,child_id,cljs.core.cst$kw$disable_DASH_fast_DASH_updates], null)):false))){
return odoyle.rules.right_activate_join_node(odoyle.rules.right_activate_join_node(session__$1,child_id,id_PLUS_attr,odoyle.rules.__GT_Token(old_fact,cljs.core.cst$kw$retract,null)),child_id,id_PLUS_attr,odoyle.rules.__GT_Token(fact,cljs.core.cst$kw$insert,old_fact));
} else {
return odoyle.rules.right_activate_join_node(session__$1,child_id,id_PLUS_attr,token);
}
}),$__$1,cljs.core.cst$kw$successors.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session,node_path)));
});
odoyle.rules.get_alpha_nodes_for_fact = (function odoyle$rules$get_alpha_nodes_for_fact(session,alpha_node,id,attr,value,root_QMARK_){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (nodes,child){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(nodes,(odoyle.rules.get_alpha_nodes_for_fact.cljs$core$IFn$_invoke$arity$6 ? odoyle.rules.get_alpha_nodes_for_fact.cljs$core$IFn$_invoke$arity$6(session,child,id,attr,value,false) : odoyle.rules.get_alpha_nodes_for_fact.call(null,session,child,id,attr,value,false)));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(alpha_node));
} else {
var test_value = (function (){var G__19929 = cljs.core.cst$kw$test_DASH_field.cljs$core$IFn$_invoke$arity$1(alpha_node);
var G__19929__$1 = (((G__19929 instanceof cljs.core.Keyword))?G__19929.fqn:null);
switch (G__19929__$1) {
case "id":
return id;

break;
case "attr":
return attr;

break;
case "value":
return value;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19929__$1)].join('')));

}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(test_value,cljs.core.cst$kw$test_DASH_value.cljs$core$IFn$_invoke$arity$1(alpha_node))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (nodes,child){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(nodes,(odoyle.rules.get_alpha_nodes_for_fact.cljs$core$IFn$_invoke$arity$6 ? odoyle.rules.get_alpha_nodes_for_fact.cljs$core$IFn$_invoke$arity$6(session,child,id,attr,value,false) : odoyle.rules.get_alpha_nodes_for_fact.call(null,session,child,id,attr,value,false)));
}),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(alpha_node)]),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(alpha_node));
} else {
return null;
}
}
});
odoyle.rules.upsert_fact = (function odoyle$rules$upsert_fact(session,id,attr,value,node_paths){
var id_PLUS_attr = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr], null);
var fact = odoyle.rules.__GT_Fact(id,attr,value);
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id_DASH_attr_DASH_nodes,id_PLUS_attr], null));
if(cljs.core.truth_(temp__5733__auto__)){
var existing_node_paths = temp__5733__auto__;
var $ = session;
var $__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (session__$1,node_path){
if((!(cljs.core.contains_QMARK_(node_paths,node_path)))){
var node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session__$1,node_path);
var old_fact = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$facts,id,attr], null));
if(cljs.core.truth_(old_fact)){
} else {
throw (new Error("Assert failed: old-fact"));
}

return odoyle.rules.right_activate_alpha_node(session__$1,node_path,odoyle.rules.__GT_Token(old_fact,cljs.core.cst$kw$retract,null));
} else {
return session__$1;
}
}),$,existing_node_paths);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (session__$1,node_path){
if(cljs.core.contains_QMARK_(existing_node_paths,node_path)){
var node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session__$1,node_path);
var old_fact = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$facts,id,attr], null));
if(cljs.core.truth_(old_fact)){
} else {
throw (new Error("Assert failed: old-fact"));
}

return odoyle.rules.right_activate_alpha_node(session__$1,node_path,odoyle.rules.__GT_Token(fact,cljs.core.cst$kw$update,old_fact));
} else {
return odoyle.rules.right_activate_alpha_node(session__$1,node_path,odoyle.rules.__GT_Token(fact,cljs.core.cst$kw$insert,null));
}
}),$__$1,node_paths);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (session__$1,node_path){
return odoyle.rules.right_activate_alpha_node(session__$1,node_path,odoyle.rules.__GT_Token(fact,cljs.core.cst$kw$insert,null));
}),session,node_paths);
}
});
odoyle.rules.throw_recursion_limit = (function odoyle$rules$throw_recursion_limit(session,limit,executed_nodes){
var trigger_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,node_id__GT_triggered_node_ids){
return cljs.core.reduce_kv((function (m2,node_id,triggered_node_ids){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m2,(function (){var fexpr__19932 = cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name.cljs$core$IFn$_invoke$arity$1(session);
return (fexpr__19932.cljs$core$IFn$_invoke$arity$1 ? fexpr__19932.cljs$core$IFn$_invoke$arity$1(node_id) : fexpr__19932.call(null,node_id));
})(),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m3,triggered_node_id){
var rule_name = (function (){var fexpr__19933 = cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name.cljs$core$IFn$_invoke$arity$1(session);
return (fexpr__19933.cljs$core$IFn$_invoke$arity$1 ? fexpr__19933.cljs$core$IFn$_invoke$arity$1(triggered_node_id) : fexpr__19933.call(null,triggered_node_id));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m3,rule_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,rule_name));
}),cljs.core.PersistentArrayMap.EMPTY,triggered_node_ids));
}),cljs.core.PersistentArrayMap.EMPTY,node_id__GT_triggered_node_ids);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse(executed_nodes));
var find_cycles = (function odoyle$rules$throw_recursion_limit_$_find_cycles(cycles,p__19934,cyc){
var vec__19935 = p__19934;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19935,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19935,(1),null);
if(cljs.core.contains_QMARK_(cljs.core.set(cyc),k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cycles,cljs.core.vec(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__19931_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__19931_SHARP_,k);
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cyc,k))));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cycles__$1,pair){
return odoyle$rules$throw_recursion_limit_$_find_cycles(cycles__$1,pair,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cyc,k));
}),cycles,v);
}
});
var cycles = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cycles,pair){
return find_cycles(cycles,pair,cljs.core.PersistentVector.EMPTY);
}),cljs.core.PersistentHashSet.EMPTY,trigger_map);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Recursion limit hit.","\n","This may be an infinite loop.","\n","The current recursion limit is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit)," (set by the :recursion-limit option of fire-rules).","\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,cyc){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"Cycle detected! ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(cyc)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cyc))," is triggering itself."].join(''):clojure.string.join.cljs$core$IFn$_invoke$arity$2(" -> ",cyc)),"\n"].join('');
}),"\n",cycles)),"\n","Try using {:then false} to prevent triggering rules in an infinite loop."].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
odoyle.rules._STAR_mutable_session_STAR_ = null;
odoyle.rules._STAR_recur_countdown_STAR_ = null;
odoyle.rules._STAR_executed_nodes_STAR_ = null;
/**
 * Provides the current value of the session from inside a :then or :then-finally block.
 */
odoyle.rules._STAR_session_STAR_ = null;
/**
 * Provides a map of all the matched values from inside a :then block.
 */
odoyle.rules._STAR_match_STAR_ = null;
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_recursion_DASH_limit,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.spec.alpha.nilable_impl(cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_,cljs.core.nat_int_QMARK_,null));
cljs.spec.alpha.def_impl(cljs.core.cst$sym$odoyle$rules_SLASH_fire_DASH_rules,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_recursion_DASH_limit], null))))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_recursion_DASH_limit], null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$opts], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.spec.alpha.maybe_impl(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_recursion_DASH_limit], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__19938){
return cljs.core.map_QMARK_(G__19938);
})], null),(function (G__19938){
return cljs.core.map_QMARK_(G__19938);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$recursion_DASH_limit], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_recursion_DASH_limit], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),null])),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_recursion_DASH_limit], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_recursion_DASH_limit], null)))], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_recursion_DASH_limit], null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Fires :then and :then-finally blocks for any rules whose matches have been updated.
 *   The opts map may contain:
 *   
 *   :recursion-limit  -  Throws an error if rules recursively trigger this many times.
 *                     The default is 16. Pass nil to disable the limit entirely.
 */
odoyle.rules.fire_rules = (function odoyle$rules$fire_rules(var_args){
var G__19941 = arguments.length;
switch (G__19941) {
case 1:
return odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$1 = (function (session){
return odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$2(session,cljs.core.PersistentArrayMap.EMPTY);
}));

(odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$2 = (function (session,opts){
var then_queue = cljs.core.cst$kw$then_DASH_queue.cljs$core$IFn$_invoke$arity$1(session);
var then_finally_queue = cljs.core.cst$kw$then_DASH_finally_DASH_queue.cljs$core$IFn$_invoke$arity$1(session);
if(((((cljs.core.seq(then_queue)) || (cljs.core.seq(then_finally_queue)))) && ((odoyle.rules._STAR_session_STAR_ == null)))){
var _STAR_node_id__GT_triggered_node_ids = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var execute_fn = (function (f,node_id){
var _STAR_triggered_node_ids_STAR__orig_val__19942 = odoyle.rules._STAR_triggered_node_ids_STAR_;
var _STAR_triggered_node_ids_STAR__temp_val__19943 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(odoyle.rules._STAR_triggered_node_ids_STAR_ = _STAR_triggered_node_ids_STAR__temp_val__19943);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return _STAR_node_id__GT_triggered_node_ids.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$3(_STAR_node_id__GT_triggered_node_ids.cljs$core$IDeref$_deref$arity$1(null),node_id,(function (p1__19939_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = p1__19939_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),cljs.core.deref(odoyle.rules._STAR_triggered_node_ids_STAR_));
})));
}finally {(odoyle.rules._STAR_triggered_node_ids_STAR_ = _STAR_triggered_node_ids_STAR__orig_val__19942);
}});
var session__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(session,cljs.core.cst$kw$then_DASH_queue,cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$then_DASH_finally_DASH_queue,cljs.core.PersistentHashSet.EMPTY], 0));
var session__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (session__$2,node_id){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(session__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,node_id], null),cljs.core.assoc,cljs.core.cst$kw$trigger,false);
}),session__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(then_finally_queue,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,then_queue)));
var beta_nodes = cljs.core.cst$kw$beta_DASH_nodes.cljs$core$IFn$_invoke$arity$1(session__$2);
var session__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (session__$3,p__19944){
var vec__19945 = p__19944;
var node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19945,(0),null);
var id_PLUS_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19945,(1),null);
var map__19948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(beta_nodes,node_id);
var map__19948__$1 = (((((!((map__19948 == null))))?(((((map__19948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19948):map__19948);
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19948__$1,cljs.core.cst$kw$matches);
var then_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19948__$1,cljs.core.cst$kw$then_DASH_fn);
var or__4126__auto__ = (function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(matches,id_PLUS_attrs);
if(cljs.core.truth_(temp__5735__auto__)){
var map__19958 = temp__5735__auto__;
var map__19958__$1 = (((((!((map__19958 == null))))?(((((map__19958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19958):map__19958);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19958__$1,cljs.core.cst$kw$vars);
var enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19958__$1,cljs.core.cst$kw$enabled);
if(cljs.core.truth_(enabled)){
var _STAR_session_STAR__orig_val__19960 = odoyle.rules._STAR_session_STAR_;
var _STAR_mutable_session_STAR__orig_val__19961 = odoyle.rules._STAR_mutable_session_STAR_;
var _STAR_match_STAR__orig_val__19962 = odoyle.rules._STAR_match_STAR_;
var _STAR_session_STAR__temp_val__19963 = session__$3;
var _STAR_mutable_session_STAR__temp_val__19964 = cljs.core.volatile_BANG_(session__$3);
var _STAR_match_STAR__temp_val__19965 = vars;
(odoyle.rules._STAR_session_STAR_ = _STAR_session_STAR__temp_val__19963);

(odoyle.rules._STAR_mutable_session_STAR_ = _STAR_mutable_session_STAR__temp_val__19964);

(odoyle.rules._STAR_match_STAR_ = _STAR_match_STAR__temp_val__19965);

try{execute_fn((function (){
return (then_fn.cljs$core$IFn$_invoke$arity$1 ? then_fn.cljs$core$IFn$_invoke$arity$1(vars) : then_fn.call(null,vars));
}),node_id);

return cljs.core.deref(odoyle.rules._STAR_mutable_session_STAR_);
}finally {(odoyle.rules._STAR_match_STAR_ = _STAR_match_STAR__orig_val__19962);

(odoyle.rules._STAR_mutable_session_STAR_ = _STAR_mutable_session_STAR__orig_val__19961);

(odoyle.rules._STAR_session_STAR_ = _STAR_session_STAR__orig_val__19960);
}} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return session__$3;
}
}),session__$2,then_queue);
var session__$4 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (session__$4,node_id){
var map__19966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(beta_nodes,node_id);
var map__19966__$1 = (((((!((map__19966 == null))))?(((((map__19966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19966):map__19966);
var then_finally_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19966__$1,cljs.core.cst$kw$then_DASH_finally_DASH_fn);
var _STAR_session_STAR__orig_val__19968 = odoyle.rules._STAR_session_STAR_;
var _STAR_mutable_session_STAR__orig_val__19969 = odoyle.rules._STAR_mutable_session_STAR_;
var _STAR_session_STAR__temp_val__19970 = session__$4;
var _STAR_mutable_session_STAR__temp_val__19971 = cljs.core.volatile_BANG_(session__$4);
(odoyle.rules._STAR_session_STAR_ = _STAR_session_STAR__temp_val__19970);

(odoyle.rules._STAR_mutable_session_STAR_ = _STAR_mutable_session_STAR__temp_val__19971);

try{execute_fn(then_finally_fn,node_id);

return cljs.core.deref(odoyle.rules._STAR_mutable_session_STAR_);
}finally {(odoyle.rules._STAR_mutable_session_STAR_ = _STAR_mutable_session_STAR__orig_val__19969);

(odoyle.rules._STAR_session_STAR_ = _STAR_session_STAR__orig_val__19968);
}}),session__$3,then_finally_queue);
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$recursion_DASH_limit,(16));
if(cljs.core.truth_(temp__5733__auto__)){
var limit = temp__5733__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),odoyle.rules._STAR_recur_countdown_STAR_)){
return odoyle.rules.throw_recursion_limit(session__$4,limit,odoyle.rules._STAR_executed_nodes_STAR_);
} else {
var _STAR_recur_countdown_STAR__orig_val__19972 = odoyle.rules._STAR_recur_countdown_STAR_;
var _STAR_executed_nodes_STAR__orig_val__19973 = odoyle.rules._STAR_executed_nodes_STAR_;
var _STAR_recur_countdown_STAR__temp_val__19974 = (((odoyle.rules._STAR_recur_countdown_STAR_ == null))?limit:(odoyle.rules._STAR_recur_countdown_STAR_ - (1)));
var _STAR_executed_nodes_STAR__temp_val__19975 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = odoyle.rules._STAR_executed_nodes_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.deref(_STAR_node_id__GT_triggered_node_ids));
(odoyle.rules._STAR_recur_countdown_STAR_ = _STAR_recur_countdown_STAR__temp_val__19974);

(odoyle.rules._STAR_executed_nodes_STAR_ = _STAR_executed_nodes_STAR__temp_val__19975);

try{return odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$2(session__$4,opts);
}finally {(odoyle.rules._STAR_executed_nodes_STAR_ = _STAR_executed_nodes_STAR__orig_val__19973);

(odoyle.rules._STAR_recur_countdown_STAR_ = _STAR_recur_countdown_STAR__orig_val__19972);
}}
} else {
return odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$2(session__$4,opts);
}
} else {
return session;
}
}));

(odoyle.rules.fire_rules.cljs$lang$maxFixedArity = 2);

/**
 * Adds a rule to the given session.
 */
odoyle.rules.add_rule = (function odoyle$rules$add_rule(session,rule){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rule_DASH_name_DASH__GT_node_DASH_id,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(rule)], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(rule))," already exists in session"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var conditions = cljs.core.cst$kw$conditions.cljs$core$IFn$_invoke$arity$1(rule);
var session__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(odoyle.rules.add_condition,session,conditions);
var leaf_node_id = cljs.core.last(cljs.core.cst$kw$mem_DASH_node_DASH_ids.cljs$core$IFn$_invoke$arity$1(session__$1));
var bindings = cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(session__$1);
var session__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (session__$2,mem_node_id){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(session__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,mem_node_id], null),(function (mem_node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mem_node,cljs.core.cst$kw$leaf_DASH_node_DASH_id,leaf_node_id);
}));
}),session__$1,cljs.core.cst$kw$mem_DASH_node_DASH_ids.cljs$core$IFn$_invoke$arity$1(session__$1));
var session__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (session__$3,join_node_id){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(session__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,join_node_id], null),(function (join_node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(join_node,cljs.core.cst$kw$id_DASH_key,cljs.core.some((function (p__19977){
var map__19978 = p__19977;
var map__19978__$1 = (((((!((map__19978 == null))))?(((((map__19978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19978):map__19978);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19978__$1,cljs.core.cst$kw$field);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19978__$1,cljs.core.cst$kw$key);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,field)) && (cljs.core.contains_QMARK_(cljs.core.cst$kw$joins.cljs$core$IFn$_invoke$arity$1(bindings),key)))){
return key;
} else {
return null;
}
}),cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$condition.cljs$core$IFn$_invoke$arity$1(join_node))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$disable_DASH_fast_DASH_updates,cljs.core.contains_QMARK_(cljs.core.cst$kw$joins.cljs$core$IFn$_invoke$arity$1(bindings),cljs.core.some((function (p__19980){
var map__19981 = p__19980;
var map__19981__$1 = (((((!((map__19981 == null))))?(((((map__19981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19981):map__19981);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19981__$1,cljs.core.cst$kw$field);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19981__$1,cljs.core.cst$kw$key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,field)){
return key;
} else {
return null;
}
}),cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$condition.cljs$core$IFn$_invoke$arity$1(join_node))))], 0));
}));
}),session__$2,cljs.core.cst$kw$join_DASH_node_DASH_ids.cljs$core$IFn$_invoke$arity$1(session__$2));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(session__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,leaf_node_id,cljs.core.cst$kw$when_DASH_fn], null),cljs.core.cst$kw$when_DASH_fn.cljs$core$IFn$_invoke$arity$1(rule)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,leaf_node_id,cljs.core.cst$kw$then_DASH_fn], null),cljs.core.cst$kw$then_DASH_fn.cljs$core$IFn$_invoke$arity$1(rule)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,leaf_node_id,cljs.core.cst$kw$then_DASH_finally_DASH_fn], null),cljs.core.cst$kw$then_DASH_finally_DASH_fn.cljs$core$IFn$_invoke$arity$1(rule)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rule_DASH_name_DASH__GT_node_DASH_id,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(rule)], null),leaf_node_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name,leaf_node_id], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(rule)),cljs.core.cst$kw$mem_DASH_node_DASH_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$join_DASH_node_DASH_ids,cljs.core.cst$kw$bindings], 0));
});
/**
 * Returns a new session.
 */
odoyle.rules.__GT_session = (function odoyle$rules$__GT_session(){
return odoyle.rules.map__GT_Session(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$alpha_DASH_node,odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,null,cljs.core.cst$kw$test_DASH_value,null,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null)),cljs.core.cst$kw$beta_DASH_nodes,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$last_DASH_id,(-1),cljs.core.cst$kw$rule_DASH_name_DASH__GT_node_DASH_id,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$id_DASH_attr_DASH_nodes,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$then_DASH_queue,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$then_DASH_finally_DASH_queue,cljs.core.PersistentHashSet.EMPTY], null));
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_,cljs.core.cst$sym$odoyle$rules_SLASH_Session,cljs.core.cst$sym$_PERCENT_)),(function (p1__19983_SHARP_){
return (p1__19983_SHARP_ instanceof odoyle.rules.Session);
}));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_insert_DASH_args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$single_DASH_combo,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$fact,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)),cljs.core.cst$kw$batch,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr_DASH__GT_value,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)),cljs.core.cst$kw$single,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$value,cljs.core.cst$kw$odoyle$rules_SLASH_value)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$single_DASH_combo,cljs.core.cst$kw$batch,cljs.core.cst$kw$single], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$fact,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr_DASH__GT_value,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$value,cljs.core.cst$kw$odoyle$rules_SLASH_value)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$fact], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$id,cljs.core.cst$kw$attr_DASH__GT_value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__19984){
return cljs.core.map_QMARK_(G__19984);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17556__auto__,v__17557__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17557__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)], null),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$id,cljs.core.cst$kw$attr,cljs.core.cst$kw$value], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null))], null),null));
odoyle.rules.check_insert_spec = (function odoyle$rules$check_insert_spec(var_args){
var G__19986 = arguments.length;
switch (G__19986) {
case 1:
return odoyle.rules.check_insert_spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return odoyle.rules.check_insert_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(odoyle.rules.check_insert_spec.cljs$core$IFn$_invoke$arity$1 = (function (p__19987){
var vec__19988 = p__19987;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19988,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19988,(1),null);
return odoyle.rules.check_insert_spec.cljs$core$IFn$_invoke$arity$2(attr,value);
}));

(odoyle.rules.check_insert_spec.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
var temp__5733__auto__ = cljs.spec.alpha.get_spec(attr);
if(cljs.core.truth_(temp__5733__auto__)){
var spec = temp__5733__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid,cljs.spec.alpha.conform(spec,value))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Error when checking attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$2(spec,value))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Couldn't find spec with name ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),"\n","If you don't want o'doyle to require specs for attributes, call","\n","(clojure.spec.test.alpha/unstrument 'odoyle.rules/insert)","\n"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

(odoyle.rules.check_insert_spec.cljs$lang$maxFixedArity = 2);

odoyle.rules.insert_conformer = cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$kind,cljs.core.cst$sym$args,cljs.core.cst$kw$as,cljs.core.cst$sym$parsed_DASH_args], null)], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_case,cljs.core.cst$sym$kind,cljs.core.cst$kw$single_DASH_combo,cljs.core.list(cljs.core.cst$sym$odoyle$rules_SLASH_check_DASH_insert_DASH_spec,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_nth,cljs.core.list(cljs.core.cst$kw$fact,cljs.core.cst$sym$args),(1)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_nth,cljs.core.list(cljs.core.cst$kw$fact,cljs.core.cst$sym$args),(2))),cljs.core.cst$kw$batch,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_run_BANG_,cljs.core.cst$sym$odoyle$rules_SLASH_check_DASH_insert_DASH_spec,cljs.core.list(cljs.core.cst$kw$attr_DASH__GT_value,cljs.core.cst$sym$args)),cljs.core.cst$kw$single,cljs.core.list(cljs.core.cst$sym$odoyle$rules_SLASH_check_DASH_insert_DASH_spec,cljs.core.list(cljs.core.cst$kw$attr,cljs.core.cst$sym$args),cljs.core.list(cljs.core.cst$kw$value,cljs.core.cst$sym$args))),cljs.core.cst$sym$parsed_DASH_args)),(function (p__19992){
var vec__19993 = p__19992;
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19993,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19993,(1),null);
var parsed_args = vec__19993;
var G__19996_19997 = kind;
var G__19996_19998__$1 = (((G__19996_19997 instanceof cljs.core.Keyword))?G__19996_19997.fqn:null);
switch (G__19996_19998__$1) {
case "single-combo":
odoyle.rules.check_insert_spec.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fact.cljs$core$IFn$_invoke$arity$1(args),(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fact.cljs$core$IFn$_invoke$arity$1(args),(2)));

break;
case "batch":
cljs.core.run_BANG_(odoyle.rules.check_insert_spec,cljs.core.cst$kw$attr_DASH__GT_value.cljs$core$IFn$_invoke$arity$1(args));

break;
case "single":
odoyle.rules.check_insert_spec.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(args),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(args));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19996_19998__$1)].join('')));

}

return parsed_args;
}),null,true);
cljs.spec.alpha.def_impl(cljs.core.cst$sym$odoyle$rules_SLASH_insert,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.cst$kw$odoyle$rules_SLASH_insert_DASH_args,cljs.core.cst$sym$odoyle$rules_SLASH_insert_DASH_conformer)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.cst$kw$odoyle$rules_SLASH_insert_DASH_args,cljs.core.cst$sym$odoyle$rules_SLASH_insert_DASH_conformer),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_insert_DASH_args,cljs.core.cst$sym$odoyle$rules_SLASH_insert_DASH_conformer], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_insert_DASH_args,odoyle.rules.insert_conformer], null),null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.cst$kw$odoyle$rules_SLASH_insert_DASH_args,cljs.core.cst$sym$odoyle$rules_SLASH_insert_DASH_conformer),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Inserts a fact into the session. Can optionally insert multiple facts with the same id.
 *   
 *   Note: if the given fact doesn't match at least one rule, it will be discarded.
 */
odoyle.rules.insert = (function odoyle$rules$insert(var_args){
var G__20001 = arguments.length;
switch (G__20001) {
case 2:
return odoyle.rules.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return odoyle.rules.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return odoyle.rules.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(odoyle.rules.insert.cljs$core$IFn$_invoke$arity$2 = (function (session,p__20002){
var vec__20003 = p__20002;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20003,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20003,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20003,(2),null);
return odoyle.rules.insert.cljs$core$IFn$_invoke$arity$4(session,id,attr,value);
}));

(odoyle.rules.insert.cljs$core$IFn$_invoke$arity$3 = (function (session,id,attr__GT_value){
return cljs.core.reduce_kv((function (session__$1,attr,value){
return odoyle.rules.insert.cljs$core$IFn$_invoke$arity$4(session__$1,id,attr,value);
}),session,attr__GT_value);
}));

(odoyle.rules.insert.cljs$core$IFn$_invoke$arity$4 = (function (session,id,attr,value){
return odoyle.rules.upsert_fact(session,id,attr,value,odoyle.rules.get_alpha_nodes_for_fact(session,cljs.core.cst$kw$alpha_DASH_node.cljs$core$IFn$_invoke$arity$1(session),id,attr,value,true));
}));

(odoyle.rules.insert.cljs$lang$maxFixedArity = 4);

cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_insert_BANG__DASH_args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$batch,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr_DASH__GT_value,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)),cljs.core.cst$kw$single,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$value,cljs.core.cst$kw$odoyle$rules_SLASH_value)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$batch,cljs.core.cst$kw$single], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr_DASH__GT_value,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$value,cljs.core.cst$kw$odoyle$rules_SLASH_value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$attr_DASH__GT_value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__20007){
return cljs.core.map_QMARK_(G__20007);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17556__auto__,v__17557__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17557__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$attr,cljs.core.cst$kw$value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null))], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$sym$odoyle$rules_SLASH_insert_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$odoyle$rules_SLASH_insert_BANG__DASH_args),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$odoyle$rules_SLASH_insert_BANG__DASH_args,cljs.core.cst$kw$odoyle$rules_SLASH_insert_BANG__DASH_args,null,null),cljs.core.cst$kw$odoyle$rules_SLASH_insert_BANG__DASH_args,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Equivalent to:
 *   
 *   (o/reset! (o/insert o/*session* id attr value))
 *   
 *   Using the long form is recommended.
 */
odoyle.rules.insert_BANG_ = (function odoyle$rules$insert_BANG_(var_args){
var G__20009 = arguments.length;
switch (G__20009) {
case 2:
return odoyle.rules.insert_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return odoyle.rules.insert_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(odoyle.rules.insert_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,attr__GT_value){
return cljs.core.run_BANG_((function (p__20010){
var vec__20011 = p__20010;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20011,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20011,(1),null);
return odoyle.rules.insert_BANG_.cljs$core$IFn$_invoke$arity$3(id,attr,value);
}),attr__GT_value);
}));

(odoyle.rules.insert_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (id,attr,value){
if(cljs.core.truth_(odoyle.rules._STAR_mutable_session_STAR_)){
return cljs.core._vreset_BANG_(odoyle.rules._STAR_mutable_session_STAR_,odoyle.rules.insert.cljs$core$IFn$_invoke$arity$4(cljs.core._deref(odoyle.rules._STAR_mutable_session_STAR_),id,attr,value));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("This function must be called in a :then or :then-finally block",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(odoyle.rules.insert_BANG_.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.def_impl(cljs.core.cst$sym$odoyle$rules_SLASH_retract,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_attr)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_attr),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$id,cljs.core.cst$kw$attr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_attr),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Retracts the fact with the given id + attr combo.
 */
odoyle.rules.retract = (function odoyle$rules$retract(session,id,attr){
var id_PLUS_attr = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr], null);
var node_paths = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id_DASH_attr_DASH_nodes,id_PLUS_attr], null));
if(cljs.core.truth_(node_paths)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_PLUS_attr)," not in session"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (session__$1,node_path){
var node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session__$1,node_path);
var fact = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$facts,id,attr], null));
return odoyle.rules.right_activate_alpha_node(session__$1,node_path,odoyle.rules.__GT_Token(fact,cljs.core.cst$kw$retract,null));
}),session,node_paths);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$odoyle$rules_SLASH_retract_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_attr)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_attr),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$attr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_attr),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Equivalent to:
 *   
 *   (o/reset! (o/retract o/*session* id attr))
 *   
 *   Using the long form is recommended.
 */
odoyle.rules.retract_BANG_ = (function odoyle$rules$retract_BANG_(id,attr){
if(cljs.core.truth_(odoyle.rules._STAR_mutable_session_STAR_)){
return cljs.core._vreset_BANG_(odoyle.rules._STAR_mutable_session_STAR_,odoyle.rules.retract(cljs.core._deref(odoyle.rules._STAR_mutable_session_STAR_),id,attr));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("This function must be called in a :then or :then-finally block",cljs.core.PersistentArrayMap.EMPTY);
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$odoyle$rules_SLASH_query_DASH_all,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$rule_DASH_name,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$rule_DASH_name,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$rule_DASH_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.spec.alpha.maybe_impl(cljs.core.qualified_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$rule_DASH_name,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * When called with just a session, returns a vector of all inserted facts.
 *   Otherwise, returns a vector of maps containing all the matches for the given rule.
 */
odoyle.rules.query_all = (function odoyle$rules$query_all(var_args){
var G__20016 = arguments.length;
switch (G__20016) {
case 1:
return odoyle.rules.query_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return odoyle.rules.query_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(odoyle.rules.query_all.cljs$core$IFn$_invoke$arity$1 = (function (session){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__20017){
var vec__20018 = p__20017;
var vec__20021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20018,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20021,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20021,(1),null);
var nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20018,(1),null);
var G__20025 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session,cljs.core.first(nodes)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$facts,id,attr], null));
var fexpr__20024 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$id,cljs.core.cst$kw$attr,cljs.core.cst$kw$value);
return (fexpr__20024.cljs$core$IFn$_invoke$arity$1 ? fexpr__20024.cljs$core$IFn$_invoke$arity$1(G__20025) : fexpr__20024.call(null,G__20025));
}),cljs.core.cst$kw$id_DASH_attr_DASH_nodes.cljs$core$IFn$_invoke$arity$1(session));
}));

(odoyle.rules.query_all.cljs$core$IFn$_invoke$arity$2 = (function (session,rule_name){
var rule_id = (function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rule_DASH_name_DASH__GT_node_DASH_id,rule_name], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(rule_name)," not in session"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var rule = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,rule_id], null));
return cljs.core.reduce_kv((function (v,_,p__20026){
var map__20027 = p__20026;
var map__20027__$1 = (((((!((map__20027 == null))))?(((((map__20027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20027):map__20027);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20027__$1,cljs.core.cst$kw$vars);
var enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20027__$1,cljs.core.cst$kw$enabled);
if(cljs.core.truth_(enabled)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,vars);
} else {
return v;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$matches.cljs$core$IFn$_invoke$arity$1(rule));
}));

(odoyle.rules.query_all.cljs$lang$maxFixedArity = 2);

/**
 * Mutates the session from a :then or :then-finally block.
 */
odoyle.rules.reset_BANG_ = (function odoyle$rules$reset_BANG_(new_session){
if(cljs.core.truth_(odoyle.rules._STAR_mutable_session_STAR_)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(odoyle.rules._STAR_session_STAR_,cljs.core.deref(odoyle.rules._STAR_mutable_session_STAR_))){
return cljs.core.vreset_BANG_(odoyle.rules._STAR_mutable_session_STAR_,new_session);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You may only call `reset!` once in a :then or :then-finally block",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You may only call `reset!` in a :then or :then-finally block",cljs.core.PersistentArrayMap.EMPTY);
}
});
