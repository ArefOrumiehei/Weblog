import { useContext } from 'react';

//Styles
import styles from '../Styles/DarkModeBtn.module.css';

//Contexts
import { DarkModeContext } from '../context/DarkModeProvider';

const DarkModeBtn = () => {
    const {toggle} = useContext(DarkModeContext)

    return (
        <div className={styles.checkboxWrapper}>
            <label className={styles.switch}>
                <input onClick={toggle} type='checkbox' /> 
                <span className={styles.slider}></span>
            </label>
        </div>
    );
};

export default DarkModeBtn;