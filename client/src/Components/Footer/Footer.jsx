import styles from './Footer.module.css'
import githubLogo from '../../assets/github-mark.svg'
import linkedinLogo from '../../assets/icons8-linkedin.svg'

const github = "https://github.com/Luuiskame"
const linkedin = "https://www.linkedin.com/in/luis-manzano-088635258"

import axios from 'axios'

const API_URL = import.meta.env.MODE === 'development' ? 'http://localhost:3001' : 'https://portafolio-backend-jet.vercel.app'

import { useState } from 'react'
const Footer = ()=>{
    const [successMessage, setSuccessMessage] = useState(false)
    
    const [mailInfo, setMailInfo] = useState({
        subject: '',
        from: '',
        text: ''
    })

    const [formErrors, setFormErrors] = useState({})
    
    const handleChange = (event)=>{
        const {name, value} = event.target
        setMailInfo({...mailInfo, [name]:value})
    }

    const validateForm = () => {
        const errors = {};
        if (!mailInfo.subject.trim()) {
            errors.subject = 'Subject is required';
        }
        if (!mailInfo.from.trim()) {
            errors.from = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(mailInfo.from)) {
            errors.from = 'Invalid email format';
        }
        if (!mailInfo.text.trim()) {
            errors.text = 'Message is required';
        } else if (mailInfo.text.length < 20) {
            errors.text = 'Message should be at least 20 characters long';
        } else if (mailInfo.text.length > 200) {
            errors.text = 'Message should not exceed 200 characters';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (event)=>{
        event.preventDefault()
        const isFormvalid = validateForm()

        if(isFormvalid){
            try {
                const response = await axios.post(`${API_URL}/send`, mailInfo)
                console.log("message sent", response.data, mailInfo)

                setSuccessMessage(true)
                setTimeout(()=>{
                    setSuccessMessage(false)
                },3000)
               
                //cleaning state
                setMailInfo({
                    subject: '',
                    from: '',
                    text: ''
                })
            } catch (error) {
                window.alert("error sending mail: ", error)
            }
        }
        
    }
    return(
        <footer className={styles.footer} id='footer'>

            <div className={styles.widthContainer}>

            <div className={styles.footerTextContainer}>
            <h2>Contact</h2>
            <p>Whether you're working on an exciting project or have a unique idea in mind, I'm here and ready to collaborate! so don't hesitate to contact me</p>
            </div>

            <form className={styles.footerForm} onSubmit={handleSubmit}>
                <label htmlFor="subject">subject</label>
                <input type="text" name="subject" value={mailInfo.subject} onChange={handleChange} placeholder='Your reason to contact me'/>
                {formErrors.subject && <span className={styles.error}>{formErrors.subject}</span>}

                <label htmlFor="from">email</label>
                <input type="text" name="from" value={mailInfo.from} onChange={handleChange} placeholder='example@yourmail.com'/>
                {formErrors.from && <span className={styles.error}>{formErrors.from}</span>}

                <label htmlFor="text">message</label>
                <textarea className={styles.messageInput} type="text" name='text' value={mailInfo.text} onChange={handleChange}/>
                {formErrors.text && <span className={styles.error}>{formErrors.text}</span>}

                <button type="submit">send message</button>
                {successMessage && (
                    <p className={`${styles.successMessageOff} ${styles.successMessage}`}>Emal sent succesfully</p>
                )}
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