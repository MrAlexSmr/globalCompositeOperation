parent["source-over"] = build(
    "var opt,aSrcF,aDestF,aResF,aDestI,aSrcI;",
    [
        "aDestI=", DEST_A, ";",
        "aSrcI=", SRC_A, ";",
        "if(0x00===aDestI||0xFF===aSrcI){",
            DEST_R, "=", SRC_R, ";",
            DEST_G, "=", SRC_G, ";",
            DEST_B, "=", SRC_B, ";",
            DEST_A, "=aSrcI;",
        "}else{",
            "aDestF=aDestI/255.0;",
            "aSrcF=aSrcI/255.0;",
            "opt=aDestF*(1.0-aSrcF);",
            "aResF=aSrcF+opt;",
            DEST_R, "=(", SRC_R, "*aSrcF+", DEST_R, "*opt)/aResF;",
            DEST_G, "=(", SRC_G, "*aSrcF+", DEST_G, "*opt)/aResF;",
            DEST_B, "=(", SRC_B, "*aSrcF+", DEST_B, "*opt)/aResF;",
            DEST_A, "=aResF*255.0;",
        "}"
    ]
);
