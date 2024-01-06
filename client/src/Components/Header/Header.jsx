import styles from './Header.module.css'

import githubLogo from '../../assets/github-mark.svg'
import linkedinLogo from '../../assets/icons8-linkedin.svg'
import mainImage from '../../assets/ProjectsPictures/main-picture-portafolio.jpg'

// socials 
const github = "https://github.com/Luuiskame"
const linkedin = "https://www.linkedin.com/in/luis-manzano-088635258"

const Header = ()=>{
    return(
        <header className={styles.header}>
            <div className={styles.imagesContainer}>
                <h3>Resume</h3>
                
                <div className={styles.twoImagesContainer}>
                <figure className={styles.socialsContainer}>
                <a href={github} target='_blank'>
                <img src={githubLogo} alt="github logo" />
                </a>
                </figure>

                <figure className={styles.socialsContainer}>
                <a href={linkedin} target='_blank'>
                    <img src={linkedinLogo} alt="linkedin logo" />
                    </a>
                </figure>

                </div>
                
            </div>

            <figure className={styles.mainImageContainer}>
                <img src={mainImage} alt="" />
            </figure>

            <div className={styles.headerTextContainer}>
            <h1>Nice to meet you! I'm <span className={styles.h1Gradient}>Luis Manzano</span></h1>
            <p>Based in Honduras, I'm a passionate individual enthusiastic about web development and responsive design. I have a keen interest in learning new technologies to continuously expand my skill set</p>

            <button>Contact me</button>
            </div>

            <div className={styles.bottomLine}></div>
        </header>
    )
}

export default Header