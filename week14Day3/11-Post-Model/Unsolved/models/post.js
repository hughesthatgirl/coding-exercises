module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: { 
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        len: [1]
      }
    },
    body: { type: DataTypes.TEXT},
    category: { type: DataTypes.STRING}
  });
  return Post;
};
