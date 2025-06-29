

import { z } from "zod";



export const signUpSchema = z.object({
  fullName: z.string().min(3),
  email: z.string(),
  auraeId: z.coerce.number(),
  auraeCard: z.string().nonempty("Aurae Membership Card is required"),
  password: z.string().min(8),
});

export const signInSchema = z.object({
  email: z.string(),
  password: z.string().min(8),
});
