# globalCompositeOperation

Custom implementation of build-in [globalCompositeOperation][] for [ImageData][] objects.
It include all available composition operations and blend modes.

## Usage

Code example:

```javascript
// Get the proper implementation, according to required endianness:
// true - is for big endian and false as for little endian!
var composition = globalCompositeOperation(false);

var destData = destImageData.data;
var srcData = srcImageData.data;
var destStartIndex = 0;
var srcStartIndex = 0;
var pixelsCount = 100;

/**
 * @param {Uint8ClampedArray} destData [out]
 * @param {Uint8ClampedArray} srcData [in]
 * @param {Number} destStartIndex [in] - should be integer and fits in destData range
 * @param {Number} srcStartIndex [in] - should be integer and fits in srcData range
 * @param {Number} pixelsCount [in] - should be integer
 */
composition["source-over"](destData, srcData, destStartIndex, srcStartIndex, pixelsCount);
```

Currently available following operations:

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

## Browser Capability

Should work well everywhere.
But the real goal may be achieved only on modern browsers!

## Dependencies

No external dependencies / third-party libs! Everything is you need is just a one [file][].

Based on great [Cairo][]'s compositing operators documentation.

## Feedback

For any questions/propositions/e.t.c you can contact me at <kurzgame@gmail.com>

[globalCompositeOperation]: https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
[ImageData]: https://developer.mozilla.org/en-US/docs/Web/API/ImageData
[Cairo]: https://www.cairographics.org/operators/
