function Person(name, age) {
  this.name = name;
  this.age = age;
  // 呼び出される優先順位
  // 1 自分のプロパティ
  // this.hello = function() {
  //     console.log('OwnProperty: hello ' + this.name);
  // }
}

// 2 Person.prototype
// Person.prototype.hello = function() {
//     console.log('Person: hello ' + this.name);
// }

// 3 Objectのプロパティ
Object.prototype.hello = function() {
  console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
bob.hello();

const result = bob.hasOwnProperty('name');
console.log(result);