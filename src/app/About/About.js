import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

import './about.css'

const About = () => {

    return (
        <div>
            <section className='about'>
                <div align='center'>
                    <h3>About Me</h3>
                </div>

                <div className='about-sub'>
                    <Row>
                        <Col>
                            <img src='https://miro.medium.com/fit/c/256/256/1*q2BkYYF8uuj_SMOYnjOd4A.jpeg' />
                        </Col>

                        <Col>
                            <div align='justify'>
                                <p>Saya adalah seorang mahasiswa semester akhir yang saat ini masih menempuh pendidikan S1 di Universitas Bumigora Mataram di Kota Mataram, Nusa Tenggara Barat</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    )
}

export default About