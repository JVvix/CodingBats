function bouncer(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(boolean(arr[i]) === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

bouncer([7, "ate", "", false, 9]); // returns [7,"ate",9];