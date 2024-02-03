import React from 'react'
import NavBar from './navbar.tsx';
import SideNav from './sidenav.tsx';

const Layout: React.FC<{ component: JSX.Element }> = ({ component }) => {
    return (
        <div className='flex flex-row flex-nowrap '>
            <div className='flex flex-col p-2 w-60 shadow h-screen '>
                <SideNav />
            </div>
            <div className='flex flex-col w-full'>
                <NavBar navs={[]} title="REACT TAILWIND" />
                <main className='p-2 overflow-y-scroll w-full h-full'>
                    {component}
                </main>
              
            </div>

        </div>
    )
}

export default Layout;