const fibonacci = function(num) {
  var fibonacci = 1;
  if(typeof(num)!='string'){
    fibonacci = 1 / Math.sqrt(5) * (Math.pow(((1 + Math.sqrt(5)) / 2),num) - Math.pow(((1 - Math.sqrt(5)) / 2),num));
    }
  if(num <= 0){
        return 'OOPS';

    }
  return Math.floor(fibonacci);

};

// Do not edit below this line
module.exports = fibonacci;
