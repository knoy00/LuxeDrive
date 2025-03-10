import { motion } from "framer-motion"
import '../styles/pages/Brand.css'
import '../styles/pages/Media Queries/Brand-mq.css'

function Brand() {
  return (
    <div className='our_brands'>
      <h1 className="brand_title">Our Brands of Luxury</h1>

        <div className="brand_grid">
            <div className="div">
                <div className="brand_img">
                    <img src="/images/Bentley.avif" alt="" />
                </div>

               <div className="brand_text_overlay">
                    <h2>Bentley</h2>
                    <p>Starting at $150,000</p>
                    <motion.button whileHover={{ scale: 1.1 }}>Read More</motion.button>
               </div>
            </div> 
            <div className="div">
                <div className="brand_img">
                    <img src="/images/Porsche911.avif" alt="" />
                </div>

               <div className="brand_text_overlay">
                    <h2>Porsche</h2>
                    <p>Starting at $150,000</p>
                    <motion.button whileHover={{ scale: 1.1 }}>Read More</motion.button>
               </div>
            </div> 
            <div className="div">
                <div className="brand_img">
                    <img src="/images/Aston_Martin.jpg" alt="" />
                </div>

               <div className="brand_text_overlay">
                    <h2>Aston Martin</h2>
                    <p>Starting at $150,000</p>
                    <motion.button whileHover={{ scale: 1.1 }}>Read More</motion.button>
               </div>
            </div> 
            <div className="div">
                <div className="brand_img">
                    <img src="/images/GLS63.avif" alt="" />
                </div>

               <div className="brand_text_overlay">
                    <h2>Mercedes Benz</h2>
                    <p>Starting at $150,000</p>
                    <motion.button whileHover={{ scale: 1.1 }}>Read More</motion.button>
               </div>
            </div> 
        </div>
    </div>
  )
}

export default Brand
