import styles from './Footer.module.css'
import githubLogo from '../../assets/github-mark.svg'
import linkedinLogo from '../../assets/icons8-linkedin.svg'

const github = "https://github.com/Luuiskame"
const linkedin = "https://www.linkedin.com/in/luis-manzano-088635258"

import axios from 'axios'

const API_URL = "http://localhost:3001"

import { useState } from 'react'
const Footer = ()=>{
    
    const [mailInfo, setMailInfo] = useState({
        subject: '',
        from: '',
        text: ''
    })
    
    const handleChange = (event)=>{
        const {name, value} = event.target
        setMailInfo({...mailInfo, [name]:value})
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        try {
            const response = await axios.post(`${API_URL}/send`, mailInfo)
            console.log("message sent", response.data, mailInfo)
            setMailInfo({
                subject: '',
                from: '',
                text: ''
            })
        } catch (error) {
            window.alert("error sending mail: ", error)
        }
    }
    return(
        <footer className={styles.footer}>

            <div className={styles.widthContainer}>

            <div className={styles.footerTextContainer}>
            <h2>Contact</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, praesentium odio deserunt iusto impedit reprehenderit error distinctio non ratione ex culpa deleniti pariatur nam expedita ad ipsa nostrum modi inventore?</p>
            </div>

            <form className={styles.footerForm} onSubmit={handleSubmit}>
                <label htmlFor="subject">subject</label>
                <input type="text" name="subject" value={mailInfo.subject} onChange={handleChange}/>

                <label htmlFor="from">email</label>
                <input type="text" name="from" value={mailInfo.from} onChange={handleChange}/>

                <label htmlFor="text">message</label>
                <input className={styles.messageInput} type="text" name='text' value={mailInfo.text} onChange={handleChange}/>

                <button type="submit">send message</button>
            </form>
            
            <div className={styles.bottomLine}></div>

            <div className={styles.twoImagesContainer}>
                <figure className={styles.socialsContainer}>
                <a href={github} target='_blank'>
                <img src={githubLogo} alt="github logo" />
                </a>
                </figure>

                <figure className={styles.socialsContainer}>
                <a href={linkedin} target='_blank'>
                    <img src={linkedinLogo} alt="linkedin logo" />
                    </a>
                </figure>

                </div>

            </div>
            
            
        </footer>
    )
}

export default Footer