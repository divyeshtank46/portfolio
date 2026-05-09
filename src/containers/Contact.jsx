import { useRef, useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import "../css/Contact.css";
import "../css/Global.css";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const EMAILJS_SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const links = [
  {
    icon: "EM",
    label: "Email",
    value: "divyesh70163@gmail.com",
    href: "mailto:divyesh70163@gmail.com",
  },
  {
    icon: "GH",
    label: "GitHub",
    value: "github.com/divyeshtank46",
    href: "https://github.com/divyeshtank46",
  },
  {
    icon: "IN",
    label: "LinkedIn",
    value: "linkedin.com/in/divyesh-tank-4a006a389/",
    href: "https://www.linkedin.com/in/divyesh-tank-4a006a389/",
  },
  {
    icon: "LOC",
    label: "Location",
    value: "Surat, Gujarat, India",
    href: null,
  },
];

export default function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const missingConfig = [
      !EMAILJS_SERVICE_ID && "REACT_APP_SERVICE_ID",
      !EMAILJS_TEMPLATE_ID && "REACT_APP_TEMPLATE_ID",
      !EMAILJS_PUBLIC_KEY && "REACT_APP_PUBLIC_KEY",
    ].filter(Boolean);

    if (missingConfig.length > 0) {
      toast.error(`Missing EmailJS config: ${missingConfig.join(", ")}`);
      return;
    }

    setStatus("sending");

    try {
      // Save message in Firebase
      await addDoc(collection(db, "contactMessages"), {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
        timestamp: serverTimestamp(),
        status: "unread",
      });

      // Send email using EmailJS
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Message Sent");

      setStatus("sent");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error("EmailJS send failed:", error);

      toast.error("Failed to send message");

      setStatus("error");

      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="sec-header">
        <div className="sec-eye">Get In Touch</div>

        <h2 className="sec-h2">
          Let's Build Something <em>Together</em>
        </h2>
      </div>

      <div className="contact-wrap">
        <div className="contact-info">
          <p>
            I am open to freelance projects, full time opportunities, and
            meaningful collaborations. Share your idea and I will get back
            quickly.
          </p>

          <div className="clinks">
            {links.map(({ icon, label, value, href }) =>
              href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clink"
                  key={label}
                >
                  <div className="clink-icon">{icon}</div>

                  <div>
                    <div className="clink-lbl">{label}</div>

                    <div className="clink-val">{value}</div>
                  </div>
                </a>
              ) : (
                <div className="clink" key={label}>
                  <div className="clink-icon">{icon}</div>

                  <div>
                    <div className="clink-lbl">{label}</div>

                    <div className="clink-val">{value}</div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <form
          ref={formRef}
          className="form-card"
          onSubmit={handleSubmit}
        >
          {[
            {
              id: "name",
              label: "Name",
              type: "text",
              placeholder: "Your full name",
            },
            {
              id: "email",
              label: "Email",
              type: "email",
              placeholder: "your@email.com",
            },
            {
              id: "subject",
              label: "Subject",
              type: "text",
              placeholder: "Project / Job role / Collaboration",
            },
          ].map(({ id, label, type, placeholder }) => (
            <div className="fg" key={id}>
              <label className="fl" htmlFor={id}>
                {label}
              </label>

              <input
                id={id}
                name={id}
                type={type}
                className="fi"
                placeholder={placeholder}
                value={form[id]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="fg">
            <label className="fl" htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              className="fta"
              placeholder="Tell me what you are building and how I can help."
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="fsubmit"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
                ? "Message Sent"
                : status === "error"
                  ? "Error - Try Again"
                  : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
