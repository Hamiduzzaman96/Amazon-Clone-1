import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { FaBars, FaTimes } from "react-icons/fa"


function Header() {
  const [isOpen, isClose] = useState(true)
  const [{basket,user},dispatch] = useStateValue();
  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }
  return (
   
    <div className="header">
        
       <div className='header_left'>
        <div className='header_logo_image'>
        <Link to="/"> <img  alt ="asdasd" className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/></Link>
        </div>
        <div className='header_list'>
        <div>
        <button 
            onClick={() => isClose(!isOpen)} 
            class="btn-1">
           <FaBars/>
           </button>
        </div>
       
      {isOpen &&(
      <div>
     
          <Link to='/login'>
            <div onClick={handleAuthentication} className='header_option'>
            <span className='header_optionLine1'>Hello! {!user ? 'Guest':user.email}</span>
            <span className='header_optionLine2'>{user? 'Sign out':'Sign In'}</span>
            </div>
            </Link>
            <div className='header_option'>
            <span className='header_optionLine1'>Returns</span>
            <span className='header_optionLine2'>& Orders</span>
            </div>
            <div className='header_option'>
            <span className='header_optionLine1'>Your</span>
            <span className='header_optionLine2'>Prime</span>
           
          </div>

        </div>
        )}
  </div>

       </div>
       <div className="header_search">
         <input className="header_searchInput" type="text"/>
         <SearchIcon  className='header_searchIcon'/>
        </div>
       
          <div className='header_right'>
           
           <Link to="/checkout">
           <div className="header_optionBasket">
            <ShoppingBasketIcon/>
              <span className="header_optionLineTwo header_basketCount">
                {basket?.length}
              </span>
              
            </div>
           </Link>
       </div>    


       
       
    </div>
  )
}

export default Header
