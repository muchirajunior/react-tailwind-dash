import React from 'react'
import { MdChat, MdNotifications, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
//@ts-ignore
import image from "../assets/profile3.webp";

export type Navigation = {
  navName: string
  link: string
}

const NavBar: React.FC<{ navs: Navigation[]; title: String; }> = ({ navs, title }) => {
  return (
    <div className='w-auto shadow py-2 px-5 text-gray-600 flex flex-row sticky'>
      <div className='shadow-lg w-96 rounded-lg p-2 m-1 bg-slate-50 flex flex-row align-middle'>
        <MdSearch className='text-2xl mt-2 mx-1' />
        <input type="text" className=' border-none outline-none' placeholder='search something ...' />
      </div>
      <span className=' flex-fill'>{
        navs.map((nav, index) => <Link key={index} to={nav.navName}>{nav.navName}</Link>)
      }</span>
      <div className='flex flex-row float-end  ms-auto'>
        <span className='m-1 p-3 bg-gray-100 text-xl rounded-full'> <MdChat /> </span>
        <span className='m-1 p-3 bg-gray-100 text-xl rounded-full'> <MdNotifications /> </span>
        <img src={image} alt='' width={50} className='m-1 p-1 bg-gray-100 text-xl rounded-full' />
      </div>
    </div>
  )
}

export default NavBar;