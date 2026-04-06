import { describe, expect, it } from 'vitest';

import { createProductViewData } from './productModel';

describe('createProductViewData', () => {
  it('maps raw product data into page-friendly data', () => {
    const result = createProductViewData({
      id: 2,
      name: 'API Explorer',
      category: 'Data',
      priceLabel: '$79',
      statusLabel: 'Low stock',
      description: 'Practice server-state patterns.',
    });

    expect(result).toEqual({
      id: 2,
      name: 'API Explorer',
      category: 'Data',
      priceLabel: '$79',
      statusLabel: 'Low stock',
      description: 'Practice server-state patterns.',
    });
  });
});
