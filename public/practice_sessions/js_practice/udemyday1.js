// exercise 1 swapingh variables
let a = 10;
let b = 20;

console.log("Before Swapping");
console.log("a =", a);
console.log("b =", b);

// after swaping
console.log("After Swapping");
let temp = a;
a = b;
b = temp;

console.log("a =", a);
console.log("b =", b);


// checking turnary operator

let age = 15;
let isAdult = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(isAdult); // Output: You are an adult.


//creating a function to check even or odd

var number = 15 ;

function oddOrEven(number){
    if(number % 2 == 0){
        return "Even Number";
    }else{
        return "Odd Number";
    }
}

// calling function oddOrEven
console.log(oddOrEven(number));