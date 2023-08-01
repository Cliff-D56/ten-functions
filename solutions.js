"use strict";
function isTrue(x){
    return x===true;
}
function isFalse(x){
    return x===false;
}
function not(x){
    return !x;
}
function addOne(x){
    if (isNaN(x)){
      return NaN;
    }
    else if(x===Infinity){
        return x + 1;
    }
    else{
        return parseInt(x) + 1;
    }
    //return isNaN(x) ? NaN: parseInt(x) + 1;
}
function isEven(x) {
    if (isNaN(parseInt(x))){
        return false;
    }
    else{
        return x%2===0;
    }
    // else if(typeof parseInt(x)=="number"){
    //     return x%2===0;
    // }
    // else{
    //     return false;
    // }
}
function isIdentical(x,y){
    return x===y;
}
function isEqual(x,y){
    return x == y;
}
function or(x,y){
    return x || y;
}
function and(x,y){
    return x && y;
}
function concat(x,y){
    return x.toString()+y.toString();
}
/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

