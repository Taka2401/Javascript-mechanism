// コンストラクター関数
// 新しくオブジェクトを作成するための雛形となる関数
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

// インスタンス・・newで作成したオブジェクト
// bob, tom, sun

// newでオブジェクトを作成することをインスタンス化という