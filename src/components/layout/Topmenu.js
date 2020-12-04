import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Topmenu = () => {
  return (
    <Navbar bg="secondary" variant="dark">
      
        <Navbar.Brand>
          Movie App
        </Navbar.Brand>
      
      
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/">About</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Topmenu;