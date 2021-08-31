//プライベート変数
// 関数の内部に変数を持ちながらも外部からはアクセスできないようにする

function incrementFactory() {
  let num = 0;

  function incrementA() {
    num = num + 1;
    console.log(num);
  }
  return incrementA;
};

// console.log(num);
// 外部から呼び出せない

const incrementB = incrementFactory();

incrementB();
incrementB();
incrementB();
incrementB();



