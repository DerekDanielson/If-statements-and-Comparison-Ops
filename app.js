/* 
if(something){
    do something
} else {
    do something else
}
*/

const id = 100;

//EQUAL TO
if(id == 100) {
    console.log('Correct');
} else {
    console.log('Wrong');
}


//NOT EQUAL TO
if(id != 101) {
    console.log('Correct');
} else {
    console.log('Wrong');
}


//Test if undefined
if (typeof id !== 'undefined'){
    console.log(`The ID is ${id}`);
} else {
    console.log('No ID');
}


//Logical Operators
const name = 'Bob';
const age = 20;

if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}


// Ternary Operator
const id = 100;

console.log(id === 100 ? 'Correct' : 'Incorrect');


// Without braces
if (id === 100)
    console.log('Correct');
else
    console.log('Incorrct');























