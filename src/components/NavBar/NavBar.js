import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';



const NavBars = () => {
    const[user]= useAuthState(auth);
   
    const handleSingOut = ()=> {
        signOut(auth);
    }
    return (
        <div className="fixed-top" >
              <Navbar bg="success" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/shop">Click-N-Buy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
            <Link to="/shop">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            { user ?
               <Button onClick={handleSingOut}>Sing Out</Button>
               :
                <Link to="/login">
                    <Button>Login</Button>
                    
                    </Link>}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavBars;