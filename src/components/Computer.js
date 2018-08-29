import React from 'react';
import { Component } from 'react';

export default class Computer extends Component {
	state = {
		ddos : []
	};

	clickHandler (e) {
		fetch('http://localhost:8000/ddos-service/delete-item', {
			method : 'POST',
			body : e.currentTarget.dataset.id,
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(response => alert("The computer has been deleted from the list"));

		window.location.href = "/";
	}

	componentDidMount() {
		fetch('http://localhost:8000/ddos-service/display-items')
		.then(results => {
			return results.json();
		})
		.then(data => {
				this.setState({ddos : data});
		});
	}
	render() {
			if (this.state.ddos.length === 0){
				return(
					<div>
						At the moment there are no computers
					</div>
				)
			}else{
				return(
				<div>
				{this.state.ddos.map(computer =>
					<div className="card mb-4 box-shadow" key={computer.id}>
						<div className="card-header">
							<h4 className="my-0 font-weight-normal text-center">{computer.name}</h4>
						</div>
						<div className="card-body">
							<ul className="list-unstyled mt-3 mb-4">
									<li>IP address:{computer.ipAddress}</li>
									<li>MAC address: {computer.macAddress}</li>
									<li>Date when added: {computer.dateAdded}</li>
									<li>Location of the computer when added: {computer.location}</li>
							</ul>
							<button type="button" data-id={computer.id} onClick={this.clickHandler.bind(this)} className="btn btn-lg btn-block btn-outline-danger">Remove computer: {computer.name}</button>
						</div>
					</div>
				)}
				</div>
        )
			}
    }
}
