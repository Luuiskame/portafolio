import styles from './Footer.module.css'
import githubLogo from '../../assets/github-mark.svg'
import linkedinLogo from '../../assets/icons8-linkedin.svg'

const github = "https://github.com/Luuiskame"
const linkedin = "https://www.linkedin.com/in/luis-manzano-088635258"

const Footer = ()=>{
    return(
        <footer className={styles.footer}>

            <div className={styles.widthContainer}>

            <div className={styles.footerTextContainer}>
            <h2>Contact</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, praesentium odio deserunt iusto impedit reprehenderit error distinctio non ratione ex culpa deleniti pariatur nam expedita ad ipsa nostrum modi inventore?</p>
            </div>

            <form className={styles.footerForm}>
                <label htmlFor="name">name</label>
                <input type="text" name="name"/>

                <label htmlFor="email">email</label>
                <input type="text" name="email"/>

                <label htmlFor="message">message</label>
                <input className={styles.messageInput} type="text" name='message' />

                <button type="submit">send message</button>
            </form>
            
            <div className={styles.bottomLine}></div>

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
            
            
        </footer>
    )
}

export default Footer