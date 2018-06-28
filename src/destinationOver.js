parent["destination-over"] = build(
    "var opt,aSrcF,aDestF,aResF,aDestI,aSrcI;",
    [
        "aDestI=", DEST_A, ";",
        "aSrcI=", SRC_A, ";",
        "if(0xFF!==aDestI&&0x00!==aSrcI){",
            "aDestF=aDestI/255.0;",
            "aSrcF=aSrcI/255.0;",
            "opt=(1.0-aDestF)*aSrcF;",
            "aResF=opt+aDestF;",
            DEST_R, "=(", SRC_R, "*opt+", DEST_R, "*aDestF)/aResF;",
            DEST_G, "=(", SRC_G, "*opt+", DEST_G, "*aDestF)/aResF;",
            DEST_B, "=(", SRC_B, "*opt+", DEST_B, "*aDestF)/aResF;",
            DEST_A, "=aResF*255.0;",
        "}"
    ]
);
