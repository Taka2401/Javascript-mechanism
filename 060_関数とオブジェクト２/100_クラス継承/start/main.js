class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello ' + this.name);
  }
};

// const taro1 = new Person('Taro', 23);
// console.log(taro1);
// taro1.hello(taro1);

class Japanese extends Person {
  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender;
  }
  hello() {
    console.log('Konnichiwa ' + this.name);
  }
  bye = function() {
    console.log('Sayonara ' + this.name);
  }
};

const taro = new Japanese('Taro', 23, 'Male');

console.log(taro);
taro.hello();