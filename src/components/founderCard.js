import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardFooter, MDBCardHeader } from 'mdb-react-ui-kit';
import '../public/founderCard.css'

class FounderCard extends React.Component{
    render(){
        return(
            <div>
                <MDBCard className="founderCard" alignment="center">
                    <MDBCardImage position="top" className='founderImage' alt="image here" src={this.props.pic}></MDBCardImage>
                    <MDBCardBody>
                        <MDBCardFooter className="footer" style={{backgroundColor: 'white', borderTop: `4px solid ${this.props.borderColor}`, margin: '15px'}}>
                            <b><MDBCardText className="founderName">{this.props.founder}</MDBCardText></b>
                            <MDBCardText className="posName">Co-Founder | {this.props.position}</MDBCardText>
                        </MDBCardFooter>
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }
}

export default FounderCard