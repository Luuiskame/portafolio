import Header from "../Header/Header"
import Skills from "../Skills/Skills"

//? styles
import styles from './Main.module.css'
const Main = ()=>{
    return(
        <main className={styles.main}>
            <Header/>
            <Skills/>
        </main>
    )
}

export default Main