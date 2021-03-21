import React, {Component} from 'react';
import '../styles/Home.css';
import {Jumbotron, Col, Container, Image, Row, Button, Card, Form} from "react-bootstrap";

const marginTop = {
    marginTop:"7em"
};
export default class Home extends Component{
    render(){
        return(
            <Col>
                <Jumbotron className="content" style={marginTop}>
                    <Container>
                        <Row>
                            <Col xs={3} md={3}>
                                <Image className="image" src='golden.jpg' rounded shadow />
                            </Col>
                            <Col xs={8} md={9} >
                                <div className="pt-4">
                                    <h1><a id="link1" href="#about">What is DogGo!</a></h1>
                                    <h1><a id="link2" href="#instruction">How it works?</a></h1>
                                    <Button href="register" variant="warning">Get Started</Button>{' '}
                                    <span>or </span>
                                    <Button href="login" variant="warning">Sign in</Button>{' '}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <div id="about" className="empty"></div>
                <Jumbotron className="content ">
                    <div >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </Jumbotron>
                <div id="instruction" className="empty"></div>
                <div className="empty2"></div>
                <Jumbotron className="content">
                        <div >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                </Jumbotron>
                <div className="empty"></div>
                <div className="empty"></div>
            </Col>
        );
    }
}
