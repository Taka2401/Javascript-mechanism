window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

// bindで参照先のオブジェクトを指定
const helloTom = person.hello.bind(person);

function fn(ref) {
    ref();
}

fn(helloTom);

function a(name) {
    console.log('hello ' + name);
}

// const b = a.bind({name: 'Tim'});

// bindで引数を固定
const b = a.bind(null, 'Tim');

// bindが優先される
b('Tom');