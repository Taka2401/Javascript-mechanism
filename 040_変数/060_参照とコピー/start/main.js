// プリミティブ値 (immutable)
// 参照先の値がコピーされる

let a = 'hello';

// 他の変数に値をコピーしているのでそれぞれが独立している
let b = a;

// bの値を変えてもaの値は変わらない
b = 'bye';
console.log(a, b);


// オブジェクト (mutable)
// オブジェクトへの参照がコピーされる

let c = {
  prop: 'hello'
}
let d = c;

// 他の変数に代入しても同じオブジェクトを参照する
// つまり、dの値を変えるとcの値も変化する
d.prop = 'bye';

// この場合dにオブジェクトが追加されるが、cには生成されない
d = {};
console.log(c, d);