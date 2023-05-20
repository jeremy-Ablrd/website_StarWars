// Carroussel
document.getElementById("next").onclick = function () {
	const widthItem = document.querySelector(".card").offsetWidth;
	document.getElementById("container_movies").scrollLeft += widthItem;
};

document.getElementById("prev").onclick = function () {
	const widthItem = document.querySelector(".card").offsetWidth;
	document.getElementById("container_movies").scrollLeft -= widthItem;
};

// traduction description
const element = document.getElementById("typing");
const text = element.innerHTML;
const button = document.getElementById("button");

button.addEventListener("click", buttonClick);

function buttonClick() {
	element.innerHTML = "";
	element.classList.add("anime_blink");
	element.style.borderRight = "0.15em solid black";
	button.parentNode.removeChild(button);
	setTimeout(typeWriter, 2000);
}

let index = 0;
function typeWriter() {
	const typewriter = element;
	typewriter.style.fontFamily = "Arial";
	typewriter.classList.add("anime_translate");
	typewriter.classList.add("desable_anime_translate");
	typewriter.innerHTML += text.charAt(index);
	index++;

	if (index < text.length) {
		setTimeout(typeWriter, 50); // Délai entre chaque lettre (en millisecondes)
	} else {
		typewriter.style.border = "none";
	}
}

