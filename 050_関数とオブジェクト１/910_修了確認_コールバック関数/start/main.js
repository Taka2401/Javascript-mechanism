/**
 * 問題１：
 * setTimeoutの実行から１秒後にブラウザの
 * コンソールに'hello Tom'と表示されるように
 * 実装してみましょう。
 *
 * ※必ずperson.helloメソッドは解答内で使用してください。
 */
const person = {
    hello: function () {
        return 'hello Tom'
    }
}

// 自分の答え
// setTimeout(person.hello, 1000);

// 答え
// 無名関数で返り値を変数に入れて表示させる
setTimeout(function() {
    const hello = person.hello();
    console.log(hello);
}, 1000)

// /**
//  * 問題２：
//  * setTimeoutの実行から１秒後にブラウザの
//  * ダイアログに'hello Tom'と表示されるように
//  * 実装してみましょう。
//  *
//  * ※必ずperson.helloメソッドは解答内で使用してください。
//  * ※alertは第一引数に渡した文字列を画面のダイアログに表
//  * 示する関数です。
//  */

// 自分の答え
// setTimeout(alert('hello Tom'), 3000);

// 答え
setTimeout(function() {
    const hello = person.hello();
    alert(hello);
}, 1000)


// /**
//  * 問題３：
//  * objにgreetingというメソッドを実装しました。
//  * これをsetTimeoutで１秒後に表示するようなafter1sの
//  * 関数にコールバックとして渡しました。
//  * その後objに格納したgreeting関数を別の関数で
//  * 上書きしました。
//  * この時、１秒後にコンソールに出力されるのは
//  * 'hello'または'hey'のどちらでしょうか？
//  */
const obj = {};

obj.greeting = function() {
    console.log('hello');
}

function after1s(callback) {
    setTimeout(callback, 1000);
}

// この時点で実行します。
// after1s(obj.greeting);

// この後でgreetingを書き換えます。
obj.greeting = function() {
    console.log('hey');
}

// 自分の答え
// hey

// 答え
// hello
// after1sが参照するのは書き換えられる前のobj.greetingの関数

// /**
//  * 問題４：
//  * 以下のcalcFactoryを修正して、計算式を
//  * コンソール(console.log)に表示するか、
//  * ダイアログ(alert)に出力するかを
//  * 使い分けできるようにしてください。
//  *
//  * ※コールバック関数を用いて実装してください。
//  */

// 自分の答え
// function calcFactory(val) {
//     return {
//         plus: function(target) {
//             const newVal = val + target;
//             // console.log(`${val} + ${target} = ${newVal}`);
//             setTimeout(alert(calcFactory.plus.bind(calcFactory)), 2000)
//             val = newVal;
//         }
//         // minus: function(target) {
//         //     const newVal = val - target;
//         //     // console.log(`${val} - ${target} = ${newVal}`);
//         //     setTimeout(alert(calcFactory.minus), 2000)
//         //     val = newVal;
//         // },
//         // multiply: function(target) {
//         //     const newVal = val * target;
//         //     // console.log(`${val} x ${target} = ${newVal}`);
//         //     setTimeout(alert(calcFactory.multiply), 2000)
//         //     val = newVal;
//         // },
//         // divide: function(target) {
//         //     const newVal = val / target;
//         //     // console.log(`${val} / ${target} = ${newVal}`);
//         //     setTimeout(alert(calcFactory.divide), 2000)
//         //     val = newVal;
//         // }
//     };
// }

// 答え
function calcFactory(val, callback) {
    return {
        plus: function(target) {
            const newVal = val + target;
            callback(`${val} + ${target} = ${newVal}`);
            val = newVal;
        },
        minus: function(target) {
            const newVal = val - target;
            callback(`${val} - ${target} = ${newVal}`);
            val = newVal;
        },
        multiply: function(target) {
            const newVal = val * target;
            callback(`${val} x ${target} = ${newVal}`);
            val = newVal;
        },
        divide: function(target) {
            const newVal = val / target;
            callback(`${val} / ${target} = ${newVal}`);
            val = newVal;
        }
    };
}

// 渡す引数によって表示を使い分けることができる
const calc = calcFactory(10, alert);
calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);

