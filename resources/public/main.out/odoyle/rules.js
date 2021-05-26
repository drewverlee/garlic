// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
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
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_then], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_then], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__18814){
return cljs.core.map_QMARK_(G__18814);
})], null),(function (G__18814){
return cljs.core.map_QMARK_(G__18814);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$then], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_then], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_tuple,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_attr,cljs.core.cst$kw$value,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_value,cljs.core.cst$kw$opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_opts)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$attr,cljs.core.cst$kw$value,cljs.core.cst$kw$opts], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_value,cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_opts,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_opts)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_value,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_opts)], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$header,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$what,"null"], null), null),cljs.core.cst$kw$body,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_spec,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_tuple))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,cljs.core.cst$kw$body], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$what,null], null), null),cljs.spec.alpha.rep_PLUS_impl(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_spec,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_tuple),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_tuple,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_tuple,null,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$what,"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_spec,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_tuple))], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_when_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$header,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$when,"null"], null), null),cljs.core.cst$kw$body,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18815_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$p1__18815_SHARP_))))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,cljs.core.cst$kw$body], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$when,null], null), null),cljs.spec.alpha.rep_PLUS_impl(cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$_PERCENT_))),(function (p1__18815_SHARP_){
return (!((p1__18815_SHARP_ instanceof cljs.core.Keyword)));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$when,"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18815_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$p1__18815_SHARP_))))], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$header,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$then,"null"], null), null),cljs.core.cst$kw$body,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18816_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$p1__18816_SHARP_))))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,cljs.core.cst$kw$body], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$then,null], null), null),cljs.spec.alpha.rep_PLUS_impl(cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$_PERCENT_))),(function (p1__18816_SHARP_){
return (!((p1__18816_SHARP_ instanceof cljs.core.Keyword)));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$then,"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18816_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$p1__18816_SHARP_))))], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_finally_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$header,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$then_DASH_finally,"null"], null), null),cljs.core.cst$kw$body,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18817_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$p1__18817_SHARP_))))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,cljs.core.cst$kw$body], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$then_DASH_finally,null], null), null),cljs.spec.alpha.rep_PLUS_impl(cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$_PERCENT_))),(function (p1__18817_SHARP_){
return (!((p1__18817_SHARP_ instanceof cljs.core.Keyword)));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$then_DASH_finally,"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__18817_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$p1__18817_SHARP_))))], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_rule,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$what_DASH_block,cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_block,cljs.core.cst$kw$when_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_when_DASH_block),cljs.core.cst$kw$then_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_block),cljs.core.cst$kw$then_DASH_finally_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_finally_DASH_block)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$what_DASH_block,cljs.core.cst$kw$when_DASH_block,cljs.core.cst$kw$then_DASH_block,cljs.core.cst$kw$then_DASH_finally_DASH_block], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_block,cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$odoyle$rules_SLASH_when_DASH_block,cljs.core.cst$kw$odoyle$rules_SLASH_when_DASH_block),cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_block,cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_block),cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_finally_DASH_block,cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_finally_DASH_block)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_what_DASH_block,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_when_DASH_block),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_block),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_then_DASH_finally_DASH_block)], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_rules,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_rule),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_rule),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_rule], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_,cljs.core.cst$kw$odoyle$rules_SLASH_rule], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__18818){
return cljs.core.map_QMARK_(G__18818);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__16780__auto__,v__16781__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__16781__auto__,(0));
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

(odoyle.rules.Fact.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k18820,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__18824 = k18820;
var G__18824__$1 = (((G__18824 instanceof cljs.core.Keyword))?G__18824.fqn:null);
switch (G__18824__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18820,else__4383__auto__);

}
}));

(odoyle.rules.Fact.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__18825){
var vec__18826 = p__18825;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18826,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18826,(1),null);
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

(odoyle.rules.Fact.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18819){
var self__ = this;
var G__18819__$1 = this;
return (new cljs.core.RecordIter((0),G__18819__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$attr,cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__18829 = (function (coll__4377__auto__){
return (-1909491215 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__18829(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Fact.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18821,other18822){
var self__ = this;
var this18821__$1 = this;
return (((!((other18822 == null)))) && ((this18821__$1.constructor === other18822.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18821__$1.id,other18822.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18821__$1.attr,other18822.attr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18821__$1.value,other18822.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18821__$1.__extmap,other18822.__extmap)));
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

(odoyle.rules.Fact.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__18819){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__18830 = cljs.core.keyword_identical_QMARK_;
var expr__18831 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__18833 = cljs.core.cst$kw$id;
var G__18834 = expr__18831;
return (pred__18830.cljs$core$IFn$_invoke$arity$2 ? pred__18830.cljs$core$IFn$_invoke$arity$2(G__18833,G__18834) : pred__18830.call(null,G__18833,G__18834));
})())){
return (new odoyle.rules.Fact(G__18819,self__.attr,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18835 = cljs.core.cst$kw$attr;
var G__18836 = expr__18831;
return (pred__18830.cljs$core$IFn$_invoke$arity$2 ? pred__18830.cljs$core$IFn$_invoke$arity$2(G__18835,G__18836) : pred__18830.call(null,G__18835,G__18836));
})())){
return (new odoyle.rules.Fact(self__.id,G__18819,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18837 = cljs.core.cst$kw$value;
var G__18838 = expr__18831;
return (pred__18830.cljs$core$IFn$_invoke$arity$2 ? pred__18830.cljs$core$IFn$_invoke$arity$2(G__18837,G__18838) : pred__18830.call(null,G__18837,G__18838));
})())){
return (new odoyle.rules.Fact(self__.id,self__.attr,G__18819,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Fact(self__.id,self__.attr,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__18819),null));
}
}
}
}));

(odoyle.rules.Fact.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$id,self__.id,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$attr,self__.attr,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$value,self__.value,null))], null),self__.__extmap));
}));

(odoyle.rules.Fact.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__18819){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Fact(self__.id,self__.attr,self__.value,G__18819,self__.__extmap,self__.__hash));
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
odoyle.rules.map__GT_Fact = (function odoyle$rules$map__GT_Fact(G__18823){
var extmap__4419__auto__ = (function (){var G__18839 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18823,cljs.core.cst$kw$id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$attr,cljs.core.cst$kw$value], 0));
if(cljs.core.record_QMARK_(G__18823)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18839);
} else {
return G__18839;
}
})();
return (new odoyle.rules.Fact(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(G__18823),cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__18823),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__18823),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(odoyle.rules.Token.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k18842,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__18846 = k18842;
var G__18846__$1 = (((G__18846 instanceof cljs.core.Keyword))?G__18846.fqn:null);
switch (G__18846__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18842,else__4383__auto__);

}
}));

(odoyle.rules.Token.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__18847){
var vec__18848 = p__18847;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18848,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18848,(1),null);
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

(odoyle.rules.Token.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18841){
var self__ = this;
var G__18841__$1 = this;
return (new cljs.core.RecordIter((0),G__18841__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fact,cljs.core.cst$kw$kind,cljs.core.cst$kw$old_DASH_fact], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__18851 = (function (coll__4377__auto__){
return (1211839350 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__18851(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Token.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18843,other18844){
var self__ = this;
var this18843__$1 = this;
return (((!((other18844 == null)))) && ((this18843__$1.constructor === other18844.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18843__$1.fact,other18844.fact)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18843__$1.kind,other18844.kind)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18843__$1.old_fact,other18844.old_fact)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18843__$1.__extmap,other18844.__extmap)));
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

(odoyle.rules.Token.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__18841){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__18852 = cljs.core.keyword_identical_QMARK_;
var expr__18853 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__18855 = cljs.core.cst$kw$fact;
var G__18856 = expr__18853;
return (pred__18852.cljs$core$IFn$_invoke$arity$2 ? pred__18852.cljs$core$IFn$_invoke$arity$2(G__18855,G__18856) : pred__18852.call(null,G__18855,G__18856));
})())){
return (new odoyle.rules.Token(G__18841,self__.kind,self__.old_fact,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18857 = cljs.core.cst$kw$kind;
var G__18858 = expr__18853;
return (pred__18852.cljs$core$IFn$_invoke$arity$2 ? pred__18852.cljs$core$IFn$_invoke$arity$2(G__18857,G__18858) : pred__18852.call(null,G__18857,G__18858));
})())){
return (new odoyle.rules.Token(self__.fact,G__18841,self__.old_fact,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18859 = cljs.core.cst$kw$old_DASH_fact;
var G__18860 = expr__18853;
return (pred__18852.cljs$core$IFn$_invoke$arity$2 ? pred__18852.cljs$core$IFn$_invoke$arity$2(G__18859,G__18860) : pred__18852.call(null,G__18859,G__18860));
})())){
return (new odoyle.rules.Token(self__.fact,self__.kind,G__18841,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Token(self__.fact,self__.kind,self__.old_fact,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__18841),null));
}
}
}
}));

(odoyle.rules.Token.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fact,self__.fact,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$kind,self__.kind,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$old_DASH_fact,self__.old_fact,null))], null),self__.__extmap));
}));

(odoyle.rules.Token.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__18841){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Token(self__.fact,self__.kind,self__.old_fact,G__18841,self__.__extmap,self__.__hash));
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
odoyle.rules.map__GT_Token = (function odoyle$rules$map__GT_Token(G__18845){
var extmap__4419__auto__ = (function (){var G__18861 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18845,cljs.core.cst$kw$fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$kind,cljs.core.cst$kw$old_DASH_fact], 0));
if(cljs.core.record_QMARK_(G__18845)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18861);
} else {
return G__18861;
}
})();
return (new odoyle.rules.Token(cljs.core.cst$kw$fact.cljs$core$IFn$_invoke$arity$1(G__18845),cljs.core.cst$kw$kind.cljs$core$IFn$_invoke$arity$1(G__18845),cljs.core.cst$kw$old_DASH_fact.cljs$core$IFn$_invoke$arity$1(G__18845),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(odoyle.rules.Binding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k18864,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__18868 = k18864;
var G__18868__$1 = (((G__18868 instanceof cljs.core.Keyword))?G__18868.fqn:null);
switch (G__18868__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18864,else__4383__auto__);

}
}));

