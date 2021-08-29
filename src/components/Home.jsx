/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import QuizContent from "./QuizContent";

const Home = () => {
	const [countryInfo, setCountryInfo] = useState(null);

	useEffect(() => {
		// function getCountriesInfo() {
		// 	axios
		// 		.request({
		// 			url: "/all?fields=name;currencies;capital;languages;borders;flag",
		// 			method: "get",
		// 			baseURL: "https://restcountries.eu/rest/v2/",
		// 		})
		// 		.then((res) => {
		// 			setCountryInfo(res.data);
		// 		});
		// }
		async function getCountriesInfo() {
			axios.get("http://127.0.0.1:9999/").then((res) => {
				setCountryInfo(res.data);
			});
		}
		getCountriesInfo();
		// readCountryData();
	}, []);

	return (
		<div className="home">
			{countryInfo ? <QuizContent {...{ countryInfo }} /> : "loading"}
		</div>
	);
};

export default Home;
