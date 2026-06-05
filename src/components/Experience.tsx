import { siteData } from "@/data/siteData";

export default function Experience() {
  return (
    <section id="experience" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Experience
        </h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          Where I&apos;ve worked
        </h3>

        <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-slate-200 md:before:left-1/2">
          {siteData.experience.map((exp, i) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className={`relative flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-4 md:gap-8`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-indigo-600 bg-white md:left-1/2" />

              <div
                className={`ml-8 flex-1 md:ml-0 ${
                  i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                }`}
              >
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md">
                  <p className="mb-1 text-xs font-medium text-indigo-600">
                    {exp.period}
                  </p>
                  <h4 className="text-lg font-bold text-slate-900">{exp.title}</h4>
                  <p className="mb-3 text-sm font-medium text-slate-500">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden flex-1 md:block" />
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16 text-center">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Education
          </h4>
          <div className="inline-block rounded-2xl border border-slate-200 bg-slate-50 px-8 py-6 shadow-sm">
            <p className="text-lg font-bold text-slate-900">
              {siteData.education.degree}
            </p>
            <p className="text-sm text-slate-500">
              {siteData.education.school}
            </p>
            <p className="mt-1 text-xs text-indigo-600">
              {siteData.education.graduation} · {siteData.education.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
