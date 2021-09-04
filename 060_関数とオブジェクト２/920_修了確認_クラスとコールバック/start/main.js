/**
 * 問題：
 * Person.helloメソッドをsetTimeoutで１秒後に
 * 実行しようとしましたが、"hello Bob"と表示されませんでした。
 * 
 * setTimeoutに渡す方法がおかしそうなのですが、
 * どのようにすればよいでしょうか？
 * 
 * ※２通りの方法で実装してみてください。
 */
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  hello() {
      console.log('hello ' + this.name);
      // return this.hello;
  }
}

const bob = new Person('Bob', 23);

// 自分の答え
// 1 setTimeoutには関数を渡す
setTimeout(bob.hello(), 3000);

// 2
// const greeting = setTimeout(bob.hello(), 1000);
// bob.hello();


// 答え

setTimeout(Person.prototype.hello.bind(bob), 1000);

setTimeout(function() {
  bob.hello();
} , 1000);