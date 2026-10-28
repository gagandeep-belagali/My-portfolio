import { useState } from "react";
import "./App.css";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      number: "01",
      category: "AI · NLP · RAG",
      title: "Banking AI Chatbot",
      description: "An AI-powered banking assistant designed to answer customer questions and support banking workflows using retrieval-augmented generation.",
      tags: ["Python", "FastAPI", "LangChain", "RAG", "SQLite"],
      github: "https://github.com/gagandeep-belagali/-project-final-1",
    },
    {
      number: "02",
      category: "AI · AUTOMATION",
      title: "AI & Data Science Work",
      description: "A collection of practical work exploring AI applications, data processing, natural language processing, and intelligent automation.",
      tags: ["Python", "AI/ML", "Data Science"],
      github: "https://github.com/gagandeep-belagali",
    },
    {
      number: "03",
      category: "CREATIVE · VIDEO",
      title: "Video Editing Studio",
      description: "A space to showcase short-form edits, visual storytelling, transitions, and creative experiments made with CapCut and other editing tools.",
      tags: ["CapCut", "Video Editing", "Visual Storytelling"],
      github: "https://github.com/gagandeep-belagali",
    },
  ];

  const skills = [
    "Python", "SQL", "FastAPI", "LangChain", "RAG", "React",
    "SQLite", "NLP", "AI Chatbots", "Data Processing", "Git & GitHub", "Video Editing"
  ];

  return (
    <div className="portfolio">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a className="brand" href="#home">G<span>.</span></a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#creative">Creative</a>
          <a className="nav-contact" href="#contact">Let's connect ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Gagandeep<br /><span>Belagali.</span></h1>
            <h2 className="hero-role">AI / ML Enthusiast <span>·</span> Building with AI</h2>
            <p className="hero-description">
              I explore AI, intelligent applications, and automation to turn ideas into useful digital experiences. I also enjoy video editing and creative experimentation.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <span>↗</span></a>
              <a className="button button-secondary" href="#contact">Contact me</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/gagandeep-belagali" target="_blank" rel="noreferrer">GitHub ↗</a>
              <span>·</span>
              <a href="https://www.linkedin.com/in/gagandeep-belagali" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="core-scene">
              <div className="core-shadow" />
              <div className="core">
                <div className="core-inner">
                  <span className="core-symbol">G<span>.</span></span>
                  <span className="core-caption">INTELLIGENCE<br />MEETS CREATIVITY</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 01: ABOUT */}
        <section className="about section-wrap section-block" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / A LITTLE ABOUT ME</p>
            <h2>Curious mind.<br /><span>Practical ideas.</span></h2>
          </div>
          <div className="about-content">
            {/* YOU CAN CHANGE YOUR ABOUT BIO TEXT RIGHT HERE BELOW: */}
            <p>
              I'm an AI Engineer with hands-on experience building intelligent applications, machine learning workflows, and RAG-powered systems. I specialize in turning complex data and ideas into efficient, real-world digital solutions.
            </p>
            <div className="about-facts">
              <div><span>01</span><p>AI & ML<br />Projects</p></div>
              <div><span>02</span><p>AI & Data Science<br />Internship</p></div>
              <div><span>03</span><p>Creative<br />Experiments</p></div>
            </div>
          </div>
        </section>

        {/* SECTION 02: PROJECTS */}
        <section className="projects section-wrap section-block" id="projects">
          <div className="section-heading heading-row">
            <div>
              <p className="eyebrow">02 / SELECTED WORK</p>
              <h2>Projects with <span>purpose.</span></h2>
            </div>
            <a className="text-link" href="https://github.com/gagandeep-belagali" target="_blank" rel="noreferrer">More on GitHub ↗</a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={activeProject === project.number ? "project-card project-active" : "project-card"}
                key={project.number}
                onMouseEnter={() => setActiveProject(project.number)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-arrow">↗</span>
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer">Explore project <span>↗</span></a>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 03: SKILLS */}
        <section className="skills section-wrap section-block" id="skills">
          <div className="section-heading">
            <p className="eyebrow">03 / MY TOOLKIT</p>
            <h2>Tools I work <span>with.</span></h2>
          </div>
          <div className="skills-layout">
            <div className="skills-feature">
              <span className="feature-icon">✳</span>
              <p className="eyebrow">CURRENT FOCUS</p>
              <h3>AI-powered<br />applications</h3>
              <p>Connecting language models, APIs, data, and thoughtful user experiences.</p>
            </div>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-chip" key={skill}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {skill}
                  <span className="skill-star">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 04: CREATIVE / BEYOND CODE */}
        <section className="creative section-wrap section-block" id="creative">
          <div className="section-heading" style={{ marginBottom: "30px" }}>
            <p className="eyebrow">04 / BEYOND CODE</p>
            <h2>Ideas in <span>motion.</span></h2>
          </div>
          <div className="creative-card">
            <div className="creative-copy">
              <h2>Technology is logic.<br /><span>Creativity is perspective.</span></h2>
              <p>
                I also enjoy video editing, visual storytelling, and exploring AI tools that make creative workflows more interesting.
              </p>
              <a className="button button-primary" href="#contact">
                Collaborate with me <span>↗</span>
              </a>
            </div>
            <div className="creative-art" aria-hidden="true">
              <div className="art-frame frame-back" />
              <div className="art-frame frame-front">
                <span className="play-icon">▶</span>
                <span className="art-caption">VIDEO EDITING</span>
              </div>
              <div className="art-orb" />
              <span className="art-star">✳</span>
            </div>
          </div>
        </section>

        {/* SECTION 05: CONTACT */}
        <section className="contact section-wrap section-block" id="contact">
          <p className="eyebrow">05 / YOUR NEXT MOVE</p>
          <h2>Have an idea?<br /><span>Let's talk.</span></h2>
          <p className="contact-description">
            I'm interested in entry-level AI/ML opportunities, learning from real projects, and creative collaborations.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:gaganbelagali57@gmail.com">
              Email ↗
            </a>
            <a className="button button-secondary" href="https://www.linkedin.com/in/gagandeep-belagali" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a className="button button-secondary" href="https://github.com/gagandeep-belagali" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">G<span>.</span></a>
        <p>Designed with curiosity. Built with code.</p>
        <span className="copyright">© {new Date().getFullYear()} Gagandeep Belagali</span>
      </footer>
    </div>
  );
}