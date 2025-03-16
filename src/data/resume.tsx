import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ali Kaya",
  initials: "AK",
  url: "https://bandiggo.github.io/",
  location: "Waterloo, ON",
  locationLink: "",
  description:
    "VR/AR Developer | Computer Programming and Analysis Student",
  summary:
    "Throughout my experience in the tech industry, I've developed proficiency in JavaScript, C#, Python, and Java. My knowledge of the ASP.NET framework has enabled me to contribute to various projects and deliver meaningful results.",
  avatarUrl: "/me.png",
  skills: [
    "C#",
    "Unity",
    "ASP.NET",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Docker",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Bandiggo",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/g1akaya/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "VARLab",
      href: "https://www.linkedin.com/company/varlab-virtual-and-augmented-reality-lab/posts/?feedView=all",
      badges: [],
      location: "Waterloo, ON",
      title: "VR/AR Software Developer",
      logoUrl: "/conestoga.svg",
      start: "Sep 2023",
      end: "Dec 2024",
      description:
        "Developed ”Procedural World Generation” in C#/Unity, an automated tool that generates wall studs according to Ontario building code requirements, streamlining what was previously a manual process for asset designers.  Worked on cloud save functionality for ”CORE”, the company’s internal library with Unity function presets, while leading the team for this feature.",
    },
    {
      company: "Turkcell",
      badges: [],
      href: "https://www.linkedin.com/company/turkcell/posts/?feedView=all",
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/turkcell.png",
      start: "Jun 2023",
      end: "Aug 2023",
      description:
        "Implemented Python-based time series forecasting to predict network call volumes from a 43GB dataset, achieving 82% prediction accuracy through data preprocessing, feature engineering, and linear regression modeling, reducing network planning time by 35% for telecommunications infrastructure.",
    },
    {
      company: "Turkcell",
      href: "https://www.linkedin.com/company/turkcell/posts/?feedView=all",
      badges: [],
      location: "Santa Clara, CA",
      title: "Network Analytics Intern",
      logoUrl: "/turkcell.png",
      start: "Jun 2022",
      end: "Aug 2022",
      description:
        "Developed anomaly detection techniques using the isolation forest algorithm in Python to identify irregularities in network data, achieving 91% detection accuracy while reducing false positives by 47% and improving overall network reliability monitoring.",
    },
  ],
  education: [
    {
      school: "Conestoga College",
      href: "https://www.conestogac.on.ca/fulltime/computer-programming-and-analysis",
      degree: "Advanced Diploma",
      logoUrl: "/conestoga.svg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Trades Electrical",
      href: "#",
      dates: "January 2024 - August 2024",
      active: true,
      description:
        "An educational project designed to teach electrical students about electricity layout within an unfinished house setting.",
      technologies: [
        "Unity",
        "C#",
        "Figma",
        "Jira",
      ],
      links: [
      ],
      image: "/TE.jpeg",
      video:
        "",
    },
    {
      title: "Procedural Wall Generation",
      href: "https://magicui.design",
      dates: "September 2023 - June 2024",
      active: true,
      description:
        "An automated tool that generates wall studs according to Ontario building code requirements, streamlining what was previously a manual process for asset designers.",
      technologies: [
        "Unity",
        "C#",
        "Figma",
        "Jira",
      ],
      links: [
      ],
      image: "/pwg.gif",
      video: "",
    },
    {
      title: "Spotify to YouTube Playlist Convert",
      href: "https://llm.report",
      dates: "March 2025",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "REST API",
        "Python"
      ],
      links: [
      ],
      image: "/s2ytm.gif",
      video: "",
    },
  ],
} as const;
