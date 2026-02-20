"use client";

import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus({ type: "error", text: data?.error ?? "Failed to send message." });
        return;
      }

      setStatus({ type: "success", text: "Message sent successfully!" });
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Left */}
        <div>
          <p className="text-sm text-gray-400">Contact</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Hire Me</h2>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Want to discuss an opportunity or project? Send a message and I&apos;ll respond soon.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-gray-400">Email</div>
            <div className="mt-1 text-white">muhammadshahid6528@gmail.com</div>

            <div className="mt-4 text-sm text-gray-400">Phone</div>
            <div className="mt-1 text-white">+92 308 8067617</div>

            <div className="mt-4 text-sm text-gray-400">Location</div>
            <div className="mt-1 text-white">Lahore, Pakistan</div>
          </div>
        </div>

        {/* Right */}
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <label className="block text-sm text-gray-300">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-blue-500/50"
            placeholder="Your name"
          />

          <label className="mt-5 block text-sm text-gray-300">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-blue-500/50"
            placeholder="you@email.com"
          />

          <label className="mt-5 block text-sm text-gray-300">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-blue-500/50"
            placeholder="Write your message..."
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <div
              className={`mt-4 rounded-lg px-4 py-3 text-sm border ${
                status.type === "success"
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                  : "border-red-500/30 bg-red-500/10 text-red-200"
              }`}
            >
              {status.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}