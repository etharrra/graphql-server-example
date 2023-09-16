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

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

-   Apollo Server: [https://www.apollographql.com/docs/apollo-server/](https://www.apollographql.com/docs/apollo-server/)
-   GraphQL: [https://graphql.org/](https://graphql.org/)
-   Nodemon: [https://nodemon.io/](https://nodemon.io/)

## Author

-   Thar Htoo
-   GitHub: [https://github.com/etharrra](https://github.com/etharrra)
