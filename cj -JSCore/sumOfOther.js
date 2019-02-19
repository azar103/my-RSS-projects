module.exports.sumOfOther = function sumOfOther(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid value");
  }
  const allSum = arr.reduce((sum, elem) => sum + elem, 0);
  return arr.map(elem => allSum - elem);
};
