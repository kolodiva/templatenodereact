import React from "react";
import { Button, Container, Navbar, Nav, NavDropdown, Image   } from 'react-bootstrap';
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

		const {data} = await axios.get('https://kolodiva.com/about');
	    
		//this.setState( { name: data } );
		this.props.dispatch( { type: 'CNGE_NAME', payload: data } );
	}

	render() {
	  return (

	  	<div style={{ height: '100vh', width: '100vw', backgroundColor: '#00aec6'}}>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Brand href="#home">Vittorio&Glebbo</Navbar.Brand>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Новости</Nav.Link>
      <Nav.Link href="#features">О компании</Nav.Link>
      <Nav.Link href="#pricing">Номенклатура</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<div style={{textAlign: 'center', lineHeight: '70vh'}}>
	<Image src="/public/zamok_138.jpg" fluid />
</div>

<a href ='https://newfurnitura.ru/catalog/zamki' ><h2 style={{ textAlign: 'center', color: 'white' }}>Знаменитый замок 138</h2></a>

</div>

	);
	 }
};

export default connect(mapStateToProps)(App);

