import React, { useEffect, useState } from 'react';
import UpdateOrder from '../UpdateOrder/UpdateOrder';

const ManageOrder = () => {
    const [bookings,setBookings]=useState([]);
    useEffect(() => 
    fetch('http://localhost:5000/order')
    .then(res=> res.json())
    .then(data=>setBookings(data))
, [])

    return (
        <div>
            {
                bookings.map(booking=><UpdateOrder key={booking._id} booking={booking}></UpdateOrder>)
            }
        </div>
    );
};

export default ManageOrder;