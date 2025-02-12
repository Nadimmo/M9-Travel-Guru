import { Elements } from "@stripe/react-stripe-js"
import CheckOutForm from "./CheckOutForm"
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51PZmx2Ro2enkpQYdZ3ZdtlrvB8ixKb9oW0nuhncTegOGpo2M4gnGqE1sgo9pppKCFZ9P8nDZHJgBdRjVat4qUnhm00jbkvAaV0');

    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm />
            </Elements>
        </div>
    )
}

export default Payment