export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query {
        games: [Game]
        reviews: [Review]
        authors: [Author]
        game(id: ID!): Game
        review(id: ID!): Review
        author(id: ID!): Author
    }
    type Mutation {
        addGame(game: AddGameInput!): Game
        addReview(review: AddReviewInput!): Review
        addAuthor(author: AddAuthorInput!): Author
        updateGame(id: ID!, edits: EditGameInput!): Game
        updateReview(id: ID!, edits: EditReviewInput!): Review
        updateAuthor(id: ID!, edits: EditAuthorInput!): Author
        deleteGame(id: ID!): [Game]
        deleteReview(id: ID!): [Review]
        deleteAuthor(id: ID!): [Author]
    }
    input AddGameInput {
        title: String!,
        platform: [String!]!
    }
    input AddReviewInput {
        rating: Int!,
        content: String!
        game_id: ID!
        author_id: ID!
    }
    input AddAuthorInput {
        name: String!,
        verified: Boolean!
    }
    input EditGameInput {
        title: String,
        platform: [String!]
    }
    input EditReviewInput {
        rating: Int,
        content: String
        game_id: ID
        author_id: ID
    }
    input EditAuthorInput {
        name: String,
        verified: Boolean
    }
`;

// data types ==> int, float, string, boolean, ID
