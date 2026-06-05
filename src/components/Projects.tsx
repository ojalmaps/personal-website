import { siteData } from "@/data/siteData";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Projects
        </h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          Things I&apos;ve built
        </h3>

        <div className="grid gap-6 sm:grid-cols-2">
          {siteData.projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-white/5 bg-gray-950 p-6 transition-all hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <h4 className="mb-2 text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-400 transition-colors hover:text-cyan-400"
                >
                  GitHub ↗
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-400 transition-colors hover:text-cyan-400"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
