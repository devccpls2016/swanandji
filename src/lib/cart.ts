import { products } from "@/content/site";
import { CartItem } from "@/lib/types";

export const FREE_DELIVERY_THRESHOLD = 999;
export const STANDARD_DELIVERY_CHARGE = 80;

export const COUPONS: Record<string, number> = {
  FIRST10: 0.1,
  SVNANDJI10: 0.1
};

export function getCartDetails(items: CartItem[], couponCode?: string) {
  const enrichedItems = items
    .map((item) => {
      const product = products.find((entry) => entry.id === item.productId);

      if (!product) {
        return null;
      }

      return {
        ...item,
        product,
        subtotal: product.price * item.quantity
      };
    })
    .filter(
      (
        item
      ): item is {
        productId: string;
        quantity: number;
        product: (typeof products)[number];
        subtotal: number;
      } => Boolean(item)
    );

  const subtotal = enrichedItems.reduce(
    (sum, item) => sum + (item?.subtotal ?? 0),
    0
  );
  const deliveryCharge =
    subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD
      ? 0
      : STANDARD_DELIVERY_CHARGE;
  const normalizedCoupon = couponCode?.trim().toUpperCase() ?? "";
  const discountRate = COUPONS[normalizedCoupon] ?? 0;
  const discount = Math.round(subtotal * discountRate);
  const total = subtotal + deliveryCharge - discount;

  return {
    items: enrichedItems,
    subtotal,
    deliveryCharge,
    discount,
    total,
    couponCode: normalizedCoupon,
    appliedCouponValid: Boolean(discountRate)
  };
}
