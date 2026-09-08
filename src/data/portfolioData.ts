import { Network, Server, MonitorSmartphone, Wrench, Headset, Users, Shield } from 'lucide-react';

export const personalInfo = {
  name: "NON HORT",
  role: "IT Support Specialist & Network Administrator",
  current: "Student at Royal University of Phnom Penh",
  location: "Phnom Penh, Cambodia",
  focus: "IT Support, Network Administration, Cybersecurity, AI & Deepfake Defense",
  email: "hortnon828@gmail.com",
  phone: "0972 380 872",
  telegram: "t.me/NonHort_828",
  credly: "https://credly.com/users/non-hort",
  address: "#32, St. 1920, Sen Sok, Phnom Penh Thmey, Phnom Penh, Cambodia",
  intro: "I am a highly motivated IT enthusiast and university student with hands-on training in networking, system administration, hardware troubleshooting, cybersecurity fundamentals, and AI deepfake defense. I am passionate about providing structured, customer-focused IT support and applying my Cisco-certified networking knowledge to ensure smooth and secure IT operations."
};

export const services = [
  "IT Support & Helpdesk",
  "Network Administration & Troubleshooting",
  "Hardware Installation & Configuration",
  "Cybersecurity Fundamentals & Deepfake Awareness",
  "Remote Support & Technical Documentation",
  "Customer-Focused Technical Communication"
];

export const skills = [
  {
    category: "Networking",
    icon: Network,
    items: [
      "CCNA Fundamentals",
      "Routing & Switching",
      "Wireless Connections",
      "Network Troubleshooting"
    ]
  },
  {
    category: "Operating Systems",
    icon: MonitorSmartphone,
    items: [
      "Windows (Troubleshooting & Config)",
      "macOS",
      "Mobile Operating Systems"
    ]
  },
  {
    category: "Hardware & Support",
    icon: Wrench,
    items: [
      "Hardware Installation & Upgrades",
      "Peripheral Connectivity",
      "Remote Access Tools",
      "Technical Documentation"
    ]
  },
  {
    category: "Cybersecurity & AI",
    icon: Shield,
    items: [
      "Cybersecurity Fundamentals",
      "Ethical Hacking (Kali Linux)",
      "API & Network Security",
      "AI & Deepfake Awareness / Defense"
    ]
  },
  {
    category: "Soft Skills",
    icon: Users,
    items: [
      "Structured Problem-Solving",
      "Customer-Focused Support",
      "Clear Technical Communication",
      "Patience & Active Listening"
    ]
  }
];

import certCcna from '../assets/cert-ccna2.jpg';
import certItSupport from '../assets/cert-it-support.jpg';
import certJuniorCyber from '../assets/cert-junior-cyber.jpg';
import certEthicalHacker from '../assets/cert-ethical-hacker.jpg';
import certCasa from '../assets/cert-casa.jpg';
import certEtecCyber from '../assets/cert-etec-cyber.jpg';
import certTcmLinux from '../assets/cert-tcm-linux.png';
import certCcep from '../assets/cert-ccep.jpg';
import certDeepfakes from '../assets/cert-deepfakes.jpg';
import certCpp from '../assets/cert-cpp.jpg';
import certNetworking from '../assets/cert-networking.jpg';
import certCcnaIntro from '../assets/cert-ccna-intro.png';
import certGoogleCyber from '../assets/cert-google-cyber.png';
import certKali from '../assets/cert-kali.jpg';

