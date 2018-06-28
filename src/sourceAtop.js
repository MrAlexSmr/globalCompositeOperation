parent["source-atop"] = build(
    "var opt,aSrcF,aDestI;",
    [
        "aDestI=", DEST_A, ";",
        "if(0x00===aDestI){",
            DEST_R, "=", DEST_G, "=", DEST_B, "=", DEST_A, "=0x00;",
        "}else{",
            "aSrcF=", SRC_A, "/255.0;",
            "opt=1.0-aSrcF;",
            DEST_R, "=", SRC_R, "*aSrcF+", DEST_R, "*opt;",
            DEST_G, "=", SRC_G, "*aSrcF+", DEST_G, "*opt;",
            DEST_B, "=", SRC_B, "*aSrcF+", DEST_B, "*opt;",
            DEST_A, "=aDestI;",
        "}"
    ]
);
