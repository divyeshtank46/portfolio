import "../css/Home.css";
import "../css/Global.css";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";



const stackHighlights = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "JavaScript",
];

export default function Home() {
  return (
    <main className="page-flow">
      <section id="home" className="section home-section">
        <div className="home-left">
          <div className="home-tag">
            <span className="pulse" />
            Open to Work
          </div>

          <h1 className="home-h1">
            <span className="first">Tank</span>
            <span className="last">Divyesh</span>
          </h1>

          <p className="home-role">Full Stack Developer - MERN</p>

          <p className="home-desc">
            I build high-performance web products with stable APIs and clean user flows.
            From planning to deployment, I focus on code quality, speed, and business value.
          </p>

          <div className="home-btns">
            <a href="#projects" className="btn btn-fill">
              View Projects
            </a>

            <a href="#contact" className="btn btn-line">
              Start a Conversation
            </a>
          </div>

          {/* <div className="home-metrics">
            {heroStats.map(({ value, label }) => (
              <div className="metric-card" key={label}>
                <span className="metric-value">{value}</span>
                <span className="metric-label">{label}</span>
              </div>
            ))}
          </div> */}
        </div>

        <div className="home-right">
          <article className="hero-panel">
            <p className="hero-panel-label">Currently Crafting</p>

            <h3 className="hero-title">
              Scalable products with thoughtful user experience.
            </h3>

            <p className="hero-copy">
              I enjoy solving complex business logic and translating it into
              simple, reliable interfaces that teams can scale confidently.
            </p>

            <div className="tech-cloud">
              {stackHighlights.map((item) => (
                <span className="tech-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="hero-code">
              <span className="code-key">const</span> solution =
              <span className="code-string">
                {" "}"clean and production-ready"
              </span>;
            </div>
          </article>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}