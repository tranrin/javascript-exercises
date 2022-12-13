const convertToCelsius = function(num) {
  var format = (num-32) * (5 / 9);
  var resformat = parseFloat(format.toFixed(1));
  return resformat;
};
const convertToFahrenheit = function(num) {
  var format=(num * (9 / 5)) + 32;
  var resformat=parseFloat(format.toFixed(1));
  return resformat;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
