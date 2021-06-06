import React, {Component} from 'react';
import '../styles/Borrow.css';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import {Redirect} from "react-router";

export default class Borrow extends Component {

    state = {};

    reserve = (e) => {
        const id_user = localStorage.getItem("id")
        const id_adv = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
        axios.post(`/api/reservation/${id_adv}/${id_user}`).then(
            res => {
                console.log(res)
            },
            err => {
                console.log(err)
            }
        )
        this.setState({
            advertisements:this.state.advertisements.filter(el => el.advertisement.id_advertisement != id_adv)
            }
        )
    }

    delete = (e) => {
        const id = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
        axios.delete(`http://localhost:9000/api/advertisement/${id}`).then(
            res => {
                alert('Advertisement deleted successfully!');

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

    isAdmin = () => {
        if(localStorage.getItem("roles")=="ROLE_ADMIN"){
            return (
                    <Button variant="outline-danger" style={{width:10 +'em'}} onClick={e => this.delete(e)}>Delete</Button>
            )
        }
    }

    componentDidMount = () => {
        const id = localStorage.getItem("id")
        axios.get(`api/advertisementsOthers/${id}`).then(
            res => {
                console.log(res)
                this.setState({
                    advertisements: res.data
                });
            },
            err => {
                console.log(err)
            }
        );
    }

    renderAdvertisement = () => {
        if (this.state.advertisements !== undefined) {
            return this.state.advertisements.map((advertisement) => {
                let start = advertisement.start.replace('T', ', ');
                let stop = advertisement.stop.replace('T', ', ');
                let imageURL = './uploads/' + advertisement.image;
                return (
                    <Card className="advertisement" id={advertisement.advertisement.id_advertisement}>
                        <Row>
                            <Col md={3}>
                                <div className="overflow">
                                    <Card.Img variant="top" src={imageURL} height={"170em"} className="img-scale"/>
                                </div>
                            </Col>
                            <Col md={9}>
                                <Card.Body>
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
                                        </Col>
                                        <Col md={4}>
                                            <Container>
                                                <Row className="mb-3">
                                                    <Button variant="warning" style={{width:10 +'em'}}
                                                            onClick={e => this.reserve(e)}>
                                                        Reserve</Button>
                                                </Row>
                                                <Row>
                                                    {this.isAdmin()}
                                                </Row>
                                            </Container>

                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                )
            })
        }
    }

    render() {
        if (this.props.user) {
            return (
                <Container>
                    <>{this.renderAdvertisement()}</>
                </Container>
            );
        } else {
            return (
                <Redirect to="/"/>
            )
        }
    }
}
