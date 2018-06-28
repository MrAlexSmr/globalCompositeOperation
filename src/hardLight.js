parent["hard-light"] = blend([], [], function(dest, src){
    return [src, ">128",
        "?0xFF-(((0xFF-2*(", src, "-128))*(0xFF-", dest, "))>>>8)",
        ":(", dest, "*", src, ")>>>7"];
});
