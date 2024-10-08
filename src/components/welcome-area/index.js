
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.css'

const Welcome = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (

    <div  className={`welcome-area ${props.welcome}`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="welcome-content">
                        <h2>Bienvenidos a nuestro gran día</h2>
                        <p>Gracias por compartir con nosotros este día que hemos esperado con mucho ilusión. Queremos verte bailar, reir y disfrutar.</p>
                        <div className="btn"><AnchorLink href='#rsvp'>Invitación</AnchorLink></div>
                        <div className="btn"><AnchorLink href='#location'>Ubicación</AnchorLink></div>
                        {/* <Button className="btn" onClick={toggle}>Ubicación</Button> */}
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>Ubicación</ModalHeader>
                            <ModalBody>
                                <div className="location-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.312332761293!2d-91.28279312507411!3d14.694921085802727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858eb5d6ece6e21b%3A0xe6d8f6e41a0dafdd!2sEco%20Hotel%20Uxlabil%20Atitl%C3%A1n!5e0!3m2!1ses-419!2sgt!4v1727289295001!5m2!1ses-419!2sgt"></iframe>
                                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57763.58882182253!2d55.38442113562169!3d25.195692423227655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z4Kam4KeB4Kas4Ka-4KaHIC0g4Kam4KeB4Kas4Ka-4KaHIOCmhuCmruCmv-CmsOCmvuCmpCAtIOCmuOCmguCmr-CngeCmleCnjeCmpCDgpobgprDgpqwg4KaG4Kau4Ka_4Kaw4Ka-4Kak!5e0!3m2!1sbn!2sbd!4v1540725271741" /> */}
                                </div>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Welcome;