import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import {
    SiFigma,
    SiJavascript,
    SiNextdotjs,
    SiRedux,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";
import { TbBrandSpeedtest } from "react-icons/tb";
import { IJourney, IProject, IService, ISkill } from "./types";



export const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#my-skills" },
    { label: "Journey", href: "#my-journey" },
    { label: "Projects", href: "#my-work" },
    { label: "Contact", href: "#contact" },
];




export const services: IService[] = [
    {
        title: "React & Next.js Development",
        icon: FaReact,
        description:
            "Creating modern web applications with clean architecture, reusable components, and exceptional user experiences.",
    },
    {
        title: "Responsive UI Development",
        icon: SiFigma,
        description:
            "Converting designs into fully responsive interfaces that look and perform perfectly on any screen size.",
    },
    {
        title: "API Integration & Optimization",
        icon: TbBrandSpeedtest,
        description:
            "Integrating APIs, improving application performance, and ensuring smooth, efficient user interactions.",
    },
];


export const skills: ISkill[] = [
    {
        id: 1,
        name: "React.js",
        icon: FaReact,
    },
    {
        id: 2,
        name: "Next.js",
        icon: SiNextdotjs,
    },
    {
        id: 3,
        name: "TypeScript",
        icon: SiTypescript,
    },
    {
        id: 4,
        name: "JavaScript",
        icon: SiJavascript,
    },
    {
        id: 5,
        name: "Tailwind CSS",
        icon: SiTailwindcss,
    },
    {
        id: 6,
        name: "Redux Toolkit",
        icon: SiRedux,
    },
    {
        id: 7,
        name: "HTML5",
        icon: FaHtml5,
    },
    {
        id: 8,
        name: "CSS3",
        icon: FaCss3Alt,
    },
    {
        id: 9,
        name: "Git",
        icon: FaGitAlt,
    },
    {
        id: 10,
        name: "Figma",
        icon: SiFigma,
    },
];


export const journeys: IJourney[] = [
    {
        year: "2022 - 2023",
        title: "Frontend Developer Trainee",
        company: "Google DSC",
        description:
            "Learned HTML, CSS, JavaScript, responsive design, and built multiple frontend projects.",
    },
    {
        year: "2023",
        title: "Python Developer Intern",
        company: "Summer Training",
        description:
            "Developed web applications using Flask and gained backend development experience.",
    },
    {
        year: "2024 - 2025",
        title: "Frontend Developer",
        company: "Brandmarks",
        description:
            "Built responsive web applications, reusable UI components, and integrated REST APIs.",
    }
];



export const projects: IProject[] = [
    {
        id: 1,
        title: "Marketplace",
        category: "React Application",
        image: "/imgs/projects/marketplace.png",
        description:
            "Responsive e-commerce application with product filtering and search.",
        tech: ["React", "Tailwind"],
        github: "https://github.com/islamm771/MarketPlace",
        live: "https://market-placee-one.vercel.app",
    },
    {
        id: 2,
        title: "Pharma Scope",
        category: "Healthcare Platform",
        image: "/imgs/projects/pharma-scope.png",
        description:
            "Pharmaceutical management platform with responsive user interface.",
        tech: ["React", "Tailwind"],
        github: "https://github.com/islamm771/pharma-scope",
        live: "https://pharma-scope.vercel.app",
    },
    {
        id: 7,
        title: "E Learning Platform",
        category: "Education Platform",
        image: "/imgs/projects/e-learning.png",
        description:
            "Developed a fully responsive E-Learning platform using React, Tailwind CSS, and DaisyUI, featuring course discovery, detailed course pages, modern UI components, and an optimized user experience across all devices.",
        tech: ["React", "Tailwind", "DiasyUI"],
        github: "https://github.com/islamm771/E-learning-Platform",
        live: "https://e-learning-platform-nine-psi.vercel.app",
    },
    {
        id: 3,
        title: "Scholar",
        category: "Education Platform",
        image: "/imgs/projects/scholar.jpg",
        description:
            "An academic platform for discovering research papers and educational content through a modern responsive interface.",
        tech: ["React", "Bootstrap"],
        github: "#",
        live: "https://scholar-appp.netlify.app",
    },
    {
        id: 4,
        title: "Space Tourism",
        category: "Frontend Project",
        image: "/imgs/projects/space-tourism.jpg",
        description:
            "Interactive space travel experience with modern responsive design.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/islamm771/space-tourism",
        live: "https://islamm771.github.io/space-tourism",
    },
    {
        id: 5,
        title: "Little Fashion",
        category: "Landing Page",
        image: "/imgs/projects/little-fashion.jpg",
        description:
            "Modern fashion website with product pages and responsive layouts.",
        tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        github: "https://github.com/islamm771/Little-Fashion",
        live: "https://islamm771.github.io/Little-Fashion",
    },
    {
        id: 6,
        title: "Crispy Kitchen",
        category: "Restaurant Website",
        image: "/imgs/projects/crispy-kitchen.jpg",
        description:
            "Restaurant website featuring menus, pricing, and multimedia content.",
        tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        github: "https://github.com/islamm771/crispy-kitchen-responsive",
        live: "https://islamm771.github.io/crispy-kitchen-responsive",
    },
];