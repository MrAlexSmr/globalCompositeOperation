parent["lighter"] = build(
    [
        "var aSrcF,aDestF,aResF;",
        "var min=Math.min;"
    ].join(""),
    [
        "aSrcF=", SRC_A, "/255.0;",
        "aDestF=", DEST_A, "/255.0;",
        "aResF=min(1.0,aSrcF+aDestF);",
        "if(.0===aResF){",
            DEST_R, "=", DEST_G, "=", DEST_B, "=", DEST_A, "=0x00;",
        "}else{",
            DEST_R, "=min((", SRC_R, "*aSrcF+", DEST_R, "*aDestF)/aResF,255.0);",
            DEST_G, "=min((", SRC_G, "*aSrcF+", DEST_G, "*aDestF)/aResF,255.0);",
            DEST_B, "=min((", SRC_B, "*aSrcF+", DEST_B, "*aDestF)/aResF,255.0);",
            DEST_A, "=aResF*255.0;",
        "}"
    ]
);
