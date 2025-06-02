import { z } from "zod";

export const registrationShema = z.object({
  email: z.string().email("Please enter a valid email adress!"),
  password: z.string().min(6, "Password must be at least 6 characters!"),
});

export const loginShema = z.object({
  email: z.string().email("Please enter a valid email adress!"),
  password: z.string().min(6, "Password must be at least 6 characters!"),
});
