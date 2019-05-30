import React from "react";
import { Button, Container } from 'react-bootstrap';
import axios from'axios';

import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    name: state.name
  };
}

class App extends React.Component {

	//state = { name: 'React here!' }

	async handleBtn(e) {

		const {data} = await axios.get('http://localhost:8080/about');
	    
		//this.setState( { name: data } );
		this.props.dispatch( { type: 'CNGE_NAME', payload: data } );
	}

	render() {
	  return (
	    <Container >
	      <h3 className='text-center'>{this.props.name}</h3>
	      <Button variant="primary"
	      	onClick = { (e) => { this.handleBtn(e) } }
	      >AXIO get</Button>

	    </Container>
	  	);
	  }
};

export default connect(mapStateToProps)(App);

