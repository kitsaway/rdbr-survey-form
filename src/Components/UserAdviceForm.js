import React from "react"
import { useHistory } from "react-router-dom"
import Header from "./Header"
import AdviceQuestions from "./AdviceQuestions"

export default function VaccineForm() {
	const history = useHistory()
	const handleClickPrev = () => {
		history.push("/vaccine-form/3")
	}
	const handleSubmit= () => {
		history.push("/success-page")
	}
	return (
		<div>
			<Header />
			<AdviceQuestions handleSubmit={handleSubmit} />
			<button
				className="prev-btn back-btn"
				type="submit"
				onClick={handleClickPrev}></button>
			<div className="bike-logo-container bike"></div>
			<div className="bike-image-container bike2"></div>
		</div>
	)
}
