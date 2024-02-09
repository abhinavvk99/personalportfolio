import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import github from './img/github-142-svgrepo-com.svg'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="fixed-top navbar-dark">
      <Container>
        <Navbar.Brand href="#" style={{fontSize:'25px'}}>PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-5 my-lg-0"
            style={{maxHeight: '100px',fontSize:'20px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">ABOUT</Nav.Link>
            <Nav.Link href="#action3">SKILLS</Nav.Link>
            <Nav.Link href="#action4">projects</Nav.Link>
            <Nav.Link href="#action5">contact</Nav.Link>
          </Nav>
          <button style={{backgroundColor:'white',width:"100px",height:'30px',borderRadius:'20px',border:"white"}}><a href="https://github.com/abhinavvk99"><img src={github} alt="" style={{width:"20%"}} /></a></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;