import React, {Component} from 'react';
import {Button, Col, Container, Image, Jumbotron, Row, Card, Table, Carousel} from "react-bootstrap";
import axios from "axios";

export default class Profile extends Component{
    state={};

    delete = (e) => {
        const id = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
        console.log(id);
        axios.delete(`http://localhost:9000/api/advertisement/${id}`).then(
            res => {
                console.log("USUNIETE")
            },
            err =>{
                console.log(err)
            }
        );

    }

    cancel = (e) => {
        const id = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
        console.log(id);
        axios.delete(`http://localhost:9000/api/my_reservations/${id}`).then(
            res => {
                console.log(res)
            },
            err =>{
                console.log(err)
            }
        );

    }

    componentDidMount = () => {
        console.log("ID",localStorage.getItem("id"))
        const id = localStorage.getItem("id")
        axios.get(`api/advertisements/${id}`).then(
            res => {
                this.setState({
                    advertisements:res.data
                });
                console.log(this.state.advertisements);
            },
            err => {
                console.log(err)
            }
        );

        axios.get(`api/my_reservations/${id}`).then(
            res => {
                this.setState({
                    reservations:res.data
                });
                console.log("ZAREZEROWANE",this.state.reservations);
            },
            err => {
                console.log(err)
            }
        );
    }
    renderReservation = () => {
        if(this.state.reservations !== undefined){
            return this.state.reservations.map((reservation)=>
            {
                let who = reservation.advertisement.users.email;
                let start = reservation.start.replace('T',', ');
                let stop = reservation.stop.replace('T',', ');
                let imageURL= './uploads/'+reservation.image;
                return (
                    <>
                        <Card className="advertisement" id={reservation.advertisement.id_advertisement}>
                            <Row >
                                <Col md={3}>
                                    <div className="overflow">
                                        <Card.Img variant="top" src={imageURL} height={"190em"}  className="img-scale"/>
                                    </div>
                                </Col>
                                <Col md={9}>
                                    <Card.Body >
                                        <Row>
                                            <Col md={8}>
                                                <Row>
                                                    <Card.Title>{reservation.dog_name}, {reservation.breed}</Card.Title>
                                                </Row>
                                                <Row>
                                                    <Card.Text>
                                                        {reservation.description}
                                                    </Card.Text>
                                                </Row>
                                                <Row>
                                                    <Card.Text>
                                                        {reservation.voivodeship}, {reservation.city}, {reservation.street}
                                                    </Card.Text>
                                                </Row>
                                                <Row>
                                                    <Card.Text>
                                                        From: {start}
                                                    </Card.Text>
                                                </Row>
                                                <Row>
                                                    <Card.Text>
                                                        To: {stop}
                                                    </Card.Text>
                                                </Row>
                                                <Row>
                                                    <Card.Text>
                                                        Owner: {who}
                                                    </Card.Text>
                                                </Row>
                                            </Col>
                                            <Col md={4} >
                                                <Container>
                                                    <Row>
                                                        <Button variant="outline-danger" className="mb-3"
                                                                onClick={e => this.cancel(e)}>
                                                            Cancel
                                                        </Button>
                                                    </Row>
                                                </Container>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </>

                )
            })
        }


    }


    renderAdvertisement = () => {
        if(this.state.advertisements !== undefined){
            return this.state.advertisements.map((advertisement)=>
            {
                let who = ""
                let start = advertisement.start.replace('T',', ');
                let stop = advertisement.stop.replace('T',', ');
                let imageURL= './uploads/'+advertisement.image;
                if(advertisement.advertisement.reservation !== null){
                    who = advertisement.advertisement.reservation.users.email;
                }
                return (
                   <>
                       <Card className="advertisement" id={advertisement.advertisement.id_advertisement}>
                           <Row >
                               <Col md={3}>
                                   <div className="overflow">
                                       <Card.Img variant="top" src={imageURL} height={"190em"} className="img-scale"/>
                                   </div>
                               </Col>
                               <Col md={9}>
                                   <Card.Body >
                                       <Row>
                                           <Col md={8}>
                                               <Row>
                                                   <Card.Title>{advertisement.dog_name}, {advertisement.breed}</Card.Title>
                                               </Row>
                                               <Row>
                                                   <Card.Text>
                                                       {advertisement.description}
                                                   </Card.Text>
                                               </Row>
                                               <Row>
                                                   <Card.Text>
                                                       {advertisement.voivodeship}, {advertisement.city}, {advertisement.street}
                                                   </Card.Text>
                                               </Row>
                                               <Row>
                                                   <Card.Text>
                                                       From: {start}
                                                   </Card.Text>
                                               </Row>
                                               <Row>
                                                   <Card.Text>
                                                       To: {stop}
                                                   </Card.Text>
                                               </Row>
                                               <Row>
                                                   <Card.Text>
                                                       Reserved by: {who}
                                                   </Card.Text>
                                               </Row>
                                           </Col>
                                           <Col md={4} >
                                               <Container>
                                                   <Row>
                                                       <Button variant="outline-danger" className="mb-3"
                                                               onClick={e => this.delete(e)}>
                                                           Delete
                                                       </Button>
                                                   </Row>
                                               </Container>
                                           </Col>
                                       </Row>
                                   </Card.Body>
                               </Col>
                           </Row>
                       </Card>
                   </>

                )
            })
        }


    }

    render(){

        if(this.props.user){
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
                        <h2>Hi {this.props.user.name} {this.props.user.surname}</h2>
                    </Container>
                </Jumbotron>
                <h2>Your reservations</h2>
                <>{this.renderReservation()}</>
                <h2>Your advertisements</h2>
                <>{this.renderAdvertisement()}</>
            </Container>
        );
    }
        else{
            return(
            <h2>User not loged in</h2>)
        }
    }
}
