import mongoose from "mongoose";
import { IssuePriority } from "../constants/issuePriority.js";
import { IssueStatus } from "../constants/issueStatus.js";

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    location: {
      building: {
        type: String,
        required: true,
        trim: true,
      },
      floor: {
        type: Number,
        required: true,
      },
      room: {
        type: String,
        required: true,
        trim: true,
      },
      additionalDetails: {
        type: String,
        required: false,
        trim: true,
      },
    },
    priority: {
      type: Number,
      enum: Object.values(IssuePriority),
      default: IssuePriority.Medium,
    },
    status: {
      type: Number,
      enum: Object.values(IssueStatus),
      default: IssueStatus.Open,
    },
    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // closedAt: {}, // ! Add properties later
    // resolvedAt: {}, // ! Add properties later
  },
  {
    timestamps: true,
  },
);

const Issue = mongoose.Model("Issue", issueSchema);

export default Issue;
