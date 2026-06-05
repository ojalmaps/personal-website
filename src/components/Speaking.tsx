import { siteData } from "@/data/siteData";

export default function Speaking() {
  return (
    <section id="speaking" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Speaking
        </h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          Talks &amp; Workshops
        </h3>

        <div className="space-y-6">
          {siteData.speaking.map((talk) => (
            <div
              key={talk.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    {talk.event}
                  </p>
                  <h4 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {talk.title}
                  </h4>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">
                    {talk.description}
                  </p>

                  {talk.copresenters && talk.copresenters.length > 0 && (
                    <p className="mb-4 text-sm text-slate-400">
                      <span className="font-medium text-slate-500">
                        Co-presented with:{" "}
                      </span>
                      {talk.copresenters.join(", ")}
                    </p>
                  )}

                  <div className="mb-4 flex flex-wrap gap-2">
                    {talk.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {talk.link && talk.link !== "#" && (
                    <a
                      href={talk.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
                    >
                      View on LinkedIn ↗
                    </a>
                  )}
                </div>

                {/* Conference badge */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-3xl">
                  🎤
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
