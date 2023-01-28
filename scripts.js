"use strict";

// const rgbColor = console.log(x);

const colorDiv = document.querySelectorAll(".div");
const playBtn = document.getElementById("color_play");
const colorName = document.querySelector("#color_name h1");
const totalDiv = colorDiv.length;

const generateColors = function () {
	for (let i = 0; i < totalDiv; i++) {
		let rgbArr = [];
		for (let i = 0; i < 3; i++) {
			rgbArr[i] = Math.floor(Math.random() * 255 + 1);
		}
		let rgb = `rgb(${[...rgbArr]})`;

		colorDiv[i].style.backgroundColor = rgb;
		colorDiv[i].setAttribute("data-color", rgb);
		colorDiv[i].textContent = rgb;
	}
	colorName.textContent = colorDiv[Math.floor(Math.random() * totalDiv)].textContent;
};

playBtn.addEventListener("click", function () {
	generateColors();
});

colorDiv.forEach(function (e) {
	e.addEventListener("click", function () {
		const divColor = e.getAttribute("data-color");
		const colorContent = colorName.textContent;
		if (colorContent == divColor) {
			alert("you Win");
		} else {
			alert("you Failed");
		}
	});
});
