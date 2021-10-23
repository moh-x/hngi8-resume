import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

import "./App.css";

const App = () => {
	const [resumeData, setResumeData] = useState(false);

	useEffect(() => {
		axios
			.get("https://xodeeq.pythonanywhere.com/profile/1/")
			.then((res) => {
				console.log("res", res.data);
				setResumeData(res.data);
			})
			.catch((error) => console.log(error));
	}, []);

	// useEffect(() => {
	// 	fetch("/resumeData.json")
	// 		.then((res) => res.json())
	// 		.then((data2) => {
	// 			// console.log("data2", data2);
	// 		});
	// }, []);

	return (
		<div className='App'>
			<Header data={resumeData} />
			<About data={resumeData} />
			<Resume data={resumeData.resume} />
			<Portfolio data={resumeData.portfolio} />
			<Testimonials data={resumeData.testimonials} />
			<Contact data={resumeData} />
			<Footer data={resumeData} />
		</div>
	);
};

export default App;
