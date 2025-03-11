import Navbar from '../components/Navbar'
import Hero from '../pages/Hero'
import Models from '../pages/Models'
import LuxeDrive from '../pages/LuxeDrive'
import Brand from '../pages/Brand'
import AllNew from '../pages/AllNew'
import ImageWithSkeleton from '../pages/ImageWithSkeleton'
import VisitShowroom from '../pages/VisitShowroom'
import ChallengeEverything from '../pages/ChallengeEverything'
import JoinUs from '../pages/JoinUs'
import BuildInfo from '../pages/BuildInfo'
import Expandd from '../pages/Expandd'
import Signup from '../pages/Signup'
import BentoGrid from '../pages/BentoGrid'
import GetToKnow from '../pages/GetToKnow'
import LuxeDrive_Auction from '../pages/LuxeDrive_Auction'
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
      <Brand />
      <VisitShowroom />
      <ChallengeEverything />
      <JoinUs />
      <GetToKnow />
      <BentoGrid />
      <LuxeDrive_Auction />
      <ServiceModule />
      <Footer />
    </div>
  )
}

export default LandinPage
