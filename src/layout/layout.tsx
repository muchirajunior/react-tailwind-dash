import React from 'react'
import Navbar from '../components/navbar/navbar.tsx';

const Layout: React.FC<{ component: JSX.Element }> = ({ component }) => {
    return (
        <div className='flex flex-row flex-nowrap '>
            <div className='sm:container '>
                Side Nav
            </div>
            <div className='flex flex-col'>
                <Navbar navs={[]} title="REACT TAILWIND" />
                {component}
            </div>

        </div>
    )
}

export default Layout;