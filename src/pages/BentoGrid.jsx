import '../styles/pages/Bento.css'
import '../styles/pages/Media Queries/Bento-mq.css'

import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
function BentoGrid() {

  const ref1 = useRef(null)
  const ref2 = useRef(null)

  const inView1 = useInView(ref1, {once: true})
  const inView2 = useInView(ref2, {once: true})


  return (
    <motion.div 
      className='bento'
      ref={ref2}
      initial={{ opacity: 0, y: 150 }}
      animate={inView2? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: 'easeOut', delay: .8 }}
    >
      
      <div className="bento-grid">
        <motion.div 
          ref={ref1}
          className="box1" 
          style={{ gridArea: "box-1" }}
          // initial={{ opacity: 0, x: -180 }}
          // animate={{ opacity: 1, x: 0 }}
          // transition={{duration: 1, ease: "linear", delay: 2}}
        >
          <img src="/images/Bento-Grid/Aston_Martin.webp" alt="Aston Martin" />
        </motion.div>

        <div className="box2" style={{ gridArea: "box-2" }}>
          <img src="/images/Bento-Grid/cla.jpg" alt="Mercedes" />
        </div>

        <div className="box3" style={{ gridArea: "box-3" }}>
          <img src="/images/Bento-Grid/amg-one.jpg" alt="MG One" />
        </div>

        <div className="box4" style={{ gridArea: "box-4" }}>
          <img src="/images/Bento-Grid/bentayga.jpg" alt="Bentayga" />
        </div>

        <div className="box5" style={{ gridArea: "box-5" }}>
          <img src="/images/Bento-Grid/green-aston.jpg" alt="Aston Martin" />
        </div>

        <div className="box6" style={{ gridArea: "box-6" }}>
          <img src="/images/Bento-Grid/Continental.avif" alt="Continental GT" />
        </div>

        <div className="box7" style={{ gridArea: "box-7" }}>
          <img src="/images/Bento-Grid/911-Carrera.webp" alt="911 Carrera" />
        </div>

        <div className="box8" style={{ gridArea: "box-8" }}>
          <img src="/images/Bento-Grid/Porsche_track.avif" alt="Porche" />
        </div>

        <div className="box9" style={{ gridArea: "box-9" }}>
          <img src="/images/Bento-Grid/GT63_grey.jpg" alt="GT63 s" />
        </div>

      </div>
    </motion.div>
  )
}

export default BentoGrid;
