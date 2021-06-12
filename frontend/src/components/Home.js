import React, {Component} from 'react';
import '../styles/Home.css';
import {Jumbotron, Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";

export default class Home extends Component{

    ifLogin= () =>{
        if(!localStorage.getItem("token")){
            return (
                <>
                    <Link to={"login"} className="text-dark " ><button className="myButton" >Sign in</button></Link>
                    <span> or </span>
                    <Link to={"register"} className="text-dark " ><button className="myButton" >Get Started</button></Link>
                </>
            )
        }
    }

    render(){

        return(
            <Col>
                <Jumbotron className="content rounded-top" id="homeInfo">
                    <Container>
                        <Row>
                            <Col xs={12} md={3}>
                                <Image className="image" src='golden.jpg' rounded shadow />
                            </Col>
                            <Col xs={12} md={9} >
                                <div className="pt-4">,
                                    <h1><a id="link1" href="#about">What is DogGo!</a></h1>
                                    <h1><a id="link2" href="#instruction">How it works?</a></h1>
                                    {this.ifLogin()}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <div id="about" className="empty"></div>
                <Jumbotron className="content font-weight-bold rounded-top" >
                    <div >
                        <h3>
                            Web application for dog lovers. The app allows dog owners to post advertisement about posibility taking their pets for a walk.
                            On the other hand, people interested in walked the dog can express their willingness by replying to the advertisement and spend
                            time with someone else's dog..
                        </h3>
                    </div>
                </Jumbotron>
                <ScrollUpButton />
                <div  className="empty"></div>
                <div id="instruction" className="empty2"></div>
                <Jumbotron className="content font-weight-bold rounded-top">
                        <div >
                            <h2 className="font-weight-bold">If you want to borrow a dog...</h2>
                            <h3>
                                In the "Dogs" tab you will find information about different breeds of dogs.
                                Select "Borrow" from the navigation bar.
                                Choose dog that you like to walk with, but earlier make sure that you are able to do that in given in advertisement time.
                                If everything is okay, press button "Reservation".
                                Go to your "Profile" and check if reservation is added, additionally you can contact with dog owner by email or phone.
                                If you are not able to realise this reservation you should cancel it by pressing a button "Cancel".
                            </h3>
                            <h2 className="font-weight-bold">If you want to let your dog...</h2>
                            <h3>
                                Go to "Lent" page, complete a form about your dog, localisation and time when.
                                Make sure if everything added properly and press "Submit".
                                You will see this advertisement on your "Profile" page.
                                When someone reserve your dog you will see an information about borrower- email and phone number- contact with him if you have any questions.
                                There is also possibility to delete the advertisement by pressing "Delete" button in your profile page.
                            </h3>
                        </div>
                </Jumbotron>
                <div className="empty"></div>
            </Col>
        );
    }
}
