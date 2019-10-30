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
    }, 500);
}

const promisify = asyncFn => (...c) => new Promise((a, b) => asyncFn(...c, (e, ...r) => e ? b(e) : a(...r)));

const coucouSlowPromise = promisify(coucouSlow);

(async () => {
    try {
        const result = await coucouSlowPromise(undefined);
        console.log('result: ', result);
    } catch (err) {
        console.log('err: ', err);
    }

})();



