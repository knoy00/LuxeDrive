import Navbar from '../components/Navbar'
import Hero from '../pages/Hero'
import Models from '../pages/Models'
import LuxeDrive from '../pages/LuxeDrive'
import Brand from '../pages/Brand'

import '../styles/pages/LandingPage.css'
function LandinPage() {
  return (
    <div className='landing_page'>
      <Navbar />
      <Hero />
      <Models />
      <LuxeDrive />
      <Brand />
    </div>
  )
}

export default LandinPage
