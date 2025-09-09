import { motion as Motion } from "framer-motion"


const Footerall = () => {
  return (
    <div>
    
        <Motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>&copy; 2025 Sakib E Azom. All rights reserved.</p>
      </Motion.footer>
    </div>
  )
}

export default Footerall