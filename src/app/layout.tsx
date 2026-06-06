import type { Metadata } from "next";

import { FloatingCartButton } from "@/components/floating-cart-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CartProvider } from "@/context/cart-context";

import "./globals.css";

export const metadata: Metadata = {
  title: "Swanandji Gaushala & Eco-Stays",
  description:
    "Pure dairy products, eco-stays, Gau Seva, and forest-rooted experiences from Swanandji Gaushala in Maharashtra."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cream text-bark antialiased">
        <CartProvider>
          <div className="min-h-screen bg-[linear-gradient(180deg,rgba(247,245,237,0.95)_0%,rgba(255,255,255,0.94)_45%,rgba(229,228,171,0.2)_100%)]">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <FloatingCartButton />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
