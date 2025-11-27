// Loop - Cikle/Unaza
// for, forEach, while, do-while
// Infinite-loop - kushti eshte qdohere true

for (let i = 0; i <= 1000000; i++) {
    if (i == 1000000) {
        console.log("Hapi i ", i);
        break;
    }
}

console.log("Cikli perfundoi");

// Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + i * j);
    }
}

// while
let z = 0;
while (z > 10) {
    console.log("While - Hapi", z);
    z++;
}

// do-while
let y = 0;
do {
    console.log(y);
    y++;
} while (y > 20);

// Array iteration - iterrimi ne liste
let numrat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= numrat.length - 1; i++) {
    console.log(numrat[i] * 2);
}

numrat.forEach((numri) => {
    console.log("forEach", numri);
});

// Qdo numer qift mos e shfaq
for (let i = 0; i < 100; i++) {
    if (i == 55) {
        continue;
    } else {
        console.log(i);
    }
}

// Functions
function greeting() {
    console.log("Pershendetje");
}

greeting();
greeting();
greeting();
greeting();
greeting();

let ora = 12;
if (ora == 12) {
    console.log("funksioni brenda kushtit");
    greeting();
}

function mblidh(firstNum, secondNum) {
    return firstNum + secondNum;
}

console.log(mblidh(-6, 3));
console.log(mblidh(5, 2));
console.log(mblidh(1, 7));
console.log(mblidh(-9, -10));

function zbrit(num1, num2) {
    return num1 - num2;
}

console.log(zbrit(5, -10));

const shumezimi = (num1, num2) => {
    const result = num1 * num2;
    return result;
};

console.log(shumezimi(10, 10));


function print() {
  console.log(arguments)
}

print("1", "Enes", true)