// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('expound.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('expound.problems');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('expound.printer');
goog.require('expound.util');
goog.require('expound.ansi');
if((typeof expound !== 'undefined') && (typeof expound.alpha !== 'undefined') && (typeof expound.alpha.registry_ref !== 'undefined')){
} else {
expound.alpha.registry_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$alpha_SLASH_singleton,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$count,(1)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$any_QMARK_,cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__17923){
return ((cljs.core.coll_QMARK_(G__17923)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.bounded_count((1),G__17923))));
}),cljs.core.cst$kw$count,(1),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$count,(1))], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$spec_SLASH_spec,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$spec_SLASH_specs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$expound$spec_SLASH_spec),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$expound$spec_SLASH_spec,cljs.core.cst$kw$expound$spec_SLASH_spec,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__17924){
return cljs.core.coll_QMARK_(G__17924);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$expound$spec_SLASH_spec)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$spec$problem_SLASH_via,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$expound$spec_SLASH_spec,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$expound$spec_SLASH_spec,cljs.core.cst$kw$expound$spec_SLASH_spec,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__17925){
return cljs.core.vector_QMARK_(G__17925);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$expound$spec_SLASH_spec,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$spec_SLASH_problem,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$spec$problem_SLASH_via], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$spec$problem_SLASH_via], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__17926){
return cljs.core.map_QMARK_(G__17926);
}),(function (G__17926){
return cljs.core.contains_QMARK_(G__17926,cljs.core.cst$kw$via);
})], null),(function (G__17926){
return ((cljs.core.map_QMARK_(G__17926)) && (cljs.core.contains_QMARK_(G__17926,cljs.core.cst$kw$via)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$spec$problem_SLASH_via], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$via], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$via))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$spec_SLASH_problems,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$expound$spec_SLASH_problem),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$expound$spec_SLASH_problem,cljs.core.cst$kw$expound$spec_SLASH_problem,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__17927){
return cljs.core.coll_QMARK_(G__17927);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$expound$spec_SLASH_problem)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$printer_SLASH_show_DASH_valid_DASH_values_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$printer_SLASH_value_DASH_str_DASH_fn,cljs.core.cst$sym$cljs$core_SLASH_ifn_QMARK_,cljs.core.ifn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$printer_SLASH_print_DASH_specs_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$printer_SLASH_theme,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$figwheel_DASH_theme,"null",cljs.core.cst$kw$none,"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$figwheel_DASH_theme,null,cljs.core.cst$kw$none,null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$printer_SLASH_opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$printer_SLASH_show_DASH_valid_DASH_values_QMARK_,cljs.core.cst$kw$expound$printer_SLASH_value_DASH_str_DASH_fn,cljs.core.cst$kw$expound$printer_SLASH_print_DASH_specs_QMARK_,cljs.core.cst$kw$expound$printer_SLASH_theme], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$printer_SLASH_show_DASH_valid_DASH_values_QMARK_,cljs.core.cst$kw$expound$printer_SLASH_value_DASH_str_DASH_fn,cljs.core.cst$kw$expound$printer_SLASH_print_DASH_specs_QMARK_,cljs.core.cst$kw$expound$printer_SLASH_theme], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__17928){
return cljs.core.map_QMARK_(G__17928);
})], null),(function (G__17928){
return cljs.core.map_QMARK_(G__17928);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_valid_DASH_values_QMARK_,cljs.core.cst$kw$value_DASH_str_DASH_fn,cljs.core.cst$kw$print_DASH_specs_QMARK_,cljs.core.cst$kw$theme], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$printer_SLASH_show_DASH_valid_DASH_values_QMARK_,cljs.core.cst$kw$expound$printer_SLASH_value_DASH_str_DASH_fn,cljs.core.cst$kw$expound$printer_SLASH_print_DASH_specs_QMARK_,cljs.core.cst$kw$expound$printer_SLASH_theme], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$spec_SLASH_spec,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$set,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_,cljs.core.cst$kw$pred,cljs.core.cst$sym$cljs$core_SLASH_ifn_QMARK_,cljs.core.cst$kw$kw,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$spec,cljs.core.cst$sym$cljs$spec$alpha_SLASH_spec_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$pred,cljs.core.cst$kw$kw,cljs.core.cst$kw$spec], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_ifn_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$sym$cljs$spec$alpha_SLASH_spec_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,cljs.core.ifn_QMARK_,cljs.core.qualified_keyword_QMARK_,cljs.spec.alpha.spec_QMARK_], null),null));
expound.alpha.figwheel_theme = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$good_DASH_key,cljs.core.cst$kw$warning_DASH_key,cljs.core.cst$kw$correct_DASH_key,cljs.core.cst$kw$highlight,cljs.core.cst$kw$focus_DASH_path,cljs.core.cst$kw$bad_DASH_value,cljs.core.cst$kw$footer,cljs.core.cst$kw$header,cljs.core.cst$kw$good_DASH_pred,cljs.core.cst$kw$good,cljs.core.cst$kw$focus_DASH_key,cljs.core.cst$kw$pointer,cljs.core.cst$kw$bad,cljs.core.cst$kw$error_DASH_key,cljs.core.cst$kw$none,cljs.core.cst$kw$message],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$green], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bold], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$green], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bold], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$magenta], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$red], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cyan], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cyan], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$green], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$green], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bold], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$magenta], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$red], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$red], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$magenta], null)]);
expound.alpha.check_header_size = (45);
expound.alpha.header_size = (35);
expound.alpha.section_size = (25);
expound.alpha._STAR_value_str_fn_STAR_ = (function expound$alpha$_STAR_value_str_fn_STAR_(_,___$1,___$2,___$3){
return "NOT IMPLEMENTED";
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$alpha_SLASH_value_DASH_in_DASH_context,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$opts,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$spec_DASH_name,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$args,"null",cljs.core.cst$kw$ret,"null",cljs.core.cst$kw$fn,"null",cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred,"null"], null), null)),cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$path,cljs.core.cst$kw$expound_SLASH_path,cljs.core.cst$kw$value,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$opts,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$spec_DASH_name,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$args,"null",cljs.core.cst$kw$ret,"null",cljs.core.cst$kw$fn,"null",cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred,"null"], null), null)),cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$path,cljs.core.cst$kw$expound_SLASH_path,cljs.core.cst$kw$value,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$opts,cljs.core.cst$kw$spec_DASH_name,cljs.core.cst$kw$form,cljs.core.cst$kw$path,cljs.core.cst$kw$value], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.spec.alpha.nilable_impl(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$args,"null",cljs.core.cst$kw$ret,"null",cljs.core.cst$kw$fn,"null",cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred,"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$ret,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred,null], null), null),null),cljs.core.any_QMARK_,cljs.core.cst$kw$expound_SLASH_path,cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$args,"null",cljs.core.cst$kw$ret,"null",cljs.core.cst$kw$fn,"null",cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred,"null"], null), null)),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$expound_SLASH_path,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$opts,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$spec_DASH_name,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$args,"null",cljs.core.cst$kw$ret,"null",cljs.core.cst$kw$fn,"null",cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred,"null"], null), null)),cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$path,cljs.core.cst$kw$expound_SLASH_path,cljs.core.cst$kw$value,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,null,null,null));
/**
 * Given a form and a path into that form, returns a string
 * that helps the user understand where that path is located
 * in the form
 */
expound.alpha.value_in_context = (function expound$alpha$value_in_context(opts,spec_name,form,path,value){
var _STAR_print_namespace_maps_STAR__orig_val__17929 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_namespace_maps_STAR__temp_val__17930 = false;
(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17930);

try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,spec_name)){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bad_DASH_value], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,value)){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.pprint_str(value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bad_DASH_value], 0)));
} else {
if(cljs.core.truth_(path)){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.printer.highlighted_value(opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$expound_SLASH_form,form,cljs.core.cst$kw$expound_SLASH_in,path,cljs.core.cst$kw$expound_SLASH_value,value], null)));
} else {
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("Part of the value\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bad_DASH_value], 0)))], 0));

}
}
}
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17929);
}});
expound.alpha.spec_str = (function expound$alpha$spec_str(spec){
if((spec instanceof cljs.core.Keyword)){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s:\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec,expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.printer.pprint_str(cljs.spec.alpha.form(spec)))], 0));
} else {
return expound.printer.pprint_str(cljs.spec.alpha.form(spec));
}
});
expound.alpha.spec_PLUS_via = (function expound$alpha$spec_PLUS_via(problem){
var map__17931 = problem;
var map__17931__$1 = (((((!((map__17931 == null))))?(((((map__17931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17931):map__17931);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,cljs.core.cst$kw$via);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,cljs.core.cst$kw$spec);
if((spec instanceof cljs.core.Keyword)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null),via);
} else {
return via;
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$alpha_SLASH_specs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$problems,cljs.core.cst$kw$expound$spec_SLASH_problems),cljs.core.cst$kw$ret,cljs.core.cst$kw$expound$spec_SLASH_specs),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$problems,cljs.core.cst$kw$expound$spec_SLASH_problems),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$problems], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$spec_SLASH_problems], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$spec_SLASH_problems], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$problems,cljs.core.cst$kw$expound$spec_SLASH_problems),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$expound$spec_SLASH_specs,cljs.core.cst$kw$expound$spec_SLASH_specs,null,null),cljs.core.cst$kw$expound$spec_SLASH_specs,null,null,null));
/**
 * Given a collection of problems, returns the specs for those problems, with duplicates removed
 */
