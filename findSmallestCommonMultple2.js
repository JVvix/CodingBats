function smallestCommons(arr) {
    let start;
    let end;
    if(arr[0] < arr[1]) {
         start = arr[0];
         end = arr[1]
    } else {
         start = arr[1];
         end = arr[0]
    }
    let allequal = [];
    let commonMultiples = [];
    for(let i = start; ; i++) {
        let notAFactor;
        for (let j = start; j <= end; j++) {
        //    console.log( `i = ${i}, j = ${j}`)
           if(i % j !== 0 ) {
               notAFactor = true;
            //    console.log(`   ${j} is not a factor of ${i}`);
           }
        }
        if (notAFactor === undefined) {
            return i;
        }
    }
}
console.log(smallestCommons([23,18]));