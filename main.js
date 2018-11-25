function hello() {
  alert('hello');
}

/** @const **/var foo = 100;

foo = 200;

class Foo {
  hello() {
    console.log('hello');
    const objA = {
      a: 100,
    };

    const objB = {
//      ...objA,
    };
  }
}

// arrow function
const displayNums = (...nums) => {
  nums.forEach(num => {
    console.log(num);
  });
}

displayNums(10);
