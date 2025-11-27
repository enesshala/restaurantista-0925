// Array methods
let numrat = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numrat);

// forEach();
numrat.forEach((numri) => console.log(numri));

// map()
const listaEDyfishuar = numrat.map((numri) => numri * 2);
console.log(listaEDyfishuar);

// filter()
const numratQift = numrat.filter((numri) => numri % 2 === 0);
console.log(numratQift);
const numratTek = numrat.filter((numri) => numri % 2 !== 0);
console.log(numratTek);

// reduce();
const totali = numrat.reduce((totali, numri) => totali + numri);
console.log(totali);

let total = 0;
for (let i = 0; i < numrat.length; i++) {
    total += numrat[i];
}
console.log(total++);

const produktet = [
    { emri: "Laptop", qmimi: 1200 },
    { emri: "Tablet", qmimi: 800 },
    { emri: "Iphone 17 Pro Max", qmimi: 1600 },
];

let fee = 0;
const shumaTotale = produktet
    .filter((produkti) => produkti.qmimi > 999)
    .reduce((totali, produkti) => totali + produkti.qmimi, fee);
console.log(shumaTotale);

// DOM - Document Object Model Mainpulation
document.getElementById("titulli").innerHTML =
    "Hyrje ne Javascript DOM - updated";
document.getElementsByClassName("box");
document.getElementsByTagName("h3");

document.querySelector(".box").innerHTML = `<h1>Teksti nga querySelector()</h1>
    <h2>Helloo</h2>
    <h3>Hi</h3>`;
document.querySelector("#myTitle").textContent =
    "Teksti i shenuar me textContent";

const butoni = document.getElementById("kliko");
const mesazhi = document.getElementById("message");

butoni.addEventListener("click", () => {
    mesazhi.textContent = "Teksti u shtua nga butoni";
});

let lista = document.getElementById("lista");
let li = document.createElement("li");
li.textContent = "Elementi 4";

lista.appendChild(li);

let lista2 = document.getElementById("lista2");
let ul = document.createElement("ul");
for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    li.textContent = `Elementi ${i}`;

    ul.appendChild(li);
}

lista2.appendChild(ul);

let enes = document.getElementById("enes");

enes.textContent = "Hyrje ne Javascript";
enes.style.color = "#a9a9a9";
enes.style.fontSize = "50px";
enes.style.fontWeight = "100";

let show = document.getElementById("show");
let text = document.getElementById("text");
let output = document.getElementById("output");

show.addEventListener("click", () => {
    output.innerHTML = text.value;
});
