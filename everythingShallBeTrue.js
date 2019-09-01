function truthCheck(collection, pre) {
    for(let i = 0; i < collection.length; i++) {
        console.log(collection[i][pre])
        if(collection[i][pre] === undefined) {
            return false;
        }
        if(collection[i][pre] === 0) {
            return false;
        }
        if(collection[i][pre] === null) {
            return false;
        }
        if(collection[i][pre] === "") {
            return false;
        }
        if(collection[i][pre] === false) {
            return false;
        }
        if(isNaN(collection[i][pre] && collection[i][pre] === NaN)) {
            return false;
        }
        if( ! collection[i].hasOwnProperty(pre)) {
            return false;
        }
    }
    return true;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))