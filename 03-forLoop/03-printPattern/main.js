// print ได้แถวละครั้ง ,  *

// let str =''
// for (let i = 1; i <= 5; i++) {
//     let str ='';
//     //console.log('#);

//     for (let j = 1; j <= 5; j++){
//         str = str + '*';
//     }
//     console.log(str);
// }

// for (let i = 1; i <= 4; i ++ ) {
//     let str ='';
//     for (let j = 1; j <= i; j++){
//         str = '*';
//     }
//     console.log(str);
// }

let str ='';
for (let i = 1; i <= 4; i++){
    for (let j =1; j <= 4; j++){
        // j = 1,2,3,4
        // i = 1,2,3,4
        if (j <= i) str += '*';
    }
        str += '\n';
}

console.log(str);