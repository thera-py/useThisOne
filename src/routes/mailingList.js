import React, { useState } from "react";
import Navigation from "../components/navbar";
import '../public/mailingList.css'
import {
    MDBBtn,
    MDBCardBody,
    MDBInput,
    MDBRow,
    MDBCol
  }
  from 'mdb-react-ui-kit';
import axios from 'axios'
import Fade from 'react-reveal/Fade'
import Select from 'react-select'

const hospitalList = [
    { label: 'Personal Practice', value: 'Personal Practice' },
    { label: 'Kaiser Permanente', value: 'Kaiser Permanente' },
    { label: 'UC Davis Medical Center', value: 'UC Davis Medical Center' },
    { label: 'Dignity Health', value: 'Dignity Health' },
    { label: 'Ronald Reagan UCLA Medical Center', value: 'Ronald Regan UCLA Medical Center' },
    { label: 'Stanford Medical', value: 'Stanford Medical' },
]

export default function MailingList(){
    const [email, setEmail] = useState("")
    const [fullname, setFullName] = useState("")
    const [hospital, setHospital] = useState("")

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Clear-Site-Data": "*"
        }
    }

    const body = JSON.stringify({email, fullname, hospital})

    const handleChange = async(value) =>{
        try{
            const hospitalValue = value.value
            setHospital(hospitalValue)
        }catch(err){
            console.log(err)
            alert("Error handling request")
        }
    }

    const handleMailing = async(e) => {
        e.preventDefault()
        
        try{
            if(email === '' || fullname === '' || hospital === ''){
                alert("Please fill out all information")
                return
            }   
            else{
                const response = await axios.post('/mailingListSubmission', {
                    email, fullname, hospital
                })
                alert(response.data)
            } 
        }catch(err){
            console.log(err)
            alert('An error has occurred, try again.')
        }
    }

    return(
        <div className="mailing">
            <nav>
                <Navigation />
            </nav>
            <Fade top>
            <div className="mailingBody d-flex flex-row flex-wrap justify-content-between">
                <div className="d-flex flex-row justify-content-between">
                    <div className="sideA d-flex flex-column">
                        <h1 className="mailingTitle">Join the <br /> Mailing List!</h1>
                        <div className="horLineBodyMailing" />
                        <p>Joining the mailing list gives us the</p>
                        <p>privilege to send you news, updates, and</p>
                        <p>application tests to provide</p>
                        <p>hands-on usage as we continue building</p>
                    </div>
                    <div className="vertLineMailing" />
                </div>
                <div className="sideB d-flex flex-column">
                    <form method="POST" action="/mailingListSubmission" onSubmit={handleMailing}>
                        <MDBRow className='mailingForm d-flex justify-content-center align-items-center'>
                            <MDBCol>
                                <MDBCardBody className='cardBody d-flex flex-column'>
                                    <h3 className="signUpHere fw-bold mb-2 text-center">Sign Up Here</h3>
                                    <br />
                                    <div className="d-flex flex-row flex-wrap">
                                        <p className="tag1">Full Name</p>
                                        <MDBInput className="mailingInput" wrapperClass='mb-4' id='form3' type='fullname' value={fullname} onChange={(e) => setFullName(e.target.value)} />
                                    </div>
                                    <div className="d-flex flex-row flex-wrap">
                                        <p className="tag2">Email</p>
                                        <MDBInput className="mailingInput" wrapperClass='mb-4' id='form3' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="d-flex flex-row flex-wrap">
                                        <p className="tag3">Hospital</p>
                                        <Select className="dropdownMailing" onChange={handleChange} options={hospitalList} />
                                    </div>
                                    <br />
                                    <button className='mailingButton' size='md' type='submit'>Submit</button>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </div>
            </div>
            </Fade>
        </div>
    )
}