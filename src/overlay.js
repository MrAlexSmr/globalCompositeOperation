parent["overlay"] = blend([], [], function(dest, src){
    return [dest, "<128",
        "?(2*", src, "*", dest, "/255.0)",
        ":(0xFF-2*(0xFF-", src, ")*(0xFF-", dest, ")/255.0)"];
});
