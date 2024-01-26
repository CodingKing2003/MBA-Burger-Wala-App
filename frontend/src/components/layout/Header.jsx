import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import {FiLogIn, FiShoppingCart} from 'react-icons/fi'
import {FaUser} from 'react-icons/fa';

const Header = ({isAuthenticated=false}) => {
  return (
   <nav>
    <div>
        <IoFastFoodOutline />
    </div>
    <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
            <FiShoppingCart />
        </Link>
        <Link to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? <FaUser /> : <FiLogIn />}
        </Link>
    </div>

   </nav>
  )
}

export default Header