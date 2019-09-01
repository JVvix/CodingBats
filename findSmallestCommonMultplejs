function smallestCommons(arr) {
    let start = arr[0];
    let end = arr[1];
    let allequal = [];
    let commonMultiples = [];
    for(let i = start; i < 200; i++) {
        for (j = start; j <= end; j++) {
           console.log( `i = ${i}, j = ${j}`)
           if(i % j !== 0 ) {
               console.log(`   breaking out of loop because ${i} is not multiple of ${j}`);
               break;
           }
           if( j === end) {   // only gets here if i is dvisiable by the last j value
                return i;
           }
        }
    }
}
console.log(smallestCommons([1,5]));