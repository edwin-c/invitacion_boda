import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // Importa withRouter
import Sectiontitle from '../section-title';
import gta1 from '../../images/inv/invi-01.jpg';
import gta2 from '../../images/inv/invi-02.jpg';
import './style.css';
import { Button } from 'reactstrap';

const invitados = [
    // novio
    { id: 1, name: 'Familia Puac Chocoy', cupos: '3 personas' },
    { id: 2, name: 'Familia Chocoy Sac', cupos: '3 personas' },
    { id: 3, name: 'Familia Tzul Pérez', cupos: '3 personas' },
    { id: 4, name: 'Familia Chocoy Cordón', cupos: '4 personas' },
    { id: 5, name: 'Maday Chocoy', cupos: '2 personas' },
    { id: 6, name: 'Nathali Sanches', cupos: '2 personas' },
    { id: 7, name: 'Amelia', cupos: '4 personas' },
    { id: 8, name: 'Amparo Vasquez ', cupos: '1 persona' },
    { id: 9, name: 'Abigail Soberanis', cupos: '2 personas' },
    { id: 10, name: 'Doris Soberanis y Rafael', cupos: '2 personas' },
    { id: 11, name: 'Familia Cuc Chocoy', cupos: '5 personas' },
    { id: 12, name: 'Jonathan Miranda', cupos: '2 personas' },
    { id: 13, name: 'Kevin Guerra', cupos: '1 persona' },
    { id: 14, name: 'Kevin Velásquez', cupos: '1 persona' },
    { id: 15, name: 'Familia Chocoy To', cupos: '5 personas' },
    { id: 16, name: 'Jeremías Chocoy y familia', cupos: '4 personas' },
    { id: 17, name: 'Familia Chocoy Ventura', cupos: '4 personas' },
    { id: 18, name: 'Arturo Meletz y Clara Chocoy', cupos: '2 personas' },
    { id: 19, name: 'Catarina Chocoy', cupos: '2 personas' },
    { id: 20, name: 'Familia Ruiz Cordón', cupos: '5 personas' },

    // novia
    { id: 27, name: 'Familia Matías Alonzo', cupos: '3 personas' },
    { id: 28, name: 'Familia López Alonzo', cupos: '5 personas' },
    { id: 29, name: 'Familia tia Jualia', cupos: '3 personas' },
    { id: 30, name: 'padrinos}', cupos: '2 personas' },
    { id: 31, name: 'don eddy', cupos: '2 personas' },
    { id: 32, name: 'Familia Matías Raymundo', cupos: '6 personas' },
    { id: 33, name: 'padrinos confirmaicón', cupos: '4 personas' },
    { id: 34, name: 'Jasson Juárez', cupos: '1 persona' },
    { id: 35, name: 'Byron Benavides', cupos: '1 persona' },
    { id: 36, name: 'Hany Tax', cupos: '1 persona' },
    { id: 37, name: 'Viviana Sánches', cupos: '1 persona' },
    { id: 38, name: 'Rayza Velásquez', cupos: '1 persona' },
    { id: 39, name: 'Famialia Matías León', cupos: '2 personas' },
    { id: 40, name: 'María Luisa Matías', cupos: '2 personas' },
    { id: 41, name: 'Herlinda Matías', cupos: '1 persona' },
    { id: 42, name: 'Familia Matías Morales', cupos: '4 personas' },
    { id: 43, name: 'Familia Matías Josue', cupos: '3 personas' },
    { id: 44, name: 'Yaquelin Ramires y Guillermo Orellana', cupos: '2 personas' },
    { id: 45, name: 'Familia Molina Gordillo', cupos: '3 personas' },
    { id: 46, name: 'Geanina Siliezar', cupos: '1 persona' },
    { id: 47, name: 'Familia León Alonzo tia clemen', cupos: '6 personas' },
    { id: 48, name: 'tia vilma', cupos: '4 personas' },
    { id: 49, name: 'Familia Alonzo tio oscar', cupos: '5 personas' },
    { id: 50, name: 'lupe', cupos: '5 personas' },
    { id: 51, name: 'Floridalma Miguel', cupos: '1 persona' },
    { id: 52, name: 'Silvia Alonzo', cupos: '3 personas' },
    { id: 53, name: 'Sonia Alonzo', cupos: '1 persona' },
    { id: 54, name: 'hermana ma', cupos: '3 personas' },
    { id: 55, name: 'Familia Velásquez Martínez -estefany', cupos: '3 personas' },
    { id: 56, name: 'Lorena Santos y familia', cupos: '3 personas' },
    { id: 57, name: 'Jazmín Cifuentes', cupos: '1 persona' },
    { id: 58, name: 'David Avendaño y familia', cupos: '3 personas' },
    { id: 59, name: 'Gustavo ', cupos: '1 persona' },
    { id: 60, name: 'Ricardo Xocoy', cupos: '1 persona' },
    { id: 61, name: 'Fernanda Cano y Sandy Cruz', cupos: '2 personas' },
    { id: 62, name: 'Familia Alonzo  Silva', cupos: '3 personas' },
];

