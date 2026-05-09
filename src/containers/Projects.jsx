import "../css/Projects.css";
import "../css/Global.css";

const projects = [
  {
    num: "01",
    title: "Movie Ticket Booking",
    desc: "Developed a full-stack Movie Ticket Booking web application using the MERN stack . Implemented features such as user authentication, movie and show listings, seat selection, online payment gateway integration, and booking confirmation. Designed a responsive user interface with smooth navigation and a real-time booking experience. Managed backend APIs, database operations, and deployment of both frontend and backend services.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Responsive UI"],
    live: "https://movie-ticket-booking-seven-brown.vercel.app/",
    github: "https://github.com/divyeshtank46/Movie_Ticket_booking",
  },
  {
    num: "02",
    title: "E-commerce Website ",
    desc: "Developed a full-stack E-commerce web application using the MERN stack. Implemented features such as user authentication, product management, shopping cart, and order status tracking. Integrated Razorpay payment gateway for secure online transactions and built an admin panel for managing products and users (add, update, delete, role management). Utilized Cloudinary for efficient image storage and handling",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT","Tailwind css"],
    github: "https://github.com/divyeshtank46/Wrapify",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="sec-header">
        <div className="sec-eye">Portfolio</div>
        <h2 className="sec-h2">
          Featured  <em>Projects</em>
        </h2>
      </div>

      <div className="proj-grid">
        {projects.map(({ num, title, desc, tags, live, github }) => (
          <article className="proj-card" key={num}>
            <div className="pc-top">
              <div className="pc-num">Case {num}</div>
            </div>

            <h3 className="pc-title">{title}</h3>
            <p className="pc-desc">{desc}</p>

            <div className="pc-tags">
              {tags.map((tag) => (
                <span className="pt" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="pc-links">
              <a href={live} target="_blank" rel="noopener noreferrer" className="pcl">
                Live Demo
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer" className="pcl">
                GitHub Repo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
