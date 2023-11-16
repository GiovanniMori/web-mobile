import * as z from "zod";

export const newCommunitySchema = z.object({
  name: z.string().min(3).max(20),
});

export type newCommunitySchema = z.infer<typeof newCommunitySchema>;
