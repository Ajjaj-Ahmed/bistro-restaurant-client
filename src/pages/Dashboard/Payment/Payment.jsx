import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// VITE_Payment_Gateway_PK=pk_test_51RAmG3IzAIJkATc0OtP9evILKW3kK9A015UiOH9uAZJv55B03pqZu2EjsXsrIos6XXIdcDfIo7PgJJh0cBRF8y5800LNzUht3n

// add publishible key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {

    return (
        <div>
            <SectionTitle heading={'Payment'} subHeading={'Please pay to eat'}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;