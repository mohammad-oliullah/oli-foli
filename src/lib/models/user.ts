import mongoose, { type Model, Schema } from "mongoose";

export type UserDocument = {
  email: string;
  hashPass: string;
  role: "admin";
  passkeyLoginTokenHash?: string;
  passkeyLoginTokenExpiresAt?: Date;
  createdAt: Date;
  updatedAt: Date;
};

const userSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      immutable: true,
      lowercase: true,
      trim: true,
    },
    hashPass: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ["admin"],
      default: "admin",
      immutable: true,
      unique: true,
    },
    passkeyLoginTokenHash: {
      type: String,
      select: false,
    },
    passkeyLoginTokenExpiresAt: Date,
  },
  { timestamps: true },
);

export const User =
  (mongoose.models.User as Model<UserDocument>) ||
  mongoose.model<UserDocument>("User", userSchema);
