const removeFromArray = function() {
  var array = arguments[0];
  var lenarray = array.length;
  var lenarg = arguments.length;
  for(var i = 0;i < lenarray; i++ ){
    
    for(var k = 1;k < lenarg; k++ ){
      if(array[i] === arguments[k]){
          array.splice(i, 1); 
          i--;
        }
    }
}
return array;

};

// Do not edit below this line
module.exports = removeFromArray;
