import { z } from "zod";

export const stepOneSchema = z.object({
  zipCode: z.string().regex(/^\d{5}$/, "Zip code must be exactly 5 digits"),
  vehicleYear: z.string(),
  vehicleMake: z.string(),
  vehicleModel: z.string(),
});

export const stepTwoSchema = z.object({
  dateOfBirth: z.string(),
  licenseStatus: z.string(),
  violations: z.string(),
  currentlyInsured: z.enum(["yes", "no"]),
});

export const stepThreeSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10,}$/, "Phone must be at least 10 digits"),
});
