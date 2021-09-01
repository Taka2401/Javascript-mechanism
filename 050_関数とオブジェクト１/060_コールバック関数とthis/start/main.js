window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

// 関数をrefに渡している
function fn(ref) {
    ref();
}

fn(person.hello);