const {unpack} = require('../../utils');

const lrgb2rgb = require('./lrgb2rgb');

const oklab2lrgb = (l,a,b) => {
    let L = Math.pow(l + 0.3963377774 * a + 0.2158037573 * b, 3);
    let M = Math.pow(l - 0.1055613458 * a - 0.0638541728 * b, 3);
    let S = Math.pow(l - 0.0894841775 * a - 1.291485548 * b, 3);

    return [
        +4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S,
		-1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S,
		-0.0041960863 * L - 0.7034186147 * M + 1.707614701 * S,
    ]
}

const oklab2rgb = (...args) => {
    args = unpack(args, 'oklab');
    let [r,g,b] = oklab2lrgb(args);

    return [lrgb2rgb(r,g,b), args.length > 3 ? args[3] : 1];
}

module.exports = oklab2rgb;
