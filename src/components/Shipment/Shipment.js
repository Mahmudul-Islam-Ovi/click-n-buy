import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PageTitle from '../PageTitle/PageTitle';
import useCart from '../../hooks/useCart';
import { deleteShoppingCart } from '../../utilities/fakedb';
import { useNavigate } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import axios from 'axios';
import PhoneInput from 'react-phone-number-input';



const Shipment = () => {
    const [cart] = useCart();
     const [user]= useAuthState(auth);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigate = useNavigate()
     
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

        const orders ={ 
            email:user.email,
            name :name,
            product :[{productName: cart.map(pd => pd.name)}],  
            address :address,
            phoneNumber :phoneNumber,
        }


        axios.post('http://localhost:5000/orders',orders)
        .then(response=>{
           const {data} = response;
           if(data.insertedId){
            event.target.reset();
           }
        })
        deleteShoppingCart();
        navigate('/orderInfo')
       
        
    }
    return (
        <div className='margin-top'>
             <PageTitle title='Shipment'></PageTitle>
        <div className="form-container mt-5">
            <div>
                <h2 className="form-title">Shipping Information</h2>
                <form className="m-4" onSubmit={handleCreateUser}>
                    <div className="input-group">
                       
                        <input onBlur={handleNameBlur} type="name" name="name" id=''  placeholder="Enter your name" required></input>
                    </div>
                    <div className="input-group">
                       
                        <input value={user?.email} readOnly type="email" name="email" id='' placeholder="Enter your email" ></input>
                    </div> 
                    {
                        cart.map(product =>
                           <div className="input-group">
                            <input value={product?.name} type="product" name="product" id='' ></input>
                           </div>
                        )
                    }
                    <div className="input-group">
                       
                        <input onBlur={handleAddressBlur} type="address" name="address" id='' placeholder="Enter your Address" required ></input>
                    </div>
                    <div className="input-group">
                       
                        <PhoneInput onBlur={handlePhoneNumberBlur}  value={phoneNumber} name="phone-number" id=''  placeholder="Enter your Number"  onChange={setPhoneNumber} required />
                    </div>
                    
                    <input className="from-submit" type='submit' value="Add Shipping" required></input>
                   
                </form>
            </div>
        </div>
        </div>
    );
};

export default Shipment;