// CÂU 1
let sum = 0
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
  console.log("Câu 1: Tổng từ 1 đến 100 là: ", sum)

// CÂU 2
console.log("Câu 2: Số chia hết cho 3 và 5 là: ")
for (let i = 1; i <= 100; i++) {
  if (i % 3 ===0 && i % 5 === 0) {
     console.log(i)
  }
  }

  // CÂU 3
let a = prompt("Nhập số a")
a = Number(a);
let factorial = 1
for (let i = 1; i <= a; i++) {
  factorial = factorial * i;
}
console.log("Câu 3: Giai thừa của số a là: ", factorial)

// CÂU 4
console.log ("Câu 4:")
for(let i = 2; i <= 9; i++) {
  console.log(` Bảng cửu chương ${i}: `)
  for(let j = 1; j <= 10; j++){
    console.log(` ${i} x ${j} = ${i * j} `)
  }
}

// CÂU 5
console.log("Câu 5:")
let n = prompt("Nhập số n")
n = Number(n);
let binary = "";
for(let i = n; i > 0; i = Math.floor(i / 2)){
  binary = (i % 2) + binary
}
console.log(` Số ${n} chuyển sang nhị phân là ${binary} `)

// CÂU 6
console.log("Câu 6:")
let b = prompt("Nhập số b")
b = Number(b);
let s = 0;
for (let i = 1; i <= b; i++){
  s = Math.sqrt(i + s);
}
console.log(` Với n là ${b} thì kết quả là: ${s} `)

// CÂU 7
console.log("Câu 7:")
let c = prompt("Nhập số c")
c = Number(c);
let S = 0;
for (let i = c; i >= 1; i--){
  S = Math.sqrt(i + S);
}
console.log(` Với n là ${c} thì kết quả là: ${S} `)
