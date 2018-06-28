var DEST_R = "dest[destI+" + R + "]";
var DEST_G = "dest[destI+" + G + "]";
var DEST_B = "dest[destI+" + B + "]";
var DEST_A = "dest[destI+" + A + "]";
var SRC_R = "src[srcI+" + R + "]";
var SRC_G = "src[srcI+" + G + "]";
var SRC_B = "src[srcI+" + B + "]";
var SRC_A = "src[srcI+" + A + "]";

var BLEND_DEFINITIONS = "var opt1,opt2,opt3,aSrcF,aDestF,aResF,rDest,rSrc,gDest,gSrc,bDest,bSrc;";

function build(definitions, body){
    return new Function("dest,src,destI,srcI,count", [
        definitions,
        "while(count-->0){",
            body.join(""),
            "destI+=4;",
            "srcI+=4;",
        "}"
    ].join(""));
}
