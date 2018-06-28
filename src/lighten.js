parent["lighten"] = blend(["var max=Math.max;"], [], function(dest, src){
    return ["max(", dest, ",", src, ")"];
});
