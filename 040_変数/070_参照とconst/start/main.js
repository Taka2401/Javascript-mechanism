// 再代入できない
// const a = 'hello';
// a = 'bye';

const b = {
  prop: 'hello'
}

// オブジェクトの再代入はできない
// b = {}

// プロパティの再代入は出来る
b.prop = 'bye';
console.log(b);