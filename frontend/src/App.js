import React from 'react';
import './styles/App.css';

import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import NavigationBar from './components/NavigationBar';
import Home from "./components/Home";
import Profile from "./components/Profile";
import Lent from "./components/Lent";
import Borrow from "./components/Borrow";
import Dogs from "./components/Dogs";
import Register from "./components/Register";
import Login from "./components/Login";



function App() {
    const marginTop = {
        marginTop:"3em"
    };

  return (
    <div className="App Background" >
        <div className="Background-content">
            <Router>
                <NavigationBar/>
                <Container>
                    <Row>
                        <Col lg={12} style={marginTop}>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/profile" exact component={Profile}/>
                                <Route path="/lent" exact component={Lent}/>
                                <Route path="/borrow" exact component={Borrow}/>
                                <Route path="/dogs" exact component={Dogs}/>
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

export default App;
