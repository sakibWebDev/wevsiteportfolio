import { motion as Motion } from "framer-motion";

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

 const Navbersection = () => {
  return (
    <Motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Portfolio
      </Motion.div>

      <Motion.ul
        className="nav-links"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <Motion.li variants={fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="#home">Home</a>
        </Motion.li>
        <Motion.li variants={fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="#projects">Projects</a>
        </Motion.li>
        <Motion.li variants={fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="#contact">Contact</a>
        </Motion.li>
      </Motion.ul>
    </Motion.nav>
  );
};

export default Navbersection