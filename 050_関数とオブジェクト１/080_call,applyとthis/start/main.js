function a(name, name1) {
    console.log('hello ' + name + ' ' + name1);
}

const tim = {name: 'Tim'};

const b = a.bind(tim);

b();

// 実行も同時にされる

// apply 第一引数に参照先のオブジェクト 第二に値
a.apply(tim, ['Tim', 'Bob']);

// call 第一引数に参照先のオブジェクト　第二に引数
a.call(tim, 'Tim', 'Bob');

const array = [1,2,3,4,5];

// applyを使い配列の値を一つずつ渡す
// const result = Math.max.apply(null, array);
const result = Math.max(...array); //ES6
console.log(result);