import React from "react";
import '../public/footer.css'
import '../public/masterButton.css'

export default function Footer(){
    return(
        <div>
            <div className="footer d-flex flex-row flex-wrap justify-content-evenly">
                <div className="d-flex flex-column flex-wrap">
                    <h3>Investors</h3>
                </div>
                <div className="d-flex flex-column">
                    <div className="thinVertLineFooter"></div>
                </div>
                <div className="d-flex flex-column flex-wrap align-items-center">
                    <div className="d-flex flex-row flex-wrap">
                        <div className="d-flex flex-column flex-wrap align-items-center">
                            <h3>About</h3>
                            <ul style={{textDecoration: 'none !important'}}>
                                <li><a>Meet the Team</a></li>
                                <li><a>Hume AI</a></li>
                            </ul>
                        </div>
                        <div className="d-flex flex-column flex-wrap align-items-center">
                            <h3>Help</h3>
                            <ul style={{textDecoration: 'none !important'}}>
                                <li><a>Help Articles</a></li>
                                <li><a>Sign Up</a></li>
                                <li><a>FAQ</a></li>
                            </ul>
                        </div>
                        <div className="d-flex flex-column flex-wrap align-items-center">
                            <h3>Legal</h3>
                            <ul style={{textDecoration: 'none !important'}}>
                                <li><a>Privacy Policy</a></li>
                                <li><a>Terms of Service</a></li>
                            </ul>
                        </div>
                        <div className="d-flex flex-column flex-wrap align-items-center">
                            <h3>Email</h3>
                            <p>therapy@gmail.com idk</p>
                            <br />
                            <h3>Get in Touch</h3>
                            <a href="/maintanence"><button className="signUpButton">Send Message</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}