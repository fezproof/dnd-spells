import { createClient } from 'urql';

const client = createClient({
  url: 'https://www.dnd5eapi.co/graphql',
});

export default client;
