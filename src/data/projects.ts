export type Project = {
  title: string;
  description: string;
  tags: string[];
  type: "personal" | "company";
  highlights?: string[];

  // only for personal projects
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  // ✅ Company projects (no github)
  {
    title: "Healthcare Provider Onboarding (SaaS)",
    description:
      "Built onboarding workflows for providers as part of a healthcare SaaS platform, integrating Angular UI with .NET Core APIs.",
    tags: [".NET Core", "Angular", "SQL Server", "AWS"],
    type: "company",
    highlights: [
      "Streamlined provider enrollment workflow",
      "Worked closely with cross-functional teams for integration and delivery",
    ],
  },
  {
    title: "EDI Parser & Human-Readable Converter",
    description:
      "Developed solutions to parse EDI files and convert them into human-readable formats for business teams.",
    tags: [".NET", "Azure Storage", "Cosmos DB", "Data Processing"],
    type: "company",
    highlights: [
      "Used Azure Blob/Tables/Queues for data handling",
      "Optimized NoSQL structures for scalability",
    ],
  },

  // ✅ Personal projects (add your links)
  {
    title: "My Personal Portfolio",
    description:
      "A modern developer portfolio built with Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    type: "personal",
    github: "https://github.com/your-username/your-portfolio",
    live: "https://your-portfolio.vercel.app",
    highlights: [
      "Responsive UI, smooth navigation, clean sections",
      "Deployed on Vercel",
    ],
  },
];