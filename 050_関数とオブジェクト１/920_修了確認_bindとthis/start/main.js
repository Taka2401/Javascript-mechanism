const person = {
    name: 'Tom',
    // アロー関数はthisを使用するのに適していない
    // bye: () =>
    bye() {
        console.log('Bye ' + this.name);
    },
    hello: function (greeting) {
        console.log(greeting + ' ' + this.name);
        return greeting + ' ' + this.name;
    },
    // 自分の答え
    // hello1s() = () => {
    //     setTimeout(function() {
    //         person.hello('hello ' + this.name);
    //     }, 1000);
    // }
    /**
     * 問題４：
     * 1秒後に"hello Tom"
     * と出力されるような、メソッドを
     * personオブジェクトに追加してみてください。
     *
     * 以下のように使用するものとします。
     * `person.hello1s()`
     * -> 1秒後に"hello Tom"と出力
     *
     * 3通りの方法で実装してみてください。
     * １．bind
     * ２．アロー関数
     * ３．thisを一旦変数に代入
     */
     hello1s() {
        //  bind
        // setTimeout(this.hello.bind(this, 'hello'), 1000);

        // setTimeout(() => {
        //     this.hello('hello');
        // }, 1000);

        const _this = this;
        setTimeout(function() {
            _this.hello('hello');
        }, 1000);
    }
}

person.hello1s();

// 自分の答え
// person.hello1s();

/**
 * 問題１：
 * 1秒後に"hello Tom"
 * と出力されるように、以下のコード
 * の記載を変更しましょう。
 */

// 自分の答え
// setTimeout(function() {
//     person.hello('hello');
// }, 1000);

// 答え
// setTimeoutは引数に関数を渡す
// setTimeout(person.hello.bind(person, "hello"), 1000);

/**
 * 問題２：
 * alertで"hello Tom"
 * と出力されるように、
 * 以下のコードを変更してください。
 */
// 自分の答え
//  setTimeout(function() {
//     alert(person.hello('hello'));
// }, 1000);

// 答え
// alertは引数に文字列を渡す
// alert(person.hello("hello"));


// /**
//  * 問題３：
//  * person.byeメソッドを１秒後に実行したかったので
//  * bindを使って束縛してみましたが、コンソールには
//  * "Bye"しか表示されませんでした。
//  * "Bye Tom"とするためにはどうすればよいでしょうか？
//  */

// 自分の答え
// const greeting = person.bind({name: 'Tom'});
// setTimeout(person.bye.greeting, 1000);

// 答え
// setTimeout(person.bye.bind(person), 1000);