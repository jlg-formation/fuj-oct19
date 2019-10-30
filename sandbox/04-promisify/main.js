// rule #1 : callback est le dernier argument d'un fonction asynchrone
//           au format node.

// rule #2 : le premier argument de callback est une erreur.

function coucouSlow(str, callback) {
    setTimeout(() => {
        let err = null;
        if (str === undefined) {
            err = 'str is undefined';
        }
        callback(err, `coucou ${str}`);
    }, 2000);
}




function promisify(asyncFn) {
    const promise = function(...args) {
        return new Promise((resolve, reject) => {
            asyncFn(...args, (err, ...results) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(...results);
            });
        });
    }
    return promise;
}

const coucouSlowPromise = promisify(coucouSlow);

(async () => {
    try {
        const result = await coucouSlowPromise(undefined);
        console.log('result: ', result);
    } catch (err) {
        console.log('err: ', err);
    }

})();



