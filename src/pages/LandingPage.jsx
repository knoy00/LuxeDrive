import Navbar from '../components/Navbar'
import Hero from '../pages/Hero'
import Models from '../pages/Models'
import LuxeDrive from '../pages/LuxeDrive'
import Brand from '../pages/Brand'
import AllNew from '../pages/AllNew'
import VisitShowroom from '../pages/VisitShowroom'

import '../styles/pages/LandingPage.css'
function LandinPage() {
  return (
    <div className='landing_page'>
      <Navbar />
      <Hero />
      <Models />
      <LuxeDrive />
      <Brand />
      <AllNew />
      <VisitShowroom />
    </div>
  )
}

export default LandinPage
