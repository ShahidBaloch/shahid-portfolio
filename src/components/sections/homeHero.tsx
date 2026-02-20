export default function HomeHero() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Left */}
        <div>
          <p className="text-sm text-gray-400">Hi there 👋</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            I&apos;m <span className="text-blue-500">Muhammad Shahid</span>
          </h1>

          <h2 className="mt-4 text-xl text-gray-300 md:text-2xl">
            .NET Full Stack Developer (.NET + Angular)
          </h2>

          <p className="mt-5 max-w-xl text-gray-400 leading-relaxed">
            Results-oriented Full Stack Developer with 4+ years of experience building
            scalable web applications in healthcare, EDI, and enterprise domains.
            Skilled in .NET Core, Angular, SQL Server, Azure, and AWS.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-gray-200 hover:bg-white/5 transition"
            >
              Hire Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-400">
            <span>Lahore, Pakistan</span>
            <span>•</span>
            <a className="hover:text-white transition" href="mailto:muhammadshahid6528@gmail.com">
              muhammadshahid6528@gmail.com
            </a>
            <span>•</span>
            <a className="hover:text-white transition" href="tel:+923088067617">
              +92 308 8067617
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
            <p className="text-sm text-gray-300">Currently</p>
            <p className="mt-2 text-2xl font-semibold text-white">
              Senior Software Engineer
            </p>
            <p className="mt-1 text-gray-400">Systems Limited</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                ".NET Core",
                "ASP.NET MVC",
                "Angular",
                "SQL Server",
                "Azure",
                "Cosmos DB",
                "AWS",
                "REST APIs",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* subtle glow */}
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-blue-600/10 blur-2xl" />
        </div>
      </div>
    </div>
  );
}