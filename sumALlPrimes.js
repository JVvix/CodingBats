function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
function sumPrimes(num) {
    let prime = [];
    let sum = 0;
    for(let i = 0; i <= num; i++) {
        if(isPrime(i) === true) {
            prime.push(i);
        }
    }
    for(let i = 0; i < prime.length; i++){
        sum += prime[i];
    }
    return sum;
}

console.log(sumPrimes(977));