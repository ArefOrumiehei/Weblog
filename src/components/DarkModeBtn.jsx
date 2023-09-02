import { useContext, useState } from 'react';

//Styles
import styles from '../Styles/DarkModeBtn.module.css';

//Contexts
import { DarkModeContext } from '../context/DarkModeProvider';

const DarkModeBtn = () => {
    const {darkMode , toggle} = useContext(DarkModeContext)
    const [isChecked , setIsChecked] = useState(darkMode)

    // const changeHandler = () => {
    //     setIsChecked(!darkMode)
    // }

    return (
        <div className={styles.checkboxWrapper}>
            <label className={styles.switch}>
                <input onClick={toggle} type='checkbox' onChange={e => {}} checked={darkMode} /> 
                <span className={styles.slider}></span>
            </label>
        </div>
    );
};

export default DarkModeBtn;