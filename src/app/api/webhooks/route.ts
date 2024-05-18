import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

import { stripe } from '../../../lib/stripe';


const relevantEvents = new Set([
    'product.created',
    'product.updated',
    'price.created',
    'price.updated',
    'checkout.session.completed',
    'customer.subscription.created',
    'customer.subscription.updated',
    'customer.subscription.deleted'
]);

export async function POST(
    request: Request
) {
    const body = await request.text()
    const sig = headers().get('Stripe-Signature');

    const webhookSecret =
        process.env.STRIPE_WEBHOOK_SECRET_LIVE ??
        process.env.STRIPE_WEBHOOK_SECRET;
    let event: Stripe.Event;

    try {
        // if (!sig || !webhookSecret) return;
        event = stripe.webhooks.constructEvent(body, sig!, webhookSecret!);
    } catch (err: any) {
        console.log(`❌ Error message: ${err.message}`);
        return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }

    if (relevantEvents.has(event.type)) {
        try {
            switch (event.type) {
                case 'product.created':
                case 'price.created':
                case 'customer.subscription.created':
                case 'customer.subscription.updated':
                default:
                    throw new Error('Unhandled relevant event!');
            }
        } catch (error) {
            console.log(error);
            return new NextResponse('Webhook error: "Webhook handler failed. View logs."', { status: 400 });
        }
    }

    return NextResponse.json({ received: true }, { status: 200 });
};