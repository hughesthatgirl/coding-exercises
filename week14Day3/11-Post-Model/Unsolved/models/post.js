module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: { type: DataTypes.STRING },
    body: { type: DataTypes.TEXT},
    category: { type: DataTypes.STRING}
  });
  return Post;
};
