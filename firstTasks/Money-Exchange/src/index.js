// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency <= 0) return {};
  else if (currency > 10000)
    return {
      error: "You are rich, my friend! We don't have so much coins for exchange"
    };
  const coins = { H: 50, Q: 25, D: 10, N: 5, P: 1 };
  const coinsName = ['H', 'Q', 'D', 'N', 'P'];
  var obj = {};

  function shortChange(currency, flag) {
    var coinsKey = coinsName[flag];
    if (currency == 0) {
      flag = 0;
      return obj;
    } else if (currency >= coins[coinsKey]) {
      obj[coinsKey] = Math.floor(currency / coins[coinsKey]);
      currency = currency - coins[coinsKey] * obj[coinsKey];
      return shortChange(currency, ++flag);
    } else return shortChange(currency, ++flag);
  }
  return shortChange(currency, 0);
};
