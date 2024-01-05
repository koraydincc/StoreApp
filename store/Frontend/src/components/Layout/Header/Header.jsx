import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import  {useContext}  from 'react';
import  {CartContext}  from "../../../context/CartProvider";
import { Link } from 'react-router-dom';




function BasicExample({setIsSearchShow}) {

  const { cartItems } = useContext(CartContext);

  const user = localStorage.getItem("user");
  

  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Sports Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="shop">Men</NavDropdown.Item>
              <NavDropdown.Item href="shop">
                Women
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="contact">Contact</Nav.Link>
            
            
          
            
       
         

          </Nav>
       
        </Navbar.Collapse>
        <div class="header-right">
            <div class="header-right-links">
              <Link to="/auth" className='header-account'>
                <i class="bi bi-person"></i>
              </Link>
              <button class="search-button" onClick={()=> {setIsSearchShow(true)}}>
                <i class="bi bi-search"></i>
              </button>
              <a href="#">
                <i class="bi bi-heart"></i>
              </a>
              <div class="header-cart">
                   <Link to="/cart" class="header-cart-link">
                            <i class="bi bi-bag"></i>
                         <span className="header-cart-count">
                             {cartItems.length}
                        </span>
                    </Link>
             </div>
             {user && (
                  <button
                    className="search-button"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Çıkış yapmak istediğinize emin misiniz?"
                        )
                      ) {
                        {
                          localStorage.removeItem("user");
                          window.location.href = "/";
                        }
                      }
                    }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                )}
            </div>
         </div>   
       
      </Container>
    </Navbar>
  );
}

export default BasicExample;