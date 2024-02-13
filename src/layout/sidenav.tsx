import React from 'react';
import { routes } from '../utils/routes.ts';
import { Link } from 'react-router-dom';
import { FaAppStoreIos } from "react-icons/fa6";

export default function SideNav() {
  const current = window.location.pathname;

  return (
    <div className='flex flex-col justify-start h-full'>
      <header className='m-3 flex flex-row '>
        <FaAppStoreIos className='p-2 m-1 bg-blue-600 text-white font-bold  text-3xl w-12 h-12 rounded me-2 ' />
        <span>
          <div className='text-2xl font-bold font-serif text-slate-600 '>CompanyX</div>
          <div className='text-slate-400 ms-1'>dashboard</div>
        </span>

      </header>
      <hr />
      <span className='h-5'></span>
      {
        routes.map((route) =>
          <Link
            to={route.path}
            key={route.path}
            className={`flex flex-row align-middle rounded m-1 hover:bg-blue-600 hover:text-white p-2 font-bold text-lg 
              ${route.path === current ? "bg-blue-700 text-white" : 'bg-gray-50 text-gray-600'}`}
          >
            {<route.icon className=' mx-2 mt-1' />}
            {route.name}
          </Link>)
      }

      <div className='absolute bottom-6 bg-slate-200 m-1 p-2 rounded-xl shadow-lg'>
        <div className='text-slate-800 text-center mt-2 mb-6'>New update available <br />click to update </div>
        <button className='rounded-3xl bg-blue-700 m-2 p-2 text-white font-bold w-52'>Update!</button>

      </div>

    </div>
  )
}
