import React from 'react'
import Navb from './Navbar'
import Home from './Home'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'
import './App.css'
import { Col, Container, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Updates from './Updates'


export default function App() {
    return (
        <div className="App" id="App">
        <Container fluid={true}>
                    <Navb />
                <Row><Col><Home /></Col></Row>
                <Row><Col><Team /></Col></Row>
                <Row><Col><Updates /></Col></Row>
                <Row><Col><Contact /></Col></Row>
                <Row><Col><Contact /></Col></Row>
                <Row><Col><Footer /></Col></Row>
        </Container>
        </div>
    )
}

