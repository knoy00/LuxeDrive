import '../styles/pages/Hero.css'
import '../styles/pages/Media Queries/Hero-mq.css'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
function Hero() {

  const [message, setMessage] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(false)
    }, 5000)

    return () => clearTimeout(timer)
  })

  return (
    <div className="hero">
        <Navbar />

        {message && <motion.div className='message'
        initial={{opacity: 0, y: -150}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1, ease: "easeOut", delay: .3}}
        >
          <p>This website is a work in progress. All features might not be available.</p>
        </motion.div>}
        <div className="hero_image"></div>
        <motion.div
        className='hero_text'
         initial={{ opacity: 0, y: -150 }}
         animate={{ opacity: 1, y: 150 }}
         transition={{ duration: 1, ease: "easeOut", delay: .3 }} 
        >
            <h1>Experience the Future of Automobiles</h1>
            <h2>Next-Level Engineering for Next-Level Journeys</h2>
            <h3>The GT63 AMG</h3>
            <button className="cta_button">Discover the new GT63 AMG</button>
        </motion.div>
    </div>
  )
}

export default Hero
