import '../styles/pages/Home.css'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

function Home() {
  return (
    <div className="Home">
        <Navbar />
        <div className="home_image"></div>
        <motion.div
        className='hero_text'
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: -100 }}
         transition={{ duration: 2.5, ease: "easeOut" }} 
        >
            <h1>Experience the Future of Automobiles</h1>
            <h2>Next-Level Engineering for Next-Level Journeys</h2>
            <h3>The GT63 AMG</h3>
            <button className="cta_button">Discover Now</button>
        </motion.div>
    </div>
  )
}

export default Home
