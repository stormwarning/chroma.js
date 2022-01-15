function channel_fn(channel) {
    const abs = Math.abs(channel);
    
    if (abs < 0.04045) {
        return channel / 12.92;
    }

    return (Math.sign(channel) || 1) * Math.pow((abs + 0.055) / 1.055, 2.4);
}

const rgb2lrgb = (r,g,b) => {
    return [channel_fn(r), channel_fn(g), channel_fn(b)];
}

module.exports = rgb2lrgb;
