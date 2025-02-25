import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/component/DropdownMenu.css"; // Add styling

const DropdownMenu = ({ items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="dropbtn">Contact</button>
      {open && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <Link key={index} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
