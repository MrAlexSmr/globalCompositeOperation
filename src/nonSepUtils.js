function sat(r, g, b){
    return ["(max(", r, ",", g, ",", b, ")-min(", r, ",", g, ",", b, "))"].join("");
}

function lum(r, g, b){
    return ["(0.3*", r, "+0.59*", g, "+0.11*", b, ")"].join("");
}

function setLum(r, g, b){
    return [
        "D=L-", lum(r, g, b), ";",
        "rRes=", r, "+D;",
        "gRes=", g, "+D;",
        "bRes=", b, "+D;"
    ].join("");
}

function setSat(r, g, b){
    return [
        "rgb[0]=", r, ";",
        "rgb[1]=", g, ";",
        "rgb[2]=", b, ";",
        "maxI=0;",
        "if(rgb[1]>rgb[maxI])maxI=1;",
        "if(rgb[2]>rgb[maxI])maxI=2;",
        "minI=0;",
        "if(rgb[1]<rgb[minI])minI=1;",
        "if(rgb[2]<rgb[minI])minI=2;",
        "if(maxI===minI){rgb[0]=rgb[1]=rgb[2]=0.0;}",
        "else{",
        "minEl=rgb[minI];",
        "midI=3-(maxI+minI);",
        "rgb[minI]=.0;",
        "rgb[midI]=((rgb[midI]-minEl)*S)/(rgb[maxI]-minEl);",
        "rgb[maxI]=S;",
        "}",
        r, "=rgb[0];",
        g, "=rgb[1];",
        b, "=rgb[2];"
    ].join("");
}

function clipColor(){
    return [
        "L=", lum("rRes", "gRes", "bRes"), ";",
        "N=min(rRes,gRes,bRes);",
        "X=max(rRes,gRes,bRes);",
        "if(N<.0){",
        "opt4=L-N;",
        "if(opt4!==.0){",
        "rRes=L+(((rRes-L)*L)/opt4);",
        "gRes=L+(((gRes-L)*L)/opt4);",
        "bRes=L+(((bRes-L)*L)/opt4);",
        "}",
        "}",
        "if(X>1.0){",
        "opt4=1.0-L;",
        "opt5=X-L;",
        "if(opt5!==.0){",
        "rRes=L+(((rRes-L)*opt4)/opt5);",
        "gRes=L+(((gRes-L)*opt4)/opt5);",
        "bRes=L+(((bRes-L)*opt4)/opt5);",
        "}",
        "}",
        "rRes=min(rRes*255.0,255.0);",
        "gRes=min(gRes*255.0,255.0);",
        "bRes=min(bRes*255.0,255.0);"
    ].join("");
}

function tokenChannelsToFloat(){
    return [
        "rDestF=rDest/255.0;",
        "gDestF=gDest/255.0;",
        "bDestF=bDest/255.0;",
        "rSrcF=rSrc/255.0;",
        "gSrcF=gSrc/255.0;",
        "bSrcF=bSrc/255.0;"
    ].join("");
}
