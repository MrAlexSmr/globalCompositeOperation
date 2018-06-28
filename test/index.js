var expect = chai.expect;

describe("composition", function(){
    var i;

    var composition = globalCompositeOperation(false);

    var METHODS = [
        "source-over",
        "source-in",
        "source-out",
        "source-atop",
        "destination-over",
        "destination-in",
        "destination-out",
        "destination-atop",
        "lighter",
        "copy",
        "xor",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity"
    ];

    var PIXEL_TRANSPARENT = new Uint8ClampedArray([0, 0, 0, 0]);
    var PIXEL_WHITE = new Uint8ClampedArray([255, 255, 255, 255]);
    var PIXEL_TRANSPARENT_GREY = new Uint8ClampedArray([127, 127, 127, 127]);
    var PIXEL_RANDOM = new Uint8ClampedArray([66, 173, 99, 214]);

    for (i = 0; i < METHODS.length; ++i){
        describe(METHODS[i], __describe.bind(__describe, METHODS[i]));
    }

    function __describe(method){
        it("Should be OK", function(){
            _compare(method, PIXEL_TRANSPARENT, PIXEL_TRANSPARENT);

            _compare(method, PIXEL_TRANSPARENT, PIXEL_WHITE);
            _compare(method, PIXEL_WHITE, PIXEL_TRANSPARENT);

            _compare(method, PIXEL_TRANSPARENT, PIXEL_TRANSPARENT_GREY);
            _compare(method, PIXEL_TRANSPARENT_GREY, PIXEL_TRANSPARENT);

            _compare(method, PIXEL_TRANSPARENT, PIXEL_RANDOM);
            _compare(method, PIXEL_RANDOM, PIXEL_TRANSPARENT);

            _compare(method, PIXEL_WHITE, PIXEL_WHITE);

            _compare(method, PIXEL_WHITE, PIXEL_TRANSPARENT_GREY);
            _compare(method, PIXEL_TRANSPARENT_GREY, PIXEL_WHITE);

            _compare(method, PIXEL_WHITE, PIXEL_RANDOM);
            _compare(method, PIXEL_RANDOM, PIXEL_WHITE);

            _compare(method, PIXEL_TRANSPARENT_GREY, PIXEL_TRANSPARENT_GREY);

            _compare(method, PIXEL_TRANSPARENT_GREY, PIXEL_RANDOM);
            _compare(method, PIXEL_RANDOM, PIXEL_TRANSPARENT_GREY);

            _compare(method, PIXEL_RANDOM, PIXEL_RANDOM);
        });
    }

    function _compare(method, dest, src){
        var custom_res = new Uint8ClampedArray(dest);
        var canvas_res = composite(createCanvas().getContext("2d"), method, dest, src);
        composition[method](custom_res, src, 0, 0, 1);

        var custom_r = custom_res[0];
        var custom_g = custom_res[1];
        var custom_b = custom_res[2];
        var custom_a = custom_res[3];

        var canvas_r = canvas_res[0];
        var canvas_g = canvas_res[1];
        var canvas_b = canvas_res[2];
        var canvas_a = canvas_res[3];

        expect( isEqual(custom_r, canvas_r) ).to.equal(true);
        expect( isEqual(custom_g, canvas_g) ).to.equal(true);
        expect( isEqual(custom_b, canvas_b) ).to.equal(true);
        expect( isEqual(custom_a, canvas_a) ).to.equal(true);
    }

});

function composite(ctx, method, dest, src){
    ctx.fillStyle = toStringStyle(dest);
    ctx.fillRect(0, 0, 1, 1);
    ctx.globalCompositeOperation = method;
    ctx.fillStyle = toStringStyle(src);
    ctx.fillRect(0, 0, 1, 1);
    return ctx.getImageData(0, 0, 1, 1).data;
}

function createCanvas(){
    var canvas = document.createElement("CANVAS");
    canvas.width = canvas.height = 1;
    return canvas;
}

function toStringStyle(pixel){
    return "rgba(" +
        pixel[0] + "," +
        pixel[1] + "," +
        pixel[2] + "," +
        (pixel[3] / 255.0) + ")";
}

function isEqual(n1, n2){
    return Math.abs(n1 - n2) <= 2; // 2 is error epsilon
}
