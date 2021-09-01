/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Options from "./Option";

function Question(props) {
	const {
		question,
		options,
		answerIndex,
		genNewMCQ,
		questionType,
		setGameStatus,
	} = props;
	const [optionIndex, setOptionIndex] = useState({
		correctOption: false,
		wrongOption: false,
	});
	const { correctOption, wrongOption } = optionIndex;

	function handleAnswerSubmit(choosenOptionIndex) {
		if (correctOption) {
			return;
		}
		if (choosenOptionIndex === answerIndex) {
			setOptionIndex({
				correctOption: choosenOptionIndex,
				wrongOption: false,
			});
		} else {
			setOptionIndex({
				correctOption: answerIndex,
				wrongOption: choosenOptionIndex,
			});
		}
	}

	function reset() {
		setOptionIndex({
			correctOption: false,
			wrongOption: false,
		});
	}

	function handleNext() {
		if (wrongOption !== false) {
			setGameStatus("ended");
		} else {
			reset();
			genNewMCQ();
		}
	}

	const optionProps = {
		options,
		correctOption,
		wrongOption,
		handleAnswerSubmit,
	};

	return (
		<>
			<img
				className="quiz-image"
				src="/images/undraw_adventure_4hum 1.svg"
				alt=""
			/>

			<div className="mcq-block">
				{questionType === 2 && <img src={props.flag} className="flag" alt="" />}

				<h2 className="question">{question}</h2>

				<Options {...optionProps} />
				<div className="next-button-div">
					<button hidden={correctOption === false} onClick={handleNext}>
						Next
					</button>
				</div>
			</div>
		</>
	);
}

export default Question;
