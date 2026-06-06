import {
  Experience,
  Product,
  Stay,
  Testimonial
} from "@/lib/types";

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/stay-explore", label: "Stay & Explore" },
  { href: "/gau-seva", label: "Gau Seva" },
  { href: "/contact", label: "Contact" }
];

export const siteContact = {
  phonePrimary: "+91 78230 17504",
  email: "info@swanandjigaushala.com"
};

export const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    shortLabel: "YT"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    shortLabel: "IG"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    shortLabel: "FB"
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919423689052",
    shortLabel: "WA"
  }
] as const;

export const products: Product[] = [
  // 1. Featured Products
  {
    id: "ghee",
    slug: "desi-gir-cow-a2-bilona-ghee",
    name: "Desi Gir Cow A2 Bilona Ghee",
    category: "dairy",
    section: "featured",
    price: 1200,
    unit: "1 Liter",
    description:
      "Traditional bilona ghee crafted from A2 milk of indigenous cows for rich aroma, nourishment, and everyday wellness.",
    benefits: [
      "100% pure and chemical-free",
      "Prepared from A2 milk",
      "Supports immunity and digestion",
      "Made using traditional methods"
    ],
    badge: "Best Seller",
    stock: 14,
    accent: "from-amber-100 to-yellow-50"
  },
  {
    id: "a2-ghee",
    slug: "a2-ghee",
    name: "A2 Ghee",
    category: "dairy",
    section: "featured",
    price: 950,
    unit: "1 Liter",
    description:
      "Pure A2 Ghee made from high-quality A2 milk of Gir cows, offering great taste and health benefits.",
    benefits: [
      "100% pure A2 cow ghee",
      "Rich in healthy fats",
      "Good for digestion and heart",
      "Ethically sourced"
    ],
    stock: 15,
    accent: "from-yellow-100 to-amber-50"
  },
  {
    id: "gomutra-ark",
    slug: "gomutra-ark",
    name: "Gomutra Ark",
    category: "wellness",
    section: "featured",
    price: 150,
    unit: "500ml",
    description:
      "Prepared from distilled cow urine of indigenous cows, rooted in traditional Ayurvedic wellness practices.",
    benefits: [
      "Supports immunity",
      "Detoxifies the body",
      "Ayurvedic preparation",
      "Natural and pure"
    ],
    stock: 18,
    accent: "from-teal-100 to-emerald-50"
  },
  {
    id: "vermicompost",
    slug: "vermicompost",
    name: "Vermicompost",
    category: "farm",
    section: "featured",
    price: 250,
    unit: "5 Kg",
    description:
      "Organic fertilizer produced through natural decomposition to improve soil structure, vitality, and crop performance.",
    benefits: [
      "100% organic fertilizer",
      "Improves soil health",
      "Enhances crop yield",
      "Eco-friendly solution"
    ],
    stock: 24,
    accent: "from-green-100 to-lime-50"
  },
  {
    id: "vermiwash",
    slug: "vermiwash",
    name: "Vermiwash",
    category: "farm",
    section: "featured",
    price: 150,
    unit: "1 Liter",
    description:
      "Liquid fertilizer extracted from earthworm activity, rich in amino acids and nutrients for foliar spray.",
    benefits: [
      "Natural plant booster",
      "Rich in enzymes and micronutrients",
      "Protects against pests",
      "Easy foliar application"
    ],
    stock: 20,
    accent: "from-emerald-100 to-teal-50"
  },

  // 2. Experience at Gaushala
  {
    id: "shrikhand",
    slug: "shrikhand",
    name: "Fresh A2 Shrikhand",
    category: "dairy",
    section: "experience",
    price: 300,
    unit: "500g",
    description:
      "Fresh, creamy shrikhand that balances tradition and taste with pure milk and naturally delightful texture.",
    benefits: [
      "Fresh and hygienic preparation",
      "Rich in taste",
      "No artificial flavors",
      "Made from pure milk"
    ],
    stock: 10,
    accent: "from-rose-100 to-orange-50"
  },
  {
    id: "curd",
    slug: "curd-dahi",
    name: "Curd (Dahi)",
    category: "dairy",
    section: "experience",
    price: 80,
    unit: "500g",
    description:
      "Fresh, thick, naturally set curd made from pure cow milk and packed with farm-fresh probiotic goodness.",
    benefits: [
      "Natural probiotic",
      "Improves digestion",
      "No preservatives",
      "Farm fresh quality"
    ],
    stock: 8,
    badge: "Low Stock",
    accent: "from-sky-100 to-cyan-50"
  },
  {
    id: "butter",
    slug: "fresh-a2-butter",
    name: "Fresh A2 Butter",
    category: "dairy",
    section: "experience",
    price: 450,
    unit: "500g",
    description:
      "Traditional white butter (Loni) freshly churned from pure A2 curd, rich in cream and flavor.",
    benefits: [
      "Traditional hand-churned white butter",
      "100% natural and unsalted",
      "Rich in fat-soluble vitamins",
      "Authentic village taste"
    ],
    stock: 12,
    accent: "from-yellow-100 to-orange-50"
  },
  {
    id: "paneer",
    slug: "fresh-a2-paneer",
    name: "Fresh A2 Paneer",
    category: "dairy",
    section: "experience",
    price: 350,
    unit: "500g",
    description:
      "Fresh, soft A2 cottage cheese (paneer) crafted from whole A2 milk without any artificial coagulants.",
    benefits: [
      "Made from pure A2 milk",
      "High-quality protein source",
      "Soft, melt-in-mouth texture",
      "Freshly packed daily"
    ],
    stock: 10,
    accent: "from-blue-100 to-sky-50"
  },
  {
    id: "milk",
    slug: "fresh-a2-milk",
    name: "Fresh A2 Milk",
    category: "dairy",
    section: "experience",
    price: 90,
    unit: "1 Liter",
    description:
      "Raw, fresh, whole A2 milk from grass-fed Desi Gir cows, packed with rich vitamins and easy-to-digest proteins.",
    benefits: [
      "100% raw A2 milk",
      "Easy to digest Beta-casein protein",
      "Free from chemicals and hormones",
      "Direct from our farm"
    ],
    stock: 30,
    accent: "from-sky-100 to-blue-50"
  },
  {
    id: "chick-milk",
    slug: "fresh-a2-chick-milk",
    name: "Fresh A2 Chick Milk",
    category: "dairy",
    section: "experience",
    price: 180,
    unit: "500ml",
    description:
      "Highly nutritious first milk (colostrum/cheek) from Gir cows, rich in immunoglobulins and natural strength builders.",
    benefits: [
      "High in immunoglobulins (antibodies)",
      "Boosts immune system and strength",
      "Extremely rich in proteins and vitamins",
      "Sourced ethically after calf feeding"
    ],
    stock: 5,
    accent: "from-amber-100 to-orange-50"
  }
];

