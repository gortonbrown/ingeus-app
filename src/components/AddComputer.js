import React, { Component} from 'react';
import './../css/bootstrap-4.1.0/bootstrap.min.css';
import Footer from './Footer.js';

class AddComputer extends Component {

	handleOnSubmit(e) {
			var computer = {
				name : this.refs.name.value,
				ipAddress : this.refs.ipAdd.value,
				macAddress : this.refs.macAdd.value,
				dateAdded : this.refs.date.value,
				location : this.refs.location.value
			}

			fetch('http://localhost:8000/ddos-service/add-item', {
      	method : 'POST',
				body : JSON.stringify(computer),
				headers:{
			    'Content-Type': 'application/json'
			  }
	    })
			.then(response => alert("The computer has been added to the list"))
			.catch(error => alert("We were not able to add the computer to the list. Please try again."));
	}

	render() {
		return (
	<div>
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">DDOS Collector</h5>
      	<nav className="my-2 my-md-0 mr-md-3">
        		<a className="p-2 text-dark" href="/" >Display list of computers</a>
        		<a className="p-2 text-dark" href="">Support</a>
        		<a className="p-2 text-dark" href="">Pricing</a>
      	</nav>
      	<a className="btn btn-outline-primary" href="">Sign up</a>
    </div>

    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Add a Computer</h1>
      <p className="lead">Add a computer to the DDOS list.</p>
    </div>

    <div className="container">
      	<form onSubmit={this.handleOnSubmit.bind(this)}>
			<div className="form-group">
       			<label>DDOS Name</label><br/>
           		<input className="my-0 font-weight-normal col-5" type="text" ref="name" required />
            </div>

			<div className="form-group">
            	<label>IP address</label><br/>
            	<input className="my-0 font-weight-normal col-5"  type="text" ref="ipAdd" required/>
            </div>

			<div className="form-group">
            	<label>MAC address</label><br/>
            	<input className="my-0 font-weight-normal col-5"  type="text" ref="macAdd" required/>
            </div>

			<div className="form-group">
            	<label>Date</label><br/>
            	<input className="my-0 font-weight-normal col-5"  type="text" ref="date" required/>
            </div>

			<div className="form-group">
            	<label>Computer location</label><br/>
            	<input className="my-0 font-weight-normal col-5"  type="text" ref="location"/>
            </div>

            <button type="submit" className="btn btn-info" value="submit">Submit</button>
        </form>

        <Footer/>
      </div>
    </div>
    )
}
}

export default AddComputer;
