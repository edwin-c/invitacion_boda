import React from 'react'
import Sectiontitle from '../section-title'
import './style.css'

const Couple = (props) => {
    return(
        <div id="couple" className={`about-wrap ${props.couple}`}>
            <div className="couple-area section-padding">
                <Sectiontitle section={'Los novios'}/>
                <div className="container">
                    <div className="couple-wrap">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-2">
                                    <div className="couple-img">
                                        <img src={props.coupleimg1} alt="thumb"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Pahola Matías</h3>
                                            {/* <p>¡Hola! Soy Pahola, la novia. Soy ingeniera civil y vivo en la Ciudad de Guatemala. Amo a los animales, ver doramas, conocer nuevos lugares, la buena comida y, por supuesto, dormir. Me encanta hacer amigos y compartir tiempo y experiencias valiosas con ellos. </p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-3">
                                    <div className="couple-img couple-img-2">
                                        <img src={props.coupleimg2} alt="thumb"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Edwin Chocoy</h3>
                                            {/* <p>¡Hola! Soy Edwin, el novio. Soy ingeniero en sistemas y actualmente vivo en la Ciudad de Guatemala. Disfruto de los videojuegos, ver series, escuchar música y, por supuesto, aprovechar cada momento para descansar. Aunque soy una persona reservada y cautelosa, me considero amigable y siempre disfruto de una buena conversación.</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
        
    )
}

export default Couple;