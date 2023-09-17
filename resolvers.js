import db from "./_data.js";

export const resolvers = {
	Query: {
		games() {
			return db.games;
		},
		reviews() {
			return db.reviews;
		},
		authors() {
			return db.authors;
		},
		game(parent, args, context) {
			return db.games.find((game) => game.id === args.id);
		},
		review(parent, args, context) {
			return db.reviews.find((review) => review.id === args.id);
		},
		author(parent, args, context) {
			return db.authors.find((author) => author.id === args.id);
		},
	},
	Game: {
		reviews(parent, args, context) {
			return db.reviews.filter((review) => review.game_id === parent.id);
		},
	},
	Review: {
		author(parent, args, context) {
			return db.authors.find((author) => author.id === parent.author_id);
		},
		game(parent, args, context) {
			return db.games.find((game) => game.id === parent.game_id);
		},
	},
	Author: {
		reviews(parent, args, context) {
			return db.reviews.filter((review) => review.author_id === parent.id);
		},
	},
	Mutation: {
		addGame(parent, args, context) {
			let game = {
				id: db.games.length + 1,
				...args.game,
			};
			db.games.push(game);
			return game;
		},
		addReview(parent, args, context) {
			let review = {
				id: db.reviews.length + 1,
				...args.review,
			};
			db.reviews.push(review);
			return review;
		},
		addAuthor(parent, args, context) {
			let author = {
				id: db.authors.length + 1,
				...args.author,
			};
			db.authors.push(author);
			return author;
		},
		updateGame(parent, args, context) {
			db.games = db.games.map((game) => {
				if (game.id === args.id) {
					return { ...game, ...args.edits };
				}
				return game;
			});
			return db.games.find((game) => game.id === args.id);
		},
		updateReview(parent, args, context) {
			db.reviews = db.reviews.map((review) => {
				if (review.id === args.id) {
					return { ...review, ...args.edits };
				}
				return review;
			});
			return db.reviews.find((review) => review.id === args.id);
		},
		updateAuthor(parent, args, context) {
			db.authors = db.authors.map((author) => {
				if (author.id === args.id) {
					return { ...author, ...args.edits };
				}
				return author;
			});
			return db.authors.find((author) => author.id === args.id);
		},
		deleteGame(parent, args, context) {
			db.games = db.games.filter((game) => args.id !== game.id);
			return db.games;
		},
		deleteReview(parent, args, context) {
			db.reviews = db.reviews.filter((review) => args.id !== review.id);
			return db.reviews;
		},
		deleteAuthor(parent, args, context) {
			db.authors = db.authors.filter((author) => args.id !== author.id);
			return db.authors;
		},
	},
};
