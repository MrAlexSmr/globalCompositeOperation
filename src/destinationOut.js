parent["destination-out"] = build(
    "var aSrcI;",
    [
        "aSrcI=", SRC_A, ";",
        "if(0xFF===aSrcI){", DEST_R, "=", DEST_G, "=", DEST_B, "=", DEST_A, "=0x00;}",
        "else{", DEST_A, "=(", DEST_A, "/255.0)*(1.0-aSrcI/255.0)*255.0;}"
    ]
);
