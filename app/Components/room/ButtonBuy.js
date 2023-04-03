import React, {useState} from 'react';
import axios from "axios";
import {loadStripe} from "@stripe/stripe-js";
import * as emailjs from "@emailjs/browser";

const ButtonBuy = ({userInfos, optionsChooses, totalPrice}) => {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const stripePromise = loadStripe(publishableKey);

    const [loading, setLoading] = useState(false);


    const item = {
        name: `Réservation PerfectParty`,
        price: totalPrice,
        quantity: 1,
        image: "https://i.pinimg.com/originals/6f/96/20/6f962015b1ac22ab1900a2dbd7b0a68c.jpg"
        //description : ""
    }

    const createCheckOutSession = async () => {
        setLoading(true);
        const stripe = await stripePromise;
        const checkoutSession = await axios.post('/api/create-stripe-session', {
            item: item,
        });
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });
        if (result.error) {
            alert(result.error.message);
        }
    };


    return (
        <button onClick={createCheckOutSession}
                className={"cursor-pointer hover:bg-[#00A7C1] duration-300 ease bg-[#01859A] w-full md:w-1/2 py-5 my-6 rounded-xl text-center"}>
            {loading ? (
                <span className={"text-2xl"}>Chargement...</span>
            ) : (
                <span className={"text-2xl"}>Payer</span>
            )}
        </button>
    );
};

export default ButtonBuy;