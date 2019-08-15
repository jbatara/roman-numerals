$(document).ready(function() {
function romanNumeralDigit(place, number) {
  var romanOnesArray = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"]
  var romanTensArray = ["x", "xx", "xxx", "xl", "l", "lx", "lxx", "lxxx", "xc"]
  var romanHundredsArray = ["c", "cc", "ccc", "cd", "d", "dc", "dcc", "dccc", "cm"]
  if (place===0) {
    return romanOnesArray[number-1]
  }
  else if (place===1) {
    return romanTensArray[number-1]
  }
  else if (place===2) {
    return romanHundredsArray[number-1]
  }
  else {
    return "Enter a number below 1000."
  }
};

function romanNumeral(number) {
  var numberLength = number.length;
  var answer = "";
  for (var i = 0; i < number.length; i++) {
    var place = numberLength - i -1;
    answer += romanNumeralDigit(place, number[i]);
  if (place>2) {
    return "Enter a number below 1000"
  }
}
  return answer;
};


$(".btn").click(function(event) {
  console.log(romanNumeral($("input[name=input]").val()));





// console.log($("input[name=input]"))

});
});
