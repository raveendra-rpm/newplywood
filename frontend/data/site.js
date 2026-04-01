import {
  BadgeCheck,
  Droplets,
  Factory,
  ShieldCheck,
  Trees,
  Zap,
  Maximize,
  CheckCircle2,
  Award,
  Users,
  Clock,
  PhoneCall
} from "lucide-react";

export const latestProjects = [
  {
    title: "Dream Kids Retreat",
    category: "Kids Section",
    image: "/images/gallery-1.png",
  },
  {
    title: "Luxury Master Wardrobe",
    category: "Bed Room Interiors",
    image: "/images/gallery-3.png",
  },
  {
    title: "Elegant Oak Dining",
    category: "Wooden Dining Table",
    image: "/images/veneer.png",
  },
  {
    title: "Signature Modular Kitchen",
    category: "Modular Kitchen",
    image: "/images/gallery-2.png",
  },
  {
    title: "Creative Play Area",
    category: "Kids Section",
    image: "/images/gallery-4.png",
  },
  {
    title: "Modern Living Wall",
    category: "Bed Room Interiors",
    image: "/images/gallery-6.png",
  }
];

export const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Condition", href: "#" },
  { label: "Vision and Mission", href: "#" },
  { label: "Why Choose Us", href: "#why-choose-us" },
];

export const siteConfig = {
  name: "New Ply & Board Center",
  tagline: "A Group Company",
  description: "Welcome to New Plywood and Board Center, your premier destination for top-quality wood products.",
  phone: "+91-8077577221, +91-6392651116",
  email: "newplyandboardcenter@gmail.com",
  address: "Christ Nagar, Chandmari Near Up bank of baroda, Varanasi (UP) - 221003",
  openingHours: "Mon - Sun : 10:00AM to 07:30PM",
  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    linkedin: "#"
  },
  aboutVideoId: "#" // Placeholder updated from Rickroll
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
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "#about" },
  { 
    label: "SERVICES", 
    href: "#products",
    subItems: [
      { label: "WOODEN DOORS AND FRAMES", href: "#products" },
      { label: "WOODEN WINDOWS AND FRAMES", href: "#products" },
      { label: "SAGWAN DOORS AND WINDOWS", href: "#products" },
      { label: "MODULAR KITCHEN", href: "#products" },
      { label: "BED ROOM INTERIORS", href: "#products" },
      { label: "LIVING ROOM INTERIORS", href: "#products" },
      { label: "KIDS SECTION", href: "#products" }
    ]
  },
  { label: "BRANCHES", href: "#partner" },
  { label: "BLOGS", href: "#blog" },
  { label: "CONTACT US", href: "#contact" }
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
    icon: CheckCircle2
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
    icon: CheckCircle2
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
    image: "/images/plywood.png",
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
    { id: "1", thumbnail: "/images/new_plywood_banner.jpeg", title: "Project Walkthrough", youtubeId: "#" },
    { id: "2", thumbnail: "/images/new_plywood.jpg", title: "Dealer Feedback", youtubeId: "#" },
    { id: "3", thumbnail: "/images/new_plywood_banner.jpeg", title: "Customer Experience", youtubeId: "#" },
    { id: "4", thumbnail: "/images/new_plywood.jpg", title: "Factory Tour", youtubeId: "#" }
];

export const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Choosing the Right Plywood",
    image: "/images/new_plywood.jpg",
    bgColor: "#4F595E"
  },
  {
    id: 2,
    title: "5 Modern Furniture Designs for Your Living Room",
    image: "/images/new_plywood_banner.jpeg",
    bgColor: "#d97706"
  },
  {
    id: 3,
    title: "Why Termite-Proof Plywood is Essential for Your Home",
    image: "/images/new_plywood.jpg",
    bgColor: "#4F595E"
  },
  {
    id: 4,
    title: "Sustainable Plywood: A Greener Future for Design",
    image: "/images/new_plywood_banner.jpeg",
    bgColor: "#d97706"
  },
  {
    id: 5,
    title: "Modern Office Furniture with Premium Plywood",
    image: "/images/gallery-4.png",
    bgColor: "#1E293B"
  },
  {
    id: 6,
    title: "Designing a Minimalist Kitchen with WPC Boards",
    image: "/images/gallery-2.png",
    bgColor: "#4F595E"
  },
  {
    id: 7,
    title: "The Art of Natural Veneers in Modern Interiors",
    image: "/images/gallery-5.png",
    bgColor: "#d97706"
  }
];

export const galleryItems = [
  { image: "/images/gallery-1.png", title: "Living Room Partition" },
  { image: "/images/gallery-2.png", title: "Modular Kitchen" },
  { image: "/images/gallery-3.png", title: "Bedroom Wardrobe" },
  { image: "/images/gallery-4.png", title: "Office Cabin" },
  { image: "/images/gallery-5.png", title: "Main Door Design" },
  { image: "/images/gallery-6.png", title: "Wall Panelling" }
]; 

