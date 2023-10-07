import React from "react";
import NavigationInternal from "../components/internal/navbar";
import Session from "../components/internal/session";
import { MDBTable, MDBTableHead } from "mdb-react-ui-kit";
import '../public/dashboard.css'

function Dashboard() {
  return (
    <div>
      <div className="d-flex flex-row justify-content-start">
        <nav>
            <NavigationInternal />
        </nav>
        <div className="dashboard">
          <h1>
            Current Patients
          </h1>
          <MDBTable>
            <MDBTableHead className="tableID">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Actions</th>
                </tr>
            </MDBTableHead>
          </MDBTable>
          <Session patientName={"George Mira"} patientEmail={"george-mira01@gmail.com"} />
          <Session patientName={"Jonathan Nguyen"} patientEmail={"jonNguyen@gmail.com"} />
          <Session patientName={"Ryan Bao"} patientEmail={"baobao@gmail.com"} />
          <Session patientName={"Caesar Ngo"} patientEmail={"caesarRoman@gmail.com"} />
          <Session patientName={"Amy Myth"} patientEmail={"imamyth@gmail.com"} />
          <Session patientName={"Jennifer Stowe"} patientEmail={"jennystowes@gmail.com"} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
