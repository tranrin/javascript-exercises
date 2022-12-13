const reverseString = function (string) {
  if (string === '') {
    return '';
  }
  var arraystring = string.split("");
  var reservearray = arraystring.reverse();
return reservearray.join("");
};

// Do not edit below this line
module.exports = reverseString;
