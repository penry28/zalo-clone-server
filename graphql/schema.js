const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type User {
        _id: ID
        name: String!
        email: String!
        password: String!
        is_online: Boolean!
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    type RootQuery {
        user: User!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
