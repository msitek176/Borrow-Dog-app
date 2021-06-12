import React, {Component} from 'react';
import '../styles/App.css';
import {Card, Form, Col, Modal, Button} from 'react-bootstrap';
import axios from "axios";
import {Redirect} from "react-router";

export default class Lent extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", this.photo.files[0]);

        axios.post('api/uploads', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )

        const data = {
            email: localStorage.getItem("email"),
            dogName: this.dogName,
            breed: this.breed,
            description: this.description,
            city: this.city,
            voivodeship: this.voivodeship,
            street: this.street,
            from: this.from,
            to: this.to,
            photo: this.photo.files[0].name
        }

        axios.post('api/advertisements', data).then(
            res => {
                console.log(res);
                alert('Advertisement added successfully!');
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
        document.getElementById("advertisementForm").reset();
        document.getElementById("dataForm").reset();
    }

    render() {

        if (this.props.user) {
            let currentDate=new Date().toISOString().split("T")
            currentDate = currentDate[0] + 'T' + currentDate[1].split(':')[0] + ':' + currentDate[1].split(':')[1]
            return (
                <Card className="form" >
                    <Card.Header>Add advertisement</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit} id ="advertisementForm">
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Dog name</Form.Label>
                                    <Form.Control placeholder="Enter dog name"
                                                  onChange={e => this.dogName = e.target.value} required/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridBreed">
                                    <Form.Label>Breed of dog</Form.Label>
                                    <Form.Control placeholder="Enter breed of your dog"
                                                  onChange={e => this.breed = e.target.value} required/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control placeholder="About your pupil"
                                              onChange={e => this.description = e.target.value} required/>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control onChange={e => this.city = e.target.value} required/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Voivodeship/State</Form.Label>
                                    <Form.Control
                                        onChange={e => this.voivodeship = e.target.value} required>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridStreet">
                                    <Form.Label>Street</Form.Label>
                                    <Form.Control
                                        onChange={e => this.street = e.target.value} required/>
                                </Form.Group>
                            </Form.Row>

                            <form className="gap" id="dataForm">
                                <div className="container mb-4">
                                    <div className="row d-flex justify-content-center mb-3 ">
                                        <div className="container">
                                            <div className="row d-flex justify-content-center">
                                                <label htmlFor="from">From</label>

                                            </div>
                                            <div className="row d-flex justify-content-center">
                                                <input id="from" className="form-border col-md-4" type="datetime-local" min={currentDate}
                                                       onChange={e => this.from = e.target.value} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <div className="container">
                                            <div className="row d-flex justify-content-center">
                                                <label htmlFor="to">To</label>
                                            </div>
                                            <div className="row d-flex justify-content-center">
                                                <input id="to" className="form-border col-md-4" type="datetime-local" min = {currentDate}
                                                       onChange={e => this.to = e.target.value} required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>

                            <div className="col-md-12 col-md-offset-3 mb-3">
                                <Form.File id="formcheck-api-regular">
                                    <Form.File.Label>Put here photo of your dog</Form.File.Label>
                                    <div className="form-border">
                                        <Form.File.Input
                                            onChange={e => this.photo = e.target} required/>
                                    </div>
                                </Form.File>
                            </div>

                            <button variant="outline-warning" className="myButton">Submit</button>

                        </Form>
                    </Card.Body>
                </Card>
            );

        } else {
            return (
                <Redirect to="/"/>
            )
        }
    }
}