function getRandomColor(alpha = 0.5) {
	const hue = Math.floor(Math.random() * 120) + 240;
	const saturation = Math.floor(Math.random() * 10) + 40;
	const lightness = Math.floor(Math.random() * 10) + 40;

	return `hsl(${hue}deg ${saturation}% ${lightness}% / ${alpha})`;
}

function generateRandomBackground() {
	const color1 = getRandomColor();
	const color2 = getRandomColor();
	const color3 = getRandomColor();
	document.body.style.setProperty("--bg-color-1", color1);
	document.body.style.setProperty("--bg-color-2", color2);
	document.body.style.setProperty("--bg-color-3", color3);
}

generateRandomBackground();
