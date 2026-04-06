import { env } from '../config/env';

const demoUser = {
  id: 1,
  email: 'student@react-learning.dev',
  name: 'React Learner',
  role: 'student',
};

const productRecords = [
  {
    id: 1,
    name: 'Starter Dashboard',
    category: 'UI',
    price: 49,
    stock: 14,
    description: 'A simple admin dashboard example for practicing reusable layout patterns.',
  },
  {
    id: 2,
    name: 'API Explorer',
    category: 'Data',
    price: 79,
    stock: 9,
    description: 'A mock data viewer used to practice React Query, loading states, and refetching.',
  },
  {
    id: 3,
    name: 'Auth Playground',
    category: 'Security',
    price: 99,
    stock: 4,
    description: 'A sample feature set for login, token refresh, protected routes, and session recovery.',
  },
];

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function readToken(config) {
  return config.headers?.Authorization?.replace('Bearer ', '') || null;
}

function buildResponse(config, data, status = 200) {
  return {
    data,
    status,
    statusText: 'OK',
    headers: {},
    config,
  };
}

function buildError(config, status, message) {
  return Promise.reject({
    response: {
      data: { message },
      status,
      statusText: 'Error',
      headers: {},
      config,
    },
    config,
    message,
  });
}

function mapProduct(record) {
  return {
    ...record,
    priceLabel: `$${record.price}`,
    statusLabel: record.stock > 10 ? 'Healthy stock' : 'Low stock',
  };
}

export async function mockApiAdapter(config) {
  await wait(env.apiDelay);

  const { url, method, data } = config;
  const payload = typeof data === 'string' && data ? JSON.parse(data) : data;

  if (url === '/auth/login' && method === 'post') {
    if (payload.email === demoUser.email && payload.password === '123456') {
      return buildResponse(config, {
        user: demoUser,
        accessToken: 'access-active',
        refreshToken: 'refresh-valid',
      });
    }

    return buildError(config, 400, 'Invalid email or password.');
  }

  if (url === '/auth/refresh' && method === 'post') {
    if (payload.refreshToken === 'refresh-valid') {
      return buildResponse(config, {
        accessToken: 'access-active',
        refreshToken: 'refresh-valid',
      });
    }

    return buildError(config, 401, 'Refresh token has expired. Please log in again.');
  }

  if (url === '/auth/profile' && method === 'get') {
    const token = readToken(config);

    if (token === 'access-active') {
      return buildResponse(config, { user: demoUser });
    }

    if (token === 'access-expired') {
      return buildError(config, 401, 'Access token expired.');
    }

    return buildError(config, 403, 'Not allowed to view this profile.');
  }

  if (url === '/products' && method === 'get') {
    const token = readToken(config);

    if (!token) {
      return buildError(config, 401, 'You need to login before requesting products.');
    }

    if (token === 'access-expired') {
      return buildError(config, 401, 'Session expired. Refresh required.');
    }

    if (token !== 'access-active') {
      return buildError(config, 403, 'Access denied for this account.');
    }

    return buildResponse(config, {
      items: productRecords.map(mapProduct),
      total: productRecords.length,
    });
  }

  return buildError(config, 500, `No mock handler for ${method?.toUpperCase()} ${url}`);
}
