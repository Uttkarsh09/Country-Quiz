/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef } from "react";
import Question from "./Question";
import Result from "./Result";
const { generateQuestion } = require("../scripts/generateQuestion");

const QuizContent = ({ countryInfo }) => {
	const [MCQ, setMCQ] = useState(() => generateQuestion(countryInfo));
	const scoreRef = useRef(1);

	// console.log(countryInfo[104]);
	const genNewMCQ = () => {
		scoreRef.current += 1;
		const newMCQ = generateQuestion(countryInfo);
		setMCQ(newMCQ);
	};

	return (
		<div className="quiz-content">
			<img src="/images/undraw_adventure_4hum 1.svg" className="quiz-image" />
			<h1>COUNTRY QUIZ</h1>
			<Question {...MCQ} genNewMCQ={genNewMCQ} />
			{/* <Result /> */}
		</div>
	);
};

export default QuizContent;
