import React from 'react';
import './Header.css';
import logo from '../../images/Logo img.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';



const Header = () => {
    const[user]= useAuthState(auth);

    const handleSingOut = ()=> {
        signOut(auth);
    }
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
               <Link to="/shop">Shop</Link>
               <Link to="/orders">Orders</Link>
               <Link to="/inventory">Inventory</Link>
               { user ?
               <button onClick={handleSingOut}>Sing Out</button>
               :
                <Link to="/login">Login</Link>}
            </nav>
        </div>
    );
};

export default Header;