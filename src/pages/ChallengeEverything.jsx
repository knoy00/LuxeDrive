import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/pages/ChallengeEverything.css";
import "../styles/pages/Media Queries/ChallengeEverything-mq.css";
import { useEffect, useState } from "react";

const ChallengeEverything = () => {
  const { scrollY } = useScroll();

  const scaleUp = useTransform(scrollY, [3585, 4248], [1.15, 1.5]);
  const scaleDown = useTransform(scrollY, [4448, 4800], [1.5, 1.4]);
  const borderRadius = useTransform(scrollY, [3585, 4248], [50, 5]);

  const scale = useTransform(scrollY, (latest) => {
    if (latest < 4348) return scaleUp.get();
    return scaleDown.get();
  });

  // useEffect(() => {
  //   scrollY.onChange(() => {
  //     console.log(scrollY.get());
  //   });
  // }, [scrollY]);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1566);
  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 1566);
    };

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);
  

  return (
    <>
      {!isMobile && < motion.div className="expanding-section" style={{ scale, borderRadius }}>
        <h1 className="expanding-header">CHALLENGE EVERYTHING</h1>
        <p className="expanding-paragraph">Can You Defy The Laws of Physics?</p>

        <video autoPlay loop muted src="/videos/GTvid.mp4"></video>
      </motion.div>}

      {isMobile && <div className="expanding-section tablet">
        <h1 className="expanding-header">CHALLENGE EVERYTHING</h1>
        <p className="expanding-paragraph">Can You Defy The Laws of Physics?</p>

        <video autoPlay loop muted src="/videos/GTvid.mp4"></video>
      </div>}
    </>
  );
};

export default ChallengeEverything;
