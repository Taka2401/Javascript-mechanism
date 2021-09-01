const a = {
    prop: 0
}

const b = {
    prop: 0
}

// 参照先のオブジェクトが変わるため、falseになる
console.log(a == b);

// オブジェクトのプロパティを比較する
console.log(a.prop === b.prop); //true

const c = a;

// 参照先が一致し、trueになる
console.log(a === c);