// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('expound.printer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.pprint');
goog.require('clojure.set');
goog.require('expound.util');
goog.require('expound.ansi');
goog.require('expound.paths');
goog.require('clojure.walk');
goog.require('goog.string.format');
goog.require('goog.string');
expound.printer.indent_level = (2);
expound.printer.anon_fn_str = "<anonymous function>";
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$spec_SLASH_spec_DASH_conjunction,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$op,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_and),"null",cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_or),"null"], null), null),cljs.core.cst$kw$specs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$op,cljs.core.cst$kw$specs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$and,null,cljs.core.cst$sym$or,null], null), null),cljs.spec.alpha.rep_PLUS_impl(cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$and),"null",cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$or),"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction)], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$kw,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$conj,cljs.core.cst$kw$expound$spec_SLASH_spec_DASH_conjunction),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kw,cljs.core.cst$kw$conj], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$expound$spec_SLASH_spec_DASH_conjunction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_,cljs.core.cst$kw$expound$spec_SLASH_spec_DASH_conjunction], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$spec_SLASH_key_DASH_spec,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$keys,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys),"null"], null), null),cljs.core.cst$kw$clauses,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$qualifier,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$req_DASH_un,"null",cljs.core.cst$kw$opt_DASH_un,"null",cljs.core.cst$kw$req,"null",cljs.core.cst$kw$opt,"null"], null), null),cljs.core.cst$kw$specs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keys,cljs.core.cst$kw$clauses], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys,null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,null], null), null),cljs.spec.alpha.rep_impl(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$qualifier,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$req_DASH_un,"null",cljs.core.cst$kw$opt_DASH_un,"null",cljs.core.cst$kw$req,"null",cljs.core.cst$kw$opt,"null"], null), null),cljs.core.cst$kw$specs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$qualifier,cljs.core.cst$kw$specs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$req_DASH_un,null,cljs.core.cst$kw$opt_DASH_un,null,cljs.core.cst$kw$req,null,cljs.core.cst$kw$opt,null], null), null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__17782){
return cljs.core.coll_QMARK_(G__17782);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction)], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$req_DASH_un,"null",cljs.core.cst$kw$opt_DASH_un,"null",cljs.core.cst$kw$req,"null",cljs.core.cst$kw$opt,"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys),"null",cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys),"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$qualifier,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$req_DASH_un,"null",cljs.core.cst$kw$opt_DASH_un,"null",cljs.core.cst$kw$req,"null",cljs.core.cst$kw$opt,"null"], null), null),cljs.core.cst$kw$specs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$expound$spec_SLASH_kw_DASH_or_DASH_conjunction)))], null)));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$expound$spec_SLASH_contains_DASH_key_DASH_pred,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$simple,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$contains,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_),"null"], null), null),cljs.core.cst$kw$arg,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$_PERCENT_),"null"], null), null),cljs.core.cst$kw$kw,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.cst$kw$compound,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$op,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_and),"null",cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_or),"null"], null), null),cljs.core.cst$kw$clauses,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$expound$spec_SLASH_contains_DASH_key_DASH_pred))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple,cljs.core.cst$kw$compound], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$contains,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_),"null"], null), null),cljs.core.cst$kw$arg,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$_PERCENT_),"null"], null), null),cljs.core.cst$kw$kw,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$op,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_and),"null",cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_or),"null"], null), null),cljs.core.cst$kw$clauses,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$expound$spec_SLASH_contains_DASH_key_DASH_pred))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$contains,cljs.core.cst$kw$arg,cljs.core.cst$kw$kw], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$contains_QMARK_,null,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_PERCENT_,null], null), null),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$contains_QMARK_),"null",cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$_PERCENT_),"null"], null), null),cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$op,cljs.core.cst$kw$clauses], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core_SLASH_and,null,cljs.core.cst$sym$cljs$core_SLASH_or,null], null), null),cljs.spec.alpha.rep_PLUS_impl(cljs.core.cst$kw$expound$spec_SLASH_contains_DASH_key_DASH_pred,cljs.core.cst$kw$expound$spec_SLASH_contains_DASH_key_DASH_pred)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_and),"null",cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$cljs$core_SLASH_or),"null"], null), null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$expound$spec_SLASH_contains_DASH_key_DASH_pred)], null))], null),null));
expound.printer.str_width = (function expound$printer$str_width(lines){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,lines));
});
expound.printer.max_column_width = (function expound$printer$max_column_width(rows,i){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17783_SHARP_){
return expound.printer.str_width(clojure.string.split_lines(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__17783_SHARP_,i))));
}),rows));
});
expound.printer.max_row_height = (function expound$printer$max_row_height(row){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17784_SHARP_){
return cljs.core.count(clojure.string.split_lines(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17784_SHARP_)));
}),row));
});
expound.printer.indented_multirows = (function expound$printer$indented_multirows(column_widths,multi_rows){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (multi_row){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
var G__17785 = ["%-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(column_widths,i)),"s"].join('');
var G__17786 = v;
return (expound.printer.format.cljs$core$IFn$_invoke$arity$2 ? expound.printer.format.cljs$core$IFn$_invoke$arity$2(G__17785,G__17786) : expound.printer.format.call(null,G__17785,G__17786));
}),row);
}),multi_row);
}),multi_rows);
});
expound.printer.formatted_row = (function expound$printer$formatted_row(row,edge,spacer,middle){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(edge),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spacer),clojure.string.join.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(spacer),cljs.core.str.cljs$core$IFn$_invoke$arity$1(middle),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spacer)].join(''),row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spacer),cljs.core.str.cljs$core$IFn$_invoke$arity$1(edge)].join('');
});
expound.printer.table = (function expound$printer$table(multirows){
var header = cljs.core.first(cljs.core.first(multirows));
var columns_dividers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17787_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17787_SHARP_)).length),"-"));
}),header);
var header_columns_dividers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17788_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17788_SHARP_)).length),"="));
}),header);
var header_divider = expound.printer.formatted_row(header_columns_dividers,"|","=","+");
var row_divider = expound.printer.formatted_row(columns_dividers,"|","-","+");
var formatted_multirows = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (multirow){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return expound.printer.formatted_row(row,"|"," ","|");
}),multirow);
}),multirows);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.butlast(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([formatted_multirows,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_divider], null)], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_divider], null)))], 0)))], 0));
});
expound.printer.multirow = (function expound$printer$multirow(row_height,row){
var split_row_contents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (v){
return clojure.string.split_lines(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
}),row);
var iter__4529__auto__ = (function expound$printer$multirow_$_iter__17789(s__17790){
return (new cljs.core.LazySeq(null,(function (){
var s__17790__$1 = s__17790;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__17790__$1);
if(temp__5735__auto__){
var s__17790__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17790__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__17790__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__17792 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__17791 = (0);
while(true){
if((i__17791 < size__4528__auto__)){
var row_idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__17791);
cljs.core.chunk_append(b__17792,(function (){var iter__4529__auto__ = ((function (i__17791,row_idx,c__4527__auto__,size__4528__auto__,b__17792,s__17790__$2,temp__5735__auto__,split_row_contents){
return (function expound$printer$multirow_$_iter__17789_$_iter__17793(s__17794){
return (new cljs.core.LazySeq(null,((function (i__17791,row_idx,c__4527__auto__,size__4528__auto__,b__17792,s__17790__$2,temp__5735__auto__,split_row_contents){
return (function (){
var s__17794__$1 = s__17794;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__17794__$1);
if(temp__5735__auto____$1){
var s__17794__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17794__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__17794__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__17796 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__17795 = (0);
while(true){
if((i__17795 < size__4528__auto____$1)){
var col_idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__17795);
cljs.core.chunk_append(b__17796,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(split_row_contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_idx,row_idx], null),""));

var G__17801 = (i__17795 + (1));
i__17795 = G__17801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17796),expound$printer$multirow_$_iter__17789_$_iter__17793(cljs.core.chunk_rest(s__17794__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17796),null);
}
} else {
var col_idx = cljs.core.first(s__17794__$2);
return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(split_row_contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_idx,row_idx], null),""),expound$printer$multirow_$_iter__17789_$_iter__17793(cljs.core.rest(s__17794__$2)));
}
} else {
return null;
}
break;
}
});})(i__17791,row_idx,c__4527__auto__,size__4528__auto__,b__17792,s__17790__$2,temp__5735__auto__,split_row_contents))
,null,null));
});})(i__17791,row_idx,c__4527__auto__,size__4528__auto__,b__17792,s__17790__$2,temp__5735__auto__,split_row_contents))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(row)));
})());

