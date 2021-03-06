import React from "react";

const Result = ({ score, resetGame }) => {
	const resultImage = score ? "winning" : "loosing";
	const resultScoreColor = score ? "green" : "red";

	return (
		<div className="result">
			<img className="result-image" src={`/images/${resultImage}.svg`} alt="" />
			<p className="result-text">Results</p>
			<p className="result-score">
				You got
				<span className={`score ${resultScoreColor}`}>{score}</span>
				correct answers
			</p>
			<button
				className="try-again-btn"
				onClick={() => {
					resetGame();
				}}
			>
				Try again
			</button>
		</div>
	);
};

export default Result;
