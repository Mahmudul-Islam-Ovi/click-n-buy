import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './../Header/Header';
import Shop from './../Shop/Shop';
import OrderReview from './../OrderReview/OrderReview';
import Inventory from './../Inventory/Inventory';
import NotFound from '../NotFound/NotFound';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import Login from '../Login/Login';
import SingUp from '../SingUp/SingUp';
import RequireAuth from '../RequireAuth/RequireAuth';
import Shipment from '../Shipment/Shipment';
import ShowSingleProduct from '../ShowSingleProduct/ShowSingleProduct';

const AllRoute = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/orders" element={<OrderReview />} />
                <Route path="/inventory" element={
                    <RequireAuth>
                        <Inventory />
                    </RequireAuth>
                } />
                <Route path="/placeOrder" element={<PlaceOrder />} />
                <Route path="/shipment" element={
                    <RequireAuth>
                        <Shipment />
                    </RequireAuth>
                } />
                <Route path="/login" element={<Login />} />
                <Route path="/singUp" element={<SingUp />} />
                <Route path="/productById/:productId" element={<ShowSingleProduct />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default AllRoute;