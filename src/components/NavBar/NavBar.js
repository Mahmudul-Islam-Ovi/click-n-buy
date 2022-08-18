import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import logo from '../../images/Logo-2.png';
import './NavBar.css';

const NavBars = () => {
  const [user] = useAuthState(auth);
  const handleSingOut = () => {
    signOut(auth);
  }
  return (
    <div className="fixed-top" >
     
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img className='logoImg' src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link >
                  {user ?
                    <Button variant="info" onClick={handleSingOut}>Sing Out</Button>
                    :
                    <Link to="/login">
                      <Button variant="info">Login</Button>
                    </Link>}

                </Nav.Link>
                <Nav.Link >
                  <div>
                    {user?.email}
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  );
};

export default NavBars;