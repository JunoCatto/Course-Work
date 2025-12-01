const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../mysqldb-app/dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model {}

// Sequelize will create this table if it doesn't exist on startup

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: "posts", // use lowercase plural format

    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Post;
