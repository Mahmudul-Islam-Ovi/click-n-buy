import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Shipment = () => {
     const [user]= useAuthState(auth);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
     
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
        <div className='margin-top'>
        <div className="form-container mt-5">
            <div>
                <h2 className="form-title">Shipping Information</h2>
                <form className="m-4" onSubmit={handleCreateUser}>
                    <div className="input-group">
                        {/* <lebel htmlFor="name">Your Name</lebel> */}
                        <input onBlur={handleNameBlur} type="name" name="name" id=''  placeholder="Enter your name" required></input>
                    </div>
                    <div className="input-group">
                        {/* <lebel htmlFor="email"> Your Email</lebel> */}
                        <input value={user?.email} readonly type="email" name="email" id='' placeholder="Enter your email" required></input>
                    </div>
                    <div className="input-group">
                        {/* <lebel htmlFor="address">Your Address</lebel> */}
                        <input onBlur={handleAddressBlur} type="address" name="address" id='' placeholder="Enter your Address" required ></input>
                    </div>
                    <div className="input-group">
                        {/* <lebel htmlFor="number"> Phone Number</lebel> */}
                        <input onBlur={handlePhoneNumberBlur} type="number" name="phone-number" id=''  placeholder="Enter your Number" required ></input>
                    </div>
                    
                    <input className="from-submit" type='submit' value="Add Shipping" required></input>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Shipment;