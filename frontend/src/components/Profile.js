import React, {Component} from 'react';
import {Button, Col, Container, Jumbotron, Row, Card, Carousel} from "react-bootstrap";
import axios from "axios";
import {Redirect} from "react-router";

export default class Profile extends Component{
    state={};

    delete = (e) => {
        const id = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
        axios.delete(`http://localhost:9000/api/advertisement/${id}`).then(
            res => {
                console.log(res)
                alert('Advertisement deleted successfully');
            },
            err =>{
                console.log(err)
            }
        );
        this.setState({
                advertisements:this.state.advertisements.filter(el => el.advertisement.id_advertisement != id)
            }
        )
    }

    cancel = (e) => {
        const id = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
        axios.delete(`http://localhost:9000/api/my_reservations/${id}`).then(
            res => {
                console.log(res)
                alert('Reservation canceled successfully!');

            },
            err =>{
                console.log(err)
            }
        );
        this.setState({
            reservations:this.state.reservations.filter(el => el.advertisement.id_advertisement != id)
            }
        )

    }

    componentDidMount = () => {
        const id = localStorage.getItem("id")
        axios.get(`api/advertisements/${id}`).then(
            res => {
                this.setState({
                    advertisements:res.data
                });
                console.log(res);
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
                console.log(res);
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
                let who = reservation.advertisement.users.email+" Phone number: "+reservation.advertisement.users.phone_number;
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
                    who = advertisement.advertisement.reservation.users.email+" Phone number: "+advertisement.advertisement.reservation.users.phone_number;
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
                            className="d-block w-100 slider rounded-top"
                            src="slider1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100 rounded-top"
                            src="slider2.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded-top"
                            src="slider3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <Jumbotron className="content">
                    <Container>
                        <h2>Hi {this.props.user.name} {this.props.user.surname}</h2>
                    </Container>
                </Jumbotron>

                <h2 className="font-weight-bold">Your reservations</h2>
                <>{this.renderReservation()}</>
                <h2 className="font-weight-bold mt-3">Your advertisements</h2>
                <>{this.renderAdvertisement()}</>
            </Container>
        );
    }
        else{
            return(
                <Redirect to="/"/>
         )
        }
    }
}
