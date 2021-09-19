import React, { Component } from "react"

export default class AdviceQuestions extends Component {
	state = {
		list: [
			{
				id: "online-meetings",
				question:
					"რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*",
				selectedanswer: null,
				isChecked: false,
				answers: [
					{
						option: "კვირაში ორჯერ",
						type: "radio",
					},
					{
						option: "კვირაში ერთხელ",
						type: "radio",
					},
					{
						option: "ორ კვირაში ერთხელ",
						type: "radio",
					},
					{
						option: "თვეში ერთხელ",
						type: "radio",
					},
				],
			},
			{
				id: "working-from-office",
				question: "კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*",
				selectedanswer: null,
				isChecked: false,
				answers: [
					{
						option: "0",
						type: "radio",
					},
					{
						option: "1",
						type: "radio",
					},
					{
						option: "2",
						type: "radio",
					},
					{
						option: "3",
						type: "radio",
					},
					{
						option: "4",
						type: "radio",
					},
					{
						option: "5",
						type: "radio",
					},
				],
			},
			{
				id: "opinion-about-meetings",
				question: "რას ფიქრობ ფიზიკურ შეკრებებზე?*",
				selectedanswer: null,
				isChecked: false,
				answers: [
					{
						type: "textarea",
					},
				],
			},
			{
				id: "opinion-about-environment",
				question:
					"რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?*",
				selectedanswer: null,
				isChecked: false,
				answers: [
					{
						type: "textarea",
					},
				],
			},
		],
	}

	handleAnswer = (value, question, checked) => {
		let newList = [...this.state.list]
		newList[newList.findIndex((x) => x.question === question)].selectedanswer =
			value
		this.setState({
			list: newList,
		})
	}

	render() {
		return (
			<form className="questions-form">
				<p className="form-pretext">
					რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
					რომელსაც ჩვენი თანამშრომლები ქმნით ბევრისთვის არის და ყოფილა წლების
					განმავლობაში ერთად მიზნებისთვის ბრძოლის მიზეზი, ბევრისთვის კი -
					ჩვენთან გადმოსვლის. <br />
					<br /> პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
					ყოველდღიური კომუნიკაციაც გაიშვიათდა.
				</p>
				<Question
					list={this.state.list}
					handleAnswer={this.handleAnswer}
				/>
				<button
					type="submit"
					className="submit-btn"
					onClick={this.props.handleSubmit}>
					დასრულება
				</button>
			</form>
		)
	}
}

const Question = (props) => (
	<div className="question-container">
		{props.list.map((object) => (
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
						} else {
							return (
								<div className="answer-wrap">
									<textarea
										onChange={(e) =>
											props.handleAnswer(e.target.value, object.question)
										}></textarea>
								</div>
							)
						}
					})}
				</div>
			</div>
		))}
	</div>
)
