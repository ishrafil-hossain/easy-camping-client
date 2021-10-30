import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const ManageBooking = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/offers/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    window.confirm("Are you sure want to delete this item...?");
                    const remaining = offers.filter(offer => offer._id !== id);
                    setOffers(remaining);
                }

            })
    }

    return (
        <div>
            <h2 className="mt-5 mb-5">Manage Your Offers</h2>
            {
                offers.map(offer => <div
                    key={offer._id}
                    offer={offer}
                    className="row row-cols-1 row-cols-md-2 g-1 m-2 mb-5">
                    <div className="container col">
                        <div className="card border rounded-3 shadow p-3 mb-5 bg-body h-100">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{offer.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Img src={offer.img} alt="Card image" />
                                    <Card.Text></Card.Text>
                                    <Button onClick={() => handleDelete(offer._id)} variant="danger me-5">Delete</Button>
                                    <Button variant="success">Update</Button>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageBooking;