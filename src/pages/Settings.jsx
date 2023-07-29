import { useState } from 'react';
import styles from '../Styles/Settings.module.css';

import profile from "../assets/images/profilePic.jpg"
import profPlaceHold from '../assets/svgs/profilePlaceholder.svg'



import Sidebar from '../components/Sidebar'


const Settings = () => {

    const [pic , setPic] = useState(profile)

    const removeImgHandler = (e) => {
        e.preventDefault()
        setPic(null)
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPic(reader.result);
          };
          reader.readAsDataURL(file);
        }
    };

    const updateHandler = (e) => {
        e.preventDefault()

    }

    return (
        <div className={styles.settings}>
            <div className={styles.settingsWrapper}>
                <div className={styles.settingsTitle}>
                    <span className={styles.settingsUpdateTitle}>Update your account</span>
                    <span className={styles.settingsDeleteTitle}>Delete account</span>
                </div>
                <form className={styles.settingsForm}>
                    <div className={styles.settingsPP}>
                        {pic ? <img src={pic} alt="Profile picture" /> : <img src={profPlaceHold}/>}
                        <div className={styles.settingsIcons}>
                            <label htmlFor="fileInput">
                                <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.settingsPPIcon} ${styles.addImg}`} width="27" height="27" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M15 8h.01"></path>
                                    <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"></path>
                                    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"></path>
                                    <path d="M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54"></path>
                                    <path d="M16 19h6"></path>
                                    <path d="M19 16v6"></path>
                                </svg>
                            </label>
                            <button className={styles.deleteImgBtn} onClick={removeImgHandler}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.settingsPPIcon} ${styles.deleteImg}`} width="27" height="27" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M15 8h.01"></path>
                                    <path d="M13 21h-7a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7"></path>
                                    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3"></path>
                                    <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0"></path>
                                    <path d="M22 22l-5 -5"></path>
                                    <path d="M17 22l5 -5"></path>
                                </svg>
                            </button>
                        </div>
                        <input type='file' id='fileInput' style={{display:'none'}} onChange={handleImageChange}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Aref' />
                    <label>Email</label>
                    <input type="email" placeholder='aref@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className={styles.settingsSubmit} onClick={updateHandler}>Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    );
};

export default Settings;