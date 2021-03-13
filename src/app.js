function median(sequence) {
    sequence.sort();
    return sequence[Math.ceil(sequence.length / 2)];
}

function measureFunction(func) {
    let numbers = [];
    for (var i = 0; i < 10; i++) {
        let t0 = performance.now();
        func();
        let t1 = performance.now();
        numbers.push(t1 - t0);
    }
    return {
        median: median(numbers).toFixed(4),
        lowestTime: Math.min.apply(this, numbers).toFixed(4),
        highestTime: Math.max.apply(this, numbers).toFixed(4),
        average: (numbers.reduce((acc, cur) => acc + cur, 0) / 10).toFixed(4),
    };
}

function handleClick() {
    const func = window.document.querySelector('textarea');
    const userFunc = new Function(func.value);
    console.table(measureFunction(userFunc));
}

window.document.querySelector('button').addEventListener('click', handleClick);