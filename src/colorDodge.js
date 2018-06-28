parent["color-dodge"] = blend(["var min=Math.min;"], [], function(dest, src){
    return ["min((", dest, "<<8)/((0xFF-", src, ")+1),255.0)"];
});
