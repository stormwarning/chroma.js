const {unpack} = require('../../utils');

const rgb2lrgb = require('./rgb2lrgb');

const lrgb2oklab = (r,g,b) => {
    const L = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
	const M = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
	const S = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);

    return [
        0.2104542553 * L + 0.793617785 * M - 0.0040720468 * S,
		1.9779984951 * L - 2.428592205 * M + 0.4505937099 * S,
		0.0259040371 * L + 0.7827717662 * M - 0.808675766 * S
    ]
}

const rgb2oklab = (...args) => {
    args = unpack(args, 'rgb');
    let [r,g,_b] = rgb2lrgb(args);
    let [l,a,b] = lrgb2oklab(r,g,_b);

    if (r === _b && _b === g) {
        a = b = 0;
    }

    return [l,a,b];
}

module.exports = rgb2oklab;
