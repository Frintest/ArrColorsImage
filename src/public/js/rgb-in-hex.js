'use strict';

let endNum = '';
let arrChannels = [];

/**
 * вывод каналов rgb
 *
 * @param {number} countName
 * @returns
 */
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

	arrChannels[countName] = prompt(`Введите ${nameChannel}`);

	return arrChannels[countName];
};


/**
 * конвертация 10 & > значения в 16 с/с
 * @param {number} num - канал в 16 с/с
 * @returns {string} - преобразованный канал в 16 с/с
 */
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


/**
 * конвертация в 16 с/c
 *
 * @param {number} intNum - rgb калан из фун-ции writeChannelRGB
 */
const convertChannel = (intNum) => {
	let restIntNum; // остаток от деления intNum на 16
	let numSixTen = ''; // канал в 16 с/с

	while (intNum >= 16) {
		restIntNum = intNum % 16;
		intNum = Math.trunc(intNum / 16); // целочисленный остаток

		restIntNum > 9 ? numSixTen += convertMaxNum(restIntNum) : numSixTen += restIntNum;
	}

	intNum > 9 ? numSixTen += convertMaxNum(intNum) : numSixTen += intNum; // прибавляем целочисленный остаток к обычным остаткам

	if (numSixTen.length === 2)
		endNum += numSixTen.split('').reverse().join(''); /* array in string */
	else
		endNum += '0' + numSixTen; // если в канале 1 цифра, то добавляем 0 в самом начале
};


for (let i = 0; i < 3; i++) {
	writeChannelRGB(i);

	if (!isNaN(Number(arrChannels[i])) && arrChannels[i].trim() != '') convertChannel(Number(arrChannels[i])); /* ! isNaN(Number(variables));*/
	else {
		console.error('Channel not a number, programm stoping');
		endNum = NaN;
		break;
	}
}

console.log(endNum);