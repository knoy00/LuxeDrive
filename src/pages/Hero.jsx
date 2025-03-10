import '../styles/pages/Hero.css'
import '../styles/pages/Media Queries/Hero-mq.css'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <div className="hero">
        <Navbar />
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
