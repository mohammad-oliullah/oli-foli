import { Schema, model, models } from "mongoose";

export interface PostDocument {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: Date;
  readingTime: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<PostDocument>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    category: { type: String, required: true, trim: true },
    tags: [{ type: String, trim: true }],
    date: { type: Date, required: true, default: Date.now },
    readingTime: { type: String, required: true, trim: true },
    published: { type: Boolean, default: false },
  },
  { timestamps: true },
);

postSchema.index({ published: 1, date: -1 });

export const Post = models.Post ?? model<PostDocument>("Post", postSchema);
