import { FC } from "react";
import { motion } from "framer-motion";
import "./style.scss";

const Navbar: FC = () => {
  const navItems: string[] = ["Home", "About", "Projects", "Contact"];
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {navItems.map((item, index) => (
          <motion.li
            whileHover={{ color: "#e63900" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="navbar__item"
            key={index}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
