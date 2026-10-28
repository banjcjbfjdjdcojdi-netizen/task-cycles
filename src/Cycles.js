export function rangeSum(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    let sum = 0;

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

export function iterationCount(num) {
    let count = 0;

    while (num > 0.1) {
        num = num / 2;
        count++;
    }
    return count;
}

export function symbolsReplace(text) {
    let arr = text.split('');
    let i = 2;

    if (arr.length >= 3) {
        do {
            arr[i] = '_';
            i += 3;
        } while (i < arr.length);
    }

    return arr.join('');
}