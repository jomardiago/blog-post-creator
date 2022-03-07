const nano = require('nano')('http://admin:admin@localhost:5984');
const blog = nano.db.use('blog');

module.exports = { blog };
