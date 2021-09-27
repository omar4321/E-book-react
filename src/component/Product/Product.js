import React from 'react';

const Product = (props) => {
  const{BookName,By,Category,img,Price}=props.product ||{}
  // console.log(props.product)
    return (
     <div className="col-md-6 mt-4 ">
       <div class="card mb-4" style={{'maxWidth': '590px'}}>
  <div class="row g-0">
    <div class="col-md-5 mx-auto">
      <img src={img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title">{BookName}</h5>
        <p class="card-text">{Category}</p>
        <p class="card-text">Price:${Price}</p>
        <p class="card-text">BY:{By}</p>
        <button onClick={()=>props.handleAddProduct(props.product)} 
     
        className='btn btn-primary'>Add to cart</button>
        
      </div>
      
    </div>
  </div>
</div>
     </div>
    );
};

export default Product;