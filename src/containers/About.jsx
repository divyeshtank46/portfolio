import '../css/About.css';
import "../css/Global.css"

const chips = ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs', 'Git', 'Tailwind'];

export default function About() {
  return (
    <section id="about" className="section about-grid">
      <div className="avatar-box">
        <div className="avatar-initials">TD</div>
      </div>

      <div className="about-body">
        <div className="sec-eye"> about me</div>
        <h2 className="sec-h2" style={{ marginBottom: '1.5rem' }}>
          Who I <em>Am</em>
        </h2>

        <p>
          Hey! I'm <strong>Divyesh</strong>, a passionate MERN Stack Developer
          from Surat, Gujarat. I turn complex problems into clean, scalable web apps.
        </p>
        <p>
          I am a MERN stack developer focused on building responsive and user-friendly
          web applications using React, Node.js, Express, and MongoDB. I enjoy creating
          clean interfaces and writing efficient backend logic for smooth user experiences.
        </p>

        <p>
          I have built projects such as e-commerce applications and CRUD systems with
          features like authentication, APIs, cart functionality, and admin management.
          I focus on clean code, performance, and practical full-stack development.
        </p>

        <div className="about-chips">
          {chips.map((c) => <span className="chip" key={c}>{c}</span>)}
        </div>

        {/* <div className="about-stats">
          {stats.map(([num, lbl]) => (
            <div className="astat" key={lbl}>
              <div className="astat-n">{num}</div>
              <div className="astat-l">{lbl}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}