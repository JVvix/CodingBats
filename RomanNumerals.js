var convertToRoman = function(num) {

  var value = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumbers = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var newNum = '';

  for (var index = 0; index < value.length; index++) {
    while (value[index] <= num) {
      newNum += romanNumbers[index];
      num -= value[index]
    }
  }

  return newNum;
}
function convertToRoman(num) {
    let str = [I,V,X,L,C,D,V,M]
    let newNum = "";
    
}

console.log(convertToRoman(36));