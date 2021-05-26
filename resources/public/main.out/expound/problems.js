// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('expound.problems');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('expound.paths');
goog.require('cljs.spec.alpha');
expound.problems.adjust_in = (function expound$problems$adjust_in(form,problem){
var in1 = expound.paths.in_with_kps(form,cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(problem),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(problem),cljs.core.PersistentVector.EMPTY);
var in2 = (function (){var paths = expound.paths.paths_to_value(form,cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(problem),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(paths))){
return cljs.core.first(paths);
} else {
return null;
}
})();
var in3 = (function (){try{return expound.paths.in_with_kps(form,cljs.spec.alpha.unform(cljs.core.last(cljs.core.cst$kw$via.cljs$core$IFn$_invoke$arity$1(problem)),cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(problem)),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(problem),cljs.core.PersistentVector.EMPTY);
}catch (e17908){var _e = e17908;
return null;
}})();
var new_in = (cljs.core.truth_(in1)?in1:(cljs.core.truth_(in2)?in2:(cljs.core.truth_(in3)?in3:(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__17912 = cljs.core.first(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem));
var fexpr__17911 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ret,null], null), null);
return (fexpr__17911.cljs$core$IFn$_invoke$arity$1 ? fexpr__17911.cljs$core$IFn$_invoke$arity$1(G__17912) : fexpr__17911.call(null,G__17912));
}
})())?cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(problem):null
))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,cljs.core.cst$kw$expound_SLASH_in,new_in);
});
expound.problems.adjust_path = (function expound$problems$adjust_path(failure,problem){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,cljs.core.cst$kw$expound_SLASH_path,(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure))?(function (){var G__17916 = cljs.core.first(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem));
var fexpr__17915 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$ret,null], null), null);
return (fexpr__17915.cljs$core$IFn$_invoke$arity$1 ? fexpr__17915.cljs$core$IFn$_invoke$arity$1(G__17916) : fexpr__17915.call(null,G__17916));
})():false))?cljs.core.vec(cljs.core.rest(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem))):cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem)));
});
expound.problems.add_spec = (function expound$problems$add_spec(spec,problem){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,cljs.core.cst$kw$spec,spec);
});
expound.problems.fix_via = (function expound$problems$fix_via(spec,problem){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.first(cljs.core.cst$kw$via.cljs$core$IFn$_invoke$arity$1(problem)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,cljs.core.cst$kw$expound_SLASH_via,cljs.core.cst$kw$via.cljs$core$IFn$_invoke$arity$1(problem));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,cljs.core.cst$kw$expound_SLASH_via,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null),cljs.core.cst$kw$via.cljs$core$IFn$_invoke$arity$1(problem)));
}
});
expound.problems.missing_spec_QMARK_ = (function expound$problems$missing_spec_QMARK_(_failure,problem){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("no method",cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.not_in_set_QMARK_ = (function expound$problems$not_in_set_QMARK_(_failure,problem){
return cljs.core.set_QMARK_(cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.fspec_exception_failure_QMARK_ = (function expound$problems$fspec_exception_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$check_DASH_failed,failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem))));
});
expound.problems.fspec_ret_failure_QMARK_ = (function expound$problems$fspec_ret_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$check_DASH_failed,failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ret,cljs.core.last(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.fspec_fn_failure_QMARK_ = (function expound$problems$fspec_fn_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$check_DASH_failed,failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,cljs.core.last(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.check_ret_failure_QMARK_ = (function expound$problems$check_ret_failure_QMARK_(failure,problem){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$check_DASH_failed,failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ret,cljs.core.last(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.check_fn_failure_QMARK_ = (function expound$problems$check_fn_failure_QMARK_(failure,problem){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$check_DASH_failed,failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,cljs.core.last(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.missing_key_QMARK_ = (function expound$problems$missing_key_QMARK_(_failure,problem){
var pred = cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(problem);
return ((cljs.core.seq_QMARK_(pred)) && (((2) < cljs.core.count(pred))) && (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expound$spec_SLASH_contains_DASH_key_DASH_pred,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pred,(2)))));
});
expound.problems.insufficient_input_QMARK_ = (function expound$problems$insufficient_input_QMARK_(_failure,problem){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Insufficient input",null], null), null),cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.extra_input_QMARK_ = (function expound$problems$extra_input_QMARK_(_failure,problem){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Extra input",null], null), null),cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(problem));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$problems_SLASH_ptype,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$failure,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$instrument,"null",cljs.core.cst$kw$assertion_DASH_failed,"null",cljs.core.cst$kw$check_DASH_failed,"null"], null), null)),cljs.core.cst$kw$problem,cljs.core.cst$kw$expound$spec_SLASH_problem,cljs.core.cst$kw$skip_DASH_location_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$failure,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$instrument,"null",cljs.core.cst$kw$assertion_DASH_failed,"null",cljs.core.cst$kw$check_DASH_failed,"null"], null), null)),cljs.core.cst$kw$problem,cljs.core.cst$kw$expound$spec_SLASH_problem,cljs.core.cst$kw$skip_DASH_location_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$failure,cljs.core.cst$kw$problem,cljs.core.cst$kw$skip_DASH_location_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$instrument,"null",cljs.core.cst$kw$assertion_DASH_failed,"null",cljs.core.cst$kw$check_DASH_failed,"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$instrument,null,cljs.core.cst$kw$assertion_DASH_failed,null,cljs.core.cst$kw$check_DASH_failed,null], null), null),null),cljs.core.cst$kw$expound$spec_SLASH_problem,cljs.core.boolean_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$instrument,"null",cljs.core.cst$kw$assertion_DASH_failed,"null",cljs.core.cst$kw$check_DASH_failed,"null"], null), null)),cljs.core.cst$kw$expound$spec_SLASH_problem,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$failure,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$instrument,"null",cljs.core.cst$kw$assertion_DASH_failed,"null",cljs.core.cst$kw$check_DASH_failed,"null"], null), null)),cljs.core.cst$kw$problem,cljs.core.cst$kw$expound$spec_SLASH_problem,cljs.core.cst$kw$skip_DASH_location_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
expound.problems.ptype = (function expound$problems$ptype(failure,problem,skip_locations_QMARK_){
if(cljs.core.truth_(cljs.core.cst$kw$expound$spec$problem_SLASH_type.cljs$core$IFn$_invoke$arity$1(problem))){
return cljs.core.cst$kw$expound$spec$problem_SLASH_type.cljs$core$IFn$_invoke$arity$1(problem);
} else {
if(((cljs.core.not(skip_locations_QMARK_)) && (expound.problems.fspec_ret_failure_QMARK_(failure,problem)))){
return cljs.core.cst$kw$expound$problem_SLASH_fspec_DASH_ret_DASH_failure;
} else {
if(expound.problems.fspec_exception_failure_QMARK_(failure,problem)){
return cljs.core.cst$kw$expound$problem_SLASH_fspec_DASH_exception_DASH_failure;
} else {
if(((cljs.core.not(skip_locations_QMARK_)) && (expound.problems.fspec_fn_failure_QMARK_(failure,problem)))){
return cljs.core.cst$kw$expound$problem_SLASH_fspec_DASH_fn_DASH_failure;
} else {
if(((cljs.core.not(skip_locations_QMARK_)) && (expound.problems.check_ret_failure_QMARK_(failure,problem)))){
return cljs.core.cst$kw$expound$problem_SLASH_check_DASH_ret_DASH_failure;
} else {
if(((cljs.core.not(skip_locations_QMARK_)) && (expound.problems.check_fn_failure_QMARK_(failure,problem)))){
return cljs.core.cst$kw$expound$problem_SLASH_check_DASH_fn_DASH_failure;
} else {
if(expound.problems.insufficient_input_QMARK_(failure,problem)){
return cljs.core.cst$kw$expound$problem_SLASH_insufficient_DASH_input;
} else {
if(expound.problems.extra_input_QMARK_(failure,problem)){
return cljs.core.cst$kw$expound$problem_SLASH_extra_DASH_input;
} else {
if(expound.problems.not_in_set_QMARK_(failure,problem)){
return cljs.core.cst$kw$expound$problem_SLASH_not_DASH_in_DASH_set;
} else {
if(expound.problems.missing_key_QMARK_(failure,problem)){
return cljs.core.cst$kw$expound$problem_SLASH_missing_DASH_key;
} else {
if(expound.problems.missing_spec_QMARK_(failure,problem)){
return cljs.core.cst$kw$expound$problem_SLASH_missing_DASH_spec;
} else {
return cljs.core.cst$kw$expound$problem_SLASH_unknown;

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
}
});
expound.problems.annotate = (function expound$problems$annotate(explain_data){
var map__17919 = explain_data;
var map__17919__$1 = (((((!((map__17919 == null))))?(((((map__17919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17919):map__17919);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17919__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17919__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_value);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17919__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_args);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17919__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_ret);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17919__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17919__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17919__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_spec);
var caller = (function (){var or__4126__auto__ = cljs.core.cst$kw$clojure$spec$test$alpha_SLASH_caller.cljs$core$IFn$_invoke$arity$1(explain_data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$orchestra$spec$test_SLASH_caller.cljs$core$IFn$_invoke$arity$1(explain_data);
}
})();
var form = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$instrument,failure))?value:((cljs.core.contains_QMARK_(explain_data,cljs.core.cst$kw$cljs$spec$alpha_SLASH_ret))?ret:((cljs.core.contains_QMARK_(explain_data,cljs.core.cst$kw$cljs$spec$alpha_SLASH_args))?args:((cljs.core.contains_QMARK_(explain_data,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn))?fn:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid explain-data",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$explain_DASH_data,explain_data], null))})()
))));
var problems_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.adjust_in,form),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.adjust_path,failure),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.add_spec,spec),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.fix_via,spec),(function (p1__17917_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17917_SHARP_,cljs.core.cst$kw$expound_SLASH_form,form);
}),(function (p1__17918_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17918_SHARP_,cljs.core.cst$kw$expound$spec$problem_SLASH_type,expound.problems.ptype(failure,p1__17918_SHARP_,false));
})], 0)),problems);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(explain_data,cljs.core.cst$kw$expound_SLASH_form,form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$expound_SLASH_caller,caller,cljs.core.cst$kw$expound_SLASH_problems,problems_SINGLEQUOTE_], 0));
});
expound.problems.type = expound.problems.ptype;
expound.problems.value_in = expound.paths.value_in;
