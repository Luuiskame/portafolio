import styles from './Footer.module.css'
import githubLogo from '../../assets/github-mark.svg'
import linkedinLogo from '../../assets/icons8-linkedin.svg'

const Footer = ()=>{
    return(
        <footer>
            <h2>Contact</h2>

            <form>
                <label htmlFor="name">name</label>
                <input type="text" name="name"/>

                <label htmlFor="email">email</label>
                <input type="text" name="email"/>

                <label htmlFor="message">message</label>
                <input type="text" />

                <button type="submit">send message</button>
            </form>
            
            <div className={styles.bottomLine}></div>

            <div className={styles.twoImagesContainer}>
                <figure className={styles.socialsContainer}>
                <img src={githubLogo} alt="github logo" />
                </figure>

                <figure className={styles.socialsContainer}>
                    <img src={linkedinLogo} alt="linkedin logo" />
                </figure>

                </div>
            
        </footer>
    )
}

export default Footer