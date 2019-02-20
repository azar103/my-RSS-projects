module.exports = function check(str, bracketsConfig) {
  var objBrackets = {};
  bracketsConfig.forEach(element => {
    objBrackets[element[0]] = element[1];
  });
  str = str.split('');
  if (str.length % 2 != 0) return false;

  function Stack() {
    this._size = 0;
    this._storage = {};
  }

  Stack.prototype.push = function(data) {
    var size = ++this._size;
    this._storage[size] = data;
  };

  Stack.prototype.pop = function() {
    var size = this._size,
      deletedData;

    if (size) {
      deletedData = this._storage[size];

      delete this._storage[size];
      this._size--;

      return deletedData;
    }
  };

  var stack = new Stack();
  stack.push(str[0]);

  for (var i = 1; i < str.length; i++) {
    if (str[i] == objBrackets[stack._storage[stack._size]]) stack.pop();
    else stack.push(str[i]);
  }

  if (stack._size == 0) return true;
  else return false;
};