var G__17802 = (i__17791 + (1));
i__17791 = G__17802;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17792),expound$printer$multirow_$_iter__17789(cljs.core.chunk_rest(s__17790__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17792),null);
}
} else {
var row_idx = cljs.core.first(s__17790__$2);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (row_idx,s__17790__$2,temp__5735__auto__,split_row_contents){
return (function expound$printer$multirow_$_iter__17789_$_iter__17797(s__17798){
return (new cljs.core.LazySeq(null,(function (){
var s__17798__$1 = s__17798;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__17798__$1);
if(temp__5735__auto____$1){
var s__17798__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17798__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__17798__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__17800 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__17799 = (0);
while(true){
if((i__17799 < size__4528__auto__)){
var col_idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__17799);
cljs.core.chunk_append(b__17800,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(split_row_contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_idx,row_idx], null),""));

var G__17803 = (i__17799 + (1));
i__17799 = G__17803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17800),expound$printer$multirow_$_iter__17789_$_iter__17797(cljs.core.chunk_rest(s__17798__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17800),null);
}
} else {
var col_idx = cljs.core.first(s__17798__$2);
return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(split_row_contents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_idx,row_idx], null),""),expound$printer$multirow_$_iter__17789_$_iter__17797(cljs.core.rest(s__17798__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_idx,s__17790__$2,temp__5735__auto__,split_row_contents))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(row)));
})(),expound$printer$multirow_$_iter__17789(cljs.core.rest(s__17790__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(row_height));
});
expound.printer.multirows = (function expound$printer$multirows(row_heights,rows){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
return expound.printer.multirow(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_heights,idx),row);
}),rows);
});
expound.printer.formatted_multirows = (function expound$printer$formatted_multirows(column_keys,map_rows){
if(cljs.core.empty_QMARK_(map_rows)){
return null;
} else {
var rows = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_keys], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17804_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(p1__17804_SHARP_,column_keys);
}),map_rows));
var row_heights = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(expound.printer.max_row_height,rows);
var column_widths = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,_){
return expound.printer.max_column_width(rows,i);
}),cljs.core.first(rows));
return expound.printer.indented_multirows(column_widths,expound.printer.multirows(row_heights,rows));
}
});
expound.printer.table_str = (function expound$printer$table_str(column_keys,map_rows){
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"\n"].join('');
}),expound.printer.table(expound.printer.formatted_multirows(column_keys,map_rows)))))].join('');
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$printer_SLASH_print_DASH_table,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$columns,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)),cljs.core.cst$kw$map_DASH_rows,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$columns,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)),cljs.core.cst$kw$map_DASH_rows,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$columns,cljs.core.cst$kw$map_DASH_rows], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$any_QMARK_,cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__17805){
return cljs.core.coll_QMARK_(G__17805);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)], null),null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$map_QMARK_,cljs.core.map_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__17806){
return cljs.core.coll_QMARK_(G__17806);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$columns,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)),cljs.core.cst$kw$map_DASH_rows,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
expound.printer.print_table = (function expound$printer$print_table(var_args){
var G__17808 = arguments.length;
switch (G__17808) {
case 1:
return expound.printer.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return expound.printer.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(expound.printer.print_table.cljs$core$IFn$_invoke$arity$1 = (function (map_rows){
return expound.printer.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(map_rows)),map_rows);
}));

(expound.printer.print_table.cljs$core$IFn$_invoke$arity$2 = (function (column_keys,map_rows){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.table_str(column_keys,map_rows)], 0));
}));

