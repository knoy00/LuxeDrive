import '../styles/pages/VisitShowroom.css'
function VisitShowroom() {
  return (
    <div className='showroom'>
      <div className="showroom_flex">
        <div className="showroom_left">
            <h1>Find Your LuxeDrive Showrooms</h1>
            <p>
                A LuxeDrive  Showroom, and your dream vehicle, maybe closer than you think. Search out LuxeDrive Showroom network for the location closest to you.
            </p>
            <button>Search now</button>
        </div>
        <div className="showroom_right">
            <div className="showroom_img_wrapper">
                <img src="/public/images/showroom.jpg" alt="LuxeDrive Showroom" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default VisitShowroom
