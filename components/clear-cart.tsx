'use client';

import { useEffect } from 'react';
import clearCartCookie from 'utils/clear-cart-cookie';

export default function ClearCart() {
  useEffect(() => {
    clearCartCookie();
  }, []);

  return null;
}
