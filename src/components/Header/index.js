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
                                    {/* <li><Link to='/'>Home</Link>
                                        <ul className="submenu">
                                            <li><Link to='/home'>Home Style 1</Link></li>
                                            <li><Link to='/home2'>Home Style 2</Link></li>
                                            <li><Link to='/home3'>Home Style 3</Link></li>
                                            <li><Link to='/home4'>Home Style 4</Link></li>
                                            <li><Link to='/home5'>Home video</Link></li>
                                        </ul>
                                    </li> */}
                                    <li><AnchorLink href='#home'>Inicio</AnchorLink></li>
                                    <li><AnchorLink href='#couple'>Los novios</AnchorLink></li>
                                    <li><AnchorLink href='#story'>Nuestra historia</AnchorLink></li>
                                    <li><AnchorLink href='#gallery'>Galería</AnchorLink></li>
                                    <li><AnchorLink href='#event'>Reservación</AnchorLink></li>
                                    <li><AnchorLink href='#rsvp'>Invitación</AnchorLink></li>
                                    <li><AnchorLink href='#location'>Ubicación</AnchorLink></li>
                                    {/* <li><Link to='#'>Blog</Link>
                                        <ul className="submenu">
                                            <li><Link to='/blog'>Blog</Link></li>
                                            <li><Link to='/Blog-details'>Blog Details</Link></li>
                                        </ul>
                                    </li> */}
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
