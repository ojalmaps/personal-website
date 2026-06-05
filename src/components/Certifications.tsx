import { siteData } from "@/data/siteData";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Certifications
        </h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          Licenses &amp; Credentials
        </h3>

        <div className="grid gap-6 sm:grid-cols-2">
          {siteData.certifications.map((cert) => (
            <div
              key={cert.name}
              className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-2xl">
                🏅
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {cert.name}
                </h4>
                <p className="mt-1 text-sm text-slate-500">{cert.issuer}</p>
                {cert.date && (
                  <p className="mt-1 text-xs text-indigo-600/70">
                    Issued {cert.date}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