(expound.printer.print_table.cljs$lang$maxFixedArity = 2);

expound.printer.keywords = (function expound$printer$keywords(form){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,form));
});
expound.printer.singleton_QMARK_ = (function expound$printer$singleton_QMARK_(xs){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(xs));
});
expound.printer.specs_from_form = (function expound$printer$specs_from_form(via){
var form = (function (){var G__17810 = via;
var G__17810__$1 = (((G__17810 == null))?null:cljs.core.last(G__17810));
if((G__17810__$1 == null)){
return null;
} else {
return cljs.spec.alpha.form(G__17810__$1);
}
})();
var conformed = cljs.spec.alpha.conform(cljs.core.cst$kw$expound$spec_SLASH_key_DASH_spec,form);
if(cljs.core.truth_((function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid,conformed);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$kw,cljs.core.first(x))));
}),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$specs,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(conformed))))));
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
expound.printer.key__GT_spec = (function expound$printer$key__GT_spec(keys,problems){
var seq__17812_17816 = cljs.core.seq(problems);
var chunk__17813_17817 = null;
var count__17814_17818 = (0);
var i__17815_17819 = (0);
while(true){
if((i__17815_17819 < count__17814_17818)){
var p_17820 = chunk__17813_17817.cljs$core$IIndexed$_nth$arity$2(null,i__17815_17819);
if((!((cljs.core.cst$kw$expound_SLASH_via.cljs$core$IFn$_invoke$arity$1(p_17820) == null)))){
} else {
throw (new Error(["Assert failed: ",expound.util.assert_message,"\n","(some? (:expound/via p))"].join('')));
}


var G__17821 = seq__17812_17816;
var G__17822 = chunk__17813_17817;
var G__17823 = count__17814_17818;
var G__17824 = (i__17815_17819 + (1));
seq__17812_17816 = G__17821;
chunk__17813_17817 = G__17822;
count__17814_17818 = G__17823;
i__17815_17819 = G__17824;
continue;
} else {
var temp__5735__auto___17825 = cljs.core.seq(seq__17812_17816);
if(temp__5735__auto___17825){
var seq__17812_17826__$1 = temp__5735__auto___17825;
if(cljs.core.chunked_seq_QMARK_(seq__17812_17826__$1)){
var c__4556__auto___17827 = cljs.core.chunk_first(seq__17812_17826__$1);
var G__17828 = cljs.core.chunk_rest(seq__17812_17826__$1);
var G__17829 = c__4556__auto___17827;
var G__17830 = cljs.core.count(c__4556__auto___17827);
var G__17831 = (0);
seq__17812_17816 = G__17828;
chunk__17813_17817 = G__17829;
count__17814_17818 = G__17830;
i__17815_17819 = G__17831;
continue;
} else {
var p_17832 = cljs.core.first(seq__17812_17826__$1);
if((!((cljs.core.cst$kw$expound_SLASH_via.cljs$core$IFn$_invoke$arity$1(p_17832) == null)))){
} else {
throw (new Error(["Assert failed: ",expound.util.assert_message,"\n","(some? (:expound/via p))"].join('')));
}


var G__17833 = cljs.core.next(seq__17812_17826__$1);
var G__17834 = null;
var G__17835 = (0);
var G__17836 = (0);
seq__17812_17816 = G__17833;
chunk__17813_17817 = G__17834;
count__17814_17818 = G__17835;
i__17815_17819 = G__17836;
continue;
}
} else {
}
}
break;
}

var vias = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expound_SLASH_via,problems);
var specs = ((cljs.core.every_QMARK_(cljs.core.qualified_keyword_QMARK_,keys))?keys:(function (){var temp__5733__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(expound.printer.specs_from_form,vias));
if(cljs.core.truth_(temp__5733__auto__)){
var specs = temp__5733__auto__;
return specs;
} else {
return keys;
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((cljs.core.qualified_keyword_QMARK_(k))?k:(function (){var or__4126__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17811_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),cljs.core.name(p1__17811_SHARP_));
}),specs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<can't find spec for unqualified spec identifier>";
}
})()));
}),cljs.core.PersistentArrayMap.EMPTY,keys);
});
expound.printer.summarize_key_clause = (function expound$printer$summarize_key_clause(p__17837){
var vec__17838 = p__17837;
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17838,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17838,(1),null);
var G__17841 = branch;
var G__17841__$1 = (((G__17841 instanceof cljs.core.Keyword))?G__17841.fqn:null);
switch (G__17841__$1) {
case "simple":
return cljs.core.cst$kw$kw.cljs$core$IFn$_invoke$arity$1(match);

break;
case "compound":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(match))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(expound.printer.summarize_key_clause,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(match)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17841__$1)].join('')));

}
});
expound.printer.missing_key = (function expound$printer$missing_key(form){
var vec__17843 = cljs.spec.alpha.conform(cljs.core.cst$kw$expound$spec_SLASH_contains_DASH_key_DASH_pred,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)));
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17843,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17843,(1),null);
var G__17846 = branch;
var G__17846__$1 = (((G__17846 instanceof cljs.core.Keyword))?G__17846.fqn:null);
switch (G__17846__$1) {
case "simple":
return cljs.core.cst$kw$kw.cljs$core$IFn$_invoke$arity$1(match);

break;
case "compound":
return expound.printer.summarize_key_clause(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [branch,match], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17846__$1)].join('')));

}
});
expound.printer.elide_core_ns = (function expound$printer$elide_core_ns(s){
return clojure.string.replace(clojure.string.replace(s,"cljs.core/",""),"cljs/core/","");
});
expound.printer.elide_spec_ns = (function expound$printer$elide_spec_ns(s){
return clojure.string.replace(clojure.string.replace(s,"cljs.spec.alpha/",""),"cljs/spec/alpha","");
});
expound.printer.pprint_fn = (function expound$printer$pprint_fn(f){
return clojure.string.replace(clojure.string.replace(expound.printer.elide_core_ns((function (){var fn_parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.re_find(/object\[([^\( \]]+).*(\n|\])?/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)))),/\$/);
var ns_n = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(fn_parts));
var fn_n = cljs.core.last(fn_parts);
if(cljs.core.empty_QMARK_(ns_n)){
return expound.printer.anon_fn_str;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(ns_n)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(fn_n))].join('');
}
})()),/--\d+/,""),/@[a-zA-Z0-9]+/,"");
});
expound.printer.format = (function expound$printer$format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17850 = arguments.length;
var i__4737__auto___17851 = (0);
while(true){
if((i__4737__auto___17851 < len__4736__auto___17850)){
args__4742__auto__.push((arguments[i__4737__auto___17851]));

var G__17852 = (i__4737__auto___17851 + (1));
i__4737__auto___17851 = G__17852;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(expound.printer.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(expound.printer.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(expound.printer.format.cljs$lang$applyTo = (function (seq17848){
var G__17849 = cljs.core.first(seq17848);
var seq17848__$1 = cljs.core.next(seq17848);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17849,seq17848__$1);
}));

cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$printer_SLASH_pprint_DASH_str,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$x,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$x,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$x,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,null,null,null));
/**
 * Returns the pretty-printed string
 */
expound.printer.pprint_str = (function expound$printer$pprint_str(x){
if(cljs.core.fn_QMARK_(x)){
return expound.printer.pprint_fn(x);
} else {
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$stream,null], 0));
}
});
expound.printer.expand_spec = (function expound$printer$expand_spec(spec){
var expanded_spec = (cljs.core.truth_(cljs.spec.alpha.get_spec(spec))?cljs.spec.alpha.form(spec):spec);
if(typeof expanded_spec === 'string'){
return expanded_spec;
} else {
return expound.printer.pprint_str(expanded_spec);
}
});
expound.printer.simple_spec_or_name = (function expound$printer$simple_spec_or_name(spec_name){
var expanded = expound.printer.expand_spec(spec_name);
var spec_str = expound.printer.elide_spec_ns(expound.printer.elide_core_ns((((expanded == null))?"nil":expanded)));
return spec_str;
});
expound.printer.print_spec_keys_STAR_ = (function expound$printer$print_spec_keys_STAR_(problems){
var keys = expound.printer.keywords(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17853_SHARP_){
return expound.printer.missing_key(cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(p1__17853_SHARP_));
}),problems));
if(cljs.core.truth_(((cljs.core.empty_QMARK_(cljs.core.cst$kw$expound_SLASH_via.cljs$core$IFn$_invoke$arity$1(cljs.core.first(problems))))?cljs.core.some(cljs.core.simple_keyword_QMARK_,keys):false))){
return null;
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__17854_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__17854_SHARP_,"key");
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17855){
var vec__17856 = p__17855;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17856,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17856,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, ["key",k,"spec",expound.printer.simple_spec_or_name(v)], null);
}),expound.printer.key__GT_spec(keys,problems)));
}
});
expound.printer.print_spec_keys = (function expound$printer$print_spec_keys(problems){
return clojure.string.trim((function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17859_17863 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17860_17864 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17861_17865 = true;
var _STAR_print_fn_STAR__temp_val__17862_17866 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17861_17865);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17862_17866);

try{expound.printer.print_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","spec"], null),expound.printer.print_spec_keys_STAR_(problems));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17860_17864);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17859_17863);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
});
expound.printer.print_missing_keys = (function expound$printer$print_missing_keys(problems){
var keys_clauses = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(expound.printer.missing_key,cljs.core.cst$kw$pred),problems));
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys_clauses)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17867_SHARP_){
return expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(p1__17867_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$correct_DASH_key], 0));
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(keys_clauses)));
} else {
return ["\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.pprint_str(((expound.printer.singleton_QMARK_(keys_clauses))?cljs.core.first(keys_clauses):cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,cljs.core.cst$sym$and,keys_clauses))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$correct_DASH_key], 0)))].join('');
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$printer_SLASH_no_DASH_trailing_DASH_whitespace,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$s], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,null,null,null));
/**
 * Given an potentially multi-line string, returns that string with all
 *   trailing whitespace removed.
 */
