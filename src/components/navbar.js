import { Navbar, Container, Nav, DropdownItem } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import BrandLogo from "../assets/BRANDRED.png";

function Navigationbar() {
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.pageYOffset > 0) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

  return (
    <Navbar className="navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={BrandLogo} alt="Brand Logo" className="brand-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-list mr-auto">
            <Nav.Link href="#trendingsection">Trending</Nav.Link>
            <Nav.Link href="#comingsoon">Coming Soon</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-light"
                id="dropdown-basic"
                size="sm"
                className="mt-1"
              >
                Others
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <DropdownItem href="#wibusection">ANIME</DropdownItem>
                <DropdownItem href="#moviessection">MOVIES</DropdownItem>
                <DropdownItem href="#edusection">EDUCATION</DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
