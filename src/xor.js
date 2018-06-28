parent["xor"] = build(
    "var opt1,opt2,aSrcF,aDestF,aResF;",
    [
        "aSrcF=", SRC_A, "/255.0;",
        "aDestF=", DEST_A, "/255.0;",
        "aResF=aSrcF+aDestF-2.0*aSrcF*aDestF;",
        "if(.0===aResF){",
            DEST_R, "=", DEST_G, "=", DEST_B, "=", DEST_A, "=0x00;",
        "}else{",
            "opt1=aSrcF*(1.0-aDestF);",
            "opt2=aDestF*(1.0-aSrcF);",
            DEST_R, "=(", SRC_R, "*opt1+", DEST_R, "*opt2)/aResF;",
            DEST_G, "=(", SRC_G, "*opt1+", DEST_G, "*opt2)/aResF;",
            DEST_B, "=(", SRC_B, "*opt1+", DEST_B, "*opt2)/aResF;",
            DEST_A, "=aResF*255.0;",
        "}"
    ]
);
