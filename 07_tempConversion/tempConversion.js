const ftoc = function(temperature) {
  let temperatureInC = (temperature - 32) * 5 / 9;
  return checkIfHasDecimal(temperatureInC) ? +temperatureInC.toFixed(1) : temperatureInC;
};

const ctof = function(temperature) {
  let temperatureInF = temperature * 9 / 5 + 32;
  return checkIfHasDecimal(temperatureInF) ? +temperatureInF.toFixed(1) : temperatureInF;
};

function checkIfHasDecimal(number) {
  return ((number - Math.floor(number)) !== 0)
} 

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
