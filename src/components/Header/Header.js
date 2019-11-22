import React from 'react'
import { Jumbotron, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

import './header.css'

const Header = () => {

    return (
        <div>
            <Jumbotron className='jmb'>
                <Row>
                    <Col>
                        <div align='left' className='header-description'>
                            <p>HEY THERE !</p>
                            <h1 className='header-text'>I AM MUHAMAD HAMDANIL</h1>
                            <h4>FREELANCER FRONTEND DEVELOPER & WEB DESIGNER</h4>

                            <br />
                            <br />
                            <div className='social-area'>
                                <a href="https://www.youtube.com/c/jamesqquick" className="twitter  social">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                                <a href="https://www.youtube.com/c/jamesqquick" className="facebook  social">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                                <a href="https://www.youtube.com/c/jamesqquick" className="instagram  social">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                                <a href="https://www.youtube.com/c/jamesqquick" className="linkedin  social">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                                <a href="https://www.youtube.com/c/jamesqquick" className="github  social">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </a>
                                <a href="https://www.youtube.com/c/jamesqquick" className="youtube  social">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                                </a>
                            </div>

                            <br />
                            <br />
                            <Button>SEE MY WORK</Button>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default Header