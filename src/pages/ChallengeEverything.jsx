import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/pages/ChallengeEverything.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ChallengeEverything = () => {
  const { scrollY } = useScroll();

  const scaleUp = useTransform(scrollY, [9495, 10025], [1, 1.586]);

  // Then scaling down
  const scaleDown = useTransform(scrollY, [10610, 10820], [1.586, 1.5]);

  // Combine both transforms to create a single scale value
  const scale = useTransform(scrollY, (latest) => {
    if (latest < 10427) return scaleUp.get(); // Before scale2 applies
    return scaleDown.get(); // When scale2 should take effect
  });

  const borderRadius = useTransform(scrollY, [9525, 10025], [50, 0]);

  useEffect(() => {
    scrollY.onChange(() => {
      console.log(scrollY.get());
    });
  }, [scrollY]);

  return (
    <motion.div className="expanding-section" style={{ scale, borderRadius }}>
      <h1 className="expanding-header">CHALLENGE EVERYTHING</h1>
      <p className="expanding-paragraph">Can You Defy The Laws of Physics?</p>
      
      <video autoPlay loop muted src="/videos/GT63s.mp4"></video>
    </motion.div>
  );
};

export default ChallengeEverything;
