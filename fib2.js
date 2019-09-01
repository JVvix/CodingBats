function fib(n) {
    let fib = [1, 1];
    let nextFib;
    let lastFib;
    let currentFib;
    do {
       currentFib = fib[fib.length-1];  
       lastFib = fib[fib.length-2];  
       nextFib = currentFib + lastFib;
       if(nextFib <= n) {
            fib.push(nextFib);
       }
    } while (nextFib <= n)

    return fib;
}
console.log(fib(10));