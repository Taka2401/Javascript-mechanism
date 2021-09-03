function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}

// コンストラクタの継承
function Japanese(name, age, gender) {
  Person.call(this, name, age);
  this.gender = gender;
}

// Person.prototypeを継承できる
Japanese.prototype = Object.create(Person.prototype);

// helloを上書き
Japanese.prototype.hello = function() {
  console.log('Konnichiwa ' + this.name);
}

// メソッドの追加
Japanese.prototype.bye = function() {
  console.log('Sayonara ' + this.name);
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);

taro.hello();
taro.bye();