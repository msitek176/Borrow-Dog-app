import React, {Component} from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import '../styles/Borrow.css';

export default class BorrowAdvertisement extends Component{
    render(){
        return(
            <Card className="advertisement" >
                <Row >
                    <Col md={3}>
                        <Card.Img variant="top" src="golden.jpg" />
                    </Col>
                    <Col md={9}>
                        <Card.Body >
                            <Row>
                                <Col md={8}>
                                    <Row>
                                        <Card.Title>Name of dog, </Card.Title>
                                        <Card.Title>Breed</Card.Title>
                                    </Row>
                                    <Row>
                                        <Card.Text>
                                            Description about dog, habits, age, what dog eats.
                                        </Card.Text>
                                    </Row>
                                    <Row>
                                        <Card.Text>
                                            Location
                                        </Card.Text>
                                    </Row>
                                    <Row>
                                        <Card.Text>
                                            Date and Time
                                        </Card.Text>
                                    </Row>
                                </Col>
                                <Col md={4}>
                                    <Card.Text>
                                        Type of lent -> For free/Earn/Pay
                                    </Card.Text>
                                    <Button variant="warning">Reserve</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        );
    }
}
