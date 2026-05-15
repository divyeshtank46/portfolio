import "../css/Resume.css";
import "../css/Global.css";



const education = [
  {
    date: "2022 - 2025",
    role: "Bachelor of Computer Application - BCA ",
    place: "Atmanand Saraswati Science College  - Surat",
  },
  {
    date: "2021 - 2022",
    role: "Higher Secondary School",
    place: "Prerna Vidhyalay -  Surat",
  },
];

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map(({ date, role, place, desc }, index) => (
        <div className="tl-item" key={`${role}-${index}`}>
          <div className="tl-dot" />
          <div className="tl-date">{date}</div>
          <div className="tl-role">{role}</div>
          <div className="tl-place">{place}</div>
          <p className="tl-desc">{desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="sec-header">
        <div className="sec-eye">My Learning</div>
        <h2 className="sec-h2">
          <em>Education</em>
        </h2>
      </div>

      <div className="resume-actions">
        <a href="/Divyesh_Tank_Resume.pdf" download className="btn btn-fill">
          Download Resume
        </a>
      </div>

      <div className="resume-wrap">
        <div>
          <div className="res-title">Education</div>
          <Timeline items={education} />
        </div>
      </div>
    </section>
  );
}
