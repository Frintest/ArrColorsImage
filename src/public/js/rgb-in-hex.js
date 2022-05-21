'use strict';

let endNum = '';

// * вывод каналов rgb
const writeChannelRGB = (countName) => {
	let nameChannel = '';

	switch (countName) {
		case 0:
			nameChannel = 'R';
			break;
		case 1:
			nameChannel = 'G';
			break;
		case 2:
			nameChannel = 'B';
	}

	let channel = Number(prompt(`Введите ${nameChannel}`));

	return channel;
};


// * конвертация в 16.ричную с.с.
const convertChannel = (intNum) => {
	let restIntNum;
	let numSixTen = '';

	while (intNum >= 16) {
		restIntNum = intNum % 16;
		intNum = Math.trunc(intNum / 16);

		restIntNum > 9 ? numSixTen += convertMaxNum(restIntNum) : numSixTen += restIntNum;
	}

	intNum > 9 ? numSixTen += convertMaxNum(intNum) : numSixTen += intNum;

	if (numSixTen.length === 2)
		endNum += numSixTen.split('').reverse().join('');
	else
		endNum += '0' + numSixTen;
};


// * конвертация 10 & > значения в 16.ричный формат
const convertMaxNum = (num) => {
	switch (num) {
		case 10:
			num = 'A';
			break;
		case 11:
			num = 'B';
			break;
		case 12:
			num = 'C';
			break;
		case 13:
			num = 'D';
			break;
		case 14:
			num = 'E';
			break;
		case 15:
			num = 'F';
	}

	return num;
};


for (let i = 0; i < 3; i++) {
	convertChannel(writeChannelRGB(i));
}

console.log(endNum);