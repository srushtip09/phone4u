import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="d-flex justify-content-end bg-primary" bg="dark" variant="dark">
        <Container >
          <Nav className="d-flex justify-content-end me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">TechQuickie</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Get Started</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;