(odoyle.rules.Binding.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__18869){
var vec__18870 = p__18869;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18870,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18870,(1),null);
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

(odoyle.rules.Binding.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18863){
var self__ = this;
var G__18863__$1 = this;
return (new cljs.core.RecordIter((0),G__18863__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$field,cljs.core.cst$kw$sym,cljs.core.cst$kw$key], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__18873 = (function (coll__4377__auto__){
return (-364025076 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__18873(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Binding.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18865,other18866){
var self__ = this;
var this18865__$1 = this;
return (((!((other18866 == null)))) && ((this18865__$1.constructor === other18866.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18865__$1.field,other18866.field)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18865__$1.sym,other18866.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18865__$1.key,other18866.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18865__$1.__extmap,other18866.__extmap)));
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

(odoyle.rules.Binding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__18863){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__18874 = cljs.core.keyword_identical_QMARK_;
var expr__18875 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__18877 = cljs.core.cst$kw$field;
var G__18878 = expr__18875;
return (pred__18874.cljs$core$IFn$_invoke$arity$2 ? pred__18874.cljs$core$IFn$_invoke$arity$2(G__18877,G__18878) : pred__18874.call(null,G__18877,G__18878));
})())){
return (new odoyle.rules.Binding(G__18863,self__.sym,self__.key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18879 = cljs.core.cst$kw$sym;
var G__18880 = expr__18875;
return (pred__18874.cljs$core$IFn$_invoke$arity$2 ? pred__18874.cljs$core$IFn$_invoke$arity$2(G__18879,G__18880) : pred__18874.call(null,G__18879,G__18880));
})())){
return (new odoyle.rules.Binding(self__.field,G__18863,self__.key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18881 = cljs.core.cst$kw$key;
var G__18882 = expr__18875;
return (pred__18874.cljs$core$IFn$_invoke$arity$2 ? pred__18874.cljs$core$IFn$_invoke$arity$2(G__18881,G__18882) : pred__18874.call(null,G__18881,G__18882));
})())){
return (new odoyle.rules.Binding(self__.field,self__.sym,G__18863,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Binding(self__.field,self__.sym,self__.key,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__18863),null));
}
}
}
}));

(odoyle.rules.Binding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$field,self__.field,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$sym,self__.sym,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$key,self__.key,null))], null),self__.__extmap));
}));

(odoyle.rules.Binding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__18863){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Binding(self__.field,self__.sym,self__.key,G__18863,self__.__extmap,self__.__hash));
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
odoyle.rules.map__GT_Binding = (function odoyle$rules$map__GT_Binding(G__18867){
var extmap__4419__auto__ = (function (){var G__18883 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18867,cljs.core.cst$kw$field,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sym,cljs.core.cst$kw$key], 0));
if(cljs.core.record_QMARK_(G__18867)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18883);
} else {
return G__18883;
}
})();
return (new odoyle.rules.Binding(cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(G__18867),cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(G__18867),cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(G__18867),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(odoyle.rules.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k18886,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__18890 = k18886;
var G__18890__$1 = (((G__18890 instanceof cljs.core.Keyword))?G__18890.fqn:null);
switch (G__18890__$1) {
case "vars":
return self__.vars;

break;
case "enabled":
return self__.enabled;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18886,else__4383__auto__);

}
}));

(odoyle.rules.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__18891){
var vec__18892 = p__18891;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18892,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18892,(1),null);
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

(odoyle.rules.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18885){
var self__ = this;
var G__18885__$1 = this;
return (new cljs.core.RecordIter((0),G__18885__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vars,cljs.core.cst$kw$enabled], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__18895 = (function (coll__4377__auto__){
return (1974248823 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__18895(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18887,other18888){
var self__ = this;
var this18887__$1 = this;
return (((!((other18888 == null)))) && ((this18887__$1.constructor === other18888.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18887__$1.vars,other18888.vars)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18887__$1.enabled,other18888.enabled)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18887__$1.__extmap,other18888.__extmap)));
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

(odoyle.rules.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__18885){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__18896 = cljs.core.keyword_identical_QMARK_;
var expr__18897 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__18899 = cljs.core.cst$kw$vars;
var G__18900 = expr__18897;
return (pred__18896.cljs$core$IFn$_invoke$arity$2 ? pred__18896.cljs$core$IFn$_invoke$arity$2(G__18899,G__18900) : pred__18896.call(null,G__18899,G__18900));
})())){
return (new odoyle.rules.Match(G__18885,self__.enabled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18901 = cljs.core.cst$kw$enabled;
var G__18902 = expr__18897;
return (pred__18896.cljs$core$IFn$_invoke$arity$2 ? pred__18896.cljs$core$IFn$_invoke$arity$2(G__18901,G__18902) : pred__18896.call(null,G__18901,G__18902));
})())){
return (new odoyle.rules.Match(self__.vars,G__18885,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Match(self__.vars,self__.enabled,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__18885),null));
}
}
}));

(odoyle.rules.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$vars,self__.vars,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$enabled,self__.enabled,null))], null),self__.__extmap));
}));

(odoyle.rules.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__18885){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Match(self__.vars,self__.enabled,G__18885,self__.__extmap,self__.__hash));
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
odoyle.rules.map__GT_Match = (function odoyle$rules$map__GT_Match(G__18889){
var extmap__4419__auto__ = (function (){var G__18903 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18889,cljs.core.cst$kw$vars,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$enabled], 0));
if(cljs.core.record_QMARK_(G__18889)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18903);
} else {
return G__18903;
}
})();
return (new odoyle.rules.Match(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(G__18889),cljs.core.cst$kw$enabled.cljs$core$IFn$_invoke$arity$1(G__18889),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(odoyle.rules.AlphaNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k18906,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__18910 = k18906;
var G__18910__$1 = (((G__18910 instanceof cljs.core.Keyword))?G__18910.fqn:null);
switch (G__18910__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18906,else__4383__auto__);

}
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__18911){
var vec__18912 = p__18911;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18912,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18912,(1),null);
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

(odoyle.rules.AlphaNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18905){
var self__ = this;
var G__18905__$1 = this;
return (new cljs.core.RecordIter((0),G__18905__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$children,cljs.core.cst$kw$successors,cljs.core.cst$kw$facts], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__18915 = (function (coll__4377__auto__){
return (-812066344 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__18915(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.AlphaNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18907,other18908){
var self__ = this;
var this18907__$1 = this;
return (((!((other18908 == null)))) && ((this18907__$1.constructor === other18908.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18907__$1.path,other18908.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18907__$1.test_field,other18908.test_field)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18907__$1.test_value,other18908.test_value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18907__$1.children,other18908.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18907__$1.successors,other18908.successors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18907__$1.facts,other18908.facts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18907__$1.__extmap,other18908.__extmap)));
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

(odoyle.rules.AlphaNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__18905){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__18916 = cljs.core.keyword_identical_QMARK_;
var expr__18917 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__18919 = cljs.core.cst$kw$path;
var G__18920 = expr__18917;
return (pred__18916.cljs$core$IFn$_invoke$arity$2 ? pred__18916.cljs$core$IFn$_invoke$arity$2(G__18919,G__18920) : pred__18916.call(null,G__18919,G__18920));
})())){
return (new odoyle.rules.AlphaNode(G__18905,self__.test_field,self__.test_value,self__.children,self__.successors,self__.facts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18921 = cljs.core.cst$kw$test_DASH_field;
var G__18922 = expr__18917;
return (pred__18916.cljs$core$IFn$_invoke$arity$2 ? pred__18916.cljs$core$IFn$_invoke$arity$2(G__18921,G__18922) : pred__18916.call(null,G__18921,G__18922));
})())){
return (new odoyle.rules.AlphaNode(self__.path,G__18905,self__.test_value,self__.children,self__.successors,self__.facts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18923 = cljs.core.cst$kw$test_DASH_value;
var G__18924 = expr__18917;
return (pred__18916.cljs$core$IFn$_invoke$arity$2 ? pred__18916.cljs$core$IFn$_invoke$arity$2(G__18923,G__18924) : pred__18916.call(null,G__18923,G__18924));
})())){
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,G__18905,self__.children,self__.successors,self__.facts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18925 = cljs.core.cst$kw$children;
var G__18926 = expr__18917;
return (pred__18916.cljs$core$IFn$_invoke$arity$2 ? pred__18916.cljs$core$IFn$_invoke$arity$2(G__18925,G__18926) : pred__18916.call(null,G__18925,G__18926));
})())){
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,G__18905,self__.successors,self__.facts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18927 = cljs.core.cst$kw$successors;
var G__18928 = expr__18917;
return (pred__18916.cljs$core$IFn$_invoke$arity$2 ? pred__18916.cljs$core$IFn$_invoke$arity$2(G__18927,G__18928) : pred__18916.call(null,G__18927,G__18928));
})())){
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,self__.children,G__18905,self__.facts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18929 = cljs.core.cst$kw$facts;
var G__18930 = expr__18917;
return (pred__18916.cljs$core$IFn$_invoke$arity$2 ? pred__18916.cljs$core$IFn$_invoke$arity$2(G__18929,G__18930) : pred__18916.call(null,G__18929,G__18930));
})())){
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,self__.children,self__.successors,G__18905,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,self__.children,self__.successors,self__.facts,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__18905),null));
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

