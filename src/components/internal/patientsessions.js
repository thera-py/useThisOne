import React from "react";
import { useState } from 'react'
import { Form, FormControl, Button, Modal } from 'react-bootstrap';
import AudioTimeline from "./timeline";
import Notes from "./notes";
import '../../public/internal/patientsession.css'

export default function PatientSession(props){
    const [showForm, setShowForm] = useState(false)
  
    const handleButtonClick = () => {
      setShowForm(!showForm)
    }

    return(
        <div>
            <label>{props.date}</label>
            <br />
            <Button onClick={handleButtonClick} className="butt">Open Session Notes</Button>
            <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-column">
                <Modal show={showForm} onHide={handleButtonClick} className="patientsession">
                    <Modal.Header closeButton>
                      <Modal.Title>{props.date} Audio Timeline</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-column">
                            <AudioTimeline />
                        </div>
                        <div className="d-flex flex-column">
                            <Notes />
                        </div>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant='secondary' onClick={handleButtonClick}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
            </div>
        </div>
    )
}