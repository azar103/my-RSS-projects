module.exports = function getZerosCount(number, base) {
  var arrFactors = [];

  function simpleNum(number) {
    if (number % 2 == 0) {
      arrFactors.push(2);
      while (number % 2 == 0) {
        number = number / 2;
      }
    }
    var s = 3;
    var maxFactor = Math.floor(Math.sqrt(number));
    while (s <= maxFactor) {
      if (number % s == 0) {
        arrFactors.push(s);
        while (number % s == 0) {
          number = number / s;
          maxFactor = Math.floor(Math.sqrt(number));
        }
      }
      s = s + 2;
    }
    if (number > 1) arrFactors.push(number);
    return arrFactors;
  }

  var arrCount = simpleNum(base).map(element => {
    var count = 0;
    for (var x = element; x <= number; x *= element) {
      count += Math.floor(number / x);
    }
    return count;
  });

  var res = [];
  arrFactors.forEach(element => {
    var exponent = 0;
    while (base % element == 0) {
      exponent += 1;
      base = base / element;
    }
    res.push(exponent);
  });

  var endArr = [];
  arrCount.forEach((element, index) => {
    endArr.push(Math.floor(element / res[index]));
  });

  endArr.sort((a, b) => a - b);
  return endArr[0];
};
