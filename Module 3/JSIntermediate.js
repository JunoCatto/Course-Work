// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

function capitalizeFirstLetter(str){
    let substringArray = str.split(' ');
    for (let i=0; i < substringArray.length; i++){
        let selectedWord = substringArray[i]
        substringArray[i] = selectedWord[0].toUpperCase() + selectedWord.slice(1)
    }
    return substringArray.join(' ');
}

console.log(capitalizeFirstLetterMap("nice to meet you!"))

// Maybe try with map?
function capitalizeFirstLetterMap(str){
    const substringArray = str.split(' ');
    let capitalizedArray = substringArray.map(selectedWord =>
    {return selectedWord[0].toUpperCase() + selectedWord.slice(1)} )
    return capitalizedArray.join(' ');
    // This works.
}

// 2. Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (...) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.


function truncate(str, max){
    if (str.length > max){
        return `${str.slice(0, max)}...`;
    }
    return str;
}

console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...

// 3. Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:
//
// https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Global_Objects/Array
//
// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.


const animals = ['Tiger', 'Giraffe']


function replaceMiddleAnimal(arr, newAnimal){
    let length = arr.length
    if (length % 2 === 0){ // If array is an even number it gets the two middle values and replaces them.
       const middle = length/2-1;
       return arr.splice(middle, 2, newAnimal)
    }
    // Odd number
    const middle = length/2;
    return arr.splice(middle, 1, newAnimal)
}

function findMatchingAnimals(arr, searchFor){
    let toLower = searchFor.trim().toLowerCase()
    let match = arr.filter((animal) => animal.toLowerCase().startsWith(toLower));
    if (match.length === 0){
        return console.log("Please enter a valid animal!")
    }
    return match;
}

animals.push('Dog', 'Cat') // Adds to end
animals.unshift('Penguin', 'Bird') // Adds to start
animals.sort() // Sorts alphabetically
console.log(replaceMiddleAnimal(animals, 'Kitten'))

const matchedAnimals = findMatchingAnimals(animals, 'bird')

console.log(matchedAnimals)
console.log(animals)


// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

