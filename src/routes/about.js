import React from "react";
import Footer from "../components/footer";
import Navigation from '../components/navbar'
import FounderCard from "../components/founderCard";
import mj from '../public/images/mj.PNG'
import tanvi from '../public/images/tanvi.PNG'
import '../public/about.css'
import MemberCard from "../components/memberCard";

export default function About(){
    return(
        <div>
            <nav>
                <Navigation />
            </nav>
            <div className="timeline">
                <h1> Time Line Here</h1>
            </div>
            <div className="carousel">
                <h1> Carousel Here </h1>
            </div>
            <div>
            <h1 className="foundersTitle d-flex flex-row justify-content-center">Founders</h1>
            <br />
                <div className="founders d-flex flex-row justify-content-center flex-wrap">
                    <div className="d-flex flex-column">
                        <FounderCard founder={'Marlon "Mj" Burog'} pic={mj} position={'Test'} borderColor={'#9DD67E'}/>
                    </div>
                    <div className="d-flex flex-column">
                        <FounderCard founder={'Tanvi Guttula'} pic={tanvi} position={'Test'} borderColor={'#CAB0FF'}/>
                    </div>
                </div>
            </div>
            <h1 className="foundersTitle d-flex flex-row justify-content-center">Team Members</h1>
            <br />
            <div className="founders d-flex flex-row justify-content-center">
                <div className="d-flex flex-column">
                    <MemberCard founder={'Example'} pic={mj} position={'Test'} borderColor={'#9DD67E'}/>
                </div>
                <div className="d-flex flex-column">
                    <MemberCard founder={'Example'} pic={tanvi} position={'Test'} borderColor={'#CAB0FF'}/>
                </div>
            </div>
            {/*<footer>
                <Footer />
            </footer>*/}
        </div>
    )
}