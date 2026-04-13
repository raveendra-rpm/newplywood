// Removed direct lucide-react imports to fix module initialization errors in Next.js 15
// These will be mapped in the respective components using string lookups


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
  name: "New Plywoods and Board Center",
  tagline: "A Group Company",
  description: "Welcome to New Plywoods and Board Center, your premier destination for top-quality wood products.",
  phone: "+91-8077577221",
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
    image: "/images/new_plywood_one.jpg",
    mobileImage: "/images/new_plywood_one_mob.png",
    cta: "Enquiry Now",
    secondaryCta: "Learn More",
    theme: "light"
  },
  {
    id: 2,
    title: "BUILDING DREAMS STRENGTH IN EVERY LAYER",
    subtitle: "Premium hardwood core engineered for extreme durability and finish.",
    image: "/images/new_plywood_two.jpeg",
    mobileImage: "/images/new_plywood_two_mob.png",
    cta: "View Catalog",
    secondaryCta: "Our Factory",
    theme: "dark",
    highlights: ["Quality Finishing", "Engineered Wood", "Excellent durability"]
  },
  {
    id: 3,
    title: "Quality that speaks for itself",
    subtitle: "Discover our premium range of plywood and boards.",
    image: "/images/new_plywood_three.png",
    mobileImage: "/images/new_plywood_three_mob.png",
    cta: "Contact Us",
    secondaryCta: "View Products",
    theme: "light"
  }
];

export const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "#about" },
  { 
    label: "SERVICES", 
    href: "#",
    isMegaMenu: true,
    subItems: [
      { label: "WOODEN DOORS AND FRAMES", href: "/services/wooden-doors" },
      { label: "WOODEN WINDOWS AND FRAMES", href: "/services/wooden-windows" },
      { label: "SAGWAN DOORS AND WINDOWS", href: "/services/sagwan-doors" },
      { label: "MODULAR KITCHEN", href: "/services/modular-kitchen" },
      { label: "BED ROOM INTERIORS", href: "/services/bedroom-interiors" },
      { label: "LIVING ROOM INTERIORS", href: "/services/livingroom-interiors" },
      { label: "KIDS SECTION", href: "/services/kids-section" },
      { label: "VENEER DOOR", href: "/services/veneer-door" }
    ]
  },
  { 
    label: "PRODUCTS", 
    href: "/#products",
    isMegaMenu: true,
    subItems: [
      { label: "PLYWOOD", href: "/products/plywood" },
      { label: "BLOCK BOARD", href: "/products/block-board" },
      { label: "FLUSH DOOR", href: "/products/flush-door" },
      { label: "LAMINATES", href: "/products/laminates" },
      { label: "VENEER", href: "/products/veneer" },
      { label: "WPC BOARD & DOOR", href: "/products/wpc-board" },
      { label: "HARDWARE", href: "/products/hardware" }
    ]
  },
  { label: "BRANCHES", href: "/branches" },
  { label: "BLOGS", href: "#blog" },
  { label: "CONTACT US", href: "/contact" }
];

