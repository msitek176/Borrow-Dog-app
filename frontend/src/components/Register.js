import React, {Component} from 'react';
import {Jumbotron, Col, Container, Image, Row, Button, Card, Form} from "react-bootstrap";
import "../styles/Register.css";

export default class Register extends Component{
    render(){
        return(
            <Col md={5} className="m-auto">
                <Form className="register-form">

                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group  controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>


                    <Form.Group controlId="formGridNameandSurname">
                        <Form.Label>Name and Surname</Form.Label>
                        <Form.Control placeholder="Name and Surname" />
                    </Form.Group>

                    <Form.Group controlId="formGridphone">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control placeholder="+48 123 456 789" />
                    </Form.Group>


                    <Button variant="warning">Sign up</Button>
                </Form>
            </Col>
        );
    }
}
