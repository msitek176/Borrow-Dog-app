import React, {Component} from 'react';
import '../styles/Borrow.css';
import BorrowAdvertisement from "./BorrowAdvertisement";
import {Container} from "react-bootstrap";

export default class Borrow extends Component{

    render(){
        return(
            <Container>
                <BorrowAdvertisement/>
                <BorrowAdvertisement/>
                <BorrowAdvertisement/>
                <BorrowAdvertisement/>
                <BorrowAdvertisement/>
            </Container>
        );
    }
}
