import React from "react"
import Header from "./Header"
import CovidQuestions from "./CovidQuestions"

export default function CovidForm(props) {
	return (
		<div>
			<Header />
			<CovidQuestions />
			<div className="vaccine-logo-container vaccinate"></div>
			<div className="vaccine-image-container vaccinate2"></div>

			<button className="prev-btn"></button>
			<button className="next-btn"></button>
		</div>
	)
}
