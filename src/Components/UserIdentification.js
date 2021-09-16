import React, { Component } from "react"
import Header from "./Header"

export default class UserIdentification extends Component {
	state = {
		firstName: "",
		lastName: "",
		email: "",
		firstNameError: false,
		lastNameError: false,
		emailError: false,
		firstNameErrorMessage: "",
		lastNameErrorMessage: "",
		emailErrorMessage: "",
	}

	// Validation for Name and Lastname is the same
	validateName = (name, nameOrLname) => {
		const nameReg = new RegExp("^[a-zA-Zა-ჰ]+$")
		let nameErrorMessage
		nameErrorMessage =
			name.length <= 3
				? "*სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან"
				: name.length > 255
				? "*სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან"
				: ""
		nameErrorMessage += !nameReg.test(name)
			? " *სახელის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)"
			: ""
		this.setState({
			[`${nameOrLname}ErrorMessage`]: nameErrorMessage,
		})
		return name.length >= 3 && name.length <= 255 && nameReg.test(name)
	}

	validateEmail = (email) => {
		let emailReg = new RegExp(".+@redberry.ge")
		let emailErrorMessage
		emailErrorMessage = !email.includes("@")
			? "*თქვენს მიერ შეყვანილი მეილი არასწორია"
			: !emailReg.testEmail
			? "*გთხოვთ დარეგისტრირდეთ რედბერის მეილით (youremail@redberry.ge)"
			: ""
    this.setState({
      emailErrorMessage: emailErrorMessage
    })
		return emailReg.test(email)
	}

	// Handle Input Field Change
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}
	// Update State if inputs are invalid
	// If inputs are valid, change route
	handleButtonClicked = () => {
		const isFirstNameValid = this.validateName(
			this.state.firstName,
			"firstName"
		)
		const isLastNameValid = this.validateName(this.state.lastName, "lastName")
		const isEmailValid = this.validateEmail(this.state.email)

		this.setState({
			firstNameError: isFirstNameValid,
			lastNameError: isLastNameValid,
			emailError: isEmailValid,
		})

		isFirstNameValid &&
			isLastNameValid &&
			isEmailValid &&
			this.props.handleClick()
	}

	render() {
		return (
			<>
				<Header />
				<form className="user-ident-form">
					<div className="input-container">
						<label htmlFor="firstName">სახელი*</label>
						<input
							id="firstName"
							type="text"
							name="firstName"
							placeholder="იოსებ"
							onChange={this.handleChange}
							value={this.state.firstName}
						/>
						{!this.state.firstNameError && (
							<p className="error-message">
								{this.state.firstNameErrorMessage}
							</p>
						)}
					</div>
					<div className="input-container">
						<label htmlFor="lastName">გვარი*</label>
						<input
							id="lastName"
							type="text"
							name="lastName"
							placeholder="ჯუღაშვილი"
							onChange={this.handleChange}
							value={this.state.lastName}
						/>
						{!this.state.lastNameError && (
							<p className="error-message">{this.state.lastNameErrorMessage}</p>
						)}
					</div>
					<div className="input-container">
						<label htmlFor="email">მეილი*</label>
						<input
							id="email"
							type="email"
							name="email"
							placeholder="fbi@redberry.ge"
							onChange={this.handleChange}
							value={this.state.email}
						/>
						{!this.state.emailError && (
							<p className="error-message">{this.state.emailErrorMessage}</p>
						)}
					</div>
				</form>
				<hr className="form-line"></hr>
				<div className="text-required">
					*-ით მონიშნული ველების შევსება სავალდებულოა
				</div>
				<button
					className="next-btn"
					disabled={
						!this.state.firstName || !this.state.lastName || !this.state.email
					}
					onClick={this.handleButtonClicked}></button>
			</>
		)
	}
}
