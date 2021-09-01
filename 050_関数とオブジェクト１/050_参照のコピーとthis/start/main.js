window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        // オブジェクト
        console.log('Hello ' + this.name);
        // グローバルオブジェクト
        a();
    }
}
// オブジェクトを参照して呼び出せる
person.hello();

// 関数として実行される場合呼び出し元はグローバルオブジェクトになる
// const ref = person.hello;
// ref();

function a() {
    console.log('Hello ' + this.name);
}