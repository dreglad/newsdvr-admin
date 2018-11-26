import buildPrismaProvider, { buildQuery } from 'ra-data-opencrud';
import get from 'lodash/get';

import fragments from './queries';

const enhanceBuildQuery = (buildQuery) => (introspectionResults) => (fetchType, resourceName, params) => {
  const fragment = get(fragments, `${resourceName}.${fetchType}`);
  console.log('fragment', fragment)

  return buildQuery(introspectionResults)(fetchType, resourceName, params, fragment);
};

export default async () => {
  console.log('a', process.env.REACT_APP_API_ENDPOINT)
  return await buildPrismaProvider({
    clientOptions: {
      uri: process.env.REACT_APP_API_ENDPOINT
    },
    buildQuery: enhanceBuildQuery(buildQuery)
  });
}
