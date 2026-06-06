import { CartPageClient } from "@/components/cart-page-client";
import { SectionHeading } from "@/components/section-heading";

export default function CartPage() {
  return (
    <div className="shell section-space space-y-12">
      <SectionHeading
        eyebrow="My Cart"
        title="Review your selected items before checkout"
        description="Adjust quantities, apply your coupon, save items for later, and continue to a simple inquiry-style checkout."
        align="center"
      />
      <CartPageClient />
    </div>
  );
}
