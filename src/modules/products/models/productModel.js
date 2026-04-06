export function createProductViewData(product) {
  return {
    id: product.id,
    name: product.name,
    category: product.category,
    priceLabel: product.priceLabel,
    statusLabel: product.statusLabel,
    description: product.description,
  };
}
