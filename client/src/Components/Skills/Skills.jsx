import styles from './Skills.module.css'

const Skills = ()=>{
    return(
        <div className={styles.skillsContainer}>
            <div className={styles.frontendSkills}>
                <h2>React</h2>
                <h2>NextJs</h2>
                <h2>CSS</h2>
                <h2>Tailwind</h2>
                <h2>Typescript</h2>
                <h2>Redux toolkit</h2>
                <h2>Astro</h2>
                <h2>Git</h2>
            </div>

            <div className={styles.backendAndDatabaseSkills}>
                <h2>Node.js</h2>
                <h2>Express</h2>
                <h2>Web sockets</h2>
                <h2>Supabase</h2>
                <h2>Sequelize</h2>
                <h2>PostgreSQL</h2>
                <h2>Firebase</h2>
                <h2>Redis</h2>
            </div>

            <div className={styles.bottomLine}></div>
        </div>
    )
}

export default Skills