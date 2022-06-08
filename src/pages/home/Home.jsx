import React from 'react';

import List from '../list/List';
import "./Home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from '../../components/header/Header';
import Featured from '../../components/Feature/Featured';
import Footer from '../../components/footer/Footer';
import PropertyList from '../../components/PropertyList/PropertyList';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured/>
                <h1 className='homeTitle'>Browse by property type</h1>
                <PropertyList/>
            </div>

            <Footer/>

            
        
            
        </div>
    );
};

export default Home;