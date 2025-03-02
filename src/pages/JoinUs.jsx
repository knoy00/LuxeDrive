import {motion, useInView, AnimatePresence} from 'framer-motion'
import { useRef } from 'react'
import '../styles/pages/JoinUs.css'

function JoinUs() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});


  return (
    <div className="join_us_wrapper">
        <div className='join_us'>

            <div className="join_us_img">
                <img src="/images/Porsche_911.webp" alt="Porsche 911" />
            </div>

            <motion.div 
            className='join_us_text'
            ref={ref}
            initial={{ opacity: 0, y: 250 }}
            animate={isInView ? { opacity: 1, y: 0 } :{} }
            transition={{ duration: 1.5, ease: 'linear' }}
            >
                <div className="divider"></div>
                <h1>The search for a new Porsche 911 is over</h1>
                <p>Join our team and become a part of the Porsche 911 family</p>
                <button>Join now</button>
                <br />
                <p>
                    Rear-engine power meets precision in the Porsche 911, where the twin-turbo flat-six delivers relentless torque to the asphalt. With Porsche Traction Management (PTM), power is intelligently distributed to all four wheels, ensuring maximum grip in any condition—whether carving through mountain passes or launching off the line.
                </p>
            </motion.div>
        </div>
    </div>
  )
}

export default JoinUs
