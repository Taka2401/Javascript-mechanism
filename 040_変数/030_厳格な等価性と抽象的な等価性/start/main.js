function printEquality(a, b) {
  console.log(a === b);
  console.log(a == b);
}

let a = '1';
let b = 1;

let c = true;

// trueが数字に変換される
console.log(b === Number(c));
printEquality(b, c);

// ""は0に変換
let e = "";
let f = 0;

printEquality(e, f);

let g = "0";

printEquality(g, f);
