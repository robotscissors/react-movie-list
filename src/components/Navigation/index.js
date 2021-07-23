import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';


export const Navigation = () => {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>Movie Database Tool</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <Link to="/">Home</Link>  
                        <Link to="/movie-list">Movie Lists</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};