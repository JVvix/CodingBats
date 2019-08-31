function sumFibs(num) {
    let firstNum;
    let secondNum;
    let fibSum;
    let arr = [0,1];
    let oddArr = [];
    let sum = 0;
    do {
        firstNum = arr[arr.length-2];
        secondNum = arr[arr.length-1];
        fibSum = firstNum+secondNum;
        if(fibSum <= num) {
            arr.push(fibSum);
        } else {
            break;
        }
    } while (true);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            oddArr.push(arr[i]);
        }
    }
    for(let i = 0; i < oddArr.length; i++) {
        sum += oddArr[i];
    }
    return sum;
}

console.log(sumFibs(4)); // should return 5;