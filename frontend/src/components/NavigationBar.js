import React, {Component} from 'react';
import '../styles/App.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";


export default class NavigationBar extends Component{
    render(){

        let button;
        if(this.props.user)
            // eslint-disable-next-line no-restricted-globals
        { button = ( <Link to={'/'} onClick = {() => {localStorage.clear(); location.reload();window.location.assign("/")}} className="nav-link logout"><FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon></Link>)
        }else{
            button = null
        }
        return (
            <Navbar className="nav" variant="dark" expand="lg">
                <Navbar.Brand href="/"> <img src="logoapp.png" alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav-width">
                    <Link to={""} className="nav-link">Home</Link>
                    <Link to={"profile"} className="nav-link">Profile</Link>
                    <Link to={"lent"} className="nav-link">Lent</Link>
                    <Link to={"borrow"} className="nav-link">Borrow</Link>
                    <Link to={"dogs"} className="nav-link">Dogs</Link>
                    {button}
                </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

