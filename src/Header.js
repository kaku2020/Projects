
import React from 'react';
import './Header.css';
import logo from './amazon.png';
import SearchIcon from '@mui/icons-material/Search';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';




function Header() {
   const[{basket}, dispatch] = useStateValue();
  return (
   
    <div className='header'>
    
    <Link to = {"/"}> <img src={logo} className="header__logo" alt="logo" />
    </Link>
      
      
     
      
      
         <div className='header__search'><input className='header__searchInput' type='text'></input>
         <SearchIcon className='header__searchIcon'></SearchIcon></div>
         <Link to ="/login">
         <div className = 'header__option'>
            <span className = 'header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>Sign In</span>
         </div>
         </Link>
         <div className = 'header__option'>
            <span className = 'header__optionLineOne'>Return</span>
            <span className='header__optionLineTwo'>& Orders</span>
         </div>
         <div className = 'header__option'>
            <span className = 'header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
         </div>
         
         <Link to ="/checkout">
         <div className='header__optionBasket'>
            <ShoppingBasketIcon/>
            <span className='header__optionLineTwo  header__basketCount'>{basket?.length}</span>
           
         </div>
         </Link>
      

    </div>
  )
}

export default Header