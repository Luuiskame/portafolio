
import styles from './Projects.module.css'

//Projects images
import EngPartner from '../../assets/ProjectsPictures/image.png'
import dogsAppPicture from '../../assets/ProjectsPictures/dogsAppV2.png'
import rickandmoryAppPicture from '../../assets/ProjectsPictures/rickAndMortyApp.png'
import rockScissorsPaperGameAppPicture from '../../assets/ProjectsPictures/RockScissorsAndPapersGameProject.png'

const EngPartnerUrl = "https://github.com/Luuiskame/EngPartnerV2"
const EngPartnerDeploy = "https://engpartner-aa0ce.web.app/"

const rockGameUrl = "https://github.com/Luuiskame/rock-paper-scissors-game"
const rockGameDeploy = "https://luuiskame.github.io/rock-paper-scissors-game/"

const dogsAppUrl = "https://github.com/Luuiskame/DogsAppv3"
const dogsAppDeploy = "https://dogs-appv3-r3yj.vercel.app/"

const rickUrl = "https://github.com/Luuiskame/RickAndMortyApp"
const rickDeploy = ""



const Projects = ()=>{
    return(
        <div className={styles.projectsMainContainer}>
            <div className={styles.titleAndContactBtnContainer}>
                <h1>Projects</h1>
                <a href="#footer">
                <button>Contact me</button>
                </a>

            </div>
                
                <div className={styles.projectsContainer}>
                    
                    <figure className={styles.projectContainer}>
                        <img src={EngPartner} alt="EngPartner app picture" />

                        <h3>Chat app with real time translation</h3>
                        <div className={styles.projectBtnsContainer}>
                        <button><a href={EngPartnerDeploy} target='_blank'>View Project</a></button>
                        <button><a href={EngPartnerUrl} target='_blank'>View Code</a></button>
                        </div>
                    </figure>

                    <figure className={styles.projectContainer}>
                        <img src={dogsAppPicture} alt="Dogs app picture" />

                        <h3>Dogs searcher app</h3>
                        <div className={styles.projectBtnsContainer}>
                        <button><a href={dogsAppDeploy} target='_blank'>View Project</a></button>
                        <button><a href={dogsAppUrl} target='_blank'>View Code</a></button>
                        </div>
                    </figure>

                    <figure className={styles.projectContainer}>
                        <img src={rickandmoryAppPicture} alt="Dogs app picture" />

                        <h3>Rick And Morty searcher app</h3>
                        <div className={styles.projectBtnsContainer}>
                        <button><a href={rickDeploy} target='_blank'>View Project</a></button>
                        <button><a href={rickUrl} target='_blank'>View Code</a></button>
                        </div>
                    </figure>

                    <figure className={styles.projectContainer}>
                        <img src={rockScissorsPaperGameAppPicture} alt="Dogs app picture" />

                        <h3>Rock Paper Scissors Game (vanilla js)</h3>
                        <div className={styles.projectBtnsContainer}>
                        <button><a href={rockGameDeploy} target='_blank'>View Project</a></button>
                        <button><a href={rockGameUrl} target='_blank'>View Code</a></button>
                        </div>
                    </figure>
                </div>
        </div>
    )
}

export default Projects