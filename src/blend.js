function blend(extraDefinitions, extraBody, blendFormula){
    return build(
        [
            "var opt1,opt2,opt3,aSrcF,aDestF,aResF,rDest,rSrc,gDest,gSrc,bDest,bSrc;",
            extraDefinitions.join("")
        ].join(""),
        [
            "aSrcF=", SRC_A, "/255.0;",
            "aDestF=", DEST_A, "/255.0;",
            "opt1=aDestF*(1.0-aSrcF);",
            "opt2=(1.0-aDestF)*aSrcF;",
            "opt3=aSrcF*aDestF;",
            "aResF=aSrcF+opt1;",
            "rDest=", DEST_R, ";",
            "gDest=", DEST_G, ";",
            "bDest=", DEST_B, ";",
            "rSrc=", SRC_R, ";",
            "gSrc=", SRC_G, ";",
            "bSrc=", SRC_B, ";",
            extraBody.join(""),
            DEST_R, "=(opt2*rSrc+opt1*rDest+opt3*(", blendFormula("rDest", "rSrc").join(""), "))/aResF;",
            DEST_G, "=(opt2*gSrc+opt1*gDest+opt3*(", blendFormula("gDest", "gSrc").join(""), "))/aResF;",
            DEST_B, "=(opt2*bSrc+opt1*bDest+opt3*(", blendFormula("bDest", "bSrc").join(""), "))/aResF;",
            DEST_A, "=aResF*255.0;"
        ]);
}
