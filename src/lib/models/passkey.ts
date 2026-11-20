import mongoose, { type Model, Schema, type Types } from "mongoose";

export type PasskeyDocument = {
  userId: Types.ObjectId;
  slot: 0 | 1;
  credentialId: string;
  publicKey: string;
  counter: number;
  transports: string[];
  deviceType: "singleDevice" | "multiDevice";
  backedUp: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const passkeySchema = new Schema<PasskeyDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    slot: {
      type: Number,
      enum: [0, 1],
      required: true,
    },
    credentialId: {
      type: String,
      required: true,
      unique: true,
    },
    publicKey: {
      type: String,
      required: true,
    },
    counter: {
      type: Number,
      required: true,
    },
    transports: {
      type: [String],
      default: [],
    },
    deviceType: {
      type: String,
      enum: ["singleDevice", "multiDevice"],
      required: true,
    },
    backedUp: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

passkeySchema.index({ userId: 1, slot: 1 }, { unique: true });

export const Passkey =
  (mongoose.models.Passkey as Model<PasskeyDocument>) ||
  mongoose.model<PasskeyDocument>("Passkey", passkeySchema);
