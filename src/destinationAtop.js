parent["destination-atop"] = build(
    "var opt,aSrcF,aDestF,aSrcI;",
    [
        "aSrcI=", SRC_A, ";",
        "if(0x00===aSrcI){",
            DEST_R, "=", DEST_G, "=", DEST_B, "=", DEST_A, "=0x00;",
        "}else{",
            "aSrcF=aSrcI/255.0;",
            "aDestF=", DEST_A, "/255.0;",
            "opt=1.0-aDestF;",
            DEST_R, "=", SRC_R, "*opt+", DEST_R, "*aDestF;",
            DEST_G, "=", SRC_G, "*opt+", DEST_G, "*aDestF;",
            DEST_B, "=", SRC_B, "*opt+", DEST_B, "*aDestF;",
            DEST_A, "=aSrcI;",
        "}"
    ]
);
