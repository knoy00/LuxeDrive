import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/pages/ChallengeEverything.css";
import { useEffect } from "react";

const ChallengeEverything = () => {
  const { scrollY } = useScroll();

  const scaleUp = useTransform(scrollY, [3585, 4248], [1.15, 1.5]);

  const scaleDown = useTransform(scrollY, [4448, 4800], [1.5, 1.4]);

  const scale = useTransform(scrollY, (latest) => {
    if (latest < 4348) return scaleUp.get();
    return scaleDown.get();
  });

  const borderRadius = useTransform(scrollY, [3585, 4248], [50, 5]);

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