expound.alpha.specs = (function expound$alpha$specs(problems){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(expound.alpha.spec_PLUS_via,problems)));
});
expound.alpha.specs_str = (function expound$alpha$specs_str(problems){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(expound.alpha.spec_str,cljs.core.reverse(expound.alpha.specs(problems))));
});
expound.alpha.named_QMARK_ = (function expound$alpha$named_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
expound.alpha.pr_pred_STAR_ = (function expound$alpha$pr_pred_STAR_(pred){
if((((pred instanceof cljs.core.Symbol)) || (expound.alpha.named_QMARK_(pred)))){
return cljs.core.name(pred);
} else {
if(cljs.core.fn_QMARK_(pred)){
return expound.printer.pprint_fn(pred);
} else {
return expound.printer.elide_core_ns((function (){var _STAR_print_namespace_maps_STAR__orig_val__17934 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_namespace_maps_STAR__temp_val__17935 = false;
(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17935);

try{return expound.printer.pprint_str(pred);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17934);
}})());

}
}
});
expound.alpha.pr_pred = (function expound$alpha$pr_pred(pred,spec){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown,pred)){
return expound.alpha.pr_pred_STAR_(spec);
} else {
return expound.alpha.pr_pred_STAR_(pred);
}
});
expound.alpha.show_spec_name = (function expound$alpha$show_spec_name(spec_name,value){
if(cljs.core.truth_(spec_name)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17937 = spec_name;
var G__17937__$1 = (((G__17937 instanceof cljs.core.Keyword))?G__17937.fqn:null);
switch (G__17937__$1) {
case "cljs.spec.alpha/pred":
return "";

break;
case "args":
return "Function arguments\n\n";

break;
case "ret":
return "Return value\n\n";

break;
case "fn":
return "Function arguments and return value\n\n";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17937__$1)].join('')));

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
} else {
return value;
}
});
expound.alpha.preds = (function expound$alpha$preds(problems){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\nor\n\n",cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (problem){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.alpha.pr_pred(cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem),cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(problem)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$good_DASH_pred], 0)));
}),problems)));
});
expound.alpha.spec_w_error_message_QMARK_ = (function expound$alpha$spec_w_error_message_QMARK_(via,pred){
return cljs.core.boolean$((function (){var last_spec = cljs.core.last(via);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown,pred)){
if(cljs.core.qualified_keyword_QMARK_(last_spec)){
var and__4115__auto__ = (expound.alpha.error_message.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.error_message.cljs$core$IFn$_invoke$arity$1(last_spec) : expound.alpha.error_message.call(null,last_spec));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.spec.alpha.get_spec(last_spec);
} else {
return and__4115__auto__;
}
} else {
return false;
}
} else {
return false;
}
})());
});
expound.alpha.label = (function expound$alpha$label(var_args){
var G__17940 = arguments.length;
switch (G__17940) {
case 1:
return expound.alpha.label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return expound.alpha.label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return expound.alpha.label.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(expound.alpha.label.cljs$core$IFn$_invoke$arity$1 = (function (size){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(size,"-"));
}));

(expound.alpha.label.cljs$core$IFn$_invoke$arity$2 = (function (size,s){
return expound.alpha.label.cljs$core$IFn$_invoke$arity$3(size,s,"-");
}));

(expound.alpha.label.cljs$core$IFn$_invoke$arity$3 = (function (size,s,label_str){
return expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic((function (){var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label_str)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join('');
var chars_left = (cljs.core.long$(size) - ((prefix).length));
return [prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(chars_left,label_str)))].join('');
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$header], 0));
}));

(expound.alpha.label.cljs$lang$maxFixedArity = 3);

expound.alpha.header_label = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.alpha.label,expound.alpha.header_size);
expound.alpha.section_label = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.alpha.label,expound.alpha.section_size);
expound.alpha.relevant_specs = (function expound$alpha$relevant_specs(problems){
var sp_str = expound.alpha.specs_str(problems);
if(clojure.string.blank_QMARK_(sp_str)){
return "";
} else {
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha.section_label.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.section_label.cljs$core$IFn$_invoke$arity$1("Relevant specs") : expound.alpha.section_label.call(null,"Relevant specs")),sp_str], 0));
}
});
expound.alpha.multi_spec_parts = (function expound$alpha$multi_spec_parts(spec_form){
var vec__17942 = spec_form;
var _multi_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17942,(0),null);
var mm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17942,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mm,mm], null);
});
expound.alpha.multi_spec = (function expound$alpha$multi_spec(pred,spec){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17945_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__17945_SHARP_)) && (((2) <= cljs.core.count(p1__17945_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_multi_DASH_spec,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__17945_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.second(p1__17945_SHARP_))));
}),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,cljs.spec.alpha.form(spec))));
});
expound.alpha.no_method = (function expound$alpha$no_method(_spec_name,_form,_path,problem){
var dispatch_val = cljs.core.last(cljs.core.cst$kw$expound_SLASH_path.cljs$core$IFn$_invoke$arity$1(problem));
var sp = cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_last,cljs.core.list(cljs.core.cst$kw$expound_SLASH_via,cljs.core.cst$sym$problem)),cljs.core.last(cljs.core.cst$kw$expound_SLASH_via.cljs$core$IFn$_invoke$arity$1(problem)),null,null);
var map__17946 = expound.alpha.multi_spec_parts(expound.alpha.multi_spec(cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem),sp));
var map__17946__$1 = (((((!((map__17946 == null))))?(((((map__17946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17946):map__17946);
var mm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17946__$1,cljs.core.cst$kw$mm);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic(" Spec multimethod:      `%s`\n Dispatch value:        `%s`",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mm], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dispatch_val], 0))], 0));
});
if((typeof expound !== 'undefined') && (typeof expound.alpha !== 'undefined') && (typeof expound.alpha.problem_group_str !== 'undefined')){
} else {
expound.alpha.problem_group_str = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__17948 = cljs.core.get_global_hierarchy;
return (fexpr__17948.cljs$core$IFn$_invoke$arity$0 ? fexpr__17948.cljs$core$IFn$_invoke$arity$0() : fexpr__17948.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("expound.alpha","problem-group-str"),(function (type,_spec_name,_form,_path,_problems,_opts){
return type;
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof expound !== 'undefined') && (typeof expound.alpha !== 'undefined') && (typeof expound.alpha.expected_str !== 'undefined')){
} else {
expound.alpha.expected_str = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__17949 = cljs.core.get_global_hierarchy;
return (fexpr__17949.cljs$core$IFn$_invoke$arity$0 ? fexpr__17949.cljs$core$IFn$_invoke$arity$0() : fexpr__17949.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("expound.alpha","expected-str"),(function (type,_spec_name,_form,_path,_problems,_opts){
return type;
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof expound !== 'undefined') && (typeof expound.alpha !== 'undefined') && (typeof expound.alpha.value_str !== 'undefined')){
} else {
expound.alpha.value_str = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__17950 = cljs.core.get_global_hierarchy;
return (fexpr__17950.cljs$core$IFn$_invoke$arity$0 ? fexpr__17950.cljs$core$IFn$_invoke$arity$0() : fexpr__17950.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("expound.alpha","value-str"),(function (type,_spec_name,_form,_path,_problems,_opts){
return type;
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
expound.alpha.expected_str_STAR_ = (function expound$alpha$expected_str_STAR_(spec_name,problems,opts){
var problem = cljs.core.first(problems);
var map__17951 = problem;
var map__17951__$1 = (((((!((map__17951 == null))))?(((((map__17951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17951):map__17951);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951__$1,cljs.core.cst$kw$expound_SLASH_form);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951__$1,cljs.core.cst$kw$expound_SLASH_in);
var type = cljs.core.cst$kw$expound$spec$problem_SLASH_type.cljs$core$IFn$_invoke$arity$1(problem);
return (expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,in$,problems,opts) : expound.alpha.expected_str.call(null,type,spec_name,form,in$,problems,opts));
});
expound.alpha.value_str_STAR_ = (function expound$alpha$value_str_STAR_(spec_name,problems,opts){
var problem = cljs.core.first(problems);
var map__17953 = problem;
var map__17953__$1 = (((((!((map__17953 == null))))?(((((map__17953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17953):map__17953);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17953__$1,cljs.core.cst$kw$expound_SLASH_form);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17953__$1,cljs.core.cst$kw$expound_SLASH_in);
var type = cljs.core.cst$kw$expound$spec$problem_SLASH_type.cljs$core$IFn$_invoke$arity$1(problem);
return (expound.alpha.value_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.value_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,in$,problems,opts) : expound.alpha.value_str.call(null,type,spec_name,form,in$,problems,opts));
});
expound.alpha.conformed_value = (function expound$alpha$conformed_value(problems,invalid_value){
var conformed_val = cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(cljs.core.first(problems));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conformed_val,invalid_value)){
return "";
} else {
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("\n\nwhen conformed as\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conformed_val], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bad_DASH_value], 0)))], 0));
}
});
expound.alpha.value_PLUS_conformed_value = (function expound$alpha$value_PLUS_conformed_value(problems,spec_name,form,path,opts){
var map__17955 = opts;
var map__17955__$1 = (((((!((map__17955 == null))))?(((((map__17955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17955):map__17955);
var show_conformed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17955__$1,cljs.core.cst$kw$show_DASH_conformed_QMARK_);
var invalid_value = (((path == null))?cljs.core.cst$kw$expound$alpha_SLASH_no_DASH_value_DASH_found:(expound.problems.value_in.cljs$core$IFn$_invoke$arity$2 ? expound.problems.value_in.cljs$core$IFn$_invoke$arity$2(form,path) : expound.problems.value_in.call(null,form,path)));
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4(spec_name,form,path,invalid_value) : expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,form,path,invalid_value)),(cljs.core.truth_(show_conformed_QMARK_)?expound.alpha.conformed_value(problems,invalid_value):"")], 0));
});
expound.alpha.value_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_type,spec_name,form,path,problems,_opts){
return expound.alpha.show_spec_name(spec_name,expound.alpha.value_PLUS_conformed_value(problems,spec_name,form,path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_conformed_QMARK_,true], null)));
}));
expound.alpha.explain_missing_keys = (function expound$alpha$explain_missing_keys(problems){
var missing_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17957_SHARP_){
return expound.printer.missing_key(cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(p1__17957_SHARP_));
}),problems);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("should contain %s: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(missing_keys))) && (cljs.core.every_QMARK_(cljs.core.keyword,missing_keys))))?"key":"keys"),expound.printer.print_missing_keys(problems)], 0))),(function (){var temp__5733__auto__ = expound.printer.print_spec_keys(problems);
if(cljs.core.truth_(temp__5733__auto__)){
var table = temp__5733__auto__;
return ["\n\n",table].join('');
} else {
return null;
}
})()].join('');
});
expound.alpha.format_str = "%s\n\n%s\n\n%s";
expound.alpha.format_err = (function expound$alpha$format_err(header,type,spec_name,form,in$,problems,opts,expected){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic(expound.alpha.format_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1(header) : expound.alpha.header_label.call(null,header)),(expound.alpha.value_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.value_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,in$,problems,opts) : expound.alpha.value_str.call(null,type,spec_name,form,in$,problems,opts)),expected], 0));
});
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_DASH_group_SLASH_one_DASH_value,(function (_type,spec_name,_form,_path,problems,opts){
var problem = cljs.core.first(problems);
var subproblems = cljs.core.cst$kw$problems.cljs$core$IFn$_invoke$arity$1(problem);
var grouped_subproblems = cljs.core.vals(cljs.core.group_by(cljs.core.cst$kw$expound$spec$problem_SLASH_type,subproblems));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\nor\n\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17958_SHARP_){
return expound.alpha.expected_str_STAR_(spec_name,p1__17958_SHARP_,opts);
}),grouped_subproblems));
}));
expound.alpha.value_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_DASH_group_SLASH_one_DASH_value,(function (_type,spec_name,_form,_path,problems,opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_runtime_DASH_asserts_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$alpha,cljs.core.cst$sym$_STAR_runtime_DASH_asserts_STAR_,"resources/public/main.out/cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$expound$alpha_SLASH_singleton,problems);
} else {
}
} else {
}

