import React from "react";
import Navigation from './components/navbar'
import Footer from "./components/footer";
import mainImg from './public/images/mainImg.jpg'
import clipboard from './public/images/clipboard.jpg'
import Fade from 'react-reveal/Fade'
import './public/main.css'
import './public/masterButton.css'

export default function Main(){
    return(
        <div className="main">
            <nav>
                <Navigation />
            </nav>
            <Fade top>
            <div className="header d-flex flex-row justify-content-center flex-wrap">
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row">
                        <img className="clipImg" src={clipboard} alt="filler"/><h1 className="separator"> | </h1> <h1 className="title"> Thera.Py</h1>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="headerText d-flex flex-column">
                            <p><b>AI</b> based</p>
                            <p>tool <b>built</b></p>
                            <p><b>for</b></p>
                            <p><b>therapists</b></p>
                            <br />
                            <a href="/mailingList"><button className="signUpButton">Sign Up</button></a>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="vertLine"></div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-end">
                    <img className="mainImg" src={mainImg} alt="name" />
                </div>
            </div>
            <div className="descriptions d-flex flex-row justify-content-evenly flex-wrap">
                <div className="descOne d-flex flex-row justify-content-between">
                    <div className="aiDesc d-flex flex-column">
                        <p><b>AI</b> driven therapist</p>
                        <p>organizer</p>
                        <br />
                        <p>Using <b>sentiment</b></p>
                        <p><b>analysis</b> to note down</p>
                        <p>the <b>feel</b> of it all</p>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="vertLineBody"></div>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <div className="thinVertLine"></div>
                </div>
                <div className="descTwo d-flex flex-column">
                    <div className="dataDesc d-flex flex-column align-items-end">
                        <p>Your data is</p>
                        <br />
                        <p><b>Privileged</b></p>
                        <p><b>Secure</b></p>
                        <p><b>Yours</b></p>
                    </div>
                    <div className="horLineBody"></div>
                    <br />
                </div>
            </div>
            <div className="body">
                Discover Thera.Py: A Therapist's Friend

                Thera.Py, an innovative solution poised to elevate mental health support for both therapists and patients. Let's explore how Thera.Py is reshaping the landscape of therapist-patient interactions!
            </div>
            </Fade>
        </div>
    )
}