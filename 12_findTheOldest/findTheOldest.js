const findTheOldest = function(array) {  
  var oldestObject = array[0];
  for(var i = 0;i < array.length;i++){
    var check= array[i].yearOfDeath - array[i].yearOfBirth;
    if(array[i].hasOwnProperty('yearOfDeath') == false){           
      if(oldestObject.hasOwnProperty('yearOfDeath') == false){
        if(oldestObject.yearOfBirth > array[i].yearOfBirth){
          oldestObject = array[i];
        }
      }
      else{
        if(oldestObject.yearOfBirth > array[i].yearOfBirth && oldestObject.yearOfBirth > array[i].yearOfDeath){
          oldestObject = array[i];
          }
        }  
      }
      else{
        if(oldestObject.hasOwnProperty('yearOfDeath') == true){
          if(oldestObject.yearOfDeath-oldestObject.yearOfBirth < check){
              oldestObject = array[i];
            }
          }
          else{
            if(oldestObject.yearOfBirth > array[i].yearOfBirth && oldestObject.yearOfBirth > array[i].yearOfDeath){
              oldestObject = array[i];
              }
            }
        }
      }
    return oldestObject;
};

// Do not edit below this line
module.exports = findTheOldest;