expound.printer.no_trailing_whitespace = (function expound$printer$no_trailing_whitespace(s){
var s_SINGLEQUOTE_ = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trimr,clojure.string.split_lines(s)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.last(s))){
return [s_SINGLEQUOTE_,"\n"].join('');
} else {
return s_SINGLEQUOTE_;
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$printer_SLASH_indent,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$first_DASH_line_DASH_indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$first_DASH_line_DASH_indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$first_DASH_line_DASH_indent_DASH_level,cljs.core.cst$kw$indent_DASH_level,cljs.core.cst$kw$s], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.nat_int_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.spec.alpha.maybe_impl(cljs.core.nat_int_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$first_DASH_line_DASH_indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$indent_DASH_level,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_),cljs.core.cst$kw$s,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,null,null,null));
/**
 * Given an potentially multi-line string, returns that string indented by
 * 'indent-level' spaces. Optionally, can indent first line and other lines
 * different amounts.
 */
expound.printer.indent = (function expound$printer$indent(var_args){
var G__17870 = arguments.length;
switch (G__17870) {
case 1:
return expound.printer.indent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return expound.printer.indent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return expound.printer.indent.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(expound.printer.indent.cljs$core$IFn$_invoke$arity$1 = (function (s){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$2(expound.printer.indent_level,s);
}));

(expound.printer.indent.cljs$core$IFn$_invoke$arity$2 = (function (indent_level,s){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$3(indent_level,indent_level,s);
}));

(expound.printer.indent.cljs$core$IFn$_invoke$arity$3 = (function (first_line_indent,rest_lines_indent,s){
var vec__17871 = clojure.string.split_lines(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
var seq__17872 = cljs.core.seq(vec__17871);
var first__17873 = cljs.core.first(seq__17872);
var seq__17872__$1 = cljs.core.next(seq__17872);
var line = first__17873;
var lines = seq__17872__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(first_line_indent," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('')], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17868_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rest_lines_indent," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17868_SHARP_)].join('');
}),lines)));
}));

