const { gql } = require('apollo-server');

const typeDefs = gql`
    "BPC Queries"
    type Query {
        "Fetch blogs"
        getBlogs: [Blog!]!
    }

    "BPC Mutations"
    type Mutation {
        "Create a new blog"
        createBlog(title: String!, content: String!): CreateBlogResponse!
    }

    "Response after creating a new blog"
    type CreateBlogResponse {
        "The status code of the response"
        code: Int!
        "Indicates if the mutation is successfull"
        success: Boolean!
        "Human-readable message for the UI"
        message: String!
        "The newly created blog"
        blog: Blog
    }

    "A blog which is written in markdown format"
    type Blog {
        "The ID of the Blog"
        _id: ID!
        "The revision number of the Blog"
        _rev: String!
        "The title of the Blog"
        title: String!
        "The content of the Blog in markdown format"
        content: String!
    }
`;

module.exports = typeDefs;
