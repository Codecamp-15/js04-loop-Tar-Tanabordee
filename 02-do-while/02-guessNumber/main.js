//PROGRAM
//ให้เข


// let ansNumber = prompt('Enter your magic number'); // =>null,string :"",".....","qweqeq","12"

// let isNull = ansNUmber === null;
// let isEmpty = ansNumber.trim() === ''
// let isNaN = isNaN(ansNumber)
// let isValid = ansNumber == null || ansNumber.trim() === '' || isNaN(ansNumber);
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber)> 99;
// let isInRange = NUmber(ansber) >= 1 && Number(ansNumber) <= 99;

// if(isValid) {
//     alert('Invalid Number')
// } else if (outOfRange) {
//     alert('Invalid Range');
// } else if (isInRange) {
//     alert('Try to guess number'); // Program : player 2
// }

// V2 :

// let ansNumber='';
// let isEmpty;
// let isNaN;
// let outOfRange

// do {
//     ansNumber = prompt('Enter your magic number') || '';//null || ""
    
//     // if(ansNumber !==null) {
//     isEmpty = ansNumber.trim() ==='';
//     isNaN = isNaN(ansNumber);
//     outOfRange = Number(answer)<1 ||Number(ansNumber) > 99;
//     if (isEmpty || isNaN) {
//         alert('Invalid Input. Try 1-99');
//     } else if (outOfRange) {
//         alert('Invalid Range, Try 1-99');
//     }
// } while (isEmpty || isNaN);
// } while (ansNumber == null || isEmpty || isNaN);

//Program 2 : Guess
// - ทายซ้ำ
// - Hint OutOfRange
// - Hint Ivalid Range
// - Hint Too High, Too Low
let guessNumber;

do {
    guessNumber = prompt("Enter your Name") || '';
    let outOfRange = Number(guessNumber) < 1 ||Number(guessNumber) >99;
    if (isEmpty || isNaN) {
        alert('Invalid Input. Try 1-99');
    } else if (outOfRange) {
        alert('Invalid Range, Try 1-99');
    } else if (+guessNumber > +ansNumber) {
        alert('Too High');
    } else if (+guessNumber <+ansNumber) {
        alert('Too Low');
    } else if (+guessNumber === +ansNumber) {
        alert('Correct');
    }
} while(+guessNumber != +ansNumber);

// ansNumber === null || ansNumber.trim() === '' || isNaN(ansNumber)
