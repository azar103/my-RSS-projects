module.exports.make = function make(...firstArg) {
  const arr = [];
  function toSeekFunction(...arg) {
    if (typeof arg[0] === "function") {
      return arr.reduce(arg[0], 0);
    }

    if (arg.length === 1) {
      arr.push(arg[0]);
      return toSeekFunction;
    }

    arr.push(arg[0]);
    return toSeekFunction(...arg.slice(1));
  }

  return toSeekFunction(...firstArg);
};
