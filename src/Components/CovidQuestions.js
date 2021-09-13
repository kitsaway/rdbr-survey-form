import React, { Component } from "react"

export default class CovidQuestions extends Component {
	render() {
		const listOfQuestions = [
			{
				question: "bbb",
				selectedanswer: null,
				answerToShow: 2,
				answers: [
					{
						option: "a",
						id: 1,
					},
					{
						option: "b",
						id: 2,
					},
				],
				subject: "covid",
			},
		]

		return (
			<form>
				<Question list={listOfQuestions} />
			</form>
		)
	}
}

const Question = (props) => (
	<div className="question-container">
		{props.list.map((object) => (
			<div key={object.id}>
				<p className="question-text" key={object.id}>
					{object.question}
				</p>
				<div className="answer-container">
					{object.answers.map((ans) => (
						<div className="answer-wrap">
							<input type="radio" name={ans.id} value={ans.option}></input>
							<label className="answer-text">{ans.option}</label>
						</div>
					))}
				</div>
			</div>
		))}
	</div>
)
