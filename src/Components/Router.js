import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import StarterPage from './StarterPage'
import UserForm from './UserForm'
import CovidForm from './CovidForm'

export default function Routes() {
    return (
			<Router>
				<Switch>
					<Route exact path="/" component={StarterPage}></Route>
					<Route path="/user-identification/:page" component={UserForm}></Route>
					<Route path="/covid-form/:page" component={CovidForm}></Route>
				</Switch>
			</Router>
		)
}
