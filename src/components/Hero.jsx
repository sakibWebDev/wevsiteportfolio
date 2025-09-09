import { motion as Motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import DownloadCV from "./CvDownload";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <Motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <Motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <Motion.div className="hero-badge">
            <span> 👋 Hello, I'm </span>
          </Motion.div>
          <Motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Sakib 
          </Motion.h1>
          <Motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {" "}
            Creative Developer & Designer
          </Motion.h2>
          <Motion.p className="hero-description" variants={fadeInUp}>
            I craft beautiful digital experiences that combine stunning design
            with powerful functionality. Specializing in modern web applications
            and interactive user interfaces.
          </Motion.p>

          <Motion.div className="cta-buttons" variants={staggerContainer}>
            <Motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </Motion.a>
            <Motion.a
              href="#contacts"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </Motion.a>
            <Motion.a
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DownloadCV/>
            </Motion.a>
          </Motion.div>
          <Motion.div className="social-links" variants={staggerContainer}>
            <Motion.a href="https://github.com/sakibWebDev" target="_blank">
              <i className="fab fa-github"> </i>
            </Motion.a>
            <Motion.a href="https://www.linkedin.com/in/sakib-eazom-9394561b6/" target="_blank">
              <i className="fab fa-linkedin"> </i>
            </Motion.a>
            <Motion.a href="https://twitter.com" target="_blank">
              <i className="fab fa-twitter"> </i>
            </Motion.a>
          </Motion.div>
        </Motion.div>

        <Motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "Sakib",
  origin: "🌍 Somewhere between a coffee shop and a terminal",
  role: "Fullstack Web Sorcerer",
  stack: {
    languages: ["JavaScript", "TypeScript", "SQL"],
    frameworks: ["React", "Next.js", "TailwindCSS", "Supabase"],
  },
  traits: [
    "pixel-perfectionist",
    "API whisperer",
    "dark mode advocate",
    "terminal aesthetic enthusiast",
  ],
  missionStatement:
    "Turning ideas into interfaces and bugs into feature",
  availability: "Available for hire",
};`}
            </SyntaxHighlighter>
          </div>

          <Motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                {" "}
                Currently working on something awesome!
              </span>
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </Motion.section>
  );
};
