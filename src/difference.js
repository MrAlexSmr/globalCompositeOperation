parent["difference"] = blend(["var abs=Math.abs;"], [], function(dest, src){
    return ["abs(", dest, "-", src, ")"];
});
