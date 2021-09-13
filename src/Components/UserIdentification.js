import React, { Component } from "react"
import Header from "./Header"

export default class UserIdentification extends Component {
	state = {
		firstName: "",
		lastName: "",
		email: "",
		firstNameError: true,
		lastNameError: true,
		emailError: true,
		isClicked: false,
	}

	validateName = (name) => {
		const nameReg = new RegExp("^[a-zA-Zა-ჰ]+$")
		return name.length >= 3 && name.length <= 255 && nameReg.test(name)
	}

	validateEmail = (email) => {
		let emailReg = new RegExp(".+@redberry.ge")
		return emailReg.test(email)
	}

	// Handle Field Change
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			//nameError: e.target.value.length < 3
			[`${e.target.name}Error`]:
				e.target.name === "firstName" || e.target.name === "lastName"
					? this.validateName(e.target.value)
					: this.validateEmail(e.target.value),
		})
	}

	//თუ NEXT ღილაკზე დაწკაპებულია ამოწმებს
	// checkForNameError = (name) => {
	// 	const nameReg = new RegExp("^[a-zA-Zა-ჰ]+$");
	// 	if (name.length < 3) {
	// 		console.log('Name Length Error');
	// 	} else if (!nameReg.test(name)) {
	// 		console.log("Name Validation Error")
	// 	}
	// }

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
						{!this.state.firstNameError && <p className='error-message'>Name Error</p>}
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
						{/* {!this.state.lastNameError && <p className='error-message'>Last Name Error</p>} */}
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
						{/* {!this.state.emailError && <p className='error-message'>Email Error</p>} */}
					</div>
				</form>
				<hr className="form-line"></hr>
				<div className="text-required">
					*-ით მონიშნული ველების შევსება სავალდებულოა
				</div>
				<div className="scan-logo-container scan"></div>
				<div className="scan-image-container scan2"></div>
				<button
					className="next-btn"
					disabled={
						!this.state.firstName || !this.state.lastName || !this.state.email
					}
					onClick={this.props.handleClick}></button>
			</>
		)
	}
}