(expound.printer.indent.cljs$lang$maxFixedArity = 3);

expound.printer.escape_replacement = (function expound$printer$escape_replacement(_pattern,s){
return clojure.string.replace(s,/\$/,"$$$$");
});
expound.printer.blank_form = (function expound$printer$blank_form(form){
if(cljs.core.map_QMARK_(form)){
return cljs.core.zipmap(cljs.core.keys(form),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$expound$problems_SLASH_irrelevant));
} else {
if(cljs.core.vector_QMARK_(form)){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.cst$kw$expound$problems_SLASH_irrelevant));
} else {
if(cljs.core.set_QMARK_(form)){
return form;
} else {
if(((cljs.core.list_QMARK_(form)) || (cljs.core.seq_QMARK_(form)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.cst$kw$expound$problems_SLASH_irrelevant));
} else {
return cljs.core.cst$kw$expound$problems_SLASH_irrelevant;

}
}
}
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$expound$printer_SLASH_summary_DASH_form,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$show_DASH_valid_DASH_values_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$highlighted_DASH_path,cljs.core.cst$kw$expound_SLASH_path)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$show_DASH_valid_DASH_values_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$highlighted_DASH_path,cljs.core.cst$kw$expound_SLASH_path),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_valid_DASH_values_QMARK_,cljs.core.cst$kw$form,cljs.core.cst$kw$highlighted_DASH_path], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean_QMARK_,cljs.core.any_QMARK_,cljs.core.cst$kw$expound_SLASH_path], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$expound_SLASH_path], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$show_DASH_valid_DASH_values_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$kw$form,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$highlighted_DASH_path,cljs.core.cst$kw$expound_SLASH_path),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
expound.printer.summary_form = (function expound$printer$summary_form(show_valid_values_QMARK_,form,in$){
while(true){
var vec__17875 = in$;
var seq__17876 = cljs.core.seq(vec__17875);
var first__17877 = cljs.core.first(seq__17876);
var seq__17876__$1 = cljs.core.next(seq__17876);
var k = first__17877;
var rst = seq__17876__$1;
var rst__$1 = (function (){var or__4126__auto__ = rst;
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var displayed_form = (cljs.core.truth_(show_valid_values_QMARK_)?form:expound.printer.blank_form(form));
if(cljs.core.empty_QMARK_(in$)){
return cljs.core.cst$kw$expound$problems_SLASH_relevant;
} else {
if(((cljs.core.map_QMARK_(form)) && (expound.paths.kps_QMARK_(k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(displayed_form,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(k)),(function (){var G__17878 = show_valid_values_QMARK_;
var G__17879 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(k);
var G__17880 = rst__$1;
return (expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3(G__17878,G__17879,G__17880) : expound.printer.summary_form.call(null,G__17878,G__17879,G__17880));
})(),cljs.core.cst$kw$expound$problems_SLASH_irrelevant);
} else {
if(((cljs.core.map_QMARK_(form)) && (expound.paths.kvps_QMARK_(k)))){
var G__17893 = show_valid_values_QMARK_;
var G__17894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(k));
var G__17895 = rst__$1;
show_valid_values_QMARK_ = G__17893;
form = G__17894;
in$ = G__17895;
continue;
} else {
if(cljs.core.associative_QMARK_(form)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(displayed_form,k,(function (){var G__17881 = show_valid_values_QMARK_;
var G__17882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,k);
var G__17883 = rst__$1;
return (expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3(G__17881,G__17882,G__17883) : expound.printer.summary_form.call(null,G__17881,G__17882,G__17883));
})());
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.seq_QMARK_(form)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__17884 = show_valid_values_QMARK_;
var G__17885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,k);
var G__17886 = rst__$1;
return (expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3(G__17884,G__17885,G__17886) : expound.printer.summary_form.call(null,G__17884,G__17885,G__17886));
})()));
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.set_QMARK_(form)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__17887 = show_valid_values_QMARK_;
var G__17888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__17889 = rst__$1;
return (expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3(G__17887,G__17888,G__17889) : expound.printer.summary_form.call(null,G__17887,G__17888,G__17889));
})()));
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.list_QMARK_(form)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__17890 = show_valid_values_QMARK_;
var G__17891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__17892 = rst__$1;
return (expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.printer.summary_form.cljs$core$IFn$_invoke$arity$3(G__17890,G__17891,G__17892) : expound.printer.summary_form.call(null,G__17890,G__17891,G__17892));
})()));
} else {
if(((cljs.core.int_QMARK_(k)) && (typeof form === 'string'))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(form),k,cljs.core.cst$kw$expound$problems_SLASH_relevant));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot find path segment in form. This can be caused by using conformers to transform values, which is not supported in Expound",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$form,form,cljs.core.cst$kw$in,in$], null));

}
}
}
}
}
}
}
}
break;
}
});
expound.printer.highlight_line = (function expound$printer$highlight_line(prefix,replacement){
var max_width = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17896_SHARP_){
return ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17896_SHARP_)).length);
}),clojure.string.split_lines(replacement)));
return expound.printer.indent.cljs$core$IFn$_invoke$arity$2(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)).length),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(max_width,"^")));
});
/**
 * Given a problem, returns a pretty printed
 * string that highlights the problem value
 */
