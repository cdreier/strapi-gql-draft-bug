import type { Core } from '@strapi/strapi';
import { resolverPermissions, resolvers, typeDefs } from './gql_extensions';



export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Core.Strapi }) {

    const extensionService = strapi.plugin('graphql').service('extension');
    extensionService.use(({ strapi }) => ({
      typeDefs,
      resolvers: resolvers(strapi),
      resolversConfig: resolverPermissions,
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) { },
};
