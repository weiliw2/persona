import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-20">
      {/* Added pt-20 to account for fixed navbar height */}
      <section id="hero"><Hero /></section>
      
      {/* Placeholder for Projects section */}
      <section id="projects" className="py-24 sm:py-32 px-8 max-w-4xl mx-auto bg-[var(--background)] text-[var(--foreground)]">
        <h2 className="font-sans text-3xl font-bold mb-16 text-center">
          Projects
        </h2>
        <div className="text-center text-gray-600">
          <p>Coming soon! Check back later for exciting projects.</p>
        </div>
      </section>

      <section id="experience"><Experience /></section>
      <section id="skills"><Skills /></section>
      <section id="education"><Education /></section>

      <section id="about" className="py-24 sm:py-32 px-8 max-w-4xl mx-auto bg-gray-50 text-[var(--foreground)]">
        <h2 className="font-sans text-3xl font-bold mb-16 text-center">
          About
        </h2>
        <div className="text-left max-w-2xl mx-auto text-gray-700 space-y-6">
          <p className="font-sans text-base leading-relaxed">
            I'm a graduate student at Duke University's Nicholas School of the Environment, specializing in Energy & Environmental Analytics. My academic journey began at the University of Washington, where I earned a B.S. in Geography and Data Science. This combination grounds my technical skills in a real-world understanding of environmental and spatial systems.
          </p>
          <p className="font-sans text-base leading-relaxed">
            My experience spans energy systems analysis, sustainable transportation, and policy-facing analytics, where I've used GIS and data science to tackle environmental challenges. I am currently seeking full-time roles where I can apply my skills as an Energy Analyst, Data Analyst, or in a GIS & Climate-focused position.
          </p>
        </div>
      </section>
    </main>
  );
}