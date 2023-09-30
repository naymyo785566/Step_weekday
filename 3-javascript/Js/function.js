console.log("Js Function");

function stars(text) {
  console.log(`${text}`);
  console.log(`${text} ${text}`);
  console.log(`${text} ${text} ${text}`);
  return "This is stars";
}
// stars();
// stars();
// stars();
// stars();
// console.log(stars());
// stars("*");
// stars("-");
// stars("0");
// stars("x");
// stars(">");
// function adding(x, y) {
//   return x + y;
// }
// console.log(adding(2, 3));
// console.log(adding(7, 4));

// Calculate age (birth)
function calcAge(birthYear) {
  let currentYear = 2023;
  let age = currentYear - birthYear;
  return `You are ${age} years old`;
}

// console.log(calcAge(1998));
// console.log(calcAge(2003));
// console.log(calcAge(1995));

// Tax Calclution  5% amount
// (amouont / 100) * 5 = 5% of amount = Tax
// (amouont / 100) * 10 = 10% of amount = Tax

function calcTax(amount, taxPercentage = 5) {
  let tax = (amount / 100) * taxPercentage;
  return tax;
}
// console.log(calcTax(10000));
// console.log(calcTax(345, 50));
// console.log(calcTax(500, 10));

// const results = [];
// let resultIndex = 0;
//function calcArea(w, b) {
// return `${w} + ${b} = ${w * b} sqft`;
// return w * b + "sqft";
//   let area = w * b;
//   const result = {
//     width: w + "ft",
//     breadth: b + "ft",
//     area: area + "sqft",
//   };
//   results[resultIndex++] = result; //add result to results array
//   return result;
// }

// console.log(calcArea(15, 75));
// console.log(calcArea(15, 50));
// console.log(calcArea(15, 60));
// console.log(calcArea(25, 60));
// console.log(calcArea(35, 90));
// console.log(calcArea(20, 50));

let rates = {
  USD: 2100,
  SGD: 1549,
  EUR: 2267,
};

// console.log(rates.USD);
// console.log(rates.SGD);
// console.log(rates.EUR);

function toMMK(amount, currency) {
  let exchangeRate = rates[currency];
  //   return `${amount * exchangeRate} MMK`;
  if (exchangeRate != undefined) {
    return amount * exchangeRate;
  }
  return currency + "is not supported";
}
console.log(toMMK(100, "YAN"));
console.log(toMMK(45, "SGD"));
console.log(toMMK(678, "EUR"));

// 100000 MMK to USD
// 30000 MMK to SGD
// 600000 MMK to EUR
function toCurrency(amount, currency) {
  let exchangeRate = rates[currency];
  //   return `${(amount / exchangeRate).toFixed(2)} ${currency}`;
  return amount / exchangeRate;
}

// console.log(toCurrency(100000, "USD"));
// console.log(toCurrency(30000, "SGD"));
// console.log(toCurrency(600000, "EUR"));

//100 USD = ? SGD
//50 EUR = ? SGD
function exchange(amount, fromCurrency, to) {
  let mmk = toMMK(amount, fromCurrency);
  return toCurrency(mmk, to);
}
console.log(exchange(100, "USD", "SGD"));
console.log(exchange(50, "EUR", "SGD"));

let exRates = {
  USD: 1.3681,
  EUR: 1.485,
  GBP: 1.7287,
  AUD: 0.885,
};

function toSGD(amount, currency) {
  let exCurrency = exRates[currency];
  return `${(amount * exCurrency).toFixed(2)} SGD`;
}
//   console.log(toSGD(50, "USD"));
//   console.log(toSGD(79, "EUR"));
//   console.log(toSGD(60, "GBP"));
//   console.log(toSGD(200, "AUD"));

function toExC(amount, currency) {
  let exCurrency = exRates[currency];
  return `${(amount / exCurrency).toFixed(2)} ${currency}`;
}
//   console.log(toExC(100000, "USD"));
//   console.log(toExC(50000, "EUR"));
//   console.log(toExC(75600, "GBP"));
//   console.log(toExC(4300, "AUD"));
const fruits = {
  apple: 400,
  orange: 500,
  lemon: 300,
  banana: 200,
};
let total = 0;
const voucher = [];
let voucherIndex = 0;
function buy(items, quantity) {
  let itemPrice = fruits[items];
  // console.log(itenPrice);
  let cost = quantity * itemPrice;
  let list = {
    items,
    price: itemPrice,
    quantity,
    cost,
  };
  voucher[voucherIndex++] = list;
  total = total + cost;
  return cost;
}
// console.log(buy("apple", 5));
// console.log(buy("orange", 8));
// console.log(buy("lemon", 2));
// console.log(buy("banana", 15));

// console.table(voucher);

// console.log("total", total);
// console.log("tax", calcTax(total));
// console.log("nettotal", total + calcTax(total));
// console.table({
//   total,
//   tax: calcTax(total),
//   netTotal: total + calcTax(total),
// });
