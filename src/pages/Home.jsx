import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import ExperienceItem from "../components/ExperienceItem";
import ProjectCard from "../components/ProjectCard";
import Link from "../components/Link";

import { experiences } from "../data/experiences";
import { projects } from "../data/projects";
import { links } from "../data/links";

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Intro */}
        <section className="mb-24 scroll-mt-32" id="home">
          <h1 className="text-2xl font-bold mb-4">
            Hello and Welcome!
          </h1>

          <p className="text-lg max-w-3xl leading-relaxed">
            I'm a rising junior at the University of Texas at Austin, double-majoring 
            in computer science and mathematics. I'm also a member of the Turing Scholars Honors 
            program for CS. I'm currently interested in operating systems, software engineering, and 
            interdisciplinary applications of computational modeling.
          </p>
          <br></br>
          <p className="text-lg leading-relaxed">
            Email: saachiagra at utexas dot edu
          </p>
          <div>
            {links.map((l, index) => (
              <Link
                key={index}
                {...l}
              />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-24 scroll-mt-24" id="experience">
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
        <section id="projects" className="scroll-mt-24">
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