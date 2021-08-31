/**
 * 問題１：
 * 以下のコードではエラーが発生します。
 * コンソールで"fn called"と表示されるように
 * fn内のコードを変更してください。
 *
 * ※if文は削除してはいけません。
 */

//自分の答え
function fn() {
    let a = 'fn called';
    if(true) {
        console.log(a);
    }
    return a; // ReferenceError: a is not defined
}

const result = fn();
console.log(result);

// 答え
function fn() {
    let a; //変数宣言をする
    if(true) {
        a = 'fn called';
    }
    return a; // ReferenceError: a is not defined
}

// const result = fn();
// console.log(result);


/**
 * 問題２：
 * fn2内の記述を変更して、各コンソールで
 * 期待値を出力するように修正してください。
 */

//自分の答え
var val = 'val1';
function fn2() {
    console.log(val); // 期待値->'val1'

    var va2 = 'val2'; //letにする
    // varのままだと関数内に変数宣言されるまえなので44行目がエラー
    console.log(va2); // 期待値->'val2'

    console.log(val); // 期待値->'val1'
}
fn2();

// 答え
var val = 'val1';
function fn2() {
    console.log(val); // 期待値->'val1'

    if(true) {
        let val = 'val2';
        console.log(val); // 期待値->'val2'
    }

    console.log(val); // 期待値->'val1'
}
fn2();

/**
 * 問題３：
 * 「クロージャー（プライベート変数）」のレクチャーで作成
 * したincrementと同じ機能を持つincrement関数をブロック
 * スコープとクロージャーを利用して作成してみてください。
 *
 * increment(); // 期待値->1
 * increment(); // 期待値->2
 * increment(); // 期待値->3
 * increment(); // 期待値->4
 */

{
    let num = 0;
    function increment() {
    // 関数なので外から呼び出せる
        num = num + 1;
        console.log(num);
    }
}

// num; 外から呼び出せない

increment();
increment();
increment();
increment();
