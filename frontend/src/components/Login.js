import React, {Component} from 'react';
import {Button, Form, Col} from "react-bootstrap";
import "../styles/Register.css";
import axios from 'axios';

export default class Login extends Component{

    handleSubmit = e =>{
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        }

        axios.post('api/auth/signin',data)
            .then(res =>{
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('email',res.data.email);
                localStorage.setItem('id',res.data.id);
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    };

    render(){
        return(
            <Col md={4} className="m-auto">
                <Form onSubmit={this.handleSubmit} className="register-form">

                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={e => this.email = e.target.value}/>
                    </Form.Group>

                    <Form.Group  controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={e => this.password = e.target.value}/>
                    </Form.Group>

                    <button variant="warning">Log in</button>

                </Form>
            </Col>
        );
    }
}