import React from 'react'
import { Link } from 'react-router-dom'
import Sectiontitle from '../section-title'
import strory1 from '../../images/story/img-1.jpg'
import strory2 from '../../images/story/img-2.jpg'
import strory3 from '../../images/story/img-3.jpg'
import strory4 from '../../images/story/img-4.jpg'
import strory5 from '../../images/story/img-5.jpg'
import strory6 from '../../images/story/img-6.jpg'
import strory7 from '../../images/story/img-7.jpg'
import './style.css'


const Story = () => {
    return (
        <div id="story" className="story-area section-padding">
            <Sectiontitle section={'Nuestra historia'} />
            <div className="container">
                <div className="story-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={strory1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>El destino nos encotró</h3>
                                <span className="date">05 de abril, 2019</span>
                                <p>Edwin vio a Paho por primera vez en la universidad, en una clase que compartían. Paho, siempre un poco despistada, no lo notó en ese momento. Un día, llegó tarde a clase y una amiga le había guardado lugar. Al sentarse, Paho, buscando ponerse al día, le hizo una pregunta a la persona junto a ella, que resultó ser Edwin. Él le sonrió y, con una mezcla de nervios y encanto, terminó explicándole otro tema que no tenía nada que ver con la pregunta. Después de ese día iniciaron su amistad.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={strory2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>Nuestra primera cita</h3>
                                <span className="date">28 de abril, 2019</span>
                                <p>Con la excusa de estudiar para su clase de física, Edwin y Paho acordaron reunirse en una cafetería. Aunque el plan era repasar, pronto se dejaron llevar por una conversación sobre sus gustos, planes, metas y sueños; en otras palabras, comenzaron a conocerse mejor. Ambos disfrutaron tanto de la compañía del otro que, sin darse cuenta, las horas se les fueron volando. Finalmente, cuando la tarde se volvió noche, se despidieron y regresaron a sus hogares.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={strory3} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>Un sí que cambio todo</h3>
                                <span className="date">06 de julio, 2019</span>
                                <p>Edwin decidió que era momento de dar un paso más. Con la ayuda de sus amigos, planeó pedirle a Paho que fueran novios. Aquel día, Edwin fue a buscarla según lo planeado y, exactamente a las 8 de la mañana del 6 de julio, le declaró su amor. Paho no se esperaba esta sorpresa: recibió un ramo de rosas junto con la pregunta, "¿Quieres ser mi novia?". Emocionada y feliz, no dudó en responder rápidamente con un rotundo "¡Sí!".</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={strory4} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>Amor en tiempos de pandemia</h3>
                                <span className="date">13 de marzo, 2019</span>
                                <p>Cuando llegó la pandemia, la relación de Edwin y Paho tuvo que adaptarse a la distancia: él se quedó en Salcajá, y ella regresó a Soloma. A pesar de la separación, cada noche se conectaban por videollamada y buscaban maneras creativas de mantener viva su relación. Tuvieron citas, vieron películas, celebraron aniversarios y cumpleaños, jugaron videojuegos, se ayudaron con el estudio, y compartieron lágrimas y risas, todo a distancia. Aunque no podían tocarse, no fallaron ni una sola noche en verse, demostrando así que el amor puede superar cualquier obstáculo.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={strory5} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>La vida independiente</h3>
                                {/* <span className="date">Jan 10, 2018</span> */}
                                <p>Con el inicio de su vida profesional, Edwin y Paho tomaron rumbos distintos: él se trasladó a la Ciudad, mientras que ella se quedó en Xela. A pesar de la distancia, su relación se mantuvo firme, pues ya habían superado el desafío de una pandemia. Cada día se comunicaban y encontraban formas de estar presentes el uno para el otro. Ambos hacían el esfuerzo de viajar para visitarse, aunque, con cada despedida, el adiós se volvía un poco más doloroso.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={strory6} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>Nueva ciudad, nuevos sueños</h3>
                                {/* <span className="date">20 de Abril, 2024</span> */}
                                <p>Edwin llevaba dos años en la Ciudad cuando a Paho se le presentó una oportunidad de trabajo allí. Aunque al principio estaba algo temerosa, con el apoyo de Edwin decidió aceptar el puesto y mudarse a la Ciudad. Parecía que el destino quería acercarlos aún más. Desde ese momento, la distancia dejó de ser un obstáculo, y juntos comenzaron una nueva etapa de sus vidas, explorando la independencia en la Ciudad. Empezaron a tener citas y salidas casuales, visitando juntos restaurantes, museos, parques de diversiones, centros comerciales y mucho más. En definitiva, pasaban más tiempo juntos, disfrutando de nuevas experiencias y creando inolvidables aventuras.</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={strory7} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>Un anillo y un para siempre</h3>
                                <span className="date">20 de abril, 2024</span>
                                <p>Convencido de que Paho era la mujer con la que quería pasar el resto de su vida, Edwin comenzó a planear su propuesta de matrimonio. Con la ayuda de familiares y amigos, organizó una sorpresa en un hermoso jardín lleno de lavanda. Llevó a Paho con la excusa de una cita, y juntos viajaron hasta ese mágico lugar. Al llegar, Paho no sospechaba lo que estaba por suceder. Minutos después, Edwin, nervioso y con las manos temblorosas, se arrodilló y le pidió matrimonio. Con los ojos llenos de lágrimas y una inmensa emoción, Paho aceptó felizmente su propuesta. Días después, ambos comenzaron los preparativos para su boda.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Story;