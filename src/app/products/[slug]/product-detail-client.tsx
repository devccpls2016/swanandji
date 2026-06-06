"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { ProductCard } from "@/components/product-card";
import { products } from "@/content/site";
import { cn } from "@/lib/utils";

interface ProductDetailClientProps {
  product: Product;
}

interface Variant {
  size: string;
  price: number;
  comparePrice: number;
}

interface DetailedInfo {
  tagline: string;
  description: string;
  ingredients: string;
  benefits: string[];
  storageInfo: string[];
  shelfLife: string;
  icon: string;
  bg: string;
  variants: Variant[];
  images: Array<{ icon: string; title: string }>;
  rating: number;
  reviews: number;
}

const PRODUCT_DETAILS_DATA: Record<string, DetailedInfo> = {
  ghee: {
    tagline: "Pure A2 Gir cow ghee prepared using the traditional Bilona method.",
    description: "Our A2 Gir Cow Ghee is crafted using the ancient Bilona method. First, fresh A2 milk is set into curd. The curd is then hand-churned in clay pots to extract raw butter (makkhan). This butter is slow-cooked over a wood fire (chulha) to yield highly aromatic, granular golden ghee. It contains essential butyric acids that promote intestinal health, improve digestion, and boost immunity.",
    ingredients: "100% Pure A2 Gir Cow Milk Curd Butter (Makkhan). Prepared without chemicals, colorings, or dilution.",
    benefits: [
      "Rich in Butyric Acid - Promotes a healthy digestive tract and strengthens gut flora.",
      "A2 Beta-Casein Protein - Highly compatible, easy to digest, and nourishing for lactose-sensitive bodies.",
      "Booster for Immunity - Naturally rich in fat-soluble vitamins A, D, E, and K.",
      "Traditional Granular Texture - Slow cooked to perfection for that home-style granular texture."
    ],
    storageInfo: [
      "Store in a cool, dry place away from direct sunlight.",
      "Keep in glass or ceramic containers (avoid plastic storage).",
      "Always use a clean, dry spoon to maintain hygiene."
    ],
    shelfLife: "12 months from the date of packaging.",
    icon: "🍯",
    bg: "from-amber-100/50 via-white to-yellow-50/50",
    variants: [
      { size: "1 Liter (Glass Jar)", price: 1200, comparePrice: 1400 },
      { size: "500ml (Glass Jar)", price: 650, comparePrice: 750 },
      { size: "250ml (Glass Jar)", price: 350, comparePrice: 400 }
    ],
    images: [
      { icon: "🍯", title: "Product View" },
      { icon: "🥣", title: "Bilona Churning" },
      { icon: "🔥", title: "Wood Fire Cooked" },
      { icon: "🐄", title: "Happy Cows" }
    ],
    rating: 4.9,
    reviews: 2868
  },
  shrikhand: {
    tagline: "Creamy, strained A2 yogurt flavored with natural saffron and cardamom.",
    description: "Our Shrikhand is made by hanging fresh curd made from pure Gir cow milk in a muslin cloth to strain out excess whey. The resulting thick chakka is blended with organic sugar, real saffron strands, and fresh cardamom powder. It contains no artificial thickening agents or color additives, representing the true taste of sweet tradition.",
    ingredients: "Strained A2 Milk Curd (Chakka), Saffron (Kesar), Cardamom (Elaichi), Cane Sugar.",
    benefits: [
      "Rich in Calcium - Essential nutrients for bone density and dental wellness.",
      "Natural Probiotics - Fermented curd provides gut-friendly flora for active digestion.",
      "High Protein Value - Strained yogurt offers clean and natural dairy protein.",
      "100% Natural Flavoring - flavored exclusively with real spices, no synthetic flavor drops."
    ],
    storageInfo: [
      "Keep refrigerated at all times under 4°C.",
      "Ensure container is tightly closed after each use.",
      "Consume within 5 days of opening."
    ],
    shelfLife: "15 days from the date of packaging (Keep Refrigerated).",
    icon: "🍧",
    bg: "from-rose-100/50 via-white to-orange-50/50",
    variants: [
      { size: "500g Cup", price: 300, comparePrice: 350 },
      { size: "250g Cup", price: 160, comparePrice: 190 }
    ],
    images: [
      { icon: "🍧", title: "Product View" },
      { icon: "🥛", title: "Pure Chakka" },
      { icon: "🌾", title: "Organic Spices" },
      { icon: "🍧", title: "Saffron Blend" }
    ],
    rating: 4.8,
    reviews: 186
  },
  vermicompost: {
    tagline: "Premium organic compost produced by earthworms decomposing Desi cow dung.",
    description: "Our Vermicompost is a high-grade organic fertilizer produced through the decomposition of dung from our free-grazing Gir cows by earthworms. It increases soil aeration, provides plant growth-stimulating hormones, adds rich carbon content, and significantly improves soil water retention capacity for green, healthy plants.",
    ingredients: "100% Fully Decomposed Desi Gir Cow Dung, Earthworm Castings (Eisenia fetida).",
    benefits: [
      "Improves Soil Structure - Encourages loose, crumbly soil structure for root aeration.",
      "Rich in NPK - Abundant in natural nitrogen, phosphorus, potash, and trace minerals.",
      "Water Holding Capacity - Retains soil moisture longer, lowering water requirements.",
      "Completely Organic - Chemical-free, safe for vegetables, herbs, and home gardens."
    ],
    storageInfo: [
      "Store in a cool, dry place away from direct sunlight.",
      "Keep the bag closed to retain natural soil microbes.",
      "Moisten slightly if stored for long periods before usage."
    ],
    shelfLife: "6 months from the date of packaging.",
    icon: "🌱",
    bg: "from-green-100/50 via-white to-lime-50/50",
    variants: [
      { size: "5 Kg Bag", price: 250, comparePrice: 300 },
      { size: "10 Kg Bag", price: 450, comparePrice: 550 }
    ],
    images: [
      { icon: "🌱", title: "Product View" },
      { icon: "🍂", title: "Organic Dung" },
      { icon: "🪱", title: "Earthworms" },
      { icon: "🏡", title: "For Gardens" }
    ],
    rating: 4.7,
    reviews: 481
  },
  curd: {
    tagline: "Thick, creamy set curd containing live natural probiotic cultures.",
    description: "Our Curd (Dahi) is set naturally using pure A2 Gir cow milk and active heirloom cultures in clean farm conditions. It is rich, thick, mildly tangy, and loaded with live probiotics that support digestive comfort and cool down the metabolic fire during hot summer months.",
    ingredients: "Fresh Pasteurized A2 Gir Cow Milk, Active Culture (Lactobacillus strains).",
    benefits: [
      "Natural Probiotic - Replants friendly bacteria in the intestine for digestion.",
      "Bone Health - Excellent clean source of dairy calcium and phosphorus.",
      "Cooling Effect - Traditional coolant that balances Vata and Pitta doshas."
    ],
    storageInfo: [
      "Refrigerate immediately after purchase.",
      "Keep covered to prevent flavor absorption from other foods."
    ],
    shelfLife: "4 days (Keep Refrigerated).",
    icon: "🍶",
    bg: "from-sky-100/50 via-white to-cyan-50/50",
    variants: [
      { size: "500g Container", price: 80, comparePrice: 95 },
      { size: "1 Kg Container", price: 150, comparePrice: 180 }
    ],
    images: [
      { icon: "🍶", title: "Product View" },
      { icon: "🥛", title: "Pure A2 Milk" },
      { icon: "🍶", title: "Set Curd" },
      { icon: "❄️", title: "Chilled Goodness" }
    ],
    rating: 4.8,
    reviews: 166
  },
  "gomutra-ark": {
    tagline: "Traditional distilled cow urine for Ayurvedic body purification.",
    description: "Our Gomutra Ark is prepared by distilling the fresh urine of healthy, forest-grazing Gir cows in traditional distillation setups. In Ayurvedic practice, distilled cow urine is highly regarded for its deep detoxifying, anti-oxidant, and anti-inflammatory properties, supporting active metabolic health.",
    ingredients: "100% Pure Distilled Urine of Indigenous Gir Cows (Gomutra Ark).",
    benefits: [
      "Deep Body Detox - Aids in purging toxic residues and purifying blood.",
      "Metabolism Booster - Encourages healthy digestion and lipid processing.",
      "Ayurvedic Remedy - Traditionally used for building resilience and immunity."
    ],
    storageInfo: [
      "Store in a cool, dark place away from light.",
      "Ensure the bottle cap is screwed on tightly after each use."
    ],
    shelfLife: "24 months from the date of packaging.",
    icon: "🧪",
    bg: "from-teal-100/50 via-white to-emerald-50/50",
    variants: [
      { size: "500ml Glass Bottle", price: 150, comparePrice: 180 },
      { size: "1 Liter Glass Bottle", price: 280, comparePrice: 330 }
    ],
    images: [
      { icon: "🧪", title: "Product View" },
      { icon: "🐄", title: "Gir Grazing" },
      { icon: "🧪", title: "Distilled Ark" },
      { icon: "🧘", title: "Ayur Wellness" }
    ],
    rating: 4.6,
    reviews: 95
  },
  "a2-ghee": {
    tagline: "Pure A2 Ghee from indigenous Gir cows for everyday nourishment.",
    description: "Our A2 Ghee is crafted from pure A2 milk of free-grazing Gir cows raised in the natural environment of the Nagzira forest region. Unlike commercial ghee, ours is produced without any mixing, chemical processing, or artificial preservatives. The result is a deeply aromatic, golden ghee that elevates every dish and supports daily health and vitality.",
    ingredients: "100% Pure A2 Gir Cow Milk. No additives, no preservatives, no artificial color.",
    benefits: [
      "A2 Protein Richness - Contains only A2 beta-casein protein, much easier to digest than A1 commercial ghee.",
      "Daily Nourishment - Provides balanced fats, vitamins A, D, E, and K for complete wellness.",
      "Gut Support - Promotes healthy gut lining and comfortable digestion.",
      "Pure & Transparent - Sourced directly from our farm with zero blending."
    ],
    storageInfo: [
      "Store in a cool, dry place away from direct sunlight.",
      "Always use a dry, clean spoon to avoid contamination.",
      "Glass or ceramic storage preferred over plastic."
    ],
    shelfLife: "10 months from the date of packaging.",
    icon: "🫙",
    bg: "from-yellow-100/50 via-white to-amber-50/50",
    variants: [
      { size: "1 Liter (Glass Jar)", price: 950, comparePrice: 1100 },
      { size: "500ml (Glass Jar)", price: 500, comparePrice: 580 },
      { size: "250ml (Glass Jar)", price: 270, comparePrice: 320 }
    ],
    images: [
      { icon: "🫙", title: "Product View" },
      { icon: "🐄", title: "Gir Cows" },
      { icon: "🍯", title: "Golden Ghee" },
      { icon: "🌿", title: "Natural Process" }
    ],
    rating: 4.8,
    reviews: 312
  },
  vermiwash: {
    tagline: "Liquid gold for plants — a natural micronutrient-rich foliar spray.",
    description: "Vermiwash is the liquid extract collected from earthworm beds during the vermicomposting process. It is rich in water-soluble enzymes, amino acids, and plant-growth hormones that can be directly applied as a foliar spray or soil drench. It is completely organic, safe for all crops, and significantly improves plant immunity, soil microbiology, and yield quality.",
    ingredients: "100% Natural Earthworm Castings Leachate from Desi Gir Cow Dung Beds. Free of synthetic chemicals.",
    benefits: [
      "Plant Immunity Booster - Enzyme-rich solution that strengthens plant resistance to pests and disease.",
      "Foliar Nutrition - Directly absorbed through leaves to accelerate growth and green color.",
      "Soil Microbiome - Inoculates soil with beneficial bacteria and fungi for long-term fertility.",
      "100% Organic - Certified chemical-free and safe for vegetables, fruit trees, and herbs."
    ],
    storageInfo: [
      "Store in a cool, dark place away from direct sunlight.",
      "Shake well before use.",
      "Dilute 1:10 with water before foliar spray application."
    ],
    shelfLife: "6 months from the date of packaging.",
    icon: "💧",
    bg: "from-emerald-100/50 via-white to-teal-50/50",
    variants: [
      { size: "1 Liter Bottle", price: 150, comparePrice: 180 },
      { size: "5 Liter Can", price: 650, comparePrice: 800 }
    ],
    images: [
      { icon: "💧", title: "Product View" },
      { icon: "🪱", title: "Earthworm Source" },
      { icon: "🌿", title: "Foliar Spray" },
      { icon: "🌱", title: "For Gardens" }
    ],
    rating: 4.6,
    reviews: 134
  },
  butter: {
    tagline: "Traditional hand-churned white butter from pure A2 curd.",
    description: "Our Fresh A2 Butter (Loni) is made by slowly hand-churning fresh A2 curd from our Gir cow dairy in the traditional method. This white, unsalted butter is rich in natural cream, fat-soluble vitamins, and the unique flavors of village life. It melts beautifully over rotis, parathas, or dal rice for an unforgettable authentic experience.",
    ingredients: "Fresh A2 Gir Cow Curd (Dahi). Hand-churned without any additives, salt, or artificial emulsifiers.",
    benefits: [
      "Pure Traditional Loni - Hand-churned fresh daily in our farm using traditional methods.",
      "A2 Source - Rich in A2 beta-casein for easier digestion and gentle dairy nutrition.",
      "Fat-Soluble Vitamins - Natural source of Vitamins A, D, E, and K.",
      "No Preservatives - Completely natural, unsalted, and free from artificial additives."
    ],
    storageInfo: [
      "Refrigerate immediately. Best consumed within 7 days of purchase.",
      "Keep covered tightly to prevent flavor absorption.",
      "Can be frozen for up to 3 months without quality loss."
    ],
    shelfLife: "7 days refrigerated / 3 months frozen.",
    icon: "🧈",
    bg: "from-yellow-100/50 via-white to-orange-50/50",
    variants: [
      { size: "500g Container", price: 450, comparePrice: 520 },
      { size: "250g Container", price: 240, comparePrice: 280 }
    ],
    images: [
      { icon: "🧈", title: "Product View" },
      { icon: "🍶", title: "Fresh Curd" },
      { icon: "🥄", title: "Hand Churned" },
      { icon: "🐄", title: "A2 Cows" }
    ],
    rating: 4.9,
    reviews: 228
  },
  paneer: {
    tagline: "Soft, fresh A2 cottage cheese made without any artificial coagulants.",
    description: "Our Fresh A2 Paneer is made daily from fresh whole A2 milk of our Gir cows. The milk is gently heated and coagulated using natural food-grade acidic agents only. The resulting paneer is soft, pure white, and has an authentic milky flavor that holds its shape perfectly in curries or grills. Unlike commercial paneer, ours is never stored or frozen before delivery.",
    ingredients: "Fresh A2 Gir Cow Whole Milk, Natural Coagulant (Lemon/Citric Acid). No preservatives or binders.",
    benefits: [
      "High Protein - Excellent source of complete dairy protein for muscle health and growth.",
      "Calcium Rich - Essential for bone health, dental strength, and metabolic function.",
      "A2 Origin - Naturally easier on the digestive system than regular paneer.",
      "Made Fresh Daily - Packed and delivered fresh without freezing or storage."
    ],
    storageInfo: [
      "Keep refrigerated at or below 4°C.",
      "Store immersed in a container of water for up to 3 days.",
      "Consume within 3 days of purchase for best taste."
    ],
    shelfLife: "3 days refrigerated from the date of packaging.",
    icon: "🟦",
    bg: "from-blue-100/50 via-white to-sky-50/50",
    variants: [
      { size: "500g Block", price: 350, comparePrice: 420 },
      { size: "250g Block", price: 190, comparePrice: 230 }
    ],
    images: [
      { icon: "🟦", title: "Product View" },
      { icon: "🥛", title: "Pure A2 Milk" },
      { icon: "🍋", title: "Natural Coagulant" },
      { icon: "🧑‍🍳", title: "Ready to Cook" }
    ],
    rating: 4.8,
    reviews: 197
  },
  milk: {
    tagline: "Raw, whole A2 milk from grass-fed Desi Gir cows — nature&apos;s most complete food.",
    description: "Our Fresh A2 Milk comes directly from Desi Gir cows that graze freely on natural grass, herbal shrubs, and forest-edge pastures near Nagzira. It is collected under hygienic conditions and delivered fresh without industrial pasteurization or homogenization. This raw whole milk carries the full spectrum of natural enzymes, vitamins, healthy fats, and A2 beta-casein proteins that benefit the entire family.",
    ingredients: "100% Raw Whole A2 Milk from Desi Gir Cows. No water addition, no synthetic additives, no homogenization.",
    benefits: [
      "A2 Beta-Casein - Naturally easier to digest with no harmful A1 protein content.",
      "Rich in Natural Enzymes - Raw milk retains all natural enzymes lost in pasteurization.",
      "High Nutritional Density - Full-spectrum vitamins A, B12, D, K2, calcium, and phosphorus.",
      "Direct from Farm - Zero industrial processing, delivered fresh each morning."
    ],
    storageInfo: [
      "Refrigerate immediately upon receipt at or below 4°C.",
      "Boil before drinking if preferred; best within 24 hours of receipt.",
      "Keep covered and away from strong-smelling foods."
    ],
    shelfLife: "1-2 days raw refrigerated / 3-4 days after gentle boiling.",
    icon: "🥛",
    bg: "from-sky-100/50 via-white to-blue-50/50",
    variants: [
      { size: "1 Liter Pouch", price: 90, comparePrice: 110 },
      { size: "500ml Pouch", price: 50, comparePrice: 60 },
      { size: "2 Liter Can", price: 170, comparePrice: 200 }
    ],
    images: [
      { icon: "🥛", title: "Product View" },
      { icon: "🐄", title: "Gir Grazing" },
      { icon: "🌿", title: "Natural Pasture" },
      { icon: "🏡", title: "Farm Fresh" }
    ],
    rating: 4.9,
    reviews: 543
  },
  "chick-milk": {
    tagline: "The first miracle milk — colostrum from our Gir cows, packed with life-giving nutrition.",
    description: "Fresh A2 Chick Milk is the colostrum — the very first milk produced by our Gir cows after calving. This golden, thick milk is nature&apos;s most concentrated source of immunoglobulins, growth factors, and bioactive compounds. Collected only after the calf has fed fully, our colostrum is ethically harvested and gently processed to preserve its extraordinary nutritional potency.",
    ingredients: "100% Pure Fresh Colostrum from Desi Gir Cows. No processing, no additives. Collected post-calf feeding.",
    benefits: [
      "Immunoglobulin Rich - Contains IgG, IgA, and IgM antibodies to supercharge immune response.",
      "Growth Factors - Naturally stimulates tissue repair, muscle recovery, and cellular regeneration.",
      "Exceptional Protein - Far higher protein concentration than regular milk for strength and vitality.",
      "Ethically Sourced - Only collected after the calf has been fully fed, maintaining animal welfare."
    ],
    storageInfo: [
      "Refrigerate immediately at or below 4°C.",
      "Consume within 3 days of packaging.",
      "Can be gently warmed; do not boil to preserve immunoglobulins."
    ],
    shelfLife: "3 days refrigerated from the date of packaging.",
    icon: "🌟",
    bg: "from-amber-100/50 via-white to-orange-50/50",
    variants: [
      { size: "500ml Bottle", price: 180, comparePrice: 220 },
      { size: "250ml Bottle", price: 100, comparePrice: 125 }
    ],
    images: [
      { icon: "🌟", title: "Product View" },
      { icon: "🐄", title: "Gir Cow Colostrum" },
      { icon: "💪", title: "Immune Boost" },
      { icon: "🍼", title: "First Milk" }
    ],
    rating: 4.9,
    reviews: 72
  }
};

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addItem, items, updateQuantity } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Detail specifications loaded from catalog mapping
  const detail = PRODUCT_DETAILS_DATA[product.id] || {
    tagline: "Honest dairy and wellness goods direct from our farm.",
    description: product.description,
    ingredients: "100% pure ingredients with zero chemicals or mixing.",
    benefits: product.benefits,
    storageInfo: ["Store in clean conditions."],
    shelfLife: "Refer to package instructions.",
    icon: "🌾",
    bg: "from-cream via-white to-sand/20",
    variants: [{ size: product.unit, price: product.price, comparePrice: product.price + 100 }],
    images: [{ icon: "🌾", title: "Front View" }],
    rating: 4.5,
    reviews: 45
  };

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>("benefits");

  const currentVariant = detail.variants[selectedVariantIndex] || detail.variants[0];
  const coinsReward = Math.round(currentVariant.price * 2.2);
  const savings = currentVariant.comparePrice - currentVariant.price;
  const discountPercent = Math.round((savings / currentVariant.comparePrice) * 100);

  // Handle quantity addition using context endpoints
  const handleAddToCart = () => {
    const existing = items.find((item) => item.productId === product.id);
    if (existing) {
      updateQuantity(product.id, existing.quantity + quantity);
    } else {
      addItem(product.id);
      if (quantity > 1) {
        updateQuantity(product.id, quantity);
      }
    }
  };

  // Find recommendations (related products from the gaushala catalog)
  const recommendations = products.filter((p) => p.id !== product.id).slice(0, 3);

  const toggleAccordion = (id: string) => {
    setExpandedAccordion(expandedAccordion === id ? null : id);
  };

  return (
    <div className="bg-cream/40 min-h-screen py-8">
      <div className="shell space-y-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="text-sm font-semibold tracking-wider text-bark/60 select-none">
          <Link href="/" className="hover:text-forest transition">HOME</Link>
          <span className="mx-2.5">/</span>
          <Link href="/products" className="hover:text-forest transition">PRODUCTS</Link>
          <span className="mx-2.5">/</span>
          <span className="text-forest uppercase">{product.name}</span>
        </nav>

        {/* Top Product Presentation Panel */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start bg-white rounded-[3rem] p-6 md:p-10 border border-bark/5 shadow-soft">
          
          {/* Left Column: Visual Media Display */}
          <div className="space-y-6">
            
            {/* Big Main Illustration Display */}
            <div className={cn("relative flex h-[350px] md:h-[450px] items-center justify-center rounded-[2.5rem] border border-gold/15 shadow-sm p-8 overflow-hidden", detail.bg)}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.75)_0%,transparent_85%)] pointer-events-none" />
              <div className="absolute w-64 h-64 rounded-full border-2 border-dashed border-gold/10 bg-white/10 pointer-events-none animate-spin" style={{ animationDuration: "120s" }} />

              {/* Wishlist Icon */}
              <button
                type="button"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute right-6 top-6 z-10 p-3 rounded-full bg-white/90 text-bark/40 hover:text-red-500 hover:scale-105 active:scale-95 shadow-md backdrop-blur-sm transition-all"
                aria-label="Add to wishlist"
              >
                <svg
                  className={cn("h-5.5 w-5.5 transition-colors", isWishlisted ? "fill-red-500 text-red-500" : "fill-none")}
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>

              <span className="text-[10rem] filter drop-shadow-[0_12px_24px_rgba(80,33,27,0.18)] select-none">
                {detail.images[activeImageIndex]?.icon || detail.icon}
              </span>
            </div>

            {/* Thumbnails Carousel Slider */}
            <div className="flex gap-4 items-center justify-center">
              {detail.images.map((image, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={cn(
                    "w-18 h-18 rounded-2xl border flex flex-col items-center justify-center bg-white transition hover:scale-105",
                    idx === activeImageIndex 
                      ? "border-forest ring-2 ring-forest/20 shadow-sm"
                      : "border-bark/10 hover:border-gold/60"
                  )}
                >
                  <span className="text-3xl">{image.icon}</span>
                  <span className="text-[9px] font-extrabold text-bark/60 uppercase tracking-wider mt-1 scale-90 select-none">
                    {image.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Core Trust Badges Row */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-bark/5">
              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-cream/35 border border-bark/5">
                <span className="text-2xl">🌿</span>
                <span className="text-[10px] font-extrabold text-bark/85 uppercase tracking-wider mt-1.5 leading-tight">100% Pure & Organic</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-cream/35 border border-bark/5">
                <span className="text-2xl">🍯</span>
                <span className="text-[10px] font-extrabold text-bark/85 uppercase tracking-wider mt-1.5 leading-tight">Traditional Method</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-cream/35 border border-bark/5">
                <span className="text-2xl">🌾</span>
                <span className="text-[10px] font-extrabold text-bark/85 uppercase tracking-wider mt-1.5 leading-tight">Raw & Unprocessed</span>
              </div>
            </div>

          </div>

          {/* Right Column: Checkout Purchase Settings */}
          <div className="space-y-6 lg:pl-4">
            
            {/* Title & Metadata */}
            <div className="space-y-2.5">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-bark leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-0.5 bg-[#388e3c] text-white px-2.5 py-0.5 rounded text-xs font-bold shadow-sm">
                  {detail.rating} <span className="text-[10px]">★</span>
                </span>
                <span className="text-sm font-semibold text-bark/50">
                  {detail.reviews.toLocaleString()} verified customer reviews
                </span>
              </div>
            </div>

            {/* Coins Offer Tag */}
            <div className="inline-flex items-center gap-2 bg-[#fef3c7] text-[#92400e] px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider border border-[#fde68a] select-none shadow-sm">
              <span>🪙</span>
              <span>Earn {coinsReward} Coins on this product</span>
            </div>

            {/* Size Variant Selector Grid (Interactive Blocks) */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-extrabold text-bark/80 uppercase tracking-widest">
                Select Size / Weight:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {detail.variants.map((v, idx) => {
                  const isSelected = idx === selectedVariantIndex;
                  return (
                    <button
                      key={v.size}
                      type="button"
                      onClick={() => {
                        setSelectedVariantIndex(idx);
                        setQuantity(1); // Reset quantity on variant switch
                      }}
                      className={cn(
                        "p-4 rounded-2xl border-2 flex flex-col items-center justify-center text-center transition-all select-none hover:-translate-y-0.5 hover:shadow-soft duration-200",
                        isSelected
                          ? "bg-yellow-400/25 border-forest text-forest font-bold scale-[1.01]"
                          : "bg-white border-bark/10 text-bark hover:border-gold/60"
                      )}
                    >
                      <span className="text-xs font-bold uppercase tracking-wider">{v.size}</span>
                      <span className="text-[13px] font-extrabold text-forest mt-1">{formatCurrency(v.price)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selector & Add to Cart Row */}
            <div className="flex items-center gap-4 pt-4 border-t border-bark/5">
              
              {/* Quantity Counter */}
              <div className="flex items-center border-2 border-bark/10 bg-white rounded-2xl p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center font-bold text-bark/60 hover:text-bark hover:bg-cream/40 rounded-xl transition text-lg"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-12 text-center text-base font-extrabold text-bark select-none">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center font-bold text-bark/60 hover:text-bark hover:bg-cream/40 rounded-xl transition text-lg"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Add To Cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 border-2 border-forest text-forest hover:bg-forest hover:text-cream py-3 rounded-2xl text-sm font-extrabold uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft active:translate-y-0 shadow-sm text-center"
              >
                Add To Cart
              </button>
            </div>

            {/* Product Tagline and Description */}
            <div className="space-y-3 pt-4 border-t border-bark/5">
              <p className="text-sm font-bold text-forest tracking-wide italic">
                &ldquo;{detail.tagline}&rdquo;
              </p>
              <div className="space-y-4 text-[14px] leading-relaxed text-bark/75">
                <p>{detail.description}</p>
              </div>
            </div>

            {/* Swanandji Assured Seal */}
            <div className="flex items-center gap-3 bg-cream/35 border border-bark/5 rounded-2xl p-4">
              <span className="text-3xl">🌾</span>
              <div className="text-xs">
                <p className="font-extrabold text-forest uppercase tracking-wider">Swanandji Assured Purity</p>
                <p className="text-bark/60 mt-0.5 font-medium">100% traceably sourced from free-grazing cows in the Koka-Nagzira forest lands.</p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Detailed Specifications Accordion Section */}
        <div className="bg-white rounded-[3rem] border border-bark/5 shadow-card p-6 md:p-10 space-y-1">
          
          {/* Ingredients Accordion */}
          <div className="border-b border-bark/10">
            <button
              type="button"
              onClick={() => toggleAccordion("ingredients")}
              className="w-full flex items-center justify-between py-6 text-left"
            >
              <span className="font-serif text-lg font-bold text-bark">Ingredients</span>
              <span className="text-xl font-bold text-forest">{expandedAccordion === "ingredients" ? "−" : "+"}</span>
            </button>
            <div className={cn("transition-all duration-300 overflow-hidden", expandedAccordion === "ingredients" ? "max-h-[300px] pb-6" : "max-h-0")}>
              <p className="text-[14px] leading-relaxed text-bark/75 font-medium">{detail.ingredients}</p>
            </div>
          </div>

          {/* Benefits Accordion */}
          <div className="border-b border-bark/10">
            <button
              type="button"
              onClick={() => toggleAccordion("benefits")}
              className="w-full flex items-center justify-between py-6 text-left"
            >
              <span className="font-serif text-lg font-bold text-bark">Benefits</span>
              <span className="text-xl font-bold text-forest">{expandedAccordion === "benefits" ? "−" : "+"}</span>
            </button>
            <div className={cn("transition-all duration-300 overflow-hidden", expandedAccordion === "benefits" ? "max-h-[500px] pb-6" : "max-h-0")}>
              <ul className="space-y-3 text-[14px] leading-relaxed text-bark/75 font-medium">
                {detail.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-forest mt-0.5 font-bold">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Storage Info Accordion */}
          <div className="border-b border-bark/10">
            <button
              type="button"
              onClick={() => toggleAccordion("storage")}
              className="w-full flex items-center justify-between py-6 text-left"
            >
              <span className="font-serif text-lg font-bold text-bark">Storage Info</span>
              <span className="text-xl font-bold text-forest">{expandedAccordion === "storage" ? "−" : "+"}</span>
            </button>
            <div className={cn("transition-all duration-300 overflow-hidden", expandedAccordion === "storage" ? "max-h-[300px] pb-6" : "max-h-0")}>
              <ul className="space-y-3 text-[14px] leading-relaxed text-bark/75 font-medium">
                {detail.storageInfo.map((info, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-forest mt-0.5 font-bold">📍</span>
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Shelf Life Accordion */}
          <div>
            <button
              type="button"
              onClick={() => toggleAccordion("shelfLife")}
              className="w-full flex items-center justify-between py-6 text-left"
            >
              <span className="font-serif text-lg font-bold text-bark">Shelf Life</span>
              <span className="text-xl font-bold text-forest">{expandedAccordion === "shelfLife" ? "−" : "+"}</span>
            </button>
            <div className={cn("transition-all duration-300 overflow-hidden", expandedAccordion === "shelfLife" ? "max-h-[300px] pb-6" : "max-h-0")}>
              <p className="text-[14px] leading-relaxed text-bark/75 font-medium">{detail.shelfLife}</p>
            </div>
          </div>

        </div>

        {/* Dynamic Related Recommendations Section */}
        <div className="space-y-8 pt-8">
          <div className="text-center md:text-left space-y-2">
            <span className="inline-flex rounded-full border border-gold/35 bg-white px-5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.28em] text-forest shadow-sm select-none">
              Explore More
            </span>
            <h2 className="font-serif text-3xl font-bold text-bark">
              Recommended for You
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((recProduct) => (
              <ProductCard key={recProduct.id} product={recProduct} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
