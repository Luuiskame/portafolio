import styles from './Header.module.css'

import githubLogo from '../../assets/github-mark.svg'
import linkedinLogo from '../../assets/icons8-linkedin.svg'
import mainImage from '../../assets/design/main-picture-portafolio.jpg'

const Header = ()=>{
    return(
        <header className={styles.header}>
            <div className={styles.imagesContainer}>
                <figure className={styles.socialsContainer}>
                <img src={githubLogo} alt="github logo" />
                </figure>

                <figure className={styles.socialsContainer}>
                    <img src={linkedinLogo} alt="linkedin logo" />
                </figure>
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