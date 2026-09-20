    'use strict';

// des listes pour des tests
const numbers = [2, 3, 5, 4, 10, 6];
const persons = [ {name : 'timoleon', age : 12 }, {name : 'bilbo', age : 111 }, {name : 'frodo', age : 33 }, {name : 'sam', age : 26 }];

/********** EXERCICE 1 ***********************/
console.log(` *** EXERCICE 1 *** `);

// exemple de manière de répondre aux questions d'un exercice

// Q1
/* computes the double of its parameter
 * @param x (number) a number
 * @return (number) the double of *x*
*/
const example = x => x * 2;

//Q2
// tests d'exécution de la fonction example
console.log(`Q2 - example(10) : ${example(10)}`);
console.log(`Q2 - example(21) : ${example(21)}`);

// Q3
/* filter and keep the elements of *list* smaller than *max*
 * @param list (Array) list of elements
 * @param max (Any) upper bound filter value
 * @return (Array) list of elements of *list* smaller than *max*
*/
const example2 = (list, max) => list.filter( elt => elt < max );

// Q4
// tests d'exécution de la fonction example2
console.log(`Q4 - example2(numbers, 5) : ${example2(numbers, 5)}`);

/*********************************************/



/********** EXERCICE 2 ***********************/
console.log(` *** EXERCICE 2 *** `);

// Q1
/* return the list of all names of persons
 * @param persons (persons) list of persons
 * @return (list) of all names
*/
const listNames = list =>  list.map( elt => elt.name);

//Q1
// tests d'exécution de la fonction listNames
console.log(`Q1 - : ${listNames(persons)}`);


// Q2
/* return the list of first letter of all names of persons in Upper
 * @param persons (persons) list of persons
 * @return (list) of irst letter of all names of persons in Upper
*/
const listUpper = list => list.map(elt => elt.name.charAt(0).toUpperCase());

// Q2 
// test d'execution de la fonction listUpper
console.log(`Q2 - : ${listUpper(persons)}`);


// Q3
/* return the list of first letter then the second then third .. of all names of persons 
 * @param persons (persons) list of persons
 * @return (list) of n letter of all names of persons
*/
const listIndex = list => list.map((elt, index) => elt.name.charAt(index) || undefined);

// Q3
// test d'execution de la fonction listIndex
console.log(`Q3 - : ${listIndex(persons)}`);


// Q4

// Q4.1
/* capitalize the first letter of the string
 * @param str (string) input string
 * @return (string) string with the first letter capitalized
*/
const capitalize = str => str.charAt(0).toUpperCase() + str.substr(1);

// Q4.1
// tests d'exécution de la fonction capitalize
console.log(`Q4.1  : ${capitalize('timoleon')}`);
console.log(`Q4.1  : ${capitalize('bilbo')}`);

// Q4.2 
/* return the list of all names of persons with the first letter capitalized
 * @param persons (persons) list of persons
 * @return (list) of all names
*/
const listNamesCapitalize = list => list.map( elt => capitalize(elt.name));

// Q4.2 
// test d'exéciton de la fonction capitalize 
console.log(`Q4.2  : ${listNamesCapitalize(persons)}`);

//Q5 

// Q5.1 
/* program the map function 
 * @param list (Array) list of elements
 * @param func (Function) function to apply to each element
 * @return (Array) new list with the results of applying the callback
*/
const myMap = (list, func) => {
    const res = new Array();
    for (let elt of list) {
        res.push(func(elt));
    }
    return res;
};

// Q5.2 
// test d'exécution de la fonction myMap
console.log(`Q5.2  : ${myMap(persons, elt => capitalize(elt.name))}`);


/*********************************************/


/********** EXERCICE 3 ***********************/
console.log(` *** EXERCICE 3 *** `);

// Q1 : 
const ages = persons.map( person => person.age );
const maxAge = Math.max(...ages);
const timoStr = 'timoleon';
const timoArray = [...timoStr];                         
const newTimoStr = timoArray.join('-');

console.log(`Q1 - ages  : ${ages}`);
console.log(`Q1 - maxAge: ${maxAge}`);
console.log(`Q1 - timoStr  : ${timoStr}`);
console.log(`Q1 - timoArray  : ${timoArray}`);
console.log(`Q1 - newTimoStr  : ${newTimoStr}`);

// Q2 : 

/* give the code point of a character
 * @param char (String) a character
 * @return (Number) the code point of the character
*/  
const shiftCodePoint = char => char.codePointAt(0) - 'a'.codePointAt(0) + 9398;

// tests d'exécution de la fonction shiftCodePoint
console.log(`Q2 - shiftCodePoint('a') : ${shiftCodePoint('a')}`);
console.log(`Q2 - shiftCodePoint('b') : ${shiftCodePoint('b')}`);
console.log(`Q2 - shiftCodePoint('c') : ${shiftCodePoint('c')}`);

// Q3 : 
/* give the code point of a character
 * @param str (String) a string
 * @return (Array) the list of code point of the characters
*/  
const shiftCodePointList = str => [...str].map(shiftCodePoint);

// tests d'exécution de la fonction shiftCodePointList
console.log(`Q3 - shiftCodePointList('timoleon') : ${shiftCodePointList('timoleon')}`);


// Q4 : 
/* give the code point of a character
 * @param list (Array) list of persons
 * @return (Array) the list of code point of the characters
*/
const shiftCodePointList2 = list => list.map(person => 
    [...person.name].map(char => String.fromCodePoint(shiftCodePoint(char))).join('')
);

// tests d'exécution de la fonction shiftCodePointList2
console.log(`Q4 - shiftCodePointList2(persons) : ${shiftCodePointList2(persons)}`);



/*********************************************/


