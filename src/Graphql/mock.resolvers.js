const mockData = require('./mock.data');

const getUsers = () => mockData.users;

const getUser = (parent, args) => mockData.users.find(user => (user.id == args.id));

const updateUser = (_, args) => {
  const user = getUser(_, args);
  if (!user) {
    throw new Error(`Couldn't find user with id ${args.id}`);
  }
  if (args.name){
    user.name = args.name
  }
  if (args.email){
    user.email = args.email
  }
  return user;
}

module.exports = {
  Query: {
    users: getUsers,
    user: getUser,
  },
  Mutation: {
    updateUser,
  }
};
