// アロー関数ではレキカルスコープを参照
window.name = 'John';

const person = {
    name: 'Tom',
    // アロー関数だとthisやargumentを使えない
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();