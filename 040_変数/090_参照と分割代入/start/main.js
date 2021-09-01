// 分割代入
// オブジェクトから特定のプロパティを抽出して宣言を行う

const a = {
  prop: 0
}

// aのオブジェクトが別のメモリに生成される
let { prop } = a;

// それぞれ独立した値
prop = 1;

console.log(a, prop); //出力(0, 1)

// 簡略化
function fn({ prop }) {
  // let { prop } = obj;
  prop = 1;
  console.log(a, prop);
}

fn(a);

const c = {
  prop1: {
      prop2: 0
  }
}

// prop2を保持したオブジェクトが抽出
let { prop1 } = c;

// 同じオブジェクトのため(c, prop1)両方の値が変わる
prop1.prop2 = 1;

console.log(c, prop1);