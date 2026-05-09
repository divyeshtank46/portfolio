import "../css/Skills.css";
import "../css/Global.css";

const skillCategories = [
  {
    icon: "FE",
    title: "Frontend",
    pills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Redux Toolkit",
      "Responsive Design",
      "Tailwind",
    ],
  },
  {
    icon: "BE",
    title: "Backend",
    pills: ["Node.js", "Express.js", "REST APIs", "Authentication (JWT)"],
  },
  {
    icon: "DB",
    title: "Database",
    pills: ["MongoDB", "Mongoose", "Data Modeling"],
  },
  {
    icon: "TO",
    title: "Tools",
    pills: ["Git", "GitHub", "Postman", "Cloudinary", "VS Code", "Firebase"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="sec-header">
        <div className="sec-eye">Tech Stack</div>
        <h2 className="sec-h2">
          Capabilities I Use To <em>Ship</em>
        </h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map(({ icon, title, pills }) => (
          <article className="skill-block" key={title}>
            <div className="sb-head">
              <div className="sb-icon">{icon}</div>
              <div className="sb-title">{title}</div>
            </div>
            <div className="sb-pills">
              {pills.map((pill) => (
                <span className="sp" key={pill}>
                  {pill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
