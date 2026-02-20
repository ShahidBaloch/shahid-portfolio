export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
};

export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Systems Limited",
    period: "Dec 2024 – Present",
    location: "Lahore, Pakistan",
    description: [
      "Worked in Product Engineering team on cloud-based platform using .NET and Angular stack.",
      "Translated business requirements into scalable, maintainable code.",
      "Used Azure Storage Explorer for Blob, Tables, and Queues.",
      "Designed and optimized NoSQL databases using Azure Cosmos DB.",
      "Developed solutions to parse and convert EDI files into human-readable formats.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Universal Digital Health Care",
    period: "May 2022 – Nov 2024",
    location: "Lahore, Pakistan",
    description: [
      "Developed .NET Core APIs and Angular front-end applications.",
      "Contributed to Provider Registration and Fee Schedule modules.",
      "Improved healthcare SaaS onboarding functionality hosted on AWS.",
      "Collaborated with cross-functional teams for seamless integration.",
    ],
  },
  {
    role: "Junior .NET Developer",
    company: "Arwa Technologies",
    period: "May 2021 – April 2022",
    location: "Lahore, Pakistan",
    description: [
      "Worked primarily on eCommerce web applications.",
      "Delivered enhancements and participated in testing and code reviews.",
      "Gained strong foundation in full-stack development.",
    ],
  },
];