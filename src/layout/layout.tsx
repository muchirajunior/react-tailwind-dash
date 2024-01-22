import React from 'react'
import NavBar from './navbar.tsx';

const Layout: React.FC<{ component: JSX.Element }> = ({ component }) => {
    return (
        <div className='flex flex-row flex-nowrap '>
            <div className='flex flex-col p-2 w-48 shadow h-screen '>
                Side Nav
            </div>
            <div className='flex flex-col w-full'>
                <NavBar navs={[]} title="REACT TAILWIND" />
                {component}
            </div>

        </div>
    )
}

export default Layout;