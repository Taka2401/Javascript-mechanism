// 再宣言できない　let, const
let a = 0;
let a = 0;

// 再宣言できる　var
var b = 0;
var b = 1;

// 再代入できる
let c = 0;
c = 1;

//再代入できない
const d = 0;
d = 1;

{
    let e = 0;

    // varはブロックスコープが無効
    var f = 0;
}

// ホイスティング
// 変数や関数の定義をコードが実行される前にメモリに配置する挙動
// 変数のメモリは確保しているが値は取得出来ない

console.log(g);
console.log(h);

let g = 0;

// varはundefinedになる
var h = 0;

