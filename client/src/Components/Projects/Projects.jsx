import styles from "./Projects.module.css";

//Projects images
import infinitifyAppPicture from "../../assets/ProjectsPictures/infinify.png";
import rickandmoryAppPicture from "../../assets/ProjectsPictures/rickAndMortyApp.png";
import hontechPicture from "../../assets/ProjectsPictures/hontech.png";
import pawpalPicture from "../../assets/ProjectsPictures/pawpal.webp";

const projects = [
  {
    name: "infinify",
    githubUrl: "https://github.com/Luuiskame/Infinify",
    deployUrl: "https://infinify-v1.vercel.app/",
    picture: infinitifyAppPicture,
    description:
      "Social media platform for Music lovers, where users can create and share playlists, send messages and compare music taste, and discover new music.",
    // welcomeAccount: { email: "akaluis91@gmail.com", password: "hola12345" },
  },
  {
    name: "Pawpal Community",
    githubUrl: "https://github.com/Pawpal-community/Pawpal-web",
    deployUrl: "https://pawpalcommunity.vercel.app/login",
    picture: pawpalPicture,
    description:
      "Pawpal is a social community platform for pet lovers, and its full responsive!",
      welcomeAccount: { email: "testtest01@gmail.com", password: "Test00111" },
  },
  {
    name: "Hontech",
    githubUrl: "https://github.com/Luuiskame/DogsAppv3",
    deployUrl: "https://dogs-appv3-r3yj.vercel.app/",
    picture: hontechPicture,
    description:
      "Landing page for a technology company, with a modern design, ultrafast and responsive layout.",
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
            <h2 className={styles.projectTitle}>{project.name}</h2>
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
