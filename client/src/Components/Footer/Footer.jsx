import styles from './Footer.module.css'
import githubLogo from '../../assets/github-mark.svg'
import linkedinLogo from '../../assets/icons8-linkedin.svg'

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
                <img src={githubLogo} alt="github logo" />
                </figure>

                <figure className={styles.socialsContainer}>
                    <img src={linkedinLogo} alt="linkedin logo" />
                </figure>

                </div>

            </div>
            
            
        </footer>
    )
}

export default Footer