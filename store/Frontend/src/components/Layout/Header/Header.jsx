import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Button from '@mui/material/Button';
import './Header.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Sports Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Men">MEN</NavDropdown.Item>
              <NavDropdown.Item href="#Women">
                WOMEN
              </NavDropdown.Item>
              
            </NavDropdown>
            
          
            
       
         

          </Nav>
       
        </Navbar.Collapse>
        <div class="header-right">
            <div class="header-right-links">
              <a href="account.html" class="header-account">
                <i class="bi bi-person"></i>
              </a>
              <button class="search-button">
                <i class="bi bi-search"></i>
              </button>
              <a href="#123">
                <i class="bi bi-heart"></i>
              </a>
              <div class="header-cart">
                <a href="cart.html" class="header-cart-link">
                  <i class="bi bi-bag"></i>
                  <span class="header-cart-count">0</span>
                </a>
              </div>
            </div>
         </div>   
       
      </Container>
    </Navbar>
  );
}

export default BasicExample;