import React, {Component} from 'react';
import {Form, Col} from "react-bootstrap";
import "../styles/Register.css";
import axios from 'axios';
import {Link} from "react-router-dom";

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
                localStorage.setItem('roles',res.data.roles[0]);
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

       setTimeout(
            () => this.setState(
                // eslint-disable-next-line no-restricted-globals
                location.reload()
                ),
            1000
        )
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

                    <button className="myButton">Log in</button>

                </Form>
                <h4 className="text-white mb-0">or</h4>
                <Link to={"register"}  ><button className="myButton " >Sign up</button></Link>

            </Col>
        );
    }
}