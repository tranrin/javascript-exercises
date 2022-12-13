const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(array) {
  
  var len = array.length;
  var setsum =0;
  for(var i = 0; i < len; i++){
    setsum = setsum + array[i];
  }
	return setsum;
};

const multiply = function(array) {
  var len = array.length;
  var setmulti = 1;
  for(var i = 0; i < len; i++){
    setmulti = setmulti * array[i];
  }
	return setmulti;

};

const power = function(a,b) {
  return Math.pow(a,b)
	
};

const factorial = function(a) {
  if(a==0){
    return 1;
  }
  return(a * factorial(a - 1));

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
