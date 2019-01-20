const mongoose = require('mongoose')

const {
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
  MONGO_INITDB_DATABASE,
} = process.env;

mongoose.connect(`mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@mongo:27017/${MONGO_INITDB_DATABASE}`);

const postSchema = new mongoose.Schema({ body: String });
const Post = mongoose.model('Post', postSchema);

// new Post({ body: 'Some Post body info' })
//   .save()
//   .then(result => console.log('RESULT => ', result))
//   .catch(err => console.error('ERROR =>', err));

// Post.find({}, (err, posts) => {
//   console.warn('POSTS => ', posts);
// });