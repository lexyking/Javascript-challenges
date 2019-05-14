const mathSequence = (arr) => {

    let arith = new Set();
    let geo = new Set();

    for (let i = 1; i < arr.length; i++) {
        let arithVal = arr[i] - arr[i - 1];
        arith.add(arithVal);
        let geoVal = arr[i] / arr[i - 1];
        geo.add(geoVal);
    }

    if (arith.size === 1) {
        return 'Aritmetic Sequence';
    }
    if (geo.size === 1) {
        return 'Geometric Sequence';
    }
    return -1;

    // console.log(arith);
    // console.log(geo);

}

console.log(mathSequence([2, 4, 6, 8]));
console.log(mathSequence([3, 9, 27]));