import { siteData } from "@/data/siteData";

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Skills
        </h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          My tech stack
        </h3>

        <div className="grid gap-8 sm:grid-cols-2">
          {Object.entries(siteData.skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="mb-4 text-lg font-semibold text-slate-900">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition-colors hover:border-indigo-300 hover:text-indigo-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
