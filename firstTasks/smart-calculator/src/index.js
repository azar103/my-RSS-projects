class SmartCalculator {
  constructor(initialValue) {
    this.buffer = [['+', initialValue]];

    this.valueOf = function() {
      function performDegree(arr) {
        let result = [];
        let i = 0;
        while (arr.length) {
          i = arr.length - 1;
          if (arr[i][0] !== '**') {
            result.push(arr.pop());
          } else if (arr[i][0] === '**') {
            let a = arr.pop();
            let b = arr.pop();
            b[1] = Math.pow(b[1], a[1]);
            arr.push(b);
          }
        }
        return performMultiplyAndDevide(result);
      }

      function performMultiplyAndDevide(arr) {
        let result = [];
        while (arr.length > 1) {
          let a = arr.pop();
          let s = arr[arr.length - 1];
          if (s[0] == '*') {
            a[1] = a[1] * s[1];
            arr[arr.length - 1] = a;
          }
          if (s[0] == '/') {
            a[1] = a[1] / s[1];
            arr[arr.length - 1] = a;
          }
          if (s[0] != '*' && s[0] != '/') result.push(a);
        }
        result.push(arr[0]);
        return lastResult(result);
      }

      function lastResult(arr) {
        let count = 0;
        const a = '-';
        const b = '+';
        for (let i = 0; i < arr.length; i++) {
          if (arr[i][0] == a) {
            count = count - arr[i][1];
          }
          if (arr[i][0] == b) {
            count = count + arr[i][1];
          }
        }
        return count;
      }
      return performDegree(this.buffer);
    };
  }

  add(number) {
    this.buffer.push(['+', number]);
    return this;
  }

  subtract(number) {
    this.buffer.push(['-', number]);
    return this;
  }

  multiply(number) {
    this.buffer.push(['*', number]);
    return this;
  }

  devide(number) {
    this.buffer.push(['/', number]);
    return this;
  }

  pow(number) {
    this.buffer.push(['**', number]);
    return this;
  }
}

module.exports = SmartCalculator;
