import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // Importa withRouter
import Sectiontitle from '../section-title';
import gta1 from '../../images/inv/invi-01.jpg';
import gta2 from '../../images/inv/invi-02.jpg';
import './style.css';
import { Button } from 'reactstrap';

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
        cupos: 0,
        events: '1',
        error: {},
        buttonText: 'Confirmar'
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
        const selectedValue = e.target.value;
        let buttonText = 'Confirmar';

        if (selectedValue === '1') {
            buttonText = 'Confirmar';
        } else if (selectedValue === '2') {
            buttonText = 'Confirmar inasistencia';
        }

        this.setState({
            [e.target.name]: selectedValue,
            buttonText: buttonText,
            error: {
                ...this.state.error,
                [e.target.name]: ''
            }
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

        if (error.events === '') {
            this.setState({
                events: '',
                error: {}
            });
        }
    };
    render() {
        const { name, cupos, events, error, buttonText } = this.state;
        console.log(this.state)

        const handleRedirectNovio = () => {
            if (events == '1') {
                window.open('https://wa.me/50231017894?text=' + encodeURIComponent("Hola Edwin, recibi la invitación para " + name + " y quiero confirmar la asistencia de " + cupos), '_blank');
            }
            else {
                window.open('https://wa.me/50231017894?text=' + encodeURIComponent("Hola Edwin, quiero confirmar la inasistencia de " + name + " con " + cupos), '_blank');
            }
        };
        const handleRedirectNovia = () => {
            if (events == '1') {
                window.open('https://wa.me/50231017894?text=' + encodeURIComponent("Hola Paho, recibi la invitación para " + name + " y quiero confirmar la asistencia de " + cupos), '_blank');
            }
            else {
                window.open('https://wa.me/50231017894?text=' + encodeURIComponent("Hola Paho, quiero confirmar la inasistencia de " + name + " con " + cupos), '_blank');
            }
        };
        return (
            <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
                <Sectiontitle section={'Nuestra boda'} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="rsvp-wrap">
                                <div className="gta-img">
                                    <img src={gta1} alt="" />
                                </div>
                                <div className="d-flex justify-content-center align-items-center w-100 mt-5">
                                    <div className="d-flex flex-column w-100 align-items-center">
                                        <h1>{name}</h1>
                                        <h3 className='pt-2'>Invitación para:</h3>
                                        <h1>{cupos}</h1>
                                    </div>
                                </div>
                                <br></br>
                                <div className="d-flex flex-column w-100 align-items-center">
                                    <span>Nos encantaría contar con tu presencia en nuestra boda, así que por favor confirma tu asistencia antes del 05 de noviembre 2024</span>
                                </div>
                                <form>
                                    <div className="contact-form form-style">
                                        <div className="col col-sm-12">
                                            <select className="form-control" onChange={this.changeHandler} value={events} name="events">
                                                <option value="1">Sí, allí estaré</option>
                                                <option value="2">Lo siento, no podré asistir</option>
                                            </select>
                                            <p>{error.events ? error.events : ''}</p>
                                        </div>
                                        <div className="col-12 text-center pb-4">
                                            <Button id="submit_novio" onClick={handleRedirectNovio} className="btn m-3">{buttonText} con el Novio </Button>
                                            <Button id="submit_novia" onClick={handleRedirectNovia} className="btn m-3">{buttonText} con la Novia</Button>
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
