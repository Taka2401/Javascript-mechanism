function Person(name, age) {
    this.name = name;
    this.age = age;
}

// メソッドとして追加したいプロパティをprototypeオブジェクトに格納できる
// ※インスタンス化した際にprototypeの参照が__proto__にコピーされる
Person.prototype.hello = function() {
    console.log('hello ' + this.name);
}


const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

bob.hello();
tom.hello();