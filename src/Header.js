
import React from 'react';
import './Header.css';
import logo from './amazon.png';
import SearchIcon from '@mui/icons-material/Search';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
         <img src={logo} className="header__logo" alt="logo" />
         <div className='header__search'><input className='header__searchInput' type='text'></input>
         <SearchIcon className='header__searchIcon'></SearchIcon></div>
         <div className = 'header__option'>
            <span className = 'header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>Sign In</span>
         </div>
         <div className = 'header__option'>
            <span className = 'header__optionLineOne'>Return</span>
            <span className='header__optionLineTwo'>& Orders</span>
         </div>
         <div className = 'header__option'>
            <span className = 'header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
         </div>
         <div className='header__optionBasket'>
            <ShoppingBasketIcon/>
            <span className='header__optionLineTwo  header__basketCount'>0</span>
         </div>
    </div>
  )
}

export default Header