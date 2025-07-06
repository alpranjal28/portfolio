export const skills = [
  {
    title: "TypeScript",
    type: "language",
  },
  {
    title: "JavaScript",
    type: "language",
  },
  {
    title: "HTML",
    type: "language",
  },
  {
    title: "CSS",
    type: "language",
  },
  {
    title: "Docker",
    type: "containerization",
  },
  {
    title: "React",
    type: "framework",
  },
  {
    title: "Shadcn",
    type: "framework",
  },
  {
    title: "NextJS",
    type: "framework",
  },
  {
    title: "Express",
    type: "framework",
  },
  {
    title: "Node.js",
    type: "Runtime",
  },
  {
    title: "Bun",
    type: "Runtime",
  },
  {
    title: "Tailwind",
    type: "framework",
  },
  {
    title: "WebSocket",
    type: "real-time communication",
  },
  {
    title: "AWS S3",
    type: "tools",
  },
  {
    title: "AWS EC2",
    type: "tools",
  },
  {
    title: "AWS RDS",
    type: "tools",
  },
  {
    title: "Appwrite",
    type: "tools",
  },
  {
    title: "Cloudinary",
    type: "tools",
  },
  {
    title: "PostgreSQL",
    type: "database",
  },
  {
    title: "MongoDB",
    type: "database",
  },
  {
    title: "MySQL",
    type: "database",
  },
  {
    title: "Prisma ORM",
    type: "database",
  },
  {
    title: "BootStrap",
    type: "library",
  },
  {
    title: "Framer-Motion",
    type: "library",
  },
  {
    title: "Material-UI",
    type: "library",
  },
  {
    title: "Radix-UI",
    type: "library",
  },
  {
    title: "Git",
    type: "other",
  },
  {
    title: "GitHub",
    type: "other",
  },
  {
    title: "twilio",
    type: "other",
  },
  {
    title: "Linux",
    type: "other",
  },
  {
    title: "TurboRepo",
    type: "other",
  },
];

export const socials = [
  {
    title: "GitHub",
    url: "https://github.com/alpranjal28",
    alt: "github",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/pranjal-altherius-lakra/",
    alt: "linkedin",
  },
  {
    title: "Email",
    url: "https://mail.google.com/mail/u/0/?fs=1&to=alpranjal28@gmail.com&tf=cm",
    alt: "email",
  },
];

// Define the type for a portfolio item
export interface PortfolioItem {
  color: string;
  title: string;
  desc: string;
  img: string;
  link: string;
}

export const projects: PortfolioItem[] = [
  {
    color: "from-blue-300 to-violet-300",
    title: "Draw.app",
    desc: "This project is a collaborative MS Paint clone built with a Turbo monorepo. It features a Next.js frontend, Express and WebSocket backends, and a PostgreSQL database managed via Prisma ORM. Real-time drawing sync is achieved using WebSockets, with scalable, modular code structure.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1751719298/projects/Screenshot_2025-07-05_181119_s60woh.png",
    link: "https://portfolio-refresh-five.vercel.app/",
  },
  {
    color: "from-violet-300 to-purple-300",
    title: "Portfolio 2",
    desc: "This portfolio uses Next.js, React, and TypeScript for a performant, SEO-friendly SPA. Tailwind CSS powers the responsive UI. Features include animated components (Framer Motion), a 3D globe (Three.js), parallax effects, and Sentry integration for error monitoring.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1751717662/projects/Screenshot_2025-07-05_174402_vvxndk.png",
    link: "https://portfolio-refresh-five.vercel.app/",
  },
  {
    color: "from-purple-300 to-red-300",
    title: "Multistep Form",
    desc: "A modern React/Next.js application featuring a centered, card-style form UI built with Tailwind CSS. The project uses modular components for maintainability and Lucide icons for visual clarity. The main page displays a shadowed, rounded form container with a close icon and integrates custom form logic, providing a clean, interactive user experience.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1751716050/projects/Screenshot_2025-07-05_171620_igtasa.png",
    link: "https://nablasol-xi.vercel.app/",
  },
  {
    color: "from-red-300 to-blue-300",
    title: "Airbnb clone",
    desc: "Engineered a feature-rich Airbnb clone, leveraging HTML, CSS, JavaScript, MongoDB, Node.js, and Express with MVC architecture, showcasing adeptness in full-stack development, database integration, and system design.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1714991378/projects/airlust_new_p2idmx.png",
    link: "https://airlust-project.onrender.com/listings",
  },
  {
    color: "from-blue-300 to-violet-300",
    title: "Food App",
    desc: "Built a dynamic food ordering application with Next.js, MongoDB, Tailwind CSS, Amazon S3, and Google Authentication. Features include user authentication, menu browsing, cart management, and order processing. Demonstrated proficiency in full-stack development, RESTful API integration, and deployment.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1714972797/projects/food-app_fydlxj.png",
    link: "https://food-app-sable.vercel.app/",
  },
  {
    color: "from-violet-300 to-purple-300",
    title: "Car Showcase",
    desc: "Developed a comprehensive car deals website using Next.js, Tailwind CSS, and various APIs. The site features real-time data updates and a responsive design, providing an optimal user experience for browsing and managing car listings.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1719927625/projects/car-deals.png",
    link: "https://car-deals-ruddy.vercel.app/",
  },
  {
    color: "from-purple-300 to-red-300",
    title: "Spotify Clone",
    desc: "Developed my first project—a Spotify-inspired clone—using raw HTML and CSS. Designed and implemented user interface components from scratch, demonstrating foundational skills in front-end web development and design.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1714991241/projects/spotifyclone_ujkoky.png",
    link: "https://alpranjal28.github.io/spotify-clone/",
  },
];