var problem = cljs.core.first(problems);
var subproblems = cljs.core.cst$kw$problems.cljs$core$IFn$_invoke$arity$1(problem);
return expound.alpha.value_str_STAR_(spec_name,subproblems,opts);
}));
expound.alpha.header = (function expound$alpha$header(type){
var G__17959 = type;
var G__17959__$1 = (((G__17959 instanceof cljs.core.Keyword))?G__17959.fqn:null);
switch (G__17959__$1) {
case "expound.problem/missing-spec":
return "Missing spec";

break;
default:
return "Spec failed";

}
});
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_DASH_group_SLASH_one_DASH_value,(function (type,spec_name,_form,path,problems,opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_runtime_DASH_asserts_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$alpha,cljs.core.cst$sym$_STAR_runtime_DASH_asserts_STAR_,"resources/public/main.out/cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$expound$alpha_SLASH_singleton,problems);
} else {
}
} else {
}

var problem = cljs.core.first(problems);
var subproblems = cljs.core.cst$kw$problems.cljs$core$IFn$_invoke$arity$1(problem);
var map__17961 = cljs.core.first(subproblems);
var map__17961__$1 = (((((!((map__17961 == null))))?(((((map__17961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17961):map__17961);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17961__$1,cljs.core.cst$kw$expound_SLASH_form);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17961__$1,cljs.core.cst$kw$expound_SLASH_in);
return expound.alpha.format_err(expound.alpha.header(cljs.core.cst$kw$expound$spec$problem_SLASH_type.cljs$core$IFn$_invoke$arity$1(cljs.core.first(subproblems))),type,spec_name,form,in$,problems,opts,(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts) : expound.alpha.expected_str.call(null,type,spec_name,form,path,problems,opts)));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_DASH_group_SLASH_many_DASH_values,(function (_type,spec_name,_form,_path,problems,opts){
var subproblems = cljs.core.cst$kw$problems.cljs$core$IFn$_invoke$arity$1(cljs.core.first(problems));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\nor value\n\n",(function (){var iter__4529__auto__ = (function expound$alpha$iter__17963(s__17964){
return (new cljs.core.LazySeq(null,(function (){
var s__17964__$1 = s__17964;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__17964__$1);
if(temp__5735__auto__){
var s__17964__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17964__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__17964__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__17966 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__17965 = (0);
while(true){
if((i__17965 < size__4528__auto__)){
var problem = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__17965);
cljs.core.chunk_append(b__17966,expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.value_str_STAR_(spec_name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [problem], null),opts),expound.alpha.expected_str_STAR_(spec_name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [problem], null),opts)], 0)));

var G__17967 = (i__17965 + (1));
i__17965 = G__17967;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17966),expound$alpha$iter__17963(cljs.core.chunk_rest(s__17964__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17966),null);
}
} else {
var problem = cljs.core.first(s__17964__$2);
return cljs.core.cons(expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.value_str_STAR_(spec_name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [problem], null),opts),expound.alpha.expected_str_STAR_(spec_name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [problem], null),opts)], 0)),expound$alpha$iter__17963(cljs.core.rest(s__17964__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(subproblems);
})());
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_DASH_group_SLASH_many_DASH_values,(function (_type,spec_name,form,path,problems,opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_runtime_DASH_asserts_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$alpha,cljs.core.cst$sym$_STAR_runtime_DASH_asserts_STAR_,"resources/public/main.out/cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$expound$alpha_SLASH_singleton,problems);
} else {
}
} else {
}

return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1("Spec failed") : expound.alpha.header_label.call(null,"Spec failed")),(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(_type,spec_name,form,path,problems,opts) : expound.alpha.expected_str.call(null,_type,spec_name,form,path,problems,opts))], 0));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_missing_DASH_key,(function (_type,_spec_name,_form,_path,problems,_opts){
return expound.alpha.explain_missing_keys(problems);
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_missing_DASH_key,(function (type,spec_name,form,path,problems,opts){
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$val,problems)))){
} else {
throw (new Error(["Assert failed: ",[expound.util.assert_message,": All values should be the same, but they are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problems)].join(''),"\n","(apply = (map :val problems))"].join('')));
}

return expound.alpha.format_err("Spec failed",type,spec_name,form,path,problems,opts,(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts) : expound.alpha.expected_str.call(null,type,spec_name,form,path,problems,opts)));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_not_DASH_in_DASH_set,(function (_type,_spec_name,_form,_path,problems,_opts){
var map__17970 = cljs.core.first(problems);
var map__17970__$1 = (((((!((map__17970 == null))))?(((((map__17970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17970):map__17970);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17970__$1,cljs.core.cst$kw$expound_SLASH_via);
var last_spec = cljs.core.last(via);
if(cljs.core.truth_(((cljs.core.qualified_keyword_QMARK_(last_spec))?(expound.alpha.error_message.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.error_message.cljs$core$IFn$_invoke$arity$1(last_spec) : expound.alpha.error_message.call(null,last_spec)):false))){
return expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic((expound.alpha.error_message.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.error_message.cljs$core$IFn$_invoke$arity$1(last_spec) : expound.alpha.error_message.call(null,last_spec)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$good], 0));
} else {
var combined_set = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pred,problems));
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("should be%s: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(combined_set)))?"":" one of"),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17969_SHARP_){
return expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(p1__17969_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$good], 0));
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17968_SHARP_){
return ["",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__17968_SHARP_], 0)),""].join('');
}),combined_set)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$good], 0))], 0));
}
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_not_DASH_in_DASH_set,(function (type,spec_name,form,path,problems,opts){
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$val,problems)))){
} else {
throw (new Error(["Assert failed: ",[expound.util.assert_message,": All values should be the same, but they are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problems)].join(''),"\n","(apply = (map :val problems))"].join('')));
}

return expound.alpha.format_err("Spec failed",type,spec_name,form,path,problems,opts,(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts) : expound.alpha.expected_str.call(null,type,spec_name,form,path,problems,opts)));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_missing_DASH_spec,(function (_type,spec_name,form,path,problems,_opts){
return ["with\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\nor with\n\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17972_SHARP_){
return expound.alpha.no_method(spec_name,form,path,p1__17972_SHARP_);
}),problems))].join('');
}));
expound.alpha.value_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_missing_DASH_spec,(function (_type,spec_name,form,path,_problems,_opts){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("Cannot find spec for\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.show_spec_name(spec_name,(expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4(spec_name,form,path,(expound.problems.value_in.cljs$core$IFn$_invoke$arity$2 ? expound.problems.value_in.cljs$core$IFn$_invoke$arity$2(form,path) : expound.problems.value_in.call(null,form,path))) : expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,form,path,(expound.problems.value_in.cljs$core$IFn$_invoke$arity$2 ? expound.problems.value_in.cljs$core$IFn$_invoke$arity$2(form,path) : expound.problems.value_in.call(null,form,path)))))], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_missing_DASH_spec,(function (type,spec_name,form,path,problems,opts){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1("Missing spec") : expound.alpha.header_label.call(null,"Missing spec")),(expound.alpha.value_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.value_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts) : expound.alpha.value_str.call(null,type,spec_name,form,path,problems,opts)),(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts) : expound.alpha.expected_str.call(null,type,spec_name,form,path,problems,opts))], 0));
}));
expound.alpha.lcs_STAR_ = (function expound$alpha$lcs_STAR_(p__17973,p__17974){
var vec__17975 = p__17973;
var seq__17976 = cljs.core.seq(vec__17975);
var first__17977 = cljs.core.first(seq__17976);
var seq__17976__$1 = cljs.core.next(seq__17976);
var x = first__17977;
var xs = seq__17976__$1;
var vec__17978 = p__17974;
var seq__17979 = cljs.core.seq(vec__17978);
var first__17980 = cljs.core.first(seq__17979);
var seq__17979__$1 = cljs.core.next(seq__17979);
var y = first__17980;
var ys = seq__17979__$1;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,null)))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return cljs.core.vec(cljs.core.cons(x,(expound.alpha.lcs_STAR_.cljs$core$IFn$_invoke$arity$2 ? expound.alpha.lcs_STAR_.cljs$core$IFn$_invoke$arity$2(xs,ys) : expound.alpha.lcs_STAR_.call(null,xs,ys))));
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
});
expound.alpha.lcs = (function expound$alpha$lcs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17982 = arguments.length;
var i__4737__auto___17983 = (0);
while(true){
if((i__4737__auto___17983 < len__4736__auto___17982)){
args__4742__auto__.push((arguments[i__4737__auto___17983]));

var G__17984 = (i__4737__auto___17983 + (1));
i__4737__auto___17983 = G__17984;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return expound.alpha.lcs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(expound.alpha.lcs.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (xs,ys){
return expound.alpha.lcs_STAR_(xs,ys);
}),paths);
}));

(expound.alpha.lcs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(expound.alpha.lcs.cljs$lang$applyTo = (function (seq17981){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17981));
}));

