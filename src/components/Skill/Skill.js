import React from 'react'
import { Row, Col } from 'react-bootstrap'

import './skill.css'


const Skill = () => {

    return (
        <div>
            <section className='skill'>
                <div>
                    <h3>Skill</h3>
                </div>

                <Row>
                    <Col lg='3' className='col-1'>
                        <p>Javascript</p>
                    </Col>

                    <Col lg='3' className='col-2'>
                        <p>Javascript</p>
                    </Col>

                    <Col lg='3' className='col-3'>
                        <p>Javascript</p>
                    </Col>

                    <Col lg='3' className='col-4'>
                        <p>Javascript</p>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default Skill