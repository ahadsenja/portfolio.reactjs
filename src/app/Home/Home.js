import React from 'react'
import { Container } from 'react-bootstrap';

import About from '../About/About'
import Skill from '../../components/Skill/Skill'
import Header from '../../components/Header/Header'
import NavigationBar from '../../components/Navbar/Navbar'


const MainPage = () => {

    return (
        <div>
            <NavigationBar />

            <div>
                <Header />

                <Container>
                    <div>
                        <About />
                    </div>
                    
                    <div>
                        <Skill />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default MainPage