import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6"
    >
      {/* Gradient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-200/40 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Hello, I&apos;m
        </p>
        <h1 className="mb-4 text-5xl font-extrabold leading-tight text-slate-900 sm:text-6xl lg:text-7xl">
          {siteData.name}
        </h1>
        <p className="mb-3 text-xl font-medium text-indigo-600 sm:text-2xl">
          {siteData.tagline}
        </p>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-500">
          {siteData.heroDescription}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#experience"
            className="rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            View Experience
          </a>
          <a
            href={`mailto:${siteData.social.email}`}
            className="rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-indigo-600 hover:text-indigo-600"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
