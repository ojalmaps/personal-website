import { siteData } from "@/data/siteData";

export default function About() {
  return (
    <section id="about" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-indigo-600">
          About Me
        </h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          Get to know me
        </h3>

        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
          {/* Profile image placeholder */}
          <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-6xl shadow-sm">
            👨‍💻
          </div>

          <div>
            <p className="mb-6 whitespace-pre-line text-lg leading-relaxed text-slate-600">
              {siteData.about.bio}
            </p>

            <ul className="grid gap-3 sm:grid-cols-2">
              {siteData.about.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
