import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Share/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: appoinment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl font-bold text-success text-center my-20'>Welcome to Payment Section</h2>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <h2 class="card-title">
                        hello, {appoinment.patientName}
                    </h2>
                    <p>Please Pay First for:{appoinment.treatment}</p>
                    <p>Your Total Amount:${appoinment.price}</p>
                    <div class="card-actions justify-end">
                        <button className="btn btn-sm btn-success">Pay Now</button>
                        <div class="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;