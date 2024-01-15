import React from 'react'
import { Link } from 'react-router-dom';

export type Navigation={
  navName : string
  link : string
}

const Navbar: React.FC<{navs: Navigation[]; title: String;}> =({navs, title}) => {
  console.log(navs);
   console.log(title);
   
  return (
    <div className='w-100 bg-slate-950 py-2 px-5 text-amber-50 flex-row'>
      <span className='font-bold text-2xl'>REACT-TAILWIND</span>
      <span className=' flex-fill'>{
        navs.map((nav,index)=> <Link key={index} to={nav.navName}>{nav.navName}</Link> )
      }</span>
    </div>
  )
}

export default Navbar;