export function easeInOut(t, amt=2) {
    let tPow = Math.pow(t, amt);
    return tPow / (tPow + Math.pow(1 - t, amt));
}

export function slurp(val1, val2, amt) {
    return (val2 - val1) * amt + val1;
}