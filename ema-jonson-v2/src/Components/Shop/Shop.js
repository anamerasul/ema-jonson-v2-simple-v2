import React, { useEffect, useState } from 'react';
import { addToDb ,getStoredCart} from '../../Utilities/FakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {

    const [products,setProducts]=useState([])

    const [cart,setCart]=useState([])
    console.log(cart)
    useEffect(()=>{
        console.log('before fetch')
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        console.log('after fetch load')
        })

    },[])

    const handleAddtoCart=(product)=>{
        console.log(product)
        // cart.push(product)
        const newCart =[...cart,product];

        setCart(newCart)
        addToDb(product.id)
    }

    useEffect(()=>{
        console.log('local')
const storedCart=getStoredCart()

console.log(storedCart)
const savedCart=[]

for(const id in storedCart){
    console.log(id)
    const addedProduct=products.find(product=>product.id===id)
    // console.log(addedProduct)

    if(addedProduct){
        const quantity=storedCart[id];
        addedProduct.quantity=quantity
        console.log(addedProduct)
        savedCart.push(addedProduct)
    }
}
setCart(savedCart)
console.log('local finished')
    }, [products])

    return (
        <div className="  grid lg:grid-cols-[4fr,1fr] sm:grid-cols-[3fr,1fr] grid-cols-[1fr,1fr]">
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
            <div className="cart-container sticky top-0 h-[900px] ml-auto bg-orange-300 w-full ">

                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;