import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView, useScroll, useTransform } from "framer-motion";

import '../styles/pages/AllNew.css';

function AllNew() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({target: targetRef})
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);


  return (
    <motion.div
      className="all_new"
    >
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.8, ease: "easeOut" }}
        >
            <h1>The All-New GT63s AMG – 2025</h1>
            <div className="divider"></div>
            <p>A race that knows no finish line.</p>
            <p>
              Born from a legacy of performance, the <strong>2025 GT63 AMG</strong> is the ultimate fusion of power, precision, and luxury. 
              Inspired by decades of motorsport dominance, every detail is engineered for <strong>unparalleled driving exhilaration</strong>.
              From its <strong>handcrafted V8 engine</strong> to its aerodynamically sculpted design, this masterpiece is more than a car—it’s a statement.
            </p>
            <p>
              Designed by <strong>visionaries, built by perfectionists</strong>, and driven by those who demand the extraordinary—the 
              <strong> GT63s AMG</strong> redefines the limits of performance.
            </p>
            <p>Are you ready to take the wheel?</p>
        </motion.div>
        
        <div className="carousel" ref={targetRef}>
            <div className="contentContainer">
                <motion.div className="images" style={{x}}>
                    <div className="imageItem">
                        <div className="image-container">
                            <img src='/images/GT63s/GT63s_1.jpg' alt="GT63 AMG" />
                        </div>
                    </div>

                    <div className="imageItem">
                        <div className="image-container">
                            <img src='/images/GT63s/GT63s_2.jpg' alt="GT63 AMG" />
                        </div>
                    </div>

                    <div className="imageItem">
                        <div className="image-container">
                            <img src='/images/GT63s/GT63s_3.jpg' alt="GT63 AMG" />
                        </div>
                    </div>

                    <div className="imageItem">
                        <div className="image-container">
                            <img src='/images/GT63s/GT63s_4.jpg' alt="GT63 AMG" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
        
    
    </motion.div>
  );
}

export default AllNew;
