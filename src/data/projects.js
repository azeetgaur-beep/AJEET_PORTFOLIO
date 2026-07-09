import { ajxCaseStudy } from './ajx_case_study';
import { connecteCaseStudy } from './connecte_case_study';

export const projects = [
  {
    id: 1,
    title: "AJR Smart Technology",
    year: "2026",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "UI Design"],
    description: "A modern B2B e-commerce platform for industrial sourcing, built with Next.js, featuring a custom neomorphic UI and secure server-side API routes.",
    link: "https://ajrexports-a9myza407-ajrexport.vercel.app/",
    image: "/ajx_dashboard_mockup.webp",
    gallery: [
      "/projects/ajr/1.png", "/projects/ajr/2.png", "/projects/ajr/3.png", "/projects/ajr/4.png",
      "/projects/ajr/5.png", "/projects/ajr/6.png", "/projects/ajr/7.png", "/projects/ajr/8.png"
    ],
    content: ajxCaseStudy
  },
  {
    id: 2,
    title: "ConnectE",
    year: "2024", 
    tags: ["React", "Frontend", "Mentorship"],
    description: "My foundational entry into real-world web development, contributing to a production platform under senior mentorship.",
    link: "https://connecte.in/",
    image: "/projects/connecte/1.png",
    gallery: [
      "/projects/connecte/1.png", "/projects/connecte/2.png", "/projects/connecte/3.png"
    ],
    content: connecteCaseStudy
  }
];
