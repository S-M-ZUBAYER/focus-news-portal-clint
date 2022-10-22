import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handlerLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <Navbar className="mb-4" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className=""><Link to="/">Focus New Portal</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {user?.uid ?
                                <><span className='me-2'>{user?.displayName}</span><Button onClick={handlerLogOut} variant="outline-warning">Sign Out</Button>{' '}</> :
                                <>
                                    <Link to='/login'><Button className='me-2' variant="outline-info">Log In</Button>{' '}</Link>
                                    <Link to='/register'><Button variant="outline-success">Register</Button>{' '}</Link>
                                </>
                            }</Nav.Link>
                        <Link to="/profile">
                            {(user?.photoURL) ?
                                <Image roundedCircle className=" me-2" style={{ height: '40px' }} src={user.photoURL}></Image> :
                                <FaUser></FaUser>}
                        </Link>
                        <div className="d-lg-none">
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;