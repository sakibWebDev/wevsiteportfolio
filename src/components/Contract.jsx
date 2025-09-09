import { motion as Motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState, useEffect, useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const Contract = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const formRef = useRef();

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          number: formData.number,
          message: formData.message,
        }
      );

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "✅ Message sent successfully!",
      });

      setFormData({ name: "", email: "", number: "", message: "" });
    } catch (error) {
      console.error(error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "❌ Failed to send message. Please try again.",
      });
    }
  };

  return (
    <Motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
      >
        Get in Touch
      </Motion.h2>

      <Motion.div className="contact-content" variants={staggerContainer}>
        <Motion.form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <Motion.input
            type="text"
            name="name"
            placeholder="Your Name..."
            required
            value={formData.name}
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />
          <Motion.input
            type="email"
            name="email"
            placeholder="Your Email..."
            required
            value={formData.email}
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />
          <Motion.input
            type="number"
            name="number"
            placeholder="Your Number..."
            required
            value={formData.number}
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />
          <Motion.textarea
            name="message"
            placeholder="Your Message..."
            required
            value={formData.message}
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />

          <Motion.button
            className="submit-btn"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? "Sending..." : "Send Message"}
          </Motion.button>

          {formStatus.message && (
            <Motion.div
              className={`form-status ${
                formStatus.success ? "success" : "error"
              }`}
            >
              {formStatus.message}
            </Motion.div>
          )}
        </Motion.form>
      </Motion.div>
    </Motion.section>
  );
};

export default Contract;
