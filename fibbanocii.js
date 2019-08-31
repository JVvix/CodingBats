function fibonacci(num) {
    let firstNumber;
    let secondNumber;
    let fibSum;
    let SumArray = [];
    let arr = [0,1];
    do {
        firstNumber = arr[arr.length-2];
        secondNumber = arr[arr.length-1];
        fibSum = firstNumber + secondNumber;
        if(fibSum <= num) {
            SumArray.push(fibSum)
            arr.push(fibSum)
        } else {
            break;
        }
    } while(true);
    return arr;
}

console.log(fibonacci(9))