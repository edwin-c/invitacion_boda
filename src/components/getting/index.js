import React, { useState } from 'react';
import gta1 from '../../images/gta/img-1.jpg'
import gta2 from '../../images/gta/img-2.jpg'
import Sectiontitle from '../section-title'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './style.css'



const Getting = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div id="location" className="gta-area section-padding">
            <Sectiontitle section={'Cómo llegar'} />
            <div className="container">
                <div className="row">

                    <div className="col col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                        <div className='row'>
                            <Button className="btn" onClick={toggle}>Ubicación</Button>
                            <Modal isOpen={modal} toggle={toggle} className={className}>
                                <ModalHeader toggle={toggle}>Ubicación</ModalHeader>
                                <ModalBody>
                                    <div className="location-map">
                                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.312332761293!2d-91.28279312507411!3d14.694921085802727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858eb5d6ece6e21b%3A0xe6d8f6e41a0dafdd!2sEco%20Hotel%20Uxlabil%20Atitl%C3%A1n!5e0!3m2!1ses-419!2sgt!4v1727289295001!5m2!1ses-419!2sgt"></iframe> */}
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d722.8062259366787!2d-91.28230813367159!3d14.694357842118546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858eb5440392b95f%3A0xc4ec5a90eb523390!2sParqueo%20Eco%20Hotel%20Uxlabil%20Atitl%C3%A1n!5e0!3m2!1ses-419!2sgt!4v1727826623298!5m2!1ses-419!2sgt"></iframe>
                                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57763.58882182253!2d55.38442113562169!3d25.195692423227655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z4Kam4KeB4Kas4Ka-4KaHIC0g4Kam4KeB4Kas4Ka-4KaHIOCmhuCmruCmv-CmsOCmvuCmpCAtIOCmuOCmguCmr-CngeCmleCnjeCmpCDgpobgprDgpqwg4KaG4Kau4Ka_4Kaw4Ka-4Kak!5e0!3m2!1sbn!2sbd!4v1540725271741" /> */}
                                    </div>
                                </ModalBody>
                            </Modal>
                        </div>
                        <div className="row">
                            <div className="heading col-md-12 col-sm-6">
                                <h4>Opción 1</h4>
                                <div className="gta-content">
                                    <p>industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
                                </div>
                                {/* <div className="gta-img"> */}
                                <div className="gta-img">
                                    <img src={gta1} alt="" />
                                </div>
                            </div>
                            <div className="heading heading-2 col-md-12 col-sm-6">
                                <h4>Opción 2</h4>
                                <div className="gta-content">
                                    <p>industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
                                </div>
                                <div className="gta-img">
                                    <img src={gta2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Getting;