import React, {Component} from 'react';
import {Button, Form, Col} from "react-bootstrap";
import "../styles/Register.css";


export default class Login extends Component{
    render(){
        return(
            <Col md={4} className="m-auto">
                <Form className="register-form">

                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group  controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="warning">Sign up</Button>

                </Form>
            </Col>
        );
    }
}