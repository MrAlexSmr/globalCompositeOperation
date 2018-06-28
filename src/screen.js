parent["screen"] = blend([], [], function(dest, src){
    return ["255.0-((0xFF-", dest, ")*(0xFF-", src, "))/255.0"];
});
