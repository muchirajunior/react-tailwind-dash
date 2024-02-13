import React from 'react'
import DashCard from './dash_card.tsx';
import * as Icons from 'react-icons/md';
import ActivityTile from './activity_tile.tsx';
//@ts-ignore
import image from "../../assets/profile.jpg";
//@ts-ignore
import image2 from "../../assets/profile2.jpg";
//@ts-ignore
import image3 from "../../assets/profile3.webp";
import { Link } from 'react-router-dom';

export default function Dashboard () : JSX.Element{
  console.log("render dashboard..");
  
  return (
    <div className='container p-1 flex flex-row'>

      <div className='flex flex-row flex-wrap'>
        <DashCard Icon={Icons.MdVisibility} title='478.99K' subtitle='Total views' />
        <DashCard Icon={Icons.MdShoppingCart} title='$708.9K' subtitle='Total Profit' />
        <DashCard Icon={Icons.MdShoppingBag} title='23990' subtitle='Total Produts' />
        <DashCard Icon={Icons.MdPeople} title='12037' subtitle='Total Users' />
      </div>

      <div className='shadow-md bg white rounded-lg m-2 p-4 flex flex-col'>
        <div className='flex justify-between mb-4'>
          <span className='font-bold'>Activity</span>
          <Link className='font-bold text-blue-800' to="#" >See More</Link>
        </div>
        <ActivityTile leading={image} title='Mary Rice' subtitle='Raised a new purchse ' trailing='10m'/>
        <ActivityTile leading={image2} title='Susan Hags' subtitle='Buy new pair product ' trailing='14m'/>
        <ActivityTile leading={image3} title='John Doe' subtitle='Request for upgrade ' trailing='15m'/>
      </div>

    </div>
  )
}
