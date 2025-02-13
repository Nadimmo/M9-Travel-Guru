/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useContext, useEffect, useState } from "react";
import useBooking from "../../Hooks/useBooking";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { bookings } = useBooking()
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const amount = bookings.reduce((acc, item) => acc + parseInt(item.price || 0), 0)
    // console.log
    const [clientSecret, setClientSecret] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [transactionId, setTransactionId] = useState("");
    const [cartError, setCartError] = useState("");

    useEffect(() => {
        axiosSecure.post("/create-payment-intent",{ price: amount})
            .then(res => {
                // console.log(res.data)
                setClientSecret(res.data.clientSecret)
            })
            .catch((error) => {
                console.error("Error creating payment intent:", error);
                setCartError("Failed to create payment intent. Please try again.");
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [axiosSecure,amount])



    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
       
        console.log("payment method",paymentMethod)
       
        const { error: cartError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details:{
                    name: user?.name || "anonymous",
                    email: user?.email || "anonymous",
                }
            }
        });

        console.log("payment intent",paymentIntent)
        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
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
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    )
}

export default CheckOutForm