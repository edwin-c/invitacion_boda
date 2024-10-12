
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, NavLink } from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Sectiontitle from '../section-title'
import strory1 from '../../images/events/img-1.jpg'
import strory2 from '../../images/events/img-2.jpg'
import strory3 from '../../images/events/img-3.jpg'

import './style.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Location = (props) => {

    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div id="event" className="event-section section-padding">
            <Sectiontitle section={'Recepción de la boda'} />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tabs-site-button">
                            <div className="event-tabs">
                                <div className="col-md-12 col-12">
                                    <div className="event-wrap">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-12 col-12">
                                                <div className="event-img">
                                                    <img src={strory1} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-12 col-12">
                                                <div className="event-text">
                                                    <h3>Ceremonia de boda</h3>
                                                    <span>Sábado, 23 de Noviembre de 2024, 10:00 AM-3:00 PM</span>
                                                    <span>Eco Hotel Uxlabil Atitlán</span>
                                                    <p>En el mágico escenario del Lago de Atitlán, donde las aguas serenas reflejan los volcanes y el cielo se une con la tierra, nos uniremos en matrimonio. Rodeados de la belleza natural y el encanto de este lugar, los invitamos a acompañarnos en el Eco Hotel Uxlabil, a orillas del lago, donde los atardeceres se tornan dorados y las noches se llenan de estrellas. Únanse a nosotros para celebrar el amor en un lugar tan eterno como nuestro compromiso.</p>
                                                    <AnchorLink href="#location">
                                                        <Button className="btn submit" onClick={toggle}>Ubicación</Button>
                                                    </AnchorLink>
                                                    {/* <Button className="btn" onClick={toggle}>Ubicación</Button>
                                                    <Modal isOpen={modal} toggle={toggle} className={className}>
                                                        <ModalHeader toggle={toggle}>Ubicación</ModalHeader>
                                                        <ModalBody>
                                                            <div className="location-map"> */}
                                                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.312332761293!2d-91.28279312507411!3d14.694921085802727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858eb5d6ece6e21b%3A0xe6d8f6e41a0dafdd!2sEco%20Hotel%20Uxlabil%20Atitl%C3%A1n!5e0!3m2!1ses-419!2sgt!4v1727289295001!5m2!1ses-419!2sgt"></iframe> */}
                                                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d722.8062259366787!2d-91.28230813367159!3d14.694357842118546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858eb5440392b95f%3A0xc4ec5a90eb523390!2sParqueo%20Eco%20Hotel%20Uxlabil%20Atitl%C3%A1n!5e0!3m2!1ses-419!2sgt!4v1727826623298!5m2!1ses-419!2sgt"></iframe> */}
                                                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57763.58882182253!2d55.38442113562169!3d25.195692423227655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z4Kam4KeB4Kas4Ka-4KaHIC0g4Kam4KeB4Kas4Ka-4KaHIOCmhuCmruCmv-CmsOCmvuCmpCAtIOCmuOCmguCmr-CngeCmleCnjeCmpCDgpobgprDgpqwg4KaG4Kau4Ka_4Kaw4Ka-4Kak!5e0!3m2!1sbn!2sbd!4v1540725271741" /> */}
                                                    {/* </div>
                                                        </ModalBody>
                                                    </Modal> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="event-wrap">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-12 col-12">
                                                <div className="event-text event-text-2">
                                                    <h3>Wedding Party</h3>
                                                    <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
                                                    <span>256 Apay Road,Califonia Bong, London</span>
                                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                                                    <Button className="btn" onClick={toggle}>Location</Button>
                                                    <Modal isOpen={modal} toggle={toggle} className={className}>
                                                        <ModalHeader toggle={toggle}>Location</ModalHeader>
                                                        <ModalBody>
                                                            <div className="location-map">
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57763.58882182253!2d55.38442113562169!3d25.195692423227655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z4Kam4KeB4Kas4Ka-4KaHIC0g4Kam4KeB4Kas4Ka-4KaHIOCmhuCmruCmv-CmsOCmvuCmpCAtIOCmuOCmguCmr-CngeCmleCnjeCmpCDgpobgprDgpqwg4KaG4Kau4Ka_4Kaw4Ka-4Kak!5e0!3m2!1sbn!2sbd!4v1540725271741" />
                                                            </div>
                                                        </ModalBody>
                                                    </Modal>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-12 col-12">
                                                <div className="event-img">
                                                    <img src={strory2} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="event-wrap">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-12 col-12">
                                                <div className="event-img">
                                                    <img src={strory3} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-12 col-12">
                                                <div className="event-text">
                                                    <h3>Wedding Dinner</h3>
                                                    <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
                                                    <span>256 Apay Road,Califonia Bong, London</span>
                                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                                                    <Button className="btn" onClick={toggle}>Location</Button>
                                                    <Modal isOpen={modal} toggle={toggle} className={className}>
                                                        <ModalHeader toggle={toggle}>Location</ModalHeader>
                                                        <ModalBody>
                                                            <div className="location-map">
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57763.58882182253!2d55.38442113562169!3d25.195692423227655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z4Kam4KeB4Kas4Ka-4KaHIC0g4Kam4KeB4Kas4Ka-4KaHIOCmhuCmruCmv-CmsOCmvuCmpCAtIOCmuOCmguCmr-CngeCmleCnjeCmpCDgpobgprDgpqwg4KaG4Kau4Ka_4Kaw4Ka-4Kak!5e0!3m2!1sbn!2sbd!4v1540725271741" />
                                                            </div>
                                                        </ModalBody>
                                                    </Modal>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location;