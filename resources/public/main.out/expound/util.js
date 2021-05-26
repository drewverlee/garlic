// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('expound.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
expound.util.assert_message = "Internal Expound assertion failed. Please report this bug at https://github.com/bhb/expound/issues";
expound.util.nan_QMARK_ = (function expound$util$nan_QMARK_(x){
if(typeof x === 'number'){
return isNaN(x);
} else {
return false;
}
});
