function convertHTML(str) {
    let words = str.split(" ");
    for(let i = 0; i < words.length; i++) {
        if(words[i] === "&") {
           str = str.replace(words[i],"&amp;");
        }
        // if(words[i] === '"') {
        //    str = str.replace(words[i],"&quot");
        //    console.log(str)
        // }
        // if(words[i] === "'") {
        //    str = str.replace(words[i],"&apos");
        // }
        console.log(words[i]);
    }
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "'") {
            str = str.replace(str[i], "&apos;")
        }
        if(str[i] === '"') {
            str = str.replace(str[i], "&quot;")
        }
        if(str[i] === "<") {
           str = str.replace(str[i],"&lt;");
        }
        if(str[i] === ">") {
           str = str.replace(str[i],"&gt;");
        }
    }
    return str;
}

console.log(convertHTML("Dolce & Gabbana")); // should return Dolce &amp; Gabbana
// this seems a really long code, and thats true, but it's the best that i can do.
// thank you for reading these whole lines of code.