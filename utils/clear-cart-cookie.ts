'use server';

import { cookies } from 'next/headers';

export default async function clearCartCookie() {
  cookies().delete('cartId');
}
