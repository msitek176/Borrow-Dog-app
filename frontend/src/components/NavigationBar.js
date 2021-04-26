import React, {Component} from 'react';
import '../styles/App.css';
import {Navbar, Nav, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";


export default class NavigationBar extends Component{
    render(){

        let button;
        if(this.props.user)
        { button = ( <Link to={'/'} onClick = {() => localStorage.clear()} className="nav-link logout"><FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon></Link>)
        }else{
            button = null
        }
        return (
            <Navbar className="nav" variant="dark">
                <Link to={""} className="navbar-brand">
                    <img src="logoapp.png" alt="logo"/>
                </Link>
                <Nav className="mr-auto nav-width">
                    <Link to={""} className="nav-link">Home</Link>
                    <Link to={"profile"} className="nav-link">Profile</Link>
                    <Link to={"lent"} className="nav-link">Lent</Link>
                    <Link to={"borrow"} className="nav-link">Borrow</Link>
                    <Link to={"dogs"} className="nav-link">Dogs</Link>
                    {button}
                </Nav>
            </Navbar>

        );
    }
}

