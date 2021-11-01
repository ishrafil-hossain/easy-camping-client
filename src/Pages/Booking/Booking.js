import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const { bookingId } = useParams();
    const [booking, setBooking] = useState({})

    useEffect(() => {
        fetch(`https://calm-springs-95190.herokuapp.com/offers/${bookingId}`)
            .then(res => res.json())
            .then(data => setBooking(data));
    }, []);


    // confirm booking 
    const handleAddToMyBooking = () => {

        const data = booking;

        data.email = "ishrafil2233@gmail.com";

        // console.log(data);
        fetch("https://calm-springs-95190.herokuapp.com/addBooking", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((result) => {
                alert("Booked Successfully!");
            });
    }
    return (
        <div>
            <h2>Details of {booking.name}</h2>

            <div >
                {/* offer div  */}
                <div className="row row-cols-1 row-cols-md-2 g-4 m-2 mb-5">
                    <div className="col">
                        <div className="card border rounded-3 shadow p-3 mb-5 bg-body h-100">
                            <div>
                                <img src={booking.img} className="card-img-top w-100 " alt="..." />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h3 className="text-primary">{booking.name}</h3>
                                    <h5 className="text-warning">{booking.person} person</h5>
                                </div>
                                <h3 className="text-end">$ <span className="text-warning">{booking.price}</span></h3>
                                <p className="text-start">{booking.description}</p>
                            </div>
                        </div>
                    </div >

                    {/* form div  */}
                    <div className="mt-5 mb-5 add-offer form">
                        <h2>Please enter your address </h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupText">
                                <Form.Control className="w-100" type="text" placeholder="name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control className="w-100" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGroupAddress">
                                <Form.Control className="w-100" type="text" placeholder="Your address" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGroupNumber">
                                <Form.Control className="w-100" type="text" placeholder="Phone number" />
                            </Form.Group>

                            <Button onClick={handleAddToMyBooking} variant="primary">Confirm Booking</Button>

                        </Form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Booking;