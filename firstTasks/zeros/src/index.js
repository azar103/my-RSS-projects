module.exports = function getZerosCount(number) {
  if (number < 1 || number > 100000000) return 'incorrect value';
  else if (number < 5) return 0;
  var count = 0;
  var i = 5;
  while (i <= number) {
    var x = i;
    while (x <= number) {
      count++;
      x += i;
    }
    i *= 5;
  }

  return count;
};
