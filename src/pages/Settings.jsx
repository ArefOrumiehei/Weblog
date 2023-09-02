import { useState } from 'react';


//Styles
import styles from '../Styles/Settings.module.css';

//Photos
import profile from "../assets/images/profilePic.jpg"
import profPlaceHold from '../assets/svgs/profilePlaceholder.svg'


//Components
import Sidebar from '../components/Sidebar'
import { styled } from 'styled-components';

//Icons
import { IconPhotoPlus, IconPhotoX } from '@tabler/icons-react';


const SettingsDiv = styled.div `
    
    & #settingsTitle {
        color: ${({theme}) => theme.textSoft};
    }

    & #input {
        color: ${({theme}) => theme.textSoft};
    }
`

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
        <SettingsDiv className={styles.settings}>
            <div className={styles.settingsWrapper}>
                <div className={styles.settingsTitle}>
                    <span className={styles.settingsUpdateTitle} id='settingsTitle'>Update your account</span>
                    <span className={styles.settingsDeleteTitle}>Delete account</span>
                </div>
                <form className={styles.settingsForm}>
                    <div className={styles.settingsPP}>
                        {pic ? <img src={pic} alt="Profile picture" /> : <img src={profPlaceHold}/>}
                        <div className={styles.settingsIcons}>
                            <label htmlFor="fileInput">                                    
                                <IconPhotoPlus size={28} className={`${styles.settingsPPIcon} ${styles.addImg}`}/>
                            </label>
                            <button className={styles.deleteImgBtn} onClick={removeImgHandler}>
                                <IconPhotoX size={28} className={`${styles.settingsPPIcon} ${styles.deleteImg}`}/>
                            </button>
                        </div>
                        <input type='file' id='fileInput' style={{display:'none'}} onChange={handleImageChange}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Aref'  id='input' />
                    <label>Email</label>
                    <input type="email" placeholder='aref@gmail.com' id='input' />
                    <label>Password</label>
                    <input type="password" id='input' />
                    <button className={styles.settingsSubmit} onClick={updateHandler}>Update</button>
                </form>
            </div>
            <Sidebar/>
        </SettingsDiv>
    );
};

export default Settings;