let day = "";
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
//console.log(`Today is ${day}`);
//let text = "";
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  case 1:
    text = "Today is Monday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
//console.log(text);
const Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    //console.log("This animal is not extinct.");
    break;
  case "Dinosaur":
  default:
  // console.log("This animal is extinct.");
}

// let num = "";
// let i = 0;
// // while (i < 10) {
// //   num += `The number is  ${i} `;
// //   i++;
// // }
// do {
//   num += `The number is ${i} `;
//   i++;
// } while (i < 10);
// console.log(num);
const cars = ["BMW", "Volvo", "Saab", "Ford"];

let i = 0;
let namecar = "";
// for (; cars[i]; ) {
//   namecar += cars[i];
//   i++;
// }
while (cars[i]) {
  namecar += cars[i];
  i++;
}
console.log(namecar);
