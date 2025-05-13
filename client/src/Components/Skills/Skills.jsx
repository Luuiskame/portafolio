import styles from './Skills.module.css'

const Skills = ()=>{
    const frontendSkills = ["React", "Nextjs", "Astro", "CSS", "Typescript", "Redux", "tailwind", "Git"];
  
  // Backend and database skills
  const backendSkills = ["Node.js", "Express", "Supabase", "Web sockets", "Sequelize", "PostgreSQL", "Firebase"];
    return(
        <div className={styles.skillsContainer}>
            <div className={styles.frontendSkills}>
                {frontendSkills.map((skill, index) => (
                    <h2 key={index}>{skill}</h2>
                ))}
            </div>

            <div className={styles.backendAndDatabaseSkills}>
                {backendSkills.map((skill, index) => (
                    <h2 key={index}>{skill}</h2>
                ))}
            </div>

            <div className={styles.bottomLine}></div>
        </div>
    )
}

export default Skills