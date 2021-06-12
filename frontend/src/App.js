import React, {Component} from 'react';
import './styles/App.css';

import {Container, Row, Col, ModalFooter} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Home from "./components/Home";
import Profile from "./components/Profile";
import Lent from "./components/Lent";
import Borrow from "./components/Borrow";
import Dogs from "./components/Dogs";
import Register from "./components/Register";
import Login from "./components/Login";
import axios from "axios";


export default class App extends Component {


    state={};

    componentDidMount = () => {

        let email = encodeURIComponent(localStorage.getItem('email'))

        axios.get('api/users/search/findByEmail?email='+email).then(
            res => {
                this.setState({
                    user:res.data
                });
            },
            err => {
                console.log(err)
            }
        )
    };

render(){
    const marginTop = {
        marginTop:"3em"
    };
      return (
        <div className="App Background" >
            <div className="Background-content vh-100">
                <Router>
                    <NavigationBar user={this.state.user}/>
                    <Container>
                        <Row>
                            <Col lg={12} style={marginTop}>
                                <Switch>
                                    <Route path="/" exact component={() => <Home user={this.state.user}/>}/>
                                    <Route path="/profile" exact component={() => <Profile user={this.state.user}/>}/>
                                    <Route path="/lent" exact component={() => <Lent user={this.state.user}/>}/>
                                    <Route path="/borrow" exact component={() => <Borrow user={this.state.user}/>}/>
                                    <Route path="/dogs" exact component={() => <Dogs user={this.state.user}/>}/>
                                    <Route path="/register" exact component={Register}/>
                                    <Route path="/login" exact component={Login}/>
                                </Switch>
                            </Col>
                        </Row>
                    </Container>
                </Router>
            </div>
        </div>
      );
    }
}
