function ProjectCard({
  title,
  description,
  tech,
  github,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-400 transition-colors">
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-zinc-400 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs rounded-full bg-zinc-800"
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="text-blue-400 hover:underline"
      >
        GitHub →
      </a>
    </div>
  );
}

export default ProjectCard;