export const certifications = [
  {
    id: 1,
    name: "CCNA: Introduction to Networks",
    authority: "Cisco Networking Academy (Royal University of Phnom Penh)",
    date: "06 Sep 2026",
    icon: Network,
    verifyLink: "https://my-porflio-kappa.vercel.app/#",
    image: certCcnaIntro
  },
  {
    id: 2,
    name: "Foundations of Cybersecurity",
    authority: "Google (Coursera)",
    date: "06 Sep 2026",
    icon: Shield,
    verifyLink: "https://coursera.org/verify/H7MB9LJY851B",
    image: certGoogleCyber
  },
  {
    id: 3,
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    authority: "Cisco Networking Academy (Dragon ICT Academy)",
    date: "12 Jul 2026",
    icon: Server,
    verifyLink: "https://my-porflio-kappa.vercel.app/#",
    image: certCcna
  },
  {
    id: 4,
    name: "Certified API Security Analyst (CASA)",
    authority: "APISEC University",
    date: "12 May 2026",
    icon: Shield,
    verifyLink: "https://my-porflio-kappa.vercel.app/#",
    image: certCasa
  },
  {
    id: 5,
    name: "Certified Cybersecurity Educator Professional (CCEP)",
    authority: "Red Team Leaders",
    date: "15 Apr 2026",
    icon: Shield,
    verifyLink: "https://my-porflio-kappa.vercel.app/#",
    image: certCcep
  },
  {
    id: 6,
    name: "Junior Cybersecurity Analyst Career Path Exam",
    authority: "Cisco Networking Academy",
    date: "11 Apr 2026",
    icon: Shield,
    verifyLink: "https://my-porflio-kappa.vercel.app/#",
    image: certJuniorCyber
  },
  {
    id: 7,
    name: "IT Support Essentials",
    authority: "Cisco Networking Academy (Dragon ICT Academy)",
    date: "10 Apr 2026",
    icon: Headset,
    verifyLink: "https://my-porflio-kappa.vercel.app/#",
    image: certItSupport
  },
  {
    id: 8,
    name: "Ethical Hacker",
    authority: "Cisco Networking Academy",
    date: "28 Mar 2026",
    icon: Shield,
    verifyLink: "https://my-porflio-kappa.vercel.app/#",
    image: certEthicalHacker
  },
  {
    id: 9,
    name: "Linux 100: Fundamentals",
    authority: "TCM Security",
    date: "21 Mar 2026",
    icon: Server,
    verifyLink: "https://my-porflio-kappa.vercel.app/#",
    image: certTcmLinux
  },
  {
    id: 10,
    name: "Basic Cyber Security & Configuration",
    authority: "ETEC Center",
    date: "15 Mar 2026",
    icon: Shield,
    verifyLink: "https://my-porflio-kappa.vercel.app/#",
    image: certEtecCyber
  },
  {
    id: 11,
    name: "Fighting Deepfakes in the Age of AI",
    authority: "Sunrise Institute",
    date: "06 Mar 2026",
    icon: Shield,
    verifyLink: "https://my-porflio-kappa.vercel.app/#",
    image: certDeepfakes
  },
  {
    id: 12,
    name: "Ethical Hacking Using Kali Linux",
    authority: "Udemy",
    date: "16 Feb 2026",
    icon: Shield,
    verifyLink: "https://my-porflio-kappa.vercel.app/#",
    image: certKali
  },
  {
    id: 13,
    name: "Basic Computer / Networking & Installation",
    authority: "ETEC Center",
    date: "15 Jul 2025",
    icon: Network,
    verifyLink: "https://my-porflio-kappa.vercel.app/#",
    image: certNetworking
  },
  {
    id: 14,
    name: "Basic / Advance C++ / OOP / Algorithm & Project Courses",
    authority: "ETEC Center",
    date: "15 Jun 2025",
    icon: Server,
    verifyLink: "https://my-porflio-kappa.vercel.app/#",
    image: certCpp
  }
];

export const experience = [
  {
    id: 1,
    company: "ETEC Center",
    role: "C++ Programming and Network Basics Course",
    period: "2025–2026",
    description: "Completed training in programming fundamentals and networking concepts."
  },
  {
    id: 2,
    company: "Student Support Experience",
    role: "Support & Mentorship",
    period: "Ongoing",
    description: "Guided and supported students with clear communication and patience. Maintained engagement and provided step-by-step assistance, highly applicable to IT Helpdesk support roles."
  }
];

export const education = [
  {
    id: 1,
    institution: "Royal University of Phnom Penh (RUPP)",
    faculty: "Faculty of Pedagogy",
    status: "Current Student (Year 3)",
    period: "2024–Present"
  },
  {
    id: 2,
    institution: "Hun Sen Sandann High School",
    faculty: "High School Diploma",
    status: "Passed National Baccalaureate (Bac II) Examination",
    period: "2021–2024"
  }
];
