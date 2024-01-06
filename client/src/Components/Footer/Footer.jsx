import styles from './Footer.module.css'
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
        </footer>
    )
}

export default Footer