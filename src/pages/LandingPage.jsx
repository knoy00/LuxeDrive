import Navbar from '../components/Navbar'
import Hero from '../pages/Hero'
import Models from '../pages/Models'
import LuxeDrive from '../pages/LuxeDrive'
import Brand from '../pages/Brand'
import AllNew from '../pages/AllNew'
import VisitShowroom from '../pages/VisitShowroom'
import ChallengeEverything from '../pages/ChallengeEverything'
import JoinUs from '../pages/JoinUs'
import BuildInfo from '../pages/BuildInfo'
import Expandd from '../pages/Expandd'
import Signup from '../pages/Signup'
import GetToKnow from '../pages/GetToKnow'
import ServiceModule from '../pages/ServiceModule'
import Footer from '../components/Footer'


import '../styles/pages/LandingPage.css'
function LandinPage() {
  return (
    <div className='landing_page'>
      <Navbar />
      <Hero />
      <BuildInfo />
      <Models />
      <LuxeDrive />
      <Brand />
      <AllNew />
      <VisitShowroom />
      <ChallengeEverything />
      <JoinUs />
      <GetToKnow />
      <ServiceModule />
      <Footer />

    

    </div>
  )
}

export default LandinPage
