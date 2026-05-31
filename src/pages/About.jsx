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
              Add information about your hobbies here.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">
              Interests
            </h3>

            <p>
              Add information about your interests here.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">
              Current Focus
            </h3>

            <p>
              Talk about what technologies or topics
              you're currently learning.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default About;