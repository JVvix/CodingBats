 function palindrome(str) {
    str = str.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{} _-]/g, "")
    let reverseStr = "";

    for(let i = str.length-1; i >= 0; i--) {
        reverseStr += str[i];
    }
    if(str === reverseStr) {
        console.log(str + " and " + reverseStr)
        return true;
    } else {
        console.log(str + " and " + reverseStr)
        return false;
    }
}



console.log(palindrome("neveroddoreven"));