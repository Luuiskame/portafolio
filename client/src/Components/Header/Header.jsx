import styles from "./Header.module.css";

import mainImage from "../../assets/ProjectsPictures/main-picture-portafolio.jpg";

// import cv from '../../assets/Luis-Manzano-CV.pdf'
import { useState } from "react";

const Header = () => {
  return (
    <header className={styles.header}>
      <figure className={styles.mainImageContainer}>
        <img src={mainImage} alt="" />
      </figure>

      <div className={styles.headerTextContainer}>
        <h1>
          Nice to meet you! I'm{" "}
          <span className={styles.h1Gradient}>Luis Manzano</span>
        </h1>
        <p>
          Based in Honduras, I'm a passionate individual enthusiastic about web
          development and responsive design. I have a keen interest in learning
          new technologies to continuously expand my skill set
        </p>

        <a href="#footer">
          <button>Contact me</button>
        </a>
      </div>

      <div className={styles.bottomLine}></div>
    </header>
  );
};

export default Header;
