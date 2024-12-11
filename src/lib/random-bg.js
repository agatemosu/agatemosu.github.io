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
	document.body.style.background = `
		radial-gradient(circle at 50% 100%, ${color1}, transparent),
		radial-gradient(circle at 93.3% 25%, ${color2}, transparent),
		radial-gradient(circle at 6.7% 25%, ${color3}, transparent) pink
	`;
}

generateRandomBackground();
