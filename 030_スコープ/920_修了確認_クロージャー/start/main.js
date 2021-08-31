/**
 * 問題：
 * 四則演算を行うメソッドを持ったオブジェクトを
 * クロージャーを用いて作成してみてください。
 *
 * 四則演算を行うメソッド（plus, minus, multiply, divide）
 * を実行すると以下のようにコンソールに出力されます。
 *
 * const calc = calcFactory(10); // 初期値を10として設定
 * calc.plus(5);      // 出力結果 "10 + 5 = 15"
 * calc.minus(3);     // 出力結果 "15 - 3 = 12"
 * calc.multiply(3);  // 出力結果 "12 x 3 = 36"
 * calc.divide(2);    // 出力結果 "36 / 2 = 18"
 *
 * ※前に行った計算結果をもとに四則演算を行います。
 * ※四則演算は"+","-","*","/"を数値ではさんで計算を行います。
 */

// 自分の答え
function calcFactory(initial) {
  let calc = initial;

  function plus(num) {
    calc = initial + num;
    console.log(`${initial} + ${num} = ${calc}`);
    // テンプレート構文使っていたのはgood
  }
  function minus(num) {
    calcMinus = calc - num;
    console.log(`${calc} - ${num} = ${calcMinus}`);
  }
  function multiply(num) {
    calcMultiply = calcMinus * num;
    console.log(`${calcMinus} * ${num} = ${calcMultiply}`);
  }
  function divide(num) {
    calcDivide = calcMultiply / num;
    console.log(`${calcMultiply} / ${num} = ${calcDivide}`);
  }
  return {
    plus,
    minus,
    multiply,
    divide
  }
};

// 答え
function calcFactory(val) {
  return {
      plus: function(target) {
          const newVal = val + target;
          console.log(`${val} + ${target} = ${newVal}`);
          val = newVal;　
          // newValはスコープ外のため関数外では使えないのでグローバルのvalに代入する
      },
      minus: function(target) {
          const newVal = val - target;
          console.log(`${val} - ${target} = ${newVal}`);
          val = newVal;
      },
      multiply: function(target) {
          const newVal = val * target;
          console.log(`${val} x ${target} = ${newVal}`);
          val = newVal;
      },
      divide: function(target) {
          const newVal = val / target;
          console.log(`${val} / ${target} = ${newVal}`);
          val = newVal;
      }
  };
}

const calc = calcFactory(10);

calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);