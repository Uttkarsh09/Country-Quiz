/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import QuizContent from "./QuizContent";
import Loader from "./Loader";

const Home = () => {
	const [countryInfo, setCountryInfo] = useState(null);

	useEffect(() => {
		function getCountriesInfo() {
			axios
				.request({
					url: "/all?fields=name;currencies;capital;languages;borders;flag",
					method: "get",
					baseURL: "https://restcountries.eu/rest/v2/",
				})
				.then((res) => {
					setCountryInfo(res.data);
				});
		}
		getCountriesInfo();
	}, []);

	return (
		<div className="home">
			{countryInfo ? <QuizContent {...{ countryInfo }} /> : <Loader />}

			<div className="about-me">
				created by <a href="https://github.com/Uttkarsh09">Uttkarsh09</a> -{" "}
				<a href="https://devchallenges.io/challenges/Bu3G2irnaXmfwQ8sZkw8">
					devChallenges.io
				</a>
			</div>
		</div>
	);
};

export default Home;