export const stays: Stay[] = [
  {
    id: "farmhouse-eco-stay",
    name: "Farmhouse Eco-Stay",
    description:
      "A calm village retreat with organic meals, forest views, and a restorative pace of life close to the Gaushala.",
    features: [
      "Traditional village architecture",
      "Fresh organic meals",
      "Nature and forest views",
      "Basic WiFi connectivity"
    ],
    capacity: "2-4 guests",
    duration: "1-3 nights",
    rating: 4.8,
    reviews: 45,
    price: 1800,
    compareAtPrice: 2500,
    badge: "Popular",
    accent: "from-emerald-100 to-stone-50"
  },
  {
    id: "village-camping-stay",
    name: "Village Camping Stay",
    description:
      "An adventure-led village stay with tents, bonfire evenings, stargazing, and peaceful nights near nature.",
    features: [
      "Traditional tent setup",
      "Bonfire and local food",
      "Village walk and nature trails",
      "Stargazing experience"
    ],
    capacity: "2-6 guests",
    duration: "1-2 nights",
    rating: 4.7,
    reviews: 38,
    price: 900,
    compareAtPrice: 1500,
    badge: "Adventure",
    accent: "from-amber-100 to-orange-50"
  }
];

export const experiences: Experience[] = [
  {
    id: "jungle-safari",
    name: "Jungle Safari",
    description:
      "Explore nearby forests with guided access to biodiversity, wildlife, and the immersive energy of the jungle.",
    duration: "3-4 hours",
    difficulty: "Easy",
    groupSize: "2-8 people",
    rating: 4.7,
    reviews: 67,
    price: 700,
    compareAtPrice: 800,
    accent: "from-green-100 to-yellow-50"
  },
  {
    id: "cycle-safari",
    name: "Cycle Safari",
    description:
      "Ride through scenic village paths and lush green surroundings for an active and eco-friendly village adventure.",
    duration: "2-3 hours",
    difficulty: "Moderate",
    groupSize: "2-6 people",
    rating: 4.5,
    reviews: 43,
    price: 400,
    compareAtPrice: 500,
    accent: "from-cyan-100 to-sky-50"
  },
  {
    id: "nature-walk",
    name: "Nature Walk",
    description:
      "A gentle guided walk to discover birds, native plants, and the quiet beauty of untouched surroundings.",
    duration: "1-2 hours",
    difficulty: "Easy",
    groupSize: "2-10 people",
    rating: 4.6,
    reviews: 89,
    price: 250,
    compareAtPrice: 300,
    accent: "from-lime-100 to-green-50"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "The ghee felt exactly like what we grew up with at home. Pure, fragrant, and incredibly trustworthy.",
    author: "Ritika Sharma",
    location: "Nagpur",
    rating: 5
  },
  {
    id: "2",
    quote:
      "Our family stayed for two nights and left feeling lighter, calmer, and much closer to nature.",
    author: "Amit Jain",
    location: "Pune",
    rating: 5
  },
  {
    id: "3",
    quote:
      "The Gau Seva experience was peaceful and deeply meaningful for our children as well as for us.",
    author: "Sneha Kulkarni",
    location: "Mumbai",
    rating: 5
  },
  {
    id: "4",
    quote:
      "We purchased the bilona A2 ghee and shrikhand. The taste is absolutely authentic and reminds us of traditional village food.",
    author: "Vikram Deshmukh",
    location: "Bhandara",
    rating: 5
  },
  {
    id: "5",
    quote:
      "An incredible eco-stay experience! Walking along the forest trails and participating in morning Gau Seva was deeply therapeutic.",
    author: "Dr. Rajesh Patil",
    location: "Nagpur",
    rating: 5
  },
  {
    id: "6",
    quote:
      "Unlike modern commercial brands, Swanandji's products feel truly natural. Their curd is exceptionally thick and fresh.",
    author: "Meera Joshi",
    location: "Mumbai",
    rating: 5
  }
];

