const { blog } = require('./dbs');

const resolvers = {
    Query: {
        // Returns an array of blogs
        async getBlogs() {
            const { rows } = await blog.list({ include_docs: true });
            const blogs = rows.map(({ doc }) => ({ ...doc }));
            return blogs;
        }
    },
    Mutation: {
        // Creates a new blog
        async createBlog(_, { title, content }) {
            try {
                if (!title) {
                    throw Error('Title is a required field');
                }

                if (!content) {
                    throw Error('Content is a required field');
                }

                const { id, rev } = await blog.insert({ title, content });
                return {
                    code: 200,
                    success: true,
                    message: 'Blog successfully created',
                    blog: { _id: id, _rev: rev, title, content }
                };
            } catch ({ message }) {
                return {
                    code: 500,
                    success: false,
                    message,
                    blog: null
                }
            }
        }
    }
};

module.exports = resolvers;
