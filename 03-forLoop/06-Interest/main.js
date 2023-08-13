//newbalance = balance + Interest
//percent : per-century

const interestRate = 2.5;
let balance = 100000;

for (let year = 1; year <= 10; year++) {
  const interest = balance * (interestRate / 100);
  balance += interest;
}

console.log("Balance after 10 years:", balance.toFixed(2)); // แสดงผลลัพธ์
