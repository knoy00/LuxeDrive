import "../styles/pages/GetToKnow.css";
import { motion, useInView } from "framer-motion";

function GetToKnow() {
  return (
    <div className="section-get-to-know">
      <div className="gtk_header">
        <h1>Get to know the 911</h1>
        <div className="gtk-flex-container">
            <div className="gtk-flex">
                <div className="gtk-card">
                    <h2>Performance</h2>
                    <p>
                        The Porsche 911 is built for speed. With an all-new 4.0L V8 engine
                    </p>
                    <div className="gtk-card-image">
                        <img src="/images/engine.jpg" alt="" />
                    </div>
                    
                </div>
                
                <div className="gtk-card">
                    <h2>Design</h2>
                    <p>
                        The 911 stays true to its classic design while continuously improving performance
                    </p>
                    <div className="gtk-card-image">
                        <img src="/images/Porsche_aero.webp" alt="" />
                    </div>
                    
                </div>

                <div className="gtk-card">
                    <h2>Aerodynamics </h2>
                    <p>
                        With Porsche’s advanced aerodynamics, the 911 delivers a smooth driving experience
                    </p>
                    <div className="gtk-card-image">
                        <img src="/images/Porsche_yellow.jpg" alt="" />
                    </div>
                    
                </div>

                <div className="gtk-card">
                    <h2>Speed</h2>
                    <p>
                        The Porsche 911 is built for speed. With an all-new 4.0L V8 engine
                    </p>
                    <div className="gtk-card-image">
                        <img src="/images/Porsche_track.avif" alt="" />
                    </div>
                    
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default GetToKnow
