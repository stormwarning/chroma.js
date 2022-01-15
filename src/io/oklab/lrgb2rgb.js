function channel_fn(channel) {
    const abs = Math.abs(channel);

    if (abs > 0.0031308) {
        return (Math.sign(channel) || 1) * (1.055 * Math.pow(abs, 1 / 2.4) - 0.055);
    }

    return channel * 12.92;
}

const lrgb2rgb = (r,g,b) => {
    return [channel_fn(r), channel_fn(g), channel_fn(b)];
}

module.exports = lrgb2rgb;
