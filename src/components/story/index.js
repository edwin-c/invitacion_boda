import React from 'react'
import {Link} from 'react-router-dom'
import Sectiontitle from '../section-title'
import strory1 from '../../images/story/img-1.jpg'
import strory2 from '../../images/story/img-2.jpg'
import strory3 from '../../images/story/img-3.jpg'
import strory4 from '../../images/story/img-4.jpg'
import strory5 from '../../images/story/img-5.jpg'
import strory6 from '../../images/story/img-6.jpg'
import strory7 from '../../images/story/img-7.jpg'
import './style.css'


const Story = () =>{
    return(
        <div id="story" className="story-area section-padding">
            <Sectiontitle section={'Nuestra historia'}/>
            <div className="container">
                <div className="story-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={strory1} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>El destino nos encotró</h3>
                                <span className="date">05 de abril, 2019</span>
                                <p>Edwin vio a Paho por primera vez en la universidad, en una clase que compartían. Paho, siempre un poco despistada, no lo notó en ese momento. Un día, llegó tarde a clase y una amiga le había guardado un lugar. Al sentarse, Paho, buscando ponerse al día, le hizo una pregunta a la persona junto a ella, que resultó ser Edwin. Él le sonrió y, con una mezcla de nervios y encanto, terminó explicándole otro tema que no tenía nada que ver con su pregunta. </p>
                                {/* <div className="story-button">
                                    <Link className="theme-btn" to='/'>Read More</Link>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text right-align-text">
                                <h3>Nuestra primera cita</h3>
                                <span className="date">28 de abril, 2019</span>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, </p>
                                <div className="story-button">
                                   <Link className="theme-btn" to='/'>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pl-n">
                            <div className="story-img">
                                <img src={strory2} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={strory3} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>Un sí que cambio todo</h3>
                                <span className="date">06 de julio, 2019</span>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, </p>
                                <div className="story-button">
                                   <Link className="theme-btn" to='/'>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text right-align-text">
                                <h3>Amor en tiempos de pandemia</h3>
                                <span className="date">13 de marzo, 2019</span>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, </p>
                                <div className="story-button">
                                   <Link className="theme-btn" to='/'>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pl-n">
                            <div className="story-img">
                                <img src={strory4} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={strory5} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>La vida independiente</h3>
                                {/* <span className="date">Jan 10, 2018</span> */}
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, </p>
                                <div className="story-button">
                                   <Link className="theme-btn" to='/'>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text right-align-text">
                                <h3>Nueva ciudad, nuevos sueños</h3>
                                {/* <span className="date">20 de Abril, 2024</span> */}
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, </p>
                                <div className="story-button">
                                   <Link className="theme-btn" to='/'>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pl-n">
                            <div className="story-img">
                                <img src={strory6} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={strory7} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>Un anillo y un para siempre</h3>
                                <span className="date">20 de abril, 2024</span>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, </p>
                                <div className="story-button">
                                   <Link className="theme-btn" to='/'>Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>

    )
}

export default Story;