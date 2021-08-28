/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
// Types of question
// 1. x is the capital of y country
// 2. Which country does this flag belong to
// 3. Guess the country which is surrounded by these countries.

function getRandomNumber(totalItems) {
	return Math.trunc(Math.random() * totalItems);
}

function appendCorrectOption(country, randomCountries, mcq) {
	const correctOptionIndex = getRandomNumber(4);
	const optionList = randomCountries.map((country) => country.name);
	optionList.splice(correctOptionIndex, 0, country.name);

	mcq = { ...mcq, options: optionList, answerIndex: correctOptionIndex };
	return mcq;
}

function capitalOfCountry(country, randomCountries) {
	const correctOptionIndex = getRandomNumber(4);
	const countries = randomCountries.map((country) => country.name);
	countries.splice(correctOptionIndex, 0, country.name);

	let mcq = {
		question: `${country.capital} is the capital of`,
		questionType: 1,
	};
	return mcq;
}

function flagOfCountry(country, randomCountries) {
	let mcq = {
		question: "Which country does this flag belong to?",
		flag: country.flag,
		questionType: 2,
	};
	return mcq;
}

function countrySurroundedByCountries(country) {}

function generateQuestion(countryInfo) {
	// const randomQuestion = Math.trunc(Math.random() * 3);
	const randomQuestion = getRandomNumber(2) + 1;
	const country = countryInfo[getRandomNumber(countryInfo.length)];
	const randomCountries = []; //for mcq

	while (randomCountries.length <= 2) {
		const randomCountry = countryInfo[getRandomNumber(countryInfo.length)];
		if (randomCountry.name !== country.name) {
			randomCountries.push(randomCountry);
		}
	}

	let mcq = {};
	switch (randomQuestion) {
		case 1:
			mcq = capitalOfCountry(country, randomCountries);
			break;
		case 2:
			mcq = flagOfCountry(country, randomCountries);
			break;
		case 3:
			mcq = countrySurroundedByCountries(country, randomCountries);
	}
	mcq = appendCorrectOption(country, randomCountries, mcq);
	return mcq;
}

exports.generateQuestion = generateQuestion;