expound.alpha.contains_alternate_at_path_QMARK_ = (function expound$alpha$contains_alternate_at_path_QMARK_(spec_form,path){
if((!(cljs.core.coll_QMARK_(spec_form)))){
return false;
} else {
var vec__17993 = spec_form;
var seq__17994 = cljs.core.seq(vec__17993);
var first__17995 = cljs.core.first(seq__17994);
var seq__17994__$1 = cljs.core.next(seq__17994);
var op = first__17995;
var rest_form = seq__17994__$1;
var vec__17996 = path;
var seq__17997 = cljs.core.seq(vec__17996);
var first__17998 = cljs.core.first(seq__17997);
var seq__17997__$1 = cljs.core.next(seq__17997);
var k = first__17998;
var rest_path = seq__17997__$1;
var pred__17999 = cljs.core.contains_QMARK_;
var expr__18000 = op;
if(cljs.core.truth_((function (){var G__18002 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,null], null), null);
var G__18003 = expr__18000;
return (pred__17999.cljs$core$IFn$_invoke$arity$2 ? pred__17999.cljs$core$IFn$_invoke$arity$2(G__18002,G__18003) : pred__17999.call(null,G__18002,G__18003));
})())){
var node_keys = cljs.core.set(cljs.core.keys(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,rest_form)));
if(cljs.core.empty_QMARK_(path)){
return true;
} else {
if(cljs.core.contains_QMARK_(node_keys,k)){
return cljs.core.some((function (p1__17985_SHARP_){
return (expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2 ? expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__17985_SHARP_,rest_path) : expound.alpha.contains_alternate_at_path_QMARK_.call(null,p1__17985_SHARP_,rest_path));
}),rest_form);
} else {
return false;

}
}
} else {
if(cljs.core.truth_((function (){var G__18004 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys_STAR_,null], null), null);
var G__18005 = expr__18000;
return (pred__17999.cljs$core$IFn$_invoke$arity$2 ? pred__17999.cljs$core$IFn$_invoke$arity$2(G__18004,G__18005) : pred__17999.call(null,G__18004,G__18005));
})())){
var keys_args = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,rest_form);
var node_keys = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$opt.cljs$core$IFn$_invoke$arity$2(keys_args,cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$req.cljs$core$IFn$_invoke$arity$2(keys_args,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17986_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__17986_SHARP_));
}),cljs.core.cst$kw$opt_DASH_un.cljs$core$IFn$_invoke$arity$2(keys_args,cljs.core.PersistentVector.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17987_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__17987_SHARP_));
}),cljs.core.cst$kw$req_DASH_un.cljs$core$IFn$_invoke$arity$2(keys_args,cljs.core.PersistentVector.EMPTY))], 0)));
var possible_spec_names = ((cljs.core.qualified_keyword_QMARK_(k))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null):cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17988_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__17988_SHARP_)));
}),cljs.core.flatten(cljs.core.vals(keys_args))));
if(cljs.core.empty_QMARK_(path)){
return false;
} else {
if(cljs.core.contains_QMARK_(node_keys,k)){
return cljs.core.some((function (p1__17989_SHARP_){
return (expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2 ? expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__17989_SHARP_,rest_path) : expound.alpha.contains_alternate_at_path_QMARK_.call(null,p1__17989_SHARP_,rest_path));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.form,possible_spec_names));
} else {
return false;

}
}
} else {
if(cljs.core.truth_((function (){var G__18006 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,null], null), null);
var G__18007 = expr__18000;
return (pred__17999.cljs$core$IFn$_invoke$arity$2 ? pred__17999.cljs$core$IFn$_invoke$arity$2(G__18006,G__18007) : pred__17999.call(null,G__18006,G__18007));
})())){
var node_keys = cljs.core.set(cljs.core.keys(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,rest_form)));
if(cljs.core.empty_QMARK_(path)){
return false;
} else {
if(cljs.core.contains_QMARK_(node_keys,k)){
return cljs.core.some((function (p1__17990_SHARP_){
return (expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2 ? expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__17990_SHARP_,rest_path) : expound.alpha.contains_alternate_at_path_QMARK_.call(null,p1__17990_SHARP_,rest_path));
}),rest_form);
} else {
return false;

}
}
} else {
if(cljs.core.truth_((function (){var G__18008 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,null], null), null);
var G__18009 = expr__18000;
return (pred__17999.cljs$core$IFn$_invoke$arity$2 ? pred__17999.cljs$core$IFn$_invoke$arity$2(G__18008,G__18009) : pred__17999.call(null,G__18008,G__18009));
})())){
if(cljs.core.empty_QMARK_(path)){
return true;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil,null], null), null),k)){
return cljs.core.some((function (p1__17991_SHARP_){
return (expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2 ? expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__17991_SHARP_,rest_path) : expound.alpha.contains_alternate_at_path_QMARK_.call(null,p1__17991_SHARP_,rest_path));
}),rest_form);
} else {
return false;

}
}
} else {
return cljs.core.some((function (p1__17992_SHARP_){
return (expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2 ? expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__17992_SHARP_,path) : expound.alpha.contains_alternate_at_path_QMARK_.call(null,p1__17992_SHARP_,path));
}),rest_form);
}
}
}
}
}
});
/**
 * Determine if two groups have prefixes (ie. spec tags) that are included in
 *   an s/or or s/alt predicate.
 */
expound.alpha.share_alt_tags_QMARK_ = (function expound$alpha$share_alt_tags_QMARK_(grp1,grp2){
var pprefix1 = cljs.core.cst$kw$path_DASH_prefix.cljs$core$IFn$_invoke$arity$1(grp1);
var pprefix2 = cljs.core.cst$kw$path_DASH_prefix.cljs$core$IFn$_invoke$arity$1(grp2);
var shared_prefix = expound.alpha.lcs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pprefix1,pprefix2], 0));
var shared_specs = expound.alpha.lcs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$via_DASH_prefix.cljs$core$IFn$_invoke$arity$1(grp1),cljs.core.cst$kw$via_DASH_prefix.cljs$core$IFn$_invoke$arity$1(grp2)], 0));
var and__4115__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pprefix1,cljs.core.count(shared_prefix));
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pprefix2,cljs.core.count(shared_prefix));
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.some((function (p1__18010_SHARP_){
var and__4115__auto____$2 = expound.alpha.contains_alternate_at_path_QMARK_(cljs.spec.alpha.form(p1__18010_SHARP_),shared_prefix);
if(cljs.core.truth_(and__4115__auto____$2)){
return expound.alpha.contains_alternate_at_path_QMARK_(cljs.spec.alpha.form(p1__18010_SHARP_),shared_prefix);
} else {
return and__4115__auto____$2;
}
}),shared_specs);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
/**
 * Determine if either group 1 or 2 is recursive (ie. have repeating specs in
 *   their via paths) and if one group is included in another.
 */
expound.alpha.recursive_spec_QMARK_ = (function expound$alpha$recursive_spec_QMARK_(grp1,grp2){
var vxs = cljs.core.cst$kw$via_DASH_prefix.cljs$core$IFn$_invoke$arity$1(grp1);
var vys = cljs.core.cst$kw$via_DASH_prefix.cljs$core$IFn$_invoke$arity$1(grp2);
var vprefix = expound.alpha.lcs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vxs,vys], 0));
return ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vys),cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(vys)))) && ((cljs.core.count(vprefix) < cljs.core.count(vys))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(vxs,vprefix)))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vxs),cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(vxs)))) && ((cljs.core.count(vprefix) < cljs.core.count(vxs))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(vys,vprefix)))));
});
expound.alpha.problem_group = (function expound$alpha$problem_group(grp1,grp2){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$expound$spec$problem_SLASH_type,cljs.core.cst$kw$expound$problem_DASH_group_SLASH_many_DASH_values,cljs.core.cst$kw$path_DASH_prefix,expound.alpha.lcs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$path_DASH_prefix.cljs$core$IFn$_invoke$arity$1(grp1),cljs.core.cst$kw$path_DASH_prefix.cljs$core$IFn$_invoke$arity$1(grp2)], 0)),cljs.core.cst$kw$via_DASH_prefix,expound.alpha.lcs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$via_DASH_prefix.cljs$core$IFn$_invoke$arity$1(grp1),cljs.core.cst$kw$via_DASH_prefix.cljs$core$IFn$_invoke$arity$1(grp2)], 0)),cljs.core.cst$kw$problems,cljs.core.into.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expound$problem_DASH_group_SLASH_many_DASH_values,cljs.core.cst$kw$expound$spec$problem_SLASH_type.cljs$core$IFn$_invoke$arity$1(grp1)))?cljs.core.cst$kw$problems.cljs$core$IFn$_invoke$arity$1(grp1):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grp1], null)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expound$problem_DASH_group_SLASH_many_DASH_values,cljs.core.cst$kw$expound$spec$problem_SLASH_type.cljs$core$IFn$_invoke$arity$1(grp2)))?cljs.core.cst$kw$problems.cljs$core$IFn$_invoke$arity$1(grp2):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grp2], null)))], null);
});
expound.alpha.target_form_QMARK_ = (function expound$alpha$target_form_QMARK_(form){
return ((cljs.core.map_QMARK_(form)) && ((!(cljs.core.sorted_QMARK_(form)))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$expound$problem_DASH_group_SLASH_one_DASH_value,null,cljs.core.cst$kw$expound$problem_DASH_group_SLASH_many_DASH_values,null], null), null),cljs.core.cst$kw$expound$spec$problem_SLASH_type.cljs$core$IFn$_invoke$arity$1(form))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.cst$kw$problems.cljs$core$IFn$_invoke$arity$1(form)))));
});
expound.alpha.groups_walk = (function expound$alpha$groups_walk(f,form){
if(((cljs.core.map_QMARK_(form)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$expound$problem_DASH_group_SLASH_one_DASH_value,null,cljs.core.cst$kw$expound$problem_DASH_group_SLASH_many_DASH_values,null], null), null),cljs.core.cst$kw$expound$spec$problem_SLASH_type.cljs$core$IFn$_invoke$arity$1(form))) && (cljs.core.contains_QMARK_(form,cljs.core.cst$kw$problems)))){
var G__18012 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(form,cljs.core.cst$kw$problems,(function (p1__18011_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(p1__18011_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.alpha.groups_walk,f),p1__18011_SHARP_));
}));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18012) : f.call(null,G__18012));
} else {
return form;

}
});
expound.alpha.lift_singleton_groups = (function expound$alpha$lift_singleton_groups(groups){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.alpha.groups_walk,(function (p1__18013_SHARP_){
if(expound.alpha.target_form_QMARK_(p1__18013_SHARP_)){
return cljs.core.first(cljs.core.cst$kw$problems.cljs$core$IFn$_invoke$arity$1(p1__18013_SHARP_));
} else {
return p1__18013_SHARP_;
}
})),groups);
});
expound.alpha.vec_remove = (function expound$alpha$vec_remove(v,x){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([x]),v));
});
expound.alpha.replace_group = (function expound$alpha$replace_group(groups,old_groups,group){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expound.alpha.vec_remove(groups,old_groups),expound.alpha.problem_group(old_groups,group));
});
/**
 * Consolidate a group into a group collection if it's either part of an s/or,
 *   s/alt or recursive spec.
 */
