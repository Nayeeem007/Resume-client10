import React from 'react';
import Header from './Header';
import Footer from '../footer/Footer';
import About from '../About/About';
 import ChefCard from './ChefCard';
import Extra from '../extra/Extra';

const Home = () => {

    return (
        <div>
            
            <Header></Header>
            <About></About>
            <Extra></Extra>
            <ChefCard></ChefCard>
            <Footer></Footer>
        </div>
    );
};

export default Home;