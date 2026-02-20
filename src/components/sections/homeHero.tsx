import Image from "next/image";

export default function HomeHero() {
    return (
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
            <div className="pointer-events-none absolute -top-24 left-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="grid items-center gap-10 md:grid-cols-2">
                {/* Left */}
                <div className="fade-up">
                    <p className="text-sm text-gray-300/80">Hi there 👋</p>

                    <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
                        I&apos;m <span className="text-blue-400">Muhammad Shahid</span>
                    </h1>

                    <h2 className="mt-4 text-xl text-gray-200 md:text-2xl">
                        .NET Full Stack Developer (.NET + Angular)
                    </h2>

                    <p className="mt-5 max-w-xl text-gray-200/75 leading-relaxed">
                        Results-oriented Full Stack Developer with 4+ years of experience building scalable
                        web applications in healthcare, EDI, and enterprise domains. Skilled in .NET Core,
                        Angular, SQL Server, Azure, and AWS.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#portfolio"
                            className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 hover:brightness-110 transition"            >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 hover:border-white/30 transition"           >
                            Hire Me
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-200/70">
                        <span>Lahore, Pakistan</span>
                        <span>•</span>
                        <a
                            className="hover:text-white transition"
                            href="mailto:muhammadshahid6528@gmail.com"
                        >
                            muhammadshahid6528@gmail.com
                        </a>
                        <span>•</span>
                        <a className="hover:text-white transition" href="tel:+923088067617">
                            +92 308 8067617
                        </a>
                    </div>
                </div>

                {/* Right */}
                <div className="relative fade-up">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl shadow-black/30 hover:bg-white/10 transition">
                        <div className="flex items-center gap-4">
                            <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10">
                                <Image
                                    src="/images/profile.png"
                                    alt="Muhammad Shahid"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div>
                                <p className="text-sm text-gray-200/80">Currently</p>
                                <p className="mt-1 text-xl md:text-2xl font-semibold text-white">
                                    Senior Software Engineer
                                </p>
                                <p className="text-gray-200/70">Systems Limited</p>
                            </div>
                        </div>

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
                                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-100/80"
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