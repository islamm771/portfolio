// lib/validations/contact.ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2),
  email: z.email(),
  message: z.string().trim().min(10),
});

export type ContactFormData = z.infer<typeof contactSchema>;