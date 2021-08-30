/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Option = ({ option, classes, imgSrc, optionAphabet, handleClick }) => {
	return (
		<li className={classes} onClick={handleClick}>
			<span>{optionAphabet}</span>
			<span>{option}</span>
			<span>{imgSrc && <img src={imgSrc} className="icon" />}</span>
		</li>
	);
};

const Options = ({
	options,
	correctOption,
	wrongOption,
	handleAnswerSubmit,
}) => {
	return (
		<ul className="options">
			{options.map((option, idx) => {
				let additionalOptionClass = "",
					imgSrc = "";

				if (idx === correctOption) {
					additionalOptionClass = "correct-option";
					imgSrc = "/images/correct_icon.svg";
				} else if (idx === wrongOption) {
					additionalOptionClass = "wrong-option";
					imgSrc = "/images/wrong_icon.svg";
				}

				return (
					<Option
						key={idx}
						option={option}
						classes={`option btn ${additionalOptionClass}`}
						imgSrc={imgSrc}
						optionAphabet={String.fromCharCode(97 + idx).toUpperCase()}
						handleClick={() => handleAnswerSubmit(idx)}
					/>
				);
			})}
		</ul>
	);
};

export default Options;
