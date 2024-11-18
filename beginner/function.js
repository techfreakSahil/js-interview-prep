// Q1 What is function declaration?
// Q2 What is function expression?
// Q3 What is first class function?
// Q4 What is IIFE?
// Q5 What is function scope?
// Q6 What is function hoisting?
// Q7 params VS arguments
// Q8 What is callback function?
// Q9 What are arrow functions?

// Sol 1

function sum(a, b) {
  return a + b;
}

// Sol 2

const square = function (num) {
  // ==> anonymous function
  return num * num;
};

// Sol 3

function displaySum(fn) {
  console.log("Sum is", fn(5, 10));
}

displaySum(sum);

// Sol 4

(function a(num) {
  console.log("Number is", num);
})(5);

// Output Question

(function (x) {
  return (function (y) {
    console.log(x + y);
  })(2);
})(3);

// Sol 5 and Output Based Question ( let VS var)

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i); // ==> Output 0 1 2 3 4 ( with delay )
//   }, i * 1000);
// }

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i); // ==> Output 5 5 5 5 5
//   }, i * 1000);
// }

// Sol 6 and Output Based Question

var x = 21;
hey();
function hey() {
  console.log(x);
  var x = 20;
}

// Sol 7

function fun(a) {
  //parameter/params
  console.log(a);
}
fun(5); // arguments

// Sol 8

const sq = (num) => {
  return num * num;
};
