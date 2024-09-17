import { z } from "zod";
import validator from "validator";

export const schema = z.object({
  name: z.string().min(2, { message: "El nombre es requerido" }),
  phone: z.string().refine(validator.isMobilePhone, { message: "Ingrese un telefono valido" }),
  email: z.string().email({ message: "Ingrese un email valido" }).min(1),
  message: z.string().min(4, { message: "El mensaje debe tener al menos 4 caracteres" }),
});
