'use strict';

const image = new Image();
image.crossOrigin = 'Anonymous';

const dataColors = [
	[],
	[]
];

image.onload = () => {
	const ctx = document.querySelector('#image').getContext('2d');
	ctx.drawImage(image, 0, 0);

	for (var i = 0; i < 10; i++) {
		const {
			data
		} = ctx.getImageData(10 + i, 10, 1, 1);

		const colorPixel = '$' + data[0].toString(16) + data[1].toString(16) + data[2].toString(16);
		dataColors[0][i] = colorPixel;
	}

	console.log(dataColors);
}

image.src = 'https://picsum.photos/200/300';