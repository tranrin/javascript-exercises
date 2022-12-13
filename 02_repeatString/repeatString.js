const repeatString = function (string, num) {
  if (num < 0) {
    return 'ERROR';
  }
  liststring = '';
  for (let i = 0; i < num; i++) {
  liststring = liststring + string;
  }
  return liststring;
};




// Do not edit below this line
module.exports = repeatString;

