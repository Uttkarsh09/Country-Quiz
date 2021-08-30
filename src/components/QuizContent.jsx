/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import Question from "./Question";
import Result from "./Result";
const { generateQuestion } = require("../scripts/generateQuestion");

const QuizContent = ({ countryInfo }) => {
	const [gameStatus, setGameStatus] = useState("playing");
	const [MCQ, setMCQ] = useState(() => generateQuestion(countryInfo));
	const scoreRef = useRef(0);

	function genNewMCQ() {
		scoreRef.current += 1;
		setMCQ(generateQuestion(countryInfo));
	}

	function resetGame() {
		setMCQ(generateQuestion(countryInfo));
		scoreRef.current = 0;
		setGameStatus("playing");
	}

	return (
		<div className="quiz">
			<h1 className="quiz-title">COUNTRY QUIZ</h1>
			<div className="quiz-content">
				{gameStatus === "playing" ? (
					<Question
						{...MCQ}
						genNewMCQ={genNewMCQ}
						setGameStatus={setGameStatus}
					/>
				) : (
					<Result score={scoreRef.current} resetGame={resetGame} />
				)}
			</div>
		</div>
	);
};

export default QuizContent;
