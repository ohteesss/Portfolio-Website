import {
  ExperienceType,
  ProjectType,
  SocialLinkType,
  TechnologyIcon,
} from "./app.interface";
import { Github } from "./components/icons/github";
import LinkedIn from "./components/icons/linkedin";

export const technologies: TechnologyIcon[] = [
  {
    src: "svg/kotlin.svg",
    alt: "KOTLIN icon",
    title: "Kotlin",
  },
  {
    src: "svg/jetpack-compose.svg",
    alt: "Jetpack Compose icon",
    title: "Jetpack Compose",
  },
  {
    src: "svg/android-icon.svg",
    alt: "Android icon",
    title: "Android",
  },
  {
    src: "svg/java-icon.svg",
    alt: "Java icon",
    title: "Java",
  },
];

export const experiences: ExperienceType[] = [
  {
    role: "Android Engineer London, UK",
    companyName: "Mindera ",
    duration: "Sept 2023 - present",
    description:
      "Maintained client (YNAP) existing 3 luxury fashion brand apps while collaborating within a team of  android engineers. I used technologies like  Kotlin, Android, XML, Dagger hilt, Coroutine, Git/Github, Firebase, Jira ",
  },
  {
    role: " Mobile Engineer - Android -  Berlin, Germany",
    companyName: "Engie Energy Access",
    duration: "Nov 2021 - Sept 2023 ",
    description:
      "Managed and added new features on Mysolgo and Mysolfix apps used by agent in the field. I used technologies like Kotlin, Coroutine, Koin, Android XML, Jira, Gitlab",
  },
  {
    role: "Android Engineer - Lekki, Lagos",
    companyName: "Access Bank Plc",
    duration: "March 2019 - Oct 2021",
    description:
      "Worked on an agency banking application to onboard new customers. I used technologies like Java, Kotlin, RxJava, Dagger2, Android XML, Jira, Azure",
  },
];

export const projects: ProjectType[] = [
  {
    title: "NET-A-PORTER",
    description:
      "NAP is one of the luxury fashion application flavour targeted toward both gender",
    githubLink: "https://github.com",
    liveLink:
      "https://play.google.com/store/search?q=net-a-porter&c=apps&hl=en_US",
    img: "https://via.placeholder.com/300",
  },
  {
    title: "Mr Porter: MRP",
    description: "Luxury fashion application targeted toward male gender",
    githubLink: "http://github.com/ayodeji97/",
    liveLink: "https://play.google.com/store/apps/details?id=com.mrp",
    img: "https://via.placeholder.com/300",
  },
  {
    title: "MySolgo",
    description:
      "Agency application used by Engie agents to make sales and keep track on customer’s journey.",
    githubLink: "http://github.com/ayodeji97/",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.engie_energyaccess.salesapp&hl=en&gl=US ",
    img: "https://via.placeholder.com/300",
  },
  {
    title: "MySolfix",
    description:
      "Technician application used by Engie technicians to accept product installation and sales completion",
    githubLink: "http://github.com/ayodeji97/",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.engie_energyaccess.technicianapp ",
    img: "https://via.placeholder.com/300",
  },
];

export const socialLinks: SocialLinkType[] = [
  {
    link: "linkedin.com",
    icon: LinkedIn(),
  },
  {
    link: "http://github.com/ayodeji97/",
    icon: Github(),
  },
  // {
  //   link: "",
  //   icon: LinkedIn(),
  // },
];

// ANIMATION CONSTANTS

export const leftVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0 },
};

export const rightVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const TRANSITION = { duration: 1, type: "spleen", ease: "linear" };

export const aboutContainerVariant = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