export const heroStats = [
  { value: "20+", label: "Categories", icon: "BadgeCheck" },
  { value: "100%", label: "Satisfied", icon: "Users" },
  { value: "10+", label: "Years Experience", icon: "Clock" },
  { value: "24/7", label: "Dealer Support", icon: "PhoneCall" }
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
    icon: "Trees",
    image: "/images/eco-friendly.png"
  },
  {
    title: "Uniform Thickness",
    description: "Precise calibration ensures consistent thickness across every sheet.",
    icon: "Maximize",
    image: "/images/uniform-thickness.png"
  },
  {
    title: "Borer Free",
    description: "Special chemical treatment makes our plywood 100% borer and termite proof.",
    icon: "CheckCircle2",
    image: "/images/borer-free.png"
  },
  {
    title: "Maximum Hardness",
    description: "High density hardwood core provides exceptional strength and durability.",
    icon: "Award",
    image: "/images/maximum-hardness.png"
  },
  {
    title: "Boiling Water Proof",
    description: "Tested to withstand extreme moisture and boiling water conditions.",
    icon: "Droplets",
    image: "/images/boiling-water-proof.png"
  },
  {
    title: "High Density",
    description: "Engineered with maximum fiber density for superior screw holding.",
    icon: "Zap",
    image: "/images/high-density.png"
  },
  {
    title: "No Warping",
    description: "Advanced seasoning process prevents warping and ensures dimensional stability.",
    icon: "ShieldCheck",
    image: "/images/no-warping.png"
  },
  {
    title: "Smooth Finish",
    description: "Ready-to-use smooth surface perfect for laminates and veneers.",
    icon: "CheckCircle2",
    image: "/images/smooth-finish.png"
  },
  {
    title: "Calibrated",
    description: "Fully calibrated plywood for perfect alignment in modular furniture.",
    icon: "Factory",
    image: "/images/calibrated.png"
  }
];
export const products = [
  {
    key: "plywood",
    title: "Plywood",
    image: "/images/plywood.png",
    description: "High-quality plywood for all your interior and exterior needs.",
    longDescription: "New Ply & Board Center offers premium Plywood engineered for extreme durability. Our plywood is manufactured using the latest technology, ensuring a borer-free and termite-proof experience. Perfect for high-end furniture and structural applications.",
    price: "45/sq.ft",
    specs: [
      { label: "Standard", value: "IS 710 / IS 303" },
      { label: "Thickness", value: "4mm to 19mm" },
      { label: "Glue", value: "BWP / BWR Grade" },
      { label: "Core", value: "Premium Hardwood" }
    ],
    features: ["Termite Proof", "Borer Proof", "Boiling Water Proof"],
    advantages: ["100% Borer & Termite Proof", "Boiling Water Proof (BWP)", "High Screw Holding Capacity", "Uniform Thickness"],
    applications: ["Luxury Furniture", "Wall Paneling", "Ceiling Work", "Kitchen Cabinets"]
  },
  {
    key: "block-board",
    title: "Block Board",
    image: "/images/block-board.png",
    description: "Dimensionally stable block boards for long-lasting furniture.",
    longDescription: "Our Block Boards are dimensionally stable and resistant to twisting or warping. Made from high-quality seasoned timber, they are ideal for long-span applications like wardrobes and bookcases.",
    price: "55/sq.ft",
    specs: [
      { label: "Standard", value: "IS 1659" },
      { label: "Thickness", value: "19mm, 25mm" },
      { label: "Core", value: "Seasoned Pine / Hardwood" }
    ],
    features: ["Low Warping", "Strong Grip", "Smooth Surface"],
    advantages: ["High Structural Strength", "Lightweight", "Warp Resistant", "Easy to Paint/Polish"],
    applications: ["Wardrobes", "Bookcases", "Partitions", "Long Tables"]
  },
  {
    key: "flush-door",
    title: "Flush Door",
    image: "/images/flush-door.png",
    description: "Durable and elegant flush doors for modern homes.",
    longDescription: "New Ply & Board Center's Flush Doors offer a perfect blend of strength and aesthetics. Built with a solid core and bonded with premium resins, they provide excellent insulation and security for your space.",
    price: "120/sq.ft",
    specs: [
      { label: "Standard", value: "IS 2202" },
      { label: "Thickness", value: "30mm, 35mm" },
      { label: "Core", value: "Solid Wood" }
    ],
    features: ["Impact Resistant", "Weather Proof", "Ready to Finish"],
    advantages: ["Impact Resistant", "Weather Proof", "Solid Core Construction", "Termite Resistant"],
    applications: ["Main Entrance", "Bedroom Doors", "Bathroom Doors", "Office Cabins"]
  },
  {
    key: "laminates",
    title: "Laminates",
    image: "/images/laminates.png",
    description: "Wide range of decorative laminates for stunning interiors.",
    longDescription: "Enhance your interiors with our exquisite range of Decorative Laminates. Available in hundreds of patterns and textures, they are built to last with anti-scratch and heat-resistant properties.",
    price: "850/sheet",
    specs: [
      { label: "Thickness", value: "0.8mm, 1mm" },
      { label: "Finish", value: "Glossy / Matte / Texture" }
    ],
    features: ["Scratch Resistant", "Heat Resistant", "Designer Patterns"],
    advantages: ["Scratch Resistant", "Heat Resistant", "Anti-Bacterial Surface", "Vibrant Colors"],
    applications: ["Furniture Tops", "Wall Cladding", "Kitchen Counters", "Retail Displays"]
  },
  {
    key: "veneer",
    title: "Veneer",
    image: "/images/veneer.png",
    description: "Natural wood veneers for a premium and luxurious look.",
    longDescription: "Experience the luxury of real wood with our Premium Veneers. Sourced from the finest forests, they bring a natural soul and unique grain patterns to your furniture and walls.",
    price: "150/sq.ft",
    specs: [
      { label: "Type", value: "Natural / Teak / Exotic" },
      { label: "Thickness", value: "4mm" }
    ],
    features: ["Natural Grain", "Eco Friendly", "Elegance Redefined"],
    advantages: ["Natural Wood Texture", "Eco-Friendly", "Premium Finish", "Unique Grain Patterns"],
    applications: ["Executive Offices", "Master Bedrooms", "Feature Walls", "Luxury Dining"]
  },
  {
    key: "wpc-board",
    title: "WPC Board & Door",
    image: "/images/wpc.png",
    description: "Modern wood plastic composite boards and doors for specialized applications.",
    longDescription: "The modern alternative to wood. Our Wood Plastic Composite (WPC) boards and doors are 100% waterproof and termite-proof, making them ideal for moisture-heavy areas like bathrooms and kitchens.",
    price: "95/sq.ft",
    specs: [
      { label: "Type", value: "Solid / Hollow" },
      { label: "Density", value: "0.60 to 0.70" }
    ],
    features: ["100% Waterproof", "Termite Proof", "UV Resistant"],
    advantages: ["100% Waterproof", "Termite & Borer Proof", "UV Resistant", "Eco-Friendly & Recyclable"],
    applications: ["Bathroom Vanities", "Exterior Cladding", "Modular Kitchens", "Swimming Pool Areas"]
  },
  {
    key: "hardware",
    title: "Hardware",
    image: "/images/hardware.png",
    description: "Premium architectural hardware for the perfect finishing touch.",
    longDescription: "Complete your spaces with our premium range of architectural hardware. From sleek designer handles to high-precision hinges and locks, we offer hardware that combines modern aesthetics with lifelong durability.",
    price: "On Demand",
    specs: [
      { label: "Material", value: "SS 304 / Brass / Zinc" },
      { label: "Finish", value: "Chrome / Matte / Gold" }
    ],
    features: ["Corrosion Resistant", "Precision Engineered", "Design Focused"],
    advantages: ["Lifelong Durability", "Smooth Operation", "Anti-Corrosive Finish", "Premium Design Aesthetics"],
    applications: ["Main Doors", "Cabinets", "Interior Doors", "Kitchen Hardware"]
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

export const branches = [
  {
    id: 1,
    name: "New Plywood - Udaypur",
    type: "Authorised Franchise",
    address: "Near Ideal Public School, Varanasi",
    phone: "7406033480",
    email: "newplyandboardcenter@gmail.com",
    mapUrl: "#",
    isFranchise: true,
    image: "/images/new_plywood.jpg"
  },
  {
    id: 2,
    name: "New Plywood - Shivpur",
    type: "Authorised Franchise",
    address: "Babatpur Road, Near Moon Garden Lawn, Varanasi",
    phone: "0542 4072841, 7905204423",
    email: "newplyandboardcenter@gmail.com",
    mapUrl: "#",
    isFranchise: true,
    image: "/images/new_plywood_banner.jpeg"
  },
  {
    id: 3,
    name: "New Plywood - Chandmari",
    type: "Main Branch",
    address: "Christ Nagar, Near Bank of Baroda, Varanasi",
    phone: "0542 24053496, 6392651116",
    email: "newplyandboardcenter@gmail.com",
    mapUrl: "#",
    isFranchise: false,
    image: "/images/gallery-1.png"
  },
  {
    id: 4,
    name: "New Plywood - Ashapur",
    type: "Authorised Franchise",
    address: "Tilmapur opposite Indian Oil Ashapur Pincode 221007",
    phone: "8960679136",
    email: "newplyandboardcenter@gmail.com",
    mapUrl: "#",
    isFranchise: true,
    image: "/images/gallery-3.png"
  },
  {
    id: 5,
    name: "New Plywood - Pandeypur",
    type: "Authorised Franchise",
    address: "Chhota Lalpur, Pandeypur, Varanasi",
    phone: "8077577221",
    email: "newplyandboardcenter@gmail.com",
    mapUrl: "#",
    isFranchise: true,
    image: "/images/gallery-4.png"
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

export const services = [
  {
    key: "wooden-doors",
    title: "Wooden Doors & Frames",
    tagline: "Crafted for elegance, built for strength",
    heroImage: "/images/flush-door.png",
    description: "Premium handcrafted wooden doors and frames that blend timeless beauty with unmatched durability. Each door is precision-engineered to complement your home's architecture.",
    longDescription: "At New Plywoods and Board Center, we offer an exquisite range of wooden doors and frames crafted from the finest seasoned timber. Our doors are designed to enhance the aesthetic appeal of your home while providing superior strength and security. From classic panel doors to contemporary flush designs, every door is meticulously crafted by skilled artisans with decades of experience. We use only premium quality wood with special chemical treatments to ensure your doors remain termite-free and long-lasting for generations.",
    features: [
      { title: "Premium Seasoned Timber", desc: "Only the finest aged wood, kiln-dried for perfect moisture content and dimensional stability" },
      { title: "Precision Engineered Frames", desc: "Perfectly calibrated frames ensure a flawless fit with zero gaps for superior insulation" },
      { title: "Anti-Termite Treatment", desc: "Deep chemical treatment protects against termites, borers, and moisture for decades" },
      { title: "Custom Sizes Available", desc: "Any size, any design — made to measure for your exact architectural requirements" }
    ],
    process: [
      { step: "01", title: "Design Consultation", desc: "Our experts visit your site to understand your requirements and suggest the best design" },
      { step: "02", title: "Wood Selection", desc: "Premium seasoned timber is selected and kiln-dried to the perfect moisture level" },
      { step: "03", title: "Precision Crafting", desc: "Skilled artisans shape, joint, and assemble each door with millimeter precision" },
      { step: "04", title: "Finishing & Delivery", desc: "Anti-termite treatment, sanding, and delivery directly to your doorstep" }
    ],
    gallery: ["/images/gallery-5.png", "/images/gallery-1.png", "/images/gallery-3.png", "/images/gallery-4.png"],
    benefits: ["ISI Marked Quality", "10-Year Warranty", "Custom Designs", "Free Installation"],
    priceRange: "₹8,000 – ₹45,000 per door",
    color: "#b45309"
  },
  {
    key: "wooden-windows",
    title: "Wooden Windows & Frames",
    tagline: "Let in the light, keep out the noise",
    heroImage: "/images/block-board.png",
    description: "Beautifully crafted wooden windows and frames that bring natural light while ensuring perfect insulation, security, and soundproofing.",
    longDescription: "Transform your spaces with our premium wooden windows and frames at New Plywoods and Board Center, Varanasi. We craft windows that are not just functional but architectural statements. Using the best seasoned hardwood and advanced joinery techniques, our windows offer excellent thermal and acoustic insulation. Whether you prefer traditional casement windows, sleek sliding designs, or ornate carved frames, we create them all with impeccable craftsmanship that will last for decades.",
    features: [
      { title: "Seasoned Hardwood", desc: "Premium grade hardwood selected for grain, strength, and dimensional stability year-round" },
      { title: "Acoustic Insulation", desc: "Precision-fitted frames with weather strips for superior noise reduction up to 65%" },
      { title: "Weather Resistant Finish", desc: "Multiple coats of weather-resistant primer and finish protect against moisture and UV rays" },
      { title: "Multi-Point Locking", desc: "Integrated locking mechanisms for enhanced security and tight sealing against weather" }
    ],
    process: [
      { step: "01", title: "Site Measurement", desc: "Precise measurements taken by our technicians to ensure a perfect architectural fit" },
      { step: "02", title: "Design Approval", desc: "3D design preview shared for your approval before production begins" },
      { step: "03", title: "Expert Crafting", desc: "Each frame is hand-crafted and assembled with precision mortise and tenon joints" },
      { step: "04", title: "Installation", desc: "Professional installation team ensures perfect alignment, sealing, and finishing" }
    ],
    gallery: ["/images/gallery-2.png", "/images/gallery-4.png", "/images/gallery-6.png", "/images/gallery-1.png"],
    benefits: ["Custom Shapes", "Soundproofing", "Weather Sealed", "Professional Install"],
    priceRange: "₹5,000 – ₹25,000 per window",
    color: "#b45309"
  },
  {
    key: "sagwan-doors",
    title: "Sagwan Doors & Windows",
    tagline: "The royal choice — Teak for generations",
    heroImage: "/images/veneer.png",
    description: "Legendary Sagwan (Teak) doors and windows — the ultimate choice for premium homes. Known for its exceptional durability, natural oils, and royal appearance.",
    longDescription: "Sagwan (Teak) is the undisputed king of wood in India, and at New Plywoods and Board Center, we offer authentic Sagwan doors and windows that are built to last for generations. Teak's natural oils make it resistant to moisture, termites, and warping without any chemical treatment. Our skilled craftsmen use traditional joinery techniques combined with modern precision tools to create Sagwan doors and windows that become the centerpiece of your home — growing more beautiful with age.",
    features: [
      { title: "100% Authentic Sagwan", desc: "Genuine Grade-A Sagwan (Teak) sourced directly from certified sustainable forests" },
      { title: "Naturally Termite-Proof", desc: "Teak's natural oils provide lifetime protection against termites and moisture without chemicals" },
      { title: "Ages Like Fine Wine", desc: "Sagwan develops a rich patina over time, becoming more beautiful and valuable with age" },
      { title: "Heirloom Quality", desc: "Generational craftsmanship — your grandchildren will still admire these doors" }
    ],
    process: [
      { step: "01", title: "Grade Selection", desc: "Only Grade-A Sagwan logs with straight grain and perfect natural oil content are selected" },
      { step: "02", title: "Seasoning", desc: "Minimum 2-year natural seasoning ensures zero warping and maximum dimensional stability" },
      { step: "03", title: "Master Crafting", desc: "Our master craftsmen with 20+ years experience shape every detail by hand" },
      { step: "04", title: "Natural Oil Finish", desc: "Traditional teak oil finish enhances the grain and provides natural weather protection" }
    ],
    gallery: ["/images/gallery-5.png", "/images/gallery-3.png", "/images/gallery-6.png", "/images/gallery-2.png"],
    benefits: ["Authentic Grade-A Teak", "Lifetime Durability", "Natural Termite Proof", "Increases Property Value"],
    priceRange: "₹25,000 – ₹1,20,000 per door",
    color: "#92400e"
  },
  {
    key: "modular-kitchen",
    title: "Modular Kitchen",
    tagline: "Where function meets luxury",
    heroImage: "/images/gallery-2.png",
    description: "Premium modular kitchens designed for the modern home. Smart storage, stunning aesthetics, and superior materials that transform cooking into an experience.",
    longDescription: "Your kitchen is the heart of your home, and at New Plywoods and Board Center, we design modular kitchens that perfectly balance beauty and functionality. Our modular kitchen solutions are built using premium marine plywood with high-quality laminates, soft-close hinges, and precision-crafted cabinets. We work with top brands like Hettich, Hafele, and Blum to ensure every mechanism works flawlessly for decades. From compact L-shaped kitchens to expansive island layouts, we design and install your dream kitchen with zero compromise.",
    features: [
      { title: "Marine Grade Plywood", desc: "BWP grade plywood cabinets ensure zero swelling or warping even in high-moisture kitchen environments" },
      { title: "Soft-Close Mechanisms", desc: "Premium branded Hettich/Hafele hinges and drawer channels for smooth, silent operation" },
      { title: "500+ Design Options", desc: "Choose from an extensive library of laminate textures, colors, and handle styles" },
      { title: "Modular Flexibility", desc: "Perfectly engineered modules that maximize every inch of your kitchen space" }
    ],
    process: [
      { step: "01", title: "Design & 3D Preview", desc: "Our designers create a photorealistic 3D render of your kitchen for approval" },
      { step: "02", title: "Material Selection", desc: "Choose laminates, countertop materials, sinks, faucets, and hardware at our showroom" },
      { step: "03", title: "Factory Production", desc: "CNC precision-manufactured modules ensuring perfect dimensions and square cuts" },
      { step: "04", title: "Professional Installation", desc: "Our certified installation team fits and finishes your kitchen in 3-5 days" }
    ],
    gallery: ["/images/gallery-2.png", "/images/gallery-1.png", "/images/gallery-4.png", "/images/gallery-6.png"],
    benefits: ["3D Design Preview", "10-Year Warranty", "Top Brand Hardware", "Expert Installation"],
    priceRange: "₹1,50,000 – ₹8,00,000 complete",
    color: "#b45309"
  },
  {
    key: "bedroom-interiors",
    title: "Bed Room Interiors",
    tagline: "Your personal sanctuary, perfectly designed",
    heroImage: "/images/gallery-3.png",
    description: "Luxury bedroom interior solutions — from floor-to-ceiling wardrobes to elegant headboards and study units. Your perfect sanctuary awaits.",
    longDescription: "At New Plywoods and Board Center, we create bedroom interiors that are the perfect reflection of your personality and lifestyle. Our bedroom solutions include custom-designed wardrobes, bed platforms, dresser units, study tables, and wall paneling — all crafted from premium plywood and finished with the finest laminates or veneers. We understand that your bedroom is your most personal space, so we give special attention to every detail — from the drawer profiles to the lighting integration — ensuring every morning feels like waking up in a luxury hotel.",
    features: [
      { title: "Floor-to-Ceiling Wardrobes", desc: "Maximizing every inch of vertical space with perfectly organized interior layouts" },
      { title: "Integrated LED Lighting", desc: "Built-in lighting inside wardrobes and along floor panels for a premium hotel feel" },
      { title: "Luxury Veneers & Laminates", desc: "Choose from natural wood veneers or 500+ laminates for your perfect aesthetic" },
      { title: "Smart Storage Design", desc: "Every drawer, shelf, and hanging space designed by our ergonomics experts" }
    ],
    process: [
      { step: "01", title: "Space Analysis", desc: "Our designer visits to analyze your room dimensions, natural light, and lifestyle needs" },
      { step: "02", title: "3D Visualization", desc: "Complete 3D render of your bedroom layout for your review and approval" },
      { step: "03", title: "Precision Manufacturing", desc: "CNC-manufactured furniture panels with perfect edge banding and finishing" },
      { step: "04", title: "Installation & Styling", desc: "Professional installation with final polish and styling tips from our designer" }
    ],
    gallery: ["/images/gallery-3.png", "/images/gallery-1.png", "/images/gallery-5.png", "/images/gallery-4.png"],
    benefits: ["Custom Layout Design", "Premium Materials", "Integrated Lighting", "Lifetime Support"],
    priceRange: "₹80,000 – ₹5,00,000 complete",
    color: "#1d4ed8"
  },
  {
    key: "livingroom-interiors",
    title: "Living Room Interiors",
    tagline: "Design the room where memories are made",
    heroImage: "/images/gallery-1.png",
    description: "Transform your living room into a stunning showcase of design. Feature walls, TV units, partition panels, and entertainment units that define your living style.",
    longDescription: "Your living room is the first impression of your home, and at New Plywoods and Board Center, we design living spaces that make powerful statements. Our living room interior solutions include custom TV units, feature walls with 3D paneling, partition screens, display shelving units, and false ceiling frameworks — all crafted with premium plywood, MDF, and finished with exquisite laminates or natural veneers. Our designers blend your personal style with the latest interior trends to create a living room that's uniquely yours — sophisticated, warm, and utterly inviting.",
    features: [
      { title: "Statement Feature Walls", desc: "3D textured panels and veneer feature walls that become the focal point of your living room" },
      { title: "Custom TV & Media Units", desc: "Purpose-designed entertainment units with hidden cable management and optimized viewing angles" },
      { title: "Decorative Partitions", desc: "Elegant partition screens that define spaces while keeping rooms open and airy" },
      { title: "Premium Display Shelving", desc: "Floating shelves and display niches designed for your art, books, and collectibles" }
    ],
    process: [
      { step: "01", title: "Style Consultation", desc: "Our interior designer understands your aesthetic preferences and lifestyle requirements" },
      { step: "02", title: "Concept Design", desc: "Multiple design concepts presented with material samples, colors, and mood boards" },
      { step: "03", title: "Manufacture", desc: "High-precision manufacturing with quality checks at every stage of production" },
      { step: "04", title: "Transform", desc: "Professional installation transforms your living space in just 5-7 days" }
    ],
    gallery: ["/images/gallery-1.png", "/images/gallery-6.png", "/images/gallery-2.png", "/images/gallery-3.png"],
    benefits: ["Award-Winning Design", "Premium Finishes", "On-Time Delivery", "Post-Install Support"],
    priceRange: "₹60,000 – ₹4,00,000 complete",
    color: "#b45309"
  },
  {
    key: "kids-section",
    title: "Kids Section",
    tagline: "Safe spaces where imagination runs wild",
    heroImage: "/images/gallery-4.png",
    description: "Magical, safe, and stimulating furniture and room designs for your little ones. Beds, study stations, play areas — designed with love and child safety as priority.",
    longDescription: "Children deserve spaces that inspire, protect, and grow with them. At New Plywoods and Board Center, our Kids Section specializes in creating magical, safe, and practical furniture and room solutions for your little champions. Every product is crafted from non-toxic, child-safe materials with smooth edges, sturdy construction, and vibrant designs that spark imagination. From themed beds and study stations to compact storage solutions and play areas — we build furniture that your children will love today and cherish as memories tomorrow.",
    features: [
      { title: "Non-Toxic, Child-Safe Materials", desc: "Zero VOC paints and laminates certified safe for children — peace of mind guaranteed" },
      { title: "Rounded Edges Throughout", desc: "Every corner is carefully rounded and smoothed to eliminate any injury risk" },
      { title: "Growing Furniture Designs", desc: "Adjustable study tables and convertible beds that adapt as your child grows" },
      { title: "Fun Themes Available", desc: "Forest, Ocean, Space, Princess, Sports — custom themes that ignite imagination" }
    ],
    process: [
      { step: "01", title: "Dream Planning", desc: "We sit with parents AND children to understand the dream room they want to create" },
      { step: "02", title: "Safe Design", desc: "Our child-safety experts review every design element for potential hazards" },
      { step: "03", title: "Cheerful Production", desc: "Vibrant, child-safe laminates and non-toxic finishes applied with care" },
      { step: "04", title: "Safe Installation", desc: "Child-safe installation with anti-tip anchoring and edge protection on all pieces" }
    ],
    gallery: ["/images/gallery-4.png", "/images/gallery-1.png", "/images/gallery-3.png", "/images/gallery-2.png"],
    benefits: ["Child Safety Certified", "Non-Toxic Materials", "Custom Themes", "10-Year Durability"],
    priceRange: "₹40,000 – ₹2,50,000 complete",
    color: "#7c3aed"
  },
  {
    key: "veneer-door",
    title: "Veneer Door",
    tagline: "The luxury of real wood, refined to perfection",
    heroImage: "/images/veneer.png",
    description: "Exquisite veneer doors that bring the natural beauty of real wood grain to your home. Luxury aesthetics with the engineering excellence of modern door manufacturing.",
    longDescription: "Veneer doors represent the pinnacle of residential door craftsmanship. At New Plywoods and Board Center, our veneer doors combine the natural beauty of real wood grain with the structural reliability of engineered solid core construction. Each door features a premium plywood or solid wood core wrapped in responsibly-sourced natural veneers — Teak, Walnut, Oak, Wenge, or custom species. The result is a door of extraordinary beauty that showcases the unique grain patterns of real wood while offering superior stability and value over solid wood.",
    features: [
      { title: "Real Wood Veneers", desc: "Authentic natural wood veneers — Teak, Walnut, Oak, Wenge — each with unique grain patterns" },
      { title: "Engineered Solid Core", desc: "HDF or solid timber core provides superior weight, sound insulation, and screw-holding strength" },
      { title: "Zero Warping Guarantee", desc: "Cross-grain veneer application on engineered core eliminates all risk of warping or twisting" },
      { title: "Finishing Excellence", desc: "Multiple coats of premium lacquer or natural oil finish for a tactile luxury surface" }
    ],
    process: [
      { step: "01", title: "Veneer Selection", desc: "Browse our premium veneer library — choose your wood species, grain direction, and figure" },
      { step: "02", title: "Core Engineering", desc: "Solid or HDF core manufactured to exact specifications for your door opening" },
      { step: "03", title: "Veneer Application", desc: "Skilled craftsmen apply veneers with hot-press bonding for perfect adhesion and grain matching" },
      { step: "04", title: "Master Finishing", desc: "5-coat lacquer or oil finish process creates a surface of extraordinary depth and beauty" }
    ],
    gallery: ["/images/veneer.png", "/images/gallery-5.png", "/images/gallery-3.png", "/images/gallery-6.png"],
    benefits: ["Natural Wood Grain", "Zero Warping", "Premium Lacquer Finish", "Bespoke Designs"],
    priceRange: "₹18,000 – ₹95,000 per door",
    color: "#92400e"
  }
];
