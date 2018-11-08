const { GraphQLServer } = require('graphql-yoga')

let links = [{
  id: 'link-0',
  url: 'howtographql.com',
  description: 'Fullstack!'
}]

let idCount = links.length
const resolvers = {
  Query: {
    info: () => 'This is the API of zx-node',
    feed: () => links
  },

  Mutation: {
    post: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      }
      links.push(link)
      return link
    }
  }
/***
  Link: {
    id: (root) => root.id,
    description: (root) => root.description,
    url: (root) => root.url,
  }
***/
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
