var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var cache = require("gulp-cache");

var APP_NAME = "globalCompositeOperation.js";

// If you don't need specific method (or group of methods),
// simply comment those names!
var FILE_LIST = [
    "intro",
    "template",

    // composition operations:
    "copy",
    "sourceOver",
    "sourceIn",
    "sourceOut",
    "sourceAtop",
    "destination",
    "destinationOver",
    "destinationIn",
    "destinationOut",
    "destinationAtop",
    "xor",
    "lighter",

    // Blend modes:
    "blend",

    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "colorDodge",
    "colorBurn",
    "hardLight",
    "softLight",
    "difference",
    "exclusion",

    // Utils for non-separable blend modes:
    "nonSepUtils",

    // Non-separable blend modes:
    "hue",
    "saturation",
    "color",
    "luminosity",

    "outro"
];

// Make real paths:
FILE_LIST.forEach(function(fileName, index, array){
    array[index] = "./src/" + fileName + ".js";
});

gulp.task("build", function(){
    return  gulp.src(FILE_LIST)
        .pipe(concat(APP_NAME))
        .pipe(uglify())
        .pipe(gulp.dest("./"));
});

gulp.task("watch", function(){
    gulp.watch(FILE_LIST, ["build"]);
});

gulp.task("clear", function(done){
    return cache.clearAll(done);
});
