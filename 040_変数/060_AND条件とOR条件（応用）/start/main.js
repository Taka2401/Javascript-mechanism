// function hello(name) {
//   if(!name) {
//     // 初期値
//     name = 'Tim'
//   }
//   console.log('Hello ' + name);
// }

// hello('Bob');

// デフォルト引数
function hello(name = 'Tom') {
  // OR条件で簡略化
  // name = name || 'Tom';
  console.log('Hello ' + name);
}

hello()

let name = 'Bob';

// if(name) {
//   hello(name);
// }

// 簡略化
name && hello(name);
