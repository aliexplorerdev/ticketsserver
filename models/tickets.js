import mongoose from "mongoose";
import uuid from "uuid";
const ticketSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuid.v4(),
    },
    ticketNo: {
      type: String,
    },
    title: {
      type: String,
      requried,
    },
    description: {
      type: String,
      requried,
    },
    priority: {
      type: String,
      enum: ["High", "Low", "Normal", "Critical"],
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    dueDate: {
      type: Date,
      default: Date.now(),
    },
    comments: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comments",
    },
    status: {
      type: String,
      enum: ["On Hold:", "Resolved", "Closed", "Cancelled"],
    },
    createdBY: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export const Tickets = new mongoose.Model("tickets", ticketSchema);
