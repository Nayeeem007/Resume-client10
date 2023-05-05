import React, { useContext } from 'react';
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const HomePage = () => {
    const {loading}=useContext(AuthContext)
   

    return (
        <div>

            <NavBar></NavBar>
            {loading && <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>}
            <Outlet></Outlet>
        </div>
    );
};

export default HomePage;