expound.alpha.conj_groups = (function expound$alpha$conj_groups(groups,group){
var temp__5733__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18014_SHARP_){
var or__4126__auto__ = expound.alpha.recursive_spec_QMARK_(p1__18014_SHARP_,group);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return expound.alpha.share_alt_tags_QMARK_(p1__18014_SHARP_,group);
}
}),groups));
if(cljs.core.truth_(temp__5733__auto__)){
var old_group = temp__5733__auto__;
return expound.alpha.replace_group(groups,old_group,group);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,group);
}
});
expound.alpha.groups = (function expound$alpha$groups(problems){
var grouped_by_in_path = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (grp){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$expound$spec$problem_SLASH_type,cljs.core.cst$kw$expound$problem_DASH_group_SLASH_one_DASH_value,cljs.core.cst$kw$path_DASH_prefix,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(expound.alpha.lcs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expound_SLASH_path,grp)),cljs.core.cst$kw$via_DASH_prefix,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(expound.alpha.lcs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expound_SLASH_via,grp)),cljs.core.cst$kw$problems,grp], null);
}),cljs.core.vals(cljs.core.group_by(cljs.core.cst$kw$expound_SLASH_in,problems)));
return expound.alpha.lift_singleton_groups(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(expound.alpha.conj_groups,cljs.core.PersistentVector.EMPTY,grouped_by_in_path));
});
expound.alpha.problems_without_location = (function expound$alpha$problems_without_location(problems,opts){
var failure = null;
var non_matching_value = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound_SLASH_value_DASH_that_DASH_should_DASH_never_DASH_match], null);
var problems__$1 = expound.alpha.groups(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18016_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18016_SHARP_,cljs.core.cst$kw$expound$spec$problem_SLASH_type,(expound.problems.type.cljs$core$IFn$_invoke$arity$3 ? expound.problems.type.cljs$core$IFn$_invoke$arity$3(failure,p1__18016_SHARP_,true) : expound.problems.type.call(null,failure,p1__18016_SHARP_,true)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18015_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__18015_SHARP_,cljs.core.cst$kw$expound$spec$problem_SLASH_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$reason], 0));
}),problems)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__4529__auto__ = (function expound$alpha$problems_without_location_$_iter__18017(s__18018){
return (new cljs.core.LazySeq(null,(function (){
var s__18018__$1 = s__18018;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__18018__$1);
if(temp__5735__auto__){
var s__18018__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18018__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18018__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18020 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18019 = (0);
while(true){
if((i__18019 < size__4528__auto__)){
var prob = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18019);
cljs.core.chunk_append(b__18020,(function (){var in$ = cljs.core.cst$kw$expound_SLASH_in.cljs$core$IFn$_invoke$arity$1(prob);
var G__18021 = cljs.core.cst$kw$expound$spec$problem_SLASH_type.cljs$core$IFn$_invoke$arity$1(prob);
var G__18022 = cljs.core.cst$kw$expound_SLASH_no_DASH_spec_DASH_name;
var G__18023 = non_matching_value;
var G__18024 = in$;
var G__18025 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prob], null);
var G__18026 = opts;
return (expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(G__18021,G__18022,G__18023,G__18024,G__18025,G__18026) : expound.alpha.expected_str.call(null,G__18021,G__18022,G__18023,G__18024,G__18025,G__18026));
})());

var G__18033 = (i__18019 + (1));
i__18019 = G__18033;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18020),expound$alpha$problems_without_location_$_iter__18017(cljs.core.chunk_rest(s__18018__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18020),null);
}
} else {
var prob = cljs.core.first(s__18018__$2);
return cljs.core.cons((function (){var in$ = cljs.core.cst$kw$expound_SLASH_in.cljs$core$IFn$_invoke$arity$1(prob);
var G__18027 = cljs.core.cst$kw$expound$spec$problem_SLASH_type.cljs$core$IFn$_invoke$arity$1(prob);
var G__18028 = cljs.core.cst$kw$expound_SLASH_no_DASH_spec_DASH_name;
var G__18029 = non_matching_value;
var G__18030 = in$;
var G__18031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prob], null);
var G__18032 = opts;
return (expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(G__18027,G__18028,G__18029,G__18030,G__18031,G__18032) : expound.alpha.expected_str.call(null,G__18027,G__18028,G__18029,G__18030,G__18031,G__18032));
})(),expound$alpha$problems_without_location_$_iter__18017(cljs.core.rest(s__18018__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(problems__$1);
})());
});
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_insufficient_DASH_input,(function (_type,_spec_name,_form,_path,problems,opts){
var problem = cljs.core.first(problems);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("should have additional elements. The next element%s %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5737__auto__ = cljs.core.last(cljs.core.cst$kw$expound_SLASH_path.cljs$core$IFn$_invoke$arity$1(problem));
if((temp__5737__auto__ == null)){
return "";
} else {
var el_name = temp__5737__auto__;
return [" \"",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([el_name], 0)),"\""].join('');
}
})(),expound.alpha.problems_without_location(problems,opts)], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_insufficient_DASH_input,(function (type,spec_name,form,path,problems,opts){
return expound.alpha.format_err("Syntax error",type,spec_name,form,path,problems,opts,(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts) : expound.alpha.expected_str.call(null,type,spec_name,form,path,problems,opts)));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_extra_DASH_input,(function (_type,_spec_name,_form,_path,problems,_opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_runtime_DASH_asserts_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$alpha,cljs.core.cst$sym$_STAR_runtime_DASH_asserts_STAR_,"resources/public/main.out/cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$expound$alpha_SLASH_singleton,problems);
} else {
}
} else {
}

return "has extra input";
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_extra_DASH_input,(function (type,spec_name,form,path,problems,opts){
return expound.alpha.format_err("Syntax error",type,spec_name,form,path,problems,opts,(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts) : expound.alpha.expected_str.call(null,type,spec_name,form,path,problems,opts)));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_fspec_DASH_exception_DASH_failure,(function (_type,_spec_name,_form,_path,problems,_opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_runtime_DASH_asserts_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$alpha,cljs.core.cst$sym$_STAR_runtime_DASH_asserts_STAR_,"resources/public/main.out/cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$expound$alpha_SLASH_singleton,problems);
} else {
}
} else {
}

var problem = cljs.core.first(problems);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("threw exception\n\n%s\n\nwith args:\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.indent.cljs$core$IFn$_invoke$arity$1(((typeof cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(problem) === 'string')?["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(problem)),"\""].join(''):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(problem)], 0)))),expound.printer.indent.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(problem)))], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_fspec_DASH_exception_DASH_failure,(function (type,spec_name,form,path,problems,opts){
return expound.alpha.format_err("Exception",type,spec_name,form,path,problems,opts,(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts) : expound.alpha.expected_str.call(null,type,spec_name,form,path,problems,opts)));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_fspec_DASH_ret_DASH_failure,(function (_type,_spec_name,_form,_path,problems,opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_runtime_DASH_asserts_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$alpha,cljs.core.cst$sym$_STAR_runtime_DASH_asserts_STAR_,"resources/public/main.out/cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$expound$alpha_SLASH_singleton,problems);
} else {
}
} else {
}

var problem = cljs.core.first(problems);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("returned an invalid value\n\n%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.indent.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(problem)], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bad_DASH_value], 0)),expound.alpha.problems_without_location(problems,opts)], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_fspec_DASH_ret_DASH_failure,(function (type,spec_name,form,path,problems,opts){
return expound.alpha.format_err("Function spec failed",type,spec_name,form,path,problems,opts,(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts) : expound.alpha.expected_str.call(null,type,spec_name,form,path,problems,opts)));
}));
expound.alpha.value_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_insufficient_DASH_input,(function (_type,spec_name,form,path,problems,_opts){
return expound.alpha.show_spec_name(spec_name,expound.alpha.value_PLUS_conformed_value(problems,spec_name,form,path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_conformed_QMARK_,false], null)));
}));
expound.alpha.value_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_extra_DASH_input,(function (_type,spec_name,form,path,problems,_opts){
return expound.alpha.show_spec_name(spec_name,expound.alpha.value_PLUS_conformed_value(problems,spec_name,form,path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_conformed_QMARK_,false], null)));
}));
expound.alpha.value_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_fspec_DASH_fn_DASH_failure,(function (_type,spec_name,form,path,problems,_opts){
return expound.alpha.show_spec_name(spec_name,expound.alpha.value_PLUS_conformed_value(problems,spec_name,form,path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_conformed_QMARK_,false], null)));
}));
expound.alpha.value_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_fspec_DASH_exception_DASH_failure,(function (_type,spec_name,form,path,problems,_opts){
return expound.alpha.show_spec_name(spec_name,expound.alpha.value_PLUS_conformed_value(problems,spec_name,form,path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_conformed_QMARK_,false], null)));
}));
expound.alpha.value_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_fspec_DASH_ret_DASH_failure,(function (_type,spec_name,form,path,problems,_opts){
return expound.alpha.show_spec_name(spec_name,expound.alpha.value_PLUS_conformed_value(problems,spec_name,form,path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_conformed_QMARK_,false], null)));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_fspec_DASH_fn_DASH_failure,(function (_type,_spec_name,_form,_path,problems,_opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_runtime_DASH_asserts_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$alpha,cljs.core.cst$sym$_STAR_runtime_DASH_asserts_STAR_,"resources/public/main.out/cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$expound$alpha_SLASH_singleton,problems);
} else {
}
} else {
}

