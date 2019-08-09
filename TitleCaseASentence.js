function titleCase(str) {
    let newStr = "";
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase();
        newStr += arr[i] + " ";
    }
    newStr = newStr.trim();
    return newStr;
}

console.log(titleCase("sHoRt AnD sToUt") + ".");
// console.log(titleCase("HERE IS MY HANDLE AND HERE IS MY SPOUT"));