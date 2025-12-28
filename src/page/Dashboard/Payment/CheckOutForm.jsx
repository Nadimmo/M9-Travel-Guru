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
    const navigate = useNavigate();

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
                date: new Date(),
                bookingIds: bookings.map(booking => booking._id),
                packageIds: packages.map(pkg => pkg._id),
            };

            axiosPublic.post("/payments", paymentInfo)
                .then(res => {
                    setTransactionId(paymentIntent.id);
                    if (res.data.PaymentResult?.insertedId) {
                        Swal.fire({
                            title: "Payment Successful!",
                            text: "Your booking has been confirmed.",
                            icon: "success",
                            confirmButtonText: "Close"
                        });
                    }
                    navigate("/dashboard/paymentHistory");
                })
                .catch(() => setCartError("Failed to process payment. Please try again."));
        }
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <div className="bg-white shadow-md sm:shadow-lg rounded-lg p-4 sm:p-6 md:p-8">
                    {/* Header */}
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4 sm:mb-6 text-gray-800">
                        Checkout
                    </h2>

                    {/* Error Message */}
                    {cartError && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                            <p className="text-red-600 text-sm sm:text-base text-center">
                                {cartError}
                            </p>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                        {/* Card Element Container */}
                        <div className="p-3 sm:p-4 md:p-5 border border-gray-300 rounded-md bg-gray-50 min-h-[56px] sm:min-h-[64px] flex items-center">
                            <div className="w-full">
                                <CardElement
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '14px',
                                                '@media (min-width: 640px)': {
                                                    fontSize: '16px',
                                                },
                                                color: '#424770',
                                                '::placeholder': {
                                                    color: '#aab7c4',
                                                },
                                                lineHeight: '24px',
                                            },
                                            invalid: {
                                                color: '#9e2146',
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={!stripe || !clientSecret}
                            className="w-full bg-blue-600 text-white py-3 sm:py-3.5 px-4 rounded-md text-sm sm:text-base font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
                            Pay ${amount.toFixed(2)} USD
                        </button>
                    </form>

                    {/* Transaction Success Message */}
                    {transactionId && (
                        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
                            <p className="text-green-700 text-xs sm:text-sm text-center break-all">
                                <span className="font-semibold">Transaction ID:</span>
                                <br className="sm:hidden" />
                                <span className="sm:ml-2">{transactionId}</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckOutForm;
