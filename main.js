// part 1

// 1
let number = Number('123');
console.log(number + 7);

// 2
function checkValue(value){
  if (!value){
    return 'Invalid';
  }
  return 'Valid';
}
console.log(checkValue(0));

// 3
for (let i = 1; i <= 10; i++){
  if (i % 2 === 0){
    continue;
  }
  console.log(i);
}

// 4
let numbers = [1,2,3,4,5];
let evenNumbers = numbers.filter(function(num){
  return num % 2 === 0;
});
console.log(evenNumbers);

// 5
function mergeArrays(first, second){
  return [...first, ...second];
}
console.log(mergeArrays([1,2,3], [4,5,6]));

// 6
function getDay(day){
  switch (day){
    case 1:
      return 'Sunday';
    case 2:
      return 'Monday';
    case 3:
      return 'Tuesday';
    case 4:
      return 'Wednesday';
    case 5:
      return 'Thursday';
    case 6:
      return 'Friday';
    case 7:
      return 'Saturday';
    default:
      return 'Invalid day';
  }
}
console.log(getDay(2));

// 7
let words = ['a', 'ab', 'abc'];
let lengths = words.map(function(word){
  return word.length;
});
console.log(lengths);

// 8
function checkDivisibility(num){
  if (num % 3 === 0 && num % 5 === 0){
    return 'Divisible by both';
  }
  return 'Not divisible by both';
}
console.log(checkDivisibility(15));

// 9
const square = (num) => {
  return num * num;
};
console.log(square(5));

// 10
function describePerson(person){
  const { name, age } = person;
  return name + ' is ' + age + ' years old';
}
console.log(describePerson({ name: 'John', age: 25 }));

// 11
function sum(...numbers){
  let total = 0;
  for (let i = 0; i < numbers.length; i++){
    total = total + numbers[i];
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));

// 12
function delayedSuccess(){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve('Success');
    }, 3000);
  });
}
delayedSuccess().then(function(message){
  console.log(message);
});

// 13
function findLargest(numbers){
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++){
    if (numbers[i] > largest){
      largest = numbers[i];
    }
  }
  return largest;
}
console.log(findLargest([1, 3, 7, 2, 4]));

// 14
function getKeys(object){
  return Object.keys(object);
}
console.log(getKeys({ name: 'John', age: 30 }));

// 15
function splitWords(sentence){
  return sentence.split(' ');
}
console.log(splitWords('The quick brown fox'));

/*
part 2

1 forEach and for of

The difference
forEach runs a function for each array item
for of loops over values and lets us use break and continue
forEach does not wait for the promises from its function

When to use each
I would use forEach for a simple task on every array item
I would use for of when I need break or continue or await inside an async function

2 Hoisting and TDZ

Hoisting
Hoisting means JavaScript sets up variables and function declarations before running the code in their scope
With var you get undefined if you read it before the assignment

console.log(x); // undefined
var x = 10;

TDZ
let and const cannot be used before their declaration runs
The time from the start of their scope until they are ready to use is the TDZ
Using them during that time gives a ReferenceError

console.log(age); // ReferenceError
let age = 25;

3 == and ===

The difference
== can change types before checking if two values are equal
=== checks if the values are equal without changing their types
So with === the types have to match too

4 try catch

How it works
We put code that might fail in try and catch handles any error it throws

Why it matters in async code
It lets us handle errors from things like failed requests
With async code we use await inside try so catch can handle a promise that fails
Without await we can use the catch method on the promise itself

5 Conversion and coercion

Conversion
Conversion is when we change the type ourselves

console.log(Number('123') + 7); // 130

Coercion
Coercion is when JavaScript changes the type for us

console.log('5' + 2); // '52'
*/
