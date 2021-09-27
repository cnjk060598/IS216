//var css = document.querySelector("h3");
//var color1 = document.querySelector(".color1");
//var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var info = document.getElementById("info");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	// info.textContent = body.style.background + ";"; // textContent -- only text, no html
	info.innerHTML = body.style.background + ";";

}

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);