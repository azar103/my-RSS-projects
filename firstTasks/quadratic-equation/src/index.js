module.exports = function solveEquation(equation) {
  var s1 = equation.split(' * x^2 ');
  var s2 = s1[1].split(' * x ');
  var a = +s1[0].replace(' ', '');
  var b = +s2[0].replace(' ', '');
  var c = +s2[1].replace(' ', '');
  var D = b * b - 4 * a * c;
  var x1 = (-b + Math.sqrt(D)) / (2 * a);
  var x2 = (-b - Math.sqrt(D)) / (2 * a);
  x1 = Math.round(x1);
  x2 = Math.round(x2);
  if (x1 < x2) return [x1, x2];
  else return [x2, x1];
};
