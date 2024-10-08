import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // Importa withRouter
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import Sectiontitle from '../section-title';
import gta1 from '../../images/inv/invi-01.jpg';
import gta2 from '../../images/inv/invi-02.jpg';
import './style.css';

const invitados = [
    {
        id: 1,
        name: 'Juan Perez',
        cupos: '2 Personas'
    },
    {
        id: 2,
        name: 'Maria Lopez',
        cupos: '3 Personas'
    }
];

class Rsvp extends Component {
    state = {
        name: '',
        cupos: 0,
        email: '',
        rsvp: '',
        events: '',
        notes: '',
        error: {}
    };

    componentDidMount() {
        const { search } = this.props.location;
        const params = new URLSearchParams(search);


        const id = params.get('id');

        const invitado = invitados.find(inv => inv.id === Number(id));

        if (invitado) {

            this.setState({ name: invitado.name, cupos: invitado.cupos });
        } else {
           
            console.log("Invitado no encontrado.");
           
        }
    }

    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = '';

        this.setState({
            [e.target.name]: e.target.value,
            error
        });
    };

    submitHandler = (e) => {
        e.preventDefault();

        const { name, email, rsvp, events, notes, error } = this.state;

        if (events === '') {
            error.events = "Select your event list";
        }

        if (error) {
            this.setState({
                error
            });
        }

        if (error.name === '' && error.email === '' && error.rsvp === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                rsvp: '',
                events: '',
                notes: '',
                error: {}
            });
        }

        console.log(this.state);
        console.log(this.state.error.notes);
    };

    render() {
        const { name, cupos, email, rsvp, events, notes, error } = this.state;
        return (
            <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
                <Sectiontitle section={'Nuestra boda'} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="rsvp-wrap">
                                <div className="gta-img">
                                    <ReactFancyBox thumbnail={gta1} image={gta1} />
                                </div>
                                <div className="d-flex justify-content-center align-items-center w-100 mt-5">
                                    <div className="d-flex flex-column w-100 align-items-center">
                                        <h2>{name}</h2>
                                        <h3 className='pt-2'>Invitación para:</h3>
                                        <h1>{cupos}</h1>
                                    </div>
                                </div>
                                <form onSubmit={this.submitHandler}>
                                    <div className="contact-form form-style">
                                        <div className="col col-sm-12">
                                            <select className="form-control" onChange={this.changeHandler} value={events} name="events">
                                                <option value="1">Sí, allí estaré</option>
                                                <option value="2">Lo siento, no podré asistir</option>
                                            </select>
                                            <p>{error.events ? error.events : ''}</p>
                                        </div>
                                        <div className="col-12 text-center pb-4">
                                            <button id="submit_novio" type="submit" className="submit mr-sm-4">Confirmar con el Novio </button>
                                            <button id="submit_novia" type="submit" className="submit">Confirmar con la Novia</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="gta-img">
                                    <img src={gta2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Exporta el componente envuelto en withRouter
export default withRouter(Rsvp);
