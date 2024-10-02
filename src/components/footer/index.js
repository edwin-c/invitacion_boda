import React from 'react';
import './style.css'

const Footer = (props) => {
    return(
        <div className={`site-footer ${props.footer}`}>
            <div className="container">
                <div className="row">
                    <div className="text">
                        <h2>Edwin & Paho</h2>
                        {/* <p>Gracias</p> */}
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Footer;