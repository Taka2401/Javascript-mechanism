// 通常の関数

function a() {
  console.log('called');
}

a();

// 即時関数
// 関数定義時に一度だけ実行される関数
// 実行結果が呼び出し元に返却される

// 外で使えるものとスコープ内部でしか使えないモノを明確に区別する

let c = (function() {

  console.log('called');

  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log('private is called');
  }
  function publicFn() {
    console.log('public is called: ' + privateVal++);
  }
  return {
    publicVal,
    publicFn
  };

})();

c.publicFn();
c.publicFn();
c.publicFn();
console.log(c.publicVal);

// 関数式

// let b = function() {
//   console.log('called');
// }();