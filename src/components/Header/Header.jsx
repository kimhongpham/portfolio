import React from "react";
import styles from "./Header.module.css";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

const Header = ({ activeSection }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Kim Hong Pham</div>
      <nav className={styles.nav}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? styles.active : ""}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header; 