// ブロックスコープ

if(true) {
  // let, constだと有効
  // varや関数だとブロックスコープが無効になる

  function d() {
    console.log('d is called');
  }

  let a = 1;
  console.log(a);
}

d(); //varや関数だと出来てしまう