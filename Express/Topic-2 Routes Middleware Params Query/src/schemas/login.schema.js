import { z } from "zod";

import { emailSchema, passwordSchema, roleSchema } from "./common.schema.js";

const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  role: roleSchema,
});

export default loginSchema;
