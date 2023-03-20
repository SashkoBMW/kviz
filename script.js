let ucenik = document.querySelector("#brucenika");
let pitanje = document.querySelector("#pitanjebr");
let ucenikbr = 0;
let pitanjebr = 0;
let par = document.querySelector("#paragraf");

function resetU() {
	let randomNumber = Math.floor(Math.random() * 30) + 1;
	ucenikbr = randomNumber;
	ucenik.textContent = "Broj učenika u dnevniku: " + ucenikbr;
}
function resetP() {
	let randomNumber = Math.floor(Math.random() * 10) +1;
	pitanjebr = randomNumber;
	pitanje.textContent = "Pitanje broj: " + pitanjebr;
}
function upamti() {
	let zbir = `Broj učenika: ${ucenikbr}, broj pitanja: ${pitanjebr} - `;
	par.textContent += zbir;

}