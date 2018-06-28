parent["exclusion"] = blend([], [], function(dest, src){
    return [dest, "+", src, "-(2*", dest, "*", src, ")/255.0"];
});
