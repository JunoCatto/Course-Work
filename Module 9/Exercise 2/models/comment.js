const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: { type: String, trim: true, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("comment", commentSchema);
