import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'
import './style.css';

export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: false,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    render() {

        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}
                    <div className="logo2">
                        <h2><Link to='/home'>Paho y Edwin</Link></h2>
                    </div>
                    <ul className="responsivemenu">
                        {/* <li><p onClick={this.setIsOpen}>Home<i className="fa fa-angle-right" aria-hidden="true"></i></p></li>
                        <Collapse isOpen={isOpen}>
                            <Card>
                                <CardBody>
                                    <li><Link to='/home'>Home style 1</Link></li>
                                    <li><Link to='/home2'>Home style 2</Link></li>
                                    <li><Link to='/home3'>Home style 3</Link></li>
                                    <li><Link to='/home4'>Home style 4</Link></li>
                                    <li><Link to='/home5'>Home video</Link></li>
                                </CardBody>
                            </Card>
                        </Collapse> */}
                        <li><AnchorLink href='#home'>Inicio</AnchorLink></li>
                        <li><AnchorLink href='#couple'>Los novios</AnchorLink></li>
                        <li><AnchorLink href='#story'>Nuestra historia</AnchorLink></li>
                        <li><AnchorLink href='#gallery'>Galería</AnchorLink></li>
                        <li><AnchorLink href='#event'>Reservación</AnchorLink></li>
                        <li><AnchorLink href='#rsvp'>Invitación</AnchorLink></li>
                        <li><AnchorLink href='#location'>Ubicación</AnchorLink></li>
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>
            </div>
        )
    }
}
