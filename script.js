const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ.?!,:;/=+-%@#€&*";

let interval = null;

for (var i = 0; i < document.querySelectorAll("h1").length; i++) {
	document.querySelectorAll("h1")[i].onmouseover = (event) => {
		let iteration = 0;

		clearInterval(interval);

		interval = setInterval(() => {
			event.target.innerText = event.target.innerText
				.split("")
				.map((letter, index) => {
					if (index < iteration) {
						return event.target.dataset.value[index];
					}

					return letters[Math.floor(Math.random() * 42)];
				})
				.join("");

			if (iteration >= event.target.dataset.value.length) {
				clearInterval(interval);
			}

			iteration += 1 / 5;
		}, 30);
	};
}
