"use client";

import { useState, type FormEvent } from "react";
import { siteData } from "@/data/siteData";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section id="contact" className="bg-gray-900 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Contact
        </h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          Get in touch
        </h3>

        <form onSubmit={handleSubmit} className="mb-12 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="rounded-lg border border-white/10 bg-gray-950 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="rounded-lg border border-white/10 bg-gray-950 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-400"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            className="resize-none rounded-lg border border-white/10 bg-gray-950 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-400"
          />
          <button
            type="submit"
            className="rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-gray-950 transition-colors hover:bg-cyan-400"
          >
            {submitted ? "Message Sent! ✓" : "Send Message"}
          </button>
        </form>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={siteData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 transition-colors hover:text-cyan-400"
          >
            GitHub
          </a>
          <span className="text-gray-700">•</span>
          <a
            href={siteData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 transition-colors hover:text-cyan-400"
          >
            LinkedIn
          </a>
          <span className="text-gray-700">•</span>
          <a
            href={`mailto:${siteData.social.email}`}
            className="text-sm font-medium text-gray-400 transition-colors hover:text-cyan-400"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
