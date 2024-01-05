
import styles from './Projects.module.css'

const Projects = ()=>{
    return(
        <div className={styles.projectsMainContainer}>
            <div className={styles.titleAndContactBtnContainer}>
                <h1>Projects</h1>
                <button>Contact me</button>
            </div>
        </div>
    )
}

export default Projects