var problem = cljs.core.first(problems);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("failed spec. Function arguments and return value\n\n%s\n\nshould satisfy\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(problem)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bad_DASH_value], 0))),expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.alpha.pr_pred(cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem),cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(problem)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$good_DASH_pred], 0)))], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_fspec_DASH_fn_DASH_failure,(function (type,spec_name,form,path,problems,opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_runtime_DASH_asserts_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$alpha,cljs.core.cst$sym$_STAR_runtime_DASH_asserts_STAR_,"resources/public/main.out/cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$expound$alpha_SLASH_singleton,problems);
} else {
}
} else {
}

return expound.alpha.format_err("Function spec failed",type,spec_name,form,path,problems,opts,(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts) : expound.alpha.expected_str.call(null,type,spec_name,form,path,problems,opts)));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_check_DASH_fn_DASH_failure,(function (_type,_spec_name,_form,_path,problems,_opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_runtime_DASH_asserts_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$alpha,cljs.core.cst$sym$_STAR_runtime_DASH_asserts_STAR_,"resources/public/main.out/cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$expound$alpha_SLASH_singleton,problems);
} else {
}
} else {
}

var problem = cljs.core.first(problems);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("failed spec. Function arguments and return value\n\n%s\n\nshould satisfy\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(problem)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bad_DASH_value], 0))),expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.alpha.pr_pred(cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem),cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(problem)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$good_DASH_pred], 0)))], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_check_DASH_fn_DASH_failure,(function (_type,spec_name,form,path,problems,opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_runtime_DASH_asserts_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$alpha,cljs.core.cst$sym$_STAR_runtime_DASH_asserts_STAR_,"resources/public/main.out/cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$expound$alpha_SLASH_singleton,problems);
} else {
}
} else {
}

return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic(expound.alpha.format_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1("Function spec failed") : expound.alpha.header_label.call(null,"Function spec failed")),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.indent.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$expound_SLASH_check_DASH_fn_DASH_call.cljs$core$IFn$_invoke$arity$1(cljs.core.first(problems))], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bad_DASH_value], 0)),(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(_type,spec_name,form,path,problems,opts) : expound.alpha.expected_str.call(null,_type,spec_name,form,path,problems,opts))], 0));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_check_DASH_ret_DASH_failure,(function (_type,_spec_name,_form,_path,problems,opts){
return expound.alpha.problems_without_location(problems,opts);
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_check_DASH_ret_DASH_failure,(function (_type,spec_name,form,path,problems,opts){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s\n\nreturned an invalid value.\n\n%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.header_label.cljs$core$IFn$_invoke$arity$1("Function spec failed") : expound.alpha.header_label.call(null,"Function spec failed")),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.indent.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$expound_SLASH_check_DASH_fn_DASH_call.cljs$core$IFn$_invoke$arity$1(cljs.core.first(problems))], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bad_DASH_value], 0)),(expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.alpha._STAR_value_str_fn_STAR_.cljs$core$IFn$_invoke$arity$4(spec_name,form,path,(expound.problems.value_in.cljs$core$IFn$_invoke$arity$2 ? expound.problems.value_in.cljs$core$IFn$_invoke$arity$2(form,path) : expound.problems.value_in.call(null,form,path))) : expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,form,path,(expound.problems.value_in.cljs$core$IFn$_invoke$arity$2 ? expound.problems.value_in.cljs$core$IFn$_invoke$arity$2(form,path) : expound.problems.value_in.call(null,form,path)))),(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(_type,spec_name,form,path,problems,opts) : expound.alpha.expected_str.call(null,_type,spec_name,form,path,problems,opts))], 0));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_unknown,(function (_type,_spec_name,_form,_path,problems,_opts){
var vec__18034 = (function (){var G__18038 = (function (p__18040){
var map__18041 = p__18040;
var map__18041__$1 = (((((!((map__18041 == null))))?(((((map__18041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18041):map__18041);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,cljs.core.cst$kw$expound_SLASH_via);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,cljs.core.cst$kw$pred);
return expound.alpha.spec_w_error_message_QMARK_(via,pred);
});
var G__18039 = problems;
var fexpr__18037 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove);
return (fexpr__18037.cljs$core$IFn$_invoke$arity$2 ? fexpr__18037.cljs$core$IFn$_invoke$arity$2(G__18038,G__18039) : fexpr__18037.call(null,G__18038,G__18039));
})();
var with_msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18034,(0),null);
var no_msgs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18034,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\nor\n\n",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__18043){
var map__18044 = p__18043;
var map__18044__$1 = (((((!((map__18044 == null))))?(((((map__18044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18044):map__18044);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18044__$1,cljs.core.cst$kw$expound_SLASH_via);
var last_spec = cljs.core.last(via);
if(cljs.core.qualified_keyword_QMARK_(last_spec)){
return expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic((expound.alpha.error_message.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.error_message.cljs$core$IFn$_invoke$arity$1(last_spec) : expound.alpha.error_message.call(null,last_spec)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$good], 0));
} else {
return null;
}
}),with_msg),((cljs.core.seq(no_msgs))?expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("should satisfy\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.preds(no_msgs)], 0)):null)))));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expound$problem_SLASH_unknown,(function (type,spec_name,form,path,problems,opts){
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$val,problems)))){
} else {
throw (new Error(["Assert failed: ",[expound.util.assert_message,": All values should be the same, but they are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problems)].join(''),"\n","(apply = (map :val problems))"].join('')));
}

return expound.alpha.format_err("Spec failed",type,spec_name,form,path,problems,opts,(expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts) : expound.alpha.expected_str.call(null,type,spec_name,form,path,problems,opts)));
}));
expound.alpha.instrumentation_info = (function expound$alpha$instrumentation_info(failure,caller){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure)){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s:%s\n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$2(caller,"<filename missing>"),cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$2(caller,"<line number missing>")], 0));
} else {
return "";
}
});
expound.alpha.spec_name = (function expound$alpha$spec_name(ed){
if(cljs.core.truth_((function (){var G__18047 = cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure.cljs$core$IFn$_invoke$arity$1(ed);
var fexpr__18046 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$instrument,null], null), null);
return (fexpr__18046.cljs$core$IFn$_invoke$arity$1 ? fexpr__18046.cljs$core$IFn$_invoke$arity$1(G__18047) : fexpr__18046.call(null,G__18047));
})())){
if(cljs.core.truth_(cljs.core.cst$kw$cljs$spec$alpha_SLASH_args.cljs$core$IFn$_invoke$arity$1(ed))){
return cljs.core.cst$kw$args;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$cljs$spec$alpha_SLASH_ret.cljs$core$IFn$_invoke$arity$1(ed))){
return cljs.core.cst$kw$ret;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn.cljs$core$IFn$_invoke$arity$1(ed))){
return cljs.core.cst$kw$fn;
} else {
return cljs.core.first(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems.cljs$core$IFn$_invoke$arity$1(ed))));

}
}
}
} else {
return null;
}
});
expound.alpha.print_explain_data = (function expound$alpha$print_explain_data(opts,explain_data){
if(cljs.core.not(explain_data)){
return "Success!\n";
} else {
var explain_data_SINGLEQUOTE_ = expound.problems.annotate(explain_data);
var map__18048 = explain_data_SINGLEQUOTE_;
var map__18048__$1 = (((((!((map__18048 == null))))?(((((map__18048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18048):map__18048);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18048__$1,cljs.core.cst$kw$expound_SLASH_caller);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18048__$1,cljs.core.cst$kw$expound_SLASH_form);
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18048__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure);
var problems = expound.alpha.groups(cljs.core.cst$kw$expound_SLASH_problems.cljs$core$IFn$_invoke$arity$1(explain_data_SINGLEQUOTE_));
return expound.printer.no_trailing_whitespace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.alpha.instrumentation_info(failure,caller),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$none], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s%s\n%s %s %s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__4529__auto__ = (function expound$alpha$print_explain_data_$_iter__18078(s__18079){
return (new cljs.core.LazySeq(null,(function (){
var s__18079__$1 = s__18079;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__18079__$1);
if(temp__5735__auto__){
var s__18079__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18079__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18079__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18081 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18080 = (0);
while(true){
if((i__18080 < size__4528__auto__)){
var prob = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18080);
cljs.core.chunk_append(b__18081,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__18088 = cljs.core.cst$kw$expound$spec$problem_SLASH_type.cljs$core$IFn$_invoke$arity$1(prob);
var G__18089 = expound.alpha.spec_name(explain_data_SINGLEQUOTE_);
var G__18090 = form;
var G__18091 = cljs.core.cst$kw$expound_SLASH_in.cljs$core$IFn$_invoke$arity$1(prob);
var G__18092 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prob], null);
var G__18093 = opts;
return (expound.alpha.problem_group_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.problem_group_str.cljs$core$IFn$_invoke$arity$6(G__18088,G__18089,G__18090,G__18091,G__18092,G__18093) : expound.alpha.problem_group_str.call(null,G__18088,G__18089,G__18090,G__18091,G__18092,G__18093));
})()),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var s = (cljs.core.truth_(cljs.core.cst$kw$print_DASH_specs_QMARK_.cljs$core$IFn$_invoke$arity$1(opts))?expound.alpha.relevant_specs(cljs.core.cst$kw$expound_SLASH_problems.cljs$core$IFn$_invoke$arity$1(explain_data_SINGLEQUOTE_)):"");
if(cljs.core.empty_QMARK_(s)){
return s;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\n\n"].join('');
}
})())].join(''));

var G__18106 = (i__18080 + (1));
i__18080 = G__18106;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18081),expound$alpha$print_explain_data_$_iter__18078(cljs.core.chunk_rest(s__18079__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18081),null);
}
} else {
var prob = cljs.core.first(s__18079__$2);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__18100 = cljs.core.cst$kw$expound$spec$problem_SLASH_type.cljs$core$IFn$_invoke$arity$1(prob);
var G__18101 = expound.alpha.spec_name(explain_data_SINGLEQUOTE_);
var G__18102 = form;
var G__18103 = cljs.core.cst$kw$expound_SLASH_in.cljs$core$IFn$_invoke$arity$1(prob);
var G__18104 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prob], null);
var G__18105 = opts;
return (expound.alpha.problem_group_str.cljs$core$IFn$_invoke$arity$6 ? expound.alpha.problem_group_str.cljs$core$IFn$_invoke$arity$6(G__18100,G__18101,G__18102,G__18103,G__18104,G__18105) : expound.alpha.problem_group_str.call(null,G__18100,G__18101,G__18102,G__18103,G__18104,G__18105));
})()),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var s = (cljs.core.truth_(cljs.core.cst$kw$print_DASH_specs_QMARK_.cljs$core$IFn$_invoke$arity$1(opts))?expound.alpha.relevant_specs(cljs.core.cst$kw$expound_SLASH_problems.cljs$core$IFn$_invoke$arity$1(explain_data_SINGLEQUOTE_)):"");
if(cljs.core.empty_QMARK_(s)){
return s;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\n\n"].join('');
}
})())].join(''),expound$alpha$print_explain_data_$_iter__18078(cljs.core.rest(s__18079__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(problems);
})()),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic((expound.alpha.section_label.cljs$core$IFn$_invoke$arity$0 ? expound.alpha.section_label.cljs$core$IFn$_invoke$arity$0() : expound.alpha.section_label.call(null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$footer], 0)),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic("Detected",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$footer], 0)),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.count(problems),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$footer], 0)),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(problems)))?"error":"errors"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$footer], 0))], 0)))].join(''));
}
});
expound.alpha.minimal_fspec = (function expound$alpha$minimal_fspec(form){
var fspec_sp = cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sym,cljs.core.cst$kw$args], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_symbol_QMARK_,cljs.spec.alpha.rep_impl(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$k,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,"null",cljs.core.cst$kw$ret,"null",cljs.core.cst$kw$fn,"null"], null), null),cljs.core.cst$kw$v,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k,cljs.core.cst$kw$v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$ret,null,cljs.core.cst$kw$fn,null], null), null),cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,"null",cljs.core.cst$kw$ret,"null",cljs.core.cst$kw$fn,"null"], null), null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_symbol_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$k,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,"null",cljs.core.cst$kw$ret,"null",cljs.core.cst$kw$fn,"null"], null), null),cljs.core.cst$kw$v,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_))], null));
return cljs.spec.alpha.unform(fspec_sp,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.conform(fspec_sp,form),cljs.core.cst$kw$args,(function (args){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18107_SHARP_){
return (!((cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p1__18107_SHARP_) == null)));
}),args);
})));
});
expound.alpha.print_check_result = (function expound$alpha$print_check_result(check_result){
var map__18109 = check_result;
var map__18109__$1 = (((((!((map__18109 == null))))?(((((map__18109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18109):map__18109);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18109__$1,cljs.core.cst$kw$sym,cljs.core.cst$sym$_LT_unknown_GT_);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18109__$1,cljs.core.cst$kw$spec);
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18109__$1,cljs.core.cst$kw$failure);
var ret = (function (){var or__4126__auto__ = cljs.core.cst$kw$clojure$spec$test$check_SLASH_ret.cljs$core$IFn$_invoke$arity$1(check_result);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$clojure$test$check_SLASH_ret.cljs$core$IFn$_invoke$arity$1(check_result);
}
})();
var explain_data = cljs.core.ex_data(failure);
var bad_args = (function (){var or__4126__auto__ = cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_args.cljs$core$IFn$_invoke$arity$1(explain_data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.first(cljs.core.cst$kw$smallest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$shrunk.cljs$core$IFn$_invoke$arity$1(ret)));
}
})();
var failure_reason = cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure.cljs$core$IFn$_invoke$arity$1(explain_data);
var sym__$1 = (function (){var or__4126__auto__ = sym;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$_LT_unknown_GT_;
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.alpha.label.cljs$core$IFn$_invoke$arity$3(expound.alpha.check_header_size,["Checked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)].join(''),"=")),"\n\n",(cljs.core.truth_((function (){var and__4115__auto__ = failure;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.re_matches(/Unable to construct gen at.*/,failure.message);
} else {
return and__4115__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(failure.message)," in\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.printer.indent.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.form(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(check_result)))))),"\n"].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_args_DASH_spec,failure_reason))?["Failed to check function.\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.printer.pprint_str(expound.alpha.minimal_fspec(cljs.spec.alpha.form(spec)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bad_DASH_value], 0))),"\n\nshould contain an :args spec\n"].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_fn,failure_reason))?(((!((sym__$1 == null))))?["Failed to check function.\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.indent.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym__$1], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bad_DASH_value], 0))),"\n\nis not defined\n"].join(''):"Cannot check undefined function\n"):(cljs.core.truth_((function (){var and__4115__auto__ = explain_data;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$check_DASH_failed,cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure.cljs$core$IFn$_invoke$arity$1(explain_data));
} else {
return and__4115__auto__;
}
})())?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18116_18121 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18117_18122 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18118_18123 = true;
var _STAR_print_fn_STAR__temp_val__18119_18124 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18118_18123);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18119_18124);

