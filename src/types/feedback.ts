export type Feedback = {
  id: string;
  name: string;
  message: string;
  createdAt: string;
  reply?: {
    message: string;
    createdAt: string;
  };
};

export type FeedbackActionState = {
  success: boolean;
  error?: string;
  message?: string;
};

export type ReplyActionState = FeedbackActionState;
