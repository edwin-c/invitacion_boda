import React, { Component } from 'react';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Sectiontitle from '../section-title'
import gta1 from '../../images/inv/invi-01.jpg'
import './style.css'

class Rsvp extends Component {

    state = {
        name: '',
        email: '',
        rsvp: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            rsvp,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (rsvp === '') {
            error.rsvp = "Select your number of rsvp";
        }
        if (events === '') {
            error.events = "Select your event list";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.rsvp === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                rsvp: '',
                events: '',
                notes: '',
                error: {}
            })
        }

        console.log(this.state);
        console.log(this.state.error.notes);
    }

    render() {

        const { name,
            email,
            rsvp,
            events,
            notes, error } = this.state;
        return (
            <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
                <Sectiontitle section={'Nuestra boda'} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="rsvp-wrap">
                                <div className="gta-img">
                                    <ReactFancyBox
                                        thumbnail={gta1}
                                        image={gta1} />
                                </div>
                                <h3>Pase reservado para:</h3>
                                <h2>Familia Chocoy Cordon</h2>
                                <h3>Reservación para:</h3>
                                <h1>3 personas</h1>
                                <form onSubmit={this.subimtHandler}>
                                    <div className="contact-form form-style">
                                        <div className="col-12 col-sm-12">
                                            <input type="text" value={name} onChange={this.changeHandler} placeholder="Invitado*" id="fname" name="name" />
                                            <p>{error.name ? error.name : ''}</p>
                                        </div>
                                        {/* <div className="col-12  col-sm-12">
                                            <input type="text" placeholder="Your Email*" onChange={this.changeHandler} value={email} id="email" name="email" />
                                            <p>{error.email ? error.email : ''}</p>
                                        </div> */}
                                        <div className="col col-sm-12">
                                            <select className="form-control" onChange={this.changeHandler} value={rsvp} name="rsvp">
                                                <option disabled value="">Number Of rsvp*</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                            <p>{error.rsvp ? error.rsvp : ''}</p>
                                        </div>
                                        <div className="col col-sm-12">
                                            <select className="form-control" onChange={this.changeHandler} value={events} name="events">
                                                <option value="1">Sí, allí estaré</option>
                                                <option value="2">Lo siento, no podré asistir</option>
                                            </select>
                                            <p>{error.events ? error.events : ''}</p>
                                        </div>
                                        {/* <div className="col-12 col-sm-12">
                                            <textarea className="contact-textarea" value={notes} onChange={this.changeHandler} placeholder="Message" name="notes"></textarea>
                                            <p>{error.notes ? error.notes : ''}</p>
                                        </div> */}
                                        <div className="col-12 text-center">
                                            <button id="submit_novio" type="submit" className="submit mr-3">Confirmar con el Novio</button>
                                            <button id="submit_novia" type="submit" className="submit">Confirmar con la Novia</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rsvp;