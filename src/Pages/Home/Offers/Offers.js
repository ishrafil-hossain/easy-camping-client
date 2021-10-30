import React, { useEffect, useState } from 'react';
import Offer from '../Offer/Offer';

const Offers = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/offers')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])
    return (
        <div>
            <h1 className='mt-5'>Our offers</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
                {
                    offers.map(offer => <Offer
                        key={offer._id}
                        offer={offer}
                    ></Offer>)
                }

            </div>
        </div>
    );
};

export default Offers;