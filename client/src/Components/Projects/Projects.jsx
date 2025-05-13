import styles from "./Projects.module.css";

//Projects images
import infinitifyAppPicture from "../../assets/ProjectsPictures/infinify.png";
import modelsPublicidadAppPicture from "../../assets/ProjectsPictures/models-publicidad.png";
import hontechPicture from "../../assets/ProjectsPictures/hontech.png";
import miRinconcito from "../../assets/ProjectsPictures/mi-rinconcitov2.png";


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
    name: "Models Publicidad",
    githubUrl: "https://github.com/Pawpal-community/Models-publicidad",
    deployUrl: "https://modelspublicidad.com/",
    picture: modelsPublicidadAppPicture,
    description:
      "Landing page for a company in Honduras that has a wide variety of models for advertising and brand promotion. With custom catalog and ultrafast loading.",
  },
  {
    name: "Mi Rinconcito",
    githubUrl: "https://github.com/Luuiskame/Mi-riconcito",
    deployUrl: "https://mi-rinconcito.netlify.app/en/",
    picture: miRinconcito,
    description:
      "Bilingual Website for a agency that helps teachers with resources and tools to teach.",
  },
  {
    name: "Hontech",
    githubUrl: "https://github.com/Pawpal-community/oLSolutions-Landing-pagev2",
    deployUrl: "https://hontechn.com/",
    picture: hontechPicture,
    description:
      "Bilingual Landing page for a technology company, with a modern design, ultrafast and responsive layout.",
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
