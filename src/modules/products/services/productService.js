import { apiClient } from '../../../api/client';
import { createProductViewData } from '../models/productModel';

export async function fetchProducts() {
  const response = await apiClient.get('/products');

  return {
    items: response.data.items.map(createProductViewData),
    total: response.data.total,
  };
}
