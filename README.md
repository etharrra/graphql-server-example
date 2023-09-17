# GraphQL Server Testing

This project demonstrates how to set up a GraphQL server using Apollo Server and Nodemon for automatic server restart during development. It also includes a basic testing setup.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

-   Node.js: [Download and Install Node.js](https://nodejs.org/)
-   NPM (Node Package Manager): Comes bundled with Node.js
-   Git: [Download and Install Git](https://git-scm.com/)

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/etharrra/graphql-server-example.git
    cd graphql-server-example
    ```

2. Install project dependencies:

    ```bash
    npm install
    ```

## Project Structure

```
|-- graphql-server-example/
    |-- _data.js
    |-- .gitignore
    |-- index.js
    |-- package.json
    |-- README.md
    |-- resolvers.js
    |-- schema.js
```

-   `schema.js`: Contains the GraphQL schema.
-   `index.js`: Main server file and involve resolvers.
-   `_data.js`: Arrays of objects to act as database.

## Usage

To start the server with Nodemon for automatic restart during development, run:

```bash
npm run watch
```

Your GraphQL server will be available at `http://localhost:4000` (or the port you specified in your `index.js` file).

## Example Queries

### Get a List of All Games

```graphql
query {
	games {
		id
		title
		platform
	}
}
```

#### Get a List of All Reviews

```graphql
query {
	reviews {
		id
		rating
		content
	}
}
```

#### Get a List of All Authors

```graphql
query {
	authors {
		id
		name
		verified
	}
}
```

#### Get a Specific Game by ID

```graphql
query {
	game(id: "your-game-id-here") {
		id
		title
		platform
	}
}
```

#### Get a Specific Review by ID

```graphql
query {
	review(id: "your-review-id-here") {
		id
		rating
		content
	}
}
```

#### Get a Specific Author by ID

```graphql
query {
	author(id: "your-author-id-here") {
		id
		name
		verified
	}
}
```

### Example Mutations

#### Add a New Game

```graphql
mutation {
	addGame(game: { title: "New Game Title", platform: ["Platform1", "Platform2"] }) {
		id
		title
		platform
	}
}
```

#### Add a New Review

```graphql
mutation {
	addReview(review: { rating: 5, content: "This is a great game!", game_id: "your-game-id-here", author_id: "your-author-id-here" }) {
		id
		rating
		content
	}
}
```

#### Add a New Author

```graphql
mutation {
	addAuthor(author: { name: "New Author", verified: true }) {
		id
		name
		verified
	}
}
```

#### Update a Game

```graphql
mutation {
	updateGame(id: "your-game-id-here", edits: { title: "Updated Game Title", platform: ["Updated Platform"] }) {
		id
		title
		platform
	}
}
```

#### Update a Review

```graphql
mutation {
	updateReview(id: "your-review-id-here", edits: { rating: 4, content: "Updated review content", game_id: "new-game-id", author_id: "new-author-id" }) {
		id
		rating
		content
	}
}
```

#### Update an Author

```graphql
mutation {
	updateAuthor(id: "your-author-id-here", edits: { name: "Updated Author Name", verified: false }) {
		id
		name
		verified
	}
}
```

#### Delete a Game

```graphql
mutation {
	deleteGame(id: "your-game-id-here") {
		id
		title
		platform
	}
}
```

#### Delete a Review

```graphql
mutation {
	deleteReview(id: "your-review-id-here") {
		id
		rating
		content
	}
}
```

#### Delete an Author

```graphql
mutation {
	deleteAuthor(id: "your-author-id-here") {
		id
		name
		verified
	}
}
```

Please replace `"your-game-id-here"`, `"your-review-id-here"`, and `"your-author-id-here"` with actual IDs from your data when using these queries and mutations.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

-   Apollo Server: [https://www.apollographql.com/docs/apollo-server/](https://www.apollographql.com/docs/apollo-server/)
-   GraphQL: [https://graphql.org/](https://graphql.org/)
-   Nodemon: [https://nodemon.io/](https://nodemon.io/)

## Author

-   Thar Htoo
-   GitHub: [https://github.com/etharrra](https://github.com/etharrra)
