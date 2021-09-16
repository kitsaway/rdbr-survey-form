import React, { Component } from "react"

// აქ მჭირდება date-type input-ის placeholder-ის შესწორება
// პასუხების state-ის reset-ი პასუხის ცვლილების შემთხვევაში
// აუცილებელი ველების შევსების ვალიდაცია

export default class CovidQuestions extends Component {
	state = {
		list: [
			{
				default: true,
				id: "general-question-covid",
				isDisplayed: true,
				question: "თუ გაქვს გადატანილი Covid-19?*",
				selectedanswer: null,
				answers: [
					{
						option: "კი",
						type: "radio",
					},
					{
						option: "არა",
						type: "radio",
					},
					{
						option: "ახლა მაქვს",
						type: "radio",
					},
				],
			},
			{
				id: "additional-question-antigen-test",
				isDisplayed: false,
				question: "შემთხვევით ანტისხეულების ტესტი ხომ არ გაქვს გაკეთებული?*",
				selectedanswer: null,
				parentQuestion: "თუ გაქვს გადატანილი Covid-19?*",
				activatorAnswer: "კი",
				answers: [
					{
						option: "კი",
						type: "radio",
					},
					{
						option: "არა",
						type: "radio",
					},
				],
			},
			{
				id: "additional-question-antigen-number",
				isDisplayed: false,
				question:
					"თუ გახსოვს, გთხოვ მიუთითე მიახლოებითი თარიღი და ანტისხეულების რაოდენობა* ",
				selectedanswer: null,
				parentQuestion:
					"შემთხვევით ანტისხეულების ტესტი ხომ არ გაქვს გაკეთებული?*",
				activatorAnswer: "კი",
				answers: [
					{
						type: "date",
						placeholder: "დდ/თთ/წწ",
					},
					{
						type: "number",
						placeholder: "ანტისხეულების რაოდენობა",
					},
				],
			},
			{
				id: "additional-question-date",
				isDisplayed: false,
				question:
					"მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი), როდის გქონდა Covid-19*",
				selectedanswer: null,
				parentQuestion:
					"შემთხვევით ანტისხეულების ტესტი ხომ არ გაქვს გაკეთებული?*",
				activatorAnswer: "არა",
				answers: [
					{
						type: "date",
						placeholder: "დდ/თთ/წწ",
					},
				],
			},
		],
	}

	handleAnswer = (value, question) => {
		let newList = [...this.state.list]
		newList[newList.findIndex((x) => x.question === question)].selectedanswer =
			value
		this.setState({
			list: newList,
		})
	}
	render() {
		return (
			<>
				<div className="questions-form">
					<Question list={this.state.list} handleAnswer={this.handleAnswer} />
				</div>
			</>
		)
	}
}

const Question = (props) => (
	<div className="question-container">
		{props.list.map(
			(object) =>
				(object.default ||
					// Goes through array objects
					// Finds Question that is child of previous question
					// Checks if previous question answer is its activator
					// And Displays correct Question
					props.list.find((x) => x.question === object.parentQuestion)
						.selectedanswer === object.activatorAnswer) && (
					<div key={object.id}>
						<p className="question-text">{object.question}</p>
						<div className="answer-container">
							{object.answers.map(function (ans) {
								if (ans.type === "radio") {
									return (
										<div className="answer-wrap">
											<input
												type="radio"
												name={object.question}
												value={ans.option}
												onChange={(e) =>
													props.handleAnswer(e.target.value, object.question)
												} required></input>
											<label className="answer-text">{ans.option}</label>
										</div>
									)
								} else if (ans.type === "date") {
									return (
										<div className="answer-wrap">
											<input
												type="date"
												name={object.question}
												placeholder={ans.placeholder} //Does't display
												required
											></input>
										</div>
									)
								} else {
									return (
										<div className="answer-wrap">
											<input
												type="number"
												name={object.question}
												placeholder={ans.placeholder}
												required></input>
										</div>
									)
								}
							})}
						</div>
					</div>
				)
		)}
	</div>
)
