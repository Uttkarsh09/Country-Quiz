/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import Question from "./Question";
import Result from "./Result";
const { generateQuestion } = require("../scripts/generateQuestion");

const QuizContent = ({ countryInfo }) => {
	const [gameStatus, setGameStatus] = useState("playing");
	const [MCQ, setMCQ] = useState(() => generateQuestion(countryInfo));
	const scoreRef = useRef(0);

	// console.log(countryInfo[104]);
	const genNewMCQ = () => {
		scoreRef.current += 1;
		const newMCQ = generateQuestion(countryInfo);
		setMCQ(newMCQ);
	};

	return (
		<div className="quiz">
			<h1 className="quiz-title">COUNTRY QUIZ</h1>
			<div className="quiz-content">
				{gameStatus === "playing" ? (
					<Question {...MCQ} genNewMCQ={genNewMCQ} />
				) : (
					<Result score={scoreRef.current} />
				)}
			</div>
		</div>
	);
};

export default QuizContent;
