import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardFooter, MDBCardHeader } from 'mdb-react-ui-kit';
import '../public/memberCard.css'

class MemberCard extends React.Component{
    render(){
        return(
            <div>
                <MDBCard className="memberCard" alignment="center">
                    <MDBCardImage position="top" className='memberImage' alt="image here" src={this.props.pic}></MDBCardImage>
                    <MDBCardBody>
                        <MDBCardFooter className="footer" style={{backgroundColor: 'white', borderTop: `4px solid ${this.props.borderColor}`, margin: '15px'}}>
                            <b><MDBCardText className="memberName">{this.props.founder}</MDBCardText></b>
                            <MDBCardText className="posName">{this.props.position}</MDBCardText>
                        </MDBCardFooter>
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }
}

export default MemberCard