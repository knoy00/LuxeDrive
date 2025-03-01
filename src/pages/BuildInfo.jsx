import '../styles/pages/BuildInfo.css'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function BuildInfo() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    
  return (
    <div className='build_info'>
        <motion.div 
        className="info_wrapper"
        ref={ref}
        initial={{ opacity: 0, y: 180 }}
        animate={isInView ? { opacity: 1, y: 0 } :{} }
        transition={{ duration: 1.2, ease: 'easeOut' }}
        >
            <div className="info">
                <h1>$190,000_*</h1>
                <p>Starting at</p>
            </div>
            <div className="info">
                <h1>590_*</h1>
                <p>Max avall. horsepower</p>
            </div>
            <div className="info">
                <h1>2.5 seconds_*</h1>
                <p>Avall. 0 to 60 time</p>
            </div>
            <div className="info">
                <h1>290 mph_*</h1>
                <p>Top track speed</p>
            </div>
        </motion.div>
    </div>
  )
}

export default BuildInfo
