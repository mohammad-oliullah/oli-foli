import mongoose, { type Model, Schema } from "mongoose";

export type FeedbackReply = {
  message: string;
  createdAt: Date;
};

export type FeedbackDocument = {
  name: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  reply?: FeedbackReply;
};

const feedbackReplySchema = new Schema<FeedbackReply>(
  {
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 1000,
    },
    createdAt: {
      type: Date,
      required: true,
    },
  },
  { _id: false },
);

const feedbackSchema = new Schema<FeedbackDocument>(
  {
    name: {
      type: String,
      default: "",
      trim: true,
      maxlength: 50,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 1000,
    },
    reply: {
      type: feedbackReplySchema,
      default: undefined,
    },
  },
  {
    collection: "feedbacks",
    timestamps: true,
  },
);

feedbackSchema.index({ createdAt: -1 });

export const Feedback =
  (mongoose.models.Feedback as Model<FeedbackDocument>) ||
  mongoose.model<FeedbackDocument>("Feedback", feedbackSchema);
