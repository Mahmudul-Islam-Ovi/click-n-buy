import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useState ,useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import PageTitle from '../PageTitle/PageTitle';

const Inventory = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate() ;

    useEffect(() => {
        const getOrder = async () => {
            const email = user.email;
            const url = `http://localhost:5000/orders?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setOrders(data);
            }
            catch (e) {
                console.log(e.massage);
                if(e.response.status === 401 || e.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrder();
    }, [user,navigate])
    return (
        <div className='margin-top'>
              <PageTitle title='Inventory'></PageTitle>
              <h1>Order : {orders.length}</h1>
        </div>
    );
};

export default Inventory;