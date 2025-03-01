import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/pages/ChallengeEverything.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ChallengeEverything = () => {
  const { scrollY } = useScroll();

  const scaleUp = useTransform(scrollY, [9695, 10225], [1, 1.586]);

  const scaleDown = useTransform(scrollY, [10910, 11120], [1.586, 1.3]);

  const scale = useTransform(scrollY, (latest) => {
    if (latest < 10427) return scaleUp.get();
    return scaleDown.get();
  });

  const borderRadius = useTransform(scrollY, [9695, 10225], [50, 0]);

  useEffect(() => {
    scrollY.onChange(() => {
      console.log(scrollY.get());
    });
  }, [scrollY]);

  return (
    <motion.div className="expanding-section" style={{ scale, borderRadius }}>
      <h1 className="expanding-header">CHALLENGE EVERYTHING</h1>
      <p className="expanding-paragraph">Can You Defy The Laws of Physics?</p>
      
      <video autoPlay loop muted src="/videos/GTvid.mp4"></video>
    </motion.div>
  );
};

export default ChallengeEverything;
