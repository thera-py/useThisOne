import React from "react";
import { useState } from "react";
import {
    MDBBadge,
    MDBBtn,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
  } from 'mdb-react-ui-kit';
import { Form, FormControl, Button, Modal } from 'react-bootstrap';
import "../../public/internal/session.css"
import PatientSession from "./patientsessions";


function Session(props){
    const [showForm, setShowForm] = useState(false)
  
    const handleButtonClick = () => {
      setShowForm(!showForm)
    }
        return(
            <MDBTable className='sessionTable' align='middle'>
            <MDBTableBody className="sessionBody">
              <tr>
                <td>
                  <div className='patientUser d-flex align-items-center'>
                    <img
                      src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                      alt=''
                      style={{ width: '45px', height: '45px' }}
                      className='rounded-circle'
                    />
                    <div className='ms-3'>
                      <p className='fw-bold mb-1'>
                        {props.patientName}
                      </p>
                      <p className='text-muted mb-0'>{props.patientEmail}</p>
                    </div>
                  </div>
                </td>
                <td className="pillTab">
                  <MDBBadge color='success' pill>
                    Patient
                  </MDBBadge>
                </td>
                <td>
                  <Button onClick={handleButtonClick} className="sessionButt">Patient Sessions</Button>
                  <Modal show={showForm} onHide={handleButtonClick}>
                    <Modal.Header closeButton>
                      <Modal.Title>Sessions</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="sessionList d-flex flex-column align-content-center">
                        <PatientSession date={'02/05/23'}/>
                        <PatientSession date={'05/14/23'}/>
                        <PatientSession date={'08/10/23'}/>
                        <PatientSession date={'09/02/23'}/>
                        <PatientSession date={'09/30/23'}/>
                        <PatientSession date={'10/02/23'}/>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant='secondary' onClick={handleButtonClick}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        )
}

export default Session