const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
type Query {
    info:String!
    feed:[Link!]!
}

type Mutation {
    post(url: String!, description: String!): Link!
}

type Link {
    id:ID!
    description:String!
    url:String!
}
`
let links = [{
  id: 'link-0',
  url: 'howtographql.com',
  description: 'Fullstack!'
}]

const resolvers = {
  Query: {
    info: () => 'This is the API of zx-node',
    feed: () => links
  },

  Link: {
    id: (root) => root.id,
    description: (root) => root.description,
    url: (root) => root.url
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
