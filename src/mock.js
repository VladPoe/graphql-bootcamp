
export const users = [
    {
        id: "1",
        name: "Vlad",
        email: "vlad@vlad.io",
        posts: ["1"],
        comments: ["1"]
    },
    {
        id: "2",
        name: "Serg",
        email: "serg@serg.io",
        age: 35,
        posts: ["2"],
        comments: ["2", "3"]
    },
    {
        id: "3",
        name: "Miha",
        email: "miha@miha.io",
        age: 32,
        posts: ["1", "2"],
        comments: ["4"]
    }
];

export const posts = [
    {
        id: "1",
        title: "One",
        body: "Body one here",
        published: false,
        author: "1"
    },
    {
        id: "2",
        title: "Two",
        body: "Body two here",
        published: true,
        author: "2"
    }
];

export const comments = [
    {
        id: "1",
        text: "Cool article",
        author: "1",
        post: "1"
    },
    {
        id: "2",
        text: "IMHO no",
        author: "2",
        post: "2"
    },
    {
        id: "3",
        text: "I am the first!",
        author: "1",
        post: "2"
    },
    {
        id: "4",
        text: "Visit my webpage",
        author: "3",
        post: "1"
    },
];