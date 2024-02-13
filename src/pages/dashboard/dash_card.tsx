import React from 'react'
import { IconType } from 'react-icons';
import { MdArrowForwardIos } from 'react-icons/md';

const DashCard : React.FC<{
    Icon: IconType,
    title: string,
    subtitle: string
}> =({Icon,title,subtitle}) =>{
  return (
    <div className='rounded-lg shadow-md hover:shadow-lg bg-white hover:bg-blue-700 hover:text-white m-2 p-4 flex flex-row w-80  align-middle'>
        <div className='rounded-lg p-2 text-blue-700 bg-blue-100 flex w-14 h-14 justify-center hover:bg-white'> {<Icon className='text-4xl align-middle' />} </div>
        <div className='flex flex-col ms-3'>
            <span className='font-bold text-2xl '>{title}</span>
            <span className='text-gray-400'>{subtitle}</span>
        </div>
        <div className='text-blue-600 flex flex-col justify-center align-middle ms-auto'>
            <MdArrowForwardIos className='text-2xl' />
        </div>
    </div>
  )
}

export default DashCard;