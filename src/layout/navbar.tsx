import React from 'react'
import { Link } from 'react-router-dom';

export type Navigation={
  navName : string
  link : string
}

const NavBar: React.FC<{navs: Navigation[]; title: String;}> =({navs, title}) => {
  return (
    <div className='w-auto shadow py-2 px-5 text-gray-600 flex-row sticky'>
      <input type="text" className='bg-gray-100 w-80 rounded-lg border-none outline-none m-1 p-2' placeholder='search something ...' />
      <span className=' flex-fill'>{
        navs.map((nav,index)=> <Link key={index} to={nav.navName}>{nav.navName}</Link> )
      }</span>
    </div>
  )
}

export default NavBar;