import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    authorId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
    ],
    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Comment = mongoose.Model("Comment", commentSchema);

export default Comment;
