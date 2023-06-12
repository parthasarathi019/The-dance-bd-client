// import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import useCart from "../../../../Hooks/useCart";
import Chackout_Form from './Chackout_Form/Chackout_Form';

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const indivisiul_payment = useLoaderData()
    // console.log(indivisiul_payment);
    const total = indivisiul_payment.class_price
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h2 className="text-3xl text-black"> -- Payment --</h2>
            <Elements stripe={stripePromise}>
                <Chackout_Form cart={indivisiul_payment} price={price}></Chackout_Form>
            </Elements>
        </div>
    );
};

export default Payment;