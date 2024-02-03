import React from 'react';
import { routes } from '../utils/routes.ts';
import { Link } from 'react-router-dom';
import { FaAppStoreIos } from "react-icons/fa6";

export default function SideNav() {
  return (
    <div className='flex flex-col justify-start'>
      <header className='m-3 text-3xl font-bold font-serif text-slate-600 '>  <FaAppStoreIos /> Company X</header>
      <hr />
      <span className='h-5'></span>
      {
        routes.map((route) =>
          <Link
            to={route.path}
            className='flex flex-row align-middle rounded m-1 bg-gray-100 hover:bg-blue-200 p-2 font-bold text-lg '
          >
            {<route.icon className=' mx-2 mt-1' />}
            {route.name}
          </Link>)
      }
    </div>
  )
}
