import React from 'react';
import { Component } from 'react';

class Error extends Component {
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
          <h1 className="display-4">Error: Page deos not exist!</h1>
        </div>
      </div>
    )
  }
}

export default Error;
