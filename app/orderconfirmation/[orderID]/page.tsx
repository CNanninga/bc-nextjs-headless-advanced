import OrderConfirmView from 'components/order/order-confirm-view';
import { getOrderData } from 'utils/bigcommerce-api/get-order-data';

export default async function OrderConfirmationPage({ params }: { params: { orderID: string } }) {
  const { orderID } = params;
  const orderData = await getOrderData(orderID);

  return (
    <div>
        {orderData && 
            <OrderConfirmView order={orderData} />
        }
    </div>
  )
}
