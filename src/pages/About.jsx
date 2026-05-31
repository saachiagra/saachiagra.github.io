import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <SectionTitle>
          About Me
        </SectionTitle>

        <div className="space-y-10 text-zinc-300 leading-relaxed">
          <section>
            <h3 className="text-xl font-semibold mb-3">
              Hobbies
            </h3>

            <p>
              I've dabbled in various activities over the years but here are the current ones:
              <ul className="list-disc list-inside">
                <li>Art. So many mediums. Some of my favorites are watercolor, ink, and colored pencils.</li>
                <li>Violin. Started taking lessons when I was 8 years old, now I mostly improvise.</li>
                <li>Hiking. I love national parks and nature.</li>
                <li>Video Games. Mostly play story-based indie games.</li>
                <li>Board & Card Games. Recently been enjoying Ravine, Love Letter, and 7 Wonders.</li>
                <li>Legos. Itches my need to build things.</li>
                <li>Astrophotography. I have a telescope and use to to take photos of the moon and planets!</li>
                <li>Pickleball & Badminton. Exercise good.</li>

              </ul>
            </p>
            
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">
              Interests
            </h3>

            <p>
              <ul className="list-disc list-inside">
                <li>Mathematics. I really like linear algebra and number theory.</li>
                <li>Climate Change. Passionate about sustainability.</li>
                <li>Psychology. Recently took a clinical psychology course and enjoyed it.</li>
                <li>Coding & CS Applications to Other Fields.</li>
              </ul>
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">
              Current Focus
            </h3>

            <p>
              Right now, I'm exploring software engineering roles, and I'm interested in research 
              related to computational modeling and the human brain.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default About;