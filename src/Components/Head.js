import React from 'react'
import HamburgerMenu from '../Images/hamburger.png'
import UserIcon from '../Images/user_icon.png'
import YT_Logo from '../Images/YouTube-logo.png'
import Notification from '../Images/notification.png'
import Search from '../Images/search.png'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utilities/appSlice'


const Head = () => {
    const dispatch = useDispatch()
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg  '>        
        <div className='flex'>    
            <div>
                
            <img 
            alt='menu'
            onClick={()  => toggleMenuHandler()}
            className='w-12 p-2 m-2  hover:bg-slate-300 rounded-full  cursor-pointer    '
            src={HamburgerMenu} />
            </div>        
            <div>
            <img 
            alt='YT-logo'
            className='w-30 h-12 p-2 m-2      '
            src={YT_Logo} />  
            </div>
            
        </div>
        <div className='col-span-10 text-center   '>            
            <input 
            className='w-1/2 h-10 border  border-gray-400 rounded-s-full '
            type="text" ></input>
            <button
            className='border
                 
            border-gray-400 h-10 rounded-e-full text-center px-5 py-2 bg-gray-100 '
            >     🔍       
            </button>
        </div>
        <div className='flex col-span-1'>
            <div>
            <img             
            alt='Notification'
            className=' w-30 h-12 p-2 m-2      '
            src={Notification} /> 
            </div>
            <div>            
            <img             
            alt='User-icon'
            className=' w-30 h-12 p-2 m-2      '
            src={UserIcon} /> 
            </div>
        </div>
    </div>
  )
}

export default Head