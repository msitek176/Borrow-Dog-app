import React, {Component} from 'react';
import { Col, Form} from "react-bootstrap";
import "../styles/Register.css";
import axios from 'axios';
import {Link} from "react-router-dom";

export default class Register extends Component{

    handleSubmit = e =>{
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password,
            confirmedPassword: this.confirmedPassword,
            name: this.name,
            surname: this.surname,
            phoneNumber: this.phoneNumber


        }
        axios.post('api/auth/signup',data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
        window.location.assign("/login");
    }

    render(){
        return(
            <Col md={5} className="m-auto">
                <Form onSubmit={this.handleSubmit} className="register-form">

                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                              onChange={e => this.email = e.target.value} required/>
                    </Form.Group>

                    <Form.Group  controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                              onChange={e => this.password = e.target.value} required/>
                    </Form.Group>

                    <Form.Group  controlId="formGridPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password"
                              onChange={e => this.confirmedPassword = e.target.value} required/>
                    </Form.Group>

                    <Form.Group controlId="formGridNameandSurname">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Name"
                            onChange={e => this.name = e.target.value} required/>
                    </Form.Group>

                    <Form.Group controlId="formGridNameandSurname">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control placeholder="Surname"
                              onChange={e => this.surname = e.target.value} required/>
                    </Form.Group>

                    <Form.Group controlId="formGridphone">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control placeholder="+48 123 456 789"
                              onChange={e => this.phoneNumber = e.target.value} required/>
                    </Form.Group>

                    <button className="myButton">Sign up</button>
                </Form>
                    <h4 className="text-white mb-0">or</h4>
                <Link to={"login"} className="text-dark " ><button className="myButton" >Sign in</button></Link>

            </Col>
        );
    }
}
