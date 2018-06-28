if (typeof module !== "undefined" && typeof module.exports !== "undefined"){
    module.exports = globalCompositeOperation;
}

function globalCompositeOperation(isBigEndian){
"use strict";

var R, G, B, A;
var parent = {};

if (isBigEndian){
    R = "3";
    G = "2";
    B = "1";
    A = "0";
} else{
    R = "0";
    G = "1";
    B = "2";
    A = "3";
}

