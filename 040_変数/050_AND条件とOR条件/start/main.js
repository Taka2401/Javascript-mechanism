const a = 0;
const b = 1;
const c = 3;
const d = 0;

//途中でfalsyになった値
//またはfalsyがなかった場合、最後の値を結果として返す
console.log(a && b && c)

//先にtruthyになった値を結果として返す
console.log(a || b || c)

// グループ化
console.log((a || b) && c)
console.log((a || b) && (c || d))