try{var G__18120_18125 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(explain_data,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (p1__18108_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,cljs.core.cst$kw$expound_SLASH_check_DASH_fn_DASH_call,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym__$1,null,(1),null)),bad_args));
}),p1__18108_SHARP_);
}));
(cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1(G__18120_18125) : cljs.spec.alpha._STAR_explain_out_STAR_.call(null,G__18120_18125));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18117_18122);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18116_18121);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(cljs.core.truth_(failure)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.printer.pprint_str(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym__$1,null,(1),null)),bad_args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bad_DASH_value], 0))),"\n\n threw error\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.printer.pprint_str(failure))].join(''):"Success!\n"
)))))].join('');
});
expound.alpha.explain_data_QMARK_ = (function expound$alpha$explain_data_QMARK_(data){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__18126){
return cljs.core.map_QMARK_(G__18126);
}),(function (G__18126){
return cljs.core.contains_QMARK_(G__18126,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
}),(function (G__18126){
return cljs.core.contains_QMARK_(G__18126,cljs.core.cst$kw$cljs$spec$alpha_SLASH_spec);
}),(function (G__18126){
return cljs.core.contains_QMARK_(G__18126,cljs.core.cst$kw$cljs$spec$alpha_SLASH_value);
})], null),(function (G__18126){
return ((cljs.core.map_QMARK_(G__18126)) && (cljs.core.contains_QMARK_(G__18126,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems)) && (cljs.core.contains_QMARK_(G__18126,cljs.core.cst$kw$cljs$spec$alpha_SLASH_spec)) && (cljs.core.contains_QMARK_(G__18126,cljs.core.cst$kw$cljs$spec$alpha_SLASH_value)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,cljs.core.cst$kw$cljs$spec$alpha_SLASH_spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,cljs.core.cst$kw$cljs$spec$alpha_SLASH_spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,cljs.core.cst$kw$cljs$spec$alpha_SLASH_spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_value], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_spec)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_value))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure], null)])),data);
});
expound.alpha.check_result_QMARK_ = (function expound$alpha$check_result_QMARK_(data){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$alpha_SLASH_spec], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$alpha_SLASH_sym,cljs.core.cst$kw$expound$alpha_SLASH_failure,cljs.core.cst$kw$clojure$spec$test$check_SLASH_ret], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__18127){
return cljs.core.map_QMARK_(G__18127);
}),(function (G__18127){
return cljs.core.contains_QMARK_(G__18127,cljs.core.cst$kw$spec);
})], null),(function (G__18127){
return ((cljs.core.map_QMARK_(G__18127)) && (cljs.core.contains_QMARK_(G__18127,cljs.core.cst$kw$spec)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sym,cljs.core.cst$kw$failure,cljs.core.cst$kw$ret], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$alpha_SLASH_spec], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spec], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$alpha_SLASH_sym,cljs.core.cst$kw$expound$alpha_SLASH_failure,cljs.core.cst$kw$clojure$spec$test$check_SLASH_ret], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$spec))], null),null])),data);
});
expound.alpha.printer_str = (function expound$alpha$printer_str(opts,data){
var opts_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$show_DASH_valid_DASH_values_QMARK_,false,cljs.core.cst$kw$print_DASH_specs_QMARK_,true], null),opts], 0));
var enable_color_QMARK_ = (function (){var or__4126__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$none,cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$theme,cljs.core.cst$kw$none));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return expound.ansi._STAR_enable_color_STAR_;
}
})();
var _STAR_value_str_fn_STAR__orig_val__18128 = expound.alpha._STAR_value_str_fn_STAR_;
var _STAR_enable_color_STAR__orig_val__18129 = expound.ansi._STAR_enable_color_STAR_;
var _STAR_print_styles_STAR__orig_val__18130 = expound.ansi._STAR_print_styles_STAR_;
var _STAR_value_str_fn_STAR__temp_val__18131 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$value_DASH_str_DASH_fn,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.alpha.value_in_context,opts_SINGLEQUOTE_));
var _STAR_enable_color_STAR__temp_val__18132 = enable_color_QMARK_;
var _STAR_print_styles_STAR__temp_val__18133 = (function (){var G__18134 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$theme,(cljs.core.truth_(enable_color_QMARK_)?cljs.core.cst$kw$figwheel_DASH_theme:cljs.core.cst$kw$none));
var G__18134__$1 = (((G__18134 instanceof cljs.core.Keyword))?G__18134.fqn:null);
switch (G__18134__$1) {
case "figwheel-theme":
return expound.alpha.figwheel_theme;

break;
case "none":
return cljs.core.PersistentArrayMap.EMPTY;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18134__$1)].join('')));

}
})();
(expound.alpha._STAR_value_str_fn_STAR_ = _STAR_value_str_fn_STAR__temp_val__18131);

(expound.ansi._STAR_enable_color_STAR_ = _STAR_enable_color_STAR__temp_val__18132);

(expound.ansi._STAR_print_styles_STAR_ = _STAR_print_styles_STAR__temp_val__18133);

try{if(((expound.alpha.explain_data_QMARK_(data)) || ((data == null)))){
return expound.alpha.print_explain_data(opts_SINGLEQUOTE_,data);
} else {
if(expound.alpha.check_result_QMARK_(data)){
return expound.alpha.print_check_result(data);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown data:\n\n",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,data], null));

}
}
}finally {(expound.ansi._STAR_print_styles_STAR_ = _STAR_print_styles_STAR__orig_val__18130);

(expound.ansi._STAR_enable_color_STAR_ = _STAR_enable_color_STAR__orig_val__18129);

(expound.alpha._STAR_value_str_fn_STAR_ = _STAR_value_str_fn_STAR__orig_val__18128);
}});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$alpha_SLASH_error_DASH_message,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$k,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_),cljs.core.cst$kw$ret,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$k,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$k,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.nilable_impl(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),null,null,null));
/**
 * Given a spec named `k`, return its human-readable error message.
 */
