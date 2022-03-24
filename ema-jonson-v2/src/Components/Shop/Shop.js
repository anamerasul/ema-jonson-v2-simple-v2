import React, { useEffect, useState } from 'react';
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
        <div className="shop-container">
            {/* <h2>This is shop</h2> */}

            <div className="products-container">
                {/* <h3>This is for product:{products.length}</h3> */}

                {
                    products.map(product=><Product
                        key={product.id}
                        handleAddtoCart={handleAddtoCart}
                        product={product}
                        ></Product>)

                }
            </div>
            <div className="cart-container">
                <h4>Order Sumarry</h4>
                <p>Selected Items:{cart.length}</p>

            </div>
        </div>
    );
};

export default Shop;