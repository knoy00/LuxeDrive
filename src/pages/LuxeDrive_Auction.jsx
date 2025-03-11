import { motion, inView } from "framer-motion"
import { useRef } from "react"

import '../styles/pages/LuxeDrive_Auction.css';

function LuxeDrive_Auction() {
  return (
    <div className="auction_section">
        <div className="auction_inner">
            <div className="auction_header">
                <h1>Drive Your Dream Car at Unbeatable Prices</h1>
                <p>
                Take advantage of our exclusive auctioning and bidding services, where you can secure top-quality cars at the best prices, tailored just for you.
                </p>
                
            </div>
            <div className="auction_content_wrapper">
                <div className="auction_img">
                    <img src="/images/woman2.jpeg" alt="Woman" />
                </div>
                <div className="auction_content">
                    <h2>Get the Best Deals on Your Dream Car</h2>
                    <p>
                        Join our auction platform and bid your way to unbeatable prices. With exciting auctions happening daily, you have the chance to own top-quality cars at a fraction of the cost.
                    </p>
                    <button className="auction_btn">Explore Auctions</button>
                </div>

                <div className="auction_content">
                    <h2>Smart Bidding, Bigger Savings</h2>
                    <p>
                        Why pay more when you can bid and win? Our auction platform connects you to exclusive deals on high-quality cars, ensuring you get the best price every time.
                    </p>
                    <button className="auction_btn">Bid Now</button>
                </div>

                <div className="auction_img">
                    <img src="/images/women.png" alt="Two Women" />
                </div>

                <div className="auction_img">
                    <img src="/images/man.png" alt="" />
                </div>

                <div className="auction_content">
                    <h2>Bid, Win, and Save Big</h2>
                    <p>
                        Join our auction platform and get incredible deals on top-quality cars. With hundreds of bidders competing daily, you’re always in for exciting opportunities to win at the best prices.
                    </p>
                    <button className="auction_btn">Bid Now</button>
                </div>

                
            </div>
        </div>
     
    </div>
  )
}

export default LuxeDrive_Auction
