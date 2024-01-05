import styles from './Skills.module.css'

const Skills = ()=>{
    return(
        <div className={styles.skillsContainer}>
            <div className={styles.twoSkillsContainer}>
                <h2>HTMl</h2>
                <h2>CSS</h2>
            </div>

            <div className={styles.twoSkillsContainer}>
                <h2>Javscript</h2>
                <h2>React</h2>
            </div>

            <div className={styles.twoSkillsContainer}>
                <h2>Redux</h2>
            </div>

            <div className={styles.twoSkillsContainer}>
                <h2>Node.js</h2>
                <h2>Express</h2>
            </div>

            <div className={styles.twoSkillsContainer}>
                <h2>Sequelize</h2>
                <h2>Posgresql</h2>
            </div>
        </div>
    )
}

export default Skills