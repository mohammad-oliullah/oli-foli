import mongoose, { type Model, Schema, type Types } from "mongoose";

export type PasskeyChallengeDocument = {
  userId: Types.ObjectId;
  tokenHash: string;
  challenge: string;
  purpose: "authentication" | "registration";
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

const passkeyChallengeSchema = new Schema<PasskeyChallengeDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tokenHash: {
      type: String,
      required: true,
      unique: true,
    },
    challenge: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      enum: ["authentication", "registration"],
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
      index: { expireAfterSeconds: 0 },
    },
  },
  { timestamps: true },
);

export const PasskeyChallenge =
  (mongoose.models.PasskeyChallenge as Model<PasskeyChallengeDocument>) ||
  mongoose.model<PasskeyChallengeDocument>(
    "PasskeyChallenge",
    passkeyChallengeSchema,
  );
