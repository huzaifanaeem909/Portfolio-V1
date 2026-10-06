export const siteConfig = {
  name: "Huzaifa Naeem",
  title: "Full Stack Developer",
  tagline: "MERN · AWS Serverless · Blockchain",
  headline:
    "Web applications, cloud infrastructure, REST APIs, and blockchain integrations in production.",
  description:
    "Huzaifa Naeem is a Full Stack Developer in Lahore building MERN, Next.js, AWS serverless, REST APIs, and blockchain apps for startups and product teams worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://huzaifanaeem-fawn.vercel.app",
  email: "dev.huzaifa.naeem@gmail.com",
  phone: "+92 316 0406057",
  location: "Lahore, Pakistan",
  education: "B.S. Computer Science, University of Lahore (2019-2023)",
  initials: "HN",
  available: true,
  social: {
    github: "https://github.com/huzaifanaeem909",
    linkedin: "https://www.linkedin.com/in/huzaifa-naeem/",
    linkedinProfile: "https://www.linkedin.com/in/huzaifa-naeem/",
    email: "mailto:dev.huzaifa.naeem@gmail.com",
  },
  resumeUrl: "/api/resume/download",
  githubUsername: "huzaifanaeem909",
  specialties: [
    "Full Stack Development",
    "MERN Stack",
    "Next.js",
    "AWS Serverless",
    "REST API Development",
    "Blockchain / Web3",
    "MongoDB & PostgreSQL",
  ],
} as const

export const engineeringMetrics = [
  { label: "REST APIs built", value: "15+" },
  { label: "Blocks indexed (Verana)", value: "10,000+" },
  { label: "Fewer production defects", value: "40%" },
  { label: "SKUs automated (Senzi)", value: "5,000+" },
] as const

export const navItems = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Work", href: "/#projects", id: "projects" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Blog", href: "/blog", id: "blog" },
  { label: "Products", href: "/products", id: "products" },
  { label: "AI", href: "/#intelligence", id: "intelligence" },
  { label: "Contact", href: "/#contact", id: "contact" },
] as const

export type NavItem = (typeof navItems)[number]
