import { Navbar, Container } from 'react-bootstrap';

export const NavBar = () => {
  return (
    <Container expand="lg">
      <Navbar.Brand href="#home">
        <img src={''} alt='logo' />
      </Navbar.Brand>
      <Navbar.Toggle></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Nav className="me-auto">
          <Nav.Link></Nav.Link>
          <Nav.Link></Nav.Link>
          <Nav.Dropdown></Nav.Dropdown>
        </Nav> */}
      </Navbar.Collapse>
    </Container>
  )
};