import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-16">
        <SectionTitle>
          About Me
        </SectionTitle>

        <div className="space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h3 className="text-xl font-semibold mb-3">
              Current Focus
            </h3>

            <p className="max-w-3xl">
              Right now, I'm exploring systems-related research and software engineering roles. 
              For the near future, I'm interested in research related to computational modeling 
              + the human brain, cognitive science, human-computer interaction, and using video 
              games to diagnose & treat medical conditions. Please reach out if you have any 
              opportunities!
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-3">
              Academic Interests
            </h3>

            <p>
              I'm interested in applications of computer science to these fields:
              <ul className="list-disc list-inside">
                <li>Mathematics - I really like linear algebra and number theory</li>
                <li>Psychology - recently took a clinical psychology course and enjoyed it!</li>
                <li>Climate Change - passionate about sustainability</li>
              </ul>
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">
              Hobbies
            </h3>

            <p>
              I've dabbled in various activities over the years but here are the current ones:
              <ul className="list-disc list-inside">
                <li>Art - So many mediums. Some of my favorites are watercolor, ink, and colored pencils</li>
                <li>Violin - Started taking lessons when I was 8 years old, now I mostly improvise</li>
                <li>Hiking - I love national parks and nature</li>
                <li>Video Games - Mostly play story-based indie games</li>
                <li>Board & Card Games - Recently been enjoying Ravine, Love Letter, and 7 Wonders</li>
                <li>Legos - Scratches the itch in my brain to build things</li>
                <li>Astrophotography - I have a telescope and use to to take photos of the moon and planets!</li>
                <li>Pickleball & Badminton - Exercise good</li>
                <li>Looking at penguin pictures...they're really cute</li>

              </ul>
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}

export default About;