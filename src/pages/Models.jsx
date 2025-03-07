import { useState } from "react";
import "../styles/pages/Models.css";

function Models() {

  const [isLoaded, setIsLoaded] = useState(false);
  
   return (
    <div className="models">
        <h1>Our Latest Models</h1>
      <div className="car_models_wrapper">
            <div className='car_model_1'>
                <p>The GT63 AMG</p>
            </div>

            <div className='car_model_2'>
                <p>The GT55 AMG</p>
            </div>

            <div className='car_model_3'>
                <p>The GT63 S</p>
            </div>
      </div>


    </div>
  )
}

export default Models
