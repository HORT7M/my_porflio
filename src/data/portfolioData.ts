import { Network, Server, MonitorSmartphone, Wrench, HardDrive, Headset, Users, Shield } from 'lucide-react';

export const personalInfo = {
  name: "NON HORT",
  role: "IT Support Specialist",
  current: "Student at Royal University of Phnom Penh",
  location: "Phnom Penh, Cambodia",
  focus: "IT Support, Networking, Cybersecurity",
  email: "hortnon828@gmail.com",
  phone: "0972 380 872",
  telegram: "t.me/NonHort_828",
  credly: "https://credly.com/users/non-hort",
  address: "#32, St. 1920, Sen Sok, Phnom Penh Thmey, Phnom Penh, Cambodia",
  intro: "I am a highly motivated IT enthusiast and university student with hands-on training in networking, hardware troubleshooting, and cybersecurity fundamentals. I am passionate about providing structured, customer-focused IT support and applying my Cisco-certified networking knowledge to help organizations maintain smooth IT operations."
};

export const services = [
  "IT Support & Helpdesk",
  "Network Troubleshooting",
  "Hardware Installation & Configuration",
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

export const certifications = [
  {
    id: 1,
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    authority: "Cisco Networking Academy (Dragon ICT Academy)",
    date: "July 2026",
    icon: Server,
    verifyLink: "https://my-porflio-kappa.vercel.app/#"
  },
  {
    id: 2,
    name: "Junior Cybersecurity Analyst Career Path Exam",
    authority: "Cisco Networking Academy",
    date: "April 2026",
    icon: Shield,
    verifyLink: "https://my-porflio-kappa.vercel.app/#"
  },
  {
    id: 3,
    name: "Ethical Hacker",
    authority: "Cisco Networking Academy",
    date: "March 2026",
    icon: Shield,
    verifyLink: "https://my-porflio-kappa.vercel.app/#"
  },
  {
    id: 4,
    name: "Introduction to Cybersecurity",
    authority: "Cisco Networking Academy",
    date: "March 2026",
    icon: Shield,
    verifyLink: "https://my-porflio-kappa.vercel.app/#"
  },
  {
    id: 5,
    name: "Basic Computer / Networking & Installation",
    authority: "ETEC Center, Cambodia",
    date: "July 2025",
    icon: HardDrive,
    verifyLink: "https://my-porflio-kappa.vercel.app/#"
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
