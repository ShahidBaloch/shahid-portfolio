import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#070A12]/75 backdrop-blur-2xl">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div className="text-sm text-gray-300">
          <span className="font-semibold text-white/90">Muhammad Shahid</span>
          <span className="mx-2 text-gray-500">•</span>
          <span>.NET Full Stack Developer</span>
          <span className="mx-2 text-gray-500">•</span>
          <span className="text-gray-400">© {year}</span>
        </div>

        {/* Right: icons only */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:muhammadshahid6528@gmail.com"
            className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label="Email"
            title="Email"
          >
            <Mail className="h-4 w-4 text-gray-200" />
          </a>

          <a
            href="tel:+923088067617"
            className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label="Call"
            title="Call"
          >
            <Phone className="h-4 w-4 text-gray-200" />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-shahid-8a66a7234/"
            target="_blank"
            className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4 text-gray-200" />
          </a>

          <a
            href="https://github.com/ShahidBaloch"
            target="_blank"
            className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github className="h-4 w-4 text-gray-200" />
          </a>
        </div>
      </div>
    </footer>
  );
}