import React from 'react';
import Footer from '../../Footer/Footer';
import Register from '../../Register/Register';
import Advantage from '../Advantage/Advantage';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Advantage></Advantage>
            <Register></Register>
            {/* <Experts></Experts> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;