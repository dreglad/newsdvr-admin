import get from 'lodash/get';
import gql from 'graphql-tag'
import buildGraphQLProvider from 'ra-data-graphql';
import buildPrismaProvider, { buildQuery } from 'ra-data-opencrud';

import fragments from './queries';

import apolloClient from './apollo';

const enhanceBuildQuery = (buildQuery) => (introspectionResults) => (fetchType, resourceName, params) => {
  if (resourceName === 'Store') {
    console.log('EEEEY', fetchType, params)
    const builtQuery = buildQuery(introspectionResults)(fetchType, resourceName, params);
    console.log(builtQuery)

    switch (fetchType) {
      case 'GET_LIST':
        return {
          // Use the default query variables and parseResponse
          ...builtQuery,
          // Override the query
          query: gql`
            query Stores {
              stores(stream: { name: "teleSUR HD I" }) {
                name
                start
                end
                stream { id, name }
              }
            }
          `,
          parseResponse: response => {
            const stores = response.data.stores;
            return {
              data: stores.map(store => ({
                ...store,
                id: `${store.stream.name}-${store.name}`
              })),
              total: stores.length
            }
          }
        }
      case 'GET_MANY_REFERENCE':
        return {
          // Use the default query variables and parseResponse
          ...builtQuery,
          // Override the query
          query: gql`
            query Stores($streamId: ID) {
              stores(stream: { id: $streamId }) {
                name
                start
                end
                stream { id, name }
              }
            }
          `,
          variables: {
            streamId: params.id
          },
          parseResponse: response => {
            const stores = response.data.stores;
            return {
              data: stores.map(store => ({
                ...store,
                id: `${store.stream.name}-${store.name}`
              })),
              total: stores.length
            }
          }
        }
    }
  } else {
    const fragment = get(fragments, `${resourceName}.${fetchType}`);
    
    return buildQuery(introspectionResults)(fetchType, resourceName, params, fragment);
  }
};

const prismaProvider = buildPrismaProvider({
  client: apolloClient,
  buildQuery: enhanceBuildQuery(buildQuery)
});

// const apiProvider = buildGraphQLProvider({
//   client: apolloClient,
//   buildQuery: enhanceBuildQuery(buildQuery)
// });

export default async (type, resource, params) => {
  const prisma = await prismaProvider;
  // const api = await apiProvider;
  console.log('EJECUTANDO', prisma)
  // console.log(apiProvider)
  

  if (resource === 'storesp') {
    // return api(type, resource, params);
  } else {
    return prisma(type, resource, params);
  }
  // const dataProviderMapping = dataProviders.find(dp => dp.resources.includes(resource));
  // return dataProviderMapping.dataProvider(type, resource, params);
};

// export default () => {
//   console.log(a, b, c)
//   return buildPrismaProvider({
//     clientOptions: {
//       uri: process.env.REACT_APP_API_ENDPOINT
//     },
//     buildQuery: enhanceBuildQuery(buildQuery)
//   });
// }
