import { z } from "zod";
import { emailSchema, passwordSchema, roleSchema } from "./common.schema.js";

const registerSchema = z
  .object({
    fullname: z
      .string()
      .trim()
      .min(3, "Full name must be at least 3 characters long.")
      .max(20, "Full name cannot exceed 20 characters."),

    email: emailSchema,
    password: passwordSchema,

    confirmPassword: z.string().min(8, "Please confirm your password."),

    role: roleSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .transform(({ confirmPassword, ...data }) => data);

export default registerSchema;
