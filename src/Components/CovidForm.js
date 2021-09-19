import React from "react"
import { useHistory } from "react-router-dom"
import Header from "./Header"
import CovidQuestions from "./CovidQuestions"

export default function CovidForm() {
	const history = useHistory()
	const handleClickNext = () => {
		history.push("/vaccine-form/3")
	}
	const handleClickPrev = () => {
		history.push("/user-identification/1")
	}
	return (
		<div>
			<Header />

			<CovidQuestions />

			<div className="vaccine-logo-container vaccinate"></div>
			<div className="vaccine-image-container vaccinate2"></div>

			<button className="prev-btn" onClick={handleClickPrev}></button>
			<button className="next-btn" onClick={handleClickNext}></button>
		</div>
	)
}
