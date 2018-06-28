parent["darken"] = blend(["var min=Math.min;"], [], function(dest, src){
    return ["min(", dest, ",", src, ")"];
});
