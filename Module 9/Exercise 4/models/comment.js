const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../mysqldb-app/dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "posts",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments",

    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Comment;
