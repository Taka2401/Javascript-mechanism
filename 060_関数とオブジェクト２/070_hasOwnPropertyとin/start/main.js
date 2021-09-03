function Person(name, age) {
	this.name = name;
	this.age = age;
}

Object.prototype.hello = function() {
	console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);

// 自分自身のプロパティとして存在するか確認
const result = bob.hasOwnProperty('name')
console.log(result)

// プロトタイプチェーンまで含めて確認
console.log('hasOwnProperty' in bob);