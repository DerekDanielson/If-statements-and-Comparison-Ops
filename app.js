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

