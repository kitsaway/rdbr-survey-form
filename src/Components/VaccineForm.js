import React from "react"
import { useHistory } from "react-router-dom"
import Header from "./Header"
import VaccineQuestions from "./VaccineQuestions"

export default function VaccineForm() {
	const history = useHistory()
	const handleClickNext = () => {
		history.push("/user-advice-form/4")
	}
	const handleClickPrev = () => {
		history.push("/covid-form/2")
	}
	return (
		<div>
			<Header />
			<VaccineQuestions />
			<div className="doctor-logo-container doctor"></div>
			<div className="doctor-image-container doctor2"></div>

			<button className="prev-btn" onClick={handleClickPrev}></button>
			<button className="next-btn" onClick={handleClickNext}></button>
		</div>
	)
}