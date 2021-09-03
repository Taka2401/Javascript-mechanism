class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log('hello ' + this.name);
    }
}

class Japanese extends Person {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }

    hello() {
        // superはクラスの中で使用されるもの
        super.hello();
        console.log('Konnichiwa ' + this.name);
    }

    bye() {
        console.log('Sayonara ' + this.name);
    }
}

// クラスの外なのでエラーになる
// bob.bye = function() {
//     super.hello();
// }

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.hello();

// const american = {
//     hello() {
//         console.log('hello ' + this.name);
//     }
// }

// const bob = {
//     name: 'Bob',
//     hello() {
//         super.hello();
//     }
// }
