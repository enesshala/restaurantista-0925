// ky eshte koment ne rresht

/*
  Ky eshte
  koment
  ne disa
  rreshta
*/

// Konzola
console.log("Mesazhi");

// Variablat - var, let, const
var emri = "Enes";

let mbiemri; // var declaration

mbiemri = "Shala"; // var init - assiging value

mbiemri = "Shalaa"; // reasing
console.log(mbiemri);

const pi = 3.14;

let mosha = "26";
console.log(mosha + 10);

// String concatination
console.log(emri + " " + mbiemri);
console.log(emri, mbiemri);

// typeof - type of variable
console.log(typeof pi);

let a = 5;
let b = 2;

let z = a + b;

console.log(a + " + " + b + " = " + z);

// Operatoret aritmetik: +, -, /, *, %, ++, --
console.log(a % b);

console.log(a++); // postfix operandi++ -> a + 1
console.log(++b); // prefix ++operandi

let c = 10;
console.log((c += 1)); // c = c + 1 -> c += 1

// Operatoret logjik: and(&&) dhe, or(||) ose, not(!) negacioni
let moshaAplikuesit = 17;

if (moshaAplikuesit >= 18 && moshaAplikuesit < 41) {
    console.log("I plotesoni kushtet per leje te vetures");
} else {
    console.log("Nuk e plotesoni kushtin");
}

let filloiLoja = false;

!(5 < 10)

const department = {name: "Developers"};

if(!true){
  console.log("Departmenti nuk u gjet!");
} else{
  console.log(department);
  
}

if (!filloiLoja) {
    console.log("Loja ka filluar");
} else {
    console.log("Loja nuk ka filluar");
}
