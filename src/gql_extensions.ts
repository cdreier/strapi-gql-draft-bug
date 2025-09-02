export const typeDefs = ``


export const resolverPermissions = {}

export const resolvers = (strapi) => ({
  Query: {
    motors: async (parent, args, ctx) => {
      const documents = await strapi.documents('api::motor.motor').findMany(args);
      return documents.map(doc => ctx.request.graphql.resolve('Motor', doc));
    },
  }
})