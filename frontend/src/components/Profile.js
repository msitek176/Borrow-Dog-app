import React, {Component} from 'react';
import {Button, Col, Container, Image, Jumbotron, Row, Card, Table, Carousel} from "react-bootstrap";


export default class Profile extends Component{
    render(){
        return(
            <Container>

                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 slider"
                            src="slider.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="slider.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="slider.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Jumbotron className="content">
                    <Container>
                        <h1>Imie</h1>
                    </Container>
                </Jumbotron>
                <Card className="border border-light bg-white text-black">
                    <Card.Header>Your advertisements</Card.Header>
                    <Card.Body>
                        <Table border hover striped varient="light">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Day & hour</th>
                                <th>Reserved by</th>
                                <th>Note</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr align="center">
                                <td colSpan="6">No advertisement available</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}
