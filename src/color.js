parent["color"] = blend(
    [
        "var L,D,N,X,opt4,opt5,rRes,gRes,bRes,rSrcF,gSrcF,bSrcF,rDestF,gDestF,bDestF;",
        "var min=Math.min;",
        "var max=Math.max;"
    ],
    [
        tokenChannelsToFloat(),
        "L=", lum("rDestF", "gDestF", "bDestF"), ";",
        setLum("rSrcF", "gSrcF", "bSrcF"),
        clipColor()
    ],
    function(dest, _){
        return [dest[0], "Res"];
    }
);