expound.printer.highlighted_value = (function expound$printer$highlighted_value(opts,problem){
var map__17897 = problem;
var map__17897__$1 = (((((!((map__17897 == null))))?(((((map__17897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17897):map__17897);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17897__$1,cljs.core.cst$kw$expound_SLASH_form);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17897__$1,cljs.core.cst$kw$expound_SLASH_in);
var map__17898 = opts;
var map__17898__$1 = (((((!((map__17898 == null))))?(((((map__17898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17898):map__17898);
var show_valid_values_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17898__$1,cljs.core.cst$kw$show_DASH_valid_DASH_values_QMARK_,false);
var printed_val = expound.printer.pprint_str(expound.paths.value_in(form,in$));
var relevant = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$expound$problems_SLASH_relevant),"|(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$expound$problems_SLASH_kv_DASH_relevant),"\\s+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$expound$problems_SLASH_kv_DASH_relevant),"))"].join('');
var regex = cljs.core.re_pattern(["(.*)",relevant,".*"].join(''));
var s = (function (){var _STAR_print_namespace_maps_STAR__orig_val__17904 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_namespace_maps_STAR__temp_val__17905 = false;
(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__17905);

try{if(cljs.core.truth_(cljs.core.cst$kw$show_DASH_valid_DASH_values_QMARK_.cljs$core$IFn$_invoke$arity$1(opts))){
return expound.printer.pprint_str(expound.printer.summary_form(show_valid_values_QMARK_,form,in$));
} else {
return expound.printer.pprint_str(clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$expound$problems_SLASH_irrelevant,cljs.core.cst$sym$$$$], null),expound.printer.summary_form(show_valid_values_QMARK_,form,in$)));
}
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__17904);
}})();
var vec__17899 = cljs.core.re_find(regex,s);
var seq__17900 = cljs.core.seq(vec__17899);
var first__17901 = cljs.core.first(seq__17900);
var seq__17900__$1 = cljs.core.next(seq__17900);
var line = first__17901;
var first__17901__$1 = cljs.core.first(seq__17900__$1);
var seq__17900__$2 = cljs.core.next(seq__17900__$1);
var prefix = first__17901__$1;
var _more = seq__17900__$2;
var highlighted_line = [clojure.string.replace(line,cljs.core.re_pattern(relevant),expound.printer.escape_replacement(cljs.core.re_pattern(relevant),expound.printer.indent.cljs$core$IFn$_invoke$arity$3((0),cljs.core.count(prefix),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(printed_val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bad_DASH_value], 0))))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.highlight_line(prefix,printed_val),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pointer], 0)))].join('');
return expound.printer.no_trailing_whitespace(clojure.string.replace(s,line,expound.printer.escape_replacement(line,highlighted_line)));
});
