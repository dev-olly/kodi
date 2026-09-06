export const PHOTOS = {
  hero: "/hero.jpg",
  brand: "/brand.jpg",
  digital: "/digital.jpg",
  ads: "/ads.jpg",
  prod: "/prod.jpg",
  show1: "/show1.jpg",
  show2: "/show2.jpg",
  show3: "/show3.jpg",
  contact: "/contact.jpg",
} as const;

export const SERVICES = [
  {
    num: "01",
    name: "Brand",
    slug: "brand",
    photo: PHOTOS.brand,
    sub: "Identity that holds.",
    body: "We build the visual systems that make companies unforgettable — strategy, identity, guidelines, and packaging that give brands a language before they speak a word.",
    items: [
      "Brand Strategy",
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
      "Rebranding",
      "Packaging Design",
    ],
  },
  {
    num: "02",
    name: "Digital",
    slug: "digital",
    photo: PHOTOS.digital,
    sub: "Experiences worth navigating.",
    body: "Interfaces that feel inevitable. Websites, apps, and digital products designed so well they become the benchmark their competitors try to match.",
    items: [
      "Website Design & Dev",
      "Landing Pages",
      "UI/UX Design",
      "Mobile App Design",
      "Digital Product Design",
    ],
  },
  {
    num: "03",
    name: "Advertising",
    slug: "advertising",
    photo: PHOTOS.ads,
    sub: "Campaigns that cut through.",
    body: "From brief to billboard — we concept, direct, and design campaigns that earn attention in a world that ignores everything average.",
    items: [
      "Campaign Concepts",
      "Creative Direction",
      "Advertising Design",
      "Billboard Creative",
      "Digital Ad Creatives",
      "Social Ad Creatives",
    ],
  },
  {
    num: "04",
    name: "Production",
    slug: "production",
    photo: PHOTOS.prod,
    sub: "The physical, perfected.",
    body: "Print, packaging, signage — designed here, managed end to end. The real world deserves the same precision as the digital one.",
    items: [
      "Business Cards",
      "Brochures & Flyers",
      "Posters",
      "Packaging",
      "Signage",
      "Large-Format Print",
      "Event Branding",
    ],
  },
] as const;

export const COMING = [
  {
    name: "Outdoor Media",
    items: [
      "Billboard Media Buying",
      "DOOH Campaigns",
      "Transit Advertising",
      "Street-Pole Ads",
      "Outdoor Media Planning",
    ],
  },
  {
    name: "Performance Ads",
    items: [
      "Meta Ads Management",
      "Google Ads",
      "TikTok Advertising",
      "YouTube Ads",
      "Retargeting & Conversion",
    ],
  },
  {
    name: "Adv. Production",
    items: [
      "Luxury Packaging",
      "Custom Rigid Boxes",
      "LED Installations",
      "Exhibition Stands",
      "3D Architectural Signage",
    ],
  },
] as const;

export const STAGES = [
  {
    phase: "Now",
    title: "Creative Agency",
    active: true,
    svcs: ["Brand", "Digital", "Advertising", "Production"],
  },
  {
    phase: "Next",
    title: "Integrated Creative Agency",
    active: false,
    svcs: ["Brand", "Digital", "Advertising", "Media Buying", "Outdoor", "Production"],
  },
  {
    phase: "Future",
    title: "Creative + Media Company",
    active: false,
    svcs: ["Brand", "Digital", "Advertising", "Media", "OOH/DOOH", "Production", "Technology"],
  },
] as const;

export const NAV_LINKS = ["Brand", "Digital", "Advertising", "Production"] as const;

export const TICKER_WORDS = [
  "Kodi",
  "Brand Identity",
  "Digital Design",
  "Ad Campaigns",
  "Production",
  "Creative Direction",
  "Visual Systems",
  "Packaging",
  "Strategy",
  "Kodi",
] as const;

export const SHOWCASE = [
  {
    src: PHOTOS.show1,
    label: "Editorial Campaign",
    sublabel: "Advertising — 2024",
    tall: true,
  },
  {
    src: PHOTOS.show2,
    label: "Luxury Packaging",
    sublabel: "Brand — Production",
    tall: false,
  },
  {
    src: PHOTOS.show3,
    label: "Creative Direction",
    sublabel: "Digital — Studio",
    tall: false,
  },
] as const;
