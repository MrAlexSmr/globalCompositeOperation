parent["soft-light"] = blend(["var tmp;var sqrt=Math.sqrt;"], [], function(dest, src){
    return ["tmp=", src, "<<1,",
        "(", src, "<128",
        "?(", dest, "*(tmp+(", dest, "*(0xFF-tmp)/256)))/256",
        ":(", dest, "*(511-tmp)+(sqrt(", dest, "<<8)*(tmp-0xFF)))/256)"];
});
