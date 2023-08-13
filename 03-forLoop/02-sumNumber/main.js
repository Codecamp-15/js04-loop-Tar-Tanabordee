// let sum = 0;
// let sumeven =0;
// let sum0dd =0;
// let sumthird = 0;
// for ( i = 1; i <= 100; i++){
//     sum += i;
//     if (i % 2 == 0) {
//         sumeven +=i;
//     } else {
//         sum0dd +=i;
//     }
//     if (i % 3 == 0) {
//         sumthird +i;
//     }
// } console.log(sum);
//  console.log(sumeven);
//  console.log(sum0dd);

//  if (i % 3 == 0) {

//  }


// let sum = 0;
// for (let i = 1; i<= 100; i++){
//     //console.log(i);
//     //sum = 0;
//     sum = sum + 1;
//     //sum = 0 + 1 => 1
//     //sum = 1 + 2 => 3
//     //sum = 3 + 3 => 6
//     //sum = 6 + 4 => 7
// }

// console,log(sum);

//2 : ผลรวมเลขคู่มผลรวมเลขคี่

let sumEven = 0;
let sumOdd = 0;

for (let i = 1; i <= 100; i++){
    sum += 1;
    if (i % 2 == 0) sumEven += i;
    else sumOdd += i;
}
    console.log(sumEven, sum - sumEven, sumOdd);

    //3:หาผลรวมของเลขที่หาร  2 ลงตัว ยกกำลังสอง (2^2 +4^2+...)
    // ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 +...)

    let sumEvenSquare = 0;
    let sumThiedSquare = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            // console.log(`${i}^2`);
            sumEvenSquare = sumEvenSquare + i ** 2;
        } 

        if (i % 3 === 0){

            console.log(`${1}^2`);
            sumThiedSquare = sumThiedSquare + i ** 2;
        
        }
    }
    console.log(`sumEvenSQ : ${sumEvenSquare}`);
    console.log(`sumThindSQ : ${sumThirdSquare}`);
    console.log(`Result is : ${sumEvenSqure - sumThirdSquare}`);