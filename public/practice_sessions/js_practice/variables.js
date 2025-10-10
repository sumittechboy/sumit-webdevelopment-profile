// variable using Var keyword

var x = 10;

console.log(x);
console.log(typeof(x)) //this line of code will display the datatype of the variable


//Note - Null datatype is defined as an object in javascript.

// array datatype 

var arr = [20, 50, 30, 'string']

console.log(arr)
console.log(typeof(arr))

// array datatype is aslso an object in javascript.


// objects in js 
// objects are created in format ( name => key, : => colon , value => "sumit") 
var obj = {
    name : 'sumit',
    dob : "10/07/2000"
};

console.log(obj); // this will show kiy value pair of object
console.log(obj.name); //this will show value of name key in object
console.log(typeof(obj));


const currentDate = new Date(); // this function gets the date 
const currentYear = currentDate.getFullYear(); // get only year from date function
console.log(currentYear); 


console.log('age calculation')
let age = obj.dob.slice(6,10) ; //gets dob from object and slises only year
age = currentYear - age; // calculates the age of person
console.log(`age of ${obj.name} is ${age}`);