import React, { Component } from 'react';
import CountDown from 'reactjs-countdown';
import Sectiontitle from '../section-title'
import './style.css'

class Saveday extends Component {

    render() {
        return (
            <div className={`saveday ${this.props.saveday}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-3">
                            <Sectiontitle section={'Cuentra atrás'} />
                            <div className="countdownwrap">
                                <CountDown
                                    deadline="Nov 23, 2024 10:00:00"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Saveday;