expound.alpha.error_message = (function expound$alpha$error_message(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(expound.alpha.registry_ref),k);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$alpha_SLASH_custom_DASH_printer,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$opts,cljs.core.cst$kw$expound$printer_SLASH_opts),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_ifn_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$opts,cljs.core.cst$kw$expound$printer_SLASH_opts),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$opts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$printer_SLASH_opts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$printer_SLASH_opts], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$opts,cljs.core.cst$kw$expound$printer_SLASH_opts),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_ifn_QMARK_,cljs.core.ifn_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_ifn_QMARK_,null,null,null));
/**
 * Returns a printer.
 * 
 *   Options:
 * - `:show-valid-values?` - if `false`, replaces valid values with "..."
 * - `:value-str-fn`       - function to print bad values
 * - `:print-specs?`       - if `true`, display "Relevant specs" section. Otherwise, omit that section.
 * - `:theme`               - enables color theme. Possible values: `:figwheel-theme`, `:none`
 */
expound.alpha.custom_printer = (function expound$alpha$custom_printer(opts){
return (function (explain_data){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.printer_str(opts,explain_data)], 0));
});
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$alpha_SLASH_printer,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$explain_DASH_data,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$explain_DASH_data,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$explain_DASH_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$explain_DASH_data,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.nil_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,null,null,null));
/**
 * Prints `explain-data` in a human-readable format.
 */
expound.alpha.printer = (function expound$alpha$printer(explain_data){
var fexpr__18136 = expound.alpha.custom_printer(cljs.core.PersistentArrayMap.EMPTY);
return (fexpr__18136.cljs$core$IFn$_invoke$arity$1 ? fexpr__18136.cljs$core$IFn$_invoke$arity$1(explain_data) : fexpr__18136.call(null,explain_data));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$alpha_SLASH_expound_DASH_str,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$spec,cljs.core.cst$kw$expound$spec_SLASH_spec,cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$expound$printer_SLASH_opts)),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$spec,cljs.core.cst$kw$expound$spec_SLASH_spec,cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$expound$printer_SLASH_opts)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spec,cljs.core.cst$kw$form,cljs.core.cst$kw$opts], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$spec_SLASH_spec,cljs.core.any_QMARK_,cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$expound$printer_SLASH_opts,cljs.core.cst$kw$expound$printer_SLASH_opts)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$spec_SLASH_spec,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$expound$printer_SLASH_opts)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$spec,cljs.core.cst$kw$expound$spec_SLASH_spec,cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$expound$printer_SLASH_opts)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,null,null,null));
/**
 * Given a `spec` and a `form`, either returns success message or a human-readable error message.
 */
expound.alpha.expound_str = (function expound$alpha$expound_str(var_args){
var G__18138 = arguments.length;
switch (G__18138) {
case 2:
return expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$2 = (function (spec,form){
return expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,form,cljs.core.PersistentArrayMap.EMPTY);
}));

(expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3 = (function (spec,form,opts){
return expound.alpha.printer_str(opts,cljs.spec.alpha.explain_data(spec,form));
}));

(expound.alpha.expound_str.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$alpha_SLASH_expound,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$spec,cljs.core.cst$kw$expound$spec_SLASH_spec,cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$expound$printer_SLASH_opts)),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$spec,cljs.core.cst$kw$expound$spec_SLASH_spec,cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$expound$printer_SLASH_opts)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spec,cljs.core.cst$kw$form,cljs.core.cst$kw$opts], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$spec_SLASH_spec,cljs.core.any_QMARK_,cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$expound$printer_SLASH_opts,cljs.core.cst$kw$expound$printer_SLASH_opts)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expound$spec_SLASH_spec,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$expound$printer_SLASH_opts)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$spec,cljs.core.cst$kw$expound$spec_SLASH_spec,cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$opts,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$expound$printer_SLASH_opts)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.nil_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,null,null,null));
/**
 * Given a `spec` and a `form`, either prints a success message or a human-readable error message.
 */
expound.alpha.expound = (function expound$alpha$expound(var_args){
var G__18141 = arguments.length;
switch (G__18141) {
case 2:
return expound.alpha.expound.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return expound.alpha.expound.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(expound.alpha.expound.cljs$core$IFn$_invoke$arity$2 = (function (spec,form){
return expound.alpha.expound.cljs$core$IFn$_invoke$arity$3(spec,form,cljs.core.PersistentArrayMap.EMPTY);
}));

(expound.alpha.expound.cljs$core$IFn$_invoke$arity$3 = (function (spec,form,opts){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,form,opts)], 0));
}));

(expound.alpha.expound.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$alpha_SLASH_defmsg,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$k,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$error_DASH_message,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$k,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$error_DASH_message,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k,cljs.core.cst$kw$error_DASH_message], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_,cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$k,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$error_DASH_message,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.nil_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,null,null,null));
/**
 * Associates the spec named `k` with `error-message`.
 */
expound.alpha.defmsg = (function expound$alpha$defmsg(k,error_message){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(expound.alpha.registry_ref,cljs.core.assoc,k,error_message);

return null;
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$alpha_SLASH_explain_DASH_result,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$check_DASH_result,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$check_DASH_result,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$check_DASH_result], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$check_DASH_result,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.nil_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,null,null,null));
/**
 * Given a result from `clojure.spec.test.alpha/check`, prints a summary of the result.
 */
expound.alpha.explain_result = (function expound$alpha$explain_result(check_result){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha._STAR_explain_out_STAR_,cljs.spec.alpha.explain_printer)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot print check results with default printer. Use 'set!' or 'binding' to use Expound printer.",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return (cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1(check_result) : cljs.spec.alpha._STAR_explain_out_STAR_.call(null,check_result));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$alpha_SLASH_explain_DASH_result_DASH_str,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$check_DASH_result,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$check_DASH_result,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$check_DASH_result], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$check_DASH_result,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,null,null,null));
/**
 * Given a result from `clojure.spec.test.alpha/check`, returns a string summarizing the result.
 */
expound.alpha.explain_result_str = (function expound$alpha$explain_result_str(check_result){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18143_18147 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18144_18148 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18145_18149 = true;
var _STAR_print_fn_STAR__temp_val__18146_18150 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18145_18149);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18146_18150);

try{expound.alpha.explain_result(check_result);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18144_18148);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18143_18147);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$alpha_SLASH_explain_DASH_results,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$check_DASH_results,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_))),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$check_DASH_results,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$check_DASH_results], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$s_SLASH_nilable,cljs.core.cst$sym$map_QMARK_),cljs.spec.alpha.nilable_impl(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_,null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__18151){
return cljs.core.coll_QMARK_(G__18151);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_))], null),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_))], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$check_DASH_results,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.nil_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,null,null,null));
/**
 * Given a sequence of results from `clojure.spec.test.alpha/check`, prints a summary of the results.
 */
expound.alpha.explain_results = (function expound$alpha$explain_results(check_results){
var seq__18152_18156 = cljs.core.seq(cljs.core.butlast(check_results));
var chunk__18153_18157 = null;
var count__18154_18158 = (0);
var i__18155_18159 = (0);
while(true){
if((i__18155_18159 < count__18154_18158)){
var check_result_18160 = chunk__18153_18157.cljs$core$IIndexed$_nth$arity$2(null,i__18155_18159);
expound.alpha.explain_result(check_result_18160);

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\n"], 0));


var G__18161 = seq__18152_18156;
var G__18162 = chunk__18153_18157;
var G__18163 = count__18154_18158;
var G__18164 = (i__18155_18159 + (1));
seq__18152_18156 = G__18161;
chunk__18153_18157 = G__18162;
count__18154_18158 = G__18163;
i__18155_18159 = G__18164;
continue;
} else {
var temp__5735__auto___18165 = cljs.core.seq(seq__18152_18156);
if(temp__5735__auto___18165){
var seq__18152_18166__$1 = temp__5735__auto___18165;
if(cljs.core.chunked_seq_QMARK_(seq__18152_18166__$1)){
var c__4556__auto___18167 = cljs.core.chunk_first(seq__18152_18166__$1);
var G__18168 = cljs.core.chunk_rest(seq__18152_18166__$1);
var G__18169 = c__4556__auto___18167;
var G__18170 = cljs.core.count(c__4556__auto___18167);
var G__18171 = (0);
seq__18152_18156 = G__18168;
chunk__18153_18157 = G__18169;
count__18154_18158 = G__18170;
i__18155_18159 = G__18171;
continue;
} else {
var check_result_18172 = cljs.core.first(seq__18152_18166__$1);
expound.alpha.explain_result(check_result_18172);

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\n"], 0));


var G__18173 = cljs.core.next(seq__18152_18166__$1);
var G__18174 = null;
var G__18175 = (0);
var G__18176 = (0);
seq__18152_18156 = G__18173;
chunk__18153_18157 = G__18174;
count__18154_18158 = G__18175;
i__18155_18159 = G__18176;
continue;
}
} else {
}
}
break;
}

return expound.alpha.explain_result(cljs.core.last(check_results));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$alpha_SLASH_explain_DASH_results_DASH_str,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$check_DASH_results,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_))),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$check_DASH_results,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$check_DASH_results], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$s_SLASH_nilable,cljs.core.cst$sym$map_QMARK_),cljs.spec.alpha.nilable_impl(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_,null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__18177){
return cljs.core.coll_QMARK_(G__18177);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_))], null),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_))], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$check_DASH_results,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,null,null,null));
/**
 * Given a sequence of results from `clojure.spec.test.alpha/check`, returns a string summarizing the results.
 */
expound.alpha.explain_results_str = (function expound$alpha$explain_results_str(check_results){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18178_18182 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18179_18183 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18180_18184 = true;
var _STAR_print_fn_STAR__temp_val__18181_18185 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18180_18184);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18181_18185);

try{expound.alpha.explain_results(check_results);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18179_18183);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18178_18182);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
