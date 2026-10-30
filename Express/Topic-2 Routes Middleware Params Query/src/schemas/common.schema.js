import { z } from "zod";

export const emailSchema = z
  .string()
  .trim()
  .email("Please enter a valid email address.")
  .toLowerCase();

export const passwordSchema = z
  .string()
  .trim()
  .min(8, "Password must be at least 8 characters long.")
  .max(20, "Password cannot exceed 20 characters.")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
  );

export const roleSchema = z
  .string()
  .trim()
  .toLowerCase()
  .pipe(
    z.enum(["admin", "user"], {
      error: "Role must be either 'admin' or 'user'.",
    }),
  );
