import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import ExperienceItem from "../components/ExperienceItem";
import ProjectCard from "../components/ProjectCard";

import { experiences } from "../data/experiences";
import { projects } from "../data/projects";

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Intro */}
        <section className="mb-24">
          <h1 className="text-4xl font-bold mb-4">
            Your Name
          </h1>

          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Computer science student interested in
            systems, software engineering, and building
            meaningful technical projects.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-24">
          <SectionTitle>
            Experience
          </SectionTitle>

          <div className="mt-10">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                {...exp}
              />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <SectionTitle>
            Projects
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;