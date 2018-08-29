import React, { Component } from 'react';
import './../css/bootstrap-4.1.0/bootstrap.min.css';
import Computer from './Computer.js';
import Footer from './Footer.js';

class DisplayComputers extends Component {
	render() {
		return (
		<div>
    	<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      		<h5 className="my-0 mr-md-auto font-weight-normal">DDOS Collector</h5>
      		<nav className="my-2 my-md-0 mr-md-3">
        			<a className="p-2 text-dark" href="/add-computer">Add a computer</a>
        			<a className="p-2 text-dark" href="">Support</a>
        			<a className="p-2 text-dark" href="">Pricing</a>
      		</nav>
      		<a className="btn btn-outline-primary" href="">Sign up</a>
    	</div>
    	<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      		<h1 className="display-4">DDOS Computer list</h1>
      		<p className="lead">A list of computers on the DDOS list.</p>
    	</div>

    	<div className="container">
      		<div className="card-deck mb-3">
        		<Computer/>
      		</div>

      <Footer/>

    	</div>
    </div>
    );
	}
}

export default DisplayComputers;
