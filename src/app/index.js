import React, {Component} from 'react'
import NavigationBar from '../components/Navbar/Navbar'
import { Row, Container, Jumbotron, Col } from 'react-bootstrap';

import './index.css'

const MainPage = () => {

    return (
        <div>
            <NavigationBar />

            <div>
                <Jumbotron>
                    <h1>Muhamad Hamdanil</h1>
                </Jumbotron>

                <Container>
                    <section className='about'>
                        <div align='center'>
                            <h3>About Me</h3>
                        </div>

                        <div className='about-sub'>
                            <Row>
                                <Col>
                                    <img></img>
                                </Col>

                                <Col>
                                    <p>lorem ipsum dolor sit amet</p>
                                </Col>
                            </Row>
                        </div>
                    </section>
                </Container>
            </div>
        </div>
    )
}

export default MainPage