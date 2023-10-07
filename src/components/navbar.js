import '../public/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav } from 'react-bootstrap';

function Navigation(){
    return(
        <div className='navigate'>
            <Navbar collapseOnSelect expand='lg' variant="light" data-bs-theme="light">
                <Container fluid>
                    <Navbar.Brand href='/' className='logo'>Thera.Py</Navbar.Brand>
                    <Navbar.Toggle className='toggler' aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link href='/pricing' className='navi'>Pricing</Nav.Link>
                            <Nav.Link href='/about' className='navi'>About</Nav.Link>
                            <Nav.Link href='/how-it-works' className='navi'>How It Works</Nav.Link>
                            <Nav.Link href='/mailingList' className='navi'>Mailing List</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;