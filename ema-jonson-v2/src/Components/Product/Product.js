import React from 'react';
import { BsFillCartPlusFill} from "react-icons/bs";
import './Product.css'
const Product = (props) => {
    const {handleAddtoCart,product}=props
    const {name,img,price,seller,ratings}=product
  
    // console.log(props.product)
// console.log(props);
   
    return (
        <div className='w-[300px] h-[510px] border-[1px] rounded-lg border-border-color-cart relative'>
            <img className='w-[286px] rounded-lg h-auto m-2' src={img} alt='Product'></img>
            <div className="product-info">
            <p className='product-name text-xl'>{name}</p>
            <p><small>Price:${price}</small></p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratings:{ratings}</small></p>

            </div>
            <button onClick={()=>handleAddtoCart(product)} className='absolute flex align-center justify-center border rounded-bl-lg bottom-0 py-2 bg-[#FFE0B3] w-full hover:bg-[orange] cursor-pointer'>
                <p className='text-lg'>Add to cart</p><BsFillCartPlusFill className='ml-2 mt-1 text-lg'></BsFillCartPlusFill>
                
            </button>
        </div>
    );
};

export default Product;