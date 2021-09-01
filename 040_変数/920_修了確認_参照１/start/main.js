/**
 * 問題：
 * 以下の操作を行った際にコンソールで表示される
 * 値はどうなるでしょうか？結果を考えてみてください。
 */
let val = 0;
let val2 = val;
val2 = 1;

console.log(val); // 問題１
// 自分の答え 0
// 答え 0

let obj = {
    prop1: 10
}
const obj2 = obj;
obj2.prop1 = 9;

console.log(obj); // 問題２
// 自分の答え 10
// 答え 9

function fn1(arg) {
    arg.prop2 = 8;
    return arg;
}
let obj3 = fn1(obj2);

console.log(obj); // 問題３
// 自分の答え わからない
// 答え { prop: 9, prop2: 8 }

function fn2(arg) {
    arg = {};
    return arg;
}

const obj4 = fn2(obj); // 問題４

console.log(obj); // 問題４
// 自分の答え arg{}
// 答え { prop: 9, prop2: 8 }

// この時点では参照先は一緒
let obj5 = obj;

// 参照先の初期化がされる
obj5 = 0;