import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DisplayComputer from './DisplayComputers.js';
import AddComputer from './AddComputer.js';
import Error from './Error.js';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={DisplayComputer} />
					<Route path="/add-computer" component={AddComputer} />
					<Route exact component={Error} />
				</Switch>
			</Router>
    );
	}
}
export default App;
