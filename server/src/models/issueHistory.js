import mongoose from "mongoose";

const issueHistorySchema = new mongoose.Schema(
  {
    issueId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Issue",
      required: true,
    },
    actorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    /*actionType: {
      // ! Add properties later
    },
    oldValue: {
      // ! Add properties later
    },
    newValue: {
      // ! Add properties later
    },*/
    description: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const IssueHistory = mongoose.Model("IssueHistory", issueHistorySchema);

export default IssueHistory;
