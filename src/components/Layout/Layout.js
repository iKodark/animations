import React from 'react';

import { Outlet, Link, useLocation } from "react-router-dom";
import './styles.css'

const Layout = () => {

    const { pathname } = useLocation();

    const itemsSidebar = [
        {
            to: '/lottie',
            name: 'Lottie',
        },
        {
            to: '/css',
            name: 'Css',
        },
        {
            to: '/react-transition',
            name: 'React Transition',
        },
    ]

    return (
        <>
            <div className='layout'>
                <div className='menu'>
                    {
                        itemsSidebar.map((itemSidebar, index) => (
                            <li key={index} data-active={itemSidebar.to === pathname} className="menu-item">
                                <Link to={itemSidebar.to}>
                                    <span>
                                        {itemSidebar.name}
                                    </span>
                                </Link>
                            </li>
                        ))
                    }
                </div>
                
                <div className='page'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Layout;