import React, {Component} from 'react';
import '../styles/Dogs.css';
import {Card, CardColumns} from "react-bootstrap";
import axios from "axios";
import {Redirect} from "react-router";

export default class Dogs extends Component{
    state={};

    componentDidMount = () => {
        axios.get(`api/dogs`).then(
            res => {
                this.setState({
                    dogs:res.data
                });
                console.log(res);
            },
            err => {
                console.log(err)
            }
        );
    }

    renderDogsList = () => {
        if(this.state.dogs !== undefined){
            return this.state.dogs.map((dog)=>
            {
                let height = dog.height.split(',');
                let weight = dog.weight.split(',');
                let urlPath = `./dogs/`+dog.imageURL
                return (
                    <Card className= "card-shadow">
                        <div className="overflow">
                            <Card.Img className="img-scale" variant="top" src={urlPath} />
                        </div>
                        <Card.Body>
                            <Card.Title><b>{dog.title}</b></Card.Title>
                            <Card.Text className="text-left">
                                <b>Character:</b> {dog.character} <br/>
                                <b>Lifetime:</b> {dog.lifetime} <br/>
                                <b>Height:</b> {height[0]}, <br/> {height[1]} <br/>
                                <b>Weight:</b> {weight[0]}, <br/> {weight[1]} <br/>
                                <b>Origin:</b> {dog.origin}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })
        }
    }

    render(){
        if (this.props.user) {
            return (
            <CardColumns className="animate__animated animate__fadeInUp" >
                <>{this.renderDogsList()}</>
            </CardColumns>
            );
        } else {
            return (
                <Redirect to="/"/>
            )
        }
    }
}
