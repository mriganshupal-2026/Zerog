import {
  AirVent,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Camera,
  Fan,
  Filter,
  Gauge,
  Headphones,
  Leaf,
  MessageCircle,
  PhoneCall,
  Share2,
  ShieldCheck,
  Sparkles,
  ThermometerSun,
  TimerReset,
  Wrench,
  Zap,
} from "lucide-react";

export const imageSet = {
  hero:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=82",
  equipment:
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=82",
  purifier:
    "/ZeroG-collage-v003.jpg",
  lifestyle:
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=2200&q=82",
  commercial:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=82",
};

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Why Zero G", href: "#features" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
];

export const heroFeatures = [
  { label: "Zero Gravity Floating", icon: Zap },
  { label: "Unrivalled Dirt Extraction", icon: Leaf },
  { label: "Edge-to-Edge Cleaning", icon: TimerReset },
  { label: "Less Than Premium Competitors", icon: ShieldCheck },
];

export const services = [
  {
    title: "HVAC Installation",
    description:
      "High-efficiency system design and installation for precise comfort in every room.",
    image:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1200&q=82",
    icon: AirVent,
  },
  {
    title: "HVAC Repair",
    description:
      "Responsive diagnostics, clean repairs, and reliable service when comfort cannot wait.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=82",
    icon: Wrench,
  },
  {
    title: "Air Quality Solutions",
    description:
      "Whole-home filtration, purification, humidity balance, and healthier indoor air.",
    image:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=1200&q=82",
    icon: Sparkles,
  },
];

export const features = [
  {
    title: "Smart Climate Control",
    description: "Advanced thermostat integration.",
    icon: ThermometerSun,
  },
  {
    title: "Energy Savings",
    description: "Reduce utility costs.",
    icon: Gauge,
  },
  {
    title: "Air Filtration",
    description: "Improve indoor air quality.",
    icon: Filter,
  },
  {
    title: "Preventive Maintenance",
    description: "Extend equipment lifespan.",
    icon: CalendarCheck,
  },
  {
    title: "Emergency Support",
    description: "Fast response when needed.",
    icon: Headphones,
  },
  {
    title: "Commercial Expertise",
    description: "Solutions for businesses.",
    icon: Building2,
  },
];

export const benefits = [
  "Quiet, consistent airflow engineered around your space.",
  "Cleaner indoor air with modern filtration and purification options.",
  "Maintenance plans that protect performance before problems appear.",
  "Commercial support for offices, retail, hospitality, and light industrial sites.",
];

export const testimonials = [
  {
    name: "Maya R.",
    review:
      "Zero G replaced our aging system with a clean, efficient setup. The house feels quieter and the air feels fresher.",
  },
  {
    name: "Daniel K.",
    review:
      "Fast diagnosis, clear communication, and a repair that held up through peak summer heat.",
  },
  {
    name: "Priya S.",
    review:
      "Their indoor air quality recommendations made a noticeable difference for our family within days.",
  },
  {
    name: "Jordan M.",
    review:
      "Professional crew, beautiful installation, and no mess left behind. Premium service from start to finish.",
  },
  {
    name: "Elena V.",
    review:
      "We use Zero G for our maintenance plan and every visit is punctual, thorough, and easy.",
  },
  {
    name: "Chris A.",
    review:
      "They handled our commercial rooftop system with confidence and kept our business running.",
  },
];

export const projectGallery = [
  {
    title: "Residential Installations",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Commercial Projects",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Air Purification Systems",
    image:
      "https://images.unsplash.com/photo-1637611331620-51149c7ceb94?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Maintenance Plans",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "System Upgrades",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=82",
  },
];

export const socialImages = [
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: MessageCircle },
  { label: "Instagram", href: "https://www.instagram.com/", icon: Camera },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Share2 },
];

export const trustItems = [
  { label: "Clean installs", icon: BadgeCheck },
  { label: "Balanced airflow", icon: Fan },
  { label: "Precision repairs", icon: Wrench },
  { label: "Call scheduling", icon: PhoneCall },
];