(odoyle.rules.AlphaNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__18905){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.AlphaNode(self__.path,self__.test_field,self__.test_value,self__.children,self__.successors,self__.facts,G__18905,self__.__extmap,self__.__hash));
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
odoyle.rules.map__GT_AlphaNode = (function odoyle$rules$map__GT_AlphaNode(G__18909){
var extmap__4419__auto__ = (function (){var G__18931 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18909,cljs.core.cst$kw$path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$test_DASH_field,cljs.core.cst$kw$test_DASH_value,cljs.core.cst$kw$children,cljs.core.cst$kw$successors,cljs.core.cst$kw$facts], 0));
if(cljs.core.record_QMARK_(G__18909)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18931);
} else {
return G__18931;
}
})();
return (new odoyle.rules.AlphaNode(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__18909),cljs.core.cst$kw$test_DASH_field.cljs$core$IFn$_invoke$arity$1(G__18909),cljs.core.cst$kw$test_DASH_value.cljs$core$IFn$_invoke$arity$1(G__18909),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(G__18909),cljs.core.cst$kw$successors.cljs$core$IFn$_invoke$arity$1(G__18909),cljs.core.cst$kw$facts.cljs$core$IFn$_invoke$arity$1(G__18909),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(odoyle.rules.MemoryNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k18934,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__18938 = k18934;
var G__18938__$1 = (((G__18938 instanceof cljs.core.Keyword))?G__18938.fqn:null);
switch (G__18938__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18934,else__4383__auto__);

}
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__18939){
var vec__18940 = p__18939;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18940,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18940,(1),null);
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

(odoyle.rules.MemoryNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18933){
var self__ = this;
var G__18933__$1 = this;
return (new cljs.core.RecordIter((0),G__18933__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$parent_DASH_id,cljs.core.cst$kw$child_DASH_id,cljs.core.cst$kw$leaf_DASH_node_DASH_id,cljs.core.cst$kw$condition,cljs.core.cst$kw$matches,cljs.core.cst$kw$when_DASH_fn,cljs.core.cst$kw$then_DASH_fn,cljs.core.cst$kw$then_DASH_finally_DASH_fn,cljs.core.cst$kw$trigger], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__18943 = (function (coll__4377__auto__){
return (-704209569 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__18943(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.MemoryNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18935,other18936){
var self__ = this;
var this18935__$1 = this;
return (((!((other18936 == null)))) && ((this18935__$1.constructor === other18936.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18935__$1.id,other18936.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18935__$1.parent_id,other18936.parent_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18935__$1.child_id,other18936.child_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18935__$1.leaf_node_id,other18936.leaf_node_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18935__$1.condition,other18936.condition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18935__$1.matches,other18936.matches)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18935__$1.when_fn,other18936.when_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18935__$1.then_fn,other18936.then_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18935__$1.then_finally_fn,other18936.then_finally_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18935__$1.trigger,other18936.trigger)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18935__$1.__extmap,other18936.__extmap)));
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

(odoyle.rules.MemoryNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__18933){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__18944 = cljs.core.keyword_identical_QMARK_;
var expr__18945 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__18947 = cljs.core.cst$kw$id;
var G__18948 = expr__18945;
return (pred__18944.cljs$core$IFn$_invoke$arity$2 ? pred__18944.cljs$core$IFn$_invoke$arity$2(G__18947,G__18948) : pred__18944.call(null,G__18947,G__18948));
})())){
return (new odoyle.rules.MemoryNode(G__18933,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18949 = cljs.core.cst$kw$parent_DASH_id;
var G__18950 = expr__18945;
return (pred__18944.cljs$core$IFn$_invoke$arity$2 ? pred__18944.cljs$core$IFn$_invoke$arity$2(G__18949,G__18950) : pred__18944.call(null,G__18949,G__18950));
})())){
return (new odoyle.rules.MemoryNode(self__.id,G__18933,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18951 = cljs.core.cst$kw$child_DASH_id;
var G__18952 = expr__18945;
return (pred__18944.cljs$core$IFn$_invoke$arity$2 ? pred__18944.cljs$core$IFn$_invoke$arity$2(G__18951,G__18952) : pred__18944.call(null,G__18951,G__18952));
})())){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,G__18933,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18953 = cljs.core.cst$kw$leaf_DASH_node_DASH_id;
var G__18954 = expr__18945;
return (pred__18944.cljs$core$IFn$_invoke$arity$2 ? pred__18944.cljs$core$IFn$_invoke$arity$2(G__18953,G__18954) : pred__18944.call(null,G__18953,G__18954));
})())){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,G__18933,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18955 = cljs.core.cst$kw$condition;
var G__18956 = expr__18945;
return (pred__18944.cljs$core$IFn$_invoke$arity$2 ? pred__18944.cljs$core$IFn$_invoke$arity$2(G__18955,G__18956) : pred__18944.call(null,G__18955,G__18956));
})())){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,G__18933,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18957 = cljs.core.cst$kw$matches;
var G__18958 = expr__18945;
return (pred__18944.cljs$core$IFn$_invoke$arity$2 ? pred__18944.cljs$core$IFn$_invoke$arity$2(G__18957,G__18958) : pred__18944.call(null,G__18957,G__18958));
})())){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,G__18933,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18959 = cljs.core.cst$kw$when_DASH_fn;
var G__18960 = expr__18945;
return (pred__18944.cljs$core$IFn$_invoke$arity$2 ? pred__18944.cljs$core$IFn$_invoke$arity$2(G__18959,G__18960) : pred__18944.call(null,G__18959,G__18960));
})())){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,G__18933,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18961 = cljs.core.cst$kw$then_DASH_fn;
var G__18962 = expr__18945;
return (pred__18944.cljs$core$IFn$_invoke$arity$2 ? pred__18944.cljs$core$IFn$_invoke$arity$2(G__18961,G__18962) : pred__18944.call(null,G__18961,G__18962));
})())){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,G__18933,self__.then_finally_fn,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18963 = cljs.core.cst$kw$then_DASH_finally_DASH_fn;
var G__18964 = expr__18945;
return (pred__18944.cljs$core$IFn$_invoke$arity$2 ? pred__18944.cljs$core$IFn$_invoke$arity$2(G__18963,G__18964) : pred__18944.call(null,G__18963,G__18964));
})())){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,G__18933,self__.trigger,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18965 = cljs.core.cst$kw$trigger;
var G__18966 = expr__18945;
return (pred__18944.cljs$core$IFn$_invoke$arity$2 ? pred__18944.cljs$core$IFn$_invoke$arity$2(G__18965,G__18966) : pred__18944.call(null,G__18965,G__18966));
})())){
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,G__18933,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__18933),null));
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

(odoyle.rules.MemoryNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__18933){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.MemoryNode(self__.id,self__.parent_id,self__.child_id,self__.leaf_node_id,self__.condition,self__.matches,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.trigger,G__18933,self__.__extmap,self__.__hash));
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
odoyle.rules.map__GT_MemoryNode = (function odoyle$rules$map__GT_MemoryNode(G__18937){
var extmap__4419__auto__ = (function (){var G__18967 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18937,cljs.core.cst$kw$id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parent_DASH_id,cljs.core.cst$kw$child_DASH_id,cljs.core.cst$kw$leaf_DASH_node_DASH_id,cljs.core.cst$kw$condition,cljs.core.cst$kw$matches,cljs.core.cst$kw$when_DASH_fn,cljs.core.cst$kw$then_DASH_fn,cljs.core.cst$kw$then_DASH_finally_DASH_fn,cljs.core.cst$kw$trigger], 0));
if(cljs.core.record_QMARK_(G__18937)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18967);
} else {
return G__18967;
}
})();
return (new odoyle.rules.MemoryNode(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(G__18937),cljs.core.cst$kw$parent_DASH_id.cljs$core$IFn$_invoke$arity$1(G__18937),cljs.core.cst$kw$child_DASH_id.cljs$core$IFn$_invoke$arity$1(G__18937),cljs.core.cst$kw$leaf_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(G__18937),cljs.core.cst$kw$condition.cljs$core$IFn$_invoke$arity$1(G__18937),cljs.core.cst$kw$matches.cljs$core$IFn$_invoke$arity$1(G__18937),cljs.core.cst$kw$when_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__18937),cljs.core.cst$kw$then_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__18937),cljs.core.cst$kw$then_DASH_finally_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__18937),cljs.core.cst$kw$trigger.cljs$core$IFn$_invoke$arity$1(G__18937),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(odoyle.rules.JoinNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k18970,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__18974 = k18970;
var G__18974__$1 = (((G__18974 instanceof cljs.core.Keyword))?G__18974.fqn:null);
switch (G__18974__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18970,else__4383__auto__);

}
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__18975){
var vec__18976 = p__18975;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18976,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18976,(1),null);
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

