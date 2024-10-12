import React from 'react';
import {Link} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import 'react-sticky-header/styles.css';
import MobileMenu from '../../components/MobileMenu'



import './style.css'
import MobileMenu2 from '../MobileMenu2';

const Header = () => {

    return(

          <div className="Header_root">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="logo">
                                <h2><Link to='/home'>Paho y Edwin</Link></h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="header-menu d-lg-block d-none">
                                <ul className="mobail-menu d-flex">
                                    <li><AnchorLink href='#home'>Inicio</AnchorLink></li>
                                    <li><AnchorLink href='#couple'>Los novios</AnchorLink></li>
                                    <li><AnchorLink href='#story'>Nuestra historia</AnchorLink></li>
                                    <li><AnchorLink href='#gallery'>Galería</AnchorLink></li>
                                    <li><AnchorLink href='#event'>Recepción</AnchorLink></li>
                                    <li><AnchorLink href='#rsvp'>Invitación</AnchorLink></li>
                                    <li><AnchorLink href='#location'>Ubicación</AnchorLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        
    )
}

export default Header;
