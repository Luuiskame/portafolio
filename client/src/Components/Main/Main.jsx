import Header from "../Header/Header"
import Skills from "../Skills/Skills"
import Projects from "../Projects/Projects"
import Footer from "../Footer/Footer"

//? styles
import styles from './Main.module.css'
const Main = ()=>{
    return(
        <main className={styles.main}>
            <Header/>
            <Skills/>
            <Projects/>
            <Footer/>
        </main>
    )
}

export default Main