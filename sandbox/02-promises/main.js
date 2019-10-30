console.log('start');

function sleepPromise(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, delay);
    });
}

sleepPromise(1000).then(function () {
    console.log('1');
    return sleepPromise(1000);
}).then(function () {
    console.log('2');
    return sleepPromise(1000);
}).then(function () {
    console.log('3');
    return sleepPromise(1000);
}).then(function () {
    console.log('end');
});

console.log('coucou');
