import React from 'react';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import Price from '../Price/Price';
import Sefety from '../Safety/Sefety';

const Home = () => {
    return (
        <div>
            <div id="home">
                <Banner></Banner>
                <Offers></Offers>

            </div>
            <Price></Price>
            <Sefety></Sefety>
        </div>
    );
};

export default Home;