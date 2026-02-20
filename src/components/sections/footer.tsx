export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-white font-semibold">Muhammad Shahid</div>
          <div className="mt-1 text-sm text-gray-400">
            .NET Full Stack Developer (.NET + Angular)
          </div>
          <div className="mt-2 text-sm text-gray-500">© {year} All rights reserved.</div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:muhammadshahid6528@gmail.com"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 hover:bg-white/10 transition"
          >
            Email
          </a>

          <a
            href="tel:+923088067617"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 hover:bg-white/10 transition"
          >
            Call
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-shahid-8a66a7234/"
            target="_blank"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 hover:bg-white/10 transition"
          >
            LinkedIn
          </a>

          {/* Replace with your GitHub when ready */}
          <a
            href="https://github.com/"
            target="_blank"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}