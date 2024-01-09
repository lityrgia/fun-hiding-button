const element = document.querySelector("button")
const phrases = {
	1: "Huh?",
	2: "You cant catch?",
	3: "Bro...",
	4: "Just do it",
	5: "It's so easy",
	6: "Just press button",
	7: "Bruuh...",
	8: "I have no words",
	9: "Go away",
	10: "Finally do it"
}
let counter = 1;

element.onmousemove = function () {

	if (counter == 10) {
		element.onmousemove = null;
	}

	element.innerHTML = phrases[counter]

	counter++

	do {

		element.style.left = Math.round(Math.random() * document.documentElement.scrollWidth - element.clientWidth) + "px"

		element.style.top = Math.round(Math.random() * document.documentElement.scrollHeight - element.clientHeight) + "px"

	} while (element.getBoundingClientRect().x < 0 || element.getBoundingClientRect().y < 0);

}

element.onclick = function () {

	if (element.onmousemove == null) {

		element.style.transition = "5s"
		element.style.transform = "scale(0)"
		element.innerHTML = "Excelent!"

		setTimeout(() => {
			location.reload()
		}, 10000)

	}

}