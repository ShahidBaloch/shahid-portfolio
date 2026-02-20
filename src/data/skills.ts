export type SkillCategory = {
  key: string;
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    key: "backend",
    title: "Backend",
    items: [".NET Core", "ASP.NET MVC", "C#", "ADO.NET", "Entity Framework", "LINQ", "REST APIs", "Microservices"],
  },
  {
    key: "frontend",
    title: "Frontend",
    items: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap", "PrimeNG", "AG Grid"],
  },
  {
    key: "database",
    title: "Databases",
    items: ["SQL Server", "Cosmos DB (NoSQL)", "Stored Procedures", "Query Optimization"],
  },
  {
    key: "cloud",
    title: "Cloud & DevOps",
    items: ["Microsoft Azure (Blob/Tables/Queues)", "Azure Storage Explorer", "AWS (SaaS Hosting)", "Git"],
  },
  {
    key: "other",
    title: "Other",
    items: ["Debugging", "Problem-solving", "Agile teamwork", "Code reviews", "Testing & collaboration"],
  },
];