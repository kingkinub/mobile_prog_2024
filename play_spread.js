// ... Spread operator and Rest Parameters
// ? What is spread operator?
/*The spread operator is a new addition to the set of operators is JavaScript ESG. It takes in an iterable (e.g an array) and expands it into indivdual elements.
The spread operator is used to copy an array, merge arrays, add elements to an arrray, and add properties to an object.*/
// Exammple 1
//Copying an array
const arr1 = [1,2,3];
const arr2 = [...arr2];

console.log(arr2); // [1,2,3]

// Example 2
// Marging arrays
const ex2_arr1 = [1,2,3];
const ex2_ar2 = [4,5,6]
const ex2_ar3 = [ex2_arr1, ... ex2_arr2]

cnsolw.lg(ex2_arr3) //[1,2,3,4,5,6]

//Example 3
//Add elements to an array
const ex3_arr = [1,2,3];
const ex3_arr1 =[...ex3_arr1,4,5,6]

console.log(ex3_arr2) // //[1,2,3,4,5,6]

//The spread operator is not only used for arrays. It can also be used for objects.
//example 4
// copying an object
const obj1 = {name: 'jhon', age:25};
const obj2 = {... obj};
console.log(obj2); // {name: 'jhon', age:25}

//Example 5
//merging objects
const obj3 = {name: 'jhon, age: 25'};
const obj4 = {city: 'NewYork', country: USA};
const obj5 = {... obj3, ... obj4};

console.log(obj5);//{name: 'jhon', age:25, city 'new york', country: 'USA'}

//Example 6
//adding properties to an object
const obj6 = {name: 'jhon', age;25};
const obj7 = {...obj6, city: 'New York', country: 'USA'};

console.log(obj7);//{name: 'jhon' age:25, city 'new york', country: 'USA'}

//Example 7
//ovveriding properties
const obj7 = {name: 'jhon', age;25};
const obj9 = {...obj8, age:30};

console.log(obj9); // {name: 'Jhon', age'30'}

// ! rest Parameters
/* Rest parameters are used to represent an indefinite number of argument as an array. It allows you to pass an arbitrary*/

// Example 8
function sum(... args){
      return args;
}

console.log(sum (1,2,3,4,5)); // [1,2,3,4,5]



