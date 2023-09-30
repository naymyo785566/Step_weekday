console.log(
  `I'm ${(function () {
    let birthYear = 1998;
    let currentYear = 2023;
    return currentYear - birthYear;
  })()} years old`
);
// function run() {
//   let x = 5;
//   let y = 10;
//   console.log(x + y);
// }
// run();

// console.table(results);
const obj = {
  a: "aaa",
  b: "bbb",
  C: function () {
    return "this is c method";
  },
  d() {
    return "this is d method";
  },
};
// console.log(obj);
// console.log(obj.a);
// console.log(obj.C());
// console.log(obj.d());
const exchangeCenter = {
  name: "MMS Exchange Money",
  address: "No.4 San Chaung",
  openHour: {
    open: "9 am",
    close: "5 pm",
  },
  rates: [
    {
      currency: "USD",
      rate: 2100,
    },
    {
      currency: "EUR",
      rate: 1650,
    },
  ],
  intro() {
    return `This is ${this.name} and is located in ${this.address}`;
  },
  exchange: function (amount, fromCurrency, toCurrency) {
    //logic
    return "Exchange Money";
  },
  saveRecord: function (list) {
    //logic
    return "saved";
  },
};
// console.log(exchangeCenter.intro());
// let teachingHour = 9;
// if (teachingHour >= 9) {
//   console.log("I will start teaching");
// }

// let mark = 30;
// if (mark >= 80) {
//   console.log("Distation");
// } else if (mark >= 40) {
//   console.log("Passed");
// } else {
//   console.log("Fail");
// }
// function isOddEvent(x) {
//   if (x % 2 === 0) {
//     return x + "is Event";
//   } else {
//     return x + "is Odd";
//   }
// }

// console.log(isOddEvent(5));
// console.log(isOddEvent(6));

// console.log(isOddEvent(7));
function wakeUpTime(x) {
  if (x > 8) {
    return "မင်း အရိုက်ခံရမယ်";
  }
  return "အေးဆေးပဲ";
}
// console.log(wakeUpTime(5));
// console.log(wakeUpTime(10));
let busFee = 300;
function howToGO(pockMoney) {
  if (pockMoney >= busFee) {
    return "with Bus";
  }
  return "walking";
}
// console.log(howToGO(400));
// console.log(howToGO(100));

function requestMoney(pockMoney) {
  if (pockMoney > busFee * 2) {
    return "I will go to school";
  }
  return "Angry";
}
// console.log(requestMoney(600));
// console.log(requestMoney(2000));

function startTeaching(x) {
  if (x > 9) {
    return "teaching started";
  }
  return "Waiting for teaching";
}
// console.log(startTeaching(7));
// console.log(startTeaching(10));

function checkResult(mark) {
  if (mark >= 80) {
    return "Distation";
  } else if (mark >= 40) {
    return "Passed";
  } else {
    return "Fail";
  }
}

// console.log(checkResult(90));
// console.log(checkResult(50));
function canIPass(exam, viber) {
  if (exam > 60 && viber > 60) {
    return "You Pass";
  }
  return "You Fail";
}
// console.log(canIPass(50, 70));
// console.log(canIPass(70, 80));
function canIVote(age, nationality) {
  if (age >= 18 && nationality == "mm") {
    return "You can vote";
  }
  return "You aren't allow to vote";
}
// console.log(canIVote(19, "mm"));
// console.log(canIVote(25, "sg"));
function busChoice(busno) {
  if (busno === 65 || busno === 20) {
    return "You will reach Kyauk Myaungg";
  }
  return "You will not";
}
// console.log(busChoice(15));
// console.log(busChoice(20));
// console.log(busChoice(65));
function lunch(food) {
  if (food === "hot pot" || food === "malarshankaw") {
    return "u will full";
  }
  return "u will not";
}

// console.log(lunch("hot pot"));
// console.log(lunch("ice cream"));
if (true) {
  console.log("It is true");
}
true && console.log("I am also true");

// if (false) {
//   console.log("it is true");
// } else {
//   console.log("it is false");
// }

// false ? console.log("it is also tue") : console.log("it is also false

function additional(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  return "Incorrect argument";
}
console.log(additional(4, 5));
console.log(additional(3, "9"));
