
import styles from './Projects.module.css'

//Projects images
import EngPartner from '../../assets/ProjectsPictures/image.png'
import dogsAppPicture from '../../assets/ProjectsPictures/dogsApp.png'
import rickandmoryAppPicture from '../../assets/ProjectsPictures/rickAndMortyApp.png'
import rockScissorsPaperGameAppPicture from '../../assets/ProjectsPictures/RockScissorsAndPapersGameProject.png'

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

                        <h3>Chat app with real time translation</h3>
                        <div className={styles.projectBtnsContainer}>
                        <button>View Project</button>
                        <button>View Code</button>
                        </div>
                    </figure>

                    <figure className={styles.projectContainer}>
                        <img src={dogsAppPicture} alt="Dogs app picture" />

                        <h3>Dogs searcher app</h3>
                        <div className={styles.projectBtnsContainer}>
                        <button>View Project</button>
                        <button>View Code</button>
                        </div>
                    </figure>

                    <figure className={styles.projectContainer}>
                        <img src={rickandmoryAppPicture} alt="Dogs app picture" />

                        <h3>Rick And Morty searcher app</h3>
                        <div className={styles.projectBtnsContainer}>
                        <button>View Project</button>
                        <button>View Code</button>
                        </div>
                    </figure>

                    <figure className={styles.projectContainer}>
                        <img src={rockScissorsPaperGameAppPicture} alt="Dogs app picture" />

                        <h3>Rock Paper Scissors Game (vanilla js)</h3>
                        <div className={styles.projectBtnsContainer}>
                        <button>View Project</button>
                        <button>View Code</button>
                        </div>
                    </figure>
                </div>
        </div>
    )
}

export default Projects