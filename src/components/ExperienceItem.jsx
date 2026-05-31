function ExperienceItem({
  title,
  company,
  date,
  description,
}) {
  return (
    <div className="relative pl-8 pb-12 border-l border-zinc-700">
      <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[7px] top-1" />

      <p className="text-sm text-zinc-400 mb-1">{date}</p>

      <h3 className="text-xl font-medium">
        {title}
      </h3>

      <p className="text-zinc-400 mb-4">
        {company}
      </p>

      <ul className="list-disc list-inside space-y-1 text-zinc-300">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceItem;