import React from 'react';
import styles from './Hero.module.css';
import profileImage from '../../assets/images/profile.jpg';
import { SocialIcons } from '../Footer/Footer';

export const AboutSection = () => (
  <section id="about" className={styles.aboutSection}>
    <h3>About Me</h3>
    <p>
      I am proficient in Java and C#, with a strong backend. I built the entire backend for two memorable projects: an ATM system and a game management system. What I am proud of is not the complex functionality, but the ability to control user data through login sessions – an important step in real-world data management.
    </p>

    <p>
      Although I am strong in backend, I love frontend because of the ability to create vivid user experiences. Besides technical skills, I often take on the role of team leader: presenting, dividing tasks and ensuring deadlines are always met. My team's projects all scored above 9, despite the strictness of the lecturer.
    </p>

    <p>
      I believe that curiosity, discipline and communication skills are the foundation for a programmer to constantly improve – and that is the journey I am pursuing every day.
    </p>
  </section>
);

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <a
        href="https://www.linkedin.com/in/kimhongpham/"
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={0}
        aria-label="Visit my LinkedIn profile"
      >
        <img
          src={profileImage}
          alt="Kim Hong Pham - FullStack Software Engineer"
          className={styles.avatar}
        />
      </a>
      <div className={styles.heroContent}>
        <h1>Hi,</h1>
        <h2>I'm Kim Hong Pham (Rosie)</h2>
        <p>
          "I develop scalable, responsive full-stack applications, combining sleek user interfaces with powerful backend logic and efficient database design."
        </p>
        <SocialIcons />
      </div>
    </section>
  );
};

export default Hero;