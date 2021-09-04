// ビルドインオブジェクト
// コード実行前にJSエンジンによって自動的に生成されるオブジェクト
// コンソールでwindowの中に格納されている

const array = new Array(1,2,3,4);
console.log(array);

console.log(array["0"]);
console.log(array.hasOwnProperty(0));