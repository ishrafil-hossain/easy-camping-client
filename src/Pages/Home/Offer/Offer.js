import React from 'react';
import { Link } from 'react-router-dom';

const Offer = (props) => {
    const { _id, name, img, description, price, person } = props.offer;
    return (
        <div>
            <div className="col">
                <div className="card border rounded-3 shadow p-3 mb-5 bg-body h-100">
                    <div>
                        <img src={img} className="card-img-top w-100 " alt="..." />
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h3 className="text-primary">{name}</h3>
                            <h5 className="text-warning">{person} person</h5>
                        </div>
                        <h3 className="text-end">$ <span className="text-warning">{price}</span></h3>
                        <p className="text-start">{description}</p>
                    </div>
                    <Link to={`/booking/${_id}`}>
                        <button className='btn btn-primary'>Booking Now</button>
                    </Link>
                </div>
            </div >
        </div>
    );
};

export default Offer;