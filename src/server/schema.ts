import { z } from "zod";

export const ShippingDetailsSchema = z.object({
  id: z.string(),
  default: z.boolean(),
  address: z.string(),
  notes: z.string().optional(),
  phone: z.string().max(12),
  email: z.string().email({ message: "email required" }),
  location: z.string(),
  state: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});

export const UserSchema = z.object({
  firstName: z.string(),
  lastName: z.string().max(100),
  phone: z.string(),
  email: z.string().email({ message: "email required" }),
  preferences: z.object({
    newsletters: z.boolean(),
  }),
  shippingDetails: ShippingDetailsSchema.array(),
});
