
import { elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = ({ appoinment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [CardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const { _id, price, patient, patientName } = appoinment;
    const [clientSecret, setClientSecret] = useState("");


    useEffect(() => {

        fetch("https://fathomless-dusk-01494.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setSuccess('');
        setProcessing(true)
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient,

                    },
                },
            },
        );
        if (intentError) {
            setProcessing(false)
            setCardError(intentError?.message);
        } else {

            setCardError('');
            console.log(paymentIntent)
            setTransactionId(paymentIntent.id)
            setSuccess('Congrats! Your payment is completed')

            // payment storage
            const payment = {
                appoinment: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://fathomless-dusk-01494.herokuapp.com/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data)
                })

        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement className=''
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-10 btn  btn-sm' type="submit" disabled={!stripe}>
                    Pay Now
                </button>
            </form>

            {
                CardError && <p className='text-red-500'>{CardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}</p>
                    <p>Your Transaction id: <span className='text-orange-500'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;