export const faqs = [
  {
    question: "Is your milk pasteurized?",
    answer:
      "No. We provide raw milk to help preserve its natural character and nutrients."
  },
  {
    question: "Do you add water or chemicals?",
    answer:
      "Absolutely not. Our milk and dairy products are prepared without dilution or adulteration."
  },
  {
    question: "How are your cows maintained?",
    answer:
      "Through natural grazing, Ayurvedic care, open spaces, and a stress-free environment."
  }
];

export const galleryMoments = [
  "Gaushala mornings",
  "Gir cows in open grazing",
  "Forest-side eco stay",
  "Traditional chulha cooking",
  "Village trails and greenery",
  "Nature-led wellness moments"
];

export const founders = [
  {
    name: "Shree Nandalalji Gahane",
    role: "Co-Visionary | Gau Sevak | Founder",
    quote:
      "Swanandji is a humble effort to restore purity in daily life and rebuild our lost connection with nature through honest food, compassion, and traditional values."
  },
  {
    name: "Smt. Swati Gahane",
    role: "Co-Visionary | Prerna Strot | Co-Founder",
    quote:
      "Every product and every stay experience is shaped by simplicity, care, and the belief that true well-being begins with mindful choices and authentic living."
  }
];

export const coreValues = [
  {
    title: "Gau Mata Love",
    description:
      "Our cows live with devotion, respect, natural movement, and compassionate daily care."
  },
  {
    title: "Natural Care",
    description:
      "Neem, giloy, jaggery, and traditional Ayurvedic support replace synthetic shortcuts."
  },
  {
    title: "Forest-Based Living",
    description:
      "The Nagzira-Koka ecosystem supports healthier cows, calmer rhythms, and more natural nutrition."
  }
];



export const whyChooseUs = [
  "100% pure and natural products",
  "Zero processing and no dilution",
  "Ethical cow care without hormones",
  "Traditional bilona and chulha methods",
  "Forest-based grazing and wellness",
  "A holistic lifestyle rooted in simplicity"
];

export const locationPoints = [
  "Sonegaon Village, Bhandara, Maharashtra",
  "Just 500 meters from Koka Jungle",
  "Near the Nagzira forest region",
  "On the Sakoli-Tumsar State Highway"
];

export const farmhouseRooms = [
  { id: "room-1", name: "Room 1", capacity: "2-3 persons", price: 3000, description: "A comfortable eco-friendly room with a beautiful farm view.", amenities: ["Breakfast included", "Attached Bathroom", "Natural Ventilation", "Farm View"], status: "Available" },
  { id: "room-2", name: "Room 2", capacity: "2-3 persons", price: 3000, description: "Serene and peaceful room crafted with traditional materials.", amenities: ["Breakfast included", "Attached Bathroom", "Natural Ventilation", "Forest View"], status: "Available" },
  { id: "room-3", name: "Room 3", capacity: "2-3 persons", price: 3000, description: "Spacious layout with natural cooling and authentic decor.", amenities: ["Breakfast included", "Attached Bathroom", "Natural Ventilation", "Garden View"], status: "Reserved" },
  { id: "room-4", name: "Room 4", capacity: "2-3 persons", price: 3000, description: "Quiet corner room offering the ultimate restful experience.", amenities: ["Breakfast included", "Attached Bathroom", "Natural Ventilation", "Farm View"], status: "Available" }
];
