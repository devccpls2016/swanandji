import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Please select or enter a subject."),
  message: z.string().min(10, "Please share a little more detail.")
});

export const bookingSchema = z.object({
  category: z.enum(["eco-stay", "experience"]),
  itemId: z.string().min(1, "Please choose an item."),
  itemName: z.string().min(1, "Please choose an item."),
  fullName: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  preferredDate: z.string().min(1, "Please choose a preferred date."),
  guests: z.coerce.number().int().min(1, "Guests must be at least 1."),
  notes: z.string().optional()
});

export const gauSevaSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  preferredDate: z.string().min(1, "Please choose a preferred date."),
  visitors: z.coerce.number().int().min(1, "Visitors must be at least 1."),
  specialRequest: z.string().optional()
});

export const orderSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  address: z.string().min(10, "Please enter your delivery address."),
  city: z.string().min(2, "Please enter your city."),
  state: z.string().min(2, "Please enter your state."),
  postalCode: z.string().min(4, "Please enter a valid postal code."),
  notes: z.string().optional(),
  couponCode: z.string().optional(),
  items: z
    .array(
      z.object({
        productId: z.string(),
        name: z.string(),
        price: z.number().nonnegative(),
        quantity: z.number().int().min(1)
      })
    )
    .min(1, "Your cart is empty."),
  subtotal: z.number().nonnegative(),
  deliveryCharge: z.number().nonnegative(),
  discount: z.number().nonnegative(),
  total: z.number().nonnegative()
});

export function zodErrors(
  error: z.ZodError
): Record<string, string[] | undefined> {
  return error.flatten().fieldErrors;
}