/********** EXERCICE 4 ***********************/
console.log(` *** EXERCICE 4 *** `);

// Q1 : 
/* multiply each element of the list by 10
 * @param numbers (Array) list of numbers
 * @return (Array) the list of multiplied numbers
*/
const multipliedNumbers = numbers.map(number => number * 10);

// tests d'exécution de la fonction multipliedNumbers
console.log(`Q1 - multipliedNumbers: ${multipliedNumbers}`);

// Q2 :
/* multiply each element of the list by n
 * @param n (Number) multiplier
 * @param l (Array) list of numbers
 * @return (Array) the list of multiplied numbers
*/
const multiples = (n, list) => list.map(number => number * n);

// tests d'exécution de la fonction multiples
console.log(`Q2 - multiples(10, numbers): ${multiples(2, numbers)}`);

// Q3 : 
const multiples5 = list => list.map(number => number * 5);

// tests d'exécution de la fonction multiples5
console.log(`Q3 - multiples5(numbers): ${multiples5(numbers)}`);

/*********************************************/

/********** EXERCICE 5 ***********************/
console.log(` *** EXERCICE 5 *** `);

// Q1 :
/* print each element of the list
 * @param numbers (Array) list of numbers
*/
numbers.forEach(number => console.log(number));

// Q2 :
/* print each element of the list
 * @param persons (Array) list of persons
*/
persons.forEach(person => console.log(`${person.name} a ${person.age} ans`));

// Q3 :
/* reprogram forEach 
 * @param list (Array) list of elements
 * @param func (Function) function to apply to each element
*/
const myForEach = (list, func) => {
    for (let elt of list) {
        func(elt);
    }
};

// Q4
// tests d'exécution de la fonction myForEach
myForEach(numbers, number => console.log(`Q4 - myForEach number: ${number}`));
myForEach(persons, person => console.log(`Q4 - myForEach person: ${person.name} a ${person.age} ans`));


/*********************************************/

/********** EXERCICE 6 ***********************/
console.log(` *** EXERCICE 6 *** `);

// Q1 : 
/* filter the list to keep only the elements smaller than 5
 * @param numbers (Array) list of numbers
 * @return (Array) the list of numbers smaller than 5
*/
const numbersBelowFive = numbers.filter(number => number < 5);

// tests d'exécution de la fonction numbersBelowFive
console.log(`Q1 - numbersBelowFive: ${numbersBelowFive}`);

// Q2 : 
// lecture sur les documentations des méthodes split de String et join de Array 

// Q3 : 
/* create an acronym from the first letters of each word longer than 3 characters
 * @param phrase (string) a sentence
 * @return (string) acronym of first letters of words longer than 3 characters
*/
const createAcronym = phrase => 
    phrase.split(' ').filter(word => word.length > 3).map(word => word[0].toUpperCase()).join('');

// test d'exécution de la fonction createAcronym : 
console.log(`Q3 - ${createAcronym('formations en informatique de lille')}`); 
console.log(`Q3 - ${createAcronym('société nationale des chemins de fer français')}`);


/********************************************/


/********** EXERCICE 7 ***********************/
console.log(` *** EXERCICE 7 *** `);

// Q1 : 
/* calculate the total number of characters in the words of a sentence
 * @param phrase (string) a sentence
 * @return (number) total number of characters in the words
*/
const nbLetters = phrase => phrase.split(' ').reduce((total, word) => total + word.length, 0);  

// test d'exécution de la fonction nbLetters
const test = "Formations en Informatique de Lille";
console.log(`Q1 - ${nbLetters(test)}`);  

// Q2 : 
/* return the greatest of two numbers */
const max = (a, b) => a > b ? a : b;

/* find the maximum number in an array */
const maxNumber = list => list.reduce(max);  

// test d'exécution de la fonction maxNumber
console.log(`Q2 - ${maxNumber(numbers)}`);  


// Q3 : 
/* find the maximum number in an array using Math.max and spread */
const maxNumber2 = numbers => Math.max(...numbers);

// test d'exécution de la fonction maxNumber 2 
console.log(`Q3 - ${maxNumber2(numbers)}`);  

// Q4 : 
/* return the sum of any number of parameters */
const sum = (...param) => param.reduce((total, num) => total + num, 0);

// test d'exécution de la fonction sum
console.log(`Q4 - ${sum()}`);    
console.log(`Q4 - ${sum(1,2)}`);   
console.log(`Q4 - ${sum(1,2,3,4,5)}`);         


/*********************************************/


/********** EXERCICE 8 ***********************/
console.log(` *** EXERCICE 8 *** `);

const lesInvites = ['Tim Oleon', 'Timo Leon', 'Bilbo', 'Frodo', 'Sam', 'Merry', 'Pippin']
const lesReponses = [
                  {nom : 'Sam', present : 'oui'},
                  {nom : 'Tim Oleon', present : 'non'},
                  {nom : 'Bilbo', present : 'oui'},
                  {nom : 'Frodo', present : 'oui'},
                  {nom : 'Timo Leon', present : 'non'},
                 ];

// Q1 : 
/* return the list of participants to the party */
const participants = (lesInvites, lesReponses) => {
    const reponsesNon = lesReponses.filter(response => response.present === 'non').map(response => response.nom);
    return lesInvites.filter(invite => !reponsesNon.includes(invite));
};

// test d'éxecution pour la fonction participants()
console.log(participants(lesInvites, lesReponses));

/*********************************************/

/********** EXERCICE 9 ***********************/
console.log(` *** EXERCICE 9 *** `);



/*********************************************/

/********** EXERCICE 10 ***********************/
console.log(` *** EXERCICE 10 *** `);



/*********************************************/
