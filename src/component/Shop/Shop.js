import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    // cart a products rakar jorno state
    const [cart, setCart]= useState([])
    // jekhane state oikhane even handle korbw
    const handleAddProduct = (product)=>{
        const newCart =[...cart,product]
        setCart(newCart)
        // console.log(newCart)
    }
    useEffect(()=>{
       fetch('./topbook.json')
       .then(res=> res.json())
       .then(data=> setProducts(data))
    }, [])
    return (
        <div>
          <div className="row">
              <div className="col-md-9 ">
                   {/* product-load-Korbo */}
                 <div className="row">
                     {
                         products.map(product => <Product
                         product={product}
                         handleAddProduct={handleAddProduct}
                         ></Product> )

                     }
              
                 
                 </div>
              </div>

              <div className="col-md-3">
                    {/* eikhane amara card calculation korbo */}
                  <Cart cart={cart}/>
              </div>
          </div>
        </div>
    );
};

export default Shop;