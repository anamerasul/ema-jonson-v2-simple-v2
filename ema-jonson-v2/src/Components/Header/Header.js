import React from 'react';
import './Header.css'
import logo from './../../images/Logo.svg'

const Header = () => {
    return (
        <div className="bg-header-color">
            <nav className="h-20 flex justify-between items-center px-36">
                <img src={logo} alt="" />

                <div className="text-slate-50 mx-5">
                    <a href="/shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;