(odoyle.rules.JoinNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18969){
var self__ = this;
var G__18969__$1 = this;
return (new cljs.core.RecordIter((0),G__18969__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$parent_DASH_id,cljs.core.cst$kw$child_DASH_id,cljs.core.cst$kw$alpha_DASH_node_DASH_path,cljs.core.cst$kw$condition,cljs.core.cst$kw$id_DASH_key,cljs.core.cst$kw$old_DASH_id_DASH_attrs,cljs.core.cst$kw$disable_DASH_fast_DASH_updates], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__18979 = (function (coll__4377__auto__){
return (-1611988792 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__18979(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.JoinNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18971,other18972){
var self__ = this;
var this18971__$1 = this;
return (((!((other18972 == null)))) && ((this18971__$1.constructor === other18972.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18971__$1.id,other18972.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18971__$1.parent_id,other18972.parent_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18971__$1.child_id,other18972.child_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18971__$1.alpha_node_path,other18972.alpha_node_path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18971__$1.condition,other18972.condition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18971__$1.id_key,other18972.id_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18971__$1.old_id_attrs,other18972.old_id_attrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18971__$1.disable_fast_updates,other18972.disable_fast_updates)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18971__$1.__extmap,other18972.__extmap)));
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

(odoyle.rules.JoinNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__18969){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__18980 = cljs.core.keyword_identical_QMARK_;
var expr__18981 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__18983 = cljs.core.cst$kw$id;
var G__18984 = expr__18981;
return (pred__18980.cljs$core$IFn$_invoke$arity$2 ? pred__18980.cljs$core$IFn$_invoke$arity$2(G__18983,G__18984) : pred__18980.call(null,G__18983,G__18984));
})())){
return (new odoyle.rules.JoinNode(G__18969,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18985 = cljs.core.cst$kw$parent_DASH_id;
var G__18986 = expr__18981;
return (pred__18980.cljs$core$IFn$_invoke$arity$2 ? pred__18980.cljs$core$IFn$_invoke$arity$2(G__18985,G__18986) : pred__18980.call(null,G__18985,G__18986));
})())){
return (new odoyle.rules.JoinNode(self__.id,G__18969,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18987 = cljs.core.cst$kw$child_DASH_id;
var G__18988 = expr__18981;
return (pred__18980.cljs$core$IFn$_invoke$arity$2 ? pred__18980.cljs$core$IFn$_invoke$arity$2(G__18987,G__18988) : pred__18980.call(null,G__18987,G__18988));
})())){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,G__18969,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18989 = cljs.core.cst$kw$alpha_DASH_node_DASH_path;
var G__18990 = expr__18981;
return (pred__18980.cljs$core$IFn$_invoke$arity$2 ? pred__18980.cljs$core$IFn$_invoke$arity$2(G__18989,G__18990) : pred__18980.call(null,G__18989,G__18990));
})())){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,G__18969,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18991 = cljs.core.cst$kw$condition;
var G__18992 = expr__18981;
return (pred__18980.cljs$core$IFn$_invoke$arity$2 ? pred__18980.cljs$core$IFn$_invoke$arity$2(G__18991,G__18992) : pred__18980.call(null,G__18991,G__18992));
})())){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,G__18969,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18993 = cljs.core.cst$kw$id_DASH_key;
var G__18994 = expr__18981;
return (pred__18980.cljs$core$IFn$_invoke$arity$2 ? pred__18980.cljs$core$IFn$_invoke$arity$2(G__18993,G__18994) : pred__18980.call(null,G__18993,G__18994));
})())){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,G__18969,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18995 = cljs.core.cst$kw$old_DASH_id_DASH_attrs;
var G__18996 = expr__18981;
return (pred__18980.cljs$core$IFn$_invoke$arity$2 ? pred__18980.cljs$core$IFn$_invoke$arity$2(G__18995,G__18996) : pred__18980.call(null,G__18995,G__18996));
})())){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,G__18969,self__.disable_fast_updates,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18997 = cljs.core.cst$kw$disable_DASH_fast_DASH_updates;
var G__18998 = expr__18981;
return (pred__18980.cljs$core$IFn$_invoke$arity$2 ? pred__18980.cljs$core$IFn$_invoke$arity$2(G__18997,G__18998) : pred__18980.call(null,G__18997,G__18998));
})())){
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,G__18969,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__18969),null));
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

(odoyle.rules.JoinNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__18969){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.JoinNode(self__.id,self__.parent_id,self__.child_id,self__.alpha_node_path,self__.condition,self__.id_key,self__.old_id_attrs,self__.disable_fast_updates,G__18969,self__.__extmap,self__.__hash));
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
odoyle.rules.map__GT_JoinNode = (function odoyle$rules$map__GT_JoinNode(G__18973){
var extmap__4419__auto__ = (function (){var G__18999 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18973,cljs.core.cst$kw$id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parent_DASH_id,cljs.core.cst$kw$child_DASH_id,cljs.core.cst$kw$alpha_DASH_node_DASH_path,cljs.core.cst$kw$condition,cljs.core.cst$kw$id_DASH_key,cljs.core.cst$kw$old_DASH_id_DASH_attrs,cljs.core.cst$kw$disable_DASH_fast_DASH_updates], 0));
if(cljs.core.record_QMARK_(G__18973)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18999);
} else {
return G__18999;
}
})();
return (new odoyle.rules.JoinNode(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(G__18973),cljs.core.cst$kw$parent_DASH_id.cljs$core$IFn$_invoke$arity$1(G__18973),cljs.core.cst$kw$child_DASH_id.cljs$core$IFn$_invoke$arity$1(G__18973),cljs.core.cst$kw$alpha_DASH_node_DASH_path.cljs$core$IFn$_invoke$arity$1(G__18973),cljs.core.cst$kw$condition.cljs$core$IFn$_invoke$arity$1(G__18973),cljs.core.cst$kw$id_DASH_key.cljs$core$IFn$_invoke$arity$1(G__18973),cljs.core.cst$kw$old_DASH_id_DASH_attrs.cljs$core$IFn$_invoke$arity$1(G__18973),cljs.core.cst$kw$disable_DASH_fast_DASH_updates.cljs$core$IFn$_invoke$arity$1(G__18973),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(odoyle.rules.Condition.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19002,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19006 = k19002;
var G__19006__$1 = (((G__19006 instanceof cljs.core.Keyword))?G__19006.fqn:null);
switch (G__19006__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19002,else__4383__auto__);

}
}));

(odoyle.rules.Condition.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19007){
var vec__19008 = p__19007;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19008,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19008,(1),null);
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

(odoyle.rules.Condition.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19001){
var self__ = this;
var G__19001__$1 = this;
return (new cljs.core.RecordIter((0),G__19001__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodes,cljs.core.cst$kw$bindings,cljs.core.cst$kw$opts], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__19011 = (function (coll__4377__auto__){
return (-49907947 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19011(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Condition.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19003,other19004){
var self__ = this;
var this19003__$1 = this;
return (((!((other19004 == null)))) && ((this19003__$1.constructor === other19004.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19003__$1.nodes,other19004.nodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19003__$1.bindings,other19004.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19003__$1.opts,other19004.opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19003__$1.__extmap,other19004.__extmap)));
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

(odoyle.rules.Condition.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19001){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19012 = cljs.core.keyword_identical_QMARK_;
var expr__19013 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19015 = cljs.core.cst$kw$nodes;
var G__19016 = expr__19013;
return (pred__19012.cljs$core$IFn$_invoke$arity$2 ? pred__19012.cljs$core$IFn$_invoke$arity$2(G__19015,G__19016) : pred__19012.call(null,G__19015,G__19016));
})())){
return (new odoyle.rules.Condition(G__19001,self__.bindings,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19017 = cljs.core.cst$kw$bindings;
var G__19018 = expr__19013;
return (pred__19012.cljs$core$IFn$_invoke$arity$2 ? pred__19012.cljs$core$IFn$_invoke$arity$2(G__19017,G__19018) : pred__19012.call(null,G__19017,G__19018));
})())){
return (new odoyle.rules.Condition(self__.nodes,G__19001,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19019 = cljs.core.cst$kw$opts;
var G__19020 = expr__19013;
return (pred__19012.cljs$core$IFn$_invoke$arity$2 ? pred__19012.cljs$core$IFn$_invoke$arity$2(G__19019,G__19020) : pred__19012.call(null,G__19019,G__19020));
})())){
return (new odoyle.rules.Condition(self__.nodes,self__.bindings,G__19001,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Condition(self__.nodes,self__.bindings,self__.opts,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19001),null));
}
}
}
}));

(odoyle.rules.Condition.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$nodes,self__.nodes,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$bindings,self__.bindings,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$opts,self__.opts,null))], null),self__.__extmap));
}));

(odoyle.rules.Condition.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19001){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Condition(self__.nodes,self__.bindings,self__.opts,G__19001,self__.__extmap,self__.__hash));
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
odoyle.rules.map__GT_Condition = (function odoyle$rules$map__GT_Condition(G__19005){
var extmap__4419__auto__ = (function (){var G__19021 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19005,cljs.core.cst$kw$nodes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bindings,cljs.core.cst$kw$opts], 0));
if(cljs.core.record_QMARK_(G__19005)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19021);
} else {
return G__19021;
}
})();
return (new odoyle.rules.Condition(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(G__19005),cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(G__19005),cljs.core.cst$kw$opts.cljs$core$IFn$_invoke$arity$1(G__19005),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(odoyle.rules.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19024,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19028 = k19024;
var G__19028__$1 = (((G__19028 instanceof cljs.core.Keyword))?G__19028.fqn:null);
switch (G__19028__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19024,else__4383__auto__);

}
}));

(odoyle.rules.Rule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19029){
var vec__19030 = p__19029;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19030,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19030,(1),null);
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

