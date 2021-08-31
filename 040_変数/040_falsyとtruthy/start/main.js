//falsyな値
// false, null, 0, ""
// undefined, 0n, Nan(Not a Number)

// truthyな値
// falsyな値以外

// let a = 0;
// console.log(Boolean(a)); //false

// let a; //undefinedとなる
// console.log(Boolean(a)); //false

// 空文字は整数に変換できない
let a = parseInt("");
console.log(Boolean(a));

if(!a) { //not演算子 ※undefinedかnullの場合のみ
// 0を判定したい場合はまた別のやり方でする
    console.log('hello');
} else {
    console.log('bye');
}
