import React, {Component} from 'react';
import '../styles/App.css';


import {Card, Form, Button, Col, Row, CardColumns} from 'react-bootstrap';

export default class Lent extends Component{
    render(){
        return(
            <Card className="form">
                <Card.Header>Add advertisement</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Dog name</Form.Label>
                                <Form.Control  placeholder="Enter dog name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridBreed">
                                <Form.Label>Breed of dog</Form.Label>
                                <Form.Control placeholder="Enter breed of your dog" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control placeholder="About your pupil" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Voivodeship</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridStreet">
                                <Form.Label>Street</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <form className="gap">
                            <label for="from">From</label>

                            <input id="from" className="form-border" type="datetime-local"/>
                            <label for="to">To</label>
                            <input id="to" className="form-border" type="datetime-local"/>
                        </form>

                        <div className="col-md-12 col-md-offset-3" >
                            <Form.File id="formcheck-api-regular">
                                <Form.File.Label>Put here photo of your dog</Form.File.Label>
                                <div className="form-border">
                                <Form.File.Input />
                                </div>
                            </Form.File>
                        </div>

                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={12}>
                                    Choose type of lent
                                </Form.Label>
                                <Col sm={12}>
                                    <Form.Check
                                        type="radio"
                                        label="For free"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Earn"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Pay"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <Button variant="outline-warning">Submit</Button>{' '}

                    </Form>
                </Card.Body>
            </Card>
        );
    }
}
