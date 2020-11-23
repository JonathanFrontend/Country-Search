const randomPromise = new Promise(
    function(resolved, rejected) {
        let trueOrFalse = true;

        if (trueOrFalse){
            resolved('Yes')
        }
        else (
            rejected('No')
        )
    }
);

randomPromise.then(
    message => {
        console.log('yes', message)
    }
).catch(
    error => {
        console.log('fel', error)
    }
)
console.log(randomPromise)