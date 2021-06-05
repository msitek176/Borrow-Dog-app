import React, {Component} from 'react';
import '../styles/App.css';
import {Card, Form, Button, Col} from 'react-bootstrap';
import axios from "axios";

export default class Lent extends Component{

    handleSubmit = e =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("file",this.photo.files[0]);

        console.log("photo: ", formData)

        axios.post('api/uploads',formData, {
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
        console.log(data)
        axios.post('api/advertisements',data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }

    render(){
        return(
            <Card className="form">
                <Card.Header>Add advertisement</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Dog name</Form.Label>
                                <Form.Control  placeholder="Enter dog name"
                                       onChange={e => this.dogName = e.target.value}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridBreed">
                                <Form.Label>Breed of dog</Form.Label>
                                <Form.Control placeholder="Enter breed of your dog"
                                      onChange={e => this.breed = e.target.value}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control placeholder="About your pupil"
                                      onChange={e => this.description = e.target.value}/>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control onChange={e => this.city = e.target.value}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Voivodeship/State</Form.Label>
                                <Form.Control
                                      onChange={e => this.voivodeship = e.target.value}>
                                </Form.Control >
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridStreet">
                                <Form.Label>Street</Form.Label>
                                <Form.Control
                                    onChange={e => this.street = e.target.value}/>
                            </Form.Group>
                        </Form.Row>

                        <form className="gap">
                            <label for="from">From</label>

                            <input id="from" className="form-border" type="datetime-local"
                                   onChange={e => this.from = e.target.value}/>
                            <label for="to">To</label>
                            <input id="to" className="form-border" type="datetime-local"
                                   onChange={e => this.to = e.target.value}/>
                        </form>

                        <div className="col-md-12 col-md-offset-3 mb-3" >
                            <Form.File id="formcheck-api-regular">
                                <Form.File.Label>Put here photo of your dog</Form.File.Label>
                                <div className="form-border">
                                <Form.File.Input
                                    onChange={e => this.photo = e.target}/>
                                </div>
                            </Form.File>
                        </div>

                        <button variant="outline-warning">Submit</button>{' '}

                    </Form>
                </Card.Body>
            </Card>
        );
    }
}
