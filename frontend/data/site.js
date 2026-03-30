import {
  BadgeCheck,
  Droplets,
  Factory,
  Flame,
  Hammer,
  Layers3,
  ShieldCheck,
  Sofa,
  Trees,
  Warehouse,
  Zap,
  Maximize,
  CheckCircle,
  Award,
  Users,
  Clock,
  PhoneCall
} from "lucide-react";

export const siteConfig = {
  name: "Sailee Plywood",
  tagline: "Dampness defeated with advanced technology",
  phone: "+91 99999 00000",
  email: "info@saileeply.com",
  address: "Plot No. 123, Plywood Industrial Area, City, State, ZIP",
  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    linkedin: "#"
  },
  aboutVideoId: "dQw4w9WgXcQ" // Example placeholder
};

export const heroSlides = [
  {
    id: 1,
    title: "Dampness defeated with advanced technology",
    subtitle: "Sailee Plywood manufactures high-performance boards for architects and designers.",
    image: "/images/new_plywood.jpg",
    cta: "Enquiry Now",
    secondaryCta: "Learn More",
    theme: "light"
  },
  {
    id: 2,
    title: "BUILDING DREAMS STRENGTH IN EVERY LAYER",
    subtitle: "Premium hardwood core engineered for extreme durability and finish.",
    image: "/images/new_plywood_banner.jpeg",
    cta: "View Catalog",
    secondaryCta: "Our Factory",
    theme: "dark",
    highlights: ["Quality Finishing", "Engineered Wood", "Excellent durability"]
  }
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Plywood", href: "#products" },
  { label: "Our Gallery", href: "#gallery" },
  { label: "Story", href: "#about" },
  { label: "Become Partner", href: "#partner" },
  { label: "Contact", href: "#contact" }
];

export const heroStats = [
  { value: "20+", label: "Categories", icon: BadgeCheck },
  { value: "100%", label: "Satisfied", icon: Users },
  { value: "10+", label: "Years Experience", icon: Clock },
  { value: "24/7", label: "Dealer Support", icon: PhoneCall }
];

export const aboutStats = [
  { value: "20+", label: "Product Categories" },
  { value: "100%", label: "Quality Assurance" },
  { value: "10+", label: "Years of Excellence" },
  { value: "24/7", label: "Customer Support" }
];

export const whyChooseUs = [
  {
    title: "Eco Friendly",
    description: "Our products are manufactured using sustainable processes and materials.",
    icon: Trees
  },
  {
    title: "Uniform Thickness",
    description: "Precise calibration ensures consistent thickness across every sheet.",
    icon: Maximize
  },
  {
    title: "Borer Free",
    description: "Special chemical treatment makes our plywood 100% borer and termite proof.",
    icon: CheckCircle
  },
  {
    title: "Maximum Hardness",
    description: "High density hardwood core provides exceptional strength and durability.",
    icon: Award
  },
  {
    title: "Boiling Water Proof",
    description: "Tested to withstand extreme moisture and boiling water conditions.",
    icon: Droplets
  },
  {
    title: "High Density",
    description: "Engineered with maximum fiber density for superior screw holding.",
    icon: Zap
  },
  {
    title: "No Warping",
    description: "Advanced seasoning process prevents warping and ensures dimensional stability.",
    icon: ShieldCheck
  },
  {
    title: "Smooth Finish",
    description: "Ready-to-use smooth surface perfect for laminates and veneers.",
    icon: CheckCircle
  },
  {
    title: "Calibrated",
    description: "Fully calibrated plywood for perfect alignment in modular furniture.",
    icon: Factory
  }
];

