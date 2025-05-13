import { useState } from "react";
import styles from "./MainHeader.module.css";
import githubLogo from "../../assets/github-mark.svg";
import linkedinLogo from "../../assets/icons8-linkedin.svg";

const github = "https://github.com/Luuiskame";
const linkedin = "https://www.linkedin.com/in/luis-manzano-088635258";

export default function MainHeader() {
  const [displayDownloadMessage, setDisplayDownloadMessage] = useState(false);

  const handleClick = () => {
    setDisplayDownloadMessage(true);
  };

  const cancelDownload = () => {
    setDisplayDownloadMessage(false);
  };

  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = "/Luis-Manzano-CV-frontend.pdf";
    link.download = "LuisManzanoCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDisplayDownloadMessage(false);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.imagesContainer}>
        <h3 onClick={handleClick}>Download CV</h3>

        <div className={styles.twoImagesContainer}>
          <figure className={`${styles.socialsContainer} ${styles.githubContainer}`}>
            <a href={github} target="_blank" rel="noreferrer">
              <img src={githubLogo} alt="github logo" />
            </a>
          </figure>

          <figure className={`${styles.socialsContainer} ${styles.linkedinContainer}`}>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <img src={linkedinLogo} alt="linkedin logo" />
            </a>
          </figure>
        </div>

        <div
          className={`
            ${styles.displayCardBase} 
            ${displayDownloadMessage ? styles.displayCardEnter : styles.displayCardExit}
          `}
        >
          <p>Are you sure you want to download Luis Manzano's CV?</p>

          <div className={styles.displayCardBtnsContainer}>
            <button onClick={cancelDownload}>Cancel</button>
            <button onClick={handleDownloadCv}>Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}
