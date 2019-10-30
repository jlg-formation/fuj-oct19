
function sleepPromise(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve({ str: `j'ai dormi pendant ${delay}ms`, num: 56});
        }, delay);
    });
}

(async () => {
    console.log('start');
    console.log('coucou');
    const obj = await sleepPromise(1000);
    console.log(1, obj);
    await sleepPromise(1000);
    console.log(2);
    await sleepPromise(1000);
    console.log(3);
    await sleepPromise(1000);
    console.log('end');
})();

