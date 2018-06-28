parent["color-burn"] = blend(["var max=Math.max;"], [], function(dest, src){
    return ["max(255.0-(((0xFF-", dest, ")<<8)/(", src, "+1)),.0)"];
});
