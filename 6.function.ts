const add = function (num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
};
add(1, 2); // we can put any type of values

const add1: (num1: number, num2: number): number = function() {
  console.log(num1 + num2);
  return num1 + num2;
};
add1(2, 3);


const log = (): void => {
  console.log("Hello World");
};
log();
