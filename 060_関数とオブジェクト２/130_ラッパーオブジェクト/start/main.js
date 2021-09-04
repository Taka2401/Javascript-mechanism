// ラッパーオブジェクト
// プリミティブ値を内包するオブジェクト

const a = new String('hello');

// console.logで使えるオブジェクトを確認できる
console.log(a.toUpperCase());

// これでもできる
const a = 'hello'.toUpperCase();
console.log(a);


const b = 100;
console.log(b.toExponential());