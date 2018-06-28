parent["destination-in"] = build(
    "var aSrcI;",
    [
        "aSrcI=", SRC_A, ";",
        "if(0x00===aSrcI){", DEST_R, "=", DEST_G, "=", DEST_B, "=", DEST_A, "=0x00;}",
        "else{", DEST_A, " *=aSrcI/255.0;}"
    ]
);
