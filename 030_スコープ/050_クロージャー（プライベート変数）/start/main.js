

function incrementFactory() {
  let num = 0;

  function incrementA() {
    num = num + 1;
    console.log(num);
  }
  return incrementA;
};

const incrementB = incrementFactory();

incrementB();
incrementB();
incrementB();
incrementB();


