import React from 'react';

const Cart = (props) => {
    const {cart} = props ||{}
    const totalReducer=(prevValue,currentValue)=> parseInt(prevValue) + parseInt(currentValue.Price);

    const total=cart.reduce(  totalReducer   ,  0)
 
    const tax=0.1*total;
 
       const totalPrice=total+tax
    //  const totalReducer=(prevValue,currentValue)=>prevValue+currentValue.Price 
    //  const total = cart.reduce(totalReducer, 0)
    return (
        <div className='mt-4'>
           <h3><i class="fas fa-cart-plus"></i>
          {cart.length}
           </h3>
           <h2>{total}</h2>
                <h3> Tax: {tax}</h3>
                <h3>total Price: {totalPrice}</h3>
           <ul >
               {
                   cart.map(pd=> <li className='list-unstyled text-danger' > {pd.BookName} </li>
                   
                    )
                  
               }
           </ul>
        </div>
    );
};

export default Cart;