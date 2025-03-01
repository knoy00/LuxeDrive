import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/pages/Expandd.css"; // Create this CSS file

function ExpandImage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <AnimatePresence>
        {!isOpen && (
          <motion.img
            src="/images/Porsche_911.webp"
            alt="Small Image"
            className="small-image"
            onClick={() => setIsOpen(true)}
            layoutId="expandable-image"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="hero-section" layoutId="expandable-image">
            <motion.img
              src="/images/Porsche_911.webp"
              alt="Expanded Image"
              className="full-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            />
            <motion.div
              className="content"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h1>Porsche 911 - Timeless Design</h1>
              <p>Experience the thrill of the Porsche 911 with its iconic silhouette and high-performance engineering.</p>
              <button onClick={() => setIsOpen(false)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ExpandImage;
