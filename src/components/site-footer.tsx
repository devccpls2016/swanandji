import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { navigation, siteContact, socialLinks } from "@/content/site";

const policyLinks = [
  { href: "/terms-and-service", label: "Terms & Service" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" }
];

const SOCIAL_ICONS: Record<string, ReactNode> = {
  YouTube: (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  Instagram: (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Facebook: (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  WhatsApp: (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
};

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-forest/20 text-cream" style={{ backgroundColor: "#0b3b36" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at top left, rgba(227,236,193,0.10), transparent 40%), radial-gradient(circle at bottom right, rgba(227,236,193,0.07), transparent 40%)" }} />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.75fr_1fr_1.2fr]">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center transition-opacity hover:opacity-90">
              <Image
                src="/swanand-logo-new.png"
                alt="Swanandji Gaushala & Eco-Stays"
                width={160}
                height={50}
                className="h-[50px] w-[160px] object-contain"
              />
            </Link>
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
                Pure Living, Rooted in Care
              </p>
              <h3 className="font-serif text-3xl leading-snug text-white">
                Swanandji Gaushala & Eco-Stays
              </h3>
              <p className="max-w-sm text-base leading-8 text-cream/70">
                A forest-side sanctuary for authentic A2 dairy, mindful stays,
                Gau Seva, and village experiences shaped with honesty,
                simplicity, and warmth.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              {socialLinks.map((link) => {
                const icon = SOCIAL_ICONS[link.label];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream/75 transition hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                  >
                    {icon || (
                      <span className="text-xs font-bold uppercase tracking-[0.18em]">
                        {link.shortLabel}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore Column */}
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              Explore
            </p>
            <div className="grid gap-3.5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base text-cream/70 transition hover:translate-x-1 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              Contact Us
            </p>
            <div className="space-y-3 text-base leading-loose text-cream/70">
              <p>Sonegaon Village, Near Koka Jungle,<br />Bhandara, Maharashtra</p>
              <a
                href={`tel:${siteContact.phonePrimary.replace(/\s+/g, "")}`}
                className="block transition hover:text-white"
              >
                {siteContact.phonePrimary}
              </a>
              <a
                href={`mailto:${siteContact.email}`}
                className="block transition hover:text-white"
              >
                {siteContact.email}
              </a>
              <p>Open daily: 7:00 AM – 7:00 PM</p>
            </div>
          </div>

          {/* Location Map Column */}
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              Location
            </p>
            <div className="h-48 w-full overflow-hidden rounded-2xl border border-white/10 shadow-soft sm:h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.688755678832!2d79.8540412143003!3d21.19280528590824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b13c638bd4b35%3A0xebe03eeb6b52ac17!2sSwanandji%20Gaushala%20%26%20farmstays!5e0!3m2!1sen!2sin!4v1716616000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Swanandji Gaushala Location Map"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm text-cream/50 sm:flex-row">
          <p>© {year} Swanandji Gaushala &amp; Eco-Stays. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {policyLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
