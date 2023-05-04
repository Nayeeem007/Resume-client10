import React from 'react';
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';

const HomePage = () => {

    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomePage;