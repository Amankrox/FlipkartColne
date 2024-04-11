import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ThreeDot from "../Images/dot.png"
const Headers = () => {

  let [isOpen , setIsOpen] = useState(false)
  return (
    <div className='grid grid-cols-2 p-2 justify-around'>
      <div className='flex'>
        <div className='ml-20'>
        <Link to={"/"} className='text-blue-700 text-xl font-bold italic'>Flipkart</Link>
        <h4 className='text-gray-500 italic'>Explore</h4>
        </div> 
        <div  className='bg-blue-50 flex items-center p-2 w-full ml-10 '>

        <SearchIcon className='w-5 h-5 ml-2'/> 
      
        <input className='bg-blue-50 ml-3  text-gray-900 text-xl rounded-lg block w-full' placeholder='Search for Products, Brands and More'  required/>    
      
        {/* <Link to={"/register"}>Register</Link> */}
       
        </div>
        </div>
        <div className='flex items-center gap-20'>
        <div className="relative"  onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
     
      <Link to={"/login"} > <div
        className="w-20 h-25  flex items-center justify-center text-lg ml-5 hover:text-white hover:bg-blue-500 p-3 rounded-xl"
      > Login </div>
      </Link>
        
        {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-72 bg-white shadow-md p-4 ">
          <ul>
            <li className="mb-2">
              <Link className='flex items-center justify-between border-solid border-b-2 p-2' title='Sign Up'>
              <div>New Customer?</div>
              <div>
                <Link className='text-blue-500 font-bold' title='Sign Up'>Sign Up</Link>
              </div>
               </Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p-1" title='My Profile'>
              <Link>My Profile</Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p-1" title='Flipkart Plus Zone'>
              <Link>Flipkart Plus Zone</Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p-1" title='Orders'>
              <Link>Orders</Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p-1" title='WishList'>
              <Link>WishList</Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p-1" title='Rewards'>
              <Link>Rewards</Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p1" title='GiftCards'>
              <Link>GiftCards</Link>
            </li>
          </ul>
        </div>
      )}
        </div>
      <div className='flex ml-16'>
      <ShoppingCartIcon className='w-6 h-5'/> 
      <h1 className='ml-2'>Cart</h1>
      </div>
      <div className='flex ml-16'>
      <StorefrontIcon className='w-6 h-5'/>
      <h1 className='ml-2'>Become a seller</h1>

   </div>
    <div className='flex ml-16'>
    <img src={ThreeDot} className='w-6 h-5'/>

    </div>
    </div>
    </div>
  )
}

export default Headers