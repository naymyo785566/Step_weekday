console.log("Loop Practicals");

const points = [34, 15, 2, 52, 19, 56, 30, 57];
const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
];

// Problems ( Tasks )
// 1. point စုစုပေါင်း
// 2. number တွေပဲပါတဲ့ array ကို input အနေနဲ့ထည့်လိုက်ရင် စုစုပေါင်းပြန်ပေးနိုင်တဲ့ function
// 3. စုံသီးသန့်၊ မသီးသန့် ခွဲပေးနိုင်တဲ့ function
// 4. array 5ခန်း ခွဲထုတ်ပြပါ
// 5. ကြိုက်တဲ့ index ကစ ကြိုက်သလောက် အခန်းအရည်အတွက် ခွဲထုတ် နိုင်တဲ့ function
// 6. Contain,CopyArray, Modified Array, Filter Array

console.log(points);
let pointsTotal = 0;
for (point of points) {
  pointsTotal += point;
}
// console.log(pointsTotal);

function calculateTotal(numberArr) {
  let total = 0;
  for (x of numberArr) {
    total += x;
  }
  return total;
}
// console.log(calculateTotal(points));
// console.log(calculateTotal([1, 2, 3]));
// console.log(calculateTotal([6, 4, 7]));

//num%2 = 0 ? even : odd
function separateEvenOdd(numberArr) {
  const evenArray = [];
  let evenArrayIndex = 0;
  const oddArray = [];
  let oddArrayIndex = 0;
  for (x of numberArr) {
    if (x % 2 === 0) {
      evenArray[evenArrayIndex++] = x;
    } else {
      oddArray[oddArrayIndex++] = x;
    }
  }
  return {
    even: evenArray,
    odd: oddArray,
  };
}
//console.log(separateEvenOdd(points));

// function slice(array, count) {
//   const resultArray = [];
//   let resultArrayIndex = 0;
//   for (x in array) {
//     if (x < count) {
//       resultArray[resultArrayIndex++] = array[x];
//     }
//   }
//   return resultArray;
// }
// console.log(slice(points, 5));
// console.log(slice(points, 3));
// console.log(slice(points, 2));
function slice(array, startIndex, count) {
  const resultArr = [];
  let resultArrIndex = 0;

  let endIndex = startIndex + count;
  for (x in array) {
    if (x >= startIndex && x < endIndex) {
      resultArr[resultArrIndex++] = array[x];
    }
  }
  return resultArr;
}

// console.log(slice(points, 0, 5));
// console.log(slice(points, 2, 5));
// isContain bool
function isContain(array, search) {
  let result = false;
  for (x of array) {
    if (x === search) {
      result = true;
    }
  }
  return result;
}
// console.log(isContain(points, 50));
// console.log(isContain(points, 2));
// console.log(isContain(points, 20));
// console.log(isContain(points, 30));
function arrayCopy(array) {
  const result = [];
  let resultIndex = 0;
  for (x of array) {
    result[resultIndex++] = x;
  }
  return result;
}
// const newPoints = arrayCopy(points);
// console.log(newPoints);
// const newProducts = arrayCopy(product);
// console.table(product);
// console.table(newProducts);
const newPoints = [];
for (x in points) {
  //points[x] = points[x] + 10
  //points[x] += 10;
  //points[x] = points[x] % 2 === 0 ? "even" : "odd";
  newPoints[x] = points[x] + 10;
}
// console.log(newPoints);
// console.log("Original array");
// console.table(products);

const saleProduct = [];
let saleProductIndex = 0;
for (product of products) {
  //console.log(product);
  // saleProduct[saleProductIndex++] = {
  //   id: product.id,
  //   title: product.title,
  //   price: (product.price += 100),
  // };
  // saleProduct[saleProductIndex] = product;
  // saleProduct[saleProductIndex].price += 100;
  // saleProductIndex++;
  if (product.price <= 50) {
    saleProduct[saleProductIndex++] = product;
  }
}

// console.log("Sale Product");
// console.table(saleProduct);
// Problems
// 3 x 3 square လေးဖန်တီးရအောင်
// * * *
// * * *
// * * *
// n x n square လေးဖန်တီးရအောင်
// 3row triangle လေးဖန်တီးရအောင်
// *
// * *
// * * *
console.log("* * *");
console.log("* * *");
console.log("* * *");
console.log("* * *\n* * *\n* * * ");

function square(count, char = "*") {
  let result = "";
  //rows
  for (j = 0; j < count; j++) {
    //colu
    for (i = 0; i < count; i++) {
      result += `${char} `;
    }
    result += " \n";
  }

  return result;
}
// console.log(square(3));
// console.log(square(5, "-"));
// console.log(square(10, "0"));
function rectangle(w, h, char = "*") {
  let result = "";
  //rows
  for (j = 0; j < h; j++) {
    //colu
    for (i = 0; i < w; i++) {
      result += `${char} `;
    }
    result += " \n";
  }

  return result;
}
// console.log(rectangle(3, 5));
// console.log(rectangle(3, 3, "-"));
// console.log(rectangle(3, 6, "x"));

function triangle(count, char = "*") {
  let result = "";
  //rows
  for (j = 0; j < count; j++) {
    //colu
    for (i = 0; i < j + 1; i++) {
      result += `${char} `;
    }
    result += " \n";
  }

  return result;
}
// console.log(triangle(3));
// console.log(triangle(9));
// console.log(triangle(12));
function square(count, char = "*", dat = "-") {
  let result = "";

  //rows
  for (j = 0; j < count; j++) {
    result += `${char}`;
    //colu
    for (i = 0; i < j; i++) {
      result += `${dat} `;
    }
    result += " \n";
  }
  return result;
}
// console.log(square(6));
const marks = {
  mm: 45,
  en: 72,
  math: 96,
  chem: 87,
  phy: 85,
  bio: 54,
};

const student1Mark = [
  {
    subject: "Myanmar",
    short: "mm",
    mark: 39,
  },
  {
    subject: "English",
    short: "en",
    mark: 72,
  },
  {
    subject: "Mathematic",
    short: "math",
    mark: 26,
  },
  {
    subject: "Chemistry",
    short: "chem",
    mark: 87,
  },
  {
    subject: "Physics",
    short: "phy",
    mark: 85,
  },
  {
    subject: "Biology",
    short: "bio",
    mark: 54,
  },
];

const allStudentsMark = [
  {
    name: "Mg Mg",
    marks: [
      {
        subject: "Myanmar",
        short: "mm",
        mark: 45,
      },
      {
        subject: "English",
        short: "en",
        mark: 72,
      },
      {
        subject: "Mathematic",
        short: "math",
        mark: 96,
      },
      {
        subject: "Chemistry",
        short: "chem",
        mark: 87,
      },
      {
        subject: "Physics",
        short: "phy",
        mark: 85,
      },
      {
        subject: "Biology",
        short: "bio",
        mark: 54,
      },
    ],
  },
  {
    name: "Kyaw Kyaw",
    marks: [
      {
        subject: "Myanmar",
        short: "mm",
        mark: 50,
      },
      {
        subject: "English",
        short: "en",
        mark: 34,
      },
      {
        subject: "Mathematic",
        short: "math",
        mark: 65,
      },
      {
        subject: "Chemistry",
        short: "chem",
        mark: 38,
      },
      {
        subject: "Physics",
        short: "phy",
        mark: 40,
      },
      {
        subject: "Biology",
        short: "bio",
        mark: 45,
      },
    ],
  },
  {
    name: "Su Su",
    marks: [
      {
        subject: "Myanmar",
        short: "mm",
        mark: 68,
      },
      {
        subject: "English",
        short: "en",
        mark: 83,
      },
      {
        subject: "Mathematic",
        short: "math",
        mark: 85,
      },
      {
        subject: "Chemistry",
        short: "chem",
        mark: 90,
      },
      {
        subject: "Physics",
        short: "phy",
        mark: 87,
      },
      {
        subject: "Biology",
        short: "bio",
        mark: 83,
      },
    ],
  },
];

// Problems
// 1. marks, studentMark စုစုပေါင်း ရေးပြပါ
// 2. studentMark မှဘာသာရပ်တစ်ခုစီ ကျရှံးတွက်ပေးပါကြရှုံး
// 3. over all အောင်မြင်၊ ကျရှုံးတွက်ပေးပါ
// 4. ကျောင်းသားအားလုံး အောင်မြင်၊ ကျရှုံးတွက် ပေးပါ
// 5. အောင်မြင်တဲ့လူတွေဆို Distinction ပါရင် ထည့်ရည်တွက်ပေးပါ

//console.log(marks);
//console.table(student1Mark);
let totalMark = 0;
for (key in marks) {
  //console.log(key, marks[key]);
  totalMark += marks[key];
}
//console.log(totalMark);
let totalStudent1Mark = 0;
let overAllResult = "Passed";
// for (subject of student1Mark) {
//   // console.log(subject.subject, subject.mark);
//   totalStudent1Mark += subject.mark;
//   //subject.result = subject.mark >= 40 ? "passed" : "failed";
//   if (subject.mark >= 40) {
//     subject.result = "Passed";
//   } else {
//     // subject.result = "failed";
//     // overAllResult = "failed";
//     subject.result = overAllResult = "failed";
//   }
// }
// console.table(student1Mark);
// console.log("total", totalStudent1Mark);
// console.log(overAllResult);
console.log(allStudentsMark);

for (student of allStudentsMark) {
  student.overallResult = "Passed";
  let distinaction = 0;
  for (subject of student.marks) {
    if (subject.mark >= 40) {
      subject.result = "Passed";
      if (subject.mark >= 80) {
        distinaction += 1;
      }
    } else {
      subject.result = "Failed";
      student.overallResult = "Failed";
    }
    //console.log(subject);
  }
  // if (student.overallResult === "Passed") {
  //   student.distinaction = distinaction;
  // }
  student.overallResult === "Passed" && (student.distinaction = distinaction);
  //console.log(student);
  //console.log("==========");
}
console.log(allStudentsMark);