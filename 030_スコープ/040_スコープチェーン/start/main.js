let a = 2;
window.a = 4;
function fn1() {
    // let a = 1;
    function fn2() {
        let a = 2; //順番にfn2⇒fn1⇒aにaを探しに行く
        console.log(a);
        if (true) {
            var a = 3;
        }
    }
    fn2();
}
fn1();





