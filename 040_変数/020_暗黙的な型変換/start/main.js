function printTypeAndValue(val) {
  // 引数（型、値）
  console.log(typeof val, val);
}

let a = 0;

printTypeAndValue(a);

// 文字列を数字に変換
let b = parseInt('1') + a;

printTypeAndValue(b);

let c = 15 - b;

printTypeAndValue(c);

// nullは0
let d = c - null;

printTypeAndValue(d);

// trueは1
let e = d - true;

printTypeAndValue(e);