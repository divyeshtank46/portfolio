import { useEffect, useState } from "react";
import "../css/Header.css";
import "../css/Global.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (event, href) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <a className="logo-name" href="#home" onClick={(event) => handleClick(event, "#home")}>
        𝓣 <span>𝓓</span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={(event) => handleClick(event, href)}
            className={active === href.slice(1) ? "active" : ""}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
