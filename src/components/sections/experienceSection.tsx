import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div>
        <p className="text-sm text-gray-400">Experience</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
          Professional Journey
        </h2>
      </div>

      <div className="mt-12 relative border-l border-white/10 pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-[38px] top-2 h-4 w-4 rounded-full bg-blue-500 shadow-lg" />

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-blue-400 text-sm">
                    {exp.company}
                  </p>
                </div>

                <span className="text-sm text-gray-400">
                  {exp.period}
                </span>
              </div>

              {exp.location && (
                <p className="mt-2 text-sm text-gray-400">
                  {exp.location}
                </p>
              )}

              <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-300 text-sm">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}