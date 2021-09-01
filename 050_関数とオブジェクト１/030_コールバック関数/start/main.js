// コールバック関数・・関数に引数として渡す関数

function hello(name) {
  console.log('hello ' + name);
}

function bye() {
  console.log('bye');
}

function fn(cb) {
  cb('Tom');
}

// 引数として渡す関数が実行される
fn(hello);
fn(bye);

fn(function(name) {
  console.log('hello ' + name);
});

setTimeout(bye, 2000);