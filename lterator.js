const prices = [25, 20, 35, 45, 60.5];

//prices.forEach((price, idx) => {
//console.log(idx, price);
//});

const newPrices = prices.map((price) => {
  return price * 1.1;
});

console.log(newPrices);

const premuimPriced = newPrices.filter((price) => {
  return ptice > 30;
});

console.log(premuimPrices);
