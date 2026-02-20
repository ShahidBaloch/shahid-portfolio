import { projects } from "@/data/projects";

export default function PortfolioSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div>
        <p className="text-sm text-gray-400">Portfolio</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Recent Work</h2>
        <p className="mt-3 max-w-2xl text-gray-400">
          A mix of personal projects and professional work highlights.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            {/* Top row: title + badge */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold">{p.title}</h3>

              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs border ${
                  p.type === "personal"
                    ? "border-blue-500/30 bg-blue-500/10 text-blue-300"
                    : "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                }`}
              >
                {p.type === "personal" ? "Personal" : "Company"}
              </span>
            </div>

            <p className="mt-3 text-gray-400 leading-relaxed">{p.description}</p>

            {/* tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* highlights */}
            {p.highlights?.length ? (
              <ul className="mt-5 list-disc pl-5 text-sm text-gray-300 space-y-2">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}

            {/* buttons */}
            {p.type === "personal" && (p.github || p.live) ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    className="rounded-lg border border-white/15 px-4 py-2 text-sm text-gray-200 hover:bg-white/5 transition"
                  >
                    GitHub
                  </a>
                ) : null}

                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            ) : (
              <div className="mt-6 text-sm text-gray-400">
                (Professional work — code is private)
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}