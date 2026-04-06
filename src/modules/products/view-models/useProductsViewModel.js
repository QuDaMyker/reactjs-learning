import { useQuery } from '@tanstack/react-query';

import { fetchProducts } from '../services/productService';

export function useProductsViewModel() {
  const query = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    errorMessage: query.error?.response?.data?.message || 'Something went wrong.',
    items: query.data?.items || [],
    total: query.data?.total || 0,
    refetch: query.refetch,
  };
}
