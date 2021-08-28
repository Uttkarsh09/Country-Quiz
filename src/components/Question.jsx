/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Options from "./Option";

function Question(props) {
	const { question, options, answerIndex, genNewMCQ, questionType } = props;
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
		reset();
		genNewMCQ();
	}

	const optionProps = {
		options,
		correctOption,
		wrongOption,
		handleAnswerSubmit,
	};

	return (
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
	);
}

export default Question;
