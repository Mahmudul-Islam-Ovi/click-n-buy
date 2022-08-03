import './Cart.css';



const Cart = (props) => {
     const {cart} = props;
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart) {
        if(!product.quantity){
            product.quantity =1;
        }
        total = total + product.price *product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    // const totalReducer = (previous, product) =>previous+product.price;
    // const total =cart.reduce(totalReducer,0)
    const shipping = total > 0 ? 15 :0;
    const tax =(total+shipping)*0.10;
    const grandTotal = total+shipping+tax;
    return (
        
        <div>
             <h3>Order Summary</h3>
            <h5>Items Ordered :{totalQuantity}</h5>
            <p>Total :{total.toFixed(2)}</p>
            <p>Shipping :{shipping}</p>
            <p>tax :{tax.toFixed(2)}</p>
            <p>Grand Total :{grandTotal.toFixed(2)}</p>
            {
                props.children
            }
        </div>
       
    );
};

export default Cart;

// import React from 'react';
// import './Cart.css';

// const Cart = (props) => {
//     const { cart } = props;
//     // console.log(cart);
//     let total = 0;
//     let shipping = 0;
//     let quantity = 0;
//     for(const product of cart){
//         quantity = quantity + product.quantity;
//         total = total + product.price * product.quantity;
//         shipping = shipping + product.shipping;
//     }
//     const tax = parseFloat((total * 0.1).toFixed(2));
//     const grandTotal = total + shipping + tax;
//     return (
//         <div className='cart'>
//             <h4>Order Summary</h4>
//             <p>Selected Items: {quantity}</p>
//             <p>Total price: ${total}</p>
//             <p>Total Shipping: ${shipping}</p>
//             <p>Tax: {tax}</p>
//             <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
//         </div>
//     );
// };

// export default Cart;