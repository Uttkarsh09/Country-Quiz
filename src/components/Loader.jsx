import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
	const loaderVairant = {
		ball1Initial: {
			x: 0,
			y: 21,
		},
		ball2Initial: {
			x: 21,
			y: 0,
		},
		animateBall1: {
			x: [0, 43, 0],
			transition: {
				repeat: "Infinity",
				duration: 1,
			},
		},
		animateBall2: {
			y: [0, 43, 0],
			transition: {
				repeat: "Infinity",
				delay: 0.25,
				duration: 1,
			},
		},
	};

	return (
		<motion.div className="loader">
			<motion.div
				initial="ball1Initial"
				animate="animateBall1"
				variants={loaderVairant}
				className="loading-ball"
			></motion.div>
			<motion.div
				initial="ball2Initial"
				animate="animateBall2"
				variants={loaderVairant}
				className="loading-ball"
			></motion.div>
		</motion.div>
	);
};

export default Loader;
