export async function restRequest<RespType>(url: string, method: string): Promise<RespType | null> {
    const baseUrl = process.env.BIGCOMMERCE_API_URL!;
    const response = await fetch(`${baseUrl}/stores/${process.env.BIGCOMMERCE_STORE_HASH}/${url}`, {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Auth-Token': process.env.BIGCOMMERCE_ACCESS_TOKEN!
        }
    });

    if (response.status !== 200) {
        return null;
    }

    const data = (await response.json()) as RespType;
    return data;
}
