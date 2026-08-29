import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    recipientId: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    }],
    issueId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    /*type: {
      // ! Add properties later
    },*/
    message: {
      type: String,
      required: true,
      trim: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Notification = mongoose.Model("Notification", notificationSchema);

export default Notification;
