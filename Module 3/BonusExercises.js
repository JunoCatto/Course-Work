// Write a function that returns an array of names of all employees in the "Engineering" department.
//
// Write a function that returns the total salary of all employees in the "HR" department.
//
// Write a function that finds the employee with the highest salary.
//
// Write a function that returns true if all employees have a salary greater than 40,000; otherwise, return false.

const employees = [
    { id: 101, name: "Emma", department: "HR", salary: 45000 },
    { id: 102, name: "Liam", department: "Engineering", salary: 75000 },
    { id: 103, name: "Olivia", department: "Marketing", salary: 52000 },
    { id: 104, name: "Noah", department: "Engineering", salary: 68000 },
    { id: 105, name: "Ava", department: "HR", salary: 47000 }
];

function whatDepartment(department){
    return employees
        .filter((employee) => employee.department === department)
        .map((employee) => employee.name);
}

function totalSalary(employees) {
    return employees
        .filter(employee => employee.department === "HR")
        .reduce((total, employee) => total + employee.salary, 0)
}

function highestSalary(employees){
    let topSalary = 0;
    employees
        .forEach(employee => {
            if (topSalary < employee.salary){
                topSalary = employee.salary;
            }
        })
    let mostMoney = employees.find(employee => employee.salary === topSalary)
    return `${mostMoney.name} makes a salary of $${topSalary}`
}

function greaterThan40000(employees){
    return employees.filter(employee => employee.salary > 40000)
        .map(employee => employee.name);
}

console.log(whatDepartment('Engineering'))
console.log(totalSalary(employees))
console.log(highestSalary(employees))

console.log(greaterThan40000(employees))


// You will be given an array of drinks, with each drink being an object with two properties: name and price.
// Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
//
// Assume that the following array of drink objects needs to be sorted:

drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
]

function sortByPrice(){
   return drinks.sort(
       (a,b)=> a.price - b.price)
}
console.log(sortByPrice())




// random exercises given by chatgpt
// Exercise 1: Multiply Elements by 2
//
// You have an array of numbers. Your task is to create a new array where each element is multiplied by 2.
//
// Example:
//
// Input: [1, 2, 3, 4]
//
// Output: [2, 4, 6, 8]

let array = [1,2,3,4]

function multiplyBy2(arr){
    return arr.map((item) => item * 2)
}

console.log(multiplyBy2(array))










// Exercise 2: Filter Even Numbers
//
// Given an array of numbers, create a new array that only contains even numbers.
//
// Example:
//
// Input: [1, 2, 3, 4, 5, 6]
//
// Output: [2, 4, 6]

let toEvenArray = [1,2,3,4,5,6]

function evenOnly(array){
    return array.filter((item) => item % 2 === 0)
}
console.log(evenOnly(toEvenArray))

// Exercise 3: Convert Strings to Uppercase
//
// You are given an array of strings. Create a new array where all strings are converted to uppercase.
//
// Example:
//
// Input: ["hello", "world"]
//
// Output: ["HELLO", "WORLD"]
//
// Exercise 4: Find the Length of Each Word
//
// You have an array of strings. Your task is to create a new array where each string is replaced by its length.
//
// Example:
//
// Input: ["apple", "banana", "cherry"]
//
// Output: [5, 6, 6]
//
// Exercise 5: Double the Characters in Each String
//
// Given an array of strings, your task is to create a new array where each string is doubled (i.e., repeat each character twice).
//
// Example:
//
// Input: ["abc", "xyz"]
//
// Output: ["aabbcc", "xxyyzz"]
//
// Exercise 6: Square Only Positive Numbers
//
// You are given an array of integers. Create a new array that contains the square of only the positive numbers.
//
// Example:
//
// Input: [-1, 2, -3, 4]
//
// Output: [4, 16]
//
// Exercise 7: Create an Array of Object Descriptions
//
// You have an array of objects, each with a name and an age. Create a new array of strings that describes each person as: "Name is Age years old."
//
// Example:
//
// Input: [ { name: "Alice", age: 25 }, { name: "Bob", age: 30 } ]
//
// Output: ["Alice is 25 years old.", "Bob is 30 years old."]
//
// Exercise 8: Increase Salaries by 10%
//
// You are given an array of objects representing employees with their name and salary. Create a new array where each salary is increased by 10%.
//
// Example:
//
// Input: [ { name: "John", salary: 5000 }, { name: "Sara", salary: 6000 } ]
//
// Output: [ { name: "John", salary: 5500 }, { name: "Sara", salary: 6600 } ]
//
// Exercise 9: Concatenate First and Last Name
//
// You are given an array of objects representing people, each with a firstName and lastName. Create a new array of full names.
//
// Example:
//
// Input: [ { firstName: "Jane", lastName: "Doe" }, { firstName: "John", lastName: "Smith" } ]
//
// Output: ["Jane Doe", "John Smith"]
//
// Exercise 10: Remove Negative Values
//
// Given an array of numbers, create a new array where all negative numbers are removed.
//
// Example:
//
// Input: [10, -2, 15, -5, 7]
//
// Output: [10, 15, 7]
