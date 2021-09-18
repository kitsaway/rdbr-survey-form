import React, { Component } from "react"

// აქ მჭირდება აუცილებელი ველების შევსების ვალიდაცია

export default class VaccineQuestions extends Component {
	state = {
		list: [
			{
				default: true,
				id: "general-question-vaccine",
				isDisplayed: true,
				question: "უკვე გაკეთებული გაქვს ვაქცინა?*",
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
				],
			},
			{
				id: "additional-question-stage",
				isDisplayed: false,
				question: "აირჩიე რა ეტაპზე ხარ*",
				selectedanswer: null,
				parentQuestion: "უკვე გაკეთებული გაქვს ვაქცინა?*",
				activatorAnswer: "კი",
				answers: [
					{
						option: "პირველი დოზა და დარეგისტრირებული ვარ მეორეზე",
						type: "radio",
					},
					{
						option: "სრულად ვარ აცრილი",
						type: "radio",
					},
					{
						option: "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე",
						type: "radio"
					},
				],
			},
			{
				id: "additional-question-wait",
				isDisplayed: false,
				question: "რას ელოდები?*",
				selectedanswer: null,
				parentQuestion: "უკვე გაკეთებული გაქვს ვაქცინა?*",
				activatorAnswer: "არა",
				answers: [
					{
						option: "დარეგისტრირებული ვარ და ველოდები თარიღს",
						type: "radio",
					},
					{
						option: "არ ვგეგმავ",
						type: "radio"
					},
					{
						option: "გადატანილი მაქვს და ვგეგმავ აცრას",

						type: "radio"
					},
				],
			},
		],
	}

	handleAnswer = (value, question) => {
		let list = [...this.state.list]
		const index = list.findIndex((x) => x.question === question) // მოქმედი კითხვა
		const newList = list.slice(index)
		newList.map((listItem) => (listItem.selectedanswer = null)) //  ვშლი არჩეულ პასუხს
		list[index].selectedanswer = value // ვანიჭებ ახალ პასუხს
		this.setState({
			list: list,
		})
	}

	render() {
		return (
			<div className="questions-form">
				<Question list={this.state.list} handleAnswer={this.handleAnswer} />
			</div>
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
								if (
								
									object.selectedanswer ===
										"პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
								) {
									return (
										<div className="answer-wrap">
											<input
												type="radio"
												name={object.question}
												value={ans.option}
												onChange={(e) =>
													props.handleAnswer(e.target.value, object.question)
												}></input>
											<label className="answer-text">{ans.option}</label>
											<p className="additional-text">
												რომ აღარ გადადო, <br /> ბარემ ახლავე დარეგისტრირდი -
												<a
													className="additional-link"
													href="https://booking.moh.gov.ge/"
													rel="noreferrer"
													target="_blank">
													https://booking.moh.gov.ge/
												</a>
											</p>
										</div>
									)
								} else if (
									object.selectedanswer === "არ ვგეგმავ"
								) {
									return (
										<div className="answer-wrap">
											<input
												type="radio"
												name={object.question}
												value={ans.option}
												onChange={(e) =>
													props.handleAnswer(e.target.value, object.question)
												}
												required></input>
											<label className="answer-text">{ans.option}</label>
											<p className="additional-text"><a
												className="additional-link"
												href="https://booking.moh.gov.ge/"
												rel="noreferrer"
												target="_blank">
												👉 https://booking.moh.gov.ge/
											</a>
											</p>
										</div>
									)
								} else if (
									object.selectedanswer === "გადატანილი მაქვს და ვგეგმავ აცრას"
								) {
									return (
										<div className="answer-wrap">
											<input
												type="radio"
												name={object.question}
												value={ans.option}
												onChange={(e) =>
													props.handleAnswer(e.target.value, object.question)
												}
												required></input>
											<label className="answer-text">{ans.option}</label>
											<p className="additional-text">
												ახალი პროტოკოლით, კოვიდის გადატანიდან 1 თვის შემდეგ
												შეგიძლიათ ვაქცინის გაკეთება. <br /><br/> 👉 რეგისტრაციის ბმული <br/> 
												<a
													className="additional-link"
													href="https://booking.moh.gov.ge/"
													rel="noreferrer"
													target="_blank">
													https://booking.moh.gov.ge/
												</a>
											</p>
										</div>
									)
								} else {
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
								}
							})}
						</div>
					</div>
				)
		)}
	</div>
)
