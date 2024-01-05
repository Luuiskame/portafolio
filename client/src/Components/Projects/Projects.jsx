
import styles from './Projects.module.css'

//Projects images
import EngPartner from '../../assets/ProjectsPictures/image.png'
import dogsAppPicture from '../../assets/ProjectsPictures/dogsApp.png'

const Projects = ()=>{
    return(
        <div className={styles.projectsMainContainer}>
            <div className={styles.titleAndContactBtnContainer}>
                <h1>Projects</h1>
                <button>Contact me</button>

            </div>
                
                <div className={styles.projectsContainer}>
                    <figure className={styles.projectContainer}>
                        <img src={EngPartner} alt="EngPartner app picture" />
                    </figure>

                    <figure className={styles.projectContainer}>
                        <img src={dogsAppPicture} alt="Dogs app picture" />
                    </figure>
                </div>
        </div>
    )
}

export default Projects