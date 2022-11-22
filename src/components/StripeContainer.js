import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51M3m1oJCALE6x3m35CIodNlwdKAdD5qrU6Rg6Ruzj0C6r3fD6WwnFhzufv8UpxTD55f2yholy2zQD2NpoKI8T1Ba00hr2w46vi"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm />
    </Elements>
  )
}
