const palindromes = function (string) {
  var arraystring = string.split("");
  var reservearray = arraystring.reverse();
  if(reservearray.join("").replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"").toLowerCase()==string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"").toLowerCase()){
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