function camelCase(cssProp){
    // we need to specify that if it's the first word then we have to keep it lowercase.
    let camelCase = cssProp.split('-').map((word, index) => {
        if (index === 0){
            return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return camelCase.join('');

}
console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

// this one was hard


// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
// following:

// let twentyCents = 0.20
// let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// // 0.2 + 0.1 = 0.30000000000000004

// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:

// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen) //why is this not working?

//a) Explain why the above code returns the wrong answer

// it is combining 2 strings rather than numbers.

// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.


let tenCents = 0.1
let twentyCents = 0.2
function currencyAddition(float1, float2) {
    return (float1 + float2).toFixed(2)
}

console.log(currencyAddition(tenCents,twentyCents))



// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns
// the correct float result. https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Statements/switch may be useful.
//

function currencyOperation(float1, float2, operation, numDecimals){
    let result;
    switch (operation) {
        case "+":
            result = float1+float2
            break;
        case "-":
            result = float1-float2
            break;
        case "*":
            result = float1*float2
            break;
        case "/":
            result = float1/float2
            break;
        default:
            console.log("Please enter a valid operation.")
    }
    return result.toFixed(numDecimals)
}

console.log(currencyOperation(tenCents,twentyCents,"*", 10))


// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.
// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// different values as well as the below:

// 6. Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values
// from duplicatesArray.
// Test with the following arrays and create another one of your own.

function unique(duplicatesArray){
    const newArray=[];
    return duplicatesArray.filter((item) => newArray.includes(item)? null : newArray.push(item))
    // In spoken words: It searches for the first instance of "item" within the array, placing them into the newArray.
    // if the newArray already includes that item it does nothing.
}

// using set
function uniqueArray(duplicatesArray) {
   return [...new Set(duplicatesArray)]
}

// using indexOf()
function uniqueIndexOf(duplicatesArray){
    return duplicatesArray.filter((item,index) => duplicatesArray.indexOf(item) === index)
}


const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(uniqueIndexOf(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]


// 7. Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks.

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];
// a) Write a function getBookTitle(bookId) that uses the find function to return the
// title of the book object with the matching id.
// b) Write a function getOldBooks() that uses the filter function to return all book
// objects written before 1950.
// c) Write a function addGenre() that uses the map function to add a new genre property
// to all of the above books, with the value ‘classic’.
// d) (Extension) Write a function getTitles(authorInitial) that uses map and
// filter together to return an array of book titles for books written by authors whose
// names start with authorInitial.
// e) (Extension) Write a function latestBook() that uses find and forEach to get the
// book with the most recent publication date.

function getBookTitle(bookId){
    return books.find((book) => book.id === bookId)
}
function getOldBooks(){
    return books.filter((book) => book.year < 1950 )
}
function addGenre(){
    return books.map((book) => {
        return { ...book, genre: "classic"}
        // map uses a function on every element of the provided array. "books" is provided so for each element,
        // a new clone is made with the genre: "classic" added.
    } )
}
function getTitles(authorInitial){
    return books
        .filter((book) => book.author.startsWith(authorInitial))
        .map((book) => book.title)
}

// still bit confused by maps and filter syntax, but getting there.

function findLatest(){
    let latestYear = 0;
    books.forEach((book) => {
        if(book.year > latestYear){
            latestYear = book.year;
        }
    });
   return books.find((book) => book.year === latestYear);
}


// console.log(getBookTitle(1))
// console.log(getOldBooks())

// const genres = addGenre()
// console.log(genres)
console.log(getTitles("H"))
console.log(findLatest())






// 8. The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
// c) Update the phone number for Caroline
// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map
// e) Combine the contents of the two individual Maps into a single phoneBook Map
// f) Print out the full list of names in the combined phone book

const phoneBookDEF = new Map([
    ['Daphne', '0412391231'],
    ['Elaine', '0412647121'],
    ['Frank', '0412456298']
]);

if (phoneBookABC.has('Caroline')) {
    (phoneBookABC.set('Caroline', '0499123456'));
} else {
    console.log('Caroline does not exist in the map.');
}

function printPhoneBook(contacts){
    for (let [name,number] of contacts.entries()){
        console.log(`${name}: ${number}`);
    }
}

printPhoneBook(phoneBookABC)

const combinedPhoneBook = new Map([...phoneBookABC,...phoneBookDEF])

for (let name of combinedPhoneBook.keys()){
    console.log(name);
}


// 9. Given the below salaries object, perform the following tasks.
    let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
// b) Write a function topEarner(salaries) that calculates and returns the name of the person
// earning the highest salary

// function sumSalaries(salaries) {
//     let result = 0;
//     for (let key in salaries) {
//         result += salaries[key]
//     }
//     return result;
// }

// try using .reduce?

function sumSalaries(salaries){
    return Object.values(salaries).reduce((total, salary) => total + salary, 0) // 0 starts the value at 0
}
function topEarner(salaries){
    let topDollar = 0;
    for (let salary of Object.values(salaries))
    { if (salary > topDollar){
        topDollar = salary;
         }
    }
    let bigEarner = Object.keys(salaries).find((name) => salaries[name] === topDollar)
    return console.log(`${bigEarner} earns ${topDollar}`)
}


console.log(sumSalaries(salaries));
topEarner(salaries)

// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')


// a) Print the total number of minutes that have passed so far today
console.log(60 * today.getHours() + today.getMinutes() + ' minutes have passed so far today')

// b) Print the total number of seconds that have passed so far today
console.log(((3600 * today.getHours()) + (today.getMinutes() * 60)) + today.getSeconds() + ' seconds have passed so far today')

// c) Calculate and print your age as: 'I am x years, y months and z days old'
const birthDate = new Date('2001-09-06')
console.log(`I am ${Math.abs(today.getFullYear() - birthDate.getFullYear())} years, 
${Math.abs(today.getMonth() - birthDate.getMonth())} month, 
and ${Math.abs(today.getDay() - birthDate.getDay())} days old.`) // Math.abs to ensure that the returned value can't be negative.

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
// of days in between the two given dates.

function daysInBetween(date1,date2){
    return Math.floor(Math.abs(date2 - date1));
}

console.log(daysInBetween(2025-12-30, 2025-12-10))
// takes date in format yyyy-mm-dd