class Rsvp extends Component {
    state = {
        cupos: 0,
        events: '1',
        error: {},
        buttonText: 'Confirmar',
        id: 0,
    };

    componentDidMount() {
        const { search } = this.props.location;
        const params = new URLSearchParams(search);


        const id = params.get('id');

        const invitado = invitados.find(inv => inv.id === Number(id));

        if (invitado) {

            this.setState({ name: invitado.name, cupos: invitado.cupos, id: id });
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
        const { name, cupos, events, error, buttonText, id } = this.state;
        console.log(this.state)

        const handleRedirectNovio = () => {
            if (events == '1') {
                window.open('https://wa.me/50231017894?text=' + encodeURIComponent("Hola Edwin, recibí la invitación para " + name + " y quiero confirmar la asistencia de " + cupos + " a tu boda."), '_blank');
            }
            else {
                window.open('https://wa.me/50231017894?text=' + encodeURIComponent("Hola Edwin, recibí la invitación para tu boda y lastimosamente no te podré acompañar ese día."), '_blank');
            }
        };
        const handleRedirectNovia = () => {
            if (id >= 58 && id <= 60) {

                if (events == '1') {
                    window.open('https://wa.me/50243716337?text=' + encodeURIComponent("Hola Paho, recibí la invitación para " + name + " y quiero confirmar la asistencia de " + cupos + " a tu boda."), '_blank');
                }
                else {
                    window.open('https://wa.me/50243716337?text=' + encodeURIComponent("Hola Paho, recibí la invitación para tu boda y lastimosamente no te podré acompañar ese día."), '_blank');
                }
            }
            else {
                if (events == '1') {
                    window.open('https://wa.me/50251511147?text=' + encodeURIComponent("Hola Paho, recibí la invitación para " + name + " y quiero confirmar la asistencia de " + cupos + " a tu boda."), '_blank');
                }
                else {
                    window.open('https://wa.me/50251511147?text=' + encodeURIComponent("Hola Paho, recibí la invitación para tu boda y lastimosamente no te podré acompañar ese día."), '_blank');
                }
            }
        };
        return (
            <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
                <Sectiontitle section={'Invitación'} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="rsvp-wrap">
                                <div className="gta-img">
                                    <img src={gta1} alt="" />
                                </div>
                                <div className="d-flex justify-content-center align-items-center w-100 mt-5">
                                    <div className="d-flex flex-column w-100 align-items-center">
                                        <h3 className='pt-2'>Invitación para:</h3>
                                        <h1>{name}</h1>
                                        <h3 className='pt-2'>Pase para:</h3>
                                        <h1>{cupos}</h1>
                                        <h3 className='pt-2'>Este pase no es transferible</h3>
                                    </div>
                                </div>
                                <br></br>
                                <div className="d-flex flex-column w-100 align-items-center">
                                    <span>Nos encantaría contar con tu presencia en nuestra boda, así que por favor confirma tu asistencia antes del 03 de noviembre 2024</span>
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

                                            {
                                                id >= 1 && id <= 26 &&
                                                < Button id="submit_novio" onClick={handleRedirectNovio} className="btn m-3">{buttonText} con el Novio </Button>
                                            }
                                            {
                                                id >= 26 && id <= 62 &&
                                                < Button id="submit_novia" onClick={handleRedirectNovia} className="btn m-3">{buttonText} con la Novia</Button>
                                            }
                                        </div>
                                    </div>
                                </form>
                                <div className="gta-img">
                                    <img src={gta2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        );
    }
}

// Exporta el componente envuelto en withRouter
export default withRouter(Rsvp);
