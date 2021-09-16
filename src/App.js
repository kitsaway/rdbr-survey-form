import './App.css';
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import StarterPage from "./Components/StarterPage"
import UserForm from "./Components/UserForm"
import CovidForm from "./Components/CovidForm"
import VaccineForm from './Components/VaccineForm';
import UserAdviceForm from './Components/UserAdviceForm';
import SuccessPage from './Components/SuccessPage';

function App() {
  return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={StarterPage}></Route>
					<Route path="/user-identification/:page" component={UserForm}></Route>
					<Route path="/covid-form/:page" component={CovidForm}></Route>
					<Route path="/vaccine-form/:page" component={VaccineForm}></Route>
					<Route path="/user-advice-form/:page" component={UserAdviceForm}></Route>
					<Route path="/success-page" component={SuccessPage}></Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App;
