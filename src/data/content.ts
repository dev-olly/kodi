export const SERVICES = [
  {
    num: "01",
    name: "Brand",
    slug: "brand",
    sub: "Identity that holds.",
    count: 6,
    body: "We build visual foundations — strategy, identity, guidelines, packaging — that give companies a language before they speak a word.",
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
    sub: "Experiences worth navigating.",
    count: 5,
    body: "Websites, products, and interfaces designed so well they become the benchmark their competitors try to match.",
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
    sub: "Campaigns that cut.",
    count: 6,
    body: "Creative direction and advertising design built for the real world — outdoor, digital, social, and everything in between.",
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
    sub: "The physical, perfected.",
    count: 8,
    body: "Print, packaging, signage, and large-format work managed end-to-end. We design it and we deliver it.",
    items: [
      "Business Cards",
      "Brochures & Flyers",
      "Posters",
      "Stickers & Labels",
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
      "Outdoor Planning",
    ],
  },
  {
    name: "Performance",
    items: [
      "Meta Ads Management",
      "Google Ads",
      "TikTok Advertising",
      "YouTube Ads",
      "Retargeting",
    ],
  },
  {
    name: "Adv. Production",
    items: [
      "Luxury Packaging",
      "Custom Rigid Boxes",
      "LED Installations",
      "Exhibition Stands",
      "3D Signage",
    ],
  },
] as const;

export const STAGES = [
  {
    label: "Now",
    title: "Creative Agency",
    active: true,
    services: ["Brand", "Digital", "Advertising Creative", "Production"],
  },
  {
    label: "Next",
    title: "Integrated Creative Agency",
    active: false,
    services: ["Brand", "Digital", "Advertising", "Media Buying", "Outdoor", "Production"],
  },
  {
    label: "Future",
    title: "Creative + Media Company",
    active: false,
    services: ["Brand", "Digital", "Advertising", "Media", "OOH / DOOH", "Production", "Technology"],
  },
] as const;

export const NAV_LINKS = ["Brand", "Digital", "Advertising", "Production"] as const;

export const TICKER_WORDS = [
  "Brand Identity",
  "Digital Design",
  "Ad Campaigns",
  "Production",
  "Strategy",
  "Creative Direction",
  "Packaging",
  "KODI",
] as const;
