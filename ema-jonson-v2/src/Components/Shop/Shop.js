import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {

    const [products,setProducts]=useState([])

    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])

    const handleAddtoCart=(product)=>{
        console.log(product)
        // cart.push(product)
        const newCart =[...cart,product];

        setCart(newCart)

    }

    return (
        <div className="  grid lg:grid-cols-[4fr,1fr] sm:grid-cols-[3fr,1fr]">
            {/* <h2>This is shop</h2> */}

            <div className="sm:mx-[100px] sm:my-[50px] sm:ml-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[45px]
            sm:gap-[9rem]">
                {/* <h3>This is for product:{products.length}</h3> */}

                {
                    products.map(product=><Product
                        key={product.id}
                        handleAddtoCart={handleAddtoCart}
                        product={product}
                        ></Product>)

                }
            </div>
            <div className="cart-container ml-2 bg-orange-300 ">

                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;