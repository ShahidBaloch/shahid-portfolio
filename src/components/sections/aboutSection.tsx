"use client";

import { useMemo, useState } from "react";
import { skillCategories } from "@/data/skills";

export default function AboutSection() {
  const [activeKey, setActiveKey] = useState(skillCategories[0]?.key ?? "backend");

  const active = useMemo(
    () => skillCategories.find((c) => c.key === activeKey) ?? skillCategories[0],
    [activeKey]
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Left: About */}
        <div>
          <p className="text-sm text-gray-400">About</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">About Me</h2>

          <p className="mt-5 text-gray-400 leading-relaxed">
            I’m Muhammad Shahid, a results-oriented .NET Full Stack Developer with 4+ years of
            experience designing and developing scalable web applications across healthcare, EDI,
            and enterprise domains.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            I specialize in building reliable backend APIs with .NET Core and crafting responsive
            frontend experiences with Angular. I’m also experienced in SQL Server optimization and
            cloud services like Azure Storage and Cosmos DB.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-gray-400">Current Role</div>
            <div className="mt-1 text-lg font-semibold text-white">
              Senior Software Engineer — Systems Limited
            </div>
            <div className="mt-2 text-sm text-gray-400">
              Lahore, Pakistan • Healthcare / EDI / Cloud-based platforms
            </div>
          </div>
        </div>

        {/* Right: Skills tabs */}
        <div>
          <p className="text-sm text-gray-400">Skills</p>
          <h3 className="mt-2 text-2xl font-bold">Core Expertise</h3>

          {/* Tabs */}
          <div className="mt-6 flex flex-wrap gap-2">
            {skillCategories.map((c) => {
              const isActive = c.key === activeKey;
              return (
                <button
                  key={c.key}
                  onClick={() => setActiveKey(c.key)}
                  className={`rounded-full px-4 py-2 text-sm border transition ${
                    isActive
                      ? "border-blue-500/40 bg-blue-500/10 text-blue-200"
                      : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {c.title}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-gray-300 font-medium">{active?.title}</div>

            <div className="mt-4 flex flex-wrap gap-2">
              {active?.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            Tip: This section is a client component because it uses hooks (tabs state).
          </p>
        </div>
      </div>
    </div>
  );
}