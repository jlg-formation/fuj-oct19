console.log('start');

setTimeout(function() {
    console.log('1');
    setTimeout(function() {
        console.log('2');
        setTimeout(function() {
            console.log('3');
            setTimeout(function() {
                console.log('end');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
console.log('coucou');
