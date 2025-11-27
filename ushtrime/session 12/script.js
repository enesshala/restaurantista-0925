// Operatoret e krahasimit - Comparison operators: <, <=, >, >=, ==, ===, !=, !==
// Outputi eshte boolean (true or false)

console.log(5 != 6 && 5 != 5);

// Data types: Primitive, non-primitive
// Data types: string, numbers, boolean, null, undefined, object, arrays, char
let a = 100; // number
let b = "Teksti"; //string
let isRaining = false; //boolean
let frutat = []; // null
let diqka;

console.log(typeof diqka);

// Arrays - lista me te dhena, 0 based index
let fruits = ["Molla", "Dardha", "Pjepri", "Pjeshka"]; //length = 4
// indexi:      0         1         2          3
console.log(fruits[fruits.length - 1]);

let lista = ["Molla", 200, true, [1, 2, 3]];
console.log(lista[3][1]);

// Matrix - Matricat
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(matrix[0][2]);

// Objects - Objektet | {key: value, key2: value}
let person = {
    emri: "Enes",
    mbiemri: "Shala",
    mosha: 26,
    iPunesuar: true,
    aftesite: ["Html", "CSS", "JavaScript"],
    pet: {
        name: "Dog",
    },
};

person.emri = "Filan";

console.log(person.emri, person.mbiemri);

console.clear();

let make = ["Mercedes", "Bmw", "Audi", "Skoda"];
console.log(make);

make.push("Volvo", "Peugeot");
console.log(make);

make.shift();
console.log(make);

make.unshift("Mercedes Benz");
console.log(make);

make[1] = "Fiat";
console.log(make);

delete make[2];
console.log(make);

make.pop();
console.log(make);

console.clear();

// Conditions - Kushtet
// 2 types of conditions
// if-else, switch()

// 1. if-else conditions
if (5 != 5) {
    console.log("Keni gjetur pergjigjen e sakte");
} else if (7 == 7) {
    console.log("Sakte 7 == 7");
} else {
    console.log("Krahasimi nuk eshte i sakte");
}

let ditet = [
    "E Hene",
    "E marte",
    "E merkure",
    "E enjte",
    "E Premte",
    "E shtune",
    "E diele",
];

let dita = "E diele";

if (dita === ditet[0]) {
    console.log("Dite e hene");
} else if (dita === ditet[1]) {
    console.log("Dite e marte");
} else if (dita === ditet[5]) {
    console.log("Dite e shtune");
} else if (dita === ditet[6]) {
    console.log("Dite e diele");
} else {
    console.log("Dita nuk u gjet!");
}

if (
    dita === ditet[0] ||
    dita === ditet[1] ||
    dita === ditet[2] ||
    dita === ditet[3] ||
    dita === ditet[4]
) {
    console.log("Eshte dite pune");
} else if (dita === ditet[5] || dita === ditet[6]) {
    console.log("Eshte vikend");
} else {
    console.log("Dita eshte dhene gabim!");
}

// Switch
switch (dita) {
    case "E shtune":
    case "E diele":
        console.log("Dite vikendi - switch");
        break;
    default:
        console.log("Dita eshte dhene gabim!");
}

// Detyre shtepie:
// Per numrin e plote te dhene, te gjendet a eshte numer qift apo tek

// Per numrin e dhene, te gjendet a eshte numer pozitiv, negativ apo 0
let x = -25;
if (x > 0) {
    console.log("Numri eshte pozitiv");
} else if (x < 0) {
    console.log("Numri eshte negativ");
} else {
    console.log("Numri eshte 0");
}

// per dy numra te dhene, te gjendet me i madhi prej tyre

// per nje karakter te dhene, te gjendet a eshte zonore apo bashtingllore;
