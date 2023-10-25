import Price from 'components/price';
import { OrderDataResponse } from 'utils/bigcommerce-api/get-order-data';

export default function OrderConfirmView({ order }: { order: OrderDataResponse }) {
    return (
        <div className="mx-8 max-w-2xl py-20 sm:mx-auto">
            <h1 className="bold mb-8 text-2xl">Thank you for your order!</h1>
            <div>
                <label className="font-bold">Order ID:</label> {order.id}
            </div>
            <div>
                <label className="font-bold">Status:</label> {order.status}
            </div>
            <div className="my-8">
                <label className="block font-bold">Total:</label>
                <Price amount={order.total_inc_tax} 
                    currencyCode={order.currency_code} />
            </div>
            <div className="my-8">
                <label className="block font-bold">Shipping to:</label>
                {order.billing_address.first_name} {order.billing_address.last_name}
                <br />
                {order.billing_address.city}, {order.billing_address.country}
            </div>
        </div>
    );
}