export const products = [
  {
    key: "plywood",
    title: "Plywood",
    image: "/images/plywood-range.png",
    description: "High-quality plywood for all your interior and exterior needs.",
    price: "45/sq.ft",
    specs: [
      { label: "Standard", value: "IS 710 / IS 303" },
      { label: "Thickness", value: "4mm to 25mm" },
      { label: "Glue", value: "BWP / BWR Grade" }
    ],
    features: ["Termite Proof", "Borer Proof", "Boiling Water Proof"]
  },
  {
    key: "block-board",
    title: "Block Board",
    image: "/images/block-board.png",
    description: "Dimensionally stable block boards for long-lasting furniture.",
    price: "55/sq.ft",
    specs: [
      { label: "Standard", value: "IS 1659" },
      { label: "Thickness", value: "19mm, 25mm" },
      { label: "Core", value: "Pine / Hardwood" }
    ],
    features: ["Low Warping", "Strong Grip", "Smooth Surface"]
  },
  {
    key: "flush-door",
    title: "Flush Door",
    image: "/images/flush-door.png",
    description: "Durable and elegant flush doors for modern homes.",
    price: "120/sq.ft",
    specs: [
      { label: "Standard", value: "IS 2202" },
      { label: "Thickness", value: "30mm, 35mm" },
      { label: "Core", value: "Solid Wood" }
    ],
    features: ["High Strength", "Weather Proof", "Ready to Finish"]
  },
  {
    key: "laminates",
    title: "Laminates",
    image: "/images/laminates.png",
    description: "Wide range of decorative laminates for stunning interiors.",
    price: "850/sheet",
    specs: [
      { label: "Thickness", value: "0.8mm, 1mm" },
      { label: "Finish", value: "Glossy / Matte / Texture" }
    ],
    features: ["Scratch Resistant", "Heat Resistant", "Designer Patterns"]
  },
  {
    key: "veneer",
    title: "Veneer",
    image: "/images/veneer.png",
    description: "Natural wood veneers for a premium and luxurious look.",
    price: "150/sq.ft",
    specs: [
      { label: "Type", value: "Natural / Teak / Exotic" },
      { label: "Thickness", value: "4mm" }
    ],
    features: ["Natural Grain", "Eco Friendly", "Elegance Redefined"]
  },
  {
    key: "wpc-board",
    title: "WPC Board",
    image: "/images/wpc.png",
    description: "Modern wood plastic composite boards for specialized applications.",
    price: "95/sq.ft",
    specs: [
      { label: "Type", value: "Solid / Hollow" },
      { label: "Density", value: "0.60 to 0.70" }
    ],
    features: ["100% Waterproof", "Termite Proof", "UV Resistant"]
  }
];

export const testimonials = [
  {
    quote: "CenturyPly has been my trusted plywood partner for many residential and commercial projects over the years. Their plywood quality is unmatched in the Indian market.",
    name: "Pappu Shaw",
    role: "Contractor, Kolkata",
    rating: 5,
    avatar: "/images/avatar-1.png"
  },
  {
    quote: "It's always delightful for me to use a product of centuryply, and I do. They are consistently innovative and provide great support.",
    name: "Hemant Singh",
    role: "Interior Designer, Delhi",
    rating: 5,
    avatar: "/images/avatar-2.png"
  },
  {
    quote: "I have been using Century Veneers for more than 5 years and have had no reason to complain. The material quality is excellent and customer service is highly commendable.",
    name: "Purvesh L. Mistry",
    role: "Architect, Mumbai",
    rating: 5,
    avatar: "/images/avatar-3.png"
  },
  {
    quote: "The durability and finish of Sailee Plywood are top-notch. Our clients are always impressed with the final furniture quality.",
    name: "Mohit Jain",
    role: "Architect, Mumbai",
    rating: 5,
    avatar: "/images/avatar-4.png"
  },
  {
    quote: "As a builder, I prioritize strength and warp-resistance. This plywood delivers on all fronts, especially for modular kitchen setups.",
    name: "Suresh Patel",
    role: "Builder, Ahmedabad",
    rating: 5,
    avatar: "/images/avatar-5.png"
  },
  {
    quote: "Excellent screw holding capacity and uniform thickness. It makes our job on-site much easier and faster.",
    name: "Rajesh Kumar",
    role: "Interior Contractor, Delhi",
    rating: 5,
    avatar: "/images/avatar-6.png"
  }
];

export const videoTestimonials = [
  { id: "1", thumbnail: "/images/video-1.png", title: "Project Walkthrough", youtubeId: "ScMzIvxBSi4" },
  { id: "2", thumbnail: "/images/video-2.png", title: "Dealer Feedback", youtubeId: "dQw4w9WgXcQ" },
  { id: "3", thumbnail: "/images/video-3.png", title: "Customer Experience", youtubeId: "ScMzIvxBSi4" },
  { id: "4", thumbnail: "/images/video-4.png", title: "Factory Tour", youtubeId: "dQw4w9WgXcQ" }
];

export const galleryItems = [
  { image: "/images/gallery-1.png", title: "Living Room Partition" },
  { image: "/images/gallery-2.png", title: "Modular Kitchen" },
  { image: "/images/gallery-3.png", title: "Bedroom Wardrobe" },
  { image: "/images/gallery-4.png", title: "Office Cabin" },
  { image: "/images/gallery-5.png", title: "Main Door Design" },
  { image: "/images/gallery-6.png", title: "Wall Panelling" }
]; 

