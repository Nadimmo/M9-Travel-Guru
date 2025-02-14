/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useBooking from "../../Hooks/useBooking";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import usePackage from "../../Hooks/usePackage";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { bookings } = useBooking();
    const { packages } = usePackage();
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const amount = bookings.reduce((acc, item) => acc + parseInt(item.price || 0), 0);

    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [cartError, setCartError] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        if (amount > 0) {
            axiosPublic.post("/create-payment-intent", { price: amount })
                .then(res => setClientSecret(res.data.clientSecret))
                .catch(() => setCartError("Failed to create payment intent. Please try again."));
        }
    }, [axiosPublic, amount]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (!card) return;

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || "Anonymous",
                    email: user?.email || "anonymous@example.com",
                }
            }
        });

        if (error) {
            setCartError(error.message);
            return;
        }

        if (paymentIntent.status === "succeeded") {
            const paymentInfo = {
                name: user?.displayName,
                email: user?.email,
                transactionId: paymentIntent.id,
                price: amount,
                bookingIds: bookings.map(booking => booking._id),
                packageIds: packages.map(pkg => pkg._id),
            };

            axiosPublic.post("/payments", paymentInfo)
                .then(res => {
                    // console.log(res.data)
                    setTransactionId(paymentIntent.id);
                    if (res.data.PaymentResult?.insertedId) {
                        Swal.fire({
                            title: "Payment Successful!",
                            text: "Your booking has been confirmed.",
                            icon: "success",
                            confirmButtonText: "Close"
                        });
                    }
                    navigate("/dashboard/paymentHistory")
                })
                .catch(() => setCartError("Failed to process payment. Please try again."));
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold text-center mb-4">Checkout</h2>
            {cartError && <p className="text-red-500 text-center mb-2">{cartError}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="p-4 border rounded-md bg-gray-50">
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
                </div>
                <button
                    type="submit"
                    disabled={!stripe}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50">
                    Pay {amount} USD
                </button>
            </form>
            {transactionId && <p className="text-green-500 text-center mt-2">Transaction ID: {transactionId}</p>}
        </div>
    );
};

export default CheckOutForm;