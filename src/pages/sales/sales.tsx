import React from 'react'

export default function Sales() : JSX.Element {
  const date= new Date();
  return (
    <div className='container p-2'>
      <div className='flex flex-row justify-between'>
        <span className=' font-bold text-2xl'>Company Sales</span>
        <span className=' font-semibold text-gray-400 text-sm'>{date.toDateString()}</span>
      </div>
    </div>
  )
}
