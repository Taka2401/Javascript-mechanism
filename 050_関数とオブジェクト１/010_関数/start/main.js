function fn(a, b) {
  // 実引数が渡ってくる
  // const a = arguments[0];
  // const b = arguments[1];
  // console.log(arguments);
  console.log(a, b);
}

let c = fn(1, undefined);


// 重複を避けたいときは関数式を使う
// const fn = function(a, b) {
//   console.log(a, b);
// };

// 複数同じ名前の関数がある時は最後が適用される
function fn(a, b) {
  console.log(2);
};

// 初期値の設定
function fn(a, b = 1) {
  console.log(a, b);
};

// undefinedの定義はしない
// let c = undefined;

// 意図して空
// let c = null;

// 引数がない時はundefinedになる
fn(1);　//(1, undefined)
