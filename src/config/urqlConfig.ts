import { retryExchange } from '@urql/exchange-retry';
import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from 'urql';

const client = createClient({
  url: 'https://www.dnd5eapi.co/graphql',
  exchanges: [
    dedupExchange,
    cacheExchange,
    retryExchange({ maxNumberAttempts: 5 }),
    fetchExchange,
  ],
});

export default client;