(odoyle.rules.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19023){
var self__ = this;
var G__19023__$1 = this;
return (new cljs.core.RecordIter((0),G__19023__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$conditions,cljs.core.cst$kw$when_DASH_fn,cljs.core.cst$kw$then_DASH_fn,cljs.core.cst$kw$then_DASH_finally_DASH_fn], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__19033 = (function (coll__4377__auto__){
return (-1587276029 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19033(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19025,other19026){
var self__ = this;
var this19025__$1 = this;
return (((!((other19026 == null)))) && ((this19025__$1.constructor === other19026.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19025__$1.name,other19026.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19025__$1.conditions,other19026.conditions)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19025__$1.when_fn,other19026.when_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19025__$1.then_fn,other19026.then_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19025__$1.then_finally_fn,other19026.then_finally_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19025__$1.__extmap,other19026.__extmap)));
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

(odoyle.rules.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19023){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19034 = cljs.core.keyword_identical_QMARK_;
var expr__19035 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19037 = cljs.core.cst$kw$name;
var G__19038 = expr__19035;
return (pred__19034.cljs$core$IFn$_invoke$arity$2 ? pred__19034.cljs$core$IFn$_invoke$arity$2(G__19037,G__19038) : pred__19034.call(null,G__19037,G__19038));
})())){
return (new odoyle.rules.Rule(G__19023,self__.conditions,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19039 = cljs.core.cst$kw$conditions;
var G__19040 = expr__19035;
return (pred__19034.cljs$core$IFn$_invoke$arity$2 ? pred__19034.cljs$core$IFn$_invoke$arity$2(G__19039,G__19040) : pred__19034.call(null,G__19039,G__19040));
})())){
return (new odoyle.rules.Rule(self__.name,G__19023,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19041 = cljs.core.cst$kw$when_DASH_fn;
var G__19042 = expr__19035;
return (pred__19034.cljs$core$IFn$_invoke$arity$2 ? pred__19034.cljs$core$IFn$_invoke$arity$2(G__19041,G__19042) : pred__19034.call(null,G__19041,G__19042));
})())){
return (new odoyle.rules.Rule(self__.name,self__.conditions,G__19023,self__.then_fn,self__.then_finally_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19043 = cljs.core.cst$kw$then_DASH_fn;
var G__19044 = expr__19035;
return (pred__19034.cljs$core$IFn$_invoke$arity$2 ? pred__19034.cljs$core$IFn$_invoke$arity$2(G__19043,G__19044) : pred__19034.call(null,G__19043,G__19044));
})())){
return (new odoyle.rules.Rule(self__.name,self__.conditions,self__.when_fn,G__19023,self__.then_finally_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19045 = cljs.core.cst$kw$then_DASH_finally_DASH_fn;
var G__19046 = expr__19035;
return (pred__19034.cljs$core$IFn$_invoke$arity$2 ? pred__19034.cljs$core$IFn$_invoke$arity$2(G__19045,G__19046) : pred__19034.call(null,G__19045,G__19046));
})())){
return (new odoyle.rules.Rule(self__.name,self__.conditions,self__.when_fn,self__.then_fn,G__19023,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Rule(self__.name,self__.conditions,self__.when_fn,self__.then_fn,self__.then_finally_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19023),null));
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

(odoyle.rules.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19023){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Rule(self__.name,self__.conditions,self__.when_fn,self__.then_fn,self__.then_finally_fn,G__19023,self__.__extmap,self__.__hash));
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
odoyle.rules.map__GT_Rule = (function odoyle$rules$map__GT_Rule(G__19027){
var extmap__4419__auto__ = (function (){var G__19047 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19027,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$conditions,cljs.core.cst$kw$when_DASH_fn,cljs.core.cst$kw$then_DASH_fn,cljs.core.cst$kw$then_DASH_finally_DASH_fn], 0));
if(cljs.core.record_QMARK_(G__19027)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19047);
} else {
return G__19047;
}
})();
return (new odoyle.rules.Rule(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__19027),cljs.core.cst$kw$conditions.cljs$core$IFn$_invoke$arity$1(G__19027),cljs.core.cst$kw$when_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__19027),cljs.core.cst$kw$then_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__19027),cljs.core.cst$kw$then_DASH_finally_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__19027),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(odoyle.rules.Session.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19050,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19054 = k19050;
var G__19054__$1 = (((G__19054 instanceof cljs.core.Keyword))?G__19054.fqn:null);
switch (G__19054__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19050,else__4383__auto__);

}
}));

(odoyle.rules.Session.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19055){
var vec__19056 = p__19055;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19056,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19056,(1),null);
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

(odoyle.rules.Session.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19049){
var self__ = this;
var G__19049__$1 = this;
return (new cljs.core.RecordIter((0),G__19049__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$alpha_DASH_node,cljs.core.cst$kw$beta_DASH_nodes,cljs.core.cst$kw$last_DASH_id,cljs.core.cst$kw$rule_DASH_name_DASH__GT_node_DASH_id,cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name,cljs.core.cst$kw$id_DASH_attr_DASH_nodes,cljs.core.cst$kw$then_DASH_queue,cljs.core.cst$kw$then_DASH_finally_DASH_queue], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4238__auto____$1 = (function (){var fexpr__19059 = (function (coll__4377__auto__){
return (-1132320134 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19059(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(odoyle.rules.Session.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19051,other19052){
var self__ = this;
var this19051__$1 = this;
return (((!((other19052 == null)))) && ((this19051__$1.constructor === other19052.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19051__$1.alpha_node,other19052.alpha_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19051__$1.beta_nodes,other19052.beta_nodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19051__$1.last_id,other19052.last_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19051__$1.rule_name__GT_node_id,other19052.rule_name__GT_node_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19051__$1.node_id__GT_rule_name,other19052.node_id__GT_rule_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19051__$1.id_attr_nodes,other19052.id_attr_nodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19051__$1.then_queue,other19052.then_queue)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19051__$1.then_finally_queue,other19052.then_finally_queue)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19051__$1.__extmap,other19052.__extmap)));
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

(odoyle.rules.Session.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19049){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19060 = cljs.core.keyword_identical_QMARK_;
var expr__19061 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19063 = cljs.core.cst$kw$alpha_DASH_node;
var G__19064 = expr__19061;
return (pred__19060.cljs$core$IFn$_invoke$arity$2 ? pred__19060.cljs$core$IFn$_invoke$arity$2(G__19063,G__19064) : pred__19060.call(null,G__19063,G__19064));
})())){
return (new odoyle.rules.Session(G__19049,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19065 = cljs.core.cst$kw$beta_DASH_nodes;
var G__19066 = expr__19061;
return (pred__19060.cljs$core$IFn$_invoke$arity$2 ? pred__19060.cljs$core$IFn$_invoke$arity$2(G__19065,G__19066) : pred__19060.call(null,G__19065,G__19066));
})())){
return (new odoyle.rules.Session(self__.alpha_node,G__19049,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19067 = cljs.core.cst$kw$last_DASH_id;
var G__19068 = expr__19061;
return (pred__19060.cljs$core$IFn$_invoke$arity$2 ? pred__19060.cljs$core$IFn$_invoke$arity$2(G__19067,G__19068) : pred__19060.call(null,G__19067,G__19068));
})())){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,G__19049,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19069 = cljs.core.cst$kw$rule_DASH_name_DASH__GT_node_DASH_id;
var G__19070 = expr__19061;
return (pred__19060.cljs$core$IFn$_invoke$arity$2 ? pred__19060.cljs$core$IFn$_invoke$arity$2(G__19069,G__19070) : pred__19060.call(null,G__19069,G__19070));
})())){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,G__19049,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19071 = cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name;
var G__19072 = expr__19061;
return (pred__19060.cljs$core$IFn$_invoke$arity$2 ? pred__19060.cljs$core$IFn$_invoke$arity$2(G__19071,G__19072) : pred__19060.call(null,G__19071,G__19072));
})())){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,G__19049,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19073 = cljs.core.cst$kw$id_DASH_attr_DASH_nodes;
var G__19074 = expr__19061;
return (pred__19060.cljs$core$IFn$_invoke$arity$2 ? pred__19060.cljs$core$IFn$_invoke$arity$2(G__19073,G__19074) : pred__19060.call(null,G__19073,G__19074));
})())){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,G__19049,self__.then_queue,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19075 = cljs.core.cst$kw$then_DASH_queue;
var G__19076 = expr__19061;
return (pred__19060.cljs$core$IFn$_invoke$arity$2 ? pred__19060.cljs$core$IFn$_invoke$arity$2(G__19075,G__19076) : pred__19060.call(null,G__19075,G__19076));
})())){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,G__19049,self__.then_finally_queue,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19077 = cljs.core.cst$kw$then_DASH_finally_DASH_queue;
var G__19078 = expr__19061;
return (pred__19060.cljs$core$IFn$_invoke$arity$2 ? pred__19060.cljs$core$IFn$_invoke$arity$2(G__19077,G__19078) : pred__19060.call(null,G__19077,G__19078));
})())){
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,G__19049,self__.__meta,self__.__extmap,null));
} else {
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19049),null));
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

