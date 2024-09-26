import styles from "./Projects.module.css";

//Projects images
import EngPartner from "../../assets/ProjectsPictures/image.png";
import dogsAppPicture from "../../assets/ProjectsPictures/dogsappv3.webp";
import rickandmoryAppPicture from "../../assets/ProjectsPictures/rickAndMortyApp.png";
import rockScissorsPaperGameAppPicture from "../../assets/ProjectsPictures/RockScissorsAndPapersGameProject.png";
import pawpalPicture from "../../assets/ProjectsPictures/pawpal.webp";

const projects = [
  {
    name: "Pawpal Community",
    githubUrl: "https://github.com/Pawpal-community/Pawpal-web",
    deployUrl: "https://pawpalcommunity.vercel.app/login",
    picture: pawpalPicture,
    description:
      "Pawpal is a social community platform for pet lovers, and its full responsive!",
      welcomeAccount: { email: "testtest01@gmail.com", password: "usertest001" },
  },
  {
    name: "EngPartner",
    githubUrl: "https://github.com/Luuiskame/EngPartnerV2",
    deployUrl: "https://engpartner-aa0ce.web.app/",
    picture: EngPartner,
    description:
      "Platform designed to connect language learners. It features real-time chat translation",
    welcomeAccount: { email: "akaluis91@gmail.com", password: "hola12345" },
  },
  // {
  //   name: "Rock Paper Scissors Game",
  //   githubUrl: "https://github.com/Luuiskame/rock-paper-scissors-game",
  //   deployUrl: "https://luuiskame.github.io/rock-paper-scissors-game/",
  //   picture: rockScissorsPaperGameAppPicture,
  //   description: "A simple Rock-Paper-Scissors game built using web technologies, where users can play against the computer with a modern UI."
  // },
  {
    name: "Dogs App",
    githubUrl: "https://github.com/Luuiskame/DogsAppv3",
    deployUrl: "https://dogs-appv3-r3yj.vercel.app/",
    picture: dogsAppPicture,
    description:
      "Dogs App allows users to search, filter, and view detailed information about various dog breeds.",
  },
  {
    name: "Rick and Morty App",
    githubUrl: "https://github.com/Luuiskame/RickAndMortyApp",
    deployUrl: "https://rick-and-morty-app-frontend.vercel.app/",
    picture: rickandmoryAppPicture,
    description:
      "App that fetches and displays character information with filtering, favorites and searching features.",
  },
];

const Projects = () => {
  return (
    <div className={styles.projectsMainContainer}>
      <div className={styles.titleAndContactBtnContainer}>
        <h1>Projects</h1>
        <a href="#footer">
          <button>Contact me</button>
        </a>
      </div>

      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <figure key={project.name} className={styles.projectContainer}>
            <img src={project.picture} alt="EngPartner app picture" />

            <h3>{project.description}</h3>
            {project.welcomeAccount && (
              <div className={styles.welcomeAccount}>
                <p>
                  Demo account:
                </p>
                <div className={styles.dataContainer}>
                <p>Email: {project.welcomeAccount.email}</p>
                <p>Password: {project.welcomeAccount.password}</p>
                </div>
              </div>
            )}
            <div className={styles.projectBtnsContainer}>
              <button>
                <a href={project.deployUrl} target="_blank">
                  Live demo
                </a>
              </button>
              <button>
                <a href={project.githubUrl} target="_blank">
                  Source code
                </a>
              </button>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Projects;
