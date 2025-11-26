const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, trim: true, required: true },
  content: { type: String, trim: true, required: true },
  image_url: { type: String, trim: true, required: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("post", postSchema);
