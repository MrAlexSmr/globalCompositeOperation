parent["saturation"] = blend(
    [
        "var L,D,N,X,opt4,opt5,rRes,gRes,bRes,minEl,rSrcF,gSrcF,bSrcF,rDestF,gDestF,bDestF,minI,midI,maxI,S;",
        "var rgb=[.0,.0,.0];",
        "var min=Math.min;",
        "var max=Math.max;"
    ],
    [
        tokenChannelsToFloat(),
        "L=", lum("rDestF", "gDestF", "bDestF"), ";",
        "S=", sat("rSrcF", "gSrcF", "bSrcF"), ";",
        setSat("rDestF", "gDestF", "bDestF"),
        setLum("rDestF", "gDestF", "bDestF"),
        clipColor()
    ],
    function(dest, _){
        return [dest[0], "Res"];
    }
);
