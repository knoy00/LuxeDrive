
import '../styles/pages/Signup.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react';


const Signup = () => {
  const [activeTab, setActiveTab] = useState(0); // Default active tab index

  const tabs = ["Option 1", "Option 2", "Option 3"];

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          style={{
            padding: "10px 20px",
            border: "1px solid black",
            cursor: "pointer",
            backgroundColor: activeTab === index ? "white" : "gray",
            color: activeTab === index ? "black" : "white",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Signup;

