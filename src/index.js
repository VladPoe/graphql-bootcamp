import { GraphQLServer } from "graphql-yoga";
import { users, posts, comments } from "./mock";

// type definitions (schema)
const typeDefs = `
    type Query {
        me: User!
       
        users(query: String): [User!]!
        posts(searchByTitle: String): [Post!]!
        comments: [Comment!]!
    }

    type Comment {
        id: ID!
        text: String!
        author: User!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        posts: [Post!]!
        comments: [Comment!]
    }
    
    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
        comments: [Comment!]
    }
`;

// resolvers
const resolvers = {
    Query: {
        users(parent, args) {
            if (!args.query) return users;
            return users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()));
        },

        posts(parent, { searchByTitle }) {
            if (!searchByTitle) return posts;
            return posts.filter(post => post.title.toLocaleLowerCase().includes(searchByTitle.toLocaleLowerCase()));
        },

        comments(parent, args, ontext, info) {
            return comments;
        },

        me() {
            return {
                id: "qwert",
                name: "Vlad",
                email: "vlad@vlad.io",
                age: 32
            }
        },
    },

    Post: {
        author(parent, args, context, info) {
            return users.find(user => user.id === parent.author);
        },
        comments(parent, args, context, info) {
            return comments.filter(comment => comment.post === parent.id);
        },
    },
    User: {
        posts(parent, args, context, info) {
            return posts.filter(post => parent.posts.includes(post.id));
        },
        comments(parent, args, context, info) {
            return comments.filter(comment => parent.comments.includes(comment.id))
        }
    },
    Comment: {
        author(parent, args, context, info) {
            return users.find(user => user.id === parent.author)
        },
        post(parent, args, contex, info) {
            return posts.find(post => post.id === parent.post);
        },
    }
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
    console.log('The server is UP!');
});
