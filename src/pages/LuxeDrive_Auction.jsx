import { motion, useInView } from "framer-motion"
import { useRef } from "react"

import '../styles/pages/LuxeDrive_Auction.css';
import '../styles/pages/Media Queries/LuxeDrive_Auction-mq.css'


function LuxeDrive_Auction() {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);
    const imgRef3 = useRef(null);

    const inView1 = useInView(ref1, {once: true});
    const inView2 = useInView(ref2, {once: true});
    const inView3 = useInView(ref3, {once: true});
    const inView4 = useInView(ref4, {once: true});

    const inViewImg1 = useInView(imgRef1, {once: true});
    const inViewImg2 = useInView(imgRef2, {once: true});
    const inViewImg3 = useInView(imgRef3, {once: true});

  return (
    <div className="auction_section">
        <div className="auction_inner">
            <motion.div
             className="auction_header"
             ref={ref1}
             initial={{ opacity: 0, y: 100 }}
             animate={inView1? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 1.2, ease: 'easeOut', delay:.3 }}
             >
                <h1>Drive Your Dream Car at Unbeatable Prices</h1>
                <p>
                Take advantage of our exclusive auctioning and bidding services, where you can secure top-quality cars at the best prices, tailored just for you.
                </p>
                
            </motion.div>
            <div className="auction_content_wrapper">
                <motion.div 
                className="auction_img"
                ref={imgRef1}
                initial={{ opacity: 0, x: -100 }}
                animate={inViewImg1? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.2, ease: 'easeOut', delay:.3 }}
                >
                    <img src="/images/woman2.jpeg" alt="Woman" />
                </motion.div>
                <motion.div 
                className="auction_content"
                ref={ref2}
                initial={{ opacity: 0, y: 130 }}
                animate={inView2? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, ease: 'easeOut', delay:.5 }}
                >
                    <h2>Get the Best Deals on Your Dream Car</h2>
                    <p>
                        Join our auction platform and bid your way to unbeatable prices. With exciting auctions happening daily, you have the chance to own top-quality cars at a fraction of the cost.
                    </p>
                    <button className="auction_btn">Explore Auctions</button>
                </motion.div>

                <motion.div 
                className="auction_content"
                ref={ref3}
                initial={{ opacity: 0, y: 130}}
                animate={inView3? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, ease: 'easeOut', delay:.5 }}
                >
                    <h2>Smart Bidding, Bigger Savings</h2>
                    <p>
                        Why pay more when you can bid and win? Our auction platform connects you to exclusive deals on high-quality cars, ensuring you get the best price every time.
                    </p>
                    <button className="auction_btn">Start Today</button>
                </motion.div>

                <motion.div 
                className="auction_img"
                ref={imgRef2}
                initial={{ opacity: 0, x: 100 }}
                animate={inViewImg2? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.2, ease: 'easeOut', delay:.3 }}
                >
                    <img src="/images/women.png" alt="Two Women" />
                </motion.div>

                <motion.div 
                className="auction_img"
                ref={imgRef3}
                initial={{ opacity: 0, x: -100 }}
                animate={inViewImg3? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.2, ease: 'easeOut', delay:.3 }}
                >
                    <img src="/images/man.png" alt="" />
                </motion.div>

                <motion.div 
                className="auction_content"
                ref={ref4}
                initial={{ opacity: 0, y: 130 }}
                animate={inView4? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, ease: 'easeOut', delay:.5 }}
                >
                    <h2>Bid, Win, and Save Big</h2>
                    <p>
                        Join our auction platform and get incredible deals on top-quality cars. With hundreds of bidders competing daily, you’re always in for exciting opportunities to win at the best prices.
                    </p>
                    <button className="auction_btn">Bid Now</button>
                </motion.div>

                
            </div>
        </div>
     
    </div>
  )
}

export default LuxeDrive_Auction
