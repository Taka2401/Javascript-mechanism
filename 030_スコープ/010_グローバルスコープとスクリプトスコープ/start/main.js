let a = 0;
// script scopeに表示される let, const

var b = 0;
function c() {}
// global scopeに表示される var, 関数
// windowオブジェクト = global scope(script scope)

// debugger; 処理を止める

console.log(window.b);
//でも表示できる

window.d = 1;
let d = 2;
//更新される
console.log(d);