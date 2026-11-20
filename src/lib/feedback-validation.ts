import { z } from "zod";

export const feedbackSchema = z.object({
  name: z.string().trim().max(50, "Name must be 50 characters or fewer."),
  message: z
    .string()
    .trim()
    .min(3, "Feedback must be at least 3 characters.")
    .max(1000, "Feedback must be 1000 characters or fewer."),
});

export const replySchema = z.object({
  feedbackId: z.string().trim().min(1, "Feedback could not be identified."),
  message: z
    .string()
    .trim()
    .min(3, "Reply must be at least 3 characters.")
    .max(1000, "Reply must be 1000 characters or fewer."),
});
