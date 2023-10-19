import { restRequest } from '.';

export interface OrderDataResponse {
    id: number;
    status: string;
    total_inc_tax: string;
    currency_code: string;
    billing_address: {
        first_name: string;
        last_name: string;
        city: string;
        country: string;
    };
}

export async function getOrderData(id: string): Promise<OrderDataResponse | null> {
    return await restRequest<OrderDataResponse>(`v2/orders/${id}`, 'GET');
}
