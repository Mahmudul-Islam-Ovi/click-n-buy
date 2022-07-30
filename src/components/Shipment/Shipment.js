import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Shipment = () => {
     const [user]= useAuthState(auth);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
     
    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneNumberBlur = event => {
        setPhoneNumber(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping ={name,address,phoneNumber};
        console.log(shipping);
    }
    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <lebel htmlFor="name">Your Name</lebel>
                        <input onBlur={handleNameBlur} type="name" name="name" id='' required></input>
                    </div>
                    <div className="input-group">
                        <lebel htmlFor="email"> Your Email</lebel>
                        <input value={user?.email} readonly type="email" name="email" id='' required></input>
                    </div>
                    <div className="input-group">
                        <lebel htmlFor="address">Your Address</lebel>
                        <input onBlur={handleAddressBlur} type="address" name="address" id='' required ></input>
                    </div>
                    <div className="input-group">
                        <lebel htmlFor="number"> Phone Number</lebel>
                        <input onBlur={handlePhoneNumberBlur} type="number" name="phone-number" id='' required ></input>
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className="from-submit" type='submit' value="Add Shipping" required></input>
                </form>
            </div>
        </div>
    );
};

export default Shipment;