// triangle 5ခုလိုချင်တယ်
//စ = ၁
//ဆုံး < ၆
//တိုး ++ , လျှော့ --
for (let i = 1; i < 6; i++) {
  console.log("*");
  console.log("* *");
  console.log("* * *");
}

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    //break;
    continue;
  }
  //console.log(i, "loop");
}

//စ = ၁၀
//ဆုံး >= ၁
//တိုး ++ , လျှော့ --

for (let i = 10; i >= 1; i--) {
  //console.log(i, " loop");
}

const arr = ["a", "b", "c", "d", "e", "f", "g"];

console.log(arr);
for (let i = 0; i < arr.length; i++) {
  //console.log(i, arr[i]);
}
for (x of arr) {
  console.log(x);
}

for (key in arr) {
  console.log(key, arr[key]);
}

const obj = {
  a: "aa",
  b: "bb",
  c: "cc",
  d: "dd",
  e: "ee",
};
for (key in obj) {
  console.log(key, obj[key]);
}
