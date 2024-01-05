import Header from "../Header/Header"
import Skills from "../Skills/Skills"
import Projects from "../Projects/Projects"

//? styles
import styles from './Main.module.css'
const Main = ()=>{
    return(
        <main className={styles.main}>
            <Header/>
            <Skills/>
            <Projects/>
        </main>
    )
}

export default Main