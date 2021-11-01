import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBooking = () => {
    const email = "ishrafil2233@gmail.com";
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth({});
    useEffect(() => {
        fetch(`https://calm-springs-95190.herokuapp.com/myBooking/${email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [email]);

    // delete button function 
    // console.log(bookings);
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to delete booking?');
        if (confirm) {
            fetch(`https://calm-springs-95190.herokuapp.com/myBooking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);

                })

        }

    }
    return (
        <div>
            <h2 className="mt-5">My Booking List </h2>
            <ol className="d-flex justify-content-center shadow-lg p-3 mb-5 bg-white rounded m-5">
                <div>
                    {
                        bookings.map(booking => <div striped bordered hover size="sm" className="text-start">
                            <h2> <li>Name : {booking.name}</li></h2>
                            <p>Price : ${booking.price}</p>
                            <p>Person :{booking.person}</p>
                            <div>
                                <Button
                                    variant="warning me-2">Pending</Button>
                                <Button onClick={() => handleDelete(booking?._id)} variant="danger">Delete</Button>
                            </div>
                        </div>)
                    }
                </div>
            </ol>

        </div>
    );
};

export default MyBooking;