(odoyle.rules.Session.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19049){
var self__ = this;
var this__4379__auto____$1 = this;
return (new odoyle.rules.Session(self__.alpha_node,self__.beta_nodes,self__.last_id,self__.rule_name__GT_node_id,self__.node_id__GT_rule_name,self__.id_attr_nodes,self__.then_queue,self__.then_finally_queue,G__19049,self__.__extmap,self__.__hash));
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
odoyle.rules.map__GT_Session = (function odoyle$rules$map__GT_Session(G__19053){
var extmap__4419__auto__ = (function (){var G__19079 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19053,cljs.core.cst$kw$alpha_DASH_node,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$beta_DASH_nodes,cljs.core.cst$kw$last_DASH_id,cljs.core.cst$kw$rule_DASH_name_DASH__GT_node_DASH_id,cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name,cljs.core.cst$kw$id_DASH_attr_DASH_nodes,cljs.core.cst$kw$then_DASH_queue,cljs.core.cst$kw$then_DASH_finally_DASH_queue], 0));
if(cljs.core.record_QMARK_(G__19053)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19079);
} else {
return G__19079;
}
})();
return (new odoyle.rules.Session(cljs.core.cst$kw$alpha_DASH_node.cljs$core$IFn$_invoke$arity$1(G__19053),cljs.core.cst$kw$beta_DASH_nodes.cljs$core$IFn$_invoke$arity$1(G__19053),cljs.core.cst$kw$last_DASH_id.cljs$core$IFn$_invoke$arity$1(G__19053),cljs.core.cst$kw$rule_DASH_name_DASH__GT_node_DASH_id.cljs$core$IFn$_invoke$arity$1(G__19053),cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name.cljs$core$IFn$_invoke$arity$1(G__19053),cljs.core.cst$kw$id_DASH_attr_DASH_nodes.cljs$core$IFn$_invoke$arity$1(G__19053),cljs.core.cst$kw$then_DASH_queue.cljs$core$IFn$_invoke$arity$1(G__19053),cljs.core.cst$kw$then_DASH_finally_DASH_queue.cljs$core$IFn$_invoke$arity$1(G__19053),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

odoyle.rules.add_to_condition = (function odoyle$rules$add_to_condition(condition,field,p__19081){
var vec__19082 = p__19081;
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19082,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19082,(1),null);
var G__19085 = kind;
var G__19085__$1 = (((G__19085 instanceof cljs.core.Keyword))?G__19085.fqn:null);
switch (G__19085__$1) {
case "binding":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(condition,cljs.core.cst$kw$bindings,cljs.core.conj,odoyle.rules.__GT_Binding(field,(new cljs.core.List(null,cljs.core.cst$sym$quote,(new cljs.core.List(null,value,null,(1),null)),(2),null)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "value":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(condition,cljs.core.cst$kw$nodes,cljs.core.conj,odoyle.rules.map__GT_AlphaNode(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$test_DASH_field,field,cljs.core.cst$kw$test_DASH_value,value,cljs.core.cst$kw$children,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$successors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$facts,cljs.core.PersistentArrayMap.EMPTY], null)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19085__$1)].join('')));

}
});
odoyle.rules.__GT_condition = (function odoyle$rules$__GT_condition(p__19087){
var map__19088 = p__19087;
var map__19088__$1 = (((((!((map__19088 == null))))?(((((map__19088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19088):map__19088);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19088__$1,cljs.core.cst$kw$id);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19088__$1,cljs.core.cst$kw$attr);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19088__$1,cljs.core.cst$kw$value);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19088__$1,cljs.core.cst$kw$opts);
return odoyle.rules.add_to_condition(odoyle.rules.add_to_condition(odoyle.rules.add_to_condition(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bindings,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$nodes,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$opts,opts], null),cljs.core.cst$kw$id,id),cljs.core.cst$kw$attr,attr),cljs.core.cst$kw$value,value);
});
odoyle.rules.__GT_rule = (function odoyle$rules$__GT_rule(p__19090){
var vec__19091 = p__19090;
var rule_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19091,(0),null);
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19091,(1),null);
var map__19094 = rule;
var map__19094__$1 = (((((!((map__19094 == null))))?(((((map__19094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19094):map__19094);
var what_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19094__$1,cljs.core.cst$kw$what_DASH_block);
var when_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19094__$1,cljs.core.cst$kw$when_DASH_block);
var then_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19094__$1,cljs.core.cst$kw$then_DASH_block);
var then_finally_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19094__$1,cljs.core.cst$kw$then_DASH_finally_DASH_block);
var conditions = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(odoyle.rules.__GT_condition,cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(what_block));
var when_body = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(when_block);
var when_body__$1 = (((cljs.core.count(when_body) > (1)))?cljs.core.cons(cljs.core.cst$sym$and,when_body):cljs.core.first(when_body));
var then_body = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(then_block);
var then_finally_body = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(then_finally_block);
var syms = cljs.core.vec(cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.simple_symbol_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sym,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$bindings,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conditions], 0)))))));
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$rule_DASH_name,rule_name,cljs.core.cst$kw$fn_DASH_name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.namespace(rule_name),"-",cljs.core.name(rule_name)].join(''),".","-")),cljs.core.cst$kw$conditions,conditions,cljs.core.cst$kw$arg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,syms], null),cljs.core.cst$kw$when_DASH_body,when_body__$1,cljs.core.cst$kw$then_DASH_body,then_body,cljs.core.cst$kw$then_DASH_finally_DASH_body,then_finally_body], null);
});
odoyle.rules.add_alpha_node = (function odoyle$rules$add_alpha_node(node,new_nodes,_STAR_alpha_node_path){
var vec__19096 = new_nodes;
var seq__19097 = cljs.core.seq(vec__19096);
var first__19098 = cljs.core.first(seq__19097);
var seq__19097__$1 = cljs.core.next(seq__19097);
var new_node = first__19098;
var other_nodes = seq__19097__$1;
if(cljs.core.truth_(new_node)){
var temp__5733__auto__ = cljs.core.some((function (p__19099){
var vec__19100 = p__19099;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19100,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19100,(1),null);
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
var G__19103 = parent_id;
node_id = G__19103;
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19104 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(session__$2,alpha_node_path,cljs.core.assoc,cljs.core.cst$kw$successors,successor_ids__$1);
if(cljs.core.truth_(parent_mem_node_id)){
return cljs.core.assoc_in(G__19104,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,parent_mem_node_id,cljs.core.cst$kw$child_DASH_id], null),join_node_id);
} else {
return G__19104;
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
var G__19105 = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(cond_var);
var G__19105__$1 = (((G__19105 instanceof cljs.core.Keyword))?G__19105.fqn:null);
switch (G__19105__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19105__$1)].join('')));

}
}),vars,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(condition));
});
odoyle.rules.get_id_attr = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.cst$kw$attr);
odoyle.rules.left_activate_join_node = (function odoyle$rules$left_activate_join_node(var_args){
var G__19108 = arguments.length;
switch (G__19108) {
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
var temp__5733__auto__ = (function (){var G__19109 = join_node;
var G__19109__$1 = (((G__19109 == null))?null:cljs.core.cst$kw$id_DASH_key.cljs$core$IFn$_invoke$arity$1(G__19109));
if((G__19109__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,G__19109__$1);
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
var G__19110 = session;
var G__19111 = cljs.core.cst$kw$child_DASH_id.cljs$core$IFn$_invoke$arity$1(join_node);
var G__19112 = id_PLUS_attrs__$1;
var G__19113 = new_vars;
var G__19114 = new_token;
var G__19115 = new_QMARK_;
return (odoyle.rules.left_activate_memory_node.cljs$core$IFn$_invoke$arity$6 ? odoyle.rules.left_activate_memory_node.cljs$core$IFn$_invoke$arity$6(G__19110,G__19111,G__19112,G__19113,G__19114,G__19115) : odoyle.rules.left_activate_memory_node.call(null,G__19110,G__19111,G__19112,G__19113,G__19114,G__19115));
} else {
return session;
}
}));

(odoyle.rules.left_activate_join_node.cljs$lang$maxFixedArity = 6);

odoyle.rules._STAR_triggered_node_ids_STAR_ = null;
odoyle.rules.left_activate_memory_node = (function odoyle$rules$left_activate_memory_node(session,node_id,id_PLUS_attrs,vars,p__19117,new_QMARK_){
var map__19118 = p__19117;
var map__19118__$1 = (((((!((map__19118 == null))))?(((((map__19118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19118):map__19118);
var token = map__19118__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19118__$1,cljs.core.cst$kw$kind);
var node_path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,node_id], null);
var node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session,node_path);
var session__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = new_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = (function (){var fexpr__19122 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$insert,null,cljs.core.cst$kw$update,null], null), null);
return (fexpr__19122.cljs$core$IFn$_invoke$arity$1 ? fexpr__19122.cljs$core$IFn$_invoke$arity$1(kind) : fexpr__19122.call(null,kind));
})();
if(cljs.core.truth_(and__4115__auto____$1)){
var temp__5733__auto__ = cljs.core.cst$kw$then.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$opts.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$condition.cljs$core$IFn$_invoke$arity$1(node)));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__19123 = temp__5733__auto__;
var then_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19123,(0),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19123,(1),null);
var G__19126 = then_type;
var G__19126__$1 = (((G__19126 instanceof cljs.core.Keyword))?G__19126.fqn:null);
switch (G__19126__$1) {
case "bool":
return then;

break;
case "func":
var temp__5733__auto____$1 = cljs.core.cst$kw$old_DASH_fact.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(temp__5733__auto____$1)){
var old_fact = temp__5733__auto____$1;
var G__19127 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fact.cljs$core$IFn$_invoke$arity$1(token));
var G__19128 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(old_fact);
return (then.cljs$core$IFn$_invoke$arity$2 ? then.cljs$core$IFn$_invoke$arity$2(G__19127,G__19128) : then.call(null,G__19127,G__19128));
} else {
return true;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19126__$1)].join('')));

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
var fexpr__19131 = cljs.core.cst$kw$when_DASH_fn.cljs$core$IFn$_invoke$arity$1(node__$1);
return (fexpr__19131.cljs$core$IFn$_invoke$arity$1 ? fexpr__19131.cljs$core$IFn$_invoke$arity$1(vars) : fexpr__19131.call(null,vars));
}
}
})());
var id_PLUS_attr = cljs.core.peek(id_PLUS_attrs);
var session__$2 = (function (){var G__19132 = kind;
var G__19132__$1 = (((G__19132 instanceof cljs.core.Keyword))?G__19132.fqn:null);
switch (G__19132__$1) {
case "insert":
case "update":
var $ = session__$1;
var $__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5($,node_path,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$matches,id_PLUS_attrs], null),odoyle.rules.__GT_Match(vars,enabled_QMARK_));
var $__$2 = (cljs.core.truth_(((leaf_node_QMARK_)?cljs.core.cst$kw$trigger.cljs$core$IFn$_invoke$arity$1(node__$1):false))?(function (){var G__19133 = $__$1;
var G__19133__$1 = (cljs.core.truth_(cljs.core.cst$kw$then_DASH_fn.cljs$core$IFn$_invoke$arity$1(node__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__19133,cljs.core.cst$kw$then_DASH_queue,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id,id_PLUS_attrs], null)):G__19133);
if(cljs.core.truth_(cljs.core.cst$kw$then_DASH_finally_DASH_fn.cljs$core$IFn$_invoke$arity$1(node__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__19133__$1,cljs.core.cst$kw$then_DASH_finally_DASH_queue,cljs.core.conj,node_id);
} else {
return G__19133__$1;
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19132__$1)].join('')));

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
odoyle.rules.right_activate_join_node = (function odoyle$rules$right_activate_join_node(session,node_id,id_PLUS_attr,p__19136){
var map__19137 = p__19136;
var map__19137__$1 = (((((!((map__19137 == null))))?(((((map__19137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19137):map__19137);
var token = map__19137__$1;
var fact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,cljs.core.cst$kw$fact);
var map__19139 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,node_id], null));
var map__19139__$1 = (((((!((map__19139 == null))))?(((((map__19139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19139):map__19139);
var node = map__19139__$1;
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19139__$1,cljs.core.cst$kw$condition);
var child_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19139__$1,cljs.core.cst$kw$child_DASH_id);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19139__$1,cljs.core.cst$kw$id_DASH_key);
var temp__5733__auto__ = cljs.core.cst$kw$parent_DASH_id.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5733__auto__)){
var parent_id = temp__5733__auto__;
return cljs.core.reduce_kv((function (session__$1,id_PLUS_attrs,p__19141){
var map__19142 = p__19141;
var map__19142__$1 = (((((!((map__19142 == null))))?(((((map__19142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19142):map__19142);
var existing_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19142__$1,cljs.core.cst$kw$vars);
if(cljs.core.truth_((function (){var G__19144 = id_key;
var G__19144__$1 = (((G__19144 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(existing_vars,G__19144));
if((G__19144__$1 == null)){
return null;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(fact),G__19144__$1);
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
odoyle.rules.right_activate_alpha_node = (function odoyle$rules$right_activate_alpha_node(session,node_path,p__19145){
var map__19146 = p__19145;
var map__19146__$1 = (((((!((map__19146 == null))))?(((((map__19146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19146):map__19146);
var token = map__19146__$1;
var fact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19146__$1,cljs.core.cst$kw$fact);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19146__$1,cljs.core.cst$kw$kind);
var old_fact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19146__$1,cljs.core.cst$kw$old_DASH_fact);
var vec__19148 = (odoyle.rules.get_id_attr.cljs$core$IFn$_invoke$arity$1 ? odoyle.rules.get_id_attr.cljs$core$IFn$_invoke$arity$1(fact) : odoyle.rules.get_id_attr.call(null,fact));
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19148,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19148,(1),null);
var id_PLUS_attr = vec__19148;
var $ = session;
var $__$1 = (function (){var G__19151 = kind;
var G__19151__$1 = (((G__19151 instanceof cljs.core.Keyword))?G__19151.fqn:null);
switch (G__19151__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19151__$1)].join('')));

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
var test_value = (function (){var G__19153 = cljs.core.cst$kw$test_DASH_field.cljs$core$IFn$_invoke$arity$1(alpha_node);
var G__19153__$1 = (((G__19153 instanceof cljs.core.Keyword))?G__19153.fqn:null);
switch (G__19153__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19153__$1)].join('')));

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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m2,(function (){var fexpr__19156 = cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name.cljs$core$IFn$_invoke$arity$1(session);
return (fexpr__19156.cljs$core$IFn$_invoke$arity$1 ? fexpr__19156.cljs$core$IFn$_invoke$arity$1(node_id) : fexpr__19156.call(null,node_id));
})(),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m3,triggered_node_id){
var rule_name = (function (){var fexpr__19157 = cljs.core.cst$kw$node_DASH_id_DASH__GT_rule_DASH_name.cljs$core$IFn$_invoke$arity$1(session);
return (fexpr__19157.cljs$core$IFn$_invoke$arity$1 ? fexpr__19157.cljs$core$IFn$_invoke$arity$1(triggered_node_id) : fexpr__19157.call(null,triggered_node_id));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m3,rule_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,rule_name));
}),cljs.core.PersistentArrayMap.EMPTY,triggered_node_ids));
}),cljs.core.PersistentArrayMap.EMPTY,node_id__GT_triggered_node_ids);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse(executed_nodes));
var find_cycles = (function odoyle$rules$throw_recursion_limit_$_find_cycles(cycles,p__19158,cyc){
var vec__19159 = p__19158;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19159,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19159,(1),null);
if(cljs.core.contains_QMARK_(cljs.core.set(cyc),k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cycles,cljs.core.vec(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__19155_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__19155_SHARP_,k);
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
cljs.spec.alpha.def_impl(cljs.core.cst$sym$odoyle$rules_SLASH_fire_DASH_rules,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_recursion_DASH_limit], null))))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_recursion_DASH_limit], null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$opts], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.spec.alpha.maybe_impl(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_recursion_DASH_limit], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__19162){
return cljs.core.map_QMARK_(G__19162);
})], null),(function (G__19162){
return cljs.core.map_QMARK_(G__19162);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$recursion_DASH_limit], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_recursion_DASH_limit], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),null])),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_recursion_DASH_limit], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_recursion_DASH_limit], null)))], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_recursion_DASH_limit], null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Fires :then and :then-finally blocks for any rules whose matches have been updated.
 *   The opts map may contain:
 *   
 *   :recursion-limit  -  Throws an error if rules recursively trigger this many times.
 *                     The default is 16. Pass nil to disable the limit entirely.
 */
odoyle.rules.fire_rules = (function odoyle$rules$fire_rules(var_args){
var G__19165 = arguments.length;
switch (G__19165) {
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
var _STAR_triggered_node_ids_STAR__orig_val__19166 = odoyle.rules._STAR_triggered_node_ids_STAR_;
var _STAR_triggered_node_ids_STAR__temp_val__19167 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(odoyle.rules._STAR_triggered_node_ids_STAR_ = _STAR_triggered_node_ids_STAR__temp_val__19167);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return _STAR_node_id__GT_triggered_node_ids.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$3(_STAR_node_id__GT_triggered_node_ids.cljs$core$IDeref$_deref$arity$1(null),node_id,(function (p1__19163_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = p1__19163_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),cljs.core.deref(odoyle.rules._STAR_triggered_node_ids_STAR_));
})));
}finally {(odoyle.rules._STAR_triggered_node_ids_STAR_ = _STAR_triggered_node_ids_STAR__orig_val__19166);
}});
var session__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(session,cljs.core.cst$kw$then_DASH_queue,cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$then_DASH_finally_DASH_queue,cljs.core.PersistentHashSet.EMPTY], 0));
var session__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (session__$2,node_id){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(session__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$beta_DASH_nodes,node_id], null),cljs.core.assoc,cljs.core.cst$kw$trigger,false);
}),session__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(then_finally_queue,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,then_queue)));
var beta_nodes = cljs.core.cst$kw$beta_DASH_nodes.cljs$core$IFn$_invoke$arity$1(session__$2);
var session__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (session__$3,p__19168){
var vec__19169 = p__19168;
var node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19169,(0),null);
var id_PLUS_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19169,(1),null);
var map__19172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(beta_nodes,node_id);
var map__19172__$1 = (((((!((map__19172 == null))))?(((((map__19172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19172):map__19172);
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19172__$1,cljs.core.cst$kw$matches);
var then_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19172__$1,cljs.core.cst$kw$then_DASH_fn);
var or__4126__auto__ = (function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(matches,id_PLUS_attrs);
if(cljs.core.truth_(temp__5735__auto__)){
var map__19182 = temp__5735__auto__;
var map__19182__$1 = (((((!((map__19182 == null))))?(((((map__19182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19182):map__19182);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19182__$1,cljs.core.cst$kw$vars);
var enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19182__$1,cljs.core.cst$kw$enabled);
if(cljs.core.truth_(enabled)){
var _STAR_session_STAR__orig_val__19184 = odoyle.rules._STAR_session_STAR_;
var _STAR_mutable_session_STAR__orig_val__19185 = odoyle.rules._STAR_mutable_session_STAR_;
var _STAR_match_STAR__orig_val__19186 = odoyle.rules._STAR_match_STAR_;
var _STAR_session_STAR__temp_val__19187 = session__$3;
var _STAR_mutable_session_STAR__temp_val__19188 = cljs.core.volatile_BANG_(session__$3);
var _STAR_match_STAR__temp_val__19189 = vars;
(odoyle.rules._STAR_session_STAR_ = _STAR_session_STAR__temp_val__19187);

(odoyle.rules._STAR_mutable_session_STAR_ = _STAR_mutable_session_STAR__temp_val__19188);

(odoyle.rules._STAR_match_STAR_ = _STAR_match_STAR__temp_val__19189);

try{execute_fn((function (){
return (then_fn.cljs$core$IFn$_invoke$arity$1 ? then_fn.cljs$core$IFn$_invoke$arity$1(vars) : then_fn.call(null,vars));
}),node_id);

return cljs.core.deref(odoyle.rules._STAR_mutable_session_STAR_);
}finally {(odoyle.rules._STAR_match_STAR_ = _STAR_match_STAR__orig_val__19186);

(odoyle.rules._STAR_mutable_session_STAR_ = _STAR_mutable_session_STAR__orig_val__19185);

(odoyle.rules._STAR_session_STAR_ = _STAR_session_STAR__orig_val__19184);
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
var map__19190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(beta_nodes,node_id);
var map__19190__$1 = (((((!((map__19190 == null))))?(((((map__19190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19190):map__19190);
var then_finally_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19190__$1,cljs.core.cst$kw$then_DASH_finally_DASH_fn);
var _STAR_session_STAR__orig_val__19192 = odoyle.rules._STAR_session_STAR_;
var _STAR_mutable_session_STAR__orig_val__19193 = odoyle.rules._STAR_mutable_session_STAR_;
var _STAR_session_STAR__temp_val__19194 = session__$4;
var _STAR_mutable_session_STAR__temp_val__19195 = cljs.core.volatile_BANG_(session__$4);
(odoyle.rules._STAR_session_STAR_ = _STAR_session_STAR__temp_val__19194);

(odoyle.rules._STAR_mutable_session_STAR_ = _STAR_mutable_session_STAR__temp_val__19195);

try{execute_fn(then_finally_fn,node_id);

return cljs.core.deref(odoyle.rules._STAR_mutable_session_STAR_);
}finally {(odoyle.rules._STAR_mutable_session_STAR_ = _STAR_mutable_session_STAR__orig_val__19193);

(odoyle.rules._STAR_session_STAR_ = _STAR_session_STAR__orig_val__19192);
}}),session__$3,then_finally_queue);
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$recursion_DASH_limit,(16));
if(cljs.core.truth_(temp__5733__auto__)){
var limit = temp__5733__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),odoyle.rules._STAR_recur_countdown_STAR_)){
return odoyle.rules.throw_recursion_limit(session__$4,limit,odoyle.rules._STAR_executed_nodes_STAR_);
} else {
var _STAR_recur_countdown_STAR__orig_val__19196 = odoyle.rules._STAR_recur_countdown_STAR_;
var _STAR_executed_nodes_STAR__orig_val__19197 = odoyle.rules._STAR_executed_nodes_STAR_;
var _STAR_recur_countdown_STAR__temp_val__19198 = (((odoyle.rules._STAR_recur_countdown_STAR_ == null))?limit:(odoyle.rules._STAR_recur_countdown_STAR_ - (1)));
var _STAR_executed_nodes_STAR__temp_val__19199 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = odoyle.rules._STAR_executed_nodes_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.deref(_STAR_node_id__GT_triggered_node_ids));
(odoyle.rules._STAR_recur_countdown_STAR_ = _STAR_recur_countdown_STAR__temp_val__19198);

(odoyle.rules._STAR_executed_nodes_STAR_ = _STAR_executed_nodes_STAR__temp_val__19199);

try{return odoyle.rules.fire_rules.cljs$core$IFn$_invoke$arity$2(session__$4,opts);
}finally {(odoyle.rules._STAR_executed_nodes_STAR_ = _STAR_executed_nodes_STAR__orig_val__19197);

(odoyle.rules._STAR_recur_countdown_STAR_ = _STAR_recur_countdown_STAR__orig_val__19196);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(join_node,cljs.core.cst$kw$id_DASH_key,cljs.core.some((function (p__19201){
var map__19202 = p__19201;
var map__19202__$1 = (((((!((map__19202 == null))))?(((((map__19202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19202):map__19202);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19202__$1,cljs.core.cst$kw$field);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19202__$1,cljs.core.cst$kw$key);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,field)) && (cljs.core.contains_QMARK_(cljs.core.cst$kw$joins.cljs$core$IFn$_invoke$arity$1(bindings),key)))){
return key;
} else {
return null;
}
}),cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$condition.cljs$core$IFn$_invoke$arity$1(join_node))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$disable_DASH_fast_DASH_updates,cljs.core.contains_QMARK_(cljs.core.cst$kw$joins.cljs$core$IFn$_invoke$arity$1(bindings),cljs.core.some((function (p__19204){
var map__19205 = p__19204;
var map__19205__$1 = (((((!((map__19205 == null))))?(((((map__19205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19205):map__19205);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19205__$1,cljs.core.cst$kw$field);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19205__$1,cljs.core.cst$kw$key);
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
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_,cljs.core.cst$sym$odoyle$rules_SLASH_Session,cljs.core.cst$sym$_PERCENT_)),(function (p1__19207_SHARP_){
return (p1__19207_SHARP_ instanceof odoyle.rules.Session);
}));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_insert_DASH_args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$single_DASH_combo,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$fact,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)),cljs.core.cst$kw$batch,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr_DASH__GT_value,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)),cljs.core.cst$kw$single,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$value,cljs.core.cst$kw$odoyle$rules_SLASH_value)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$single_DASH_combo,cljs.core.cst$kw$batch,cljs.core.cst$kw$single], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$fact,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr_DASH__GT_value,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$value,cljs.core.cst$kw$odoyle$rules_SLASH_value)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$fact], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$id,cljs.core.cst$kw$attr_DASH__GT_value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__19208){
return cljs.core.map_QMARK_(G__19208);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__16780__auto__,v__16781__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__16781__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)], null),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$id,cljs.core.cst$kw$attr,cljs.core.cst$kw$value], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_session,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null))], null),null));
odoyle.rules.check_insert_spec = (function odoyle$rules$check_insert_spec(var_args){
var G__19210 = arguments.length;
switch (G__19210) {
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

(odoyle.rules.check_insert_spec.cljs$core$IFn$_invoke$arity$1 = (function (p__19211){
var vec__19212 = p__19211;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19212,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19212,(1),null);
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

odoyle.rules.insert_conformer = cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$kind,cljs.core.cst$sym$args,cljs.core.cst$kw$as,cljs.core.cst$sym$parsed_DASH_args], null)], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_case,cljs.core.cst$sym$kind,cljs.core.cst$kw$single_DASH_combo,cljs.core.list(cljs.core.cst$sym$odoyle$rules_SLASH_check_DASH_insert_DASH_spec,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_nth,cljs.core.list(cljs.core.cst$kw$fact,cljs.core.cst$sym$args),(1)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_nth,cljs.core.list(cljs.core.cst$kw$fact,cljs.core.cst$sym$args),(2))),cljs.core.cst$kw$batch,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_run_BANG_,cljs.core.cst$sym$odoyle$rules_SLASH_check_DASH_insert_DASH_spec,cljs.core.list(cljs.core.cst$kw$attr_DASH__GT_value,cljs.core.cst$sym$args)),cljs.core.cst$kw$single,cljs.core.list(cljs.core.cst$sym$odoyle$rules_SLASH_check_DASH_insert_DASH_spec,cljs.core.list(cljs.core.cst$kw$attr,cljs.core.cst$sym$args),cljs.core.list(cljs.core.cst$kw$value,cljs.core.cst$sym$args))),cljs.core.cst$sym$parsed_DASH_args)),(function (p__19216){
var vec__19217 = p__19216;
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19217,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19217,(1),null);
var parsed_args = vec__19217;
var G__19220_19221 = kind;
var G__19220_19222__$1 = (((G__19220_19221 instanceof cljs.core.Keyword))?G__19220_19221.fqn:null);
switch (G__19220_19222__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19220_19222__$1)].join('')));

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
var G__19225 = arguments.length;
switch (G__19225) {
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

(odoyle.rules.insert.cljs$core$IFn$_invoke$arity$2 = (function (session,p__19226){
var vec__19227 = p__19226;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19227,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19227,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19227,(2),null);
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

cljs.spec.alpha.def_impl(cljs.core.cst$kw$odoyle$rules_SLASH_insert_BANG__DASH_args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$batch,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr_DASH__GT_value,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)),cljs.core.cst$kw$single,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$value,cljs.core.cst$kw$odoyle$rules_SLASH_value)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$batch,cljs.core.cst$kw$single], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr_DASH__GT_value,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value)),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.core.cst$kw$attr,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$value,cljs.core.cst$kw$odoyle$rules_SLASH_value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$attr_DASH__GT_value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_id,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$odoyle$rules_SLASH_attr,cljs.core.cst$kw$odoyle$rules_SLASH_value], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__19231){
return cljs.core.map_QMARK_(G__19231);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__16780__auto__,v__16781__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__16781__auto__,(0));
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
var G__19233 = arguments.length;
switch (G__19233) {
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
return cljs.core.run_BANG_((function (p__19234){
var vec__19235 = p__19234;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19235,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19235,(1),null);
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
var G__19240 = arguments.length;
switch (G__19240) {
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__19241){
var vec__19242 = p__19241;
var vec__19245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19242,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19245,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19245,(1),null);
var nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19242,(1),null);
var G__19249 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(session,cljs.core.first(nodes)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$facts,id,attr], null));
var fexpr__19248 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$id,cljs.core.cst$kw$attr,cljs.core.cst$kw$value);
return (fexpr__19248.cljs$core$IFn$_invoke$arity$1 ? fexpr__19248.cljs$core$IFn$_invoke$arity$1(G__19249) : fexpr__19248.call(null,G__19249));
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
return cljs.core.reduce_kv((function (v,_,p__19250){
var map__19251 = p__19250;
var map__19251__$1 = (((((!((map__19251 == null))))?(((((map__19251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19251):map__19251);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19251__$1,cljs.core.cst$kw$vars);
var enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19251__$1,cljs.core.cst$kw$enabled);
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
