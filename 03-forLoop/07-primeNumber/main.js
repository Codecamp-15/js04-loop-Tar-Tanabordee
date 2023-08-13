let n = 5;
let isPrime = true;

//5/1
//5/2
//5/3
//5/4
//5/5

for (let n =2; n<=100; n++) {
    //onlt 1 Number
    let isPrime = true;
    for(let divider = 2; divider <n; divider++) {
       //divier 2,3,4,...,n-1
       if (n % divider == 0) {
           isPrime = false;
           break;
        }     
        // n=2 5/2 = 2.5 => isPrime =true
        // n=3 5/3 = 1.6 => isPrime =true
        // n=4 5/4 = 1.25 => isPrime =true
        // n=5
    }
    if (isPrime) console.log(n);
}
// if (isPrime) alert(`number${n} is prime number`);
// else alert(`number${n} not prime number`);