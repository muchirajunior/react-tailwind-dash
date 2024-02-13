import React from 'react'


const ActivityTile : React.FC<{
    leading: any
    title: string,
    subtitle: string,
    trailing: string
}> =({leading,title,subtitle,trailing}) =>{
  return (
    <div className='flex flex-row justify-between w-96 m-2'>
       <img src={leading} alt="" className='rounded-full' width={50} />
       <div className='flex flex-col ms-3'>
            <span className='font-bold text-xl '>{title}</span>
            <span className='text-gray-400'>{subtitle}</span>
        </div>
        <div className='text-gray-600 flex flex-col justify-center align-middle ms-auto'> {trailing} </div>

    </div>
  )
}

export default ActivityTile;