parent["source-out"] = build(
    "var aDestI;",
    [
        "aDestI=", DEST_A, ";",
        "if(0xFF===aDestI){",
            DEST_R, "=", DEST_G, "=", DEST_B, "=", DEST_A, "=0x00;",
        "}else{",
            DEST_R, "=", SRC_R, ";",
            DEST_G, "=", SRC_G, ";",
            DEST_B, "=", SRC_B, ";",
            DEST_A, "=((", SRC_A, "/255.0)*(1.0-(aDestI/255.0)))*255.0;",
        "}"
    ]
);
