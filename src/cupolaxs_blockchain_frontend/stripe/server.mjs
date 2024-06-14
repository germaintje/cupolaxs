import express from 'express';
import Stripe from 'stripe';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const stripe = Stripe('sk_test_51OyiKNIiIIopMRSS4v1QwCIIPFGrQjD4zPhpjIhBdsAnVQ8jDGEVGHhuzuUd9zEl4dUQd5XMvtiyU08cofCOCNBO008h88l0DJ'); // Replace with your Stripe secret key

app.use(bodyParser.json());
app.use(cors());

app.post('/create-checkout-session', async (req, res) => {
    const { cellId, price, startBookingDate } = req.body;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: `Booking for Cell ${cellId}`,
                    },
                    unit_amount: price * 100, // Convert to cents
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${process.env.BASE_URL}/success?cellId=${cellId}&startBookingDate=${startBookingDate}`,
        cancel_url: `${process.env.BASE_URL}/cancel`,
    });

    res.json({ id: session.id });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
