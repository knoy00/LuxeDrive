import { useState } from 'react'
import '../styles/pages/Signup.css'
import { motion, AnimatePresence } from 'framer-motion'


function Signup() {
  return (
    <div className='signup_container'>
        <div className="signup_left">
            <div className="signup_image">
                <img src="/images/Porsche_911.webp" alt="" />
            </div>
        </div>
        <div className="signup_right">
            <div className="signup_form">
                <h1>Sign up</h1>
                <form action="" method="post">
                    <input type="text" placeholder='Full Name' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="password" placeholder='Confirm Password' />
                    <div className="signup_terms">
                        <input type="checkbox" id="terms" name="terms" />
                        <label htmlFor="terms">I agree to the terms and conditions</label>
                    </div>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Signup
