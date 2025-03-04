import "../styles/pages/GetToKnow.css";
import "../styles/pages/Media Queries/GetToKnow.css";
import { useState, useEffect, useRef } from "react";
import {motion, useInView } from "framer-motion";

function GetToKnow() {

    const ref = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const isInView = useInView(ref, {once: true});
    const isInView2 = useInView(ref2, {once: true});
    const isInView3 = useInView(ref3, {once: true});
    const isInView4 = useInView(ref4, {once: true});

    const [openDes, setOpenDes] = useState(false);
    const [openSection, setOpenSection] = useState(null)

    const handleSection = (section) => {
        setOpenSection(section);
        setOpenDes(true)
    }

    const handleClose = () => {
        setOpenDes(false);
        setOpenSection(null);
    }

    useEffect(() => {
        if(openDes){
            document.body.classList.add('no-scroll');
        }
        else{
            document.body.classList.remove('no-scroll');
        }
    }, [openDes])

    

  return (
    <motion.div
    ref={ref} 
    
    
    className="section-get-to-know">
      <div className="gtk_header">
        <h1>Get to know the 911</h1>
        <div className="gtk-flex-container">
            <div className="gtk-flex">
                <motion.div 
                    className="gtk-card" 
                    onClick={() => handleSection('performance')}
                    ref={ref} 
                    initial={{ opacity: 0, y: 70 }}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: .7, ease: 'easeOut'}}
                >
                    <h2>Performance</h2>
                    <p>
                        The Porsche 911 is built for speed. With an all-new 4.0L V8 engine
                    </p>
                    <div className="gtk-card-image">
                        <img src="/images/engine.jpg" alt="Engine" />
                    </div>
                    
                </motion.div>
                
                <motion.div
                    className="gtk-card"
                    onClick={() => handleSection('design')}
                    ref={ref2} 
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView2 ? {opacity: 1, y: 0} : {}}
                    transition={{duration: .7, ease: 'easeOut'}}
                  >
                    <h2>Design</h2>
                    <p>
                        The 911 stays true to its classic design while continuously improving performance
                    </p>
                    <div className="gtk-card-image">
                        <img src="/images/Porsche_aero.webp" alt="Porshe Red" />
                    </div>
                    
                </motion.div>

                <motion.div
                    className="gtk-card"
                    onClick={()=> handleSection('aerodynamics')}
                    ref={ref3} 
                    initial={{ opacity: 0, y: 70 }}
                    animate={isInView3 ? {opacity: 1, y: 0} : {}}
                    transition={{duration: .8, ease: 'easeOut'}}
                  >
                    <h2>Aerodynamics </h2>
                    <p>
                        With Porsche’s advanced aerodynamics, the 911 delivers a smooth driving experience
                    </p>
                    <div className="gtk-card-image">
                        <img src="/images/Porsche_yellow.jpg" alt="Porsche Yellow" />
                    </div>
                    
                </motion.div>

                <motion.div 
                    className="gtk-card" 
                    onClick={()=> handleSection('speed')}
                    ref={ref4} 
                    initial={{ opacity: 0, y: 70 }}
                    animate={isInView4 ? {opacity: 1, y: 0} : {}}
                    transition={{duration: .8, ease: 'easeOut'}}
                >
                    <h2>Speed</h2>
                    <p>
                        The Porsche 911 is built for speed. With an all-new 4.0L V8 engine
                    </p>
                    <div className="gtk-card-image">
                        <img src="/images/Porsche_track.avif" alt="" />
                    </div>
                    
                </motion.div>
                
            </div>
        </div>
      </div>

      {openDes && <motion.div 
        className="gtk-expand-container"
        ref={ref}
        initial={{ opacity: 0, y: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: .2, ease: 'easeOut' }}
        >
    
        {openSection === 'performance' && <div className="gtk-expand-performance">
            <div className="gtk-ep-header">
                <h1>Performance</h1>
                <div className="gtk_close" onClick={handleClose}>
                    <p>X</p>
                </div>
                
            </div>

            <div className="gtk-ep-subHeader">
                <h2>Precision Power. <br /> Relentless Performance.</h2>
            </div>

            <div className="gtk-ep-description">
                <p>
                    The Porsche 911 is a masterpiece of performance engineering, blending speed, precision, and agility in a way few cars can match. Equipped with a twin-turbocharged flat-six engine, the latest models produce up to 640 horsepower in the Turbo S variant, launching from 0 to 60 mph in just 2.6 seconds. 
                </p>
                <div className="gtk-ep-image">
                    <img src="/images/engine.jpg" alt="" />
                </div>
            </div>
        </div>}
       {openSection === 'design' && <div className="gtk-expand-performance">
            <div className="gtk-ep-header">
                <h1>Design</h1>
                <div className="gtk_close" onClick={handleClose}>
                    <p>X</p>
                </div>
                
            </div>

            <div className="gtk-ep-subHeader">
                <h2>Timeless Design. <br /> Modern Mastery.</h2>
            </div>

            <div className="gtk-ep-description">
                <p>
                    The Porsche 911 is a perfect fusion of heritage and innovation. Its unmistakable silhouette, with flowing curves and a wide stance, has evolved over decades while staying true to its DNA. Every line is sculpted for both aesthetics and aerodynamics, enhancing speed and stability at high velocity. Signature elements like the sloping roofline, muscular rear haunches, and iconic round headlights make it instantly recognizable. 
                </p>
                <div className="gtk-ep-image">
                    <img src="/images/Porsche_aero.webp" alt="" />
                </div>
            </div>
        </div>}

        {openSection === 'aerodynamics' &&<div className="gtk-expand-performance">
            <div className="gtk-ep-header">
                <h1>Aerodynamcis</h1>
                <div className="gtk_close" onClick={handleClose}>
                    <p>X</p>
                </div>
                
            </div>

            <div className="gtk-ep-subHeader">
                <h2>Sculpted by Speed. <br /> Perfected by Air.</h2>
            </div>

            <div className="gtk-ep-description">
                <p> 
                    Every inch of the Porsche 911 is engineered for aerodynamic excellence. From its sleek, low-slung profile to its adaptive rear spoiler, every detail is designed to reduce drag and maximize downforce. Active aerodynamics, including variable cooling flaps and a retractable wing, optimize airflow for both     efficiency and stability at high speeds. 
                </p>
                <div className="gtk-ep-image">
                    <img src="/images/Porsche_yellow.jpg" alt="" />
                </div>
            </div>
        </div>}
        {openSection === 'speed' && <div className="gtk-expand-performance">
            <div className="gtk-ep-header">
                <h1>Speed</h1>
                <div className="gtk_close" onClick={handleClose}>
                    <p>X</p>
                </div>
                
            </div>

            <div className="gtk-ep-subHeader">
                <h2>Raw Speed. <br /> Unmatched Thrill.</h2>
            </div>

            <div className="gtk-ep-description">
                <p>
                    The twin-turbo flat-six delivers relentless acceleration, launching from 0 to 60 mph in just 2.6 seconds. Every component is fine-tuned for velocity, from the aerodynamic bodywork that slices through the air to the lightning-fast PDK transmission that keeps power flowing seamlessly. Whether on the autobahn or the racetrack, the 911 doesn’t just chase speed—it owns it. 
                </p>
                <div className="gtk-ep-image">
                    <img src="/images/Porsche_track.avif" alt="" />
                </div>
            </div>
        </div>}
      </motion.div>}
    </motion.div>
  )
}

export default GetToKnow
