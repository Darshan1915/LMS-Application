import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // ✅ import useLocation
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext';


function Navbar() {
  const location = useLocation(); // ✅ get location object
  const navbarColor = location.pathname === '/course-list'; // ✅ compare like a string

  const navigate = useNavigate();
  const {isEducator} = useContext(AppContext)

  const {openSignIn} = useClerk();
  const {user} = useUser();
  
  return (
    <>
      <div className={`flex items-center justify-between py-5  ${navbarColor ? 'bg-white' : 'bg-blue-200'}`}>
        <div className='ml-28'>
          <img src={assets.logo} 
          alt='Logo' 
          className='cursor-pointer w-28 lg:w-32'
          onClick={()=>navigate('/')}
          />
        </div>
        <div className='flex items-center gap-4 mr-28'>
          <div className='hidden gap-2 md:flex '>
            {/* jevvha user logedin asn tevach he disel */}
            { user && <>
              <Link to={'/educator'}> {isEducator ? 'Educator Dashboard' : 'Become Educator'} </Link>
              |
              <Link to='/my-enrollments'>My Enrollment</Link>
            </>}
          </div>
          <div>
            {user ? <UserButton/>:
              <button onClick={()=>openSignIn()} 
              className='px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600'>Create Account</button>}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;




//FromBloackBoz.AI:=>

// // Navbar.jsx

// import React from 'react';
// import { assets } from '../../assets/assets'


// const Navbar = () => {
  
    
  
//     return (
//         <nav className="flex items-center justify-between p-4 bg-white shadow">
//             <div className="flex items-center">
//                 <img src={assets.logoo} alt='Logo' className='w-16 cursor-auto lg:w-24'/>
//                 <span className="ml-1 text-gray-700 hover:text-blue-500">LearNet Acadamy</span>
//             </div>
//             <div className="flex space-x-4">
//                 <a href="#" className="text-gray-700 hover:text-blue-500">Add Courses</a>
//                 <a href="#" className="text-gray-700 hover:text-blue-500">Login</a>
//                 <a href="#" className="px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600">
//                     Create Account
//                 </a>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;