 function dropElements(arr, func) {
     for(let i = 0; i < arr.length; i++) {
         if(func(arr[i]) !== true) {
             arr.shift()
         } else {
             return arr;
         }
     }
    return arr